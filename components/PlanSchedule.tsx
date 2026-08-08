"use client";

import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { WeekDayList } from "@/components/WeekDayList";
import { totalDays } from "@/content/frames";
import { speakDays } from "@/content/prompts";
import { daysInWeek, planContextFromDay, weekFromDay } from "@/lib/planDay";
import { SEASONS } from "@/lib/season";
import { useStats } from "@/hooks/useStats";

/**
 * The whole curriculum, grouped by week.
 *
 * This used to be a flat list of every authored day, which stopped being
 * browsable somewhere around day 40 (flagged in content/CURRICULUM.md). Weeks
 * are the unit now — 26 rows instead of 182 — and each opens onto its days.
 */
const WEEK_COUNT = Math.ceil(totalDays / 7);

export function PlanSchedule() {
  const { stats, hydrated } = useStats();
  const currentDay = stats.currentDayIndex + 1;
  const currentWeekNum = weekFromDay(currentDay);
  // Until it's touched, the open week follows the cursor. It can't be seeded
  // into useState — on the first render stats are still empty, so that would
  // pin week 1 open forever and hydration would never correct it.
  const [opened, setOpened] = useState<{ week: number | null } | null>(null);
  const open = opened ? opened.week : currentWeekNum;

  const done = useMemo(() => new Set(stats.daysDone), [stats.daysDone]);
  const primed = useMemo(() => new Set(stats.primedWeeks), [stats.primedWeeks]);

  const weeks = useMemo(
    () => Array.from({ length: WEEK_COUNT }, (_, i) => i + 1),
    [],
  );

  return (
    <section style={{ opacity: hydrated ? 1 : 0.6 }}>
      <ul className="rounded-lg border border-rule bg-surface divide-y divide-rule overflow-hidden">
        {weeks.map((week) => {
          const dayNums = daysInWeek(week).filter((d) => d <= totalDays);
          const ctx = planContextFromDay(dayNums[0]);
          const season = SEASONS[ctx.seasonIdx];
          const doneCount = dayNums.filter((d) => done.has(d)).length;
          const isCurrent = week === currentWeekNum;
          const isOpen = open === week;

          return (
            <li key={week} style={{ "--zone": season.color } as CSSProperties}>
              <button
                type="button"
                onClick={() => setOpened({ week: isOpen ? null : week })}
                aria-expanded={isOpen}
                className="w-full text-left transition-colors active:bg-surface-sunk"
                style={{ display: "flex", alignItems: "center", gap: 14, padding: "13px 18px" }}
              >
                <span
                  aria-hidden
                  className="flex shrink-0 items-center justify-center font-display"
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 11,
                    fontFamily: "var(--font-mono)",
                    fontSize: 13,
                    background: isCurrent
                      ? "color-mix(in oklab, var(--zone) 16%, var(--surface))"
                      : "var(--surface)",
                    border: isCurrent ? "1.5px solid var(--zone)" : "1px solid var(--rule)",
                    color: isCurrent ? "var(--zone)" : "var(--ink-mute)",
                  }}
                >
                  {String(ctx.weekNum).padStart(2, "0")}
                </span>

                <span style={{ flex: 1, minWidth: 0 }}>
                  <span
                    className="font-display"
                    style={{
                      display: "block",
                      fontSize: 17,
                      lineHeight: 1.15,
                      color: doneCount > 0 || isCurrent ? "var(--ink)" : "var(--ink-soft)",
                    }}
                  >
                    {ctx.temporada.weeks[ctx.weekNum - 1]}
                  </span>
                  <span
                    className="text-caption"
                    style={{ display: "block", marginTop: 3, color: "var(--ink-mute)" }}
                  >
                    T{season.index} · {ctx.temporada.seasonLabel} · {doneCount} de{" "}
                    {dayNums.length}
                    {primed.has(week) ? " · preparada" : ""}
                  </span>
                </span>

                <span
                  aria-hidden
                  style={{
                    color: "var(--ink-mute)",
                    display: "flex",
                    flexShrink: 0,
                    transform: isOpen ? "rotate(90deg)" : "none",
                    transition: "transform 0.15s",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </span>
              </button>

              {isOpen && (
                <div style={{ padding: "0 12px 14px" }}>
                  <WeekDayList
                    days={dayNums.map((d) => speakDays[d - 1])}
                    doneDays={stats.daysDone}
                    currentDay={currentDay}
                  />
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
