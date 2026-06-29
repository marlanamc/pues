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
import { seasonForDate } from "@/lib/season";

/** Single-user personal app — greeting name. */
const NAME = "Marlie";

/** Temporada titles, keyed by season index (1–4). Mirrors app/camino. */
const SEASON_TITLES: Record<number, string> = {
  1: "El verano que hablo",
  2: "Seguir el hilo",
  3: "Sin subtítulos",
  4: "Conversación completa",
};
const SEASON_TITLES_EN: Record<number, string> = {
  1: "The summer I speak",
  2: "Follow the thread",
  3: "No subtitles",
  4: "Full conversation",
};

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
const IconSay = (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...ws}>
    <path d="M5 5h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9l-4 4V7a2 2 0 0 1 2-2Z" />
  </svg>
);
const IconMic = (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...ws}>
    <rect x="9" y="3" width="6" height="11" rx="3" />
    <path d="M6 11a6 6 0 0 0 12 0M12 17v3" />
  </svg>
);
const IconBookmark = (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...ws}>
    <path d="M7 4h10v16l-5-3.5L7 20z" />
  </svg>
);
const IconHeart = (
  <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden {...ws}>
    <path d="M12 20s-7-4.6-7-9.4A3.6 3.6 0 0 1 12 7a3.6 3.6 0 0 1 7 3.6C19 15.4 12 20 12 20Z" />
  </svg>
);
const IconBook = (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...ws}>
    <path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3V4z" />
    <path d="M8 8h8M8 12h6" />
  </svg>
);

const STEPS = [
  { icon: IconSay, verb: "Di", verbEn: "Say", note: "3 frases", noteEn: "3 sentences" },
  { icon: IconMic, verb: "Graba", verbEn: "Record", note: "20 segundos", noteEn: "20 seconds" },
  { icon: IconBookmark, verb: "Guarda", verbEn: "Save", note: "1 frase", noteEn: "1 sentence" },
];

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
  const dayNum = day.day.toString().padStart(2, "0");
  const mission = day.missionEs ?? day.line;
  const missionEn = day.missionEn;

  const season = useMemo(() => seasonForDate(now ?? new Date()), [now]);
  const seasonTitle = SEASON_TITLES[season.index];
  const seasonTitleEn = SEASON_TITLES_EN[season.index];

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

  const latest = thoughts[0];

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
          <p className="text-gloss" style={{ color: "var(--ink-mute)", marginTop: 8 }}>
            Pequeños pasos, grandes conversaciones.
          </p>
          <Gloss>Small steps, big conversations.</Gloss>
        </div>

        {/* ===== Tu misión de hoy — the one lit card ===== */}
        <div style={{ position: "relative", marginTop: 28 }}>
          <div
            aria-hidden
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%,-50%)",
              width: "92%",
              height: 200,
              background:
                "radial-gradient(60% 60% at 50% 50%, color-mix(in oklab, var(--accent) 20%, transparent), transparent 70%)",
              filter: "blur(14px)",
            }}
          />
          <div
            style={{
              position: "relative",
              background: "var(--surface)",
              border: "1px solid color-mix(in oklab, var(--accent) 42%, var(--rule))",
              borderRadius: 20,
              padding: 26,
              boxShadow:
                "0 0 0 1px color-mix(in oklab, var(--accent) 18%, transparent), 0 22px 50px -18px color-mix(in oklab, var(--accent) 50%, transparent)",
            }}
          >
            <span className="mono-cap flex items-center" style={{ gap: 7, color: "var(--accent)" }}>
              <span aria-hidden style={{ display: "inline-flex" }}>{IconSun}</span>
              Día {dayNum} · {day.themeEs}
            </span>
            <Gloss>{`Day ${dayNum} · ${day.themeEn}`}</Gloss>

            <p className="font-display" style={{ fontWeight: 300, fontSize: 13, letterSpacing: 0.2, textTransform: "uppercase", color: "var(--ink-mute)", margin: "16px 0 0" }}>
              Tu misión de hoy
            </p>
            <h2
              className="font-display text-ink"
              style={{ fontWeight: 300, fontSize: 30, lineHeight: 1.18, margin: "6px 0 0" }}
            >
              {mission}
            </h2>
            {missionEn && (
              <p className="text-gloss" style={{ color: "var(--ink-mute)", margin: "6px 0 0" }}>
                {missionEn}
              </p>
            )}

            {/* Di · Graba · Guarda */}
            <div className="grid grid-cols-3" style={{ gap: 10, marginTop: 24 }}>
              {STEPS.map((s) => (
                <div
                  key={s.verb}
                  className="flex flex-col items-center text-center"
                  style={{ gap: 7, padding: "14px 6px", background: "var(--surface-2)", border: "1px solid var(--rule)", borderRadius: 14 }}
                >
                  <span aria-hidden style={{ color: "var(--accent)" }}>{s.icon}</span>
                  <span className="font-display text-ink" style={{ fontSize: 15 }}>{s.verb}</span>
                  <span className="mono-cap" style={{ fontSize: 9 }}>{s.note}</span>
                  <Gloss>{`${s.verbEn} · ${s.noteEn}`}</Gloss>
                </div>
              ))}
            </div>

            <Link href="/practice" className="btn-primary btn-primary--center" style={{ marginTop: 22 }}>
              <span aria-hidden style={{ display: "inline-flex" }}>{IconMic}</span>
              <span className="lab">Comenzar práctica de hoy</span>
            </Link>
            <div style={{ textAlign: "center" }}>
              <Gloss>Start today&apos;s practice</Gloss>
            </div>
          </div>
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
              fontSize: 17,
            }}
          >
            {dayNum}
          </span>
          <span className="flex flex-col" style={{ minWidth: 0, flex: 1 }}>
            <span className="font-display text-ink" style={{ fontSize: 17, lineHeight: 1.2 }}>
              T{season.index} – {seasonTitle}
            </span>
            <Gloss>{`S${season.index} – ${seasonTitleEn}`}</Gloss>
            <span className="mono-cap" style={{ marginTop: 4 }}>Estás aquí</span>
            <Gloss>You&apos;re here</Gloss>
            <span className="flex items-center" style={{ gap: 7, marginTop: 12 }}>
              {[0, 1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  style={{
                    width: i === 0 ? 9 : 7,
                    height: i === 0 ? 9 : 7,
                    borderRadius: "50%",
                    background: i === 0 ? season.color : "transparent",
                    border: i === 0 ? "none" : "1.5px solid var(--rule)",
                  }}
                />
              ))}
              <span style={{ flex: 1, height: 1, background: "var(--rule)", marginLeft: 2 }} />
            </span>
          </span>
        </Link>

        {/* ===== Tu cuaderno ===== */}
        <SectionHead label="Tu cuaderno" labelEn="Your notebook" href="/cuaderno" cta="Ver todo" />
        <CuadernoCard said={said} latest={latest} />

        {/* ===== Más en Pues ===== */}
        <section aria-label="Más en Pues" style={{ marginTop: 30, paddingTop: 20, borderTop: "1px solid var(--rule)" }}>
          <p className="mono-cap" style={{ marginBottom: 4 }}>Más en Pues</p>
          <div style={{ marginBottom: 14 }}><Gloss>More in Pues</Gloss></div>
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ columnGap: 14, rowGap: 14 }}>
            <Shortcut zone="var(--zone-practica)" zoneLabel="Práctica" title="Juegos" titleEn="Games" href="/practice/games"
              icon={<svg viewBox="0 0 24 24" width="17" height="17" {...ws}><path d="M6 3h9l4 4v14H6z" /><path d="M9 12h7M9 16h5" /></svg>} />
            <Shortcut zone="var(--zone-lugares)" zoneLabel="Guías" title="Patrones" titleEn="Patterns" href="/guides"
              icon={<svg viewBox="0 0 24 24" width="17" height="17" {...ws}><circle cx="7" cy="7" r="3" /><circle cx="17" cy="7" r="3" /><circle cx="7" cy="17" r="3" /><circle cx="17" cy="17" r="3" /></svg>} />
            <Shortcut zone="var(--zone-lab)" zoneLabel="Lab" title="El oído" titleEn="The ear" href="/lab"
              icon={<svg viewBox="0 0 24 24" width="17" height="17" {...ws}><path d="M6 10a6 6 0 1 1 12 0v4a4 4 0 0 1-4 4h-1v-7" /></svg>} />
            <Shortcut zone="var(--zone-guias)" zoneLabel="Cuaderno" title="Guardado" titleEn="Saved" href="/cuaderno"
              icon={<svg viewBox="0 0 24 24" width="17" height="17" {...ws}><path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3V4z" /></svg>} />
          </div>
        </section>
      </div>
    </div>
  );
}

/** Latest saved phrase — Spanish, with its English revealed on tap. */
function CuadernoCard({ said, latest }: { said: number; latest?: Thought }) {
  const [showEn, setShowEn] = useState(false);
  const hasEnglish = Boolean(latest?.english);

  return (
    <div
      className="flex items-start"
      style={{ gap: 14, padding: "16px 18px", background: "var(--surface)", border: "1px solid var(--rule)", borderRadius: 16 }}
    >
      <span aria-hidden className="flex flex-shrink-0 items-center justify-center" style={{ width: 40, height: 40, borderRadius: 11, background: "color-mix(in oklab, var(--zone-guias) 14%, transparent)", color: "var(--zone-guias)" }}>
        {IconBook}
      </span>
      <div className="flex flex-col" style={{ minWidth: 0, flex: 1 }}>
        <span className="mono-cap">{said} {said === 1 ? "frase guardada" : "frases guardadas"}</span>
        <Gloss>{`${said} saved ${said === 1 ? "sentence" : "sentences"}`}</Gloss>
        {latest ? (
          hasEnglish ? (
            <button
              type="button"
              onClick={() => setShowEn((v) => !v)}
              onMouseEnter={() => setShowEn(true)}
              onMouseLeave={() => setShowEn(false)}
              onFocus={() => setShowEn(true)}
              onBlur={() => setShowEn(false)}
              aria-expanded={showEn}
              className="flex flex-col text-left"
              style={{ gap: 4, marginTop: 6 }}
            >
              <span className="font-display text-ink-soft" style={{ fontSize: 16, lineHeight: 1.34 }}>
                {latest.sentence}
              </span>
              {showEn ? (
                <span className="text-gloss" style={{ color: "var(--ink-mute)" }}>{latest.english}</span>
              ) : (
                <span className="mono-cap" style={{ fontSize: 9 }}>toca o haz clic para ver el inglés</span>
              )}
            </button>
          ) : (
            <span className="font-display text-ink-soft" style={{ fontSize: 16, lineHeight: 1.34, marginTop: 6 }}>
              {latest.sentence}
            </span>
          )
        ) : (
          <>
            <span className="font-display text-ink-mute" style={{ fontStyle: "italic", fontSize: 15, marginTop: 6 }}>
              Aún no hay frases. Di la primera hoy.
            </span>
            <Gloss>No sentences yet. Say your first today.</Gloss>
          </>
        )}
      </div>
      {latest && (
        <span aria-hidden style={{ flexShrink: 0, marginTop: 2, color: "var(--accent)" }}>{IconHeart}</span>
      )}
    </div>
  );
}

function SectionHead({ label, labelEn, href, cta }: { label: string; labelEn?: string; href: string; cta: string }) {
  return (
    <div className="flex items-baseline justify-between" style={{ marginTop: 30, marginBottom: 12 }}>
      <span className="flex flex-col">
        <span className="mono-cap">{label}</span>
        {labelEn && <Gloss>{labelEn}</Gloss>}
      </span>
      <Link href={href} className="mono-cap transition-colors hover:text-accent">
        {cta} →
      </Link>
    </div>
  );
}

function Shortcut({
  zone,
  zoneLabel,
  title,
  titleEn,
  href,
  icon,
}: {
  zone: string;
  zoneLabel: string;
  title: string;
  titleEn?: string;
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
        {titleEn && <Gloss>{titleEn}</Gloss>}
      </span>
    </Link>
  );
}
