"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { promptForSession } from "@/content/prompts";
import { getSessionIndex } from "@/lib/store";
import { useStats } from "@/hooks/useStats";
import { useFlowDraft } from "@/hooks/useFlowDraft";
import { useRecorder } from "@/hooks/useRecorder";
import { MicButton } from "@/components/MicButton";
import { ClickablePrompt } from "@/components/ClickablePrompt";

export default function SpeakPage() {
  const router = useRouter();
  const { stats, hydrated: statsHydrated } = useStats();
  const { draft, patch, hydrated: draftHydrated } = useFlowDraft();
  const recorder = useRecorder();

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

  function finish(recordingId: string | null) {
    if (advancing) return;
    setAdvancing(true);
    patch({ spoke: true, recordingId: recordingId ?? undefined });
    router.push("/flow/reveal");
  }

  // When a recording stops, advance with its id.
  useEffect(() => {
    if (recorder.state === "done") finish(recorder.recordingId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recorder.state, recorder.recordingId]);

  async function onTap() {
    if (advancing) return;
    if (recorder.state === "recording") {
      recorder.stop();
      return;
    }
    if (recorder.state === "done") return;
    const ok = await recorder.start();
    // Mic denied / unsupported → still honor the speak-first gate.
    if (!ok) finish(null);
  }

  const subtitle =
    recorder.state === "recording"
      ? "Listening… tap when you're done"
      : "Tap, then say it out loud";

  return (
    <div
      className="flex flex-1 flex-col"
      style={{ opacity: ready && statsHydrated && draftHydrated ? 1 : 0.5 }}
    >
      <div>
        <div className="situation-pill mt-[22px] lg:mt-4">
          <span className="dot" aria-hidden />
          <span className="mono-cap" style={{ color: "var(--ink-soft)" }}>
            {prompt.situationLabel}
          </span>
        </div>

        <p className="mono-cap mt-7 mb-3 lg:mt-5 lg:mb-2.5">
          Dilo en español
        </p>
        <ClickablePrompt text={prompt.english} wordHints={prompt.wordHints} />
      </div>

      <div className="flex-1 lg:hidden" />

      <div className="flex flex-col items-center gap-3.5 lg:mt-8 lg:gap-3">
        <MicButton state={recorder.state} onTap={onTap} />
        <p className="text-display-italic text-center text-[0.9375rem] lg:text-base">
          {subtitle}
        </p>
      </div>

      <div
        className="flex items-center justify-center gap-2 py-3.5 pb-5 lg:py-3 lg:pb-4"
      >
        <svg
          viewBox="0 0 24 24"
          width="12"
          height="12"
          aria-hidden
          fill="none"
          stroke="var(--ink-soft)"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="5" y="11" width="14" height="9" rx="2" />
          <path d="M8 11V8a4 4 0 0 1 8 0v3" />
        </svg>
        <span className="mono-cap" style={{ color: "var(--ink-soft)" }}>
          La respuesta se revela después
        </span>
      </div>
    </div>
  );
}
