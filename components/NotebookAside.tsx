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

  return (
    <aside
      className="mt-6 border border-rule bg-surface lg:mt-0"
      style={{
        opacity: ready ? 1 : 0.6,
        borderRadius: 22,
        padding: "22px 22px 24px",
      }}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="mono-cap">Tu cuaderno</p>
        <Link
          href="/progress"
          className="mono-cap transition-colors hover:text-accent"
          style={{ color: "var(--ink-mute)" }}
        >
          Ver más
        </Link>
      </div>

      <div style={{ marginTop: 18 }}>
        <p className="mono-cap" style={{ marginBottom: 6 }}>
          Racha actual
        </p>
        <div className="flex items-center" style={{ gap: 8, marginBottom: 22 }}>
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            aria-hidden
            fill="var(--accent)"
          >
            <path d="M12 2s4 4 4 8a4 4 0 0 1-1 2.6c1.5.5 3 2.4 3 4.4a6 6 0 1 1-12 0c0-2 1-3.5 2.5-4.5C7 11 7 9 8 7c1.5 2 2 3 4-5z" />
          </svg>
          <p
            className="font-display"
            style={{
              fontSize: 30,
              lineHeight: 1,
              color: "var(--ink)",
              fontWeight: 400,
            }}
          >
            {streak}
          </p>
        </div>

        <p className="mono-cap" style={{ marginBottom: 10 }}>
          Días de racha
        </p>
        <div
          className="flex justify-between"
          style={{ marginBottom: 22 }}
        >
          {week.map((day) => {
            const isToday = day.isToday;
            const practicedNotToday = day.practiced && !isToday;
            return (
              <span
                key={day.date}
                className="inline-flex items-center justify-center rounded-full"
                style={{
                  width: 28,
                  height: 28,
                  fontSize: 10.5,
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  background: isToday
                    ? "var(--accent)"
                    : practicedNotToday
                      ? "color-mix(in oklab, var(--accent) 28%, transparent)"
                      : "transparent",
                  color: isToday
                    ? "var(--accent-ink)"
                    : practicedNotToday
                      ? "var(--ink)"
                      : "var(--ink-mute)",
                  border: `1px solid ${
                    isToday
                      ? "transparent"
                      : practicedNotToday
                        ? "color-mix(in oklab, var(--accent) 45%, transparent)"
                        : "var(--rule)"
                  }`,
                }}
                title={day.date}
              >
                {day.label}
              </span>
            );
          })}
        </div>

        <div className="flex items-baseline justify-between gap-3">
          <p className="mono-cap">Hoy</p>
          <p className="mono-cap text-ink-soft">
            {todayProgress} de {PROMPTS_PER_DAY}
          </p>
        </div>
        <div
          className="h-[3px] w-full rounded-full"
          style={{ background: "var(--surface-sunk)", marginTop: 8, marginBottom: 22 }}
        >
          <div
            className="h-[3px] rounded-full transition-all"
            style={{
              width: `${todayPct}%`,
              background: "var(--accent)",
            }}
          />
        </div>

        <div
          className="flex items-start gap-2.5"
          style={{ borderTop: "1px solid var(--rule)", paddingTop: 18 }}
        >
          <svg
            viewBox="0 0 24 24"
            width="14"
            height="14"
            aria-hidden
            fill="var(--accent)"
            style={{ flexShrink: 0, marginTop: 4 }}
          >
            <path d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" />
          </svg>
          <p
            className="font-display text-ink-soft"
            style={{
              fontStyle: "italic",
              fontSize: 13,
              lineHeight: 1.45,
            }}
          >
            Pequeños pasos, grandes cambios. Tú puedes.
          </p>
        </div>
      </div>
    </aside>
  );
}
