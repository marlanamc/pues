"use client";

import { useEffect, useRef, useState } from "react";
import { staticAudioUrl } from "@/lib/audio";

/**
 * Small speaker icon.
 *
 * Lookup order on first tap:
 *   1. /audio/<hash>.mp3 if the manifest has this text → free, instant
 *   2. /api/tts as a live fallback for content added since last `npm run audio`
 *
 * The HTMLAudioElement is created lazily on the first tap (inside the user
 * gesture, which iOS Safari requires) and held in a ref so it survives
 * across renders and isn't garbage-collected mid-playback.
 */
export function PlayButton({ text, label }: { text: string; label?: string }) {
  const [state, setState] = useState<"idle" | "loading" | "playing" | "error">("idle");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const urlRef = useRef<string | null>(null);
  const objectUrlRef = useRef<string | null>(null);

  useEffect(() => {
    return () => {
      if (objectUrlRef.current) {
        URL.revokeObjectURL(objectUrlRef.current);
        objectUrlRef.current = null;
      }
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
        audioRef.current = null;
      }
    };
  }, []);

  function ensureAudio(): HTMLAudioElement {
    if (!audioRef.current) {
      const el = new Audio();
      el.preload = "auto";
      el.onended = () => setState("idle");
      el.onpause = () => setState((s) => (s === "playing" ? "idle" : s));
      el.onerror = () => setState("error");
      audioRef.current = el;
    }
    return audioRef.current;
  }

  async function liveTtsUrl(): Promise<string> {
    const res = await fetch("/api/tts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    if (!res.ok) throw new Error(`TTS failed: ${res.status}`);
    const blob = await res.blob();
    if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
    objectUrlRef.current = URL.createObjectURL(blob);
    return objectUrlRef.current;
  }

  async function play() {
    if (state === "loading" || state === "playing") return;
    try {
      const audio = ensureAudio();

      if (urlRef.current) {
        if (audio.src !== urlRef.current) audio.src = urlRef.current;
        setState("playing");
        await audio.play();
        return;
      }

      setState("loading");

      let resolved: string | null = await staticAudioUrl(text);
      let isStaticAudio = Boolean(resolved);

      if (!resolved) {
        resolved = await liveTtsUrl();
        isStaticAudio = false;
      }

      urlRef.current = resolved;
      audio.src = resolved;
      audio.load();
      setState("playing");
      try {
        await audio.play();
      } catch (err) {
        if (!isStaticAudio) throw err;
        const fallback = await liveTtsUrl();
        urlRef.current = fallback;
        audio.src = fallback;
        audio.load();
        await audio.play();
      }
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
