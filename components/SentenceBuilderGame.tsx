"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { PlayButton } from "@/components/PlayButton";
import { SettingsMenuButton } from "@/components/SettingsMenu";
import { getSbProgress, recordSbLevelResult } from "@/lib/store";
import {
  normalizeWord,
  sentenceBuilderCards,
  type SentenceCard,
} from "@/content/sentenceBuilder";

/** Each tappable tile carries a stable id so duplicate words stay distinct. */
type Tile = { id: number; word: string };

type Phase = "building" | "correct" | "wrong";

/** Best stored first-try count for the deck's level (0 if never finished). */
function sbBestSolved(cards: SentenceCard[]): number {
  if (cards.length === 0) return 0;
  return getSbProgress()[cards[0].level]?.bestSolved ?? 0;
}

/** Deterministic shuffle so a card's tiles vary but stay stable across renders. */
function shuffleSeeded<T>(arr: T[], seedStr: string): T[] {
  let seed = 2166136261;
  for (let i = 0; i < seedStr.length; i += 1) {
    seed ^= seedStr.charCodeAt(i);
    seed = Math.imul(seed, 16777619);
  }
  const rand = () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/**
 * Word-tile colours. Target words pick a hue by their position in the answer;
 * distractors stay neutral ink. Keyed by the normalized word so a tile reads
 * the same colour in the bank and in the answer row.
 */
const TILE_HUES = [
  "var(--accent)", // coral
  "oklch(0.74 0.095 158)", // green
  "oklch(0.73 0.1 245)", // blue
  "oklch(0.72 0.11 332)", // purple
  "oklch(0.76 0.115 72)", // amber
  "oklch(0.72 0.12 350)", // pink
];

function buildHueMap(target: string[]): Map<string, string> {
  const map = new Map<string, string>();
  target.forEach((word, i) => {
    map.set(normalizeWord(word), TILE_HUES[i % TILE_HUES.length]);
  });
  return map;
}

/** Capitalise the first visible word of the answer, like a real sentence. */
function casedForAnswer(word: string, isFirst: boolean): string {
  if (!isFirst) return word;
  return word.charAt(0).toLocaleUpperCase("es") + word.slice(1);
}

export function SentenceBuilderGame({
  cards = sentenceBuilderCards,
  initialStreak = 3,
  onQuit,
}: {
  cards?: SentenceCard[];
  initialStreak?: number;
  onQuit?: () => void;
}) {
  const [cardIndex, setCardIndex] = useState(0);
  const card = cards[cardIndex];

  // Stable id = authored index; the displayed order is shuffled per card so the
  // bank never gives the answer away by simply reading left to right.
  const tiles = useMemo<Tile[]>(
    () =>
      shuffleSeeded(
        card.availableTiles.map((word, id) => ({ id, word })),
        card.id
      ),
    [card]
  );
  const hueMap = useMemo(() => buildHueMap(card.targetSpanish), [card]);

  // Answer holds tile ids in the order tapped; bank is everything else.
  const [answer, setAnswer] = useState<number[]>([]);
  const [phase, setPhase] = useState<Phase>("building");
  const [wrongAt, setWrongAt] = useState<number | null>(null);
  const [streak, setStreak] = useState(initialStreak);
  const [showHint, setShowHint] = useState(false);
  const [solved, setSolved] = useState(0);
  const [done, setDone] = useState(false);

  const inAnswer = new Set(answer);
  const bank = tiles.filter((t) => !inAnswer.has(t.id));
  // Look up by id (not array position) since `tiles` is shuffled.
  const tileById = (id: number) => tiles.find((t) => t.id === id) ?? tiles[0];

  function resetForCard() {
    setAnswer([]);
    setPhase("building");
    setWrongAt(null);
    setShowHint(false);
  }

  function selectTile(id: number) {
    if (phase === "correct") return;
    setAnswer((prev) => [...prev, id]);
    setPhase("building");
    setWrongAt(null);
    setShowHint(false);
  }

  function removeTile(id: number) {
    if (phase === "correct") return;
    setAnswer((prev) => prev.filter((tid) => tid !== id));
    setPhase("building");
    setWrongAt(null);
  }

  function clearAnswer() {
    if (phase === "correct") return;
    resetForCard();
  }

  function check() {
    const chosen = answer.map((id) => normalizeWord(tileById(id).word));
    const target = card.targetSpanish.map(normalizeWord);

    const matches =
      chosen.length === target.length &&
      chosen.every((w, i) => w === target[i]);

    if (matches) {
      setPhase("correct");
      setStreak((s) => s + 1);
      setSolved((n) => n + 1);
      return;
    }

    // Find the first slot that diverges so we can highlight that tile.
    let mismatch = chosen.findIndex((w, i) => w !== target[i]);
    if (mismatch === -1) mismatch = chosen.length; // too short / too long
    setWrongAt(mismatch);
    setPhase("wrong");
  }

  function next() {
    if (cardIndex + 1 >= cards.length) {
      setDone(true);
      return;
    }
    setCardIndex(cardIndex + 1);
    resetForCard();
  }

  function playAgain() {
    recordedRef.current = false;
    setDone(false);
    setSolved(0);
    setCardIndex(0);
    resetForCard();
  }

  // Reset transient state if the active card changes from outside.
  useEffect(() => {
    resetForCard();
  }, [cardIndex]);

  // Keyboard: Enter checks/advances, Backspace removes the last answer tile.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (done) return;
      if (e.key === "Enter") {
        e.preventDefault();
        if (phase === "correct") next();
        else if (answer.length > 0) check();
      } else if (e.key === "Backspace") {
        if (phase !== "correct" && answer.length > 0) {
          e.preventDefault();
          removeTile(answer[answer.length - 1]);
        }
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, answer, done]);

  // Close the hint popover when tapping anywhere outside it.
  const hintRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!showHint) return;
    function onDown(e: PointerEvent) {
      if (hintRef.current && !hintRef.current.contains(e.target as Node)) {
        setShowHint(false);
      }
    }
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [showHint]);

  // Persist the level result once, the first time the deck completes.
  const recordedRef = useRef(false);
  useEffect(() => {
    if (done && !recordedRef.current && cards.length > 0) {
      recordedRef.current = true;
      recordSbLevelResult(cards[0].level, solved, cards.length);
    }
  }, [done, solved, cards]);

  const completedUnits = cardIndex + (phase === "correct" ? 1 : 0);
  const progressPercent = done ? 100 : (completedUnits / cards.length) * 100;

  // ── Deck-complete screen ───────────────────────────────────────────
  if (done) {
    return (
      <div className="space-y-5">
        <header className="flex items-center justify-between">
          <button
            type="button"
            onClick={onQuit}
            className="mono-cap flex items-center gap-2 text-ink-mute transition-colors hover:text-accent min-h-[40px]"
          >
            <span aria-hidden className="text-base leading-none">
              ×
            </span>
            Salir
          </button>
          <SettingsMenuButton />
        </header>

        <div className="fade-rise rounded-lg border border-[color:var(--correct)]/40 bg-surface p-8 text-center space-y-4">
          <p className="day-pill mx-auto w-fit">¡Set completo!</p>
          <h2 className="text-display-md text-ink">
            Construiste {cards.length} {cards.length === 1 ? "frase" : "frases"}.
          </h2>
          <p className="text-gloss mx-auto max-w-sm">
            Resolviste {solved} de {cards.length} a la primera. La racha sigue en{" "}
            <span className="text-accent">{streak} 🔥</span> — vuelve cuando
            quieras y repítelas.
          </p>
          <p className="mono-cap text-ink-mute">
            Mejor · {Math.max(solved, sbBestSolved(cards))} / {cards.length}
          </p>
          <div className="mx-auto mt-2 flex max-w-xs flex-col gap-3">
            <button
              type="button"
              onClick={playAgain}
              className="btn-primary justify-center gap-3"
            >
              <span className="lab">Jugar otra vez</span>
              <span aria-hidden>↺</span>
            </button>
            {onQuit && (
              <button
                type="button"
                onClick={onQuit}
                className="py-2 text-caption text-ink-mute transition-colors hover:text-accent"
              >
                Volver al inicio
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3.5">
      <GlowKeyframes />

      {/* ── Top bar: salir · racha · settings ───────────────────────── */}
      <header className="flex items-center gap-3">
        <button
          type="button"
          onClick={onQuit}
          className="mono-cap flex items-center gap-1.5 text-ink-mute transition-colors hover:text-accent min-h-[40px]"
        >
          <span aria-hidden className="text-base leading-none">
            ×
          </span>
          Salir
        </button>

        <div className="flex flex-1 items-center gap-2.5">
          <span className="mono-cap whitespace-nowrap text-ink-soft">
            Racha · {streak}{" "}
            <span aria-hidden className="text-accent">
              🔥
            </span>
          </span>
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface-sunk">
            <div
              className="h-full rounded-full bg-accent transition-[width] duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        <SettingsMenuButton />
      </header>

      {/* ── Prompt + Pista ──────────────────────────────────────────── */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between gap-3">
          <p className="mono-cap">Construye la frase</p>
          <p className="mono-cap text-ink-mute">
            {String(cardIndex + 1).padStart(2, "0")} / {String(cards.length).padStart(2, "0")}
          </p>
        </div>
        <div className="flex items-start justify-between gap-3">
          <h1 className="text-display-prompt text-ink">{card.promptEnglish}</h1>
          <div ref={hintRef} className="relative shrink-0">
            <button
              type="button"
              onClick={() => setShowHint((v) => !v)}
              aria-expanded={showHint}
              className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 px-3.5 py-2 text-sm text-accent transition-colors hover:border-accent/70 hover:bg-accent/5 min-h-[40px]"
            >
              <IconBulb />
              Pista
            </button>
            {showHint && (
              <div className="absolute right-0 top-full z-20 mt-2 w-72 rounded-md border border-rule bg-surface-2 p-3.5 shadow-soft">
                <div className="flex items-start gap-2.5">
                  <span className="mt-0.5 shrink-0 text-accent">
                    <IconSparkle />
                  </span>
                  <div className="space-y-1.5">
                    <p className="text-sm leading-relaxed text-ink">{card.hint}</p>
                    <p className="text-sm leading-relaxed text-ink-mute">
                      {card.examples}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {answer.length === 0 && (
          <p className="text-sm text-ink-mute">
            Toca las palabras y ponlas en el orden correcto.
          </p>
        )}
      </div>

      {/* ── Answer card ─────────────────────────────────────────────── */}
      <div
        className={`rounded-lg border bg-surface p-4 transition-colors ${
          phase === "correct"
            ? "sb-glow border-[color:var(--correct)]/60"
            : phase === "wrong"
              ? "sb-shake border-red-500/50"
              : "border-rule"
        }`}
      >
        {answer.length === 0 ? (
          <div className="flex min-h-[84px] flex-col items-center justify-center gap-3.5">
            <span className="block h-px w-3/4 border-t border-dashed border-rule" />
            <p className="text-sm text-ink-mute">Tu frase aparecerá aquí</p>
          </div>
        ) : (
          <div className="flex min-h-[84px] flex-wrap content-center items-center gap-2">
            {answer.map((id, i) => {
              const tile = tileById(id);
              const isWrong = phase === "wrong" && wrongAt === i;
              return (
                <WordTile
                  key={id}
                  label={casedForAnswer(tile.word, i === 0)}
                  hue={hueMap.get(normalizeWord(tile.word))}
                  onClick={() => removeTile(id)}
                  disabled={phase === "correct"}
                  highlight={isWrong ? "wrong" : undefined}
                  ariaLabel={`Quitar ${tile.word}`}
                />
              );
            })}
          </div>
        )}
      </div>

      {/* ── Word bank ───────────────────────────────────────────────── */}
      <div className="space-y-2">
        <p className="mono-cap">Palabras disponibles</p>
        <div className="rounded-lg border border-rule bg-surface p-4">
          {bank.length === 0 ? (
            <p className="py-2 text-center text-sm text-ink-mute">
              Todas las palabras están en tu frase.
            </p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {bank.map((tile) => (
                <WordTile
                  key={tile.id}
                  label={tile.word}
                  hue={hueMap.get(normalizeWord(tile.word))}
                  onClick={() => selectTile(tile.id)}
                  disabled={phase === "correct"}
                  ariaLabel={`Añadir ${tile.word}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Feedback ────────────────────────────────────────────────── */}
      <div aria-live="polite">
      {phase === "correct" && (
        <div className="fade-rise rounded-lg border border-[color:var(--correct)]/40 bg-surface p-4 space-y-2">
          <div className="flex items-center justify-between gap-3">
            <p className="mono-cap" style={{ color: "var(--correct)" }}>
              ¡Perfecto!
            </p>
            <PlayButton
              text={card.displayAnswer}
              label={`Escuchar: ${card.displayAnswer}`}
            />
          </div>
          <p className="text-display-md text-ink">{card.displayAnswer}</p>
          <p className="text-sm leading-relaxed text-ink-soft">
            {card.explanation}
          </p>
        </div>
      )}
      {phase === "wrong" && (
        <p className="text-sm text-ink-soft">{card.almost}</p>
      )}
      </div>

      {/* ── Actions ─────────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={clearAnswer}
          disabled={phase === "correct" || answer.length === 0}
          className="flex items-center justify-center gap-2 rounded-[14px] border border-rule px-4 py-3.5 text-ink-soft transition-colors hover:border-accent/50 hover:text-accent disabled:opacity-40 disabled:hover:border-rule disabled:hover:text-ink-soft"
        >
          <IconReset />
          <span className="font-display text-lg">Borrar</span>
        </button>

        {phase === "correct" ? (
          <button
            type="button"
            onClick={next}
            className="btn-primary btn-primary--spectrum justify-center gap-3"
            style={{ padding: "14px 18px" }}
          >
            <span className="lab">Siguiente</span>
            <span aria-hidden>→</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={check}
            disabled={answer.length === 0}
            className="btn-primary btn-primary--spectrum justify-center gap-3 disabled:opacity-50"
            style={{ padding: "14px 18px" }}
          >
            <span className="lab">Comprobar</span>
            <span aria-hidden>→</span>
          </button>
        )}
      </div>

      {/* ── Mini progress card ──────────────────────────────────────── */}
      <div className="flex items-center gap-4 rounded-lg border border-rule bg-surface px-4 py-3">
        <div className="flex items-center gap-2 px-1">
          <span className="mono-cap">Racha</span>
          <span className="flex items-center gap-1 font-display text-lg text-accent">
            <span aria-hidden>🔥</span>
            {streak}
          </span>
        </div>
        <span className="h-8 w-px bg-rule" />
        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between gap-2">
            <span className="mono-cap">Nivel · {card.level}</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-sunk">
            <div
              className="h-full rounded-full transition-[width] duration-500"
              style={{
                width: `${progressPercent}%`,
                background: "var(--correct)",
              }}
            />
          </div>
        </div>
        <span className="shrink-0 text-accent" aria-hidden>
          <IconGift />
        </span>
      </div>
    </div>
  );
}

/* ── Word tile ──────────────────────────────────────────────────────── */

function WordTile({
  label,
  hue,
  onClick,
  disabled,
  highlight,
  ariaLabel,
}: {
  label: string;
  hue?: string;
  onClick: () => void;
  disabled?: boolean;
  highlight?: "wrong";
  ariaLabel?: string;
}) {
  const wrong = highlight === "wrong";
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`min-h-[46px] rounded-xl border bg-surface-sunk px-4 font-display text-lg transition-colors active:scale-[0.97] disabled:cursor-default ${
        wrong
          ? "border-red-500 bg-red-500/10"
          : "border-rule hover:border-accent/50"
      }`}
      style={{ color: wrong ? "#ef5350" : hue ?? "var(--ink)" }}
    >
      {label}
    </button>
  );
}

/* ── Inline icons ───────────────────────────────────────────────────── */

const iconStroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function IconBulb() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden {...iconStroke}>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1.1 2H14.5c.1-.8.5-1.5 1.1-2A6 6 0 0 0 12 3Z" />
    </svg>
  );
}

function IconSparkle() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...iconStroke}>
      <path d="M12 4l1.6 4.4L18 10l-4.4 1.6L12 16l-1.6-4.4L6 10l4.4-1.6L12 4Z" />
      <path d="M18 14l.7 1.8L20.5 16.5l-1.8.7L18 19l-.7-1.8L15.5 16.5l1.8-.7L18 14Z" />
    </svg>
  );
}

function IconReset() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...iconStroke}>
      <path d="M4 9a8 8 0 1 1-1 4" />
      <path d="M4 4v5h5" />
    </svg>
  );
}

function IconGift() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...iconStroke}>
      <rect x="4" y="9" width="16" height="11" rx="1.5" />
      <path d="M4 13h16M12 9v11" />
      <path d="M12 9c-1.5-3-5-3-5-1s2.5 1 5 1Zm0 0c1.5-3 5-3 5-1s-2.5 1-5 1Z" />
    </svg>
  );
}

/** Injects the success-glow + shake keyframes once. */
function GlowKeyframes() {
  useEffect(() => {
    const id = "sentence-builder-anim";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.textContent = `
      @keyframes sb-glow {
        0% { box-shadow: 0 0 0 0 color-mix(in oklab, var(--correct) 40%, transparent); }
        100% { box-shadow: 0 0 0 6px transparent; }
      }
      .sb-glow { animation: sb-glow 0.9s ease-out; }
      @keyframes sb-shake {
        0%, 100% { transform: translateX(0); }
        20% { transform: translateX(-5px); }
        40% { transform: translateX(5px); }
        60% { transform: translateX(-3px); }
        80% { transform: translateX(3px); }
      }
      @media (prefers-reduced-motion: no-preference) {
        .sb-shake { animation: sb-shake 0.4s ease-in-out; }
      }
    `;
    document.head.appendChild(style);
  }, []);
  return null;
}
