"use client";

/**
 * InkLine — an empty ruled page you write the whole phrase onto.
 *
 * Deliberately blank. The stem is shown on the prompt card above and nowhere
 * else, so copying it out is part of the exercise rather than something the
 * interface does for you — which is the same reason La semana asks you to
 * "Copia los tallos" onto paper. Nothing is checked; the strokes are kept as
 * your own record.
 *
 * Input is a stylus or a fingertip via Pointer Events. Two details matter on an
 * iPad and are easy to get wrong:
 *
 *  - **Palm rejection.** Once a pen has been seen, touch pointers stop drawing
 *    for the rest of the session, so a hand resting on the glass leaves nothing
 *    behind. Finger drawing still works for anyone who never picks up a pencil.
 *  - **Sample rate.** Apple Pencil samples far faster than the browser fires
 *    `pointermove`, so `getCoalescedEvents()` is drained on every move. Without
 *    it, quick handwriting comes out as visible straight segments.
 *
 * Keyboard users are served by the typed textarea this sits beside, not by the
 * canvas — a drawing surface has no keyboard equivalent, so the toggle that
 * chooses between them is the accessible path and stays reachable.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import {
  drawInk,
  emptyDrawing,
  isEmpty,
  rescaleDrawing,
  roundPoint,
  strokeCount,
  undoStroke,
  type InkDrawing,
  type InkPoint,
} from "@/lib/ink";

/**
 * Whether a stylus has ever touched this app. Module-level on purpose: it must
 * survive remounting between rounds, or the palm that was rejected on frase 1
 * starts drawing again on frase 2.
 */
let penSeen = false;

export const RULE_HEIGHT = 44;
/**
 * Rule count when the line is a fixed size. Stretching lines (`grow`) treat it
 * as a floor instead and take whatever height their column offers — an iPad in
 * portrait yields a page you can write a few lines on — never shrinking below
 * this, which is enough for a whole phrase on the smallest phone.
 */
const DEFAULT_RULES = 4;
const PAD_TOP = 10;
/**
 * Room below the last rule. Without it a one-rule line puts its baseline
 * exactly on the bottom border, hiding the only thing you write on.
 */
const PAD_BOTTOM = 10;

/** The height a line of `rules` rules occupies, for anything that must match it. */
export function inkLineHeight(rules: number): number {
  return RULE_HEIGHT * rules + PAD_TOP + PAD_BOTTOM;
}

function inkColor(el: HTMLElement): string {
  return getComputedStyle(el).getPropertyValue("--ink").trim() || "#efe5d2";
}

export function InkLine({
  stem,
  value,
  onChange,
  rules = DEFAULT_RULES,
  grow = false,
  showTools = true,
  bare = false,
}: {
  stem: string;
  value: InkDrawing | null;
  onChange: (next: InkDrawing) => void;
  /** How many ruled lines tall. A floor rather than a fixed height when `grow`. */
  rules?: number;
  /**
   * Fill the height the column offers. Right for a full-page writing surface,
   * wrong for a stack of lines on a sheet — there they would each fight for
   * the same space.
   */
  grow?: boolean;
  /** Off when the surrounding surface supplies its own undo/clear. */
  showTools?: boolean;
  /**
   * Drop the card — no border, no fill, just the rule. Paper does not put a
   * box around every line, and on a sheet the box's bottom edge sits close
   * enough to the baseline that the two read as one thick smudge.
   */
  bare?: boolean;
}) {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [size, setSize] = useState<{ w: number; h: number } | null>(null);

  // The live stroke lives in a ref, not state: it changes on every pointer
  // sample and painting it through React would drop points on the floor.
  // Committed strokes stay in `value` — they only change on pointer-up.
  const activeRef = useRef<InkPoint[] | null>(null);

  const minHeight = inkLineHeight(rules);

  const repaint = useCallback(() => {
    const canvas = canvasRef.current;
    const box = boxRef.current;
    if (!canvas || !box || !size) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    if (canvas.width !== Math.round(size.w * dpr) || canvas.height !== Math.round(size.h * dpr)) {
      canvas.width = Math.round(size.w * dpr);
      canvas.height = Math.round(size.h * dpr);
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, size.w, size.h);

    const color = inkColor(box);
    if (value) drawInk(ctx, value, { color });

    const active = activeRef.current;
    if (active && active.length > 0) {
      drawInk(ctx, { w: size.w, h: size.h, strokes: [active] }, { color });
    }
  }, [size, value]);

  // A stable handle for listeners that must not re-subscribe on every stroke.
  const repaintRef = useRef(repaint);
  useEffect(() => {
    repaintRef.current = repaint;
  }, [repaint]);

  // Track the box, and re-fit any existing ink when it changes (rotation).
  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    const observer = new ResizeObserver(([entry]) => {
      const w = Math.round(entry.contentRect.width);
      const h = Math.round(entry.contentRect.height);
      if (w <= 0 || h <= 0) return;
      setSize((prev) => (prev && prev.w === w && prev.h === h ? prev : { w, h }));
    });
    observer.observe(box);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!size || !value) return;
    // Settles after one pass: the rescaled drawing matches the new box.
    if (value.w !== size.w) onChange(rescaleDrawing(value, size.w, size.h));
  }, [size, value, onChange]);

  useEffect(() => {
    repaint();
  }, [repaint]);

  // Ink is painted in the resolved `--ink`, so a palette change has to repaint.
  useEffect(() => {
    const observer = new MutationObserver(() => repaintRef.current());
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "class"],
    });
    return () => observer.disconnect();
  }, []);

  function pointFrom(e: PointerEvent | React.PointerEvent, rect: DOMRect): InkPoint {
    return roundPoint(e.clientX - rect.left, e.clientY - rect.top, e.pressure);
  }

  function onPointerDown(e: React.PointerEvent<HTMLCanvasElement>) {
    if (e.pointerType === "pen") penSeen = true;
    if (penSeen && e.pointerType !== "pen") return;
    if (!e.isPrimary) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.setPointerCapture(e.pointerId);
    activeRef.current = [pointFrom(e, canvas.getBoundingClientRect())];
    repaint();
  }

  function onPointerMove(e: React.PointerEvent<HTMLCanvasElement>) {
    const active = activeRef.current;
    if (!active) return;
    if (penSeen && e.pointerType !== "pen") return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();

    const native = e.nativeEvent;
    const samples =
      typeof native.getCoalescedEvents === "function" ? native.getCoalescedEvents() : [];
    if (samples.length > 0) {
      for (const sample of samples) active.push(pointFrom(sample, rect));
    } else {
      active.push(pointFrom(e, rect));
    }
    repaint();
  }

  function endStroke(e: React.PointerEvent<HTMLCanvasElement>) {
    const active = activeRef.current;
    activeRef.current = null;
    const canvas = canvasRef.current;
    if (canvas?.hasPointerCapture(e.pointerId)) canvas.releasePointerCapture(e.pointerId);
    if (!active || active.length === 0 || !size) {
      repaint();
      return;
    }
    const base = value ?? emptyDrawing(size.w, size.h);
    onChange({ ...base, w: size.w, h: size.h, strokes: [...base.strokes, active] });
  }

  const count = strokeCount(value);
  const blank = isEmpty(value);

  return (
    <div className={grow ? "ink-line ink-line--grow" : "ink-line"}>
      <div
        ref={boxRef}
        className={bare ? "ink-line__sheet ink-line__sheet--bare" : "ink-line__sheet"}
        style={{
          // A fixed line sets both, so the sheet's rows keep their rhythm; a
          // growing one sets only the floor and lets flex decide the rest.
          minHeight,
          ...(grow ? null : { height: minHeight }),
          ["--ink-rule-h" as string]: `${RULE_HEIGHT}px`,
        }}
      >
        <canvas
          ref={canvasRef}
          className="ink-line__canvas"
          role="img"
          aria-label={
            blank
              ? `Página en blanco. Escribe a mano la frase que empieza «${stem}».`
              : `Tu escritura a mano de la frase que empieza «${stem}», ${count} trazos`
          }
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endStroke}
          onPointerCancel={endStroke}
          onPointerLeave={(e) => {
            if (activeRef.current) endStroke(e);
          }}
        />
      </div>

      {showTools && (
      <div className="ink-line__tools">
        <button
          type="button"
          className="ink-line__tool"
          onClick={() => value && onChange(undoStroke(value))}
          disabled={blank}
        >
          Deshacer
        </button>
        <button
          type="button"
          className="ink-line__tool"
          onClick={() => size && onChange(emptyDrawing(size.w, size.h))}
          disabled={blank}
        >
          Borrar
        </button>
      </div>
      )}
    </div>
  );
}
