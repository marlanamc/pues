"use client";

/**
 * InkLine — a ruled writing line you finish by hand.
 *
 * The stem is printed on the first rule in the display face, exactly where it
 * would be if you had copied it into a paper notebook, and the ink continues
 * from there. Nothing is checked; the strokes are kept as your own record.
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

const RULE_HEIGHT = 44;
const RULES = 3;
const PAD_TOP = 10;

function inkColor(el: HTMLElement): string {
  return getComputedStyle(el).getPropertyValue("--ink").trim() || "#efe5d2";
}

export function InkLine({
  stem,
  value,
  onChange,
}: {
  stem: string;
  value: InkDrawing | null;
  onChange: (next: InkDrawing) => void;
}) {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [size, setSize] = useState<{ w: number; h: number } | null>(null);

  // The live stroke lives in a ref, not state: it changes on every pointer
  // sample and painting it through React would drop points on the floor.
  // Committed strokes stay in `value` — they only change on pointer-up.
  const activeRef = useRef<InkPoint[] | null>(null);

  const height = RULE_HEIGHT * RULES + PAD_TOP;

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
      if (w <= 0) return;
      setSize((prev) => (prev && prev.w === w ? prev : { w, h: height }));
    });
    observer.observe(box);
    return () => observer.disconnect();
  }, [height]);

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
    <div className="ink-line">
      <div
        ref={boxRef}
        className="ink-line__sheet"
        style={{ height, ["--ink-rule-h" as string]: `${RULE_HEIGHT}px` }}
      >
        <span className="ink-line__stem" aria-hidden="true">
          {stem}
        </span>
        <canvas
          ref={canvasRef}
          className="ink-line__canvas"
          style={{ width: "100%", height }}
          role="img"
          aria-label={
            blank
              ? `Espacio para escribir a mano: ${stem}`
              : `Tu escritura a mano para ${stem}, ${count} trazos`
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
    </div>
  );
}
