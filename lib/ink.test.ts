import { describe, expect, it } from "vitest";
import {
  emptyDrawing,
  isEmpty,
  isInkDrawing,
  normalizePressure,
  rescaleDrawing,
  roundPoint,
  strokeCount,
  undoStroke,
  type InkDrawing,
} from "./ink";

const drawing = (): InkDrawing => ({
  w: 400,
  h: 100,
  strokes: [
    [
      { x: 10, y: 20, p: 0.5 },
      { x: 30, y: 40, p: 0.8 },
    ],
    [{ x: 100, y: 50, p: 0.2 }],
  ],
});

describe("normalizePressure", () => {
  it("treats a missing sensor (0) as a middling press", () => {
    // Mice and most fingers report exactly 0; drawing at width 0 is invisible.
    expect(normalizePressure(0)).toBe(0.5);
    expect(normalizePressure(NaN)).toBe(0.5);
    expect(normalizePressure(-1)).toBe(0.5);
  });

  it("passes real stylus pressure through, clamped to 1", () => {
    expect(normalizePressure(0.25)).toBe(0.25);
    expect(normalizePressure(3)).toBe(1);
  });
});

describe("roundPoint", () => {
  it("keeps a tenth of a pixel and a hundredth of pressure", () => {
    expect(roundPoint(10.06, 20.04, 0.333)).toEqual({ x: 10.1, y: 20, p: 0.33 });
  });
});

describe("strokeCount / isEmpty / undoStroke", () => {
  it("counts strokes and reports emptiness", () => {
    expect(strokeCount(drawing())).toBe(2);
    expect(isEmpty(drawing())).toBe(false);
    expect(isEmpty(emptyDrawing(10, 10))).toBe(true);
    expect(isEmpty(null)).toBe(true);
  });

  it("drops only the last stroke, without mutating", () => {
    const before = drawing();
    const after = undoStroke(before);
    expect(after.strokes).toHaveLength(1);
    expect(before.strokes).toHaveLength(2);
    expect(after.w).toBe(before.w);
  });
});

describe("rescaleDrawing", () => {
  it("scales uniformly from the width so letterforms keep shape", () => {
    const scaled = rescaleDrawing(drawing(), 200, 50);
    expect(scaled.w).toBe(200);
    expect(scaled.h).toBe(50);
    // Both axes take the width ratio (0.5) — not 0.5 across and 0.5 down by
    // coincidence: y must follow x even when the box height changes otherwise.
    expect(scaled.strokes[0][1]).toEqual({ x: 15, y: 20, p: 0.8 });
  });

  it("is a no-op when the box has not moved", () => {
    const d = drawing();
    expect(rescaleDrawing(d, 400, 100)).toBe(d);
  });

  it("survives a zero-width source without dividing by zero", () => {
    const degenerate: InkDrawing = { w: 0, h: 0, strokes: [[{ x: 5, y: 5, p: 1 }]] };
    expect(rescaleDrawing(degenerate, 100, 50).strokes[0][0]).toEqual({ x: 5, y: 5, p: 1 });
  });
});

describe("isInkDrawing", () => {
  it("accepts a well-formed drawing", () => {
    expect(isInkDrawing(drawing())).toBe(true);
    expect(isInkDrawing(emptyDrawing(10, 10))).toBe(true);
  });

  it("rejects drifted or hand-edited data", () => {
    expect(isInkDrawing(null)).toBe(false);
    expect(isInkDrawing({ w: 0, h: 10, strokes: [] })).toBe(false);
    expect(isInkDrawing({ w: 10, h: 10 })).toBe(false);
    expect(isInkDrawing({ w: 10, h: 10, strokes: [[{ x: 1, y: 2 }]] })).toBe(false);
    expect(isInkDrawing({ w: 10, h: 10, strokes: [{ x: 1 }] })).toBe(false);
  });
});
