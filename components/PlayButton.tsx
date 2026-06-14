"use client";

import { useRef, useState } from "react";
import { staticAudioUrl } from "@/lib/audio";

/**
 * Small speaker icon.
 *
 * Lookup order on first tap:
 *   1. /audio/<hash>.mp3 if the manifest has this text → free, instant
 *   2. /api/tts as a live fallback for content added since last `npm run audio`
 *
 * The chosen URL is cached in a ref so a second tap is instant either way.
 */
export function PlayButton({ text, label }: { text: string; label?: string }) {
  const [state, setState] = useState<"idle" | "loading" | "playing" | "error">("idle");
  const urlRef = useRef<string | null>(null);

  async function play() {
    if (state === "loading" || state === "playing") return;
    try {
      if (!urlRef.current) {
        setState("loading");

        const staticUrl = await staticAudioUrl(text);
        if (staticUrl) {
          // Quick HEAD check — if the file is in the manifest but missing,
          // fall through to the live route.
          const head = await fetch(staticUrl, { method: "HEAD" });
          if (head.ok) {
            urlRef.current = staticUrl;
          }
        }

        if (!urlRef.current) {
          const res = await fetch("/api/tts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text }),
          });
          if (!res.ok) throw new Error(`TTS failed: ${res.status}`);
          const blob = await res.blob();
          urlRef.current = URL.createObjectURL(blob);
        }
      }

      const audio = new Audio(urlRef.current);
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
      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-rule text-ink-mute transition-colors hover:text-accent hover:border-accent/60 active:bg-surface-sunk"
    >
      {state === "loading" ? (
        <span className="block h-3 w-3 animate-spin rounded-full border border-current border-t-transparent" />
      ) : state === "playing" ? (
        <svg viewBox="0 0 16 16" className="h-4 w-4 fill-current" aria-hidden>
          <rect x="4" y="3" width="3" height="10" rx="1" />
          <rect x="9" y="3" width="3" height="10" rx="1" />
        </svg>
      ) : (
        <svg viewBox="0 0 16 16" className="h-4 w-4 fill-current" aria-hidden>
          <path d="M5 3.5v9l7-4.5z" />
        </svg>
      )}
    </button>
  );
}
