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
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div
        style={{
          padding: "18px 20px",
          background: "var(--surface)",
          border: "1px solid color-mix(in oklab, var(--accent) 38%, var(--rule))",
          borderRadius: 16,
          boxShadow: "0 0 0 1px color-mix(in oklab, var(--accent) 12%, transparent)",
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

      <div style={{ padding: "16px 18px", background: "var(--surface)", border: "1px solid var(--rule)", borderRadius: 14 }}>
        <p className="font-display text-ink-soft" style={{ fontSize: 16, lineHeight: 1.45, margin: 0 }}>
          {t.body}
          <Gloss>{t.bodyEn}</Gloss>
        </p>
      </div>

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

      <div style={{ padding: "16px 18px", background: "var(--surface)", border: "1px solid var(--rule)", borderRadius: 14 }}>
        <div className="flex items-baseline justify-between" style={{ marginBottom: 12 }}>
          <span className="mono-cap">
            Semana {weekNum} de 13
            <Gloss>{`Week ${weekNum} of 13`}</Gloss>
          </span>
          <span className="mono-cap" style={{ color: "var(--accent)" }}>{t.weeks[weekNum - 1]}</span>
        </div>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
          {t.weeks.map((tema, i) => {
            const current = i === weekNum - 1;
            return (
              <li
                key={tema}
                className="flex items-baseline"
                style={{
                  gap: 10,
                  padding: current ? "8px 10px" : "0 10px",
                  borderRadius: 8,
                  background: current ? "color-mix(in oklab, var(--accent) 10%, var(--surface))" : "transparent",
                }}
              >
                <span className="mono-cap" style={{ width: 18, flexShrink: 0, fontSize: 9, color: current ? "var(--accent)" : "var(--ink-mute)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ fontSize: 13, lineHeight: 1.35, color: current ? "var(--ink)" : "var(--ink-mute)", fontWeight: current ? 500 : 400 }}>
                  {tema}
                  {current && <Gloss>{t.weeksEn[i]}</Gloss>}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default function CaminoPage() {
  const { stats } = useStats();
  const { thoughts } = useThoughts();

  const currentIndex = seasonForDate().index;
  const dayNum = (stats.currentDayIndex % totalDays) + 1;
  const dayLabel = String(dayNum).padStart(2, "0");
  const progressPct = Math.min(100, (dayNum / totalDays) * 100);
  // Every week is 6 new days + 1 repaso, so the week is a straight division.
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

      <div className="lg:mt-8 lg:grid lg:grid-cols-[1.4fr_1fr] lg:items-start lg:gap-12">
        {/* ===== MAIN — the year as a journey ===== */}
        <div style={{ marginTop: 22 }}>
          <p className="mono-cap">
            El Camino · un año
            <Gloss>{"The Path · one year"}</Gloss>
          </p>
          <h1 className="text-display-2xl text-ink" style={{ marginTop: 8 }}>
            Cuatro temporadas.
            <Gloss>{"Four seasons."}</Gloss>
          </h1>
          <p
            className="text-display-italic text-[1.0625rem]"
            style={{ margin: "12px 0 0", maxWidth: "40ch" }}
          >
            De una conversación con pánico, a olvidar que estás traduciendo.
            <Gloss>{"From a conversation with panic, to forgetting you're translating."}</Gloss>
          </p>

          <div style={{ position: "relative", marginTop: 40, maxWidth: 620 }}>
            {/* spine */}
            <div style={{ position: "absolute", left: 13, top: 8, bottom: 30, width: 2, background: "var(--rule)" }} />
            <div
              style={{
                position: "absolute",
                left: 13,
                top: 8,
                height: 120,
                width: 2,
                background: `linear-gradient(${SEASONS[0].color}, ${SEASONS[1].color})`,
              }}
            />

            {TEMPORADAS.map((t) => {
              const active = t.index === currentIndex;
              const past = t.index < currentIndex;
              const titleCol = active || past ? "var(--ink)" : "var(--ink-soft)";
              return (
                <div key={t.index} style={{ position: "relative", display: "grid", gridTemplateColumns: "28px 1fr", gap: 20, padding: "0 0 28px" }}>
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
                      <ActiveTemporadaCard t={t} dayLabel={dayLabel} weekNum={weekNum} />
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
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* El horizonte */}
            <div style={{ position: "relative", display: "grid", gridTemplateColumns: "28px 1fr", gap: 20 }}>
              <div>
                <span style={{ display: "block", width: 11, height: 11, borderRadius: "50%", margin: "5px 0 0 8px", background: "var(--bg)", border: "2px dashed var(--ink-mute)" }} />
              </div>
              <div>
                <span className="mono-cap">
                  El horizonte
                  <Gloss>{"The horizon"}</Gloss>
                </span>
                <p className="font-display text-ink-soft" style={{ fontStyle: "italic", fontWeight: 300, fontSize: 19, lineHeight: 1.32, margin: "5px 0 0" }}>
                  Hablas, y se te olvida que estás traduciendo.
                  <Gloss>{"You speak, and you forget you're translating."}</Gloss>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== ASIDE — current temporada ===== */}
        <aside className="hidden lg:flex lg:flex-col" style={{ paddingLeft: 40, borderLeft: "1px solid var(--rule)" }}>
          <span className="mono-cap" style={{ color: "var(--accent)" }}>
            Estás aquí · Día {dayLabel}
            <Gloss>{`You are here · Day ${dayLabel}`}</Gloss>
          </span>
          <h2 className="font-display text-ink" style={{ fontWeight: 300, fontSize: 27, lineHeight: 1.08, marginTop: 8 }}>
            {current.title}
            <Gloss>{current.titleEn}</Gloss>
          </h2>
          <span className="mono-cap" style={{ color: current.color, marginTop: 6 }}>
            Temporada {current.index} · {current.seasonLabel}
          </span>

          <div style={{ marginTop: 26, padding: 18, background: "var(--surface)", border: "1px solid var(--rule)", borderRadius: 16 }}>
            <div className="flex items-baseline justify-between">
              <span className="mono-cap">
                Progreso
                <Gloss>{"Progress"}</Gloss>
              </span>
              <span className="mono-cap" style={{ color: "var(--accent)" }}>{dayNum} / {totalDays} días</span>
            </div>
            <div style={{ position: "relative", height: 6, borderRadius: 3, background: "var(--bg)", marginTop: 12, overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: "0 auto 0 0", width: `${progressPct}%`, background: "var(--accent)", borderRadius: 3 }} />
            </div>
            <p className="mono-cap" style={{ margin: "12px 0 0" }}>
              Semana {weekNum} de 13 · {current.weeks[weekNum - 1]}
              <Gloss>{`Week ${weekNum} of 13 · ${current.weeksEn[weekNum - 1]}`}</Gloss>
            </p>
            <p className="font-display text-ink-soft" style={{ fontSize: 15, lineHeight: 1.5, margin: "16px 0 0" }}>
              {current.body}
              <Gloss>{current.bodyEn}</Gloss>
            </p>
          </div>

          <div style={{ marginTop: 22 }}>
            <span className="mono-cap">
              Metas de la temporada
              <Gloss>{"Season goals"}</Gloss>
            </span>
            {current.goals.map((goal, i) => {
              const done = i === 0 && streak > 0;
              return (
                <div key={i} className="flex items-center" style={{ gap: 12, padding: "13px 0", borderTop: "1px solid var(--rule)", marginTop: i === 0 ? 10 : 0 }}>
                  {done ? (
                    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden fill="none" stroke={current.color} strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <path d="M5 12.5 10 17l9-10" />
                    </svg>
                  ) : (
                    <span style={{ width: 16, height: 16, borderRadius: "50%", border: "1.5px solid var(--rule)", flexShrink: 0 }} />
                  )}
                  <span className="font-display" style={{ fontSize: 16, color: done ? "var(--ink-soft)" : "var(--ink-mute)" }}>
                    {goal}
                    <Gloss>{current.goalsEn[i]}</Gloss>
                  </span>
                </div>
              );
            })}
          </div>

          <Link href="/practice" className="btn-primary" style={{ marginTop: "auto" }}>
            <span className="lab">Practicar lo de hoy<Gloss>{"Practice today's"}</Gloss></span>
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </aside>
      </div>

      {/* mobile CTA */}
      <Link href="/practice" className="btn-primary lg:hidden" style={{ marginTop: 32 }}>
        <span className="lab">Practicar lo de hoy</span>
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </Link>
    </div>
  );
}
