"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Gloss } from "@/components/Gloss";
import { PageHeader, Wordmark } from "@/components/PageHeader";
import { totalDays } from "@/content/frames";
import { useStats } from "@/hooks/useStats";
import { useThoughts } from "@/hooks/useThoughts";
import { planContextFromDay } from "@/lib/planDay";
import { currentStreak, last7Days, practiceDatesFromThoughts } from "@/lib/streak";

export default function ProgressPage() {
  const { stats, hydrated } = useStats();
  const { thoughts } = useThoughts();
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
  }, []);

  const practiced = useMemo(
    () => practiceDatesFromThoughts(thoughts),
    [thoughts],
  );
  const streak = useMemo(
    () => currentStreak(practiced, now ?? new Date()),
    [practiced, now],
  );
  const week = useMemo(
    () => last7Days(practiced, now ?? new Date()),
    [practiced, now],
  );

  const spoken = thoughts.length;
  const spokenLabel = hydrated ? spoken : "—";
  const planDay = (stats.currentDayIndex % totalDays) + 1;
  const planPct = Math.min(100, (planDay / totalDays) * 100);
  const dayLabel = String(planDay).padStart(2, "0");
  const { weekNum, temporada } = planContextFromDay(planDay);
  const weekTheme = temporada.weeks[weekNum - 1];
  const weekThemeEn = temporada.weeksEn[weekNum - 1];
  const practicedToday = week.some((d) => d.isToday && d.practiced);

  return (
    <div
      className="fade-rise"
      style={{ opacity: hydrated ? 1 : 0.6, paddingBottom: 96 }}
    >
      <div className="space-y-3">
        <Link
          href="/"
          className="text-caption text-ink-mute hover:text-accent transition-colors min-h-[40px] inline-flex items-center"
        >
          ← Hoy
        </Link>
        <PageHeader title={<Wordmark>Progreso</Wordmark>} />
        <span className="hairline" aria-hidden />
      </div>

      {/* Tier 1 — open hero, no box */}
      <section className="text-center" style={{ marginTop: 20 }}>
        <span className="hairline-accent-center" aria-hidden style={{ margin: "0 auto" }} />
        <p className="mono-cap" style={{ marginTop: 10 }}>
          Tu racha
        </p>

        <div
          className="flex items-end justify-center gap-3"
          style={{ marginTop: 10 }}
        >
          <svg
            viewBox="0 0 24 24"
            width="30"
            height="30"
            aria-hidden
            fill={streak > 0 ? "var(--accent)" : "none"}
            stroke="var(--accent)"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginBottom: 2 }}
          >
            <path d="M12 3c1 3 4 5 4 9a4 4 0 1 1-8 0c0-2 1-3 2-4-1 5 2 5 2 5s0-3 0-10Z" />
          </svg>
          <div className="flex items-baseline gap-2">
            <p
              className="font-display leading-none"
              style={{
                fontSize: "3rem",
                color: streak > 0 ? "var(--accent)" : "var(--ink-mute)",
              }}
            >
              {streak}
            </p>
            <p className="text-sm text-ink-mute pb-0.5">
              {streak === 1 ? "día seguido" : "días seguidos"}
            </p>
          </div>
        </div>

        {practicedToday && (
          <p
            className="mono-cap"
            style={{ color: "var(--accent)", marginTop: 6 }}
          >
            Hoy ✓
          </p>
        )}

        <div
          className="flex items-center justify-center gap-2"
          style={{ marginTop: 14 }}
        >
          {week.map((day) => {
            const practicedNotToday = day.practiced && !day.isToday;
            return (
              <span
                key={day.date}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium"
                style={{
                  background: day.isToday
                    ? "var(--accent)"
                    : practicedNotToday
                      ? "color-mix(in oklab, var(--accent) 28%, transparent)"
                      : "transparent",
                  color: day.isToday
                    ? "var(--accent-ink)"
                    : practicedNotToday
                      ? "var(--ink)"
                      : "var(--ink-mute)",
                  border: `1px solid ${
                    day.isToday
                      ? "transparent"
                      : practicedNotToday
                        ? "color-mix(in oklab, var(--accent) 45%, transparent)"
                        : "var(--rule)"
                  }`,
                }}
                title={day.date}
              >
                {day.label}
              </span>
            );
          })}
        </div>

        <p
          className="text-sm text-ink-mute leading-snug mx-auto"
          style={{ marginTop: 10, maxWidth: 300 }}
        >
          Solo cuentan las frases que hablaste en voz alta.
        </p>
        <Gloss>
          Only phrases you spoke out loud count — not La lectura or games.
        </Gloss>
      </section>

      <span className="hairline" aria-hidden style={{ marginTop: 24 }} />

      {/* Tier 2 — one anchor card: where you are + week snapshot */}
      <section
        style={{
          marginTop: 28,
          padding: "20px 18px",
          background: "var(--surface)",
          border: `1px solid color-mix(in oklab, ${temporada.color} 42%, var(--rule))`,
          borderRadius: 16,
        }}
      >
        <span className="mono-cap" style={{ color: temporada.color }}>
          Estás en el día {dayLabel}
          <Gloss>{`You are on day ${dayLabel}`}</Gloss>
        </span>
        <h2
          className="font-display text-ink"
          style={{
            fontWeight: 300,
            fontSize: "1.625rem",
            lineHeight: 1.15,
            margin: "8px 0 4px",
          }}
        >
          T{temporada.index} — {temporada.title}
          <Gloss>{temporada.titleEn}</Gloss>
        </h2>
        <p className="mono-cap" style={{ color: temporada.color }}>
          Semana {weekNum} · {weekTheme}
          <Gloss>{`Week ${weekNum} · ${weekThemeEn}`}</Gloss>
        </p>

        <div
          className="flex items-baseline justify-between gap-3"
          style={{ marginTop: 20 }}
        >
          <p className="mono-cap text-ink-mute">El plan</p>
          <p className="mono-cap text-ink-soft">
            {dayLabel} / {totalDays}
          </p>
        </div>
        <div
          className="h-[3px] w-full rounded-full"
          style={{ background: "var(--surface-sunk)", marginTop: 8 }}
        >
          <div
            className="h-[3px] rounded-full transition-all duration-500"
            style={{
              width: `${planPct}%`,
              background: temporada.color,
            }}
          />
        </div>

        <span className="hairline" aria-hidden style={{ marginTop: 20 }} />

        <p className="mono-cap text-ink-mute" style={{ marginTop: 16 }}>
          Esta semana
        </p>
        <div
          className="grid grid-cols-3 gap-4"
          style={{ marginTop: 12 }}
        >
          <InlineStat label="Frases dichas" value={spokenLabel} accent={spoken > 0} />
          <InlineStat label="Días practicados" value={stats.daysPracticed} />
          <InlineStat
            label="Día del plan"
            value={planDay}
            suffix={`/${totalDays}`}
          />
        </div>
      </section>

      {/* Tier 3 — grouped links, one surface */}
      <SectionHead label="Explorar" labelEn="Explore" />
      <div
        className="rounded-[14px] border border-rule bg-surface overflow-hidden"
      >
        <NavRow
          href="/thoughts"
          title="Diario"
          subtitle="Cada frase que has dicho en voz alta."
          gloss="Every sentence you've spoken out loud."
          meta={
            spoken === 0
              ? "Ver"
              : `${spoken} ${spoken === 1 ? "frase" : "frases"}`
          }
        />
        <span className="hairline" aria-hidden />
        <NavRow
          href="/camino"
          title="El camino"
          subtitle="Cuatro temporadas, semana a semana."
          gloss="Four seasons, week by week."
          meta={`T${temporada.index} · Semana ${weekNum}`}
        />
      </div>
    </div>
  );
}

function SectionHead({
  label,
  labelEn,
}: {
  label: string;
  labelEn?: string;
}) {
  return (
    <div
      className="flex items-baseline justify-between"
      style={{ marginTop: 30, marginBottom: 12 }}
    >
      <span className="flex flex-col">
        <span className="mono-cap">{label}</span>
        {labelEn && <Gloss>{labelEn}</Gloss>}
      </span>
    </div>
  );
}

function InlineStat({
  label,
  value,
  suffix,
  accent,
}: {
  label: string;
  value: number | string;
  suffix?: string;
  accent?: boolean;
}) {
  return (
    <div>
      <p
        className="font-display leading-none"
        style={{
          fontSize: "1.75rem",
          color: accent ? "var(--accent)" : "var(--ink)",
        }}
      >
        {value}
        {suffix && (
          <span className="text-base text-ink-mute">{suffix}</span>
        )}
      </p>
      <p className="mt-1.5 text-[0.6875rem] text-ink-mute uppercase tracking-[0.06em] leading-tight">
        {label}
      </p>
    </div>
  );
}

function NavRow({
  href,
  title,
  subtitle,
  gloss,
  meta,
}: {
  href: string;
  title: string;
  subtitle: string;
  gloss: string;
  meta: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-surface-sunk active:bg-surface-sunk"
    >
      <div className="min-w-0">
        <p className="font-display text-[1.125rem] text-ink leading-tight">
          {title}
        </p>
        <p className="mt-0.5 text-sm text-ink-mute leading-snug">{subtitle}</p>
        <Gloss>{gloss}</Gloss>
      </div>
      <div className="flex shrink-0 items-center gap-3">
        <span className="mono-cap text-ink-mute">{meta}</span>
        <span
          className="text-ink-mute transition-colors group-hover:text-accent"
          aria-hidden
        >
          ›
        </span>
      </div>
    </Link>
  );
}
