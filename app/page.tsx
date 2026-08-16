"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { Gloss } from "@/components/Gloss";
import { PageHeader, Wordmark } from "@/components/PageHeader";
import { PlayButton } from "@/components/PlayButton";
import {
  speakDayForIndex,
  PROMPTS_PER_DAY,
  openTurnForDayIndex,
  openTurnReviewDayIndex,
} from "@/content/prompts";
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
  <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden {...ws}>
    <path d="M3 19l6-11 4 6.5 2-3L21 19H3Z" />
  </svg>
);

const IconPuzzle = (
  <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden {...ws}>
    <path d="M10 4h4v2.2a1.8 1.8 0 1 0 0 3.6V12h2.2a1.8 1.8 0 1 1 0 3.6H14v2.2a1.8 1.8 0 1 1-3.6 0V15.6H8.2a1.8 1.8 0 1 1 0-3.6H10V9.8a1.8 1.8 0 1 1-3.6 0V4H10Z" />
  </svg>
);

/* Cuaderno — a pencil, the act of writing your own sentences down. */
const IconPencil = (
  <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden {...ws}>
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
  </svg>
);

/* La lectura — an open book, two facing pages. */
const IconRead = (
  <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden {...ws}>
    <path d="M4 5.5h5.5a2.5 2.5 0 0 1 2.5 2.5v10a2 2 0 0 0-2-2H4Z" />
    <path d="M20 5.5h-5.5A2.5 2.5 0 0 0 12 8v10a2 2 0 0 1 2-2h6Z" />
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
  const weekNum = ctx.weekNum;
  const doneCount = stats.daysDone.length;
  const planPct = Math.min(100, (doneCount / totalDays) * 100);

  const weekday = now?.getDay() ?? null;
  const weekendInvite = !primed && (weekday === 0 || weekday === 6);
  const weekendName = weekday === 0 ? "domingo" : "sábado";

  const ctaLabel =
    sessionIndex === 0
      ? "Decir una frase"
      : sessionIndex >= PROMPTS_PER_DAY
        ? "Repasar el día"
        : "Decir otra frase";

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

  /* Sidebar shortcuts. Each tint is a zone token, so the badges re-hue with
     the active theme instead of pinning one palette's hex. */
  const accesos = [
    {
      href: "/camino",
      icon: IconMountain,
      tint: "var(--zone-practica)",
      title: "Tu camino",
      sub: `Semana ${weekNum} de 13`,
    },
    {
      href: "/practice/sentence-former",
      icon: IconPuzzle,
      tint: "var(--zone-lab)",
      title: "Formar la frase",
      sub: `${PROMPTS_PER_DAY} frases nuevas`,
    },
    {
      href: "/cuaderno",
      icon: IconPencil,
      tint: "var(--zone-lugares)",
      title: "Cuaderno",
      sub: `${stats.daysPracticed} días · ${stats.sentencesCreated} frases`,
    },
    {
      href: "/read",
      icon: IconRead,
      tint: "var(--zone-guias)",
      title: "La lectura",
      sub: readingDone ? "Leído esta noche" : "Esta noche",
    },
  ];

  return (
    <div style={{ paddingBottom: 72 }}>
      <div className="lg:hidden">
        <PageHeader title={<Wordmark>Pues</Wordmark>} />
      </div>

      <div className="hoy-dash__grid">
        <div className="hoy-dash__main">
          <div className="hoy-dash__date">
            <div className="hoy-dash__date-row">
              <h1>{dateHeadline || "Hoy"}</h1>
              <Link href="/camino" className="hoy-dash__view-full text-caption">
                Vista completa
                {IconExpand}
              </Link>
            </div>
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
              <span className="hoy-dash__today-eyebrow">
                {IconSun}
                <span>Hoy · {dayNum} · {day.themeEs}</span>
              </span>
              {sessionIndex > 0 && (
                <span className="mono-cap">
                  {sessionIndex} de {PROMPTS_PER_DAY}
                </span>
              )}
            </div>

            <h2 className="hoy-dash__today-headline">{mission}</h2>
            {missionEn && <p className="hoy-dash__today-gloss">{missionEn}</p>}

            {openTurnHint && (
              <p className="text-caption" style={{ marginTop: 10, color: "var(--ink-mute)" }}>
                Después de cinco frases · sin guion
                <Gloss>After five sentences — one unscripted turn</Gloss>
              </p>
            )}

            <div className="hoy-dash__today-actions">
              <Link href="/flow/speak" className="hoy-dash__today-cta">
                {ctaLabel}
                {Arrow}
              </Link>

              {canDoOpenTurn && openTurnIndex !== null && (
                <Link
                  href={`/flow/abierto?i=${openTurnIndex}`}
                  className="text-caption transition-colors hover:text-accent"
                  style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--ink-soft)" }}
                >
                  Una más, sin guion
                  {ArrowSmall}
                </Link>
              )}
            </div>
          </div>

          <div className="hoy-dash__week-section">
            <div className="hoy-dash__week-section-head">
              <span className="mono-cap">Esta semana</span>
              <span className="text-caption">{weekDayNums.length} días</span>
            </div>

            <ul className="hoy-card hoy-dash__week-list">
              {weekDayNums.map((d) => {
                const speakDay = speakDayForIndex(d - 1);
                const stems = [...new Set(speakDay.prompts.map((p) => p.frameStem))].join(" · ");
                const isCurrent = d === day.day;
                const isDone = weekDoneDays.has(d);
                const isOpen = openedDay?.day === d;
                const hasOpenTurn = Boolean(openTurnForDayIndex(d - 1));

                return (
                  <li key={d} className="hoy-dash__week-item">
                    <button
                      type="button"
                      onClick={() => setOpenedDay({ day: isOpen ? null : d })}
                      aria-expanded={isOpen}
                      className={`hoy-dash__week-row${isCurrent ? " hoy-dash__week-row--current" : ""}`}
                    >
                      <span className="hoy-dash__week-row-badge">{speakDay.day}</span>
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
                              <span className="hoy-dash__week-expanded-stem">{p.frameStem}</span>
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
                            <Link href="/flow/speak" onClick={() => clearDraft()} className="hoy-dash__today-cta">
                              Practicar
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

            <Link href="/semana" className="text-caption transition-colors hover:text-accent" style={{ display: "inline-flex", marginTop: 14, color: "var(--accent)" }}>
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

          <div className="hoy-card hoy-side-card hoy-accesos">
            <div className="hoy-side-card__head">
              <span className="hoy-side-card__eyebrow">Accesos</span>
            </div>
            <ul className="hoy-accesos__list">
              {accesos.map((a) => (
                <li key={a.href}>
                  <Link
                    href={a.href}
                    className="hoy-acceso"
                    style={{ "--tint": a.tint } as CSSProperties}
                  >
                    <span className="hoy-acceso__badge">{a.icon}</span>
                    <span className="hoy-acceso__text">
                      <span className="hoy-acceso__title">{a.title}</span>
                      <span className="text-caption hoy-acceso__sub">{a.sub}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
