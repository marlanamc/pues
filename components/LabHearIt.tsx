"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { PlayButton } from "@/components/PlayButton";
import type { HearItPair } from "@/content/lab";

type Phase = "listen" | "choose" | "revealed";

export function LabHearIt({ pairs }: { pairs: HearItPair[] }) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("listen");
  const [chosen, setChosen] = useState<"a" | "b" | null>(null);
  const [done, setDone] = useState(false);
  const [stopToken, setStopToken] = useState(0);

  // Randomly decide which word plays first (blind listen)
  const [playTarget, setPlayTarget] = useState<"a" | "b">("a");
  useEffect(() => {
    setPlayTarget(Math.random() < 0.5 ? "a" : "b");
  }, [index]);

  const pair = pairs[index];

  function handlePlayed() {
    if (phase === "listen") setPhase("choose");
  }

  function handleChoose(pick: "a" | "b") {
    if (phase !== "choose") return;
    setChosen(pick);
    setPhase("revealed");
  }

  function handleNext() {
    setStopToken((t) => t + 1);
    if (index + 1 >= pairs.length) {
      setDone(true);
    } else {
      setIndex((i) => i + 1);
      setPhase("listen");
      setChosen(null);
    }
  }

  function handleRestart() {
    setIndex(0);
    setPhase("listen");
    setChosen(null);
    setDone(false);
  }

  if (done) {
    return (
      <div className="flex flex-col items-center gap-6 py-12 fade-rise">
        <span className="hairline-accent-center" />
        <p className="text-display-lg text-ink text-center">
          Buen trabajo.
        </p>
        <p className="text-gloss text-center max-w-xs">
          Your ear is getting sharper. The more you listen, the more you'll
          notice these sounds in real speech.
        </p>
        <button
          type="button"
          onClick={handleRestart}
          className="pill-lower mt-2"
          style={{ width: "auto", padding: "0.75rem 1.5rem" }}
        >
          <span style={{ color: "var(--accent)" }}>↺</span>
          <span>Escuchar de nuevo</span>
        </button>
      </div>
    );
  }

  const isCorrect = chosen === playTarget;

  return (
    <div className="space-y-6 fade-rise">
      {/* Progress */}
      <p className="mono-cap" style={{ color: "var(--ink-mute)" }}>
        {index + 1} de {pairs.length}
      </p>

      {/* Blind play button */}
      {phase === "listen" && (
        <div className="flex flex-col items-center gap-4 py-8">
          <p className="text-gloss text-center" style={{ maxWidth: 280 }}>
            Escucha y luego elige la palabra que oíste.
          </p>
          <PlayButtonLarge
            text={playTarget === "a" ? pair.a : pair.b}
            stopToken={stopToken}
            onPlayed={handlePlayed}
          />
        </div>
      )}

      {/* Option cards */}
      {(phase === "choose" || phase === "revealed") && (
        <div className="grid grid-cols-2 gap-3">
          {(["a", "b"] as const).map((side) => {
            const word = side === "a" ? pair.a : pair.b;
            const isTarget = side === playTarget;
            const isChosen = chosen === side;

            let borderColor = "var(--rule)";
            let textColor = "var(--ink)";
            let opacity = 1;
            let bgColor = "var(--surface)";

            if (phase === "revealed") {
              if (isTarget) {
                borderColor = "var(--correct)";
                textColor = "var(--correct)";
                bgColor = "color-mix(in oklab, var(--correct) 10%, var(--surface))";
              } else {
                opacity = 0.45;
              }
            }

            return (
              <button
                key={side}
                type="button"
                disabled={phase !== "choose"}
                onClick={() => handleChoose(side)}
                className="flex flex-col items-center gap-3 rounded-[14px] border p-6 text-center transition-all"
                style={{
                  borderColor,
                  color: textColor,
                  opacity,
                  background: bgColor,
                  cursor: phase === "choose" ? "pointer" : "default",
                }}
              >
                <span className="text-display-lg">{word}</span>
                {phase === "revealed" && isTarget && (
                  <span className="mono-cap" style={{ color: "var(--correct)" }}>
                    ✓ correcto
                  </span>
                )}
                {phase === "revealed" && !isTarget && isChosen && (
                  <span className="mono-cap" style={{ color: "var(--ink-mute)" }}>
                    no era esta
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Revealed: individual play buttons + note */}
      {phase === "revealed" && (
        <div className="space-y-4">
          {/* Feedback */}
          <div
            className="rounded-[11px] border px-4 py-3"
            style={{
              borderColor: isCorrect
                ? "color-mix(in oklab, var(--correct) 45%, var(--rule))"
                : "color-mix(in oklab, var(--ink-mute) 35%, var(--rule))",
              background: isCorrect
                ? "color-mix(in oklab, var(--correct) 10%, var(--surface))"
                : "var(--surface)",
            }}
          >
            <p
              className="mono-cap mb-1"
              style={{ color: isCorrect ? "var(--correct)" : "var(--ink-mute)" }}
            >
              {isCorrect ? "Lo oíste" : "Sigue practicando"}
            </p>
            <p className="text-gloss" style={{ color: "var(--ink-soft)" }}>
              {isCorrect
                ? "Your ear caught it."
                : `The word was "${playTarget === "a" ? pair.a : pair.b}."`}
            </p>
          </div>

          {/* Compare both */}
          <div className="space-y-2">
            <p className="mono-cap" style={{ color: "var(--ink-mute)" }}>
              Escucha los dos
            </p>
            <div className="flex gap-3">
              {(["a", "b"] as const).map((side) => (
                <div
                  key={side}
                  className="flex flex-1 items-center gap-3 rounded-[11px] border p-3"
                  style={{ borderColor: "var(--rule)", background: "var(--surface)" }}
                >
                  <PlayButton
                    text={side === "a" ? pair.a : pair.b}
                    stopToken={stopToken}
                    label={`Escuchar: ${side === "a" ? pair.a : pair.b}`}
                  />
                  <span className="text-display-md" style={{ color: "var(--ink)" }}>
                    {side === "a" ? pair.a : pair.b}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Note */}
          {pair.note && (
            <div className="tip-card">
              <span className="tip-card__label mono-cap">Nota</span>
              <p className="tip-card__body">{pair.note}</p>
            </div>
          )}

          <button type="button" onClick={handleNext} className="btn-primary mt-2">
            <span className="lab">
              {index + 1 < pairs.length ? "Siguiente" : "Terminar"}
            </span>
            <span aria-hidden>→</span>
          </button>
        </div>
      )}
    </div>
  );
}

/** A larger play button used for the initial blind listening phase. */
function PlayButtonLarge({
  text,
  stopToken,
  onPlayed,
}: {
  text: string;
  stopToken: number;
  onPlayed: () => void;
}) {
  const [state, setState] = useState<"idle" | "loading" | "playing" | "error">("idle");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const urlRef = useRef<string | null>(null);
  const objectUrlRef = useRef<string | null>(null);
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    return () => {
      if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setState("idle");
    hasPlayedRef.current = false;
    urlRef.current = null;
  }, [stopToken, text]);

  async function play() {
    if (state === "loading" || state === "playing") return;
    try {
      if (!audioRef.current) {
        const el = new Audio();
        el.preload = "auto";
        el.onended = () => {
          setState("idle");
          if (!hasPlayedRef.current) {
            hasPlayedRef.current = true;
            onPlayed();
          }
        };
        el.onerror = () => setState("error");
        audioRef.current = el;
      }
      const audio = audioRef.current;

      if (urlRef.current) {
        audio.src = urlRef.current;
        audio.load();
        setState("playing");
        await audio.play();
        return;
      }

      setState("loading");

      const { staticAudioUrl } = await import("@/lib/audio");
      let resolved = await staticAudioUrl(text);

      if (!resolved) {
        const res = await fetch("/api/tts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text, lang: "es" }),
        });
        if (!res.ok) throw new Error("TTS failed");
        const blob = await res.blob();
        if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
        objectUrlRef.current = URL.createObjectURL(blob);
        resolved = objectUrlRef.current;
      }

      urlRef.current = resolved;
      audio.src = resolved;
      audio.load();
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
      aria-label="Escuchar"
      className="flex h-20 w-20 items-center justify-center rounded-full border-2 transition-all"
      style={{
        borderColor:
          state === "playing" ? "var(--accent)" : "var(--rule)",
        color: state === "playing" ? "var(--accent)" : "var(--ink-soft)",
        background:
          state === "playing"
            ? "color-mix(in oklab, var(--accent) 10%, var(--surface))"
            : "var(--surface)",
      }}
    >
      {state === "loading" ? (
        <span className="block h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : state === "playing" ? (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden>
          <rect x="6" y="4" width="4" height="16" rx="1.5" />
          <rect x="14" y="4" width="4" height="16" rx="1.5" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden>
          <path d="M6 4.5v15l13-7.5z" />
        </svg>
      )}
    </button>
  );
}
