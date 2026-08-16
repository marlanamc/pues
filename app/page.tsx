"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { Gloss } from "@/components/Gloss";
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
import { usePhraseEnglishVisible } from "@/hooks/usePhraseEnglishVisible";
import { useStats } from "@/hooks/useStats";
import { useThoughts } from "@/hooks/useThoughts";
import { daysInWeek, planContextFromDay } from "@/lib/planDay";
import { totalDays } from "@/content/frames";
import { last7Days, practiceDatesFromThoughts } from "@/lib/streak";

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

const IconSun = (
  <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden {...ws}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

const IconMountain = (
  <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden {...ws}>
    <path d="M3 19l6-11 4 6.5 2-3L21 19H3Z" />
  </svg>
);

const IconPuzzle = (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...ws}>
    <path d="M10 4h4v2.2a1.8 1.8 0 1 0 0 3.6V12h2.2a1.8 1.8 0 1 1 0 3.6H14v2.2a1.8 1.8 0 1 1-3.6 0V15.6H8.2a1.8 1.8 0 1 1 0-3.6H10V9.8a1.8 1.8 0 1 1-3.6 0V4H10Z" />
  </svg>
);

/* La lectura — an open book, two facing pages. */
const IconRead = (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...ws}>
    <path d="M4 5.5h5.5a2.5 2.5 0 0 1 2.5 2.5v10a2 2 0 0 0-2-2H4Z" />
    <path d="M20 5.5h-5.5A2.5 2.5 0 0 0 12 8v10a2 2 0 0 1 2-2h6Z" />
  </svg>
);

export default function HomePage() {
  const { visible: englishVisible } = usePhraseEnglishVisible();
  const { stats } = useStats();
  const { thoughts } = useThoughts();
  const [now, setNow] = useState<Date | null>(null);
  const [sessionIndex, setSessionIndex] = useState(0);
  const [readingDone, setReadingDone] = useState(false);

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

  const weekday = now?.getDay() ?? null;
  const weekendInvite = !primed && (weekday === 0 || weekday === 6);
  const weekendName = weekday === 0 ? "domingo" : "sábado";

  const practiced = useMemo(() => practiceDatesFromThoughts(thoughts), [thoughts]);
  const last7 = useMemo(() => last7Days(practiced, now ?? new Date()), [practiced, now]);
  const streakDays = last7.filter((d) => d.practiced).length;

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

  const totalWeeksInSeason = 13;
  const caminoPct = (weekNum / totalWeeksInSeason) * 100;
  const caminoTicks = Array.from({ length: totalWeeksInSeason }, (_, i) => i + 1);

  const filmstripDays = weekDayNums.map((d) => {
    const speakDay = speakDayForIndex(d - 1);
    const stems = [...new Set(speakDay.prompts.map((p) => p.frameStem))];
    return {
      d,
      speakDay,
      stems,
      isToday: d === day.day,
      isDone: weekDoneDays.has(d),
    };
  });

  return (
    <div className="hoy3">
      {weekendInvite && (
        <div className="hoy2__weekend-card">
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

      {/* Hero: today's mission — notebook master card */}
      <div className="hoy3__hero">
        <div className="hoy3__hero-grid">
          <div className="hoy3__hero-main">
            <span aria-hidden="true" className="hoy3__hero-watermark">
              {dayNum}
            </span>

            <span className="hoy3__hero-eyebrow">
              {IconSun}
              Hoy · Día {dayNum} · Semana {weekNum}
              {sessionIndex > 0 && (
                <>
                  {" · "}
                  {sessionIndex} de {PROMPTS_PER_DAY}
                </>
              )}
            </span>

            <div className="hoy3__hero-content">
              <h1 className="hoy3__hero-headline">{mission}</h1>
              {missionEn && englishVisible && (
                <p className="hoy3__hero-gloss">{missionEn}</p>
              )}

              {openTurnHint && (
                <p className="text-caption hoy3__hero-hint">
                  Después de cinco frases · sin guion
                  <Gloss>After five sentences — one unscripted turn</Gloss>
                </p>
              )}
            </div>

            <div className="hoy3__hero-actions">
              <Link href="/flow/speak" className="btn-primary hoy-cta hoy3__hero-cta">
                <span className="lab">{ctaLabel}</span>
                {Arrow}
              </Link>

              {canDoOpenTurn && openTurnIndex !== null && (
                <Link
                  href={`/flow/abierto?i=${openTurnIndex}`}
                  className="text-caption transition-colors hover:text-accent hoy2__open-link"
                >
                  Una más, sin guion
                  {ArrowSmall}
                </Link>
              )}
            </div>
          </div>

          <aside className="hoy3__hero-side" aria-label="También hoy">
            <div className="hoy3__hero-side-card">
              <span className="mono-cap hoy3__hero-more-label">También hoy</span>
              <div className="hoy3__hero-more-list">
                <Link
                  href="/practice/sentence-former"
                  className="hoy3__hero-more-item"
                  style={{ "--tint": "var(--zone-lab)" } as CSSProperties}
                >
                  <span className="hoy3__hero-more-icon">{IconPuzzle}</span>
                  <span className="hoy3__hero-more-text">
                    <span className="hoy3__hero-more-title">Formar la frase</span>
                    <span className="text-caption hoy3__hero-more-sub">{PROMPTS_PER_DAY} frases</span>
                  </span>
                </Link>
                <Link
                  href="/read"
                  className={`hoy3__hero-more-item${readingDone ? " hoy3__hero-more-item--done" : ""}`}
                  style={{ "--tint": "var(--zone-guias)" } as CSSProperties}
                >
                  <span className="hoy3__hero-more-icon">{IconRead}</span>
                  <span className="hoy3__hero-more-text">
                    <span className="hoy3__hero-more-title">La lectura</span>
                    <span className="text-caption hoy3__hero-more-sub">
                      {readingDone ? "Leído esta noche" : "Esta noche"}
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Camino: horizontal progress line with a tick per week */}
      <div className="hoy3__camino">
        <div className="hoy3__camino-head">
          <span className="mono-cap">Tu camino · semana {weekNum} de {totalWeeksInSeason}</span>
          <div className="hoy3__chain hoy3__chain--camino">
            <span className="mono-cap">{streakDays} de 7 días</span>
            <div className="hoy3__chain-dots">
              {last7.map((d) => (
                <span
                  key={d.date}
                  className={`hoy3__chain-dot${d.practiced ? " hoy3__chain-dot--done" : ""}${
                    d.isToday ? " hoy3__chain-dot--today" : ""
                  }`}
                />
              ))}
            </div>
          </div>
          <Link href="/camino" className="hoy3__camino-link">
            Ver camino completo {ArrowSmall}
          </Link>
        </div>
        <div className="hoy3__camino-track">
          <div className="hoy3__camino-fill" style={{ width: `${caminoPct}%` }} />
          {caminoTicks.map((w) => (
            <span
              key={w}
              className={`hoy3__camino-tick${w <= weekNum ? " hoy3__camino-tick--done" : ""}`}
              style={{ left: `${((w - 1) / (totalWeeksInSeason - 1)) * 100}%` }}
            />
          ))}
          <span className="hoy3__camino-marker" style={{ left: `${caminoPct}%` }}>
            {IconMountain}
          </span>
        </div>
      </div>

      {/* Esta semana: horizontal-scrolling filmstrip */}
      <div className="hoy3__week">
        <div className="hoy3__week-head">
          <span className="mono-cap">Esta semana</span>
          <Link href="/semana" className="hoy3__camino-link">Ver todas →</Link>
        </div>
        <div className="hoy3__filmstrip">
          {filmstripDays.map(({ d, speakDay, stems, isToday, isDone }) => (
            <Link
              key={d}
              href="/flow/speak"
              onClick={() => {
                if (!isToday) {
                  setCurrentDayIndex(d - 1);
                  clearDraft();
                }
              }}
              className={`hoy3__film-card${isToday ? " hoy3__film-card--today" : ""}`}
            >
              <div className="hoy3__film-card-head">
                <span className="hoy3__film-badge">{speakDay.day}</span>
                {isToday && <span className="mono-cap" style={{ color: "var(--accent)" }}>Hoy</span>}
                {isDone && !isToday && <span style={{ color: "var(--accent)" }}>{Check}</span>}
              </div>
              <span className="hoy3__film-title">{speakDay.themeEs}</span>
              <span className="hoy3__film-stems">
                {stems.map((stem) => (
                  <span key={stem} className="hoy3__film-stem">{stem}</span>
                ))}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
