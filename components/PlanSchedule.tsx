"use client";

import Link from "next/link";
import { useState } from "react";
import type { CSSProperties } from "react";
import { speakDays } from "@/content/prompts";
import { useStats } from "@/hooks/useStats";
import { clearDraft } from "@/lib/store";

const totalDays = speakDays.length;

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

type DayState = "done" | "today" | "upcoming";

function dayBadge(state: DayState, dayNum: string) {
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
  if (state === "done") {
    return (
      <span
        style={{ ...base, background: "var(--zone)", color: "var(--bg)" }}
        aria-hidden
      >
        {Check}
      </span>
    );
  }
  if (state === "today") {
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

export function PlanSchedule() {
  const { stats, hydrated } = useStats();
  const currentDayIndex = hydrated ? stats.currentDayIndex % totalDays : 0;
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ opacity: hydrated ? 1 : 0.6 }}>
      <div
        className="flex items-baseline justify-between gap-3"
        style={{ marginBottom: 12 }}
      >
        <span className="mono-cap" style={{ color: "var(--zone)" }}>
          El plan
        </span>
        <span className="mono-cap text-ink-soft">
          Día {String(currentDayIndex + 1).padStart(2, "0")} de {totalDays}
        </span>
      </div>

      <ul className="rounded-lg border border-rule bg-surface divide-y divide-rule overflow-hidden">
        {speakDays.map((day, i) => {
          const state: DayState =
            i < currentDayIndex
              ? "done"
              : i === currentDayIndex
                ? "today"
                : "upcoming";
          const dayNum = String(day.day).padStart(2, "0");
          const isOpen = open === i;
          const stems = day.prompts.map((p) => p.frameStem.replace(/…$/, ""));

          return (
            <li key={day.day}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="w-full text-left transition-colors active:bg-surface-sunk"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "13px 18px",
                }}
              >
                {dayBadge(state, dayNum)}
                <span style={{ flex: 1, minWidth: 0 }}>
                  <span
                    className="font-display"
                    style={{
                      display: "block",
                      fontSize: 17,
                      lineHeight: 1.15,
                      color: state === "upcoming" ? "var(--ink-soft)" : "var(--ink)",
                    }}
                  >
                    {day.themeEs}
                  </span>
                  <span
                    style={{
                      display: "block",
                      marginTop: 2,
                      fontSize: 12.5,
                      lineHeight: 1.4,
                      color: "var(--ink-mute)",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {stems.join(" · ")}
                  </span>
                </span>
                {state === "today" && (
                  <span className="mono-cap" style={{ color: "var(--zone)" }}>
                    Hoy
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
                <div style={{ padding: "2px 18px 16px 70px" }}>
                  <ul style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {day.prompts.map((p) => (
                      <li key={p.id}>
                        <p
                          className="mono-cap"
                          style={{ color: "var(--zone)", marginBottom: 2 }}
                        >
                          {p.frameStem}
                        </p>
                        <p
                          className="font-display text-ink"
                          style={{ fontSize: 15, lineHeight: 1.3 }}
                        >
                          {p.spanish}
                        </p>
                        <p
                          style={{
                            fontSize: 12.5,
                            lineHeight: 1.35,
                            color: "var(--ink-mute)",
                            marginTop: 1,
                          }}
                        >
                          {p.english}
                        </p>
                      </li>
                    ))}
                  </ul>

                  {state === "today" && (
                    <Link
                      href="/flow/speak"
                      onClick={() => clearDraft()}
                      className="btn-primary"
                      style={{ marginTop: 16 }}
                    >
                      <span className="lab">Practicar hoy</span>
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
                    </Link>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
