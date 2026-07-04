"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { PageHeader, Wordmark } from "@/components/PageHeader";
import { PlayButton } from "@/components/PlayButton";
import { ClickablePrompt } from "@/components/ClickablePrompt";
import { Gloss } from "@/components/Gloss";
import { totalDays } from "@/content/frames";
import { speakDayForIndex, promptForSession, parseWhy, PROMPTS_PER_DAY, type SpeakPrompt } from "@/content/prompts";
import { getSessionIndex } from "@/lib/store";
import { useStats } from "@/hooks/useStats";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const IconLightbulb = (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...stroke}>
    <path d="M9 18h6M10 21h4M12 3a6 6 0 0 1 4 10.5c-.7.6-1 1-1 2H9c0-1-.3-1.4-1-2A6 6 0 0 1 12 3Z" />
  </svg>
);

export default function PracticeActPage() {
  const { stats } = useStats();

  const [sessionIndex, setSessionIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    setSessionIndex(getSessionIndex());
  }, []);

  const day = speakDayForIndex(stats.currentDayIndex);
  const dayNum = day.day.toString().padStart(2, "0");
  const mission = day.missionEs ?? day.line;
  const nextSentence = Math.min(sessionIndex + 1, PROMPTS_PER_DAY);

  const examples = day.prompts.slice(0, showMore ? 5 : 3);

  const prompt = useMemo(
    () => promptForSession(stats.currentDayIndex, sessionIndex),
    [stats.currentDayIndex, sessionIndex],
  );

  return (
    <div
      className="fade-rise"
      style={{ paddingBottom: 96, "--zone": "var(--zone-practica)" } as CSSProperties}
    >
      <PageHeader
        title={<Wordmark>Práctica</Wordmark>}
        meta={<span className="mono-cap">Día {dayNum}</span>}
      />

      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <Link href="/" className="mono-cap inline-flex items-center transition-colors hover:text-accent" style={{ gap: 6, marginTop: 18 }}>
          <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden {...stroke}><path d="M15 6l-6 6 6 6" /></svg>
          Hoy
        </Link>

        {/* ===== Mission restated ===== */}
        <div style={{ marginTop: 16 }}>
          <span className="mono-cap" style={{ color: "var(--accent)" }}>Día {dayNum} · {day.themeEs}</span>
          <Gloss>{`Day ${dayNum} · ${day.themeEn}`}</Gloss>
          <h1 className="text-display-2xl text-ink" style={{ marginTop: 10 }}>
            {mission}
          </h1>
          {day.missionEn && (
            <p className="text-gloss" style={{ color: "var(--ink-mute)", marginTop: 6 }}>
              {day.missionEn}
            </p>
          )}
          <p className="text-gloss" style={{ color: "var(--ink-mute)", marginTop: 8 }}>
            Algunas ideas para empezar.
          </p>
          <Gloss>Some ideas to get started.</Gloss>
        </div>

        {/* ===== Examples — Spanish model phrases, tap to reveal English ===== */}
        <div style={{ marginTop: 22, display: "flex", flexDirection: "column", gap: 10 }}>
          {examples.map((p) => (
            <ExampleCard key={p.id} prompt={p} />
          ))}
          {!showMore && day.prompts.length > 3 && (
            <button
              type="button"
              onClick={() => setShowMore(true)}
              className="mono-cap transition-colors hover:text-accent"
              style={{ alignSelf: "flex-start", color: "var(--accent)", padding: "6px 2px" }}
            >
              + Ver más ejemplos
            </button>
          )}
        </div>

        {/* ===== Una frase a la vez — enter the speak → reveal → save loop ===== */}
        <div
          style={{
            position: "relative",
            marginTop: 26,
            padding: 30,
            background: "var(--surface)",
            border: "1px solid color-mix(in oklab, var(--accent) 40%, var(--rule))",
            borderRadius: 20,
            textAlign: "center",
          }}
        >
          <span className="mono-cap" style={{ color: "var(--accent)" }}>
            Frase {nextSentence} de {PROMPTS_PER_DAY}
          </span>
          <Gloss>{`Sentence ${nextSentence} of ${PROMPTS_PER_DAY}`}</Gloss>
          <h2 className="font-display text-ink" style={{ fontWeight: 300, fontSize: 26, marginTop: 10 }}>
            ¡Es tu turno!
          </h2>
          <Gloss>Your turn!</Gloss>
          <p className="font-display text-ink-soft" style={{ fontSize: 18, lineHeight: 1.35, margin: "8px auto 0", maxWidth: "30ch" }}>
            Una frase a la vez: graba, revela la respuesta, y guarda.
          </p>
          <Gloss>One sentence at a time: record, reveal the answer, then save.</Gloss>
          <Link href="/flow/speak" className="btn-primary btn-primary--center" style={{ marginTop: 24 }}>
            {sessionIndex === 0 ? "Comenzar" : "Continuar"}
          </Link>
          <div style={{ textAlign: "center", marginTop: 8 }}>
            <Gloss>{sessionIndex === 0 ? "Start" : "Continue"}</Gloss>
          </div>
        </div>

        {/* ===== Consejo de hoy ===== */}
        <div
          className="flex"
          style={{ gap: 14, marginTop: 18, padding: 18, background: "var(--surface-2)", border: "1px solid var(--rule)", borderRadius: 16 }}
        >
          <span aria-hidden className="flex-shrink-0" style={{ color: "var(--accent)", marginTop: 1 }}>{IconLightbulb}</span>
          <div>
            <p className="mono-cap" style={{ marginBottom: 6 }}>Consejo de hoy</p>
            <Gloss>Today&apos;s tip</Gloss>
            <p className="font-display text-ink-soft" style={{ fontSize: 16, lineHeight: 1.5 }}>
              {parseWhy(prompt.why).map((seg, i) =>
                seg.italic ? (
                  <em key={i} className="font-display" style={{ fontStyle: "italic", color: "var(--ink)" }}>{seg.text}</em>
                ) : (
                  <span key={i}>{seg.text}</span>
                ),
              )}
            </p>
          </div>
        </div>

        {/* ===== Más práctica — five quiet doors, one line each ===== */}
        <section style={{ marginTop: 32, paddingTop: 20, borderTop: "1px solid var(--rule)" }}>
          <p className="mono-cap" style={{ marginBottom: 4 }}>Más práctica</p>
          <div style={{ marginBottom: 6 }}><Gloss>More practice</Gloss></div>

          <MoreRow href="/read" title="La lectura" titleEn="Reading" meta="antes de dormir" />
          <MoreRow href="/situations" title="Situaciones" titleEn="Situations" meta="escenas reales" />
          <MoreRow href="/lab" title="El oído" titleEn="The ear" meta="pronunciación" />
          <MoreRow href="/practice/plan" title="El plan" titleEn="The plan" meta={`${totalDays} días`} />
        </section>
      </div>
    </div>
  );
}

/** One quiet door in the Más práctica list. */
function MoreRow({ href, title, titleEn, meta }: { href: string; title: string; titleEn: string; meta: string }) {
  return (
    <Link
      href={href}
      className="flex items-center transition-colors active:bg-surface-sunk"
      style={{ gap: 12, padding: "14px 2px", borderTop: "1px solid var(--rule)" }}
    >
      <span className="flex flex-col" style={{ flex: 1, minWidth: 0 }}>
        <span className="font-display text-ink" style={{ fontSize: 17 }}>{title}</span>
        <Gloss>{titleEn}</Gloss>
      </span>
      <span className="mono-cap" style={{ flexShrink: 0 }}>{meta}</span>
      <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden {...stroke} style={{ color: "var(--ink-mute)", flexShrink: 0 }}>
        <path d="M9 6l6 6-6 6" />
      </svg>
    </Link>
  );
}

/**
 * An idea to start from: the English thought with tappable Spanish word-glosses
 * (tap an underlined word → its Spanish), and audio that plays the Spanish model.
 */
function ExampleCard({ prompt }: { prompt: SpeakPrompt }) {
  return (
    <div
      className="flex items-start"
      style={{ gap: 12, padding: "16px 16px", background: "var(--surface)", border: "1px solid var(--rule)", borderRadius: 14 }}
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
