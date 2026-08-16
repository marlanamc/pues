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

  /* Accesos rail. Each tint is a zone token, so the tiles re-hue with the
     active theme instead of pinning one palette's hex. */
  const accesos = [
    {
      href: "/camino",
      icon: IconMountain,
      tint: "var(--accent)",
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

  const totalWeeksInSeason = 13;
  const caminoPct = (weekNum / totalWeeksInSeason) * 100;
  const caminoTicks = Array.from({ length: totalWeeksInSeason }, (_, i) => i + 1);

  const filmstripDays = weekDayNums.map((d) => {
    const speakDay = speakDayForIndex(d - 1);
    const stems = [...new Set(speakDay.prompts.map((p) => p.frameStem))].join(" · ");
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
      <div className="hoy3__grid">
        <div className="hoy3__main">
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

          {/* Hero: today's mission, with a faint watermark of the day number */}
          <div className="hoy3__hero">
            <span aria-hidden="true" className="hoy3__hero-watermark">
              {dayNum}
            </span>

            <div className="hoy3__hero-content">
              <span className="hoy3__hero-eyebrow">
                {IconSun}
                Hoy · Día {dayNum} · Semana {weekNum}
              </span>

              <h1 className="hoy3__hero-headline">{mission}</h1>
              {missionEn && <p className="hoy3__hero-gloss">{missionEn}</p>}

              {openTurnHint && (
                <p className="text-caption" style={{ marginTop: 8, color: "var(--ink-mute)" }}>
                  Después de cinco frases · sin guion
                  <Gloss>After five sentences — one unscripted turn</Gloss>
                </p>
              )}

              <div className="hoy3__hero-actions">
                <Link href="/flow/speak" className="btn-primary hoy3__hero-cta">
                  <span className="lab">{ctaLabel}</span>
                  {Arrow}
                </Link>
                {sessionIndex > 0 && (
                  <span className="mono-cap" style={{ color: "var(--ink-mute)" }}>
                    {sessionIndex} de {PROMPTS_PER_DAY}
                  </span>
                )}
              </div>

              {canDoOpenTurn && openTurnIndex !== null && (
                <Link
                  href={`/flow/abierto?i=${openTurnIndex}`}
                  className="text-caption transition-colors hover:text-accent hoy2__open-link"
                >
                  Una más, sin guion
                  {ArrowSmall}
                </Link>
              )}

              <div className="hoy3__chain">
                <span className="mono-cap">{streakDays} de 7 días esta semana</span>
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
            </div>
          </div>

          {/* Camino: horizontal progress line with a tick per week */}
          <div className="hoy3__camino">
            <div className="hoy3__camino-head">
              <span className="mono-cap">Tu camino · semana {weekNum} de {totalWeeksInSeason}</span>
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
                  <span className="hoy3__film-stems">{stems}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Accesos: vertical tile rail beside the hero */}
        <aside className="hoy3__accesos">
          <span className="mono-cap hoy3__accesos-label">Accesos</span>
          <div className="hoy3__accesos-list">
            {accesos.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="hoy3__acceso"
                style={{ "--tint": a.tint } as CSSProperties}
              >
                <span className="hoy3__acceso-icon">{a.icon}</span>
                <span className="hoy3__acceso-text">
                  <span className="hoy3__acceso-title">{a.title}</span>
                  <span className="text-caption hoy3__acceso-sub">{a.sub}</span>
                </span>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
