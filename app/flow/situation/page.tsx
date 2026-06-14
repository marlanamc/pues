"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  type Situation,
  randomSituation,
  sampleSituations,
} from "@/content/situations";
import { frameDays, totalDays } from "@/content/frames";
import { useFlowDraft } from "@/hooks/useFlowDraft";
import { useStats } from "@/hooks/useStats";

function SituationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ color: "var(--ink-mute)" }}
    >
      <rect x="3.5" y="6.5" width="17" height="13" rx="2" />
      <path d="M8 6.5V5a1.5 1.5 0 0 1 1.5-1.5h5A1.5 1.5 0 0 1 16 5v1.5" />
    </svg>
  );
}

export default function ChooseSituationPage() {
  const router = useRouter();
  const { stats } = useStats();
  const { draft, patch, hydrated } = useFlowDraft();
  const [picks, setPicks] = useState<Situation[]>(() => sampleSituations(5));

  const headerStem = useMemo(() => draft.frameStem ?? "—", [draft.frameStem]);
  const today = frameDays[stats.currentDayIndex % totalDays];
  const english = today.frames.find((f) => f.stem === draft.frameStem)?.english ?? "";

  function choose(s: Situation) {
    patch({ situationSlug: s.slug, situationLabel: s.label });
    router.push("/flow/build");
  }

  function surpriseMe() {
    const s = randomSituation();
    setPicks((p) => p);
    choose(s);
  }

  return (
    <div className="space-y-8" style={{ opacity: hydrated ? 1 : 0.6 }}>
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => router.back()}
          aria-label="Back"
          className="text-ink-soft text-xl leading-none"
        >
          ‹
        </button>
        <p className="text-caption text-ink-mute">Choose a Situation</p>
        <span className="w-3" aria-hidden />
      </div>

      <div className="text-center space-y-1">
        <p className="text-display-2xl text-ink">{headerStem}</p>
        {english && (
          <p className="text-display-italic text-[0.9375rem]">{english}</p>
        )}
        <span className="hairline-copper-center" aria-hidden />
      </div>

      <p className="text-center text-gloss">Pick a situation to start thinking.</p>

      <ul className="space-y-3">
        {picks.map((s) => (
          <li key={s.slug}>
            <button
              type="button"
              onClick={() => choose(s)}
              className="pill-lower"
            >
              <SituationIcon />
              <span className="flex-1">{s.label}</span>
              <span className="text-ink-mute" aria-hidden>›</span>
            </button>
          </li>
        ))}
      </ul>

      <div className="text-center">
        <button
          type="button"
          onClick={surpriseMe}
          className="inline-flex items-center gap-2 text-accent font-medium"
        >
          Surprise me
          <span aria-hidden>⇄</span>
        </button>
      </div>
    </div>
  );
}
