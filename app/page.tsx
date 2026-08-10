"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Gloss } from "@/components/Gloss";
import { PageHeader, Wordmark } from "@/components/PageHeader";
import { PlayButton } from "@/components/PlayButton";
import {
  speakDayForIndex,
  PROMPTS_PER_DAY,
  openTurnForDayIndex,
  openTurnReviewDayIndex,
} from "@/content/prompts";
import { TEMPORADAS } from "@/content/temporadas";
import {
  clearDraft,
  currentWeek,
  getSessionIndex,
  isWeekPrimed,
  readingDoneToday,
  setCurrentDayIndex,
  weekDaysDone,
} from "@/lib/store";
import { useStats } from "@/hooks/useStats";
import { daysInWeek, planContextFromDay } from "@/lib/planDay";
import { totalDays } from "@/content/frames";
import { SEASONS } from "@/lib/season";

const ws = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const Arrow = (
  <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden {...ws}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const ArrowSmall = (
  <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden {...ws}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const Check = (
  <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.5 10 17l9-10" />
  </svg>
);

const ChevronDown = (
  <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden {...ws}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const IconExpand = (
  <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden {...ws}>
    <path d="M9 3H3v6M15 21h6v-6M3 3l7 7M21 21l-7-7" />
  </svg>
);

const IconSun = (
  <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden {...ws}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

const IconTrend = (
  <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden {...ws}>
    <path d="M3 17l6-6 4 4 8-8M15 7h6v6" />
  </svg>
);

const IconMountain = (
  <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden {...ws}>
    <path d="M3 19l6-11 4 6.5 2-3L21 19H3Z" />
  </svg>
);

const IconPuzzle = (
  <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden {...ws}>
    <path d="M10 4h4v2.2a1.8 1.8 0 1 0 0 3.6V12h2.2a1.8 1.8 0 1 1 0 3.6H14v2.2a1.8 1.8 0 1 1-3.6 0V15.6H8.2a1.8 1.8 0 1 1 0-3.6H10V9.8a1.8 1.8 0 1 1-3.6 0V4H10Z" />
  </svg>
);

const IconBook = (
  <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden {...ws}>
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
  </svg>
);

export default function HomePage() {
  const { stats } = useStats();
  const [now, setNow] = useState<Date | null>(null);
  const [sessionIndex, setSessionIndex] = useState(0);
  const [readingDone, setReadingDone] = useState(false);
  const [openedDay, setOpenedDay] = useState<{ day: number | null } | null>(null);

  useEffect(() => {
    setNow(new Date());
  }, []);

  useEffect(() => {
    function sync() {
      setSessionIndex(getSessionIndex());
      setReadingDone(readingDoneToday());
    }
    sync();
    window.addEventListener("pues:stats-change", sync);
    return () => window.removeEventListener("pues:stats-change", sync);
  }, []);

  const week = currentWeek(stats);
  const primed = isWeekPrimed(week, stats);
  const weekDoneDays = useMemo(() => new Set(weekDaysDone(week, stats)), [week, stats]);
  const weekDayNums = useMemo(
    () => daysInWeek(week).filter((d) => d <= totalDays),
    [week],
  );

  const day = speakDayForIndex(stats.currentDayIndex);
  const dayNum = day.day.toString().padStart(2, "0");
  const mission = day.missionEs ?? day.line;
  const missionEn = day.missionEn;

  const ctx = planContextFromDay(day.day);
  const season = SEASONS[ctx.seasonIdx];
  const temporada = TEMPORADAS[ctx.seasonIdx];
  const weekNum = ctx.weekNum;
  const doneCount = stats.daysDone.length;
  const planPct = Math.min(100, (doneCount / totalDays) * 100);

  const weekday = now?.getDay() ?? null;
  const weekendInvite = !primed && (weekday === 0 || weekday === 6);
  const weekendName = weekday === 0 ? "domingo" : "sábado";

  const ctaLabel =
    sessionIndex === 0 ? "Una frase" : sessionIndex >= PROMPTS_PER_DAY ? "Repasar" : "¿Otra?";
  const ctaGloss =
    sessionIndex === 0
      ? "One sentence"
      : sessionIndex >= PROMPTS_PER_DAY
        ? "Practice again"
        : "One more";

  const openTurnIndex = useMemo(
    () => openTurnReviewDayIndex(stats.currentDayIndex, stats.daysDone),
    [stats.currentDayIndex, stats.daysDone],
  );
  const openTurnDayNum = openTurnIndex !== null ? speakDayForIndex(openTurnIndex).day : null;
  const canDoOpenTurn =
    openTurnIndex !== null &&
    openTurnDayNum !== null &&
    (stats.daysDone.includes(openTurnDayNum) ||
      (openTurnIndex === stats.currentDayIndex && sessionIndex >= PROMPTS_PER_DAY));
  const openTurnHint =
    openTurnForDayIndex(stats.currentDayIndex) && sessionIndex < PROMPTS_PER_DAY;

  const dateWeekday = now
    ? now.toLocaleDateString("es", { weekday: "long" })
    : "";
  const dateHeadline = now
    ? `${dateWeekday}, ${now.getDate()} de ${now.toLocaleDateString("es", { month: "long" })}`
    : "";

  return (
    <div style={{ paddingBottom: 72 }}>
      <div className="lg:hidden">
        <PageHeader title={<Wordmark>Pues</Wordmark>} />
      </div>

      <div className="hoy-dash__topbar">
        <Link href="/semana" className="hoy-dash__week-select">
          Semana {weekNum}
          {ChevronDown}
        </Link>
        <Link href="/camino" className="hoy-dash__view-full text-caption">
          Vista completa
          {IconExpand}
        </Link>
      </div>

      <div className="hoy-dash__grid">
        <div className="hoy-dash__main">
          <div className="hoy-dash__date">
            <h1>{dateHeadline || "Hoy"}</h1>
            <p className="text-caption">
              Semana {weekNum} · Día {dayNum}
            </p>
          </div>

          <div className="hoy-dash__daystrip">
            {weekDayNums.map((d, i) => {
              const isCurrent = d === day.day;
              const isDone = weekDoneDays.has(d);
              return (
                <div key={d} className="hoy-dash__daystrip-cell">
                  <span className="hoy-dash__daystrip-label">{`D${i + 1}`}</span>
                  <span
                    className={`hoy-dash__daystrip-dot${
                      isDone ? " hoy-dash__daystrip-dot--done" : isCurrent ? " hoy-dash__daystrip-dot--current" : ""
                    }`}
                  >
                    {isDone ? Check : isCurrent ? "•" : ""}
                  </span>
                </div>
              );
            })}
          </div>

          {weekendInvite && (
            <div
              className="hoy-card"
              style={{ marginTop: 14, padding: "12px 15px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14, flexWrap: "wrap" }}
            >
              <div>
                <p className="font-display text-ink" style={{ fontSize: "1.0625rem", margin: 0 }}>
                  {`Es ${weekendName}. Enciende la semana.`}
                </p>
                <Gloss>{`It's ${weekday === 0 ? "Sunday" : "Saturday"}. Light the week.`}</Gloss>
              </div>
              <Link href="/semana" className="btn-primary hoy-cta">
                <span className="lab">Preparar la semana {weekNum}</span>
                {Arrow}
              </Link>
            </div>
          )}

          <div className="hoy-card hoy-dash__today-card">
            <div className="hoy-dash__today-card-head">
              <span className="text-caption" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--accent)" }}>
                {IconSun}
                HOY
              </span>
              {sessionIndex > 0 && (
                <span className="mono-cap">
                  {sessionIndex} de {PROMPTS_PER_DAY}
                </span>
              )}
            </div>

            <div className="hoy-dash__today-card-body">
              <div style={{ minWidth: 0, flex: 1 }}>
                <span className="text-caption hoy-dash__today-eyebrow">
                  {dayNum} · {day.themeEs}
                </span>
                <h2 className="hoy-dash__today-headline">{mission}</h2>
                {missionEn && <p className="hoy-dash__today-gloss">{missionEn}</p>}

                {openTurnHint && (
                  <p className="text-caption" style={{ marginTop: 10, color: "var(--ink-mute)" }}>
                    Después de cinco frases · sin guion
                    <Gloss>After five sentences — one unscripted turn</Gloss>
                  </p>
                )}

                {canDoOpenTurn && openTurnIndex !== null && (
                  <Link
                    href={`/flow/abierto?i=${openTurnIndex}`}
                    className="text-caption transition-colors hover:text-accent"
                    style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 10, color: "var(--ink-soft)" }}
                  >
                    Una más, sin guion
                    {ArrowSmall}
                  </Link>
                )}
              </div>

              <Link href="/flow/speak" className="btn-primary hoy-cta" style={{ flexShrink: 0 }}>
                <span className="lab">{ctaLabel}</span>
                {Arrow}
              </Link>
            </div>
          </div>

          <div className="hoy-dash__week-section">
            <div className="hoy-dash__week-section-head">
              <span className="text-caption">Esta semana</span>
              <span className="mono-cap text-ink-soft">{weekDayNums.length} días</span>
            </div>

            <ul className="hoy-dash__week-list">
              {weekDayNums.map((d, i) => {
                const speakDay = speakDayForIndex(d - 1);
                const stems = [...new Set(speakDay.prompts.map((p) => p.frameStem))].join(" · ");
                const isCurrent = d === day.day;
                const isDone = weekDoneDays.has(d);
                const isOpen = (openedDay ? openedDay.day : day.day) === d;
                const hasOpenTurn = Boolean(openTurnForDayIndex(d - 1));

                return (
                  <li key={d}>
                    <button
                      type="button"
                      onClick={() => setOpenedDay({ day: isOpen ? null : d })}
                      aria-expanded={isOpen}
                      className={`hoy-dash__week-row${isCurrent ? " hoy-dash__week-row--current" : ""}`}
                    >
                      <span className="hoy-dash__week-row-badge">{String(i + 1).padStart(2, "0")}</span>
                      <span className="hoy-dash__week-row-text">
                        <span className="hoy-dash__week-row-title">{speakDay.themeEs}</span>
                        <span className="text-caption hoy-dash__week-row-sub">{stems}</span>
                      </span>
                      <span className="hoy-dash__week-row-status">
                        {isCurrent && <span className="hoy-dash__week-row-tag">Hoy</span>}
                        {isDone && !isCurrent && <span style={{ color: "var(--accent)" }}>{Check}</span>}
                        <span
                          className={`hoy-dash__week-row-chevron${isOpen ? " hoy-dash__week-row-chevron--open" : ""}`}
                        >
                          {ArrowSmall}
                        </span>
                      </span>
                    </button>

                    {isOpen && (
                      <div className="hoy-dash__week-expanded">
                        {speakDay.prompts.map((p) => (
                          <div key={p.id} className="hoy-dash__week-expanded-prompt">
                            <span style={{ minWidth: 0 }}>
                              <span className="text-caption hoy-dash__week-expanded-stem">{p.frameStem}</span>
                              <span className="font-display text-ink" style={{ display: "block", fontSize: "0.9375rem" }}>
                                {p.spanish}
                              </span>
                              <span className="text-caption" style={{ display: "block", color: "var(--ink-mute)" }}>
                                {p.english}
                              </span>
                            </span>
                            <PlayButton text={p.spanish} label={`Escuchar: ${p.spanish}`} />
                          </div>
                        ))}

                        <div className="hoy-dash__week-expanded-actions">
                          {isCurrent ? (
                            <Link href="/flow/speak" onClick={() => clearDraft()} className="btn-primary hoy-cta">
                              <span className="lab">Practicar</span>
                              {ArrowSmall}
                            </Link>
                          ) : (
                            <Link
                              href="/flow/speak"
                              onClick={() => {
                                setCurrentDayIndex(d - 1);
                                clearDraft();
                              }}
                              className="text-caption transition-colors hover:text-accent"
                              style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--accent)" }}
                            >
                              {isDone ? "Repetir este día" : "Empezar aquí"}
                              {ArrowSmall}
                            </Link>
                          )}
                          {hasOpenTurn && (
                            <Link
                              href={`/flow/abierto?i=${d - 1}`}
                              onClick={() => clearDraft()}
                              className="text-caption transition-colors hover:text-accent"
                              style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--ink-soft)" }}
                            >
                              Sin guion
                              {ArrowSmall}
                            </Link>
                          )}
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            <Link href="/semana" className="text-caption transition-colors hover:text-accent" style={{ display: "inline-flex", marginTop: 16, color: "var(--accent)" }}>
              Ver todas las semanas →
            </Link>
          </div>
        </div>

        <aside className="hoy-dash__sidebar">
          <div className="hoy-card hoy-side-card hoy-side-card--progress">
            <div className="hoy-side-card__head">
              <span className="hoy-side-card__eyebrow">{IconTrend}Tu progreso</span>
            </div>
            <div className="hoy-stat-strip" role="group" aria-label="Tu progreso">
              <div className="hoy-stat">
                <span className="hoy-stat__num">{doneCount}</span>
                <span className="hoy-stat__label">Días</span>
              </div>
              <div className="hoy-stat">
                <span className="hoy-stat__num">{stats.sentencesCreated}</span>
                <span className="hoy-stat__label">Frases</span>
              </div>
              <div className="hoy-stat">
                <span className="hoy-stat__num">{weekNum}</span>
                <span className="hoy-stat__label">Semana</span>
              </div>
            </div>
            <div className="hoy-stat-progress">
              <div className="hoy-stat-progress__track">
                <div className="hoy-stat-progress__fill" style={{ width: `${planPct}%` }} />
              </div>
              <span className="hoy-stat-progress__label text-caption">
                {doneCount} de {totalDays} días
              </span>
            </div>
            <Link href="/progress" className="hoy-side-card__link text-caption">
              Ver todo mi progreso →
            </Link>
          </div>

          <div className="hoy-card hoy-side-card">
            <div className="hoy-side-card__head">
              <span className="hoy-side-card__eyebrow">{IconMountain}Tu camino</span>
            </div>
            <p className="font-display text-ink" style={{ fontSize: "0.9375rem", margin: "10px 0 0" }}>
              T{season.index} · {temporada.title}
            </p>
            <p className="text-caption" style={{ marginTop: 2 }}>
              Semana {weekNum} de 13
            </p>
            <div className="hoy-dash__camino-bar">
              <div style={{ width: `${planPct}%` }} />
            </div>
            <Link href="/camino" className="hoy-side-card__link text-caption">
              Continuar camino →
            </Link>
          </div>

          <div className="hoy-card hoy-side-card">
            <div className="hoy-side-card__head">
              <span className="hoy-side-card__eyebrow">{IconPuzzle}Formar la frase</span>
              <span className="hoy-side-card__tag">5 frases</span>
            </div>
            <p className="font-display text-ink" style={{ fontSize: "0.9375rem", margin: "10px 0 0" }}>
              Juegos, lugares y más
            </p>
            <p className="text-caption" style={{ marginTop: 4 }}>
              Practica construyendo tus propias frases.
            </p>
            <Link href="/practice/sentence-former" className="hoy-side-card__link text-caption">
              Practicar ahora →
            </Link>
          </div>

          <div className="hoy-card hoy-side-card">
            <div className="hoy-side-card__head">
              <span className="hoy-side-card__eyebrow">{IconBook}Tu cuaderno</span>
            </div>
            <p className="font-display text-ink" style={{ fontSize: "0.9375rem", margin: "10px 0 0" }}>
              {stats.daysPracticed} días · {stats.sentencesCreated} frases
            </p>
            <p className="text-caption" style={{ marginTop: 4 }}>
              Tus frases, ideas y ejemplos en un solo lugar.
            </p>
            <Link href="/cuaderno" className="hoy-side-card__link text-caption">
              Abrir cuaderno →
            </Link>
          </div>

          <div className="hoy-card hoy-side-card">
            <div className="hoy-side-card__head">
              <span className="hoy-side-card__eyebrow">La lectura</span>
            </div>
            <p className="text-caption" style={{ marginTop: 10, color: readingDone ? "var(--accent)" : "var(--ink-soft)" }}>
              {readingDone ? "Leído esta noche" : "Esta noche"}
            </p>
            <Link href="/read" className="hoy-side-card__link text-caption">
              Abrir lectura →
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
