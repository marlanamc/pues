"use client";

/**
 * InkReplay — read-only render of a saved handwritten line.
 *
 * Loads the stroke list from IndexedDB and paints it at whatever width the
 * container happens to be, scaling uniformly from the box it was written in.
 * Painted in the live `--ink`, so your handwriting changes colour with the
 * palette instead of disappearing on a light one.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import { drawInk, type InkDrawing } from "@/lib/ink";
import { getInk } from "@/lib/inkStore";

function inkColor(el: HTMLElement): string {
  return getComputedStyle(el).getPropertyValue("--ink").trim() || "#efe5d2";
}

export function InkReplay({ inkId }: { inkId: string }) {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [drawing, setDrawing] = useState<InkDrawing | null>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    let cancelled = false;
    getInk(inkId).then((d) => {
      if (!cancelled) setDrawing(d);
    });
    return () => {
      cancelled = true;
    };
  }, [inkId]);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    const observer = new ResizeObserver(([entry]) => {
      const w = Math.round(entry.contentRect.width);
      if (w > 0) setWidth(w);
    });
    observer.observe(box);
    return () => observer.disconnect();
  }, []);

  const repaint = useCallback(() => {
    const canvas = canvasRef.current;
    const box = boxRef.current;
    if (!canvas || !box || !drawing || width <= 0) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const scale = drawing.w > 0 ? width / drawing.w : 1;
    const height = drawing.h * scale;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);
    drawInk(ctx, drawing, { scale, color: inkColor(box) });
  }, [drawing, width]);

  useEffect(() => {
    repaint();
  }, [repaint]);

  useEffect(() => {
    const observer = new MutationObserver(() => repaint());
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "class"],
    });
    return () => observer.disconnect();
  }, [repaint]);

  return (
    <div ref={boxRef} className="ink-replay">
      {drawing ? (
        <canvas
          ref={canvasRef}
          // Both dimensions must be set in CSS. A canvas is a replaced element,
          // so with `width: auto` it falls back to its backing-store size and
          // renders at the device-pixel ratio instead of the layout size.
          style={{ width: "100%", display: "block" }}
          role="img"
          aria-label="Tu escritura a mano"
        />
      ) : null}
    </div>
  );
}
