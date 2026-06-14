"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { PageHeader, Wordmark } from "@/components/PageHeader";
import { NotebookAside } from "@/components/NotebookAside";
import { speakDayForIndex } from "@/content/prompts";
import { clearDraft } from "@/lib/store";
import { useStats } from "@/hooks/useStats";
import { useThoughts } from "@/hooks/useThoughts";
import {
  currentStreak,
  practiceDatesFromThoughts,
} from "@/lib/streak";

const NAME = "Marlana";

export default function HomePage() {
  const { stats } = useStats();
  const { thoughts } = useThoughts();
  const [greeting, setGreeting] = useState("Buenos días");

  useEffect(() => {
    const h = new Date().getHours();
    if (h < 12) setGreeting("Buenos días");
    else if (h < 19) setGreeting("Buenas tardes");
    else setGreeting("Buenas noches");
  }, []);

  const day = speakDayForIndex(stats.currentDayIndex);
  const dayNum = day.day.toString().padStart(2, "0");

  const streak = useMemo(
    () => currentStreak(practiceDatesFromThoughts(thoughts)),
    [thoughts]
  );

  const spokenLabel =
    stats.sentencesCreated === 1
      ? "frase dicha en voz alta"
      : "frases dichas en voz alta";

  return (
    <div className="fade-rise">
      <PageHeader
        title={<Wordmark>Pues</Wordmark>}
        meta={<span className="mono-cap">Racha · {streak}</span>}
      />

      <div className="lg:mt-8 lg:grid lg:grid-cols-[1.4fr_1fr] lg:items-start lg:gap-12">
        <div className="flex min-h-[calc(100dvh-10.5rem)] flex-col lg:min-h-0">
          <div style={{ marginTop: 34 }} className="lg:!mt-0">
            <p
              className="font-display"
              style={{
                fontStyle: "italic",
                fontSize: 15,
                color: "var(--ink-soft)",
                margin: "0 0 4px",
              }}
            >
              {greeting},
            </p>
            <h1 className="text-display-2xl text-ink">{NAME}</h1>
          </div>

          <span
            className="hairline"
            style={{ margin: "26px 0 24px" }}
            aria-hidden
          />

          <p className="mono-cap" style={{ marginBottom: 12 }}>
            Día {dayNum} · {day.themeEs}
          </p>
          <p className="text-display-lg text-ink">{day.line}</p>

          <Link
            href="/flow/speak"
            onClick={() => clearDraft()}
            className="btn-primary"
            style={{ marginTop: 24 }}
          >
            <span className="lab">Empezar</span>
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
          </Link>

          <div className="flex-1 lg:hidden" />

          <p
            className="mono-cap lg:hidden"
            style={{ textAlign: "center", marginBottom: 16 }}
          >
            {stats.sentencesCreated} {spokenLabel}
          </p>
        </div>

        <NotebookAside />
      </div>
    </div>
  );
}
