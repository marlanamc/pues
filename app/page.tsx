"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { Gloss } from "@/components/Gloss";
import { PageHeader, Wordmark } from "@/components/PageHeader";
import { speakDayForIndex, PROMPTS_PER_DAY } from "@/content/prompts";
import { TEMPORADAS } from "@/content/temporadas";
import { getSessionIndex, readingDoneToday } from "@/lib/store";
import { useStats } from "@/hooks/useStats";
import { useThoughts } from "@/hooks/useThoughts";
import { currentStreak, practiceDatesFromThoughts } from "@/lib/streak";
import { seasonForDate } from "@/lib/season";

/** Single-user personal app — greeting name. */
const NAME = "Marlie";

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
const IconMoon = (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...ws}>
    <path d="M21 14.5A8.5 8.5 0 0 1 9.5 3 7 7 0 1 0 21 14.5Z" />
  </svg>
);
const IconFlash = (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...ws}>
    <path d="M13 2 4 14h7l-1 8 10-14h-7l0-6Z" />
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

  const practiced = useMemo(
    () => practiceDatesFromThoughts(thoughts),
    [thoughts],
  );
  const streak = useMemo(() => currentStreak(practiced), [practiced]);

  const day = speakDayForIndex(stats.currentDayIndex);
  const dayNum = day.day.toString().padStart(2, "0");
  const mission = day.missionEs ?? day.line;
  const missionEn = day.missionEn;

  const season = useMemo(() => seasonForDate(now ?? new Date()), [now]);
  const temporada = TEMPORADAS[season.index - 1];
  // Every week is 6 new days + 1 repaso, so the week is a straight division.
  const weekNum = Math.min(13, Math.ceil(day.day / 7));
  const nextSentence = Math.min(sessionIndex + 1, PROMPTS_PER_DAY);

  const greeting = useMemo(() => {
    const h = now ? now.getHours() : 9;
    if (h < 12) return "Buenos días";
    if (h < 19) return "Buenas tardes";
    return "Buenas noches";
  }, [now]);
  const greetingEn = useMemo(() => {
    const h = now ? now.getHours() : 9;
    if (h < 12) return "Good morning";
    if (h < 19) return "Good afternoon";
    return "Good evening";
  }, [now]);

  return (
    <div className="fade-rise relative" style={{ paddingBottom: 96 }}>
      <PageHeader
        title={<Wordmark>Pues</Wordmark>}
        meta={<span className="mono-cap" style={{ color: "var(--accent)" }}>Racha · {streak}</span>}
      />

      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        {/* ===== Greeting ===== */}
        <div style={{ marginTop: 24 }}>
          <p className="mono-cap">¡{greeting}, {NAME}!</p>
          <h1 className="text-display-2xl text-ink" style={{ marginTop: 10 }}>
            ¿Listo para hablar español?
          </h1>
          <Gloss>Ready to speak Spanish?</Gloss>
        </div>

        {/* ===== Today — quiet notebook entry, not a promo card ===== */}
        <div
          style={{
            marginTop: 28,
            padding: "22px 20px",
            background: "var(--surface)",
            border: "1px solid var(--rule)",
            borderRadius: 14,
          }}
        >
          <span className="mono-cap flex items-center" style={{ gap: 7, color: "var(--accent)" }}>
            <span aria-hidden style={{ display: "inline-flex" }}>{IconSun}</span>
            Día {dayNum} · {day.themeEs}
          </span>
          <Gloss>{`Day ${dayNum} · ${day.themeEn}`}</Gloss>

          <h2 className="text-display-xl text-ink" style={{ margin: "14px 0 0" }}>
            {mission}
          </h2>
          {missionEn && (
            <p className="text-gloss" style={{ color: "var(--ink-mute)", margin: "6px 0 0" }}>
              {missionEn}
            </p>
          )}

          <p className="mono-cap" style={{ margin: "18px 0 0", color: "var(--ink-soft)" }}>
            {`${sessionIndex} de ${PROMPTS_PER_DAY} · frase ${nextSentence}`}
          </p>
          <Gloss>
            {`${sessionIndex} of ${PROMPTS_PER_DAY} · sentence ${nextSentence}`}
          </Gloss>

          <Link href="/flow/speak" className="btn-primary" style={{ marginTop: 18 }}>
            <span className="lab">{sessionIndex === 0 ? "Comenzar" : "Continuar"}</span>
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...ws}>
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
          <div style={{ marginTop: 6 }}>
            <Gloss>{sessionIndex === 0 ? "Start today's practice" : "Continue where you left off"}</Gloss>
          </div>
        </div>

        {/* ===== También hoy — day-aligned companions, not the hero ===== */}
        <SectionHead label="También hoy" labelEn="Also today" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 12,
          }}
        >
          <TodayExtraCard
            href="/practice/sentence-former"
            icon={IconFlash}
            iconBorder="var(--zone-lugares)"
            title="Formar la frase"
            titleEn="Sentence Former"
            meta="5 frases · opcional"
            metaEn="5 sentences · optional"
          />
          <TodayExtraCard
            href="/read"
            icon={IconMoon}
            iconBorder="var(--accent)"
            title="La lectura"
            titleEn="Reading"
            meta={readingDone ? "Leído esta noche" : "Antes de dormir"}
            metaEn={readingDone ? "Read tonight" : "Before bed"}
            metaAccent={readingDone}
          />
        </div>

        {/* ===== Tu progreso en el camino ===== */}
        <SectionHead label="Tu progreso en el camino" labelEn="Your progress on the path" href="/camino" cta="Ver" />
        <Link
          href="/camino"
          className="flex items-center transition-colors active:bg-surface-sunk"
          style={{ gap: 16, padding: "16px 18px", background: "var(--surface)", border: "1px solid var(--rule)", borderRadius: 16 }}
        >
          <span
            className="flex flex-shrink-0 items-center justify-center font-display"
            style={{
              width: 52,
              height: 52,
              borderRadius: "50%",
              border: `2px solid ${season.color}`,
              color: "var(--ink)",
              fontSize: "1.0625rem",
            }}
          >
            {dayNum}
          </span>
          <span className="flex flex-col" style={{ minWidth: 0, flex: 1 }}>
            <span className="font-display text-ink text-[1.0625rem] leading-snug">
              T{season.index} – {temporada.title}
            </span>
            <Gloss>{`S${season.index} – ${temporada.titleEn}`}</Gloss>
            <span className="mono-cap" style={{ marginTop: 6 }}>
              Semana {weekNum} de 13 · {temporada.weeks[weekNum - 1]}
            </span>
            <Gloss>{`Week ${weekNum} of 13 · ${temporada.weeksEn[weekNum - 1]}`}</Gloss>
          </span>
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden {...ws} style={{ color: "var(--ink-mute)", flexShrink: 0 }}>
            <path d="M9 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

function TodayExtraCard({
  href,
  icon,
  iconBorder,
  title,
  titleEn,
  meta,
  metaEn,
  metaAccent,
}: {
  href: string;
  icon: ReactNode;
  iconBorder: string;
  title: string;
  titleEn: string;
  meta: string;
  metaEn: string;
  metaAccent?: boolean;
}) {
  return (
    <Link
      href={href}
      className="flex flex-col transition-colors active:bg-surface-sunk"
      style={{
        gap: 10,
        padding: "16px 18px",
        background: "var(--surface)",
        border: "1px solid var(--rule)",
        borderRadius: 16,
        minHeight: 0,
      }}
    >
      <span
        aria-hidden
        className="inline-flex items-center justify-center"
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: `2px solid ${iconBorder}`,
          color: "var(--ink)",
        }}
      >
        {icon}
      </span>
      <span className="flex flex-col" style={{ minWidth: 0 }}>
        <span className="font-display text-ink text-[1.0625rem] leading-snug">{title}</span>
        <Gloss>{titleEn}</Gloss>
        <span
          className="mono-cap"
          style={{ marginTop: 6, color: metaAccent ? "var(--accent)" : "var(--ink-soft)" }}
        >
          {meta}
        </span>
        <Gloss>{metaEn}</Gloss>
      </span>
    </Link>
  );
}

function SectionHead({
  label,
  labelEn,
  href,
  cta,
}: {
  label: string;
  labelEn?: string;
  href?: string;
  cta?: string;
}) {
  return (
    <div className="flex items-baseline justify-between" style={{ marginTop: 30, marginBottom: 12 }}>
      <span className="flex flex-col">
        <span className="mono-cap">{label}</span>
        {labelEn && <Gloss>{labelEn}</Gloss>}
      </span>
      {href && cta && (
        <Link href={href} className="mono-cap transition-colors hover:text-accent">
          {cta} →
        </Link>
      )}
    </div>
  );
}

