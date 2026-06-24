"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, type CSSProperties, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { PageHeader, Wordmark } from "@/components/PageHeader";
import { Ledger, ZoneRow } from "@/components/ZoneList";
import { MicButton } from "@/components/MicButton";
import { ClickablePrompt } from "@/components/ClickablePrompt";
import { games } from "@/content/games";
import { speakDayForIndex, promptForSession } from "@/content/prompts";
import { getSessionIndex } from "@/lib/store";
import { useStats } from "@/hooks/useStats";
import { useThoughts } from "@/hooks/useThoughts";
import { useFlowDraft } from "@/hooks/useFlowDraft";
import { useRecorder } from "@/hooks/useRecorder";

const DIAS = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

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
};

function leadVerb(stem: string): string {
  return stem
    .replace(/[….]+$/g, "")
    .trim()
    .split(/\s+/)[0]
    .toLowerCase();
}

export default function PracticeActPage() {
  const router = useRouter();
  const { stats, hydrated: statsHydrated } = useStats();
  const { thoughts } = useThoughts();
  const { patch } = useFlowDraft();
  const recorder = useRecorder();

  const [sessionIndex, setSessionIndex] = useState(0);
  const [now, setNow] = useState<Date | null>(null);
  const [advancing, setAdvancing] = useState(false);

  useEffect(() => {
    setSessionIndex(getSessionIndex());
    setNow(new Date());
  }, []);

  const day = speakDayForIndex(stats.currentDayIndex);
  const dayNum = day.day.toString().padStart(2, "0");
  const weekday = now ? DIAS[now.getDay()] : "Hoy";
  const said = stats.sentencesCreated;

  const tresFrases = day.prompts.slice(0, 3).map((p) => p.frameStem);
  const dosVerbos = day.prompts.slice(0, 2).map((p) => leadVerb(p.frameStem));

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

  const micSubtitle =
    recorder.state === "recording" ? "Escuchando… toca al terminar." : "Toca y dílo en voz alta.";

  return (
    <div
      className="fade-rise"
      style={{ paddingBottom: 96, "--zone": "var(--zone-practica)" } as CSSProperties}
    >
      <PageHeader
        title={<Wordmark>Práctica</Wordmark>}
        meta={<span className="mono-cap">Día {dayNum}</span>}
      />

      <div className="lg:mt-8 lg:grid lg:grid-cols-[1.4fr_1fr] lg:items-start lg:gap-12">
        {/* ===== MAIN — the 3·2·1 act ===== */}
        <div style={{ marginTop: 22 }}>
          <span className="day-pill">
            <span className="sep" style={{ display: "none" }} />
            <span style={{ width: 5, height: 5, borderRadius: 999, background: "var(--accent)" }} aria-hidden />
            {weekday} · {day.themeEs} · Día {dayNum}
          </span>

          <h1 className="text-display-2xl text-ink" style={{ marginTop: 18 }}>
            Lo de hoy.
          </h1>
          <p className="text-display-italic text-[1.0625rem]" style={{ margin: "2px 0 0" }}>
            Tres frases, dos verbos, una dicha en voz alta.
          </p>

          <div className="flex flex-wrap" style={{ gap: 40, marginTop: 34 }}>
            {/* left — read 3, recognize 2 */}
            <div style={{ flex: 1, minWidth: 260, maxWidth: 380 }}>
              <div style={{ paddingTop: 18, borderTop: "1px solid var(--rule)" }}>
                <span className="mono-cap">Tres frases</span>
                <p
                  className="font-display text-ink"
                  style={{ fontWeight: 400, fontSize: 19, lineHeight: 1.85, margin: "10px 0 0" }}
                >
                  {tresFrases.map((f, i) => (
                    <span key={i}>
                      {f}
                      {i < tresFrases.length - 1 ? <br /> : null}
                    </span>
                  ))}
                </p>
              </div>
              <div style={{ paddingTop: 18, marginTop: 14, borderTop: "1px solid var(--rule)" }}>
                <span className="mono-cap">Dos verbos</span>
                <p
                  className="font-display text-ink"
                  style={{ fontWeight: 400, fontSize: 20, margin: "10px 0 0" }}
                >
                  {dosVerbos.join(" · ")}
                </p>
              </div>
            </div>

            {/* right — say 1 aloud */}
            <div className="flex flex-col justify-center" style={{ flex: 1, minWidth: 260 }}>
              <div style={{ position: "relative" }}>
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%,-50%)",
                    width: "96%",
                    height: 150,
                    background:
                      "radial-gradient(60% 60% at 50% 50%, color-mix(in oklab, var(--accent) 20%, transparent), transparent 70%)",
                    filter: "blur(12px)",
                  }}
                />
                <div
                  style={{
                    position: "relative",
                    background: "var(--surface-2)",
                    border: "1px solid color-mix(in oklab, var(--accent) 40%, var(--rule))",
                    borderTop: "2px solid var(--accent)",
                    borderRadius: 18,
                    padding: 24,
                  }}
                >
                  <span className="mono-cap" style={{ color: "var(--accent)" }}>
                    Uno en voz alta
                  </span>
                  <div className="font-display" style={{ fontStyle: "italic", fontWeight: 300, fontSize: 23, lineHeight: 1.42, color: "var(--ink)", marginTop: 12 }}>
                    <ClickablePrompt text={prompt.english} wordHints={prompt.wordHints} />
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center" style={{ gap: 12, marginTop: 28 }}>
                <MicButton state={recorder.state} onTap={onTap} />
                <span className="text-display-italic text-center text-[1rem]">{micSubtitle}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ===== ASIDE ===== */}
        <aside className="hidden lg:flex lg:flex-col" style={{ paddingLeft: 40, borderLeft: "1px solid var(--rule)", minHeight: "100%" }}>
          <h2 className="font-display text-ink" style={{ fontWeight: 300, fontSize: 24 }}>
            Cómo funciona
          </h2>
          <div style={{ marginTop: 22 }}>
            {[
              { n: 3, t: "Lees tres frases para entrar en tema." },
              { n: 2, t: "Reconoces dos verbos del día." },
              { n: 1, t: "Dices una frase en voz alta. Eso mantiene la racha." },
            ].map((s, i, arr) => (
              <div
                key={s.n}
                className="flex"
                style={{
                  gap: 14,
                  padding: "16px 0",
                  borderTop: "1px solid var(--rule)",
                  borderBottom: i === arr.length - 1 ? "1px solid var(--rule)" : undefined,
                }}
              >
                <span className="font-mono" style={{ fontSize: 11, color: "var(--accent)", flexShrink: 0, paddingTop: 2 }}>
                  {s.n}
                </span>
                <span className="font-display text-ink-soft" style={{ fontSize: 16, lineHeight: 1.4 }}>
                  {s.t}
                </span>
              </div>
            ))}
          </div>
          <div
            className="flex items-center justify-between"
            style={{ marginTop: "auto", paddingTop: 18, borderTop: "1px solid var(--rule)" }}
          >
            <span className="mono-cap">Dichas</span>
            <span className="font-display text-ink" style={{ fontSize: 22 }}>
              {statsHydrated ? said : thoughts.length}
            </span>
          </div>
        </aside>
      </div>

      {/* ===== Más práctica — keep games / plan / reading reachable ===== */}
      <section style={{ marginTop: 32, paddingTop: 20, borderTop: "1px solid var(--rule)" }}>
        <p className="mono-cap" style={{ marginBottom: 14 }}>
          Más práctica
        </p>

        <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2" style={{ marginBottom: 18 }}>
          <Link href="/practice/plan" className="pill-lower">
            <span className="font-display text-ink" style={{ fontSize: 16 }}>El plan</span>
            <span className="mono-cap" style={{ marginLeft: "auto" }}>14 días</span>
          </Link>
          <Link href="/read" className="pill-lower">
            <span className="font-display text-ink" style={{ fontSize: 16 }}>La lectura</span>
            <span className="mono-cap" style={{ marginLeft: "auto" }}>Leer →</span>
          </Link>
        </div>

        <p className="mono-cap" style={{ marginBottom: 10 }}>Juegos</p>
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
  );
}
