"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { PageHeader, Wordmark } from "@/components/PageHeader";
import { NotebookAside } from "@/components/NotebookAside";
import { navItems } from "@/content/nav";
import { speakDayForIndex } from "@/content/prompts";
import { totalDays } from "@/content/frames";
import { clearDraft, readingDoneToday } from "@/lib/store";
import { useStats } from "@/hooks/useStats";
import { useThoughts } from "@/hooks/useThoughts";
import {
  currentStreak,
  practiceDatesFromThoughts,
} from "@/lib/streak";

const NAME = "Marlana";

/** The four hubs as colored paths — one per zone, drawn from the nav source. */
const PATH_META: Record<string, string> = {
  "/practice": "Sigue",
  "/situations": "12 temas",
  "/guides": "Patrones",
  "/lab": "El oído",
};
const zonePaths = navItems.filter((item) => item.href !== "/");

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

  const today = new Date().toISOString().slice(0, 10);
  const practicedToday = stats.lastSessionDate === today;
  const flaggedCount = thoughts.filter((t) => t.practiceFlag === true).length;
  const [readDoneToday, setReadDoneToday] = useState(false);
  useEffect(() => {
    setReadDoneToday(readingDoneToday());
    function onStats() { setReadDoneToday(readingDoneToday()); }
    window.addEventListener("pues:stats-change", onStats);
    return () => window.removeEventListener("pues:stats-change", onStats);
  }, []);

  const streak = useMemo(
    () => currentStreak(practiceDatesFromThoughts(thoughts)),
    [thoughts]
  );

  const spokenLabel =
    stats.sentencesCreated === 1
      ? "frase dicha en voz alta"
      : "frases dichas en voz alta";

  return (
    <>
      {/* Multi-hue wash — pure mood, a fixed full-viewport backdrop. */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0"
        style={{
          zIndex: 0,
          background:
            "linear-gradient(103deg," +
            " color-mix(in oklab, var(--zone-practica) 20%, transparent) 0%," +
            " color-mix(in oklab, var(--zone-lugares) 16%, transparent) 34%," +
            " color-mix(in oklab, var(--zone-guias) 16%, transparent) 66%," +
            " color-mix(in oklab, var(--zone-lab) 20%, transparent) 100%)",
        }}
      />

      <div className="fade-rise relative" style={{ zIndex: 1 }}>
        <PageHeader
          title={<Wordmark>Pues</Wordmark>}
          meta={<span className="mono-cap">Racha · {streak}</span>}
        />

        <div className="lg:mt-14 lg:grid lg:grid-cols-[1.4fr_1fr] lg:items-start lg:gap-12">
          <div className="flex flex-col">
            <div className="mt-[34px] lg:mt-0">
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
              className="btn-primary btn-primary--zones active:brightness-90"
              style={{
                marginTop: 24,
                background:
                  "linear-gradient(90deg, var(--zone-practica) 0%, var(--zone-lugares) 25%, var(--zone-guias) 50%, var(--zone-lab) 100%)",
              }}
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

            {/* Tu plan de hoy — a focused 2-3 step sequence for the day. */}
            <section aria-label="Tu plan de hoy" style={{ marginTop: 28 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <p className="mono-cap">Tu plan de hoy</p>
                <Link
                  href="/practice/plan"
                  className="mono-cap"
                  style={{ color: "var(--ink-mute)" }}
                >
                  Día {String(stats.currentDayIndex + 1).padStart(2, "0")} · {totalDays} días
                </Link>
              </div>

              <div
                style={{
                  height: 2,
                  background: "var(--rule)",
                  borderRadius: 2,
                  marginBottom: 14,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    borderRadius: 2,
                    background: "var(--accent)",
                    width: `${Math.max(3, ((stats.currentDayIndex + 1) / totalDays) * 100)}%`,
                  }}
                />
              </div>

              <ol
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <PlanStep
                  num={1}
                  label="Di tu frase del día"
                  href="/flow/speak"
                  state={practicedToday ? "done" : "active"}
                  onClick={practicedToday ? undefined : () => clearDraft()}
                />
                {flaggedCount > 0 && (
                  <PlanStep
                    num={2}
                    label={`Repasa ${flaggedCount} ${flaggedCount === 1 ? "frase marcada" : "frases marcadas"}`}
                    href="/thoughts"
                    state="pending"
                  />
                )}
                <PlanStep
                  num={flaggedCount > 0 ? 3 : 2}
                  label="Juega un rato"
                  href="/practice/games"
                  state="pending"
                />
                <PlanStep
                  num={flaggedCount > 0 ? 4 : 3}
                  label="Lee antes de dormir"
                  href="/read"
                  state={readDoneToday ? "done" : "pending"}
                />
              </ol>

              {practicedToday && (
                <p
                  className="mono-cap"
                  style={{ marginTop: 12, color: "var(--accent)" }}
                >
                  Frase de hoy · hecha ✓
                </p>
              )}
            </section>

            {/* Cuatro caminos — the colorful map, one path per zone. */}
            <section style={{ marginTop: 36 }}>
              <p className="mono-cap">Cuatro caminos</p>
              <div
                className="grid grid-cols-2"
                style={{ columnGap: 18, rowGap: 20, marginTop: 14 }}
              >
                {zonePaths.map((path) => (
                  <Link
                    key={path.href}
                    href={path.href}
                    className="flex items-center gap-3"
                    style={{ "--zone": path.zone } as React.CSSProperties}
                  >
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 38,
                        height: 38,
                        borderRadius: 11,
                        flexShrink: 0,
                        background:
                          "color-mix(in oklab, var(--zone) 15%, var(--surface))",
                        color: "var(--zone)",
                      }}
                    >
                      {path.icon}
                    </span>
                    <span className="min-w-0">
                      <span
                        className="font-display block"
                        style={{
                          fontSize: 17,
                          lineHeight: 1.1,
                          color: "var(--ink)",
                        }}
                      >
                        {path.label}
                      </span>
                      <span
                        className="block uppercase"
                        style={{
                          marginTop: 2,
                          fontFamily: "var(--font-mono)",
                          fontSize: 9,
                          letterSpacing: "0.1em",
                          color: "var(--zone)",
                        }}
                      >
                        {PATH_META[path.href]}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          <NotebookAside />

          <p
            className="mono-cap lg:hidden"
            style={{ textAlign: "center", marginTop: 24, marginBottom: 16 }}
          >
            {stats.sentencesCreated} {spokenLabel}
          </p>
        </div>
      </div>
    </>
  );
}

function PlanStep({
  num,
  label,
  href,
  state,
  onClick,
}: {
  num: number;
  label: string;
  href: string;
  state: "done" | "active" | "pending";
  onClick?: () => void;
}) {
  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "10px 14px",
          borderRadius: 10,
          background:
            state === "done"
              ? "color-mix(in oklab, var(--accent) 8%, var(--surface))"
              : "var(--surface)",
          border: `1px solid ${
            state === "done"
              ? "color-mix(in oklab, var(--accent) 22%, transparent)"
              : "var(--rule)"
          }`,
          opacity: state === "pending" ? 0.55 : 1,
          textDecoration: "none",
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 26,
            height: 26,
            borderRadius: "50%",
            flexShrink: 0,
            background: state === "done" ? "var(--accent)" : "transparent",
            border:
              state === "done"
                ? "none"
                : state === "active"
                  ? "1.5px solid var(--ink-soft)"
                  : "1px solid var(--rule)",
            color:
              state === "done"
                ? "var(--bg)"
                : state === "active"
                  ? "var(--ink)"
                  : "var(--ink-mute)",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
          }}
          aria-hidden
        >
          {state === "done" ? (
            <svg
              viewBox="0 0 24 24"
              width="13"
              height="13"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12.5 10 17l9-10" />
            </svg>
          ) : (
            num
          )}
        </span>
        <span
          className="font-display"
          style={{
            flex: 1,
            fontSize: 16,
            lineHeight: 1.2,
            color: state === "pending" ? "var(--ink-soft)" : "var(--ink)",
          }}
        >
          {label}
        </span>
        {state !== "done" && (
          <svg
            viewBox="0 0 24 24"
            width="15"
            height="15"
            aria-hidden
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: "var(--ink-mute)", flexShrink: 0 }}
          >
            <path d="M9 6l6 6-6 6" />
          </svg>
        )}
      </Link>
    </li>
  );
}
