"use client";

import Link from "next/link";
import { useMemo } from "react";
import { PageHeader, Wordmark } from "@/components/PageHeader";
import { useStats } from "@/hooks/useStats";
import { useThoughts } from "@/hooks/useThoughts";
import { totalDays } from "@/content/frames";
import { SEASONS, seasonForDate } from "@/lib/season";
import { currentStreak, practiceDatesFromThoughts } from "@/lib/streak";

const SEASON_DAYS = 90;

type Temporada = {
  index: 1 | 2 | 3 | 4;
  range: string;
  seasonLabel: string;
  color: string;
  title: string;
  body: string;
  goals: string[];
};

const TEMPORADAS: Temporada[] = [
  {
    index: 1,
    range: "Jun – Ago · verano",
    seasonLabel: "verano",
    color: SEASONS[0].color,
    title: "El verano que hablo",
    body: "Una conversación simple, sin pánico — y tu primera noticia corta.",
    goals: ["Una conversación simple, sin pánico.", "Leer una noticia corta, entera."],
  },
  {
    index: 2,
    range: "Sep – Nov · otoño",
    seasonLabel: "otoño",
    color: SEASONS[1].color,
    title: "Seguir el hilo",
    body: "Sigues una historia en las noticias · hablas un minuto sin parar.",
    goals: ["Seguir una historia varios días.", "Hablar un minuto sin parar."],
  },
  {
    index: 3,
    range: "Dic – Feb · invierno",
    seasonLabel: "invierno",
    color: SEASONS[2].color,
    title: "Sin subtítulos",
    body: "Ves algo sin subtítulos, sin perderte · una charla de ida y vuelta.",
    goals: ["Ver algo sin subtítulos.", "Una charla de ida y vuelta."],
  },
  {
    index: 4,
    range: "Mar – May · primavera",
    seasonLabel: "primavera",
    color: SEASONS[3].color,
    title: "Conversación completa",
    body: "Una conversación larga, con bromas y silencios, sin esfuerzo.",
    goals: ["Una conversación larga y natural.", "Bromas y silencios, sin esfuerzo."],
  },
];

export default function CaminoPage() {
  const { stats } = useStats();
  const { thoughts } = useThoughts();

  const currentIndex = seasonForDate().index;
  const dayNum = (stats.currentDayIndex % totalDays) + 1;
  const dayLabel = String(dayNum).padStart(2, "0");
  const progressPct = Math.min(100, (dayNum / SEASON_DAYS) * 100);

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
          <p className="mono-cap">El Camino · un año</p>
          <h1 className="text-display-2xl text-ink" style={{ marginTop: 8 }}>
            Cuatro temporadas.
          </h1>
          <p
            className="text-display-italic text-[1.0625rem]"
            style={{ margin: "12px 0 0", maxWidth: "40ch" }}
          >
            De una conversación con pánico, a olvidar que estás traduciendo.
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
              const bodyCol = active ? "var(--ink-soft)" : "var(--ink-mute)";
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
                    {active && (
                      <span className="mono-cap" style={{ color: "var(--accent)" }}>
                        Estás aquí · Día {dayLabel}
                      </span>
                    )}
                    <h3 className="font-display" style={{ fontWeight: 300, fontSize: 24, lineHeight: 1.1, color: titleCol, margin: active ? "4px 0 3px" : "0 0 3px" }}>
                      T{t.index} — {t.title}
                    </h3>
                    <span className="mono-cap" style={{ color: t.color }}>{t.range}</span>
                    <p className="text-gloss" style={{ color: bodyCol, margin: "8px 0 0", maxWidth: "46ch" }}>
                      {t.body}
                    </p>
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
                <span className="mono-cap">El horizonte</span>
                <p className="font-display text-ink-soft" style={{ fontStyle: "italic", fontWeight: 300, fontSize: 19, lineHeight: 1.32, margin: "5px 0 0" }}>
                  Hablas, y se te olvida que estás traduciendo.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== ASIDE — current temporada ===== */}
        <aside className="hidden lg:flex lg:flex-col" style={{ paddingLeft: 40, borderLeft: "1px solid var(--rule)" }}>
          <span className="mono-cap" style={{ color: "var(--accent)" }}>Estás aquí · Día {dayLabel}</span>
          <h2 className="font-display text-ink" style={{ fontWeight: 300, fontSize: 27, lineHeight: 1.08, marginTop: 8 }}>
            {current.title}
          </h2>
          <span className="mono-cap" style={{ color: current.color, marginTop: 6 }}>
            Temporada {current.index} · {current.seasonLabel}
          </span>

          <div style={{ marginTop: 26, padding: 18, background: "var(--surface)", border: "1px solid var(--rule)", borderRadius: 16 }}>
            <div className="flex items-baseline justify-between">
              <span className="mono-cap">Progreso</span>
              <span className="mono-cap" style={{ color: "var(--accent)" }}>{dayNum} / {SEASON_DAYS} días</span>
            </div>
            <div style={{ position: "relative", height: 6, borderRadius: 3, background: "var(--bg)", marginTop: 12, overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: "0 auto 0 0", width: `${progressPct}%`, background: "var(--accent)", borderRadius: 3 }} />
            </div>
            <p className="font-display text-ink-soft" style={{ fontSize: 15, lineHeight: 1.5, margin: "16px 0 0" }}>
              {current.body}
            </p>
          </div>

          <div style={{ marginTop: 22 }}>
            <span className="mono-cap">Metas de la temporada</span>
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
                  </span>
                </div>
              );
            })}
          </div>

          <Link href="/practice" className="btn-primary" style={{ marginTop: "auto" }}>
            <span className="lab">Practicar lo de hoy</span>
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
