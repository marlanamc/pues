"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { PageHeader, Wordmark } from "@/components/PageHeader";
import { SettingsMenuButton } from "@/components/SettingsMenu";
import { frameDays, totalDays } from "@/content/frames";
import { useStats } from "@/hooks/useStats";
import { useThoughts } from "@/hooks/useThoughts";
import { currentStreak, last7Days, practiceDatesFromThoughts } from "@/lib/streak";

export default function ProgressPage() {
  const { stats, hydrated } = useStats();
  const { thoughts } = useThoughts();
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
  }, []);

  const practiced = useMemo(
    () => practiceDatesFromThoughts(thoughts),
    [thoughts],
  );
  const streak = useMemo(
    () => currentStreak(practiced, now ?? new Date()),
    [practiced, now],
  );
  const week = useMemo(
    () => last7Days(practiced, now ?? new Date()),
    [practiced, now],
  );

  const spoken = thoughts.length;
  const todaysFrames = frameDays[stats.currentDayIndex % totalDays].frames;
  const counts = todaysFrames.map((f) => ({
    stem: f.stem,
    n: thoughts.filter((t) => t.frameStem === f.stem).length,
  }));

  return (
    <div className="space-y-8" style={{ opacity: hydrated ? 1 : 0.6 }}>
      <header className="flex items-center justify-between">
        <Link
          href="/settings"
          className="text-caption text-ink-mute hover:text-accent transition-colors min-h-[40px] inline-flex items-center"
        >
          ← Settings
        </Link>
        <p className="text-caption text-ink-mute">Progreso</p>
        <SettingsMenuButton />
      </header>
      <PageHeader title={<Wordmark>Progreso</Wordmark>} />

      <Link
        href="/thoughts"
        className="flex items-center justify-between gap-4 rounded-lg border border-rule bg-surface px-5 py-4 transition-colors active:bg-surface-sunk"
      >
        <div className="min-w-0">
          <p className="font-display text-[1.125rem] text-ink leading-tight">
            Diario
          </p>
          <p className="mt-0.5 text-sm text-ink-mute leading-snug">
            Every sentence you&apos;ve spoken out loud.
          </p>
        </div>
        <span className="mono-cap shrink-0">
          {spoken === 0
            ? "Ver"
            : `${spoken} ${spoken === 1 ? "frase" : "frases"}`}
        </span>
      </Link>

      <div className="space-y-8 lg:grid lg:grid-cols-2 lg:items-start lg:gap-8 lg:space-y-0">
      <div className="space-y-8">
      <section className="space-y-4">
        <p className="text-caption text-ink-mute">This Week</p>
        <div className="grid grid-cols-3 gap-3">
          <Stat label="Sentences Built" value={stats.sentencesCreated} />
          <Stat label="Spoken Out Loud" value={spoken} />
          <Stat label="Days Practiced" value={stats.daysPracticed} />
        </div>
      </section>

      <section className="space-y-4">
        <p className="text-caption text-ink-mute">Your Streak</p>
        <div className="rounded-lg border border-rule bg-surface p-5 space-y-4">
          <div className="flex items-center gap-2">
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              aria-hidden
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3c1 3 4 5 4 9a4 4 0 1 1-8 0c0-2 1-3 2-4-1 5 2 5 2 5s0-3 0-10Z" />
            </svg>
            <span className="font-display text-[1.25rem] text-accent">
              {streak} {streak === 1 ? "day" : "days"}
            </span>
          </div>
          <div className="flex items-center justify-between gap-2">
            {week.map((day) => (
              <div
                key={day.date}
                className="flex flex-col items-center gap-1.5 flex-1"
              >
                <span
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-medium"
                  style={{
                    background: day.practiced ? "var(--accent)" : "transparent",
                    color: day.practiced ? "var(--bg)" : "var(--ink-mute)",
                    border: day.practiced
                      ? "1px solid var(--accent)"
                      : "1px solid var(--rule)",
                  }}
                >
                  {day.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>

      <section className="space-y-4">
        <p className="text-caption text-ink-mute">Frames Practiced</p>
        <ul className="space-y-3">
          {counts.map((c) => (
            <li key={c.stem} className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-display text-[1.0625rem] text-ink">
                  {c.stem}
                </span>
                <span className="text-caption text-ink-mute">
                  {Math.min(c.n, 5)} / 5
                </span>
              </div>
              <div
                className="h-1 w-full rounded-full"
                style={{ background: "var(--surface-sunk)" }}
              >
                <div
                  className="h-1 rounded-full"
                  style={{
                    width: `${Math.min(100, (c.n / 5) * 100)}%`,
                    background: "var(--accent)",
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </section>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg border border-rule bg-surface px-3 py-5 text-center">
      <p className="font-display text-3xl text-accent leading-none">{value}</p>
      <p className="mt-2 text-[0.6875rem] text-ink-mute uppercase tracking-[0.06em] leading-tight">
        {label}
      </p>
    </div>
  );
}
