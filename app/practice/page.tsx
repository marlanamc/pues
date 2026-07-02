"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, type CSSProperties, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { PageHeader, Wordmark } from "@/components/PageHeader";
import { Ledger, ZoneRow } from "@/components/ZoneList";
import { MicButton } from "@/components/MicButton";
import { PlayButton } from "@/components/PlayButton";
import { ClickablePrompt } from "@/components/ClickablePrompt";
import { Gloss } from "@/components/Gloss";
import { games } from "@/content/games";
import { speakDayForIndex, promptForSession, parseWhy, PROMPTS_PER_DAY, type SpeakPrompt } from "@/content/prompts";
import { getSessionIndex } from "@/lib/store";
import { useStats } from "@/hooks/useStats";
import { useFlowDraft } from "@/hooks/useFlowDraft";
import { useRecorder } from "@/hooks/useRecorder";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const gameIcons: Record<string, ReactNode> = {
  build: (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
      <rect x="3" y="6" width="8" height="5" rx="1.5" />
      <rect x="13" y="6" width="8" height="5" rx="1.5" />
      <rect x="3" y="14" width="13" height="5" rx="1.5" />
    </svg>
  ),
  timeline: (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
      <path d="M3 12h18" />
      <circle cx="7" cy="12" r="2" />
      <circle cx="17" cy="12" r="2" />
      <path d="M7 9V6M17 15v3" />
    </svg>
  ),
  markers: (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
      <path d="M5 4v16M5 5h11l-2 3 2 3H5" />
    </svg>
  ),
  scales: (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
      <path d="M12 4v16M7 20h10" />
      <path d="M4 8h16M4 8l-2 5h4ZM20 8l-2 5h4Z" />
    </svg>
  ),
  flash: (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
      <path d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z" />
    </svg>
  ),
};

const IconLightbulb = (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...stroke}>
    <path d="M9 18h6M10 21h4M12 3a6 6 0 0 1 4 10.5c-.7.6-1 1-1 2H9c0-1-.3-1.4-1-2A6 6 0 0 1 12 3Z" />
  </svg>
);

export default function PracticeActPage() {
  const router = useRouter();
  const { stats } = useStats();
  const { patch } = useFlowDraft();
  const recorder = useRecorder();

  const [sessionIndex, setSessionIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [advancing, setAdvancing] = useState(false);

  useEffect(() => {
    setSessionIndex(getSessionIndex());
  }, []);

  const day = speakDayForIndex(stats.currentDayIndex);
  const dayNum = day.day.toString().padStart(2, "0");
  const mission = day.missionEs ?? day.line;

  const examples = day.prompts.slice(0, showMore ? 5 : 3);

  const prompt = useMemo(
    () => promptForSession(stats.currentDayIndex, sessionIndex),
    [stats.currentDayIndex, sessionIndex],
  );

  function finish(recordingId: string | null) {
    if (advancing) return;
    setAdvancing(true);
    patch({
      source: "daily",
      promptId: prompt.id,
      frameStem: prompt.frameStem,
      englishPrompt: prompt.english,
      spanishAnswer: prompt.spanish,
      whyNote: prompt.why,
      wordHints: prompt.wordHints,
      situationLabel: prompt.situationLabel,
      spoke: true,
      recordingId: recordingId ?? undefined,
    });
    router.push("/flow/reveal");
  }

  // When a recording stops, hand off to Reveal with its id.
  useEffect(() => {
    if (recorder.state === "done") finish(recorder.recordingId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recorder.state, recorder.recordingId]);

  async function onTap() {
    if (advancing) return;
    if (recorder.state === "recording") {
      recorder.stop();
      return;
    }
    if (recorder.state === "done") return;
    const ok = await recorder.start();
    if (!ok) finish(null); // mic denied / unsupported — honor the speak-first gate
  }

  const micCaption =
    recorder.state === "recording" ? "Escuchando… toca al terminar." : "Toca para grabar · o mantén presionado";
  const micCaptionEn =
    recorder.state === "recording" ? "Listening… tap when done." : "Tap to record · or press and hold";

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

        {/* ===== ¡Es tu turno! — record ===== */}
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
          <h2 className="font-display text-ink" style={{ fontWeight: 300, fontSize: 26 }}>
            ¡Es tu turno!
          </h2>
          <Gloss>Your turn!</Gloss>
          <p className="font-display text-ink-soft" style={{ fontSize: 18, lineHeight: 1.35, margin: "8px auto 0", maxWidth: "26ch" }}>
            Di {PROMPTS_PER_DAY} frases. {mission}
          </p>
          {day.missionEn && <Gloss>{`Say ${PROMPTS_PER_DAY} sentences. ${day.missionEn}`}</Gloss>}

          <div className="flex flex-col items-center" style={{ gap: 14, marginTop: 26 }}>
            <MicButton state={recorder.state} onTap={onTap} />
            <span className="mono-cap">{micCaption}</span>
            <Gloss>{micCaptionEn}</Gloss>
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

        {/* ===== Más práctica — keep games / plan / reading reachable ===== */}
        <section style={{ marginTop: 32, paddingTop: 20, borderTop: "1px solid var(--rule)" }}>
          <p className="mono-cap" style={{ marginBottom: 4 }}>Más práctica</p>
          <div style={{ marginBottom: 14 }}><Gloss>More practice</Gloss></div>

          <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2" style={{ marginBottom: 18 }}>
            <Link href="/practice/plan" className="pill-lower">
              <span className="flex flex-col">
                <span className="font-display text-ink" style={{ fontSize: 16 }}>El plan</span>
                <Gloss>The plan</Gloss>
              </span>
              <span className="mono-cap" style={{ marginLeft: "auto" }}>14 días</span>
            </Link>
            <Link href="/read" className="pill-lower">
              <span className="flex flex-col">
                <span className="font-display text-ink" style={{ fontSize: 16 }}>La lectura</span>
                <Gloss>Reading</Gloss>
              </span>
              <span className="mono-cap" style={{ marginLeft: "auto" }}>Leer →</span>
            </Link>
          </div>

          <p className="mono-cap" style={{ marginBottom: 4 }}>Juegos</p>
          <div style={{ marginBottom: 10 }}><Gloss>Games</Gloss></div>
          <Ledger>
            {games.map((game) => (
              <li key={game.href}>
                <Link href={game.href} className="block transition-colors active:bg-surface-sunk">
                  <ZoneRow
                    icon={gameIcons[game.iconId]}
                    title={game.label}
                    description={game.description}
                    meta={game.level}
                  />
                </Link>
              </li>
            ))}
          </Ledger>
        </section>
      </div>
    </div>
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
