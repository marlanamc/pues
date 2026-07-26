"use client";

import { useEffect, useRef, useState } from "react";
import { playbackRateFor, useAudioSpeed } from "@/hooks/useAudioSpeed";
import { resolveAudioUrl } from "@/lib/audio";

export type WeekPlayerLine = {
  /** The Spanish spoken. */
  text: string;
  /** Short caption shown while it plays, e.g. "Día 57 · Proponer". */
  caption: string;
};

/**
 * Plays a week's model sentences straight through, hands-free.
 *
 * The point is listening without deciding: one tap and the week goes by while
 * you make coffee. It resolves each clip lazily, one ahead of where it is, so
 * a 35-sentence week doesn't fire 35 requests before the first word.
 */
export function WeekPlayer({ lines }: { lines: WeekPlayerLine[] }) {
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);
  const { speed } = useAudioSpeed();

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const objectUrlRef = useRef<string | null>(null);
  const playingRef = useRef(false);
  const indexRef = useRef(0);
  const rateRef = useRef(playbackRateFor(speed));

  useEffect(() => {
    rateRef.current = playbackRateFor(speed);
    if (audioRef.current) audioRef.current.playbackRate = rateRef.current;
  }, [speed]);

  useEffect(() => {
    return () => {
      playingRef.current = false;
      if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
    };
  }, []);

  function stop() {
    playingRef.current = false;
    setPlaying(false);
    audioRef.current?.pause();
  }

  async function playFrom(start: number) {
    // The <audio> element is created inside the tap gesture — iOS Safari won't
    // allow playback from one made later in the async chain.
    if (!audioRef.current) {
      const el = new Audio();
      el.preload = "auto";
      audioRef.current = el;
    }
    const audio = audioRef.current;

    playingRef.current = true;
    setPlaying(true);
    setError(false);

    for (let n = start; n < lines.length; n += 1) {
      if (!playingRef.current) return;
      indexRef.current = n;
      setI(n);
      try {
        const { url, objectUrl } = await resolveAudioUrl(lines[n].text);
        if (!playingRef.current) {
          if (objectUrl) URL.revokeObjectURL(url);
          return;
        }
        if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
        objectUrlRef.current = objectUrl ? url : null;

        audio.src = url;
        audio.playbackRate = rateRef.current;
        await new Promise<void>((resolve, reject) => {
          audio.onended = () => resolve();
          audio.onerror = () => reject(new Error("playback"));
          audio.play().then(
            () => {
              audio.playbackRate = rateRef.current;
            },
            reject
          );
        });
      } catch {
        // One bad clip shouldn't end the listen — carry on to the next.
        setError(true);
      }
    }

    playingRef.current = false;
    setPlaying(false);
    setI(0);
    indexRef.current = 0;
  }

  const current = lines[Math.min(i, lines.length - 1)];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "16px 18px",
        background: "var(--surface)",
        border: "1px solid var(--rule)",
        borderRadius: 16,
      }}
    >
      <button
        type="button"
        onClick={() => (playing ? stop() : playFrom(indexRef.current))}
        aria-label={playing ? "Pausar la semana" : "Escuchar la semana"}
        className="inline-flex shrink-0 items-center justify-center rounded-full transition-colors active:bg-surface-sunk"
        style={{
          width: 52,
          height: 52,
          border: "2px solid var(--zone)",
          color: "var(--zone)",
        }}
      >
        {playing ? (
          <svg viewBox="0 0 16 16" className="h-5 w-5 fill-current" aria-hidden>
            <rect x="4" y="3" width="3" height="10" rx="1" />
            <rect x="9" y="3" width="3" height="10" rx="1" />
          </svg>
        ) : (
          <svg viewBox="0 0 16 16" className="h-5 w-5 fill-current" aria-hidden>
            <path d="M5 3.5v9l7-4.5z" />
          </svg>
        )}
      </button>

      <span style={{ minWidth: 0, flex: 1 }}>
        <span className="mono-cap" style={{ color: "var(--ink-soft)" }}>
          {playing ? `${i + 1} de ${lines.length}` : `${lines.length} frases · sin manos`}
        </span>
        <span
          className="font-display text-ink week-player-line"
          style={{
            display: "block",
            marginTop: 4,
            lineHeight: 1.3,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {playing ? current.text : "Escuchar la semana entera"}
        </span>
        <span className="week-player-caption">
          {playing ? current.caption : "Ponla mientras haces otra cosa."}
        </span>
        {error && (
          <span className="week-player-error">
            Alguna frase no cargó — sigue igual.
          </span>
        )}
      </span>
    </div>
  );
}
