"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Gloss } from "@/components/Gloss";
import { PageHeader, Wordmark } from "@/components/PageHeader";
import { PlayButton } from "@/components/PlayButton";
import { ClickablePrompt } from "@/components/ClickablePrompt";
import {
  speakDayForIndex,
  PROMPTS_PER_DAY,
  openTurnForDayIndex,
  openTurnReviewDayIndex,
  type SpeakPrompt,
} from "@/content/prompts";
import { TEMPORADAS } from "@/content/temporadas";
import {
  currentWeek,
  getSessionIndex,
  isWeekPrimed,
  readingDoneToday,
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

const IconSun = (
  <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden {...ws}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);
export default function HomePage() {
  const { stats } = useStats();
  const [now, setNow] = useState<Date | null>(null);
  const [sessionIndex, setSessionIndex] = useState(0);
  const [readingDone, setReadingDone] = useState(false);
  const [showMoreExamples, setShowMoreExamples] = useState(false);

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
  const weekDone = useMemo(() => weekDaysDone(week, stats).length, [week, stats]);
  const weekLength = useMemo(
    () => daysInWeek(week).filter((d) => d <= totalDays).length,
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

  const examples = day.prompts.slice(0, showMoreExamples ? 5 : 3);

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

  return (
    <div className="hoy-stage fade-rise relative" style={{ paddingBottom: 96 }}>
      <PageHeader
        title={<Wordmark>Pues</Wordmark>}
        meta={
          <span className="mono-cap" style={{ color: "var(--accent)" }}>
            Semanas · {stats.primedWeeks.length}
          </span>
        }
      />

      <div className="page-column">
        <div className="hoy-hero">
          {weekendInvite && (
            <div style={{ marginTop: 28 }}>
              <h1 className="text-display-2xl text-ink">
                {`Es ${weekendName}. Enciende la semana.`}
              </h1>
              <Gloss>{`It's ${weekday === 0 ? "Sunday" : "Saturday"}. Light the week.`}</Gloss>

              <Link href="/semana" className="btn-primary hoy-cta" style={{ marginTop: 20 }}>
                <span className="lab">Preparar la semana {weekNum}</span>
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...ws}>
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              <div style={{ marginTop: 6 }}>
                <Gloss>Read the week ahead — one hour, no rush</Gloss>
              </div>
            </div>
          )}

          {!weekendInvite && (
            <Link
              href="/semana"
              className="mono-cap transition-colors hover:text-accent"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                marginTop: 28,
                minHeight: 44,
                color: "var(--ink-soft)",
              }}
            >
              {primed
                ? `Semana ${weekNum} · ${weekDone} de ${weekLength}`
                : `Preparar la semana ${weekNum}`}
              <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden {...ws}>
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          )}

          <div className="hoy-mission">
            <span className="mono-cap flex items-center" style={{ gap: 7, color: "var(--accent)" }}>
              <span aria-hidden style={{ display: "inline-flex" }}>
                {IconSun}
              </span>
              Tu día · Día {dayNum} · {day.themeEs}
            </span>
            <Gloss>{`Your day · Day ${dayNum} · ${day.themeEn}`}</Gloss>

            <h2 className="text-display-xl text-ink" style={{ margin: "14px 0 0" }}>
              {mission}
            </h2>
            {missionEn && (
              <p className="text-gloss" style={{ color: "var(--ink-mute)", margin: "6px 0 0" }}>
                {missionEn}
              </p>
            )}

            {sessionIndex > 0 && sessionIndex < PROMPTS_PER_DAY && (
              <p className="mono-cap" style={{ margin: "14px 0 0", color: "var(--ink-mute)" }}>
                {sessionIndex} de {PROMPTS_PER_DAY} frases · a tu ritmo
                <Gloss>{`${sessionIndex} of ${PROMPTS_PER_DAY} sentences · at your pace`}</Gloss>
              </p>
            )}

            {weekendInvite ? (
              <Link
                href="/flow/speak"
                className="inline-flex min-h-[44px] items-center transition-colors hover:text-accent"
                style={{ gap: 8, marginTop: 16, color: "var(--ink-soft)" }}
              >
                <span className="font-display" style={{ fontSize: "1.0625rem" }}>
                  {ctaLabel}
                </span>
                <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden {...ws}>
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            ) : (
              <Link href="/flow/speak" className="btn-primary hoy-cta" style={{ marginTop: 22 }}>
                <span className="lab">{ctaLabel}</span>
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...ws}>
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            )}
            <div style={{ marginTop: 6 }}>
              <Gloss>{ctaGloss}</Gloss>
            </div>

            {openTurnHint && (
              <p className="mono-cap" style={{ marginTop: 14, color: "var(--ink-mute)" }}>
                Después de cinco frases · sin guion
                <Gloss>After five sentences — one unscripted turn</Gloss>
              </p>
            )}

            {canDoOpenTurn && openTurnIndex !== null && (
              <Link
                href={`/flow/abierto?i=${openTurnIndex}`}
                className="inline-flex min-h-[44px] items-center transition-colors hover:text-accent"
                style={{ gap: 8, marginTop: 14, color: "var(--ink-soft)" }}
              >
                <span className="font-display" style={{ fontSize: "1.0625rem" }}>
                  Una más, sin guion
                </span>
                <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden {...ws}>
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            )}
          </div>
        </div>

        <details className="hoy-more" id="ideas">
          <summary className="hoy-more-summary">
            <span className="mono-cap">Más de hoy</span>
            <Gloss>More for today</Gloss>
          </summary>

          <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 10 }}>
            <span className="mono-cap" style={{ color: "var(--ink-mute)" }}>
              Ideas para empezar
              <Gloss>Ideas to get started</Gloss>
            </span>
            {examples.map((p) => (
              <ExampleCard key={p.id} prompt={p} />
            ))}
            {!showMoreExamples && day.prompts.length > 3 && (
              <button
                type="button"
                onClick={() => setShowMoreExamples(true)}
                className="mono-cap inline-flex items-center transition-colors hover:text-accent"
                style={{
                  alignSelf: "flex-start",
                  color: "var(--accent)",
                  minHeight: 44,
                  padding: "6px 2px",
                }}
              >
                + Ver más ejemplos
              </button>
            )}
          </div>

          <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 4 }}>
            <span className="mono-cap" style={{ color: "var(--ink-mute)" }}>
              También hoy
              <Gloss>Also today</Gloss>
            </span>
            <TodayExtraRow
              href="/practice/sentence-former"
              title="Formar la frase"
              titleEn="Sentence Former"
              meta="5 frases"
            />
            <TodayExtraRow
              href="/read"
              title="La lectura"
              titleEn="Reading"
              meta={readingDone ? "Leído esta noche" : "Esta noche"}
              metaAccent={readingDone}
            />
            <Link href="/mas" className="mono-cap transition-colors hover:text-accent" style={{ marginTop: 6 }}>
              Juegos, lugares y más →
            </Link>
            <Gloss>Games, places, and more</Gloss>
          </div>

          <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 4 }}>
            <span className="mono-cap" style={{ color: "var(--ink-mute)" }}>
              Tu progreso en el camino
              <Gloss>Your progress on the path</Gloss>
            </span>
            <Link
              href="/camino"
              className="flex items-center transition-colors active:bg-surface-sunk"
              style={{
                gap: 12,
                padding: "10px 4px",
                minHeight: 44,
              }}
            >
              <span
                className="flex flex-shrink-0 items-center justify-center font-display"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  border: `2px solid ${season.color}`,
                  color: "var(--ink)",
                  fontSize: "0.875rem",
                }}
              >
                {dayNum}
              </span>
              <span className="flex flex-col" style={{ minWidth: 0, flex: 1 }}>
                <span className="font-display text-ink" style={{ fontSize: "0.9375rem" }}>
                  T{season.index} – {temporada.title} · Semana {weekNum} de 13
                </span>
                <Gloss>{`S${season.index} – ${temporada.titleEn} · Week ${weekNum} of 13`}</Gloss>
              </span>
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                aria-hidden
                {...ws}
                style={{ color: "var(--ink-mute)", flexShrink: 0 }}
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </details>
      </div>
    </div>
  );
}

function ExampleCard({ prompt }: { prompt: SpeakPrompt }) {
  return (
    <div
      className="flex items-start"
      style={{
        gap: 12,
        padding: "16px 16px",
        background: "var(--surface)",
        border: "1px solid var(--rule)",
        borderRadius: 14,
      }}
    >
      <div style={{ flex: 1, minWidth: 0 }}>
        <ClickablePrompt
          text={prompt.english}
          wordHints={prompt.wordHints}
          className="font-display font-light text-[1.0625rem] leading-snug"
          quotes={false}
        />
        <span className="mono-cap" style={{ fontSize: 9, marginTop: 6, display: "inline-block" }}>
          toca o pasa el cursor por una palabra · ▶ en español
        </span>
      </div>
      <PlayButton text={prompt.spanish} label={`Escuchar: ${prompt.spanish}`} />
    </div>
  );
}

function TodayExtraRow({
  href,
  title,
  titleEn,
  meta,
  metaAccent,
}: {
  href: string;
  title: string;
  titleEn: string;
  meta: string;
  metaAccent?: boolean;
}) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between transition-colors active:bg-surface-sunk"
      style={{ padding: "10px 4px", minHeight: 44 }}
    >
      <span className="flex flex-col">
        <span className="font-display text-ink" style={{ fontSize: "0.9375rem" }}>
          {title}
        </span>
        <Gloss>{titleEn}</Gloss>
      </span>
      <span
        className="mono-cap"
        style={{ color: metaAccent ? "var(--accent)" : "var(--ink-soft)" }}
      >
        {meta}
      </span>
    </Link>
  );
}
