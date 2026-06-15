"use client";

/**
 * Marcadores — a standalone Spanish time-markers game. Three modes:
 * Explorar (reference) · Quiz (sentence → match the timeline) · Producción
 * (fill the blank → pick the conjugated verb). Reuses La Línea's TimelineDiagram
 * and stamp vocabulary, but is its own game with its own content and routes.
 */

import { useMemo, useState } from "react";
import { TimelineDiagram } from "@/components/LaLineaTimeline";
import { STAMPS, type Mark } from "@/content/laLinea";
import { shuffleWithSeed } from "@/content/serEstar";
import {
  GROUPS,
  SCOPES,
  type Marcador,
  type ProduccionItem,
  type ProduccionOption,
} from "@/content/marcadores";

/* ---------- fonts ---------- */
const SERIF = "var(--font-display)";
const SANS = "var(--font-body)";
const MONO = "var(--font-mono)";

const OK = "#059669";
const WRONG = "#ef4444";

const MAX_QUESTIONS = 8;

/* ---------- icons ---------- */
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

function ProgressPills({ total, index }: { total: number; index: number }) {
  return (
    <div style={{ display: "flex", gap: 5 }}>
      {Array.from({ length: total }).map((_, i) => (
        <span key={i} style={{ width: i === index ? 16 : 6, height: 6, borderRadius: 99, background: i <= index ? "var(--accent)" : "var(--rule)" }} />
      ))}
    </div>
  );
}

/* ---------- highlighted sentence (marker on almagre tint, verb underlined) ---------- */
type Seg = { text: string; style?: "marker" | "verb" };
function highlight(sentence: string, marker?: string, verb?: string): Seg[] {
  let segs: Seg[] = [{ text: sentence }];
  const apply = (needle: string | undefined, style: "marker" | "verb") => {
    if (!needle) return;
    const out: Seg[] = [];
    for (const p of segs) {
      if (p.style) { out.push(p); continue; }
      const idx = p.text.indexOf(needle);
      if (idx === -1) { out.push(p); continue; }
      if (idx > 0) out.push({ text: p.text.slice(0, idx) });
      out.push({ text: needle, style });
      const rest = p.text.slice(idx + needle.length);
      if (rest) out.push({ text: rest });
    }
    segs = out;
  };
  apply(marker, "marker");
  apply(verb, "verb");
  return segs;
}
function Segments({ segs }: { segs: Seg[] }) {
  return (
    <>
      {segs.map((s, i) =>
        s.style === "marker" ? (
          <span key={i} style={{ background: "color-mix(in oklab, var(--accent) 18%, transparent)", color: "var(--ink)", borderRadius: 4, padding: "0 3px", fontWeight: 500 }}>{s.text}</span>
        ) : s.style === "verb" ? (
          <span key={i} style={{ textDecoration: "underline", textDecorationColor: "var(--accent)", textDecorationThickness: 2, textUnderlineOffset: 3 }}>{s.text}</span>
        ) : (
          <span key={i}>{s.text}</span>
        ),
      )}
    </>
  );
}

/* ---------- shared option row ---------- */
type OptState = "idle" | "selected" | "correct" | "wrong" | "muted";
function OptRow({ children, state, onClick }: { children: React.ReactNode; state: OptState; onClick: () => void }) {
  let bg = "var(--surface)";
  let border = "var(--rule)";
  if (state === "correct") { bg = `color-mix(in oklab, ${OK} 13%, var(--surface))`; border = OK; }
  else if (state === "wrong") { bg = `color-mix(in oklab, ${WRONG} 11%, var(--surface))`; border = WRONG; }
  else if (state === "selected") { bg = "color-mix(in oklab, var(--accent) 11%, var(--surface))"; border = "var(--accent)"; }
  const opacity = state === "muted" ? 0.45 : 1;
  return (
    <button onClick={onClick} style={{
      display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10,
      width: "100%", textAlign: "left", padding: "12px 14px", borderRadius: 11,
      background: bg, border: `1px solid ${border}`, color: "var(--ink)", opacity,
      fontFamily: SANS, fontSize: 14.5, cursor: state === "idle" || state === "selected" ? "pointer" : "default",
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

/* ---------- feedback footer ---------- */
function Feedback({ correct, tense, en, why, onNext, last }: { correct: boolean; tense: string; en: string; why: string; onNext: () => void; last: boolean }) {
  const statusColor = correct ? OK : WRONG;
  return (
    <div className="fade-rise" style={{ borderTop: `2px solid ${statusColor}`, paddingTop: 13, marginTop: 8 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
        <span style={{ color: statusColor, display: "flex" }}>{correct ? <IconCheck s={16} /> : <IconClose s={16} />}</span>
        <Cap style={{ color: statusColor }}>{correct ? "Bien" : "Casi"} · {tense}</Cap>
      </div>
      <p style={{ fontSize: 13, lineHeight: 1.45, color: "var(--ink)", margin: "0 0 8px" }}>{en}</p>
      <p style={{ fontSize: 13, lineHeight: 1.5, color: "var(--ink-soft)", margin: "0 0 12px" }}>{why}</p>
      <button onClick={onNext} style={{ width: "100%", background: "var(--accent)", color: "var(--accent-ink)", border: "none", borderRadius: 12, padding: "13px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}>
        <Serif style={{ fontSize: 17, color: "var(--accent-ink)" }}>{last ? "Ver resultados" : "Siguiente"}</Serif>
        <IconArrow s={17} />
      </button>
    </div>
  );
}

/* ---------- helpers ---------- */
const sig = (marks: Mark[]) => marks.map((m) => `${m.kind}:${m.zone}`).sort().join("|");
function stampLabel(marks: Mark[]): string {
  const names = marks.map((m) => STAMPS.find((s) => s.kind === m.kind)?.name ?? m.kind);
  return Array.from(new Set(names)).join(" + ");
}

type Mode = "explore" | "quiz" | "production";

function groupsForScope(scope: string) {
  return scope === "all" ? GROUPS : GROUPS.filter((g) => g.id === scope);
}

/* ---------- quiz question building ---------- */
type QuizQ = { marker: Marcador; options: { marks: Mark[]; label: string }[]; correctIndex: number };
function buildQuiz(scope: string, seed: number): QuizQ[] {
  const markers = groupsForScope(scope).flatMap((g) => g.markers);
  const pool = GROUPS.flatMap((g) => g.markers);
  const uniq = new Map<string, Mark[]>();
  for (const m of pool) {
    const s = sig(m.marks);
    if (!uniq.has(s)) uniq.set(s, m.marks);
  }
  const picked = shuffleWithSeed(markers, seed).slice(0, MAX_QUESTIONS);
  return picked.map((marker, i) => {
    const correctSig = sig(marker.marks);
    const distractors = shuffleWithSeed(
      [...uniq.keys()].filter((s) => s !== correctSig),
      seed + i * 7 + 1,
    )
      .slice(0, 3)
      .map((s) => uniq.get(s)!);
    const options = shuffleWithSeed([marker.marks, ...distractors], seed + i * 13 + 3).map((marks) => ({
      marks,
      label: stampLabel(marks),
    }));
    const correctIndex = options.findIndex((o) => sig(o.marks) === correctSig);
    return { marker, options, correctIndex };
  });
}

/* ---------- production question building ---------- */
type ProdQ = { item: ProduccionItem; options: ProduccionOption[]; correctIndex: number };
function buildProduction(scope: string, seed: number): ProdQ[] {
  const items = groupsForScope(scope).flatMap((g) => g.production);
  const picked = shuffleWithSeed(items, seed).slice(0, MAX_QUESTIONS);
  return picked.map((item, i) => {
    const options = shuffleWithSeed(item.options, seed + i * 9 + 5);
    const correctIndex = options.findIndex((o) => o.correct);
    return { item, options, correctIndex };
  });
}

/* ---------- Explorar ---------- */
function Explore({ scope, onBack }: { scope: string; onBack: () => void }) {
  const markers = useMemo(() => groupsForScope(scope).flatMap((g) => g.markers), [scope]);
  const [i, setI] = useState(0);
  const m = markers[i];
  const total = markers.length;
  return (
    <div className="flex flex-col lg:max-w-xl lg:mx-auto lg:w-full">
      <PlayHeader onExit={onBack} total={total} index={i} />
      <Cap style={{ margin: "20px 0 12px" }}>Explora</Cap>

      <div style={{ display: "inline-flex", alignSelf: "flex-start", border: "1px solid var(--accent)", borderRadius: 999, padding: "5px 13px", marginBottom: 14 }}>
        <span style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 18, color: "var(--accent)" }}>{m.word}</span>
      </div>

      <p style={{ fontSize: 13.5, lineHeight: 1.5, color: "var(--ink-soft)", margin: "0 0 16px" }}>{m.meaning}</p>

      <div style={{ background: "var(--surface)", border: "1px solid var(--rule)", borderRadius: 14, padding: "14px 12px 8px" }}>
        <TimelineDiagram marks={m.marks} />
      </div>

      <p style={{ fontFamily: SERIF, fontWeight: 300, fontSize: 20, lineHeight: 1.3, margin: "16px 0 4px", color: "var(--ink)" }}>
        <Segments segs={highlight(m.example, m.word, m.verbPhrase)} />
      </p>
      <p style={{ fontSize: 12.5, color: "var(--ink-mute)", margin: "0 0 4px" }}>{m.en}</p>
      <Cap style={{ marginTop: 10, color: "var(--accent)" }}>{m.tenseName}</Cap>
      {m.note && <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 12.5, color: "var(--ink-mute)", margin: "10px 0 0" }}>{m.note}</p>}

      <div style={{ flex: 1, minHeight: 16 }} />
      <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
        <button onClick={() => setI((v) => Math.max(0, v - 1))} disabled={i === 0} style={{ flex: 1, padding: "12px", borderRadius: 12, background: "transparent", border: "1px solid var(--rule)", color: "var(--ink-soft)", opacity: i === 0 ? 0.4 : 1, cursor: i === 0 ? "default" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, fontFamily: MONO, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase" }}>
          <IconBack s={13} /> Anterior
        </button>
        <button onClick={() => setI((v) => Math.min(total - 1, v + 1))} disabled={i >= total - 1} style={{ flex: 1, padding: "12px", borderRadius: 12, background: i >= total - 1 ? "var(--surface)" : "var(--accent)", border: i >= total - 1 ? "1px solid var(--rule)" : "none", color: i >= total - 1 ? "var(--ink-mute)" : "var(--accent-ink)", opacity: i >= total - 1 ? 0.5 : 1, cursor: i >= total - 1 ? "default" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, fontFamily: MONO, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Siguiente <IconArrow s={13} />
        </button>
      </div>
    </div>
  );
}

/* ---------- Quiz ---------- */
function QuizPlay({ scope, seed, onExit, onDone }: { scope: string; seed: number; onExit: () => void; onDone: (score: number, total: number) => void }) {
  const questions = useMemo(() => buildQuiz(scope, seed), [scope, seed]);
  const [idx, setIdx] = useState(0);
  const [pick, setPick] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const q = questions[idx];
  const done = pick !== null;
  const last = idx + 1 >= questions.length;

  const next = () => {
    const ns = score + (pick === q.correctIndex ? 1 : 0);
    if (last) onDone(ns, questions.length);
    else { setScore(ns); setIdx(idx + 1); setPick(null); }
  };

  return (
    <div className="flex flex-col lg:max-w-2xl lg:mx-auto lg:w-full">
      <PlayHeader onExit={onExit} total={questions.length} index={idx} />
      <Cap style={{ margin: "20px 0 10px" }}>¿Qué línea encaja?</Cap>
      <p style={{ fontFamily: SERIF, fontWeight: 300, fontSize: 20, lineHeight: 1.3, margin: "0 0 16px", color: "var(--ink)" }}>
        <Segments segs={highlight(q.marker.example, q.marker.word, q.marker.verbPhrase)} />
      </p>

      <div className="grid grid-cols-2 gap-2.5">
        {q.options.map((o, oi) => {
          let border = "var(--rule)";
          let opacity = 1;
          if (done) {
            if (oi === q.correctIndex) border = OK;
            else if (oi === pick) border = WRONG;
            else opacity = 0.5;
          } else if (pick === oi) border = "var(--accent)";
          return (
            <button key={oi} onClick={() => !done && setPick(oi)} style={{ textAlign: "left", background: "var(--surface)", border: `1px solid ${border}`, borderRadius: 12, padding: "8px 8px 4px", opacity, cursor: done ? "default" : "pointer" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2px 2px" }}>
                <span style={{ fontFamily: MONO, fontSize: 8.5, letterSpacing: "0.06em", textTransform: "uppercase", color: done && oi === q.correctIndex ? OK : "var(--ink-mute)" }}>{o.label}</span>
                {done && oi === q.correctIndex && <span style={{ color: OK, display: "flex" }}><IconCheck s={14} /></span>}
              </div>
              <TimelineDiagram marks={o.marks} height={60} labels={false} />
            </button>
          );
        })}
      </div>

      <div style={{ flex: 1, minHeight: 8 }} />
      {done && (
        <Feedback correct={pick === q.correctIndex} tense={q.marker.tenseName} en={q.marker.en} why={q.marker.meaning} onNext={next} last={last} />
      )}
    </div>
  );
}

/* ---------- Producción ---------- */
function ProductionPlay({ scope, seed, onExit, onDone }: { scope: string; seed: number; onExit: () => void; onDone: (score: number, total: number) => void }) {
  const questions = useMemo(() => buildProduction(scope, seed), [scope, seed]);
  const [idx, setIdx] = useState(0);
  const [pick, setPick] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const q = questions[idx];
  const done = pick !== null;
  const last = idx + 1 >= questions.length;
  const [before, after] = q.item.sentence.split("___");
  const answer = q.options[q.correctIndex].conjugated;

  const next = () => {
    const ns = score + (pick === q.correctIndex ? 1 : 0);
    if (last) onDone(ns, questions.length);
    else { setScore(ns); setIdx(idx + 1); setPick(null); }
  };

  return (
    <div className="flex flex-col lg:max-w-xl lg:mx-auto lg:w-full">
      <PlayHeader onExit={onExit} total={questions.length} index={idx} />
      <Cap style={{ margin: "20px 0 12px" }}>Completa la frase</Cap>

      <p style={{ fontFamily: SERIF, fontWeight: 300, fontSize: 21, lineHeight: 1.35, margin: "8px 0 18px", color: "var(--ink)" }}>
        <Segments segs={highlight(before, q.item.marker)} />
        {done ? (
          <Serif it style={{ color: "var(--accent)" }}>{answer}</Serif>
        ) : (
          <span style={{ color: "var(--ink-mute)" }}>
            <span style={{ borderBottom: "2px solid var(--ink-mute)", padding: "0 14px" }} />{" "}
            <span style={{ fontFamily: MONO, fontSize: 12 }}>({q.item.base})</span>
          </span>
        )}
        <Segments segs={highlight(after ?? "", q.item.marker)} />
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {q.options.map((o, oi) => {
          let st: OptState = "idle";
          if (done) st = oi === q.correctIndex ? "correct" : oi === pick ? "wrong" : "muted";
          return (
            <OptRow key={oi} state={st} onClick={() => !done && setPick(oi)}>
              <span style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                <Serif it style={{ fontSize: 16 }}>{o.conjugated}</Serif>
                <span style={{ fontFamily: MONO, fontSize: 8.5, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ink-mute)" }}>{o.tenseName}</span>
              </span>
              {done && oi === q.correctIndex && <span style={{ color: OK, display: "flex" }}><IconCheck s={15} /></span>}
            </OptRow>
          );
        })}
      </div>

      <div style={{ flex: 1, minHeight: 8 }} />
      {done && (
        <Feedback correct={pick === q.correctIndex} tense={q.item.tenseName} en={q.item.en} why={q.item.why} onNext={next} last={last} />
      )}
    </div>
  );
}

/* ---------- mode select ---------- */
const MODE_CARDS: { id: Mode; title: string; sub: string }[] = [
  { id: "explore", title: "Explorar", sub: "Mira los marcadores y su tiempo" },
  { id: "quiz", title: "Empareja la línea", sub: "Lee la frase, elige la línea" },
  { id: "production", title: "Completa la frase", sub: "Elige el verbo que pide el marcador" },
];

function ModeSelect({ scope, setScope, onBack, onStart }: { scope: string; setScope: (s: string) => void; onBack: () => void; onStart: (m: Mode) => void }) {
  return (
    <div className="flex flex-col lg:max-w-xl lg:mx-auto lg:w-full">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 5, background: "none", border: "none", color: "var(--ink-mute)", padding: 0, fontFamily: MONO, fontSize: 10, letterSpacing: "0.13em", textTransform: "uppercase", cursor: "pointer", minHeight: 40 }}>
          <IconBack s={13} /> Práctica
        </button>
        <Cap>Marcadores</Cap>
      </div>
      <h1 style={{ fontFamily: SERIF, fontWeight: 300, fontSize: 30, lineHeight: 1.05, letterSpacing: "-0.02em", margin: "12px 0 14px", color: "var(--ink)" }}>¿Cómo quieres practicar?</h1>

      <Cap style={{ marginBottom: 8 }}>Marcadores</Cap>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
        {SCOPES.map((s) => (
          <button key={s.id} onClick={() => setScope(s.id)} style={{ padding: "6px 11px", borderRadius: 999, background: scope === s.id ? "var(--accent)" : "transparent", color: scope === s.id ? "var(--accent-ink)" : "var(--ink-soft)", border: `1px solid ${scope === s.id ? "var(--accent)" : "var(--rule)"}`, fontFamily: MONO, fontSize: 9.5, letterSpacing: "0.06em", textTransform: "uppercase", cursor: "pointer" }}>{s.label}</button>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {MODE_CARDS.map((m) => (
          <button key={m.id} onClick={() => onStart(m.id)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, textAlign: "left", background: "var(--surface)", border: "1px solid var(--rule)", borderRadius: 12, padding: "13px 14px", cursor: "pointer", color: "var(--ink)" }}>
            <span style={{ minWidth: 0 }}>
              <span style={{ display: "block", fontFamily: SERIF, fontSize: 17, lineHeight: 1.14 }}>{m.title}</span>
              <span style={{ display: "block", fontSize: 11.5, color: "var(--ink-mute)", marginTop: 3 }}>{m.sub}</span>
            </span>
            <span style={{ flex: "0 0 auto", display: "flex" }}><IconArrow s={16} /></span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ---------- results ---------- */
function Results({ score, total, onAgain, onModes }: { score: number; total: number; onAgain: () => void; onModes: () => void }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "60vh" }} className="lg:max-w-xl lg:mx-auto lg:w-full">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Cap>Marcadores</Cap>
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
        <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 15, color: "var(--ink-soft)", margin: "14px 0 0", maxWidth: "24ch" }}>
          {score === total ? "Impecable. Reconoces cada marcador." : score >= total / 2 ? "Vas captando qué tiempo pide cada pista." : "Sin prisa — vuelve a explorar los marcadores."}
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
type Screen = "select" | "explore" | "quiz" | "production" | "results";

export function MarcadoresGame({ onQuit }: { onQuit?: () => void }) {
  const [screen, setScreen] = useState<Screen>("select");
  const [scope, setScope] = useState("all");
  const [mode, setMode] = useState<Mode>("quiz");
  const [seed, setSeed] = useState(1);
  const [result, setResult] = useState({ score: 0, total: 0 });

  const start = (m: Mode) => {
    setMode(m);
    setSeed(Math.floor(performance.now()) % 100000 + 1);
    setScreen(m);
  };
  const finish = (score: number, total: number) => {
    setResult({ score, total });
    setScreen("results");
  };

  if (screen === "select") {
    return <ModeSelect scope={scope} setScope={setScope} onBack={() => onQuit?.()} onStart={start} />;
  }
  if (screen === "explore") {
    return <Explore scope={scope} onBack={() => setScreen("select")} />;
  }
  if (screen === "quiz") {
    return <QuizPlay scope={scope} seed={seed} onExit={() => setScreen("select")} onDone={finish} />;
  }
  if (screen === "production") {
    return <ProductionPlay scope={scope} seed={seed} onExit={() => setScreen("select")} onDone={finish} />;
  }
  return <Results score={result.score} total={result.total} onAgain={() => start(mode)} onModes={() => setScreen("select")} />;
}
