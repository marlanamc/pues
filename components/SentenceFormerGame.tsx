"use client";

/**
 * Sentence Former — quick-fire completion drill. The learner sees a stem
 * (e.g. "Quiero…") and finishes it fast: aloud (Hablar, no recording/check)
 * or typed (Escribir, saved to a personal log — there's no grammar-checking
 * yet, so typed answers are never marked right/wrong).
 */

import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import { shuffleWithSeed } from "@/content/serEstar";
import {
  sentenceFormerDays,
  type SentenceFormerCompletion,
  type SentenceFormerHint,
  type SentenceFormerStem,
} from "@/content/sentenceFormer";
import { speakDays } from "@/content/prompts";
import { TEMPORADAS } from "@/content/temporadas";
import { useStats } from "@/hooks/useStats";
import { saveSentenceFormerEntry } from "@/lib/store";

const dayThemeEs = new Map(speakDays.map((d) => [d.day, d.themeEs]));
const VERANO_WEEKS = TEMPORADAS[0].weeks;
const VERANO_WEEKS_EN = TEMPORADAS[0].weeksEn;
const WEEKS = 13;
const DAYS_PER_WEEK = 7;
const TOTAL_DAYS = sentenceFormerDays.length;

function weekForDay(day: number) {
  return Math.min(WEEKS, Math.ceil(day / DAYS_PER_WEEK));
}

function daysInWeek(week: number): number[] {
  const start = (week - 1) * DAYS_PER_WEEK + 1;
  const end = Math.min(week * DAYS_PER_WEEK, TOTAL_DAYS);
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

function dayLabel(day: number) {
  return dayThemeEs.get(day) ?? sentenceFormerDays.find((d) => d.day === day)?.theme ?? `Día ${day}`;
}

const ROUNDS_PER_SESSION = 5;

const SERIF = "var(--font-display)";
const MONO = "var(--font-mono)";

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

function Cap({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <p style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.13em", textTransform: "uppercase", color: "var(--ink-mute)", margin: 0, ...style }}>
      {children}
    </p>
  );
}
function Serif({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <span style={{ fontFamily: SERIF, color: "var(--ink)", ...style }}>{children}</span>;
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

function PlayHeader({ onExit, total, index }: { onExit: () => void; total: number; index: number }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <button onClick={onExit} style={{ display: "flex", alignItems: "center", gap: 5, background: "none", border: "none", color: "var(--ink-mute)", padding: 0, fontFamily: MONO, fontSize: 10, letterSpacing: "0.13em", textTransform: "uppercase", cursor: "pointer", minHeight: 40 }}>
        <IconClose s={13} /> Salir
      </button>
      <ProgressPills total={total} index={index} />
    </div>
  );
}

const QUESTION_LABELS = { que: "¿Qué?", como: "¿Cómo?", cuando: "¿Cuándo?" } as const;
type QuestionKey = keyof typeof QUESTION_LABELS;

type Mode = "hablar" | "escribir";

type Round = { day: number; stem: SentenceFormerStem; target: SentenceFormerCompletion };

function buildRounds(days: number[], seed: number): Round[] {
  const pool: Round[] = [];
  const selectedDays = sentenceFormerDays.filter((d) => days.includes(d.day));
  for (const day of selectedDays) {
    for (const stem of day.stems) {
      for (const target of stem.completions) {
        pool.push({ day: day.day, stem, target });
      }
    }
  }
  return shuffleWithSeed(pool, seed).slice(0, ROUNDS_PER_SESSION);
}

const chipStyle = (active: boolean): CSSProperties => ({
  padding: "6px 10px",
  borderRadius: 999,
  background: active ? "var(--accent)" : "transparent",
  color: active ? "var(--accent-ink)" : "var(--ink-soft)",
  border: `1px solid ${active ? "var(--accent)" : "var(--rule)"}`,
  fontFamily: MONO,
  fontSize: 10,
  letterSpacing: "0.02em",
  cursor: "pointer",
  lineHeight: 1.25,
});

function PresetButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button type="button" onClick={onClick} style={chipStyle(active)}>
      {children}
    </button>
  );
}

function DayPicker({
  selectedDays,
  onToggleDay,
  onSetDays,
  currentDay,
  currentWeek,
}: {
  selectedDays: number[];
  onToggleDay: (day: number) => void;
  onSetDays: (days: number[]) => void;
  currentDay: number;
  currentWeek: number;
}) {
  const allSelected = selectedDays.length === 0;
  const weekSelected = (week: number) => {
    const days = daysInWeek(week);
    return days.length > 0 && days.every((d) => selectedDays.includes(d));
  };

  function toggleWeek(week: number) {
    const days = daysInWeek(week);
    if (weekSelected(week)) {
      onSetDays(selectedDays.filter((d) => !days.includes(d)));
    } else {
      onSetDays([...new Set([...selectedDays, ...days])]);
    }
  }

  const selectionLabel =
    selectedDays.length === 0
      ? `Mezcla los ${TOTAL_DAYS} días`
      : selectedDays.length === 1
        ? `1 día · ${dayLabel(selectedDays[0])}`
        : `${selectedDays.length} días seleccionados`;

  return (
    <div style={{ marginBottom: 20 }}>
      <Cap style={{ marginBottom: 8 }}>Días</Cap>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
        <PresetButton active={selectedDays.length === 1 && selectedDays[0] === currentDay} onClick={() => onSetDays([currentDay])}>
          Hoy · {String(currentDay).padStart(2, "0")}
        </PresetButton>
        <PresetButton active={weekSelected(currentWeek)} onClick={() => onSetDays(daysInWeek(currentWeek))}>
          Semana {currentWeek}
        </PresetButton>
        <PresetButton active={allSelected} onClick={() => onSetDays([])}>
          Mezclar todo
        </PresetButton>
      </div>

      <p style={{ fontSize: 11.5, color: "var(--ink-mute)", margin: "0 0 12px" }}>{selectionLabel}</p>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {Array.from({ length: WEEKS }, (_, i) => i + 1).map((week) => {
          const days = daysInWeek(week);
          const tema = VERANO_WEEKS[week - 1];
          const selectedInWeek = days.filter((d) => selectedDays.includes(d)).length;
          const isCurrent = week === currentWeek;

          return (
            <details
              key={week}
              open={isCurrent}
              style={{
                border: `1px solid ${isCurrent ? "color-mix(in oklab, var(--accent) 28%, var(--rule))" : "var(--rule)"}`,
                borderRadius: 12,
                background: "var(--surface)",
                overflow: "hidden",
              }}
            >
              <summary
                className="[&::-webkit-details-marker]:hidden"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 10,
                  padding: "10px 12px",
                  cursor: "pointer",
                  listStyle: "none",
                }}
              >
                <span style={{ minWidth: 0 }}>
                  <span style={{ display: "block", fontFamily: MONO, fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: isCurrent ? "var(--accent)" : "var(--ink-mute)" }}>
                    Semana {week} {isCurrent ? "· estás aquí" : ""}
                  </span>
                  <span style={{ display: "block", fontFamily: SERIF, fontSize: 15, lineHeight: 1.2, color: "var(--ink)", marginTop: 2 }}>
                    {tema}
                  </span>
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                  {selectedInWeek > 0 && (
                    <span style={{ fontFamily: MONO, fontSize: 9, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--accent)" }}>
                      {selectedInWeek}/{days.length}
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleWeek(week);
                    }}
                    style={{
                      ...chipStyle(weekSelected(week)),
                      padding: "4px 8px",
                      fontSize: 9,
                    }}
                  >
                    {weekSelected(week) ? "Quitar" : "Semana"}
                  </button>
                </span>
              </summary>

              <div style={{ padding: "0 12px 12px", borderTop: "1px solid var(--rule)" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
                  {days.map((day) => {
                    const active = selectedDays.includes(day);
                    const themeEs = dayLabel(day);
                    return (
                      <button
                        key={day}
                        type="button"
                        title={themeEs}
                        onClick={() => onToggleDay(day)}
                        style={chipStyle(active)}
                      >
                        {String(day).padStart(2, "0")} · {themeEs}
                      </button>
                    );
                  })}
                </div>
                <p style={{ fontSize: 10.5, color: "var(--ink-mute)", margin: "8px 0 0" }}>{VERANO_WEEKS_EN[week - 1]}</p>
              </div>
            </details>
          );
        })}
      </div>

      <p style={{ fontSize: 11.5, color: "var(--ink-mute)", margin: "12px 0 0" }}>
        Sin ningún día marcado, la ronda mezcla los {TOTAL_DAYS}.
      </p>
    </div>
  );
}

/* ---------- start screen ---------- */
function StartScreen({
  selectedDays,
  onToggleDay,
  onSetDays,
  currentDay,
  currentWeek,
  mode,
  onSetMode,
  onBack,
  onStart,
}: {
  selectedDays: number[];
  onToggleDay: (day: number) => void;
  onSetDays: (days: number[]) => void;
  currentDay: number;
  currentWeek: number;
  mode: Mode;
  onSetMode: (m: Mode) => void;
  onBack: () => void;
  onStart: () => void;
}) {
  return (
    <div className="flex flex-col lg:max-w-xl lg:mx-auto lg:w-full">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 5, background: "none", border: "none", color: "var(--ink-mute)", padding: 0, fontFamily: MONO, fontSize: 10, letterSpacing: "0.13em", textTransform: "uppercase", cursor: "pointer", minHeight: 40 }}>
          <IconBack s={13} /> Práctica
        </button>
        <Cap>Formar la frase</Cap>
      </div>

      <h1 style={{ fontFamily: SERIF, fontWeight: 300, fontSize: 30, lineHeight: 1.05, letterSpacing: "-0.02em", margin: "12px 0 6px", color: "var(--ink)" }}>
        Termina la frase.
      </h1>
      <p style={{ fontSize: 13.5, lineHeight: 1.5, color: "var(--ink-soft)", margin: "0 0 20px" }}>
        Ves el arranque de una frase — tú la terminas rápido, antes de pensarlo demasiado.
      </p>

      <DayPicker
        selectedDays={selectedDays}
        onToggleDay={onToggleDay}
        onSetDays={onSetDays}
        currentDay={currentDay}
        currentWeek={currentWeek}
      />

      <Cap style={{ marginBottom: 8 }}>Modo</Cap>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
        <button
          type="button"
          onClick={() => onSetMode("hablar")}
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, textAlign: "left", background: mode === "hablar" ? "color-mix(in oklab, var(--accent) 11%, var(--surface))" : "var(--surface)", border: `1px solid ${mode === "hablar" ? "var(--accent)" : "var(--rule)"}`, borderRadius: 12, padding: "13px 14px", cursor: "pointer", color: "var(--ink)" }}
        >
          <span style={{ minWidth: 0 }}>
            <span style={{ display: "block", fontFamily: SERIF, fontSize: 17, lineHeight: 1.14 }}>Hablar</span>
            <span style={{ display: "block", fontSize: 11.5, color: "var(--ink-mute)", marginTop: 3 }}>Dila en voz alta. Sin grabar, sin corregir.</span>
          </span>
        </button>
        <button
          type="button"
          onClick={() => onSetMode("escribir")}
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, textAlign: "left", background: mode === "escribir" ? "color-mix(in oklab, var(--accent) 11%, var(--surface))" : "var(--surface)", border: `1px solid ${mode === "escribir" ? "var(--accent)" : "var(--rule)"}`, borderRadius: 12, padding: "13px 14px", cursor: "pointer", color: "var(--ink)" }}
        >
          <span style={{ minWidth: 0 }}>
            <span style={{ display: "block", fontFamily: SERIF, fontSize: 17, lineHeight: 1.14 }}>Escribir</span>
            <span style={{ display: "block", fontSize: 11.5, color: "var(--ink-mute)", marginTop: 3 }}>Escríbela. Se guarda para revisar después — no se corrige.</span>
          </span>
        </button>
      </div>

      <button
        type="button"
        onClick={onStart}
        style={{ width: "100%", background: "var(--accent)", color: "var(--accent-ink)", border: "none", borderRadius: 12, padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}
      >
        <Serif style={{ fontSize: 17, color: "var(--accent-ink)" }}>Empezar</Serif>
        <IconArrow s={17} />
      </button>
    </div>
  );
}

/* ---------- hint chips: ¿Qué? / ¿Cómo? / ¿Cuándo? ---------- */
function Hint({ stem, target }: { stem: SentenceFormerStem; target: SentenceFormerCompletion }) {
  const [openKey, setOpenKey] = useState<QuestionKey | null>(null);

  const groups = useMemo(() => {
    const exclude = (items: SentenceFormerHint[] | undefined) =>
      (items ?? []).filter((h) => h.es !== target.es);

    if (stem.hints) {
      return (["que", "como", "cuando"] as QuestionKey[])
        .map((key) => ({ key, items: exclude(stem.hints?.[key]) }))
        .filter((g) => g.items.length > 0);
    }

    // Fallback for any stem without authored hints: reuse the completion pool.
    const sameCategory = stem.completions.filter((c) => c.category === target.category && c.es !== target.es);
    const items = sameCategory.length > 0 ? sameCategory : stem.completions.filter((c) => c.es !== target.es);
    return items.length > 0 ? [{ key: "que" as QuestionKey, items }] : [];
  }, [stem, target]);

  if (groups.length === 0) return null;

  return (
    <div style={{ marginTop: 16 }}>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 6 }}>
        {groups.map((g) => {
          const active = openKey === g.key;
          return (
            <button
              key={g.key}
              type="button"
              onClick={() => setOpenKey(active ? null : g.key)}
              aria-expanded={active}
              style={{ display: "inline-flex", alignItems: "center", gap: 6, background: active ? "color-mix(in oklab, var(--accent) 11%, var(--surface))" : "none", border: `1px solid ${active ? "var(--accent)" : "var(--rule)"}`, borderRadius: 999, padding: "6px 12px", color: "var(--accent)", fontFamily: MONO, fontSize: 9.5, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer" }}
            >
              {QUESTION_LABELS[g.key]}
            </button>
          );
        })}
      </div>
      {groups.map((g) =>
        openKey === g.key ? (
          <div key={g.key} className="fade-rise" style={{ marginTop: 10, padding: "10px 12px", background: "var(--surface-2)", border: "1px solid var(--rule)", borderRadius: 10 }}>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 4 }}>
              {g.items.map((c) => (
                <li key={c.es} style={{ fontSize: 13, color: "var(--ink-soft)" }}>
                  <Serif style={{ fontStyle: "italic", fontSize: 13.5 }}>{c.es}</Serif> — {c.en}
                </li>
              ))}
            </ul>
          </div>
        ) : null,
      )}
    </div>
  );
}

/* ---------- round screen ---------- */
function RoundScreen({
  round,
  index,
  total,
  mode,
  onExit,
  onNext,
}: {
  round: Round;
  index: number;
  total: number;
  mode: Mode;
  onExit: () => void;
  onNext: (savedText?: string) => void;
}) {
  const [text, setText] = useState("");
  const last = index + 1 >= total;

  return (
    <div className="flex flex-col lg:max-w-xl lg:mx-auto lg:w-full">
      <PlayHeader onExit={onExit} total={total} index={index} />

      <Cap style={{ margin: "20px 0 8px", textAlign: "center" }}>Día {round.day} · {mode === "hablar" ? "dilo en voz alta" : "escríbela"}</Cap>

      <div
        style={{
          padding: "26px 22px 22px",
          textAlign: "center",
          background: "color-mix(in oklab, var(--accent) 7%, var(--surface))",
          border: "1px solid color-mix(in oklab, var(--accent) 18%, var(--rule))",
          borderRadius: 16,
        }}
      >
        <p style={{ fontFamily: SERIF, fontWeight: 500, fontSize: 34, lineHeight: 1.15, margin: "0 0 8px", color: "var(--ink)", textWrap: "balance" }}>
          {round.stem.stem}
        </p>
        <p style={{ fontSize: 13, color: "var(--ink-mute)", margin: 0 }}>{round.stem.english}</p>
      </div>

      <Hint stem={round.stem} target={round.target} />

      {mode === "escribir" && (
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={`${round.stem.stem} …`}
          rows={2}
          style={{ marginTop: 18, width: "100%", resize: "vertical", background: "var(--surface)", border: "1px solid var(--rule)", borderRadius: 12, padding: "12px 14px", fontFamily: SERIF, fontSize: 16, color: "var(--ink)" }}
        />
      )}

      <div style={{ flex: 1, minHeight: 16 }} />

      <button
        type="button"
        onClick={() => onNext(mode === "escribir" ? text.trim() : undefined)}
        disabled={mode === "escribir" && text.trim().length === 0}
        style={{ width: "100%", marginTop: 14, background: "var(--accent)", color: "var(--accent-ink)", border: "none", borderRadius: 12, padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", opacity: mode === "escribir" && text.trim().length === 0 ? 0.5 : 1 }}
      >
        <Serif style={{ fontSize: 17, color: "var(--accent-ink)" }}>
          {mode === "escribir" ? "Guardar y seguir" : last ? "Terminar" : "Siguiente"}
        </Serif>
        <IconArrow s={17} />
      </button>
    </div>
  );
}

/* ---------- results ---------- */
function Results({ count, mode, onAgain, onMenu }: { count: number; mode: Mode; onAgain: () => void; onMenu: () => void }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "60vh" }} className="lg:max-w-xl lg:mx-auto lg:w-full">
      <Cap>Formar la frase</Cap>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "40px 0" }}>
        <div style={{ width: 58, height: 58, borderRadius: 99, background: "color-mix(in oklab, var(--accent) 14%, var(--surface))", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", marginBottom: 18 }}>
          <IconCheck s={26} />
        </div>
        <Cap style={{ marginBottom: 10 }}>Ronda terminada</Cap>
        <p style={{ fontFamily: SERIF, fontWeight: 300, fontSize: 44, lineHeight: 1, margin: 0, color: "var(--ink)" }}>{count}</p>
        <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 15, color: "var(--ink-soft)", margin: "14px 0 0", maxWidth: "26ch" }}>
          {mode === "escribir" ? "Frases guardadas para revisar." : "Frases dichas en voz alta."}
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <button onClick={onAgain} style={{ width: "100%", background: "var(--accent)", color: "var(--accent-ink)", border: "none", borderRadius: 12, padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}>
          <Serif style={{ fontSize: 17, color: "var(--accent-ink)" }}>Otra ronda</Serif><IconArrow s={17} />
        </button>
        {mode === "escribir" && (
          <Link
            href="/practice/sentence-former/review"
            style={{ width: "100%", textAlign: "center", background: "transparent", color: "var(--ink-soft)", border: "1px solid var(--rule)", borderRadius: 12, padding: "13px 16px", fontFamily: SERIF, fontSize: 15.5, cursor: "pointer" }}
          >
            Ver mis frases
          </Link>
        )}
        <button onClick={onMenu} style={{ width: "100%", background: "transparent", color: "var(--ink-soft)", border: "none", padding: 4, fontFamily: SERIF, fontSize: 15.5, cursor: "pointer" }}>Elegir días y modo</button>
      </div>
    </div>
  );
}

/* ---------- orchestrator ---------- */
type Screen = "select" | "round" | "results";

export function SentenceFormerGame({ onQuit }: { onQuit?: () => void }) {
  const { stats, hydrated } = useStats();
  const currentDay = (stats.currentDayIndex % TOTAL_DAYS) + 1;
  const currentWeek = weekForDay(currentDay);

  const [screen, setScreen] = useState<Screen>("select");
  const [selectedDays, setSelectedDays] = useState<number[]>([]);
  const [mode, setMode] = useState<Mode>("hablar");
  const [seed, setSeed] = useState(1);
  const [idx, setIdx] = useState(0);
  const [savedCount, setSavedCount] = useState(0);
  const initializedDays = useRef(false);

  useEffect(() => {
    if (!hydrated || initializedDays.current) return;
    setSelectedDays(daysInWeek(currentWeek));
    initializedDays.current = true;
  }, [hydrated, currentWeek]);

  const activeDays = selectedDays.length > 0 ? selectedDays : sentenceFormerDays.map((d) => d.day);
  const rounds = useMemo(() => buildRounds(activeDays, seed), [activeDays, seed]);

  function toggleDay(day: number) {
    setSelectedDays((prev) => (prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]));
  }

  function setDays(days: number[]) {
    setSelectedDays(days);
  }

  function start() {
    setSeed(Math.floor(performance.now()) % 100000 + 1);
    setIdx(0);
    setSavedCount(0);
    setScreen("round");
  }

  function next(savedText?: string) {
    const round = rounds[idx];
    if (mode === "escribir" && savedText) {
      saveSentenceFormerEntry({ day: round.day, stem: round.stem.stem, text: `${round.stem.stem} ${savedText}` });
      setSavedCount((c) => c + 1);
    } else if (mode === "hablar") {
      setSavedCount((c) => c + 1);
    }
    if (idx + 1 >= rounds.length) {
      setScreen("results");
    } else {
      setIdx(idx + 1);
    }
  }

  if (screen === "select") {
    return (
      <StartScreen
        selectedDays={selectedDays}
        onToggleDay={toggleDay}
        onSetDays={setDays}
        currentDay={currentDay}
        currentWeek={currentWeek}
        mode={mode}
        onSetMode={setMode}
        onBack={() => onQuit?.()}
        onStart={start}
      />
    );
  }

  if (screen === "round") {
    const round = rounds[idx];
    if (!round) return null;
    return (
      <RoundScreen
        round={round}
        index={idx}
        total={rounds.length}
        mode={mode}
        onExit={() => setScreen("select")}
        onNext={next}
      />
    );
  }

  return (
    <Results
      count={savedCount}
      mode={mode}
      onAgain={start}
      onMenu={() => setScreen("select")}
    />
  );
}
