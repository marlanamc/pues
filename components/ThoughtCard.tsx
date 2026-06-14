"use client";

import { useState } from "react";
import type { Thought } from "@/lib/store";

const reflectionLabel: Record<Thought["reflection"], string> = {
  yes: "Yes, definitely",
  maybe: "Maybe",
  not_really: "Not really",
};

export function ThoughtCard({ thought }: { thought: Thought }) {
  const [expanded, setExpanded] = useState(false);
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="rounded-lg border border-rule bg-surface p-5">
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="block w-full text-left"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-2 min-w-0">
            <p className="font-display text-[1.25rem] leading-snug text-ink">
              {thought.sentence}
            </p>
            <p className="text-caption text-ink-mute truncate">
              {thought.situationLabel}
            </p>
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setFavorite((v) => !v);
            }}
            aria-label={favorite ? "Unfavorite" : "Favorite"}
            className="shrink-0"
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              aria-hidden
              fill={favorite ? "var(--accent)" : "none"}
              stroke={favorite ? "var(--accent)" : "var(--ink-mute)"}
              strokeWidth="1.6"
              strokeLinejoin="round"
            >
              <path d="m12 4 2.6 5.3 5.9.85-4.25 4.15 1 5.85L12 17.4l-5.25 2.75 1-5.85L3.5 10.15l5.9-.85L12 4Z" />
            </svg>
          </button>
        </div>
      </button>

      {expanded && (
        <div className="mt-4 space-y-2 border-t border-rule pt-4 text-sm text-ink-soft">
          <div>
            <span className="text-caption text-ink-mute mr-2">Frame</span>
            {thought.frameStem}
          </div>
          <div>
            <span className="text-caption text-ink-mute mr-2">Honest?</span>
            {reflectionLabel[thought.reflection]}
          </div>
        </div>
      )}
    </div>
  );
}
