"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { speakDayForIndex, openTurnForDayIndex } from "@/content/prompts";
import type { OpenTurn } from "@/content/prompts/types";
import { useRecorder } from "@/hooks/useRecorder";
import { MicButton } from "@/components/MicButton";
import { PlayButton } from "@/components/PlayButton";
import { RecordingPlayButton } from "@/components/RecordingPlayButton";
import { Gloss } from "@/components/Gloss";

/**
 * "Una más, sin guion" — the unscripted turn that closes a day.
 *
 * Every other screen hands over the thought in English and asks for the
 * Spanish. This one doesn't: you hear one line, cold, and you answer it. There
 * is no model answer and nothing is scored. The reveal is what the other
 * person says *next*, written to work against any reasonable reply — the
 * moment it becomes "the right response," the translation loop is back.
 *
 * The mic arms itself when the line finishes playing, so the pause before she
 * starts is captured inside the recording rather than lost before it. That
 * pause shrinking across months is the thing worth measuring.
 */

const SPEAKERS: Record<OpenTurn["speaker"], { name: string; note: string }> = {
  camila: { name: "Camila", note: "jueves en el café" },
  rocio: { name: "Rocío", note: "en el colegio" },
  yesenia: { name: "Yesenia", note: "tu estudiante" },
  mama: { name: "Mamá", note: "videollamada" },
  tia: { name: "La tía", note: "desde Atlanta" },
  directora: { name: "La directora", note: "en el pasillo" },
};

function OpenTurnScreen() {
  const router = useRouter();
  const params = useSearchParams();
  const recorder = useRecorder();

  const dayIndex = Number(params.get("i") ?? "0");
  const turn = useMemo(() => openTurnForDayIndex(dayIndex), [dayIndex]);

  const [heard, setHeard] = useState(false);
  const [showText, setShowText] = useState(false);
  const [micFailed, setMicFailed] = useState(false);
  // Audio is the whole first move here, so a dead clip can't be allowed to
  // strand her on a play button. If it fails, show the line and let her answer
  // from the page — degraded, but never a dead end.
  const [audioFailed, setAudioFailed] = useState(false);
  const armedRef = useRef(false);

  // No open turn authored for this day — nothing to show, go home.
  useEffect(() => {
    if (!turn) router.replace("/");
  }, [turn, router]);

  async function arm() {
    if (armedRef.current) return;
    armedRef.current = true;
    setHeard(true);
    const ok = await recorder.start();
    if (!ok) setMicFailed(true);
  }

  function onAudioError() {
    setAudioFailed(true);
    setShowText(true);
  }

  function onMicTap() {
    if (recorder.state === "recording") recorder.stop();
    else void arm();
  }

  if (!turn) return null;

  const speaker = SPEAKERS[turn.speaker];
  const recording = recorder.state === "recording";
  const answered = recorder.state === "done";

  return (
    <div className="speak-stage flex flex-1 flex-col">
      <div className="speak-prompt-panel">
        <div className="situation-pill mt-[22px] lg:mt-4">
          <span className="dot" aria-hidden />
          <span className="mono-cap" style={{ color: "var(--ink-soft)" }}>
            {speaker.name} · {speaker.note}
          </span>
        </div>

        <p className="mono-cap mt-7 mb-3 lg:mt-5 lg:mb-2.5">
          Sin guion
          <Gloss>No script — answer out loud</Gloss>
        </p>

        {answered ? (
          <>
            <p className="text-display-md text-ink" style={{ margin: 0 }}>
              {turn.sigue}
            </p>
            <p
              className="font-display mt-2"
              style={{
                fontStyle: "italic",
                fontSize: 14.5,
                color: "var(--ink-soft)",
              }}
            >
              {turn.sigueEn}
            </p>
            <p className="mono-cap mt-5" style={{ color: "var(--ink-mute)" }}>
              Lo que dijo después
              <Gloss>What they said next — not the answer you should have given</Gloss>
            </p>
          </>
        ) : showText ? (
          <>
            <p className="text-display-md text-ink" style={{ margin: 0 }}>
              {turn.es}
            </p>
            <p
              className="font-display mt-2"
              style={{
                fontStyle: "italic",
                fontSize: 14.5,
                color: "var(--ink-soft)",
              }}
            >
              {turn.en}
            </p>
          </>
        ) : (
          <p
            className="font-display"
            style={{
              fontSize: 19,
              lineHeight: 1.45,
              color: "var(--ink-soft)",
              margin: 0,
            }}
          >
            {heard
              ? "Contesta en voz alta. No hay respuesta correcta."
              : "Escucha una vez y contesta. No vas a ver la frase."}
          </p>
        )}

        {turn.hint && !answered && (
          <aside className="tip-card mt-6">
            <p className="tip-card__body" style={{ margin: 0 }}>
              {turn.hint}
            </p>
          </aside>
        )}
      </div>

      <div className="flex-1 lg:hidden" />

      <div className="flex flex-col items-center gap-4 lg:mt-8">
        {!heard ? (
          <div className="flex flex-col items-center gap-2.5">
            <PlayButton
              text={turn.es}
              variant="lead"
              label={`Escuchar a ${speaker.name}`}
              onEnded={arm}
              onError={onAudioError}
            />
            <p className="mono-cap text-center" style={{ color: "var(--ink-soft)" }}>
              Escuchar
              <Gloss>The mic starts on its own when the line ends</Gloss>
            </p>
            {audioFailed && (
              <button
                type="button"
                onClick={() => void arm()}
                className="mono-cap min-h-[44px] px-6 py-2.5 text-center"
                style={{ color: "var(--ink-mute)" }}
              >
                No hay audio — léela y contesta
                <Gloss>Audio unavailable. Read it above, then answer out loud.</Gloss>
              </button>
            )}
          </div>
        ) : recording ? (
          <div className="flex flex-col items-center gap-2.5">
            <MicButton state={recorder.state} onTap={onMicTap} />
            <p className="text-display-italic text-center text-[0.9375rem] lg:text-base">
              Te escucho… toca cuando termines
            </p>
          </div>
        ) : answered ? (
          <div className="flex items-center justify-center gap-5">
            <div className="flex items-center gap-2">
              <span className="mono-cap">Tu voz</span>
              {recorder.recordingId ? (
                <RecordingPlayButton recordingId={recorder.recordingId} />
              ) : (
                <span className="mono-cap" style={{ color: "var(--ink-mute)" }}>
                  —
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <span className="mono-cap">{speaker.name}</span>
              <PlayButton text={turn.sigue} label={`Escuchar: ${turn.sigue}`} />
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2.5">
            <MicButton state={recorder.state} onTap={onMicTap} />
            <p className="mono-cap text-center" style={{ color: "var(--ink-soft)" }}>
              {micFailed ? "Contesta igual, sin grabar" : "Contestar"}
              <Gloss>
                {micFailed
                  ? "No mic — say it out loud anyway, then continue"
                  : "Tap, answer, tap again"}
              </Gloss>
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2.5 py-3.5 pb-5 lg:py-3 lg:pb-4">
        {answered || micFailed ? (
          <>
            <button
              type="button"
              onClick={() => router.push("/")}
              className="btn-primary"
            >
              <span className="lab">Terminar</span>
              <svg
                viewBox="0 0 24 24"
                width="19"
                height="19"
                aria-hidden
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12.5 10 17l9-10" />
              </svg>
            </button>
            <div className="text-center">
              <Gloss>Done for today</Gloss>
            </div>
          </>
        ) : (
          <button
            type="button"
            onClick={() => setShowText((v) => !v)}
            className="mono-cap min-h-[44px] px-6 py-2.5 text-center"
            style={{ color: "var(--ink-mute)" }}
          >
            {showText ? "Ocultar la frase" : "Ver la frase"}
            <Gloss>
              {showText ? "Hide it again" : "Only if you truly didn't catch it"}
            </Gloss>
          </button>
        )}
      </div>
    </div>
  );
}

export default function AbiertoPage() {
  return (
    <Suspense fallback={<div className="flex flex-1" />}>
      <OpenTurnScreen />
    </Suspense>
  );
}
