"use client";

/**
 * La Línea — the playable flow: mode select → play (4 modes, inline feedback)
 * → results. Ported from the design handoff, rendered into a normal Pues page
 * (the prototype's phone shell / tab bar / Práctica hub are dropped — the real
 * app provides those). Color = WHEN, shape = WHAT KIND, almagre = what you tap.
 */

import { useState } from "react";
import Link from "next/link";
import { TimelineDiagram, StampGlyph } from "@/components/LaLineaTimeline";
import {
  STAMPS,
  TENSE_SCOPES,
  MODES,
  READ,
  BUILD,
  SPOT,
  SIGNALS,
  type Mark,
  type ModeId,
  type StampKind,
  type Zone,
  type ReadQuestion as ReadQ,
  type BuildQuestion as BuildQ,
  type SpotQuestion as SpotQ,
  type SignalsQuestion as SignalsQ,
} from "@/content/laLinea";

/* ---------- fonts (Pues theme vars) ---------- */
const SERIF = "var(--font-display)";
const SANS = "var(--font-body)";
const MONO = "var(--font-mono)";

const OK = "#059669";
const WRONG = "#ef4444";

/* ---------- icons (1.6 stroke) ---------- */
const ic = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};
const IconArrow = ({ s = 18 }: { s?: number }) => (
  <svg viewBox="0 0 24 24" width={s} height={s} {...ic}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
const IconBack = ({ s = 18 }: { s?: number }) => (
  <svg viewBox="0 0 24 24" width={s} height={s} {...ic}><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
);
const IconCheck = ({ s = 18 }: { s?: number }) => (
  <svg viewBox="0 0 24 24" width={s} height={s} {...ic}><path d="M4 12.5l5 5L20 6" /></svg>
);
const IconClose = ({ s = 18 }: { s?: number }) => (
  <svg viewBox="0 0 24 24" width={s} height={s} {...ic}><path d="M6 6l12 12M18 6 6 18" /></svg>
);

/* ---------- type helpers ---------- */
function Cap({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <p style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.13em", textTransform: "uppercase", color: "var(--ink-mute)", margin: 0, ...style }}>
      {children}
    </p>
  );
}
function Serif({ children, style, it }: { children: React.ReactNode; style?: React.CSSProperties; it?: boolean }) {
  return (
    <span style={{ fontFamily: SERIF, fontStyle: it ? "italic" : "normal", color: "var(--ink)", ...style }}>
      {children}
    </span>
  );
}

/* ---------- progress pills (used during a round) ---------- */
function ProgressPills({ total, index }: { total: number; index: number }) {
  return (
    <div style={{ display: "flex", gap: 5 }}>
      {Array.from({ length: total }).map((_, i) => (
        <span key={i} style={{ width: i === index ? 16 : 6, height: 6, borderRadius: 99, background: i <= index ? "var(--accent)" : "var(--rule)" }} />
      ))}
    </div>
  );
}

const sig = (arr: Pick<Mark, "kind" | "zone">[]) =>
  arr.map((m) => `${m.kind}:${m.zone}`).sort().join("|");

/* ---------- shared option row ---------- */
type OptState = "idle" | "selected" | "correct" | "wrong" | "muted";
function OptRow({ children, state, onClick }: { children: React.ReactNode; state: OptState; onClick: () => void }) {
  let bg = "var(--surface)";
  let border = "var(--rule)";
  if (state === "correct") {
    bg = `color-mix(in oklab, ${OK} 13%, var(--surface))`;
    border = OK;
  } else if (state === "wrong") {
    bg = `color-mix(in oklab, ${WRONG} 11%, var(--surface))`;
    border = WRONG;
  } else if (state === "selected") {
    bg = "color-mix(in oklab, var(--accent) 11%, var(--surface))";
    border = "var(--accent)";
  }
  const opacity = state === "muted" ? 0.45 : 1;
  return (
    <button onClick={onClick} style={{
      display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10,
      width: "100%", textAlign: "left", padding: "12px 14px", borderRadius: 11,
      background: bg, border: `1px solid ${border}`, color: "var(--ink)", opacity,
      fontFamily: SANS, fontSize: 14.5,
    }}>
      {children}
    </button>
  );
}

/* ---------- play header ---------- */
function PlayHeader({ onExit, total, index }: { onExit: () => void; total: number; index: number }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <button onClick={onExit} style={{ display: "flex", alignItems: "center", gap: 5, background: "none", border: "none", color: "var(--ink-mute)", padding: 0, fontFamily: MONO, fontSize: 10, letterSpacing: "0.13em", textTransform: "uppercase", cursor: "pointer" }}>
        <IconClose s={13} /> Salir
      </button>
      <ProgressPills total={total} index={index} />
    </div>
  );
}

/* ---------- shared feedback footer ---------- */
function Feedback({ correct, tense, why, onNext, last }: { correct: boolean; tense: string; why: string; onNext: () => void; last: boolean }) {
  const statusColor = correct ? OK : WRONG;
  return (
    <div className="fade-rise" style={{ borderTop: `2px solid ${statusColor}`, paddingTop: 13, marginTop: 8 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
        <span style={{ color: statusColor, display: "flex" }}>
          {correct ? <IconCheck s={16} /> : <IconClose s={16} />}
        </span>
        <Cap style={{ color: statusColor }}>{correct ? "Right" : "Not quite"} · {tense}</Cap>
      </div>
      <p style={{ fontSize: 13, lineHeight: 1.5, color: "var(--ink-soft)", margin: "0 0 12px" }}>{why}</p>
      <button onClick={onNext} style={{ width: "100%", background: "var(--accent)", color: "var(--accent-ink)", border: "none", borderRadius: 12, padding: "13px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}>
        <Serif style={{ fontSize: 17, color: "var(--accent-ink)" }}>{last ? "Ver resultados" : "Siguiente"}</Serif>
        <IconArrow s={17} />
      </button>
    </div>
  );
}

/* ---------- MODE 1: Leer la línea ---------- */
function ReadQuestion({ q, last, onAnswer }: { q: ReadQ; last: boolean; onAnswer: (correct: boolean) => void }) {
  const [pick, setPick] = useState<string | null>(null);
  const done = pick !== null;
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, minHeight: 0 }}>
      <Cap style={{ margin: "20px 0 10px" }}>Lee la línea</Cap>
      <div style={{ background: "var(--surface)", border: "1px solid var(--rule)", borderRadius: 14, padding: "14px 12px 8px" }}>
        <TimelineDiagram marks={q.marks} />
      </div>
      <p style={{ fontFamily: SERIF, fontWeight: 300, fontSize: 21, lineHeight: 1.3, margin: "18px 0 14px", color: "var(--ink)" }}>
        {q.pre}<Serif it style={{ color: "var(--accent)" }}>{done ? q.answer : q.verb}</Serif>{q.post}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {q.options.map((o) => {
          let st: OptState = "idle";
          if (done) st = o === q.answer ? "correct" : o === pick ? "wrong" : "muted";
          return (
            <OptRow key={o} state={st} onClick={() => !done && setPick(o)}>
              <Serif it style={{ fontSize: 16 }}>{o}</Serif>
              {done && o === q.answer && <span style={{ color: OK, display: "flex" }}><IconCheck s={15} /></span>}
            </OptRow>
          );
        })}
      </div>
      <div style={{ flex: 1 }} />
      {done && <Feedback correct={pick === q.answer} tense={q.tense} why={q.why} onNext={() => onAnswer(pick === q.answer)} last={last} />}
    </div>
  );
}

/* ---------- MODE 2: Construir la línea ---------- */
function BuildQuestion({ q, last, onAnswer }: { q: BuildQ; last: boolean; onAnswer: (correct: boolean) => void }) {
  const [placed, setPlaced] = useState<Mark[]>([]);
  const [sel, setSel] = useState<StampKind | null>(null);
  const [checked, setChecked] = useState(false);
  const palette: StampKind[] = ["dot", "line", "dots", "arc"];
  const stampName = (k: StampKind) => STAMPS.find((s) => s.kind === k)!.name;
  const addZone = (zone: Zone) => {
    if (sel == null || checked) return;
    const inZone = placed.filter((m) => m.zone === zone).length;
    setPlaced([...placed, { kind: sel, zone, pos: 0.34 + inZone * 0.22, accent: true }]);
  };
  const correct = checked && sig(placed) === sig(q.need);
  const zones: [Zone, string][] = [["past", "Antes"], ["now", "Ahora"], ["future", "Después"]];
  const boldParts = q.bold.split(" · ");
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, minHeight: 0 }}>
      <Cap style={{ margin: "20px 0 10px" }}>Construye la línea</Cap>
      <p style={{ fontFamily: SERIF, fontWeight: 300, fontSize: 19, lineHeight: 1.3, margin: "0 0 14px", color: "var(--ink)" }}>
        {q.sentence.split(new RegExp(`(${boldParts.join("|")})`)).map((part, i) =>
          boldParts.includes(part) ? <Serif key={i} it style={{ color: "var(--accent)" }}>{part}</Serif> : <span key={i}>{part}</span>,
        )}
      </p>
      <div style={{ background: "var(--surface)", border: "1px solid var(--rule)", borderRadius: 14, padding: "12px 10px 6px", position: "relative" }}>
        <TimelineDiagram marks={placed} />
        {!checked && (
          <div style={{ position: "absolute", inset: "12px 10px 24px", display: "flex" }}>
            {zones.map(([z]) => (
              <button key={z} onClick={() => addZone(z)} style={{ flex: 1, background: sel ? "color-mix(in oklab, var(--accent) 6%, transparent)" : "transparent", border: "none", borderRight: z !== "future" ? "1px dashed var(--rule)" : "none", color: "transparent", cursor: sel ? "pointer" : "default" }} aria-label={`Colocar en ${z}`} />
            ))}
          </div>
        )}
      </div>
      {!checked && (
        <>
          <Cap style={{ margin: "14px 0 8px" }}>{sel ? `Toca una zona para colocar «${stampName(sel)}»` : "Elige un sello"}</Cap>
          <div style={{ display: "flex", gap: 8 }}>
            {palette.map((k) => (
              <button key={k} onClick={() => setSel(k)} style={{ flex: 1, padding: "10px 0", borderRadius: 10, background: sel === k ? "color-mix(in oklab, var(--accent) 12%, var(--surface))" : "var(--surface)", border: `1px solid ${sel === k ? "var(--accent)" : "var(--rule)"}`, display: "flex", flexDirection: "column", alignItems: "center", gap: 4, cursor: "pointer" }}>
                <StampGlyph kind={k} size={26} accent={sel === k} />
                <span style={{ fontFamily: MONO, fontSize: 7.5, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ink-mute)" }}>{stampName(k)}</span>
              </button>
            ))}
          </div>
        </>
      )}
      <div style={{ flex: 1 }} />
      {!checked ? (
        <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
          <button onClick={() => setPlaced([])} disabled={!placed.length} style={{ flex: "0 0 auto", padding: "13px 16px", borderRadius: 12, background: "transparent", border: "1px solid var(--rule)", color: "var(--ink-soft)", opacity: placed.length ? 1 : 0.4, fontFamily: MONO, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", cursor: placed.length ? "pointer" : "default" }}>Limpiar</button>
          <button onClick={() => placed.length && setChecked(true)} style={{ flex: 1, background: placed.length ? "var(--accent)" : "var(--surface)", color: placed.length ? "var(--accent-ink)" : "var(--ink-mute)", border: placed.length ? "none" : "1px solid var(--rule)", borderRadius: 12, padding: "13px 16px", cursor: placed.length ? "pointer" : "default" }}>
            <Serif style={{ fontSize: 17, color: placed.length ? "var(--accent-ink)" : "var(--ink-mute)" }}>Comprobar</Serif>
          </button>
        </div>
      ) : (
        <Feedback correct={correct} tense={q.tense} why={q.why} onNext={() => onAnswer(correct)} last={last} />
      )}
    </div>
  );
}

/* ---------- MODE 3: Pretérito vs Imperfecto ---------- */
function SpotQuestion({ q, last, onAnswer }: { q: SpotQ; last: boolean; onAnswer: (correct: boolean) => void }) {
  const [pick, setPick] = useState<"A" | "B" | null>(null);
  const done = pick !== null;
  const Card = ({ id, data }: { id: "A" | "B"; data: SpotQ["A"] }) => {
    let border = "var(--rule)";
    if (done) border = id === q.answer ? OK : id === pick ? WRONG : "var(--rule)";
    else if (pick === id) border = "var(--accent)";
    return (
      <button onClick={() => !done && setPick(id)} style={{ width: "100%", textAlign: "left", background: "var(--surface)", border: `1px solid ${border}`, borderRadius: 12, padding: "8px 10px 4px", opacity: done && id !== q.answer && id !== pick ? 0.5 : 1, cursor: done ? "default" : "pointer" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2px 4px" }}>
          <Cap>{id}</Cap>
          <span style={{ fontFamily: MONO, fontSize: 8.5, color: done && id === q.answer ? OK : "var(--ink-mute)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{data.label}</span>
        </div>
        <TimelineDiagram marks={data.marks.map((m) => ({ ...m, accent: done && id === q.answer }))} height={64} />
      </button>
    );
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, minHeight: 0 }}>
      <Cap style={{ margin: "20px 0 10px" }}>¿Qué línea encaja?</Cap>
      <p style={{ fontFamily: SERIF, fontWeight: 300, fontSize: 20, lineHeight: 1.3, margin: "0 0 14px", color: "var(--ink)" }}>{q.sentence}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <Card id="A" data={q.A} />
        <Card id="B" data={q.B} />
      </div>
      <div style={{ flex: 1 }} />
      {done && <Feedback correct={pick === q.answer} tense="Pretérito vs Imperfecto" why={q.why} onNext={() => onAnswer(pick === q.answer)} last={last} />}
    </div>
  );
}

/* ---------- MODE 4: Señales de tiempo ---------- */
function SignalsQuestion({ q, last, onAnswer }: { q: SignalsQ; last: boolean; onAnswer: (correct: boolean) => void }) {
  const [pick, setPick] = useState<string | null>(null);
  const done = pick !== null;
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, minHeight: 0 }}>
      <Cap style={{ margin: "20px 0 12px" }}>¿Qué tiempo pide esta señal?</Cap>
      <div style={{ display: "flex", justifyContent: "center", padding: "22px 0 26px" }}>
        <span style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, fontSize: 38, color: "var(--accent)", letterSpacing: "-0.01em" }}>«{q.clue}»</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {q.options.map((o) => {
          let st: OptState = "idle";
          if (done) st = o === q.answer ? "correct" : o === pick ? "wrong" : "muted";
          return (
            <OptRow key={o} state={st} onClick={() => !done && setPick(o)}>
              <span style={{ fontFamily: SANS, fontSize: 14.5 }}>{o}</span>
              {done && o === q.answer && <span style={{ color: OK, display: "flex" }}><IconCheck s={15} /></span>}
            </OptRow>
          );
        })}
      </div>
      <div style={{ flex: 1 }} />
      {done && <Feedback correct={pick === q.answer} tense={q.answer} why={q.why} onNext={() => onAnswer(pick === q.answer)} last={last} />}
    </div>
  );
}

/* ---------- mode select ---------- */
function ModeSelect({ onBack, onStart }: { onBack: () => void; onStart: (m: ModeId) => void }) {
  const [scope, setScope] = useState("all");
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 5, background: "none", border: "none", color: "var(--ink-mute)", padding: 0, fontFamily: MONO, fontSize: 10, letterSpacing: "0.13em", textTransform: "uppercase", cursor: "pointer", minHeight: 40 }}>
          <IconBack s={13} /> Práctica
        </button>
        <Cap>La Línea</Cap>
      </div>
      <h1 style={{ fontFamily: SERIF, fontWeight: 300, fontSize: 30, lineHeight: 1.05, letterSpacing: "-0.02em", margin: "12px 0 14px", color: "var(--ink)" }}>¿Cómo quieres practicar?</h1>

      <Cap style={{ marginBottom: 8 }}>Tiempos</Cap>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
        {TENSE_SCOPES.map((s) => (
          <button key={s.id} onClick={() => setScope(s.id)} style={{ padding: "6px 11px", borderRadius: 999, background: scope === s.id ? "var(--accent)" : "transparent", color: scope === s.id ? "var(--accent-ink)" : "var(--ink-soft)", border: `1px solid ${scope === s.id ? "var(--accent)" : "var(--rule)"}`, fontFamily: MONO, fontSize: 9.5, letterSpacing: "0.06em", textTransform: "uppercase", cursor: "pointer" }}>{s.label}</button>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {MODES.map((m) => (
          <button key={m.id} onClick={() => onStart(m.id)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, textAlign: "left", background: "var(--surface)", border: "1px solid var(--rule)", borderRadius: 12, padding: "13px 14px", cursor: "pointer", color: "var(--ink)" }}>
            <span style={{ minWidth: 0 }}>
              <span style={{ display: "block", fontFamily: SERIF, fontSize: 17, lineHeight: 1.14 }}>{m.title}</span>
              <span style={{ display: "block", fontSize: 11.5, color: "var(--ink-mute)", marginTop: 3 }}>{m.sub}</span>
            </span>
            <span style={{ flex: "0 0 auto", display: "flex" }}><IconArrow s={16} /></span>
          </button>
        ))}
      </div>

      <Link href="/guides/sellos" style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 18, fontFamily: MONO, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-mute)" }}>
        Guía de sellos <IconArrow s={13} />
      </Link>
    </div>
  );
}

/* ---------- results ---------- */
function Results({ mode, score, total, onAgain, onModes }: { mode: ModeId; score: number; total: number; onAgain: () => void; onModes: () => void }) {
  const m = MODES.find((x) => x.id === mode)!;
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "60vh" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Cap>{m.title}</Cap>
        <ProgressPills total={total} index={total} />
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "40px 0" }}>
        <div style={{ width: 58, height: 58, borderRadius: 99, background: "color-mix(in oklab, var(--accent) 14%, var(--surface))", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", marginBottom: 18 }}>
          <IconCheck s={26} />
        </div>
        <Cap style={{ marginBottom: 10 }}>Ronda terminada</Cap>
        <p style={{ fontFamily: SERIF, fontWeight: 300, fontSize: 44, lineHeight: 1, margin: 0, color: "var(--ink)" }}>
          {score} <span style={{ color: "var(--ink-mute)", fontSize: 26 }}>/ {total}</span>
        </p>
        <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 15, color: "var(--ink-soft)", margin: "14px 0 0", maxWidth: "22ch" }}>
          {score === total ? "Impecable. La línea ya es tuya." : score >= total / 2 ? "Vas viendo la forma de cada tiempo." : "Sin prisa — vuelve a mirar la línea."}
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <button onClick={onAgain} style={{ width: "100%", background: "var(--accent)", color: "var(--accent-ink)", border: "none", borderRadius: 12, padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}>
          <Serif style={{ fontSize: 17, color: "var(--accent-ink)" }}>Otra ronda</Serif><IconArrow s={17} />
        </button>
        <button onClick={onModes} style={{ width: "100%", background: "transparent", color: "var(--ink-soft)", border: "none", padding: 4, fontFamily: SERIF, fontSize: 15.5, cursor: "pointer" }}>Elegir otro modo</button>
      </div>
    </div>
  );
}

/* ---------- orchestrator ---------- */
type Screen = "modes" | "play" | "results";

export function LaLineaGame({ onQuit }: { onQuit?: () => void }) {
  const [screen, setScreen] = useState<Screen>("modes");
  const [mode, setMode] = useState<ModeId | null>(null);
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);

  const banks = { read: READ, build: BUILD, spot: SPOT, signals: SIGNALS } as const;
  const bank = mode ? banks[mode] : [];
  const total = bank.length;

  const start = (m: ModeId) => {
    setMode(m);
    setIdx(0);
    setScore(0);
    setScreen("play");
  };
  const answer = (correct: boolean) => {
    const ns = score + (correct ? 1 : 0);
    setScore(ns);
    if (idx + 1 >= total) setScreen("results");
    else setIdx(idx + 1);
  };

  if (screen === "modes") {
    return <ModeSelect onBack={() => onQuit?.()} onStart={start} />;
  }
  if (screen === "results" && mode) {
    return <Results mode={mode} score={score} total={total} onAgain={() => start(mode)} onModes={() => setScreen("modes")} />;
  }

  // play
  const last = idx + 1 >= total;
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "70vh" }}>
      <PlayHeader onExit={() => setScreen("modes")} total={total} index={idx} />
      {mode === "read" && <ReadQuestion key={idx} q={READ[idx]} last={last} onAnswer={answer} />}
      {mode === "build" && <BuildQuestion key={idx} q={BUILD[idx]} last={last} onAnswer={answer} />}
      {mode === "spot" && <SpotQuestion key={idx} q={SPOT[idx]} last={last} onAnswer={answer} />}
      {mode === "signals" && <SignalsQuestion key={idx} q={SIGNALS[idx]} last={last} onAnswer={answer} />}
    </div>
  );
}
