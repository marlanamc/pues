"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { Gloss } from "@/components/Gloss";
import { PageHeader, Wordmark } from "@/components/PageHeader";
import { WeekDayList } from "@/components/WeekDayList";
import { WeekPlayer, type WeekPlayerLine } from "@/components/WeekPlayer";
import { WeekStems } from "@/components/WeekStems";
import { StemRecall } from "@/components/StemRecall";
import { WeekBlindListen } from "@/components/WeekBlindListen";
import { PlanSchedule } from "@/components/PlanSchedule";
import { totalDays } from "@/content/frames";
import { speakDays } from "@/content/prompts";
import { readingForDay } from "@/content/readings";
import { daysInWeek, planContextFromDay } from "@/lib/planDay";
import { SEASONS } from "@/lib/season";
import { currentWeek, clearDraft, isWeekPrimed, primeWeek, weekDaysDone } from "@/lib/store";
import { useStats } from "@/hooks/useStats";

const ws = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const IconBook = (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...ws}>
    <path d="M12 6.5C10 5 6.8 4.8 4 5.6V19c2.8-.8 6-.6 8 .9" />
    <path d="M12 6.5C14 5 17.2 4.8 20 5.6V19c-2.8-.8-6-.6-8 .9" />
    <path d="M12 6.5v13.4" />
  </svg>
);

export default function SemanaPage() {
  const { stats, hydrated } = useStats();
  const [justPrimed, setJustPrimed] = useState(false);

  const week = currentWeek(stats);
  const primed = isWeekPrimed(week, stats);
  const done = useMemo(() => weekDaysDone(week, stats), [week, stats]);

  const dayNums = useMemo(
    () => daysInWeek(week).filter((d) => d <= totalDays),
    [week],
  );
  const days = useMemo(() => dayNums.map((d) => speakDays[d - 1]), [dayNums]);

  const ctx = planContextFromDay(dayNums[0] ?? 1);
  const season = SEASONS[ctx.seasonIdx];
  const { temporada, weekNum } = ctx;

  const lines: WeekPlayerLine[] = useMemo(
    () =>
      days.flatMap((day) =>
        day.prompts.map((p) => ({
          text: p.spanish,
          caption: `Día ${String(day.day).padStart(2, "0")} · ${day.themeEs}`,
        })),
      ),
    [days],
  );

  // From Otoño on, each week carries one serialized mini-story. Name the thread
  // so the week has something to follow — the installments themselves stay
  // unread, or the reading is spoiled before it starts.
  const story = dayNums.map((d) => readingForDay(d)).find((r) => r.storyTitle);

  const currentDay = stats.currentDayIndex + 1;
  const currentDayLabel = String(currentDay).padStart(2, "0");

  function markReady() {
    primeWeek(week, totalDays);
    setJustPrimed(true);
  }

  return (
    <div
      className="fade-rise"
      style={{ "--zone": season.color, paddingBottom: 96 } as CSSProperties}
    >
      <PageHeader
        title={<Wordmark>La semana</Wordmark>}
        meta={
          hydrated ? (
            <span className="mono-cap" style={{ color: "var(--zone)" }}>
              {done.length} de {dayNums.length}
            </span>
          ) : undefined
        }
      />

      <div className="page-column" style={{ opacity: hydrated ? 1 : 0.6 }}>
        {/* ===== The week itself ===== */}
        <div style={{ marginTop: 28 }}>
          <p className="mono-cap" style={{ color: "var(--zone)" }}>
            T{season.index} · {temporada.seasonLabel} · Semana {weekNum} de 13
          </p>
          <Gloss>{`S${season.index} · Week ${weekNum} of 13`}</Gloss>

          <h1 className="text-display-2xl text-ink" style={{ marginTop: 10 }}>
            {temporada.weeks[weekNum - 1]}
          </h1>
          <Gloss>{temporada.weeksEn[weekNum - 1]}</Gloss>

          <p
            className="font-display text-ink"
            style={{
              marginTop: 14,
              fontSize: "clamp(1.05rem, 3.4vw, 1.25rem)",
              fontWeight: 300,
              lineHeight: 1.35,
            }}
          >
            {primed
              ? "La semana ya está encendida. Ve a tu ritmo."
              : "Una hora, sin prisa. Copia los tallos, escúchala, recupéralos — y el lunes empieza encendido."}
          </p>
          <Gloss>
            {primed
              ? "The week is already lit. Go at your own pace."
              : "One unhurried hour. Copy the stems, listen to the week, retrieve them — and Monday starts already lit."}
          </Gloss>

          <p className="mono-cap" style={{ marginTop: 14, color: "var(--ink-mute)" }}>
            {temporada.arc}
          </p>
        </div>

        {/* ===== Los días — the week itself, always open ===== */}
        <SectionHead label="Los días" labelEn="The days" />
        <WeekDayList
          days={days}
          doneDays={done}
          currentDay={currentDay}
          showPlay
          expandDay={justPrimed ? currentDay : undefined}
        />

        {/* ===== La historia (Otoño onward) — context, not a step ===== */}
        {story && (
          <div
            style={{
              display: "flex",
              gap: 16,
              marginTop: 12,
              padding: "16px 18px",
              background: "var(--surface)",
              border: "1px solid var(--rule)",
              borderRadius: 16,
            }}
          >
            <span
              aria-hidden
              className="inline-flex shrink-0 items-center justify-center"
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                border: "2px solid var(--zone)",
                color: "var(--ink)",
              }}
            >
              {IconBook}
            </span>
            <span style={{ minWidth: 0 }}>
              <span className="mono-cap" style={{ display: "block", color: "var(--zone)" }}>
                El hilo de la semana
              </span>
              <span
                className="font-display text-ink"
                style={{ display: "block", marginTop: 4, fontSize: 17 }}
              >
                {story.storyTitle}
              </span>
              <span
                style={{
                  display: "block",
                  marginTop: 4,
                  fontSize: 13,
                  lineHeight: 1.45,
                  color: "var(--ink-mute)",
                }}
              >
                {story.dialogue.situation}
              </span>
              <span className="mono-cap" style={{ display: "block", marginTop: 8 }}>
                Se lee un capítulo por día
              </span>
              <Gloss>One chapter a day</Gloss>
            </span>
          </div>
        )}

        {/* ===== The hour, as four closed doors =====
            Everything below Los días is folded away until you reach it. The
            steps share a `name`, so opening one closes the last — you are only
            ever looking at the thing you're doing. Order follows the hour:
            copy them, hear them, retrieve them, listen blind. Speaking stays
            in Los días — that's daily work, not week prep. */}
        <div style={{ marginTop: 34 }}>
          <p className="mono-cap">La hora</p>
          <Gloss>The hour</Gloss>
        </div>

        <div style={{ marginTop: 10 }}>
          <WeekStep n={1} label="Cópialos a mano" labelEn="Copy them by hand">
            <WeekStems dayNums={dayNums} />
          </WeekStep>

          <WeekStep n={2} label="Escúchala" labelEn="Listen to the week">
            {lines.length > 0 && (
              <WeekPlayer
                lines={lines}
                shuffle
                idleCaption="Orden aleatorio · ponla mientras haces otra cosa."
              />
            )}
          </WeekStep>

          <WeekStep n={3} label="Sin mirar" labelEn="Without looking">
            <StemRecall dayNums={dayNums} />
          </WeekStep>

          <WeekStep n={4} label="Solo escuchar" labelEn="Just listen">
            <WeekBlindListen dayNums={dayNums} />
          </WeekStep>
        </div>

        {/* ===== The closing gesture ===== */}
        <div style={{ marginTop: 30 }}>
          {primed ? (
            justPrimed ? (
              <div>
                <p
                  className="mono-cap"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    color: "var(--zone)",
                  }}
                >
                  <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden {...ws} strokeWidth={2.2}>
                    <path d="M5 12.5 10 17l9-10" />
                  </svg>
                  Lista.
                </p>
                <Gloss>The week is ready.</Gloss>
                <Link
                  href="/flow/speak"
                  onClick={() => clearDraft()}
                  className="btn-primary"
                  style={{ marginTop: 16 }}
                >
                  <span className="lab">Empezar día {currentDayLabel}</span>
                  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...ws}>
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
                <div style={{ marginTop: 6 }}>
                  <Gloss>{`Start day ${currentDayLabel}`}</Gloss>
                </div>
                <Link
                  href="/"
                  className="mono-cap transition-colors hover:text-accent"
                  style={{
                    display: "inline-flex",
                    marginTop: 14,
                    color: "var(--ink-soft)",
                  }}
                >
                  Volver a Hoy
                </Link>
                <Gloss>Back to today</Gloss>
              </div>
            ) : (
              <>
                <p
                  className="mono-cap"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    color: "var(--zone)",
                  }}
                >
                  <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden {...ws} strokeWidth={2.2}>
                    <path d="M5 12.5 10 17l9-10" />
                  </svg>
                  Semana preparada
                </p>
                <div style={{ marginTop: 8 }}>
                  <Gloss>The week is ready.</Gloss>
                </div>
              </>
            )
          ) : (
            <>
              {/* Deliberately quieter than the hour steps. Marking the week ready
                  is bookkeeping, and the accent only gets spent once per screen. */}
              <button
              type="button"
              onClick={markReady}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--zone)",
                background: "transparent",
                border: "1px solid color-mix(in oklab, var(--zone) 40%, transparent)",
                borderRadius: 9,
                padding: "11px 16px",
                cursor: "pointer",
              }}
            >
              Lista la semana
              <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden {...ws}>
                <path d="M5 12.5 10 17l9-10" />
              </svg>
            </button>
            <div style={{ marginTop: 8 }}>
              <Gloss>Mark the week ready</Gloss>
            </div>
            </>
          )}
        </div>

        {/* ===== The whole plan — reference, not a step, so it stays folded
             and out of the accordion group. ===== */}
        <div style={{ marginTop: 34 }}>
          <details className="week-step week-step--plain">
            <summary>
              <span className="week-step__title">
                <span className="mono-cap">El plan entero</span>
                <Gloss>The whole plan</Gloss>
              </span>
            </summary>
            <div className="week-step__body">
              <PlanSchedule />
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}

function SectionHead({ label, labelEn }: { label: string; labelEn?: string }) {
  return (
    <div style={{ marginTop: 30, marginBottom: 12 }}>
      <span className="mono-cap">{label}</span>
      {labelEn && <Gloss>{labelEn}</Gloss>}
    </div>
  );
}

/**
 * One numbered door in the hour.
 *
 * All four share `name="hora"`, which makes them a native exclusive accordion:
 * opening one closes the last, so only the step you're on is ever on screen.
 * Browsers without that support degrade to four independent toggles, which is
 * still the collapsed-by-default behaviour that matters.
 *
 * No durations. The hour is unhurried by definition, and a number next to a
 * step turns taking longer into falling behind.
 */
function WeekStep({
  n,
  label,
  labelEn,
  meta,
  children,
}: {
  n: number;
  label: string;
  labelEn: string;
  /** Only for genuine qualifiers ("opcional") — never a time estimate. */
  meta?: string;
  children: ReactNode;
}) {
  return (
    <details className="week-step" name="hora">
      <summary>
        <span className="week-step__n" aria-hidden>
          {n}
        </span>
        <span className="week-step__title">
          <span className="week-step__label">{label}</span>
          <Gloss>{labelEn}</Gloss>
        </span>
        {meta && <span className="mono-cap week-step__meta">{meta}</span>}
      </summary>
      <div className="week-step__body">{children}</div>
    </details>
  );
}
