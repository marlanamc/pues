"use client";

import { useState } from "react";
import { hintsForFrame } from "@/content/cognates";

export function CognateHint({ frameStem }: { frameStem: string | undefined }) {
  const [open, setOpen] = useState(false);
  const hints = frameStem ? hintsForFrame(frameStem) : [];

  if (!frameStem || hints.length === 0) return null;

  return (
    <div className="rounded-md border border-rule bg-surface">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition-colors active:bg-surface-sunk"
        aria-expanded={open}
      >
        <span className="flex items-center gap-2.5">
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            aria-hidden
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3Z" />
          </svg>
          <span className="text-caption text-ink-mute">Cognate hint</span>
        </span>
        <span
          className="text-caption text-ink-mute"
          style={{ transform: open ? "rotate(90deg)" : "none", transition: "transform 0.2s" }}
          aria-hidden
        >
          ›
        </span>
      </button>

      {open && (
        <div className="border-t border-rule px-4 py-3 space-y-2">
          <p className="text-xs text-ink-mute leading-relaxed">
            Words that pair naturally with this frame. Drop one in if it fits.
          </p>
          <ul className="flex flex-wrap gap-2 pt-1">
            {hints.map((h) => (
              <li
                key={h}
                className="rounded-full border border-rule px-3 py-1 font-display text-[0.9375rem] text-ink-soft"
              >
                {h}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
