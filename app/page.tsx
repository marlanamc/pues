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
          <span className="text-caption" style={{ color: "var(--accent)" }}>
            Semanas · {stats.primedWeeks.length}
          </span>
        }
      />

      <div className="page-column">
        {!weekendInvite && (
          <div className="hoy-crumb-row">
            <Link
              href="/semana"
              className="text-caption transition-colors hover:text-accent"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
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
          </div>
        )}

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

          <div className="hoy-mission">
            <div className="hoy-mission__meta">
              <span className="text-caption flex items-center hoy-mission__day" style={{ gap: 7, color: "var(--accent)" }}>
                <span aria-hidden style={{ display: "inline-flex" }}>
                  {IconSun}
                </span>
                Tu día · Día {dayNum} · {day.themeEs}
              </span>
              <Gloss>{`Your day · Day ${dayNum} · ${day.themeEn}`}</Gloss>
            </div>

            <div className="hoy-mission__main">
              <div className="hoy-mission__copy">
                <h2 className="text-display-lg text-ink">{mission}</h2>
                {missionEn && (
                  <p className="text-gloss hoy-mission__mission-en">{missionEn}</p>
                )}

                {openTurnHint && (
                  <p className="text-caption hoy-mission__hint">
                    Después de cinco frases · sin guion
                    <Gloss>After five sentences — one unscripted turn</Gloss>
                  </p>
                )}
              </div>

              <div className="hoy-mission__cta-col">
                {sessionIndex > 0 && sessionIndex < PROMPTS_PER_DAY && (
                  <p className="text-caption hoy-mission__progress">
                    {sessionIndex} de {PROMPTS_PER_DAY} frases · a tu ritmo
                    <Gloss>{`${sessionIndex} of ${PROMPTS_PER_DAY} sentences · at your pace`}</Gloss>
                  </p>
                )}

                {weekendInvite ? (
                  <Link
                    href="/flow/speak"
                    className="hoy-mission__cta-secondary inline-flex min-h-[44px] items-center transition-colors hover:text-accent"
                    style={{ gap: 8, color: "var(--ink-soft)" }}
                  >
                    <span className="font-display" style={{ fontSize: "1.0625rem" }}>
                      {ctaLabel}
                    </span>
                    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden {...ws}>
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </Link>
                ) : (
                  <Link href="/flow/speak" className="btn-primary hoy-cta">
                    <span className="lab">{ctaLabel}</span>
                    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...ws}>
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </Link>
                )}
                <Gloss>{ctaGloss}</Gloss>
              </div>
            </div>

            {canDoOpenTurn && openTurnIndex !== null && (
              <Link
                href={`/flow/abierto?i=${openTurnIndex}`}
                className="hoy-mission__open-turn inline-flex min-h-[44px] items-center transition-colors hover:text-accent"
                style={{ gap: 8, color: "var(--ink-soft)" }}
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
            <span className="text-caption">Más de hoy</span>
            <Gloss>More for today</Gloss>
          </summary>

          <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 10 }}>
            <span className="text-caption" style={{ color: "var(--ink-mute)" }}>
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
                className="text-caption inline-flex items-center transition-colors hover:text-accent"
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
            <span className="text-caption" style={{ color: "var(--ink-mute)" }}>
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
            <Link href="/mas" className="text-caption transition-colors hover:text-accent" style={{ marginTop: 6 }}>
              Juegos, lugares y más →
            </Link>
            <Gloss>Games, places, and more</Gloss>
          </div>
        </details>

        <div className="hoy-stat-strip">
          <div>
            <div className="hoy-stat-num">{stats.daysPracticed}</div>
            <span className="text-caption">Días</span>
          </div>
          <div>
            <div className="hoy-stat-num">{stats.sentencesCreated}</div>
            <span className="text-caption">Frases</span>
          </div>
          <div>
            <div className="hoy-stat-num">{stats.primedWeeks.length}</div>
            <span className="text-caption">Semanas</span>
          </div>
        </div>

        <Link
          href="/camino"
          className="flex items-center transition-colors active:bg-surface-sunk"
          style={{
            gap: 12,
            padding: "16px 4px 10px",
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
        <span className="text-caption" style={{ fontSize: 9, marginTop: 6, display: "inline-block" }}>
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
        className="text-caption"
        style={{ color: metaAccent ? "var(--accent)" : "var(--ink-soft)" }}
      >
        {meta}
      </span>
    </Link>
  );
}
