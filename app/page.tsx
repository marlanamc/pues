"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Gloss } from "@/components/Gloss";
import { PageHeader, Wordmark } from "@/components/PageHeader";
import { speakDayForIndex } from "@/content/prompts";
import { useStats } from "@/hooks/useStats";
import { useThoughts } from "@/hooks/useThoughts";
import type { Thought } from "@/lib/store";
import { currentStreak, practiceDatesFromThoughts } from "@/lib/streak";
import { seasonForDate, yearFraction } from "@/lib/season";

const DIA_SHORT = ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"];
const RIBBON_LABELS = ["L", "M", "X", "J", "V", "S", "D"];

function dateKey(d: Date): string {
  return d.toISOString().slice(0, 10);
}

const ws = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const IconMic = (
  <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden {...ws} strokeWidth={1.7}>
    <rect x="9" y="3" width="6" height="11" rx="3" />
    <path d="M6 11a6 6 0 0 0 12 0" />
    <path d="M12 17v3" />
  </svg>
);
const IconCheck = (
  <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden {...ws} strokeWidth={2.6}>
    <path d="M5 12.5 10 17l9-10" />
  </svg>
);
type RibbonDay = {
  key: string;
  label: string;
  practiced: boolean;
  isToday: boolean;
  isFuture: boolean;
};

export default function HomePage() {
  const { stats } = useStats();
  const { thoughts } = useThoughts();
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
  }, []);

  const practiced = useMemo(
    () => practiceDatesFromThoughts(thoughts),
    [thoughts],
  );
  const streak = useMemo(() => currentStreak(practiced), [practiced]);
  const said = stats.sentencesCreated;

  const day = speakDayForIndex(stats.currentDayIndex);
  const season = useMemo(() => seasonForDate(now ?? new Date()), [now]);

  // Current calendar week, Monday→Sunday, against real practice dates.
  const week: RibbonDay[] = useMemo(() => {
    if (!now) return [];
    const today = dateKey(now);
    const dow = now.getDay(); // 0 = Sun
    const toMonday = dow === 0 ? -6 : 1 - dow;
    return RIBBON_LABELS.map((label, i) => {
      const d = new Date(now);
      d.setDate(now.getDate() + toMonday + i);
      const key = dateKey(d);
      return {
        key,
        label,
        practiced: practiced.has(key),
        isToday: key === today,
        isFuture: key > today,
      };
    });
  }, [now, practiced]);

  const todayEs = now ? DIA_SHORT[now.getDay()] : "hoy";
  const yearPct = Math.round(yearFraction(now ?? new Date()) * 100);
  const recent = thoughts.slice(0, 4);

  return (
    <div className="fade-rise relative" style={{ paddingBottom: 96 }}>
      <PageHeader
        title={<Wordmark>Pues</Wordmark>}
        meta={<span className="mono-cap" style={{ color: "var(--accent)" }}>Racha · {streak}</span>}
      />

      <div className="lg:mt-8 lg:grid lg:grid-cols-[1.4fr_1fr] lg:items-stretch lg:gap-12">
        {/* ===== MAIN ===== */}
        <div className="flex flex-col" style={{ marginTop: 22 }}>
          <p className="text-display-italic text-sm" style={{ margin: 0 }}>
            {streak > 0 ? `${streak} ${streak === 1 ? "día seguido" : "días seguidos"},` : "Hoy empieza,"}
            <Gloss>{streak > 0 ? `${streak} ${streak === 1 ? "day" : "days"} in a row,` : "Today starts,"}</Gloss>
          </p>
          <h1 className="text-display-2xl text-ink" style={{ marginTop: 6 }}>
            {streak > 0 ? "no rompas la racha." : "di tu primera frase."}
            <Gloss>{streak > 0 ? "don't break the streak." : "say your first sentence."}</Gloss>
          </h1>

          {/* Weekday ribbon */}
          <div
            className="flex items-end justify-between md:justify-start md:gap-4"
            style={{ marginTop: 30 }}
          >
            {(week.length ? week : RIBBON_LABELS.map((label, i) => ({ key: `ph-${i}`, label, practiced: false, isToday: false, isFuture: true } as RibbonDay))).map((d) => (
              <RibbonCircle key={d.key} day={d} />
            ))}
          </div>

          {/* Lit act card — the one element that glows */}
          <div style={{ position: "relative", marginTop: 36 }}>
            <div
              aria-hidden
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%,-50%)",
                width: "92%",
                height: 170,
                background:
                  "radial-gradient(60% 60% at 50% 50%, color-mix(in oklab, var(--accent) 22%, transparent), transparent 70%)",
                filter: "blur(12px)",
              }}
            />
            <div
              style={{
                position: "relative",
                background: "var(--surface)",
                border: "1px solid color-mix(in oklab, var(--accent) 42%, var(--rule))",
                borderRadius: 20,
                padding: 30,
                boxShadow:
                  "0 0 0 1px color-mix(in oklab, var(--accent) 18%, transparent), 0 22px 50px -18px color-mix(in oklab, var(--accent) 50%, transparent)",
              }}
            >
              <div className="flex items-baseline justify-between gap-3">
                <span className="mono-cap" style={{ color: "var(--accent)" }}>
                  Lo de hoy · {todayEs}
                </span>
                <span className="mono-cap">
                  {day.themeEs}
                  <Gloss>{day.themeEn}</Gloss>
                </span>
              </div>
              <p
                className="font-display text-ink"
                style={{ fontWeight: 300, fontSize: 34, lineHeight: 1.26, margin: "16px 0 0" }}
              >
                {day.line}
                <Gloss>{day.lineEn}</Gloss>
              </p>
              <div className="flex items-center" style={{ gap: 18, marginTop: 26 }}>
                <Link
                  href="/practice"
                  aria-label="Practicar lo de hoy"
                  className="flex flex-shrink-0 items-center justify-center transition-transform hover:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100"
                  style={{
                    width: 62,
                    height: 62,
                    borderRadius: "50%",
                    background: "var(--accent)",
                    color: "var(--accent-ink)",
                    boxShadow: "0 0 0 10px color-mix(in oklab, var(--accent) 15%, transparent)",
                  }}
                >
                  <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden {...ws} strokeWidth={1.7}>
                    <rect x="9" y="3" width="6" height="11" rx="3" />
                    <path d="M6 11a6 6 0 0 0 12 0" />
                    <path d="M12 17v3" />
                  </svg>
                </Link>
                <span
                  className="font-display text-ink-soft"
                  style={{ fontStyle: "italic", fontSize: 18, lineHeight: 1.35 }}
                >
                  Dílo en voz alta — o graba 20&nbsp;s.
                  <Gloss>{"Say it out loud — or record 20 s."}</Gloss>
                </span>
              </div>
            </div>
          </div>

          {/* Mobile cuaderno preview (desktop uses the aside) */}
          <div className="lg:hidden" style={{ marginTop: 30 }}>
            <CuadernoPreview said={said} entry={recent[0]} />
          </div>

          <div className="flex-1" />

          {/* Year line */}
          <div
            className="flex items-center"
            style={{ gap: 16, marginTop: 34, paddingTop: 24, borderTop: "1px solid var(--rule)" }}
          >
            <div style={{ position: "relative", flex: 1, height: 12 }}>
              <div style={{ position: "absolute", left: 0, right: 0, top: 5, height: 1, background: "var(--rule)" }} />
              <div style={{ position: "absolute", left: 0, width: `${yearPct}%`, top: 5, height: 1.5, background: season.color }} />
              {[0, 25, 50, 75].map((pos) => {
                const filled = pos <= yearPct;
                return (
                  <span
                    key={pos}
                    style={{
                      position: "absolute",
                      left: `${pos === 0 ? 3 : pos === 75 ? 96 : pos}%`,
                      top: 5,
                      transform: "translate(-50%,-50%)",
                      width: filled ? 8 : 5,
                      height: filled ? 8 : 5,
                      borderRadius: "50%",
                      background: filled ? season.color : "var(--bg)",
                      border: filled ? "none" : "1.5px solid var(--rule)",
                    }}
                  />
                );
              })}
            </div>
            <Link
              href="/camino"
              className="mono-cap transition-colors hover:text-accent"
              style={{ whiteSpace: "nowrap" }}
            >
              {season.label} · el año →
            </Link>
          </div>
        </div>

        {/* ===== ASIDE (desktop) ===== */}
        <aside className="hidden lg:flex lg:flex-col" style={{ paddingLeft: 40, borderLeft: "1px solid var(--rule)" }}>
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-ink" style={{ fontWeight: 300, fontSize: 27 }}>
              Tu cuaderno
              <Gloss>{"Your notebook"}</Gloss>
            </h2>
            <span className="mono-cap">{said} frases</span>
          </div>
          <p className="font-display text-ink-mute" style={{ fontStyle: "italic", fontSize: 14, margin: "6px 0 0" }}>
            Todo lo que ya dijiste en voz alta.
            <Gloss>{"Everything you've already said out loud."}</Gloss>
          </p>

          <div style={{ marginTop: 22, flex: 1 }}>
            {recent.length === 0 ? (
              <p className="font-display text-ink-mute" style={{ fontStyle: "italic", fontSize: 15, paddingTop: 18, borderTop: "1px solid var(--rule)" }}>
                Aún no hay frases. Di la primera hoy.
                <Gloss>{"No sentences yet. Say the first one today."}</Gloss>
              </p>
            ) : (
              recent.map((t) => <NotebookRow key={t.id} thought={t} />)
            )}
          </div>

          <Link
            href="/cuaderno"
            className="mono-cap transition-colors hover:text-accent"
            style={{ marginTop: 18, textAlign: "center" }}
          >
            ver el cuaderno entero →
          </Link>
        </aside>
      </div>

      {/* ===== Shortcuts — keep the rest of the app reachable ===== */}
      <section
        aria-label="Atajos"
        style={{ marginTop: 30, paddingTop: 20, borderTop: "1px solid var(--rule)" }}
      >
        <p className="mono-cap" style={{ marginBottom: 14 }}>
          Más en Pues
          <Gloss>{"More in Pues"}</Gloss>
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4" style={{ columnGap: 14, rowGap: 14 }}>
          <Shortcut zone="var(--zone-practica)" zoneLabel="Práctica" title="Juegos" href="/practice/games"
            icon={<svg viewBox="0 0 24 24" width="17" height="17" {...ws}><path d="M6 3h9l4 4v14H6z" /><path d="M9 12h7M9 16h5" /></svg>} />
          <Shortcut zone="var(--zone-guias)" zoneLabel="Cuaderno" title="Guardado" href="/cuaderno"
            icon={<svg viewBox="0 0 24 24" width="17" height="17" {...ws}><path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3V4z" /></svg>} />
          <Shortcut zone="var(--zone-lugares)" zoneLabel="Guías" title="Patrones" href="/guides"
            icon={<svg viewBox="0 0 24 24" width="17" height="17" {...ws}><circle cx="7" cy="7" r="3" /><circle cx="17" cy="7" r="3" /><circle cx="7" cy="17" r="3" /><circle cx="17" cy="17" r="3" /></svg>} />
          <Shortcut zone="var(--zone-lab)" zoneLabel="Lab" title="El oído" href="/lab"
            icon={<svg viewBox="0 0 24 24" width="17" height="17" {...ws}><path d="M6 10a6 6 0 1 1 12 0v4a4 4 0 0 1-4 4h-1v-7" /></svg>} />
        </div>
      </section>
    </div>
  );
}

function RibbonCircle({ day }: { day: RibbonDay }) {
  const { practiced, isToday, isFuture, label } = day;

  let circle: React.ReactNode;
  if (isToday) {
    circle = (
      <span
        className="flex items-center justify-center"
        style={{
          width: 42,
          height: 42,
          borderRadius: "50%",
          background: "color-mix(in oklab, var(--accent) 20%, var(--surface))",
          border: "1.5px solid var(--accent)",
          color: "var(--accent)",
          boxShadow: "0 0 0 4px color-mix(in oklab, var(--accent) 13%, transparent)",
        }}
      >
        {IconMic}
      </span>
    );
  } else if (practiced) {
    circle = (
      <span
        className="flex items-center justify-center"
        style={{ width: 34, height: 34, borderRadius: "50%", background: "var(--accent)", color: "var(--accent-ink)" }}
      >
        {IconCheck}
      </span>
    );
  } else {
    circle = (
      <span
        style={{
          width: 34,
          height: 34,
          borderRadius: "50%",
          border: "1.5px solid var(--rule)",
          opacity: isFuture ? 0.7 : 1,
        }}
      />
    );
  }

  return (
    <span className="flex flex-col items-center" style={{ gap: 9 }}>
      {circle}
      <span className="mono-cap" style={{ fontSize: 9, color: isToday ? "var(--accent)" : "var(--ink-mute)" }}>
        {label}
      </span>
    </span>
  );
}

function NotebookRow({ thought }: { thought: Thought }) {
  const d = new Date(thought.createdAt);
  const day = Number.isNaN(d.getTime()) ? "" : DIA_SHORT[d.getDay()];
  return (
    <div className="flex items-start" style={{ gap: 12, padding: "17px 0", borderTop: "1px solid var(--rule)" }}>
      <span className="mono-cap" style={{ fontSize: 8.5, paddingTop: 5, width: 28, flexShrink: 0 }}>
        {day}
      </span>
      <span className="font-display text-ink-soft" style={{ fontSize: 17, lineHeight: 1.34, flex: 1 }}>
        {thought.sentence}
      </span>
      <span style={{ flexShrink: 0, marginTop: 5, color: "var(--accent)" }} aria-hidden>
        {IconCheck}
      </span>
    </div>
  );
}

function CuadernoPreview({ said, entry }: { said: number; entry?: Thought }) {
  const d = entry ? new Date(entry.createdAt) : null;
  const day = d && !Number.isNaN(d.getTime()) ? DIA_SHORT[d.getDay()] : "";
  return (
    <div>
      <Link href="/cuaderno" className="flex items-baseline justify-between gap-3 transition-colors hover:text-accent">
        <span className="font-display text-ink" style={{ fontSize: 17 }}>
          Tu cuaderno
          <Gloss>{"Your notebook"}</Gloss>
        </span>
        <span className="mono-cap">{said} frases · ver →</span>
      </Link>
      {entry ? (
        <div className="flex items-start" style={{ gap: 11, padding: "12px 0 0", marginTop: 8, borderTop: "1px solid var(--rule)" }}>
          <span className="mono-cap" style={{ fontSize: 8, paddingTop: 4, width: 24, flexShrink: 0 }}>{day}</span>
          <span className="font-display text-ink-soft" style={{ fontSize: 15, lineHeight: 1.32, flex: 1 }}>{entry.sentence}</span>
          <span style={{ flexShrink: 0, marginTop: 4, color: "var(--accent)" }} aria-hidden>{IconCheck}</span>
        </div>
      ) : (
        <p className="font-display text-ink-mute" style={{ fontStyle: "italic", fontSize: 14, padding: "12px 0 0", marginTop: 8, borderTop: "1px solid var(--rule)" }}>
          Aún no hay frases. Di la primera hoy.
          <Gloss>{"No sentences yet. Say the first one today."}</Gloss>
        </p>
      )}
    </div>
  );
}

function Shortcut({
  zone,
  zoneLabel,
  title,
  href,
  icon,
}: {
  zone: string;
  zoneLabel: string;
  title: string;
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <Link href={href} className="flex items-center" style={{ gap: 10, padding: "4px 2px", textDecoration: "none" }}>
      <span
        aria-hidden
        className="flex items-center justify-center flex-shrink-0"
        style={{ width: 32, height: 32, borderRadius: 9, background: `color-mix(in oklab, ${zone} 14%, transparent)`, color: zone }}
      >
        {icon}
      </span>
      <span className="flex flex-col" style={{ minWidth: 0 }}>
        <span className="font-display" style={{ fontSize: 14, lineHeight: 1.1, color: zone }}>{zoneLabel}</span>
        <span style={{ fontSize: 11, lineHeight: 1.2, color: "var(--ink-soft)", marginTop: 2 }}>{title}</span>
      </span>
    </Link>
  );
}
