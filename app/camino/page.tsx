"use client";

import Link from "next/link";
import { useMemo } from "react";
import { Gloss } from "@/components/Gloss";
import { PageHeader, Wordmark } from "@/components/PageHeader";
import { useStats } from "@/hooks/useStats";
import { useThoughts } from "@/hooks/useThoughts";
import { totalDays } from "@/content/frames";
import { TEMPORADAS, type Temporada } from "@/content/temporadas";
import { SEASONS, seasonForDate } from "@/lib/season";
import { currentStreak, practiceDatesFromThoughts } from "@/lib/streak";

const ws = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Mobile timeline — full detail lives in the active node when there's no aside. */
function ActiveTemporadaCard({
  t,
  dayLabel,
  weekNum,
}: {
  t: Temporada;
  dayLabel: string;
  weekNum: number;
}) {
  return (
    <div className="flex flex-col gap-2.5">
      <SeasonHighlightCard t={t} dayLabel={dayLabel} />
      <SeasonBodyCard t={t} />
      <SeasonArcCard t={t} />
      <SeasonWeeksCard t={t} weekNum={weekNum} />
    </div>
  );
}

/** Desktop timeline — one quiet card so the spine stays scannable. */
function TimelineActiveSeason({ t }: { t: Temporada }) {
  return (
    <div
      style={{
        padding: "14px 16px",
        background: "var(--surface)",
        border: "1px solid color-mix(in oklab, var(--accent) 32%, var(--rule))",
        borderRadius: 14,
      }}
    >
      <h3 className="font-display text-ink" style={{ fontWeight: 300, fontSize: 22, lineHeight: 1.15, margin: 0 }}>
        T{t.index} — {t.title}
        <Gloss>{t.titleEn}</Gloss>
      </h3>
      <span className="mono-cap" style={{ color: t.color, marginTop: 6, display: "inline-block" }}>
        {t.range}
        <Gloss>{t.rangeEn}</Gloss>
      </span>
    </div>
  );
}

function SeasonHighlightCard({ t, dayLabel }: { t: Temporada; dayLabel: string }) {
  return (
    <div
      style={{
        padding: "18px 20px",
        background: "var(--surface)",
        border: "1px solid color-mix(in oklab, var(--accent) 38%, var(--rule))",
        borderRadius: 16,
      }}
    >
      <span className="mono-cap" style={{ color: "var(--accent)" }}>
        Estás aquí · Día {dayLabel}
        <Gloss>{`You are here · Day ${dayLabel}`}</Gloss>
      </span>
      <h3 className="font-display text-ink" style={{ fontWeight: 300, fontSize: 26, lineHeight: 1.12, margin: "8px 0 4px" }}>
        T{t.index} — {t.title}
        <Gloss>{t.titleEn}</Gloss>
      </h3>
      <span className="mono-cap" style={{ color: t.color }}>
        {t.range}
        <Gloss>{t.rangeEn}</Gloss>
      </span>
    </div>
  );
}

function SeasonBodyCard({ t }: { t: Temporada }) {
  return (
    <div style={{ padding: "16px 18px", background: "var(--surface)", border: "1px solid var(--rule)", borderRadius: 14 }}>
      <p className="font-display text-ink-soft" style={{ fontSize: 16, lineHeight: 1.45, margin: 0 }}>
        {t.body}
        <Gloss>{t.bodyEn}</Gloss>
      </p>
    </div>
  );
}

function SeasonArcCard({ t }: { t: Temporada }) {
  return (
    <div style={{ padding: "14px 16px", background: "var(--surface-2)", border: "1px solid var(--rule)", borderRadius: 12 }}>
      <p className="mono-cap" style={{ marginBottom: 6 }}>
        Arco de la temporada
        <Gloss>Season arc</Gloss>
      </p>
      <p className="font-display text-ink-soft" style={{ fontSize: 15, lineHeight: 1.4, margin: 0 }}>
        {t.arc}
        <Gloss>{t.arcEn}</Gloss>
      </p>
    </div>
  );
}

function SeasonWeeksCard({ t, weekNum }: { t: Temporada; weekNum: number }) {
  return (
    <div style={{ padding: "16px 18px", background: "var(--surface)", border: "1px solid var(--rule)", borderRadius: 14 }}>
      <div className="flex items-baseline justify-between" style={{ marginBottom: 12 }}>
        <span className="mono-cap">
          Semana {weekNum} de 13
          <Gloss>{`Week ${weekNum} of 13`}</Gloss>
        </span>
        <span className="mono-cap" style={{ color: "var(--accent)" }}>{t.weeks[weekNum - 1]}</span>
      </div>
      <WeekList t={t} weekNum={weekNum} />
    </div>
  );
}

function WeekList({ t, weekNum, compact }: { t: Temporada; weekNum: number; compact?: boolean }) {
  const items = compact ? t.weeks.slice(Math.max(0, weekNum - 2), Math.min(t.weeks.length, weekNum + 2)) : t.weeks;
  const startIndex = compact ? Math.max(0, weekNum - 2) : 0;

  return (
    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: compact ? 6 : 8 }}>
      {items.map((tema, i) => {
        const weekIndex = startIndex + i;
        const current = weekIndex === weekNum - 1;
        return (
          <li
            key={`${t.index}-${tema}`}
            className="flex items-baseline"
            style={{
              gap: 10,
              padding: current ? "7px 10px" : compact ? "2px 10px" : "0 10px",
              borderRadius: 8,
              background: current ? "color-mix(in oklab, var(--accent) 10%, var(--surface))" : "transparent",
            }}
          >
            <span
              className="mono-cap"
              style={{
                width: 18,
                flexShrink: 0,
                fontSize: 9,
                color: current ? "var(--accent)" : "var(--ink-mute)",
              }}
            >
              {String(weekIndex + 1).padStart(2, "0")}
            </span>
            <span
              style={{
                fontSize: compact ? 12 : 13,
                lineHeight: 1.35,
                color: current ? "var(--ink)" : "var(--ink-mute)",
                fontWeight: current ? 500 : 400,
              }}
            >
              {tema}
              {current && <Gloss>{t.weeksEn[weekIndex]}</Gloss>}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

/** Collapsible peek at a future temporada — body, arc, goals, and week themes. */
function UpcomingSeasonPreview({ t }: { t: Temporada }) {
  return (
    <details
      className="group/camino-preview"
      style={{
        marginTop: 10,
        border: "1px solid var(--rule)",
        borderRadius: 12,
        background: "color-mix(in oklab, var(--surface) 65%, transparent)",
        overflow: "hidden",
      }}
    >
      <summary
        className="mono-cap flex cursor-pointer list-none items-center justify-between gap-3 transition-colors hover:text-accent [&::-webkit-details-marker]:hidden"
        style={{ padding: "9px 12px", color: "var(--ink-soft)" }}
      >
        <span className="flex flex-col">
          <span>Ver qué incluye</span>
          <Gloss>Preview what&apos;s coming</Gloss>
        </span>
        <svg
          viewBox="0 0 24 24"
          width="14"
          height="14"
          aria-hidden
          className="shrink-0 transition-transform duration-200 group-open/camino-preview:rotate-180"
          {...ws}
          style={{ color: "var(--ink-mute)" }}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </summary>

      <div
        style={{
          padding: "0 14px 14px",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          borderTop: "1px solid var(--rule)",
        }}
      >
        <p className="font-display text-ink-soft" style={{ fontSize: 15, lineHeight: 1.45, margin: "12px 0 0" }}>
          {t.body}
          <Gloss>{t.bodyEn}</Gloss>
        </p>

        <div style={{ padding: "10px 12px", background: "var(--surface-2)", borderRadius: 10 }}>
          <p className="mono-cap" style={{ marginBottom: 4, fontSize: 10 }}>
            Arco
            <Gloss>Arc</Gloss>
          </p>
          <p className="font-display text-ink-soft" style={{ fontSize: 14, lineHeight: 1.4, margin: 0 }}>
            {t.arc}
            <Gloss>{t.arcEn}</Gloss>
          </p>
        </div>

        <div>
          <p className="mono-cap" style={{ marginBottom: 6, fontSize: 10 }}>
            Metas
            <Gloss>Goals</Gloss>
          </p>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 6 }}>
            {t.goals.map((goal, i) => (
              <li key={goal} className="flex items-start" style={{ gap: 8 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: t.color, marginTop: 7, flexShrink: 0 }} />
                <span className="font-display text-ink-soft" style={{ fontSize: 14, lineHeight: 1.4 }}>
                  {goal}
                  <Gloss>{t.goalsEn[i]}</Gloss>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mono-cap" style={{ marginBottom: 8, fontSize: 10 }}>
            13 semanas
            <Gloss>13 weeks</Gloss>
          </p>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 5 }}>
            {t.weeks.map((tema, i) => (
              <li key={tema} className="flex items-baseline" style={{ gap: 8 }}>
                <span className="mono-cap" style={{ width: 16, flexShrink: 0, fontSize: 9, color: "var(--ink-mute)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ fontSize: 12, lineHeight: 1.35, color: "var(--ink-mute)" }}>
                  {tema}
                  <Gloss>{t.weeksEn[i]}</Gloss>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </details>
  );
}

function PracticeTodayLink({ className }: { className?: string }) {
  return (
    <Link href="/flow/speak" className={className ? `btn-primary ${className}` : "btn-primary"}>
      <span className="lab">Practicar lo de hoy</span>
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...ws}>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </Link>
  );
}

function CurrentSeasonPanel({
  t,
  dayLabel,
  dayNum,
  weekNum,
  progressPct,
  streak,
}: {
  t: Temporada;
  dayLabel: string;
  dayNum: number;
  weekNum: number;
  progressPct: number;
  streak: number;
}) {
  return (
    <aside className="hidden lg:flex lg:flex-col lg:gap-5">
      <div>
        <span className="mono-cap" style={{ color: "var(--accent)" }}>
          Estás aquí · Día {dayLabel}
          <Gloss>{`You are here · Day ${dayLabel}`}</Gloss>
        </span>
        <h2 className="font-display text-ink" style={{ fontWeight: 300, fontSize: 28, lineHeight: 1.08, marginTop: 8 }}>
          {t.title}
          <Gloss>{t.titleEn}</Gloss>
        </h2>
        <span className="mono-cap" style={{ color: t.color, marginTop: 6, display: "inline-block" }}>
          Temporada {t.index} · {t.seasonLabel}
        </span>
      </div>

      <div style={{ padding: 18, background: "var(--surface)", border: "1px solid var(--rule)", borderRadius: 16 }}>
        <div className="flex items-baseline justify-between">
          <span className="mono-cap">
            Progreso
            <Gloss>Progress</Gloss>
          </span>
          <span className="mono-cap" style={{ color: "var(--accent)" }}>
            {dayNum} / {totalDays} días
          </span>
        </div>
        <div
          style={{
            position: "relative",
            height: 6,
            borderRadius: 3,
            background: "var(--bg)",
            marginTop: 12,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: "0 auto 0 0",
              width: `${progressPct}%`,
              background: "var(--accent)",
              borderRadius: 3,
            }}
          />
        </div>
        <p className="font-display text-ink-soft" style={{ fontSize: 15, lineHeight: 1.5, margin: "14px 0 0" }}>
          {t.body}
          <Gloss>{t.bodyEn}</Gloss>
        </p>
      </div>

      <SeasonArcCard t={t} />

      <div style={{ padding: "16px 18px", background: "var(--surface)", border: "1px solid var(--rule)", borderRadius: 14 }}>
        <div className="flex items-baseline justify-between" style={{ marginBottom: 10 }}>
          <span className="mono-cap">
            Semana {weekNum} de 13
            <Gloss>{`Week ${weekNum} of 13`}</Gloss>
          </span>
          <span className="mono-cap" style={{ color: "var(--accent)" }}>{t.weeks[weekNum - 1]}</span>
        </div>
        <WeekList t={t} weekNum={weekNum} compact />
      </div>

      <div>
        <span className="mono-cap">
          Metas de la temporada
          <Gloss>Season goals</Gloss>
        </span>
        {t.goals.map((goal, i) => {
          const done = i === 0 && streak > 0;
          return (
            <div
              key={goal}
              className="flex items-center"
              style={{
                gap: 12,
                padding: "12px 0",
                borderTop: "1px solid var(--rule)",
                marginTop: i === 0 ? 10 : 0,
              }}
            >
              {done ? (
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden {...ws} stroke={t.color} strokeWidth={2.4} style={{ flexShrink: 0 }}>
                  <path d="M5 12.5 10 17l9-10" />
                </svg>
              ) : (
                <span style={{ width: 16, height: 16, borderRadius: "50%", border: "1.5px solid var(--rule)", flexShrink: 0 }} />
              )}
              <span className="font-display" style={{ fontSize: 15, lineHeight: 1.4, color: done ? "var(--ink-soft)" : "var(--ink-mute)" }}>
                {goal}
                <Gloss>{t.goalsEn[i]}</Gloss>
              </span>
            </div>
          );
        })}
      </div>
    </aside>
  );
}

export default function CaminoPage() {
  const { stats } = useStats();
  const { thoughts } = useThoughts();

  const currentIndex = seasonForDate().index;
  const dayNum = (stats.currentDayIndex % totalDays) + 1;
  const dayLabel = String(dayNum).padStart(2, "0");
  const progressPct = Math.min(100, (dayNum / totalDays) * 100);
  const weekNum = Math.min(13, Math.ceil(dayNum / 7));

  const streak = useMemo(
    () => currentStreak(practiceDatesFromThoughts(thoughts)),
    [thoughts],
  );

  const current = TEMPORADAS[currentIndex - 1];

  return (
    <div className="fade-rise relative" style={{ paddingBottom: 96 }}>
      <PageHeader
        title={<Wordmark>Camino</Wordmark>}
        meta={<span className="mono-cap">Día {dayLabel} · {totalDays}</span>}
      />

      {/* Intro spans full width — keeps columns aligned below */}
      <section style={{ marginTop: 22, maxWidth: "52ch" }}>
        <p className="mono-cap">
          El Camino · un año
          <Gloss>The Path · one year</Gloss>
        </p>
        <h1 className="text-display-2xl text-ink" style={{ marginTop: 8 }}>
          Cuatro temporadas.
          <Gloss>Four seasons.</Gloss>
        </h1>
        <p className="text-display-italic text-[1.0625rem]" style={{ margin: "12px 0 0" }}>
          De una conversación con pánico, a olvidar que estás traduciendo.
          <Gloss>From a conversation with panic, to forgetting you&apos;re translating.</Gloss>
        </p>
      </section>

      <div
        className="lg:mt-10 lg:grid lg:items-start"
        style={{ gridTemplateColumns: "minmax(0, 1fr) minmax(300px, 360px)", gap: "3.5rem" }}
      >
        {/* Timeline — journey spine */}
        <div className="lg:row-span-2" style={{ marginTop: 28 }}>
          <div style={{ position: "relative", maxWidth: 560 }}>
            <div style={{ position: "absolute", left: 13, top: 8, bottom: 30, width: 2, background: "var(--rule)" }} />
            <div
              style={{
                position: "absolute",
                left: 13,
                top: 8,
                height: 88,
                width: 2,
                background: `linear-gradient(${SEASONS[0].color}, ${SEASONS[1].color})`,
              }}
            />

            {TEMPORADAS.map((t) => {
              const active = t.index === currentIndex;
              const past = t.index < currentIndex;
              const titleCol = active || past ? "var(--ink)" : "var(--ink-soft)";
              return (
                <div
                  key={t.index}
                  style={{
                    position: "relative",
                    display: "grid",
                    gridTemplateColumns: "28px 1fr",
                    gap: 20,
                    padding: active ? "0 0 24px" : "0 0 22px",
                  }}
                >
                  <div>
                    <span
                      style={{
                        display: "block",
                        width: active ? 13 : 11,
                        height: active ? 13 : 11,
                        borderRadius: "50%",
                        margin: active ? "5px 0 0 7px" : "5px 0 0 8px",
                        background: active ? "var(--accent)" : "var(--bg)",
                        border: active ? "none" : `2px solid ${t.color}`,
                        boxShadow: active
                          ? `0 0 0 4px var(--bg), 0 0 0 7px color-mix(in oklab, var(--accent) 25%, transparent)`
                          : `0 0 0 4px var(--bg)`,
                        opacity: !active && !past && t.index > currentIndex + 1 ? 0.85 : 1,
                      }}
                    />
                  </div>
                  <div>
                    {active ? (
                      <>
                        <div className="hidden lg:block">
                          <TimelineActiveSeason t={t} />
                        </div>
                        <div className="lg:hidden">
                          <ActiveTemporadaCard t={t} dayLabel={dayLabel} weekNum={weekNum} />
                        </div>
                      </>
                    ) : (
                      <div
                        style={{
                          padding: "14px 16px",
                          background: past ? "var(--surface)" : "transparent",
                          border: past ? "1px solid var(--rule)" : "none",
                          borderRadius: 14,
                        }}
                      >
                        <h3 className="font-display" style={{ fontWeight: 300, fontSize: 20, lineHeight: 1.15, color: titleCol, margin: 0 }}>
                          T{t.index} — {t.title}
                          <Gloss>{t.titleEn}</Gloss>
                        </h3>
                        <span className="mono-cap" style={{ color: t.color, marginTop: 6, display: "inline-block" }}>
                          {t.range}
                          <Gloss>{t.rangeEn}</Gloss>
                        </span>
                        {past && (
                          <p className="text-gloss" style={{ color: "var(--ink-mute)", margin: "8px 0 0", maxWidth: "42ch", fontSize: 13 }}>
                            {t.body}
                            <Gloss>{t.bodyEn}</Gloss>
                          </p>
                        )}
                        {!past && <UpcomingSeasonPreview t={t} />}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            <div style={{ position: "relative", display: "grid", gridTemplateColumns: "28px 1fr", gap: 20 }}>
              <div>
                <span
                  style={{
                    display: "block",
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    margin: "5px 0 0 8px",
                    background: "var(--bg)",
                    border: "2px dashed var(--ink-mute)",
                  }}
                />
              </div>
              <div>
                <span className="mono-cap">
                  El horizonte
                  <Gloss>The horizon</Gloss>
                </span>
                <p className="font-display text-ink-soft" style={{ fontStyle: "italic", fontWeight: 300, fontSize: 19, lineHeight: 1.32, margin: "5px 0 0" }}>
                  Hablas, y se te olvida que estás traduciendo.
                  <Gloss>You speak, and you forget you&apos;re translating.</Gloss>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:sticky lg:top-24 lg:self-start">
          <CurrentSeasonPanel
            t={current}
            dayLabel={dayLabel}
            dayNum={dayNum}
            weekNum={weekNum}
            progressPct={progressPct}
            streak={streak}
          />
        </div>

        <PracticeTodayLink className="mt-8 lg:col-start-2 lg:mt-5" />
      </div>
    </div>
  );
}
