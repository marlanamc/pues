/**
 * Ink model — handwritten strokes captured from a stylus (Apple Pencil) or a
 * fingertip, stored as vectors rather than a flattened image.
 *
 * Vectors, specifically, because ink has to re-render in `--ink` under all
 * seven palettes. A baked dark-ink bitmap would be invisible on Papel; a
 * stroke list is just geometry, and the colour is decided at paint time.
 *
 * Coordinates are plain CSS pixels inside the box the drawing was authored in
 * (`w` × `h`). Replay scales uniformly by `targetWidth / w`, so a line written
 * on a 12.9" iPad still reads correctly in a narrow review list.
 */

export type InkPoint = {
  x: number;
  y: number;
  /** Stylus pressure, 0–1. Devices that report nothing are normalised to 0.5. */
  p: number;
};

export type InkStroke = InkPoint[];

export type InkDrawing = {
  /** Authoring box width in CSS px. */
  w: number;
  /** Authoring box height in CSS px. */
  h: number;
  strokes: InkStroke[];
};

/** Nib width in CSS px at the authoring scale, before pressure is applied. */
export const INK_BASE_WIDTH = 2.1;

/** Pressure reported as exactly 0 means "this device has no sensor". */
export function normalizePressure(pressure: number): number {
  if (!Number.isFinite(pressure) || pressure <= 0) return 0.5;
  return Math.min(1, pressure);
}

/** Keeps stored drawings small — sub-pixel precision is not perceptible. */
export function roundPoint(x: number, y: number, p: number): InkPoint {
  return {
    x: Math.round(x * 10) / 10,
    y: Math.round(y * 10) / 10,
    p: Math.round(normalizePressure(p) * 100) / 100,
  };
}

export function emptyDrawing(w: number, h: number): InkDrawing {
  return { w, h, strokes: [] };
}

export function strokeCount(drawing: InkDrawing | null | undefined): number {
  return drawing?.strokes.length ?? 0;
}

export function isEmpty(drawing: InkDrawing | null | undefined): boolean {
  return strokeCount(drawing) === 0;
}

/** Drops the most recent stroke. Returns a new drawing; never mutates. */
export function undoStroke(drawing: InkDrawing): InkDrawing {
  return { ...drawing, strokes: drawing.strokes.slice(0, -1) };
}

/* ---------- Runtime validation ---------- */
// Persisted ink can drift the same way persisted JSON does (old schema, a
// partial write, a hand-edited store), so it is validated on the way out.

function isPoint(v: unknown): v is InkPoint {
  return (
    typeof v === "object" &&
    v !== null &&
    typeof (v as InkPoint).x === "number" &&
    typeof (v as InkPoint).y === "number" &&
    typeof (v as InkPoint).p === "number"
  );
}

export function isInkDrawing(v: unknown): v is InkDrawing {
  if (typeof v !== "object" || v === null) return false;
  const d = v as InkDrawing;
  return (
    typeof d.w === "number" &&
    d.w > 0 &&
    typeof d.h === "number" &&
    d.h > 0 &&
    Array.isArray(d.strokes) &&
    d.strokes.every((s) => Array.isArray(s) && s.every(isPoint))
  );
}

/* ---------- Painting ---------- */

function mid(a: InkPoint, b: InkPoint): { x: number; y: number } {
  return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
}

function widthFor(p: number): number {
  // A gentle response curve: light contact still leaves a readable line, hard
  // contact roughly doubles it. Anything more dramatic reads as a marker pen.
  return INK_BASE_WIDTH * (0.55 + 0.9 * p);
}

export type DrawInkOptions = {
  /** Uniform scale applied to stored coordinates (target width / drawing.w). */
  scale?: number;
  /** Any canvas colour; callers pass the resolved `--ink` for the live theme. */
  color: string;
};

/**
 * Paints a drawing onto a 2D context. Strokes are drawn segment by segment so
 * each one can carry its own pressure-derived width — a single path could only
 * have one. Segments are quadratics through the midpoints, which is what stops
 * fast handwriting from looking like a polygon.
 *
 * The caller owns the transform: this draws in the drawing's own coordinates
 * multiplied by `scale`, and does not clear the canvas.
 */
export function drawInk(
  ctx: CanvasRenderingContext2D,
  drawing: InkDrawing,
  { scale = 1, color }: DrawInkOptions,
): void {
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  for (const stroke of drawing.strokes) {
    if (stroke.length === 0) continue;

    // A tap with no travel still deserves a mark — a dot on an i, a tilde.
    if (stroke.length === 1) {
      const only = stroke[0];
      ctx.beginPath();
      ctx.arc(only.x * scale, only.y * scale, (widthFor(only.p) * scale) / 2, 0, Math.PI * 2);
      ctx.fill();
      continue;
    }

    let from: { x: number; y: number } = stroke[0];
    for (let i = 1; i < stroke.length; i++) {
      const control = stroke[i - 1];
      const to = i === stroke.length - 1 ? stroke[i] : mid(control, stroke[i]);
      ctx.beginPath();
      ctx.moveTo(from.x * scale, from.y * scale);
      ctx.quadraticCurveTo(control.x * scale, control.y * scale, to.x * scale, to.y * scale);
      ctx.lineWidth = widthFor((control.p + stroke[i].p) / 2) * scale;
      ctx.stroke();
      from = to;
    }
  }
}

/**
 * Re-fits a drawing into a differently sized box — an orientation change, or a
 * narrower review card. The scale is taken from the width alone so letterforms
 * keep their proportions; stretching x and y independently would turn
 * handwriting into a caricature of itself.
 */
export function rescaleDrawing(drawing: InkDrawing, w: number, h: number): InkDrawing {
  if (drawing.w === w && drawing.h === h) return drawing;
  const scale = drawing.w > 0 ? w / drawing.w : 1;
  return {
    w,
    h,
    strokes: drawing.strokes.map((stroke) =>
      stroke.map((pt) => roundPoint(pt.x * scale, pt.y * scale, pt.p)),
    ),
  };
}
