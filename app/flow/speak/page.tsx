"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { promptForSession } from "@/content/prompts";
import { getSessionIndex } from "@/lib/store";
import { useStats } from "@/hooks/useStats";
import { useFlowDraft } from "@/hooks/useFlowDraft";
import { ClickablePrompt } from "@/components/ClickablePrompt";
import { Gloss } from "@/components/Gloss";

export default function SpeakPage() {
  const router = useRouter();
  const { stats, hydrated: statsHydrated } = useStats();
  const { draft, patch, hydrated: draftHydrated } = useFlowDraft();

  const [sessionIndex, setSessionIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const [advancing, setAdvancing] = useState(false);

  useEffect(() => {
    setSessionIndex(getSessionIndex());
    setReady(true);
  }, []);

  const dailyPrompt = useMemo(
    () => promptForSession(stats.currentDayIndex, sessionIndex),
    [stats.currentDayIndex, sessionIndex]
  );

  const prompt = useMemo(() => {
    if (
      draftHydrated &&
      draft.source === "situation" &&
      draft.englishPrompt &&
      draft.spanishAnswer
    ) {
      return {
        id: draft.promptId ?? "situation-practice",
        frameStem: draft.frameStem ?? "En este lugar…",
        english: draft.englishPrompt,
        spanish: draft.spanishAnswer,
        situationLabel: draft.situationLabel ?? "Lugares",
        why: draft.whyNote ?? "",
        wordHints: draft.wordHints,
      };
    }
    return dailyPrompt;
  }, [dailyPrompt, draft, draftHydrated]);

  // Seed the draft so Reveal / Saved can read today's active prompt.
  useEffect(() => {
    if (!ready || !statsHydrated || !draftHydrated) return;
    if (
      draft.source === "situation" &&
      draft.englishPrompt &&
      draft.spanishAnswer
    ) {
      return;
    }
    if (advancing) return;
    if (
      draft.source === "daily" &&
      draft.promptId === prompt.id &&
      draft.englishPrompt === prompt.english &&
      draft.spoke === false
    ) {
      return;
    }
    patch({
      source: "daily",
      promptId: prompt.id,
      frameStem: prompt.frameStem,
      englishPrompt: prompt.english,
      spanishAnswer: prompt.spanish,
      whyNote: prompt.why,
      wordHints: prompt.wordHints,
      situationLabel: prompt.situationLabel,
      spoke: false,
    });
  }, [ready, statsHydrated, draftHydrated, advancing, draft, prompt, patch]);

  function finish() {
    if (advancing) return;
    setAdvancing(true);
    patch({ spoke: true, recordingId: undefined });
    router.push("/flow/reveal");
  }

  const headerLabel =
    draft.source === "situation" ? (
      <>
        Dilo en español
        <Gloss>Say it in Spanish</Gloss>
      </>
    ) : sessionIndex === 0 ? (
      <>
        Una frase
        <Gloss>One sentence</Gloss>
      </>
    ) : (
      <>
        ¿Otra?
        <Gloss>Another one?</Gloss>
      </>
    );

  return (
    <div
      className="speak-stage flex flex-1 flex-col"
      style={{ opacity: ready && statsHydrated && draftHydrated ? 1 : 0.5 }}
    >
      <div className="speak-prompt-panel">
        <div className="situation-pill mt-[22px] lg:mt-4">
          <span className="dot" aria-hidden />
          <span className="mono-cap" style={{ color: "var(--ink-soft)" }}>
            {prompt.situationLabel}
          </span>
        </div>

        <p className="mono-cap mt-7 mb-3 lg:mt-5 lg:mb-2.5">{headerLabel}</p>
        <ClickablePrompt text={prompt.english} wordHints={prompt.wordHints} />
      </div>

      <div className="flex-1 lg:hidden" />

      <div className="flex flex-col items-center gap-4 lg:mt-8">
        <div className="flex w-full max-w-[320px] flex-col items-center gap-1.5">
          <button
            type="button"
            onClick={finish}
            disabled={advancing}
            className="btn-primary btn-primary--center speak-dilo"
          >
            <span className="lab">Ver la respuesta</span>
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
          <Gloss>See the answer</Gloss>
        </div>
      </div>
    </div>
  );
}
