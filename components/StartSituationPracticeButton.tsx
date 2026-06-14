"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  practiceItemForSituation,
  type Situation,
} from "@/content/situations";
import { clearDraft, setDraft } from "@/lib/store";

type StartSituationPracticeButtonProps = {
  situation: Situation;
};

export function StartSituationPracticeButton({
  situation,
}: StartSituationPracticeButtonProps) {
  const router = useRouter();
  const practiceItem = useMemo(
    () => practiceItemForSituation(situation, new Date().getDate()),
    [situation]
  );

  function start() {
    clearDraft();
    setDraft({
      source: "situation",
      promptId: `situation:${situation.slug}:${practiceItem.id}`,
      frameStem: "En este lugar…",
      situationSlug: situation.slug,
      situationLabel: situation.label,
      englishPrompt: practiceItem.english,
      spanishAnswer: practiceItem.spanish,
      whyNote: practiceItem.why,
      wordHints: practiceItem.wordHints,
      spoke: false,
    });
    router.push("/flow/speak");
  }

  return (
    <button type="button" onClick={start} className="btn-primary">
      <span className="lab">Practicar</span>
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
  );
}
