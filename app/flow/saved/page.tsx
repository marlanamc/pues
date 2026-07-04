"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { PROMPTS_PER_DAY, speakDays } from "@/content/prompts";
import {
  advanceSession,
  completeCurrentDay,
  flagForPractice,
} from "@/lib/store";
import { useFlowDraft } from "@/hooks/useFlowDraft";
import { useThoughts } from "@/hooks/useThoughts";
import { PlayButton } from "@/components/PlayButton";
import { RecordingPlayButton } from "@/components/RecordingPlayButton";
import { Gloss } from "@/components/Gloss";

export default function SavedPage() {
  const router = useRouter();
  const { draft, clear, hydrated } = useFlowDraft();
  const { add } = useThoughts();

  const savedRef = useRef(false);
  const [count, setCount] = useState<number | null>(null);
  const [sentence, setSentence] = useState("");
  const [recordingId, setRecordingId] = useState<string | undefined>();
  const [returnHref, setReturnHref] = useState("/situations");
  const [savedSource, setSavedSource] = useState<"daily" | "situation">("daily");

  // Bank the thought once, the moment we land here.
  useEffect(() => {
    if (!hydrated || savedRef.current) return;
    if (!draft.spanishAnswer || !draft.reflection) {
      router.replace("/flow/speak");
      return;
    }
    savedRef.current = true;

    const practiceFlag = draft.reflection === "not_really";
    const isSituationPractice = draft.source === "situation";
    const situationSlug = draft.situationSlug ?? draft.promptId ?? "";

    add({
      frameStem: draft.frameStem ?? "",
      situationSlug,
      situationLabel: draft.situationLabel ?? "",
      sentence: draft.spanishAnswer,
      english: draft.englishPrompt,
      reflection: draft.reflection,
      practiceFlag,
      audioId: draft.recordingId,
      promptId: draft.promptId,
    });
    if (practiceFlag && draft.promptId) flagForPractice(draft.promptId);

    setSentence(draft.spanishAnswer);
    setRecordingId(draft.recordingId);
    setSavedSource(isSituationPractice ? "situation" : "daily");
    setReturnHref(
      isSituationPractice && draft.situationSlug
        ? `/situations/${draft.situationSlug}`
        : "/situations"
    );
    if (isSituationPractice) {
      setCount(null);
    } else {
      const newCount = advanceSession(PROMPTS_PER_DAY);
      setCount(newCount);
      // Finishing the day's last prompt advances the phrase schedule.
      if (newCount >= PROMPTS_PER_DAY) completeCurrentDay(speakDays.length);
    }
  }, [hydrated, draft, add, router]);

  const isSituationPractice = savedSource === "situation";
  // Finishing a day's last prompt rolls straight into the next day's first
  // prompt — a learner can chain as many days as they want in one sitting.
  const dayJustCompleted = count !== null && count >= PROMPTS_PER_DAY;

  function next() {
    clear();
    router.push(isSituationPractice ? returnHref : "/flow/speak");
  }

  function finish() {
    clear();
    router.push(isSituationPractice ? "/situations" : "/");
  }

  return (
    <div className="flex flex-1 flex-col" style={{ opacity: hydrated ? 1 : 0.5 }}>
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <span
          className="inline-flex items-center justify-center rounded-full"
          style={{
            width: 56,
            height: 56,
            background: "color-mix(in oklab, var(--accent) 20%, transparent)",
            color: "var(--accent)",
            marginBottom: 8,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            width="28"
            height="28"
            aria-hidden
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12.5 10 17l9-10" />
          </svg>
        </span>

        <h1
          className="font-display text-ink"
          style={{ fontWeight: 300, fontSize: 30, margin: 0 }}
        >
          ¡Bien dicho!
        </h1>
        <Gloss>Well said!</Gloss>
        <p
          className="font-display"
          style={{
            fontStyle: "italic",
            fontSize: 14.5,
            color: "var(--ink-soft)",
            margin: "4px 0 0",
          }}
        >
          {isSituationPractice
            ? "Guardado en Lugares."
            : count !== null
              ? dayJustCompleted
                ? `¡Día completo! ${count} de ${PROMPTS_PER_DAY}.`
                : `${count} de ${PROMPTS_PER_DAY} hoy.`
              : " "}
        </p>

        <div
          style={{
            width: "100%",
            background: "var(--surface-2)",
            border: "1px solid var(--rule)",
            borderRadius: 14,
            padding: "16px",
            marginTop: 24,
          }}
        >
          <p
            className="font-display text-ink"
            style={{ fontSize: 17, lineHeight: 1.3, margin: 0 }}
          >
            &ldquo;{sentence}&rdquo;
          </p>
          {sentence && (
            <div className="mt-4 flex items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <span className="mono-cap">Modelo</span>
                <PlayButton
                  text={sentence}
                  label={`Escuchar: ${sentence}`}
                />
              </div>
              {recordingId && (
                <div className="flex items-center gap-2">
                  <span className="mono-cap">Tu voz</span>
                  <RecordingPlayButton recordingId={recordingId} />
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2.5" style={{ paddingBottom: 18 }}>
        <button type="button" onClick={next} className="btn-primary">
          <span className="lab">
            {isSituationPractice ? "Volver al lugar" : "Siguiente"}
          </span>
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
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
        {!isSituationPractice && (
          <button
            type="button"
            onClick={finish}
            className="px-6 py-2 text-center"
            style={{ color: "var(--ink-soft)" }}
          >
            Guardar y terminar
          </button>
        )}
      </div>
    </div>
  );
}
