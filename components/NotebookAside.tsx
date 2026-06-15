"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { PROMPTS_PER_DAY } from "@/content/prompts";
import { useStats } from "@/hooks/useStats";
import { useThoughts } from "@/hooks/useThoughts";
import { getSessionIndex } from "@/lib/store";
import {
  currentStreak,
  last7Days,
  practiceDatesFromThoughts,
} from "@/lib/streak";

export function NotebookAside() {
  const { stats, hydrated } = useStats();
  const { thoughts, hydrated: thoughtsHydrated } = useThoughts();
  const [todayCount, setTodayCount] = useState(0);

  useEffect(() => {
    setTodayCount(getSessionIndex());
  }, [thoughts.length, stats.sentencesCreated]);

  const practiced = useMemo(
    () => practiceDatesFromThoughts(thoughts),
    [thoughts]
  );
  const streak = currentStreak(practiced);
  const week = last7Days(practiced);
  const ready = hydrated && thoughtsHydrated;

  const streakLabel = streak === 1 ? "día de racha" : "días de racha";
  const todayProgress = Math.min(todayCount, PROMPTS_PER_DAY);
  const todayPct = (todayProgress / PROMPTS_PER_DAY) * 100;

  // Each day cycles a zone hue — the week reads as a record of which corners
  // of the app you touched.
  const zoneHues = [
    "var(--zone-practica)",
    "var(--zone-lugares)",
    "var(--zone-guias)",
    "var(--zone-lab)",
  ];

  return (
    <aside
      className="mt-6 rounded-lg border border-rule bg-surface p-6 lg:mt-0"
      style={{ opacity: ready ? 1 : 0.6 }}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-caption text-ink-mute">Tu cuaderno</p>
        <Link
          href="/progress"
          className="text-caption text-ink-mute transition-colors hover:text-accent"
        >
          Ver más
        </Link>
      </div>

      <div className="mt-5 space-y-5">
        <div>
          <div className="flex items-center gap-2">
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              aria-hidden
              fill="none"
              stroke="var(--accent)"
              strokeWidth={1.6}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3c1 3 4 5 4 9a4 4 0 1 1-8 0c0-2 1-3 2-4-1 5 2 5 2 5s0-3 0-10Z" />
            </svg>
            <p className="font-display text-3xl text-accent leading-none">
              {streak}
            </p>
          </div>
          <p className="mono-cap mt-2">{streakLabel}</p>
        </div>

        <div className="flex items-center justify-between gap-1.5">
          {week.map((day, i) => {
            const hue = zoneHues[i % zoneHues.length];
            const filled = day.practiced || day.isToday;
            return (
              <div
                key={day.date}
                className="flex flex-1 flex-col items-center gap-1.5"
              >
                <span
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full text-[0.6875rem] font-medium"
                  style={{
                    background: filled ? hue : "transparent",
                    color: filled ? "var(--bg)" : hue,
                    border: `1px solid ${
                      filled
                        ? hue
                        : `color-mix(in oklab, ${hue} 55%, var(--rule))`
                    }`,
                  }}
                  title={day.date}
                >
                  {day.label}
                </span>
              </div>
            );
          })}
        </div>

        <div>
          <div className="flex items-baseline justify-between gap-3">
            <p className="mono-cap">Hoy</p>
            <p className="mono-cap text-ink-soft">
              {todayProgress} de {PROMPTS_PER_DAY}
            </p>
          </div>
          <div
            className="mt-2 h-1 w-full rounded-full"
            style={{ background: "var(--surface-sunk)" }}
          >
            <div
              className="h-1 rounded-full transition-all"
              style={{
                width: `${todayPct}%`,
                background: "var(--accent)",
              }}
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
