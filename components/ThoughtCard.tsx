"use client";

import { useEffect, useRef, useState } from "react";
import type { Thought } from "@/lib/store";
import { getRecordingUrl } from "@/lib/audioStore";
import { PlayButton } from "@/components/PlayButton";

const reflectionLabel: Record<Thought["reflection"], string> = {
  yes: "Lo dije con soltura",
  maybe: "Casi — por poco",
  not_really: "Quiero practicarla",
};

export function ThoughtCard({ thought }: { thought: Thought }) {
  const [expanded, setExpanded] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [playingMine, setPlayingMine] = useState(false);

  const urlRef = useRef<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    return () => {
      if (urlRef.current) URL.revokeObjectURL(urlRef.current);
      audioRef.current?.pause();
    };
  }, []);

  async function playMine() {
    if (!thought.audioId) return;
    try {
      if (!urlRef.current) {
        const url = await getRecordingUrl(thought.audioId);
        if (!url) return;
        urlRef.current = url;
      }
      const audio = audioRef.current ?? new Audio();
      audioRef.current = audio;
      audio.onended = () => setPlayingMine(false);
      audio.src = urlRef.current;
      setPlayingMine(true);
      await audio.play();
    } catch {
      setPlayingMine(false);
    }
  }

  return (
    <div
      className="border border-rule bg-surface p-5"
      style={{ borderRadius: 14 }}
    >
      <div className="flex items-start justify-between gap-3">
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="min-w-0 flex-1 space-y-2 text-left"
        >
          <p className="font-display text-[1.25rem] leading-snug text-ink">
            {thought.sentence}
          </p>
          <p className="mono-cap truncate">{thought.situationLabel}</p>
        </button>
        <button
          type="button"
          onClick={() => setFavorite((v) => !v)}
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

      <div className="mt-3 flex items-center gap-3">
        <PlayButton text={thought.sentence} label={`Escuchar: ${thought.sentence}`} />
        {thought.audioId && (
          <button
            type="button"
            onClick={playMine}
            className="mono-cap inline-flex items-center gap-1.5 transition-colors hover:text-accent"
            aria-label="Play your recording"
          >
            <svg
              viewBox="0 0 24 24"
              width="13"
              height="13"
              aria-hidden
              fill="none"
              stroke="currentColor"
              strokeWidth={1.6}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="9" y="3" width="6" height="11" rx="3" />
              <path d="M6 11a6 6 0 0 0 12 0M12 17v3" />
            </svg>
            {playingMine ? "Tu voz…" : "Tu voz"}
          </button>
        )}
      </div>

      {expanded && (
        <div className="mt-4 space-y-2 border-t border-rule pt-4 text-sm text-ink-soft">
          {thought.english && (
            <div>
              <span className="mono-cap mr-2">En inglés</span>
              {thought.english}
            </div>
          )}
          <div>
            <span className="mono-cap mr-2">Marco</span>
            {thought.frameStem}
          </div>
          <div>
            <span className="mono-cap mr-2">Cómo se sintió</span>
            {reflectionLabel[thought.reflection]}
          </div>
        </div>
      )}
    </div>
  );
}
