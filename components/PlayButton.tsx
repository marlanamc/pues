"use client";

import { useRef, useState } from "react";

/**
 * Small speaker icon. Tap → fetches /api/tts → plays MP3.
 * Caches the blob URL in memory so a second tap is instant.
 */
export function PlayButton({ text, label }: { text: string; label?: string }) {
  const [state, setState] = useState<"idle" | "loading" | "playing" | "error">("idle");
  const urlRef = useRef<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  async function play() {
    if (state === "loading" || state === "playing") return;
    try {
      if (!urlRef.current) {
        setState("loading");
        const res = await fetch("/api/tts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text }),
        });
        if (!res.ok) throw new Error(`TTS failed: ${res.status}`);
        const blob = await res.blob();
        urlRef.current = URL.createObjectURL(blob);
      }
      const audio = new Audio(urlRef.current);
      audioRef.current = audio;
      audio.onended = () => setState("idle");
      audio.onerror = () => setState("error");
      setState("playing");
      await audio.play();
    } catch {
      setState("error");
    }
  }

  return (
    <button
      type="button"
      onClick={play}
      aria-label={label ?? `Play: ${text}`}
      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-rule text-ink-mute transition-colors hover:text-accent hover:border-accent/60 active:bg-surface-sunk"
    >
      {state === "loading" ? (
        <span className="block h-3 w-3 animate-spin rounded-full border border-current border-t-transparent" />
      ) : state === "playing" ? (
        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-current" aria-hidden>
          <rect x="4" y="3" width="3" height="10" rx="1" />
          <rect x="9" y="3" width="3" height="10" rx="1" />
        </svg>
      ) : (
        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-current" aria-hidden>
          <path d="M5 3.5v9l7-4.5z" />
        </svg>
      )}
    </button>
  );
}
