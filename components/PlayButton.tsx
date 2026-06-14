"use client";

import { useEffect, useRef, useState } from "react";
import {
  playbackRateFor,
  useAudioSpeed,
} from "@/hooks/useAudioSpeed";
import type { AudioSpeed } from "@/lib/store";
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
export function PlayButton({
  text,
  label,
  speed,
  stopToken = 0,
  lang = "es",
  contextBefore,
}: {
  text: string;
  label?: string;
  /** When set, playback follows this speed instead of a separate hook read. */
  speed?: AudioSpeed;
  /** Increment to stop any in-progress playback (e.g. when re-recording starts). */
  stopToken?: number;
  /** ISO 639-1 code — keeps short Spanish words from sounding English. */
  lang?: string;
  /** Unspoken context passed to TTS so short words get Spanish pronunciation. */
  contextBefore?: string;
}) {
  const [state, setState] = useState<"idle" | "loading" | "playing" | "error">("idle");
  const { speed: storedSpeed } = useAudioSpeed();
  const activeSpeed = speed ?? storedSpeed;
  const playbackRate = playbackRateFor(activeSpeed);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const urlRef = useRef<string | null>(null);
  const objectUrlRef = useRef<string | null>(null);
  const rateRef = useRef(playbackRate);

  useEffect(() => {
    rateRef.current = playbackRate;
    if (audioRef.current) applyPlaybackRate(audioRef.current, playbackRate);
  }, [playbackRate]);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setState((s) => (s === "playing" || s === "loading" ? "idle" : s));
  }, [stopToken]);

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

  function applyPlaybackRate(audio: HTMLAudioElement, rate: number) {
    audio.preservesPitch = true;
    audio.defaultPlaybackRate = rate;
    audio.playbackRate = rate;
  }

  function ensureAudio(): HTMLAudioElement {
    if (!audioRef.current) {
      const el = new Audio();
      el.preload = "auto";
      applyPlaybackRate(el, rateRef.current);
      el.onended = () => setState("idle");
      el.onpause = () => setState((s) => (s === "playing" ? "idle" : s));
      el.onerror = () => setState("error");
      el.onplaying = () => applyPlaybackRate(el, rateRef.current);
      audioRef.current = el;
    }
    return audioRef.current;
  }

  async function liveTtsUrl(): Promise<string> {
    const res = await fetch("/api/tts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, lang, contextBefore }),
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
      applyPlaybackRate(audio, rateRef.current);

      if (urlRef.current) {
        if (audio.src !== urlRef.current) {
          audio.src = urlRef.current;
          audio.load();
        }
        applyPlaybackRate(audio, rateRef.current);
        setState("playing");
        await audio.play();
        applyPlaybackRate(audio, rateRef.current);
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
      applyPlaybackRate(audio, rateRef.current);
      setState("playing");
      try {
        await audio.play();
        applyPlaybackRate(audio, rateRef.current);
      } catch (err) {
        if (!isStaticAudio) throw err;
        const fallback = await liveTtsUrl();
        urlRef.current = fallback;
        audio.src = fallback;
        audio.load();
        applyPlaybackRate(audio, rateRef.current);
        await audio.play();
        applyPlaybackRate(audio, rateRef.current);
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
