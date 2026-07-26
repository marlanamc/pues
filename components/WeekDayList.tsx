"use client";

import Link from "next/link";
import { useState } from "react";
import type { CSSProperties } from "react";
import type { SpeakDay } from "@/content/prompts";
import { openTurnForDayIndex } from "@/content/prompts";
import { PlayButton } from "@/components/PlayButton";
import { clearDraft, setCurrentDayIndex } from "@/lib/store";

/**
 * The days of one week, each expandable to its five stems and model sentences.
 *
 * Shared by the momentum session and the full plan. Note the vocabulary: a day
 * is `done`, `now`, or `open` — never "upcoming" or "locked". The week is a
 * queue you pull from in whatever order you like, so an unfinished later day
 * carries no implication that you're behind on an earlier one.
 */
export type DayRowStatus = "done" | "now" | "open";

const Check = (
  <svg
    viewBox="0 0 24 24"
    width="15"
    height="15"
    aria-hidden
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12.5 10 17l9-10" />
  </svg>
);

const Chevron = (
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
);

const Arrow = (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    aria-hidden
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

function dayBadge(status: DayRowStatus, dayNum: string) {
  const base: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
    borderRadius: 11,
    flexShrink: 0,
    fontFamily: "var(--font-mono)",
    fontSize: 13,
    letterSpacing: "0.02em",
  };
  if (status === "done") {
    return (
      <span style={{ ...base, background: "var(--zone)", color: "var(--bg)" }} aria-hidden>
        {Check}
      </span>
    );
  }
  if (status === "now") {
    return (
      <span
        style={{
          ...base,
          background: "color-mix(in oklab, var(--zone) 16%, var(--surface))",
          border: "1.5px solid var(--zone)",
          color: "var(--zone)",
        }}
        aria-hidden
      >
        {dayNum}
      </span>
    );
  }
  return (
    <span
      style={{
        ...base,
        background: "var(--surface)",
        border: "1px solid var(--rule)",
        color: "var(--ink-mute)",
      }}
      aria-hidden
    >
      {dayNum}
    </span>
  );
}

export function WeekDayList({
  days,
  doneDays,
  currentDay,
  showPlay = false,
  expandDay,
}: {
  days: SpeakDay[];
  /** Curriculum day numbers already worked through. */
  doneDays: number[];
  /** The day the cursor is sitting on (1-based curriculum day). */
  currentDay: number;
  /** Show a speaker next to each model sentence — on during the weekly preview. */
  showPlay?: boolean;
  /** Force a row open until the learner collapses it (e.g. right after priming). */
  expandDay?: number;
}) {
  // Untouched, the open row follows the cursor — but only once stats have
  // hydrated, so it can't be seeded into useState (that would pin day 1).
  const [opened, setOpened] = useState<{ day: number | null } | null>(null);
  const defaultOpen = days.some((d) => d.day === currentDay) ? currentDay : null;
  const open = opened !== null ? opened.day : (expandDay ?? defaultOpen);
  const done = new Set(doneDays);

  return (
    <ul className="rounded-lg border border-rule bg-surface divide-y divide-rule overflow-hidden">
      {days.map((day) => {
        const status: DayRowStatus = done.has(day.day)
          ? "done"
          : day.day === currentDay
            ? "now"
            : "open";
        const dayNum = String(day.day).padStart(2, "0");
        const isOpen = open === day.day;
        const stems = day.prompts.map((p) => p.frameStem.replace(/…$/, ""));

        return (
          <li key={day.day}>
            <button
              type="button"
              onClick={() => setOpened({ day: isOpen ? null : day.day })}
              aria-expanded={isOpen}
              className="w-full text-left transition-colors active:bg-surface-sunk"
              style={{ display: "flex", alignItems: "center", gap: 14, padding: "13px 18px" }}
            >
              {dayBadge(status, dayNum)}
              <span style={{ flex: 1, minWidth: 0 }}>
                <span
                  className="week-day-title"
                  style={{ color: status === "open" ? "var(--ink-soft)" : "var(--ink)" }}
                >
                  {day.themeEs}
                </span>
                <span className="week-day-stems">
                  {stems.join(" · ")}
                </span>
              </span>
              {status === "now" && (
                <span className="mono-cap" style={{ color: "var(--zone)" }}>
                  Aquí
                </span>
              )}
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
                {Chevron}
              </span>
            </button>

            {isOpen && (
              <div style={{ padding: "2px 18px 16px 70px" }}>
                <ul style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {day.prompts.map((p) => (
                    <li key={p.id}>
                      <p className="mono-cap" style={{ color: "var(--zone)", marginBottom: 2 }}>
                        {p.frameStem}
                      </p>
                      <span
                        style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}
                      >
                        <span style={{ minWidth: 0 }}>
                          <span className="week-prompt-es">{p.spanish}</span>
                          <span className="week-prompt-en">{p.english}</span>
                        </span>
                        {showPlay && <PlayButton text={p.spanish} />}
                      </span>
                    </li>
                  ))}
                </ul>

                {status === "now" ? (
                  <Link
                    href="/flow/speak"
                    onClick={() => clearDraft()}
                    className="btn-primary"
                    style={{ marginTop: 16 }}
                  >
                    <span className="lab">Practicar</span>
                    {Arrow}
                  </Link>
                ) : (
                  <Link
                    href="/flow/speak"
                    onClick={() => {
                      setCurrentDayIndex(day.day - 1);
                      clearDraft();
                    }}
                    style={{
                      marginTop: 16,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--zone)",
                      background: "transparent",
                      border: "1px solid color-mix(in oklab, var(--zone) 30%, transparent)",
                      borderRadius: 7,
                      padding: "7px 12px",
                      cursor: "pointer",
                    }}
                  >
                    {status === "done" ? "Repetir este día" : "Empezar aquí"}
                    <svg
                      viewBox="0 0 24 24"
                      width="13"
                      height="13"
                      aria-hidden
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </Link>
                )}

                {openTurnForDayIndex(day.day - 1) && (
                  <Link
                    href={`/flow/abierto?i=${day.day - 1}`}
                    onClick={() => clearDraft()}
                    className="mono-cap inline-flex items-center transition-colors hover:text-accent"
                    style={{
                      marginTop: 12,
                      gap: 6,
                      color: "var(--ink-soft)",
                    }}
                  >
                    Sin guion
                    <svg
                      viewBox="0 0 24 24"
                      width="13"
                      height="13"
                      aria-hidden
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </Link>
                )}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
