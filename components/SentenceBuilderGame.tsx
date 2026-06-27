"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { PlayButton } from "@/components/PlayButton";
import { SettingsMenuButton } from "@/components/SettingsMenu";
import { getSbProgress, recordSbLevelResult } from "@/lib/store";
import { staticAudioUrl } from "@/lib/audio";
import {
  normalizeWord,
  normalizeSentence,
  sentenceBuilderCards,
  type SentenceCard,
} from "@/content/sentenceBuilder";

/** Each tappable tile carries a stable id so duplicate words stay distinct. */
type Tile = { id: number; word: string };

type Phase = "building" | "correct" | "wrong";
type Step = "build" | "recall" | "write" | "say" | "remix";

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

/**
 * Parse a recall prompt string like "T____ q__ ll____ a mi m____" into
 * alternating text and blank tokens. A blank is any token containing 2+ underscores.
 */
function parseRecallPrompt(prompt: string): Array<{ type: "text" | "blank"; value: string }> {
  const tokens = prompt.split(/(\s+)/).filter((t) => t.trim().length > 0);
  return tokens.map((token) => ({
    type: /_{2,}/.test(token) ? ("blank" as const) : ("text" as const),
    value: token,
  }));
}

/** Visible hint letters from a blank token like "T____" → "T". */
function recallHintFromToken(token: string): string {
  return token.replace(/_+/g, "");
}

function emptyRecallAnswers(card: SentenceCard): string[] {
  return Array(card.recall?.missingWords.length ?? 0).fill("");
}

/** Best-effort audio auto-play (silently fails on iOS Safari due to autoplay policy). */
function tryAutoPlay(text: string) {
  staticAudioUrl(text).then((url) => {
    if (!url) return;
    new Audio(url).play().catch(() => {});
  });
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
  const [deckSeed, setDeckSeed] = useState(() => String(Date.now()));
  const deck = useMemo(
    () => shuffleSeeded(cards, deckSeed),
    [cards, deckSeed]
  );
  const [cardIndex, setCardIndex] = useState(0);
  const card = deck[cardIndex];

  // Stable id = authored index; the displayed order is shuffled per card.
  const tiles = useMemo<Tile[]>(
    () =>
      shuffleSeeded(
        card.availableTiles.map((word, id) => ({ id, word })),
        card.id
      ),
    [card]
  );
  const hueMap = useMemo(() => buildHueMap(card.targetSpanish), [card]);

  // Remix tiles are shuffled with a different seed suffix to keep them distinct.
  const remixTiles = useMemo<Tile[]>(() => {
    if (!card.remix) return [];
    return shuffleSeeded(
      card.remix.availableTiles.map((word, id) => ({ id, word })),
      card.id + "_remix"
    );
  }, [card]);
  const remixHueMap = useMemo(
    () => (card.remix ? buildHueMap(card.remix.targetSpanish) : new Map<string, string>()),
    [card]
  );

  const isLadder = !!(card.recall && card.say && card.remix);

  // ── Build step state ───────────────────────────────────────────────
  const [answer, setAnswer] = useState<number[]>([]);
  const [phase, setPhase] = useState<Phase>("building");
  const [wrongAt, setWrongAt] = useState<number | null>(null);
  const [showHint, setShowHint] = useState(false);

  // ── Recall step state ──────────────────────────────────────────────
  const [recallAnswer, setRecallAnswer] = useState<string[]>(() => emptyRecallAnswers(card));
  const [recallPhase, setRecallPhase] = useState<Phase>("building");
  const [recallWrongAt, setRecallWrongAt] = useState<number | null>(null);
  const [showSpanishRecall, setShowSpanishRecall] = useState(false);

  // ── Write step state ───────────────────────────────────────────────
  const [writeAnswer, setWriteAnswer] = useState("");
  const [writePhase, setWritePhase] = useState<Phase>("building");

  // ── Say step state ─────────────────────────────────────────────────
  const [showSpanishSay, setShowSpanishSay] = useState(false);
  const [saidIt, setSaidIt] = useState(false);
  const [showSaidAgain, setShowSaidAgain] = useState(false);

  // ── Remix step state ───────────────────────────────────────────────
  const [remixAnswer, setRemixAnswer] = useState<number[]>([]);
  const [remixPhase, setRemixPhase] = useState<Phase>("building");
  const [remixWrongAt, setRemixWrongAt] = useState<number | null>(null);

  // ── Global state ───────────────────────────────────────────────────
  const [currentStep, setCurrentStep] = useState<Step>("build");
  const [streak, setStreak] = useState(initialStreak);
  const [solved, setSolved] = useState(0);
  const [done, setDone] = useState(false);

  // ── Derived ───────────────────────────────────────────────────────
  const tileById = (id: number) => tiles.find((t) => t.id === id) ?? tiles[0];

  const inRemixAnswer = new Set(remixAnswer);
  const remixBank = remixTiles.filter((t) => !inRemixAnswer.has(t.id));
  const remixTileById = (id: number) =>
    remixTiles.find((t) => t.id === id) ?? remixTiles[0];

  function resetForCard() {
    setAnswer([]);
    setPhase("building");
    setWrongAt(null);
    setShowHint(false);
    setCurrentStep("build");
    setRecallAnswer(emptyRecallAnswers(card));
    setRecallPhase("building");
    setRecallWrongAt(null);
    setShowSpanishRecall(false);
    setWriteAnswer("");
    setWritePhase("building");
    setShowSpanishSay(false);
    setSaidIt(false);
    setShowSaidAgain(false);
    setRemixAnswer([]);
    setRemixPhase("building");
    setRemixWrongAt(null);
  }

  // ── Build step actions ─────────────────────────────────────────────
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
      chosen.length === target.length && chosen.every((w, i) => w === target[i]);

    if (matches) {
      setPhase("correct");
      setStreak((s) => s + 1);
      setSolved((n) => n + 1);
      tryAutoPlay(card.displayAnswer);
      return;
    }

    let mismatch = chosen.findIndex((w, i) => w !== target[i]);
    if (mismatch === -1) mismatch = chosen.length;
    setWrongAt(mismatch);
    setPhase("wrong");
  }

  function advanceFromBuild() {
    if (isLadder) {
      setCurrentStep("recall");
    } else {
      advanceCard();
    }
  }

  // ── Recall step actions ────────────────────────────────────────────
  function updateRecallAnswer(index: number, value: string) {
    if (recallPhase === "correct") return;
    setRecallAnswer((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
    setRecallPhase("building");
    setRecallWrongAt(null);
  }

  function clearRecallAnswer() {
    if (recallPhase === "correct") return;
    setRecallAnswer(emptyRecallAnswers(card));
    setRecallPhase("building");
    setRecallWrongAt(null);
  }

  function checkRecall() {
    if (!card.recall) return;
    const chosen = recallAnswer.map(normalizeWord);
    const target = card.recall.missingWords.map(normalizeWord);

    const matches =
      chosen.length === target.length &&
      chosen.every((w, i) => w.length > 0 && w === target[i]);

    if (matches) {
      setRecallPhase("correct");
      tryAutoPlay(card.displayAnswer);
      return;
    }

    let mismatch = chosen.findIndex((w, i) => w !== target[i]);
    if (mismatch === -1) mismatch = chosen.findIndex((w) => w.length === 0);
    if (mismatch === -1) mismatch = chosen.length;
    setRecallWrongAt(mismatch);
    setRecallPhase("wrong");
  }

  function advanceFromRecall() {
    setCurrentStep("write");
  }

  // ── Write step actions ─────────────────────────────────────────────
  function updateWriteAnswer(value: string) {
    if (writePhase === "correct") return;
    setWriteAnswer(value);
    setWritePhase("building");
  }

  function clearWriteAnswer() {
    if (writePhase === "correct") return;
    setWriteAnswer("");
    setWritePhase("building");
  }

  function checkWrite() {
    const chosen = normalizeSentence(writeAnswer);
    const target = card.targetSpanish.map(normalizeWord);

    const matches =
      chosen.length === target.length && chosen.every((w, i) => w === target[i]);

    if (matches) {
      setWritePhase("correct");
      tryAutoPlay(card.displayAnswer);
      return;
    }

    setWritePhase("wrong");
  }

  function advanceFromWrite() {
    setCurrentStep("say");
  }

  // ── Say step actions ───────────────────────────────────────────────
  function confirmSaid() {
    setSaidIt(true);
    setShowSaidAgain(true);
  }

  function advanceFromSay() {
    setCurrentStep("remix");
  }

  // ── Remix step actions ─────────────────────────────────────────────
  function selectRemixTile(id: number) {
    if (remixPhase === "correct") return;
    setRemixAnswer((prev) => [...prev, id]);
    setRemixPhase("building");
    setRemixWrongAt(null);
  }

  function removeRemixTile(id: number) {
    if (remixPhase === "correct") return;
    setRemixAnswer((prev) => prev.filter((tid) => tid !== id));
    setRemixPhase("building");
    setRemixWrongAt(null);
  }

  function clearRemixAnswer() {
    if (remixPhase === "correct") return;
    setRemixAnswer([]);
    setRemixPhase("building");
    setRemixWrongAt(null);
  }

  function checkRemix() {
    if (!card.remix) return;
    const chosen = remixAnswer.map((id) => normalizeWord(remixTileById(id).word));
    const target = card.remix.targetSpanish.map(normalizeWord);

    const matches =
      chosen.length === target.length && chosen.every((w, i) => w === target[i]);

    if (matches) {
      setRemixPhase("correct");
      tryAutoPlay(card.remix.displayAnswer);
      return;
    }

    let mismatch = chosen.findIndex((w, i) => w !== target[i]);
    if (mismatch === -1) mismatch = chosen.length;
    setRemixWrongAt(mismatch);
    setRemixPhase("wrong");
  }

  // ── Card/deck advance ──────────────────────────────────────────────
  function advanceCard() {
    if (cardIndex + 1 >= deck.length) {
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
    setDeckSeed(String(Date.now()));
    setCardIndex(0);
  }

  // Reset transient state when the active card or deck order changes.
  useEffect(() => {
    resetForCard();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardIndex, deckSeed]);

  // Keyboard shortcuts
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (done) return;
      const target = e.target as HTMLElement;
      const inTextField =
        target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable;
      if (e.key === "Enter") {
        e.preventDefault();
        if (currentStep === "build") {
          if (phase === "correct") advanceFromBuild();
          else if (answer.length > 0) check();
        } else if (currentStep === "recall") {
          if (recallPhase === "correct") advanceFromRecall();
          else if (recallAnswer.every((w) => w.trim().length > 0)) checkRecall();
        } else if (currentStep === "write") {
          if (writePhase === "correct") advanceFromWrite();
          else if (writeAnswer.trim().length > 0) checkWrite();
        } else if (currentStep === "say") {
          if (showSaidAgain) advanceFromSay();
          else if (!saidIt) confirmSaid();
        } else if (currentStep === "remix") {
          if (remixPhase === "correct") advanceCard();
          else if (remixAnswer.length > 0) checkRemix();
        }
      } else if (e.key === "Backspace" && !inTextField) {
        if (currentStep === "build" && phase !== "correct" && answer.length > 0) {
          e.preventDefault();
          removeTile(answer[answer.length - 1]);
        } else if (currentStep === "remix" && remixPhase !== "correct" && remixAnswer.length > 0) {
          e.preventDefault();
          removeRemixTile(remixAnswer[remixAnswer.length - 1]);
        }
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, answer, recallPhase, recallAnswer, writePhase, writeAnswer, remixPhase, remixAnswer, currentStep, saidIt, showSaidAgain, done]);

  // Close hint popover when tapping outside.
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
    if (done && !recordedRef.current && deck.length > 0) {
      recordedRef.current = true;
      recordSbLevelResult(deck[0].level, solved, deck.length);
    }
  }, [done, solved, deck]);

  const completedUnits = cardIndex + (
    currentStep === "remix" && remixPhase === "correct" ? 1 :
    currentStep === "build" && phase === "correct" && !isLadder ? 1 : 0
  );
  const progressPercent = done ? 100 : (completedUnits / deck.length) * 100;

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
            <span aria-hidden className="text-base leading-none">×</span>
            Salir
          </button>
          <SettingsMenuButton />
        </header>

        <div className="fade-rise rounded-lg border border-[color:var(--correct)]/40 bg-surface p-8 text-center space-y-4">
          <p className="day-pill mx-auto w-fit">¡Set completo!</p>
          <h2 className="text-display-md text-ink">
            Construiste {deck.length} {deck.length === 1 ? "frase" : "frases"}.
          </h2>
          <p className="text-gloss mx-auto max-w-sm">
            Resolviste {solved} de {deck.length} a la primera. La racha sigue en{" "}
            <span className="text-accent">{streak} 🔥</span> — vuelve cuando
            quieras y repítelas.
          </p>
          <p className="mono-cap text-ink-mute">
            Mejor · {Math.max(solved, sbBestSolved(deck))} / {deck.length}
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

  // ── Step labels for the indicator ──────────────────────────────────
  const STEP_LABELS: { key: Step; label: string }[] = [
    { key: "build", label: "Construye" },
    { key: "recall", label: "Recuerda" },
    { key: "write", label: "Escribe" },
    { key: "say", label: "Di" },
    { key: "remix", label: "Cambia" },
  ];

  return (
    <div className="space-y-4 pb-2">
      <GlowKeyframes />

      {/* ── Top bar ────────────────────────────────────────────────── */}
      <header className="flex items-center gap-3">
        <button
          type="button"
          onClick={onQuit}
          className="mono-cap flex items-center gap-1.5 text-ink-mute transition-colors hover:text-accent min-h-[40px]"
        >
          <span aria-hidden className="text-base leading-none">×</span>
          Salir
        </button>

        <div className="flex flex-1 items-center gap-2.5">
          <span className="mono-cap whitespace-nowrap text-ink-soft">
            Racha · {streak}{" "}
            <span aria-hidden className="text-accent">🔥</span>
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

      {/* ── Step indicator (ladder cards only) ────────────────────── */}
      <div className="flex items-center justify-between gap-3">
        {isLadder ? (
          <div className="flex items-center gap-1.5">
            {STEP_LABELS.map((s, i) => (
              <span key={s.key} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-ink-mute" aria-hidden>·</span>}
                <span
                  className="mono-cap transition-colors"
                  style={{ color: s.key === currentStep ? "var(--accent)" : "var(--ink-mute)" }}
                >
                  {s.label}
                </span>
              </span>
            ))}
          </div>
        ) : (
          <p className="mono-cap">Construye la frase</p>
        )}
        <p className="mono-cap text-ink-mute shrink-0">
          {String(cardIndex + 1).padStart(2, "0")} / {String(deck.length).padStart(2, "0")}
          {isLadder && (
            <span className="text-ink-mute">
              {" "}· {STEP_LABELS.findIndex((s) => s.key === currentStep) + 1}/5
            </span>
          )}
        </p>
      </div>

      {/* ── Step content ──────────────────────────────────────────── */}
      {currentStep === "build" && (
        <BuildStep
          card={card}
          tiles={tiles}
          hueMap={hueMap}
          answer={answer}
          phase={phase}
          wrongAt={wrongAt}
          showHint={showHint}
          hintRef={hintRef}
          isLadder={isLadder}
          onSelectTile={selectTile}
          onRemoveTile={removeTile}
          onClear={clearAnswer}
          onCheck={check}
          onNext={advanceFromBuild}
          onToggleHint={() => setShowHint((v) => !v)}
          tileById={tileById}
        />
      )}

      {currentStep === "recall" && card.recall && (
        <RecallStep
          card={card}
          recallAnswer={recallAnswer}
          recallPhase={recallPhase}
          recallWrongAt={recallWrongAt}
          showSpanish={showSpanishRecall}
          onChangeAnswer={updateRecallAnswer}
          onClear={clearRecallAnswer}
          onCheck={checkRecall}
          onNext={advanceFromRecall}
          onReveal={() => setShowSpanishRecall(true)}
        />
      )}

      {currentStep === "write" && (
        <WriteStep
          card={card}
          writeAnswer={writeAnswer}
          writePhase={writePhase}
          onChangeAnswer={updateWriteAnswer}
          onClear={clearWriteAnswer}
          onCheck={checkWrite}
          onNext={advanceFromWrite}
        />
      )}

      {currentStep === "say" && card.say && (
        <SayStep
          say={card.say}
          showSpanish={showSpanishSay}
          saidIt={saidIt}
          showSaidAgain={showSaidAgain}
          onShowSpanish={() => setShowSpanishSay(true)}
          onSaidIt={confirmSaid}
          onContinue={advanceFromSay}
        />
      )}

      {currentStep === "remix" && card.remix && (
        <RemixStep
          remix={card.remix}
          remixBank={remixBank}
          remixHueMap={remixHueMap}
          remixAnswer={remixAnswer}
          remixPhase={remixPhase}
          remixWrongAt={remixWrongAt}
          onSelectTile={selectRemixTile}
          onRemoveTile={removeRemixTile}
          onClear={clearRemixAnswer}
          onCheck={checkRemix}
          onNext={advanceCard}
          remixTileById={remixTileById}
        />
      )}

      {/* ── Mini progress card (desktop — streak already in header on mobile) ── */}
      <div className="hidden lg:flex items-center gap-4 rounded-lg border border-rule bg-surface px-4 py-3">
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
              style={{ width: `${progressPercent}%`, background: "var(--correct)" }}
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

/* ── Build Step ─────────────────────────────────────────────────────── */

function BuildStep({
  card,
  tiles,
  hueMap,
  answer,
  phase,
  wrongAt,
  showHint,
  hintRef,
  isLadder,
  onSelectTile,
  onRemoveTile,
  onClear,
  onCheck,
  onNext,
  onToggleHint,
  tileById,
}: {
  card: SentenceCard;
  tiles: Tile[];
  hueMap: Map<string, string>;
  answer: number[];
  phase: Phase;
  wrongAt: number | null;
  showHint: boolean;
  hintRef: React.RefObject<HTMLDivElement | null>;
  isLadder: boolean;
  onSelectTile: (id: number) => void;
  onRemoveTile: (id: number) => void;
  onClear: () => void;
  onCheck: () => void;
  onNext: () => void;
  onToggleHint: () => void;
  tileById: (id: number) => Tile;
}) {
  const inAnswer = new Set(answer);
  const bank = tiles.filter((t) => !inAnswer.has(t.id));

  return (
    <div className="space-y-4">
      {/* Prompt + Pista */}
      <div className="space-y-1.5">
        <div className="flex items-start justify-between gap-3">
          <h1 className="text-display-prompt text-ink">{card.promptEnglish}</h1>
          <div ref={hintRef} className="relative shrink-0">
            <button
              type="button"
              onClick={onToggleHint}
              aria-expanded={showHint}
              className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 px-3.5 py-2 text-sm text-accent transition-colors hover:border-accent/70 hover:bg-accent/5 min-h-[40px]"
            >
              <IconBulb />
              Pista
            </button>
            {showHint && (
              <div className="absolute right-0 top-full z-20 mt-2 w-72 rounded-md border border-rule bg-surface-2 p-3.5 shadow-soft">
                <div className="flex items-start gap-2.5">
                  <span className="mt-0.5 shrink-0 text-accent"><IconSparkle /></span>
                  <div className="space-y-1.5">
                    <p className="text-sm leading-relaxed text-ink">{card.hint}</p>
                    <p className="text-sm leading-relaxed text-ink-mute">{card.examples}</p>
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

      {/* Answer card */}
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
                  onClick={() => onRemoveTile(id)}
                  disabled={phase === "correct"}
                  highlight={isWrong ? "wrong" : undefined}
                  ariaLabel={`Quitar ${tile.word}`}
                />
              );
            })}
          </div>
        )}
      </div>

      {/* Word bank */}
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
                  onClick={() => onSelectTile(tile.id)}
                  disabled={phase === "correct"}
                  ariaLabel={`Añadir ${tile.word}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Feedback */}
      <div aria-live="polite">
        {phase === "correct" && (
          <div className="fade-in rounded-lg border border-[color:var(--correct)]/40 bg-surface p-4 space-y-2.5">
            <div className="flex items-start justify-between gap-4">
              <p className="mono-cap pt-0.5" style={{ color: "var(--correct)" }}>¡Perfecto!</p>
              <PlayButton text={card.displayAnswer} label={`Escuchar: ${card.displayAnswer}`} />
            </div>
            <p className="text-display-md text-ink">{card.displayAnswer}</p>
            <p className="text-sm leading-relaxed text-ink-soft">{card.explanation}</p>
          </div>
        )}
        {phase === "wrong" && (
          <p className="text-sm text-ink-soft">{card.almost}</p>
        )}
      </div>

      {/* Actions */}
      <div className="sb-step-actions mt-1 grid grid-cols-2 gap-3 items-stretch">
        <button
          type="button"
          onClick={onClear}
          disabled={phase === "correct" || answer.length === 0}
          className="flex items-center justify-center gap-2 rounded-[14px] border border-rule px-4 py-3.5 text-ink transition-colors hover:border-accent/50 hover:text-accent disabled:opacity-40 disabled:hover:border-rule disabled:hover:text-ink-soft"
        >
          <IconReset />
          <span className="font-display text-lg">Borrar</span>
        </button>

        {phase === "correct" ? (
          <button
            type="button"
            onClick={onNext}
            className="btn-primary btn-primary--spectrum btn-primary--center"
            style={{ padding: "14px 18px" }}
          >
            <span className="lab">{isLadder ? "Recordar" : "Siguiente"}</span>
            <span aria-hidden>→</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={onCheck}
            disabled={answer.length === 0}
            className="btn-primary btn-primary--spectrum btn-primary--center disabled:opacity-50"
            style={{ padding: "14px 18px" }}
          >
            <span className="lab">Comprobar</span>
            <span aria-hidden>→</span>
          </button>
        )}
      </div>
    </div>
  );
}

/* ── Recall Step ────────────────────────────────────────────────────── */

function RecallStep({
  card,
  recallAnswer,
  recallPhase,
  recallWrongAt,
  showSpanish,
  onChangeAnswer,
  onClear,
  onCheck,
  onNext,
  onReveal,
}: {
  card: SentenceCard;
  recallAnswer: string[];
  recallPhase: Phase;
  recallWrongAt: number | null;
  showSpanish: boolean;
  onChangeAnswer: (index: number, value: string) => void;
  onClear: () => void;
  onCheck: () => void;
  onNext: () => void;
  onReveal: () => void;
}) {
  const recall = card.recall!;
  const tokens = parseRecallPrompt(recall.prompt);
  const allFilled = recallAnswer.every((w) => w.trim().length > 0);

  let blankIndex = 0;

  return (
    <div className="space-y-4">
      {/* Prompt */}
      <div className="space-y-1.5">
        <h1 className="text-display-prompt text-ink">{card.promptEnglish}</h1>
        <p className="text-sm text-ink-mute">Escribe las palabras que faltan.</p>
      </div>

      {/* Recall sentence display */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (recallPhase === "correct") onNext();
          else if (allFilled) onCheck();
        }}
        className={`rounded-lg border bg-surface p-4 transition-colors ${
          recallPhase === "correct"
            ? "sb-glow border-[color:var(--correct)]/60"
            : recallPhase === "wrong"
              ? "sb-shake border-red-500/50"
              : "border-rule"
        }`}
      >
        <div className="flex min-h-[84px] flex-wrap content-center items-center gap-x-1.5 gap-y-2">
          {tokens.map((token, i) => {
            if (token.type === "text") {
              return (
                <span key={i} className="font-display text-lg text-ink">
                  {token.value}
                </span>
              );
            }

            const myIndex = blankIndex++;
            const hint = recallHintFromToken(token.value);
            const expectedLen = recall.missingWords[myIndex]?.length ?? 4;
            const typedLen = recallAnswer[myIndex]?.length ?? 0;
            const inputWidth = Math.max(expectedLen, typedLen, hint.length || 3) + 3;
            const isWrong = recallPhase === "wrong" && recallWrongAt === myIndex;
            const isFirstBlank = myIndex === 0;

            return (
              <input
                key={i}
                type="text"
                value={recallAnswer[myIndex] ?? ""}
                onChange={(e) => onChangeAnswer(myIndex, e.target.value)}
                disabled={recallPhase === "correct"}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
                autoFocus={isFirstBlank && recallPhase !== "correct"}
                aria-label={`Palabra ${myIndex + 1}, empieza con ${hint || "?"}`}
                placeholder={hint ? `${hint}…` : "…"}
                className={`box-border min-h-[44px] min-w-[5.5rem] rounded-xl border bg-surface px-3.5 font-display text-lg text-ink outline-none transition-colors placeholder:text-ink-mute/70 focus:border-accent/70 disabled:cursor-default ${
                  isWrong
                    ? "border-red-500 bg-red-500/10"
                    : recallPhase === "correct"
                      ? "border-[color:var(--correct)]/50 bg-[color:var(--correct)]/10"
                      : "border-accent/35"
                }`}
                style={{ width: `${inputWidth}ch` }}
              />
            );
          })}
        </div>
        {showSpanish && (
          <p className="mt-3 border-t border-rule pt-3 text-display-md text-ink">
            {card.displayAnswer}
          </p>
        )}
      </form>

      {/* Tools */}
      <div className="flex items-center justify-between gap-2">
        <p className="mono-cap">Sin banco de palabras</p>
        <div className="flex items-center gap-2">
          <PlayButton text={card.displayAnswer} label="Escuchar la frase completa" />
          {recall.revealAnswerAllowed && !showSpanish && (
            <button
              type="button"
              onClick={onReveal}
              className="mono-cap text-ink-mute transition-colors hover:text-accent"
            >
              Ver frase
            </button>
          )}
        </div>
      </div>

      {/* Feedback */}
      <div aria-live="polite">
        {recallPhase === "correct" && (
          <div className="fade-in rounded-lg border border-[color:var(--correct)]/40 bg-surface p-4 space-y-2.5">
            <div className="flex items-start justify-between gap-4">
              <p className="mono-cap pt-0.5" style={{ color: "var(--correct)" }}>Sí, eso es.</p>
              <PlayButton text={card.displayAnswer} label={`Escuchar: ${card.displayAnswer}`} />
            </div>
            <p className="text-display-md text-ink">{card.displayAnswer}</p>
          </div>
        )}
        {recallPhase === "wrong" && (
          <p className="text-sm text-ink-soft">Casi. Revisa la ortografía de las palabras.</p>
        )}
      </div>

      {/* Actions */}
      <div className="sb-step-actions mt-1 grid grid-cols-2 gap-3 items-stretch">
        <button
          type="button"
          onClick={onClear}
          disabled={recallPhase === "correct" || !recallAnswer.some((w) => w.length > 0)}
          className="flex items-center justify-center gap-2 rounded-[14px] border border-rule px-4 py-3.5 text-ink transition-colors hover:border-accent/50 hover:text-accent disabled:opacity-40 disabled:hover:border-rule disabled:hover:text-ink-soft"
        >
          <IconReset />
          <span className="font-display text-lg">Borrar</span>
        </button>

        {recallPhase === "correct" ? (
          <button
            type="button"
            onClick={onNext}
            className="btn-primary btn-primary--spectrum btn-primary--center"
            style={{ padding: "14px 18px" }}
          >
            <span className="lab">Escribir</span>
            <span aria-hidden>→</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={onCheck}
            disabled={!allFilled}
            className="btn-primary btn-primary--spectrum btn-primary--center disabled:opacity-50"
            style={{ padding: "14px 18px" }}
          >
            <span className="lab">Comprobar</span>
            <span aria-hidden>→</span>
          </button>
        )}
      </div>
    </div>
  );
}

/* ── Write Step ─────────────────────────────────────────────────────── */

function WriteStep({
  card,
  writeAnswer,
  writePhase,
  onChangeAnswer,
  onClear,
  onCheck,
  onNext,
}: {
  card: SentenceCard;
  writeAnswer: string;
  writePhase: Phase;
  onChangeAnswer: (value: string) => void;
  onClear: () => void;
  onCheck: () => void;
  onNext: () => void;
}) {
  const hasText = writeAnswer.trim().length > 0;

  return (
    <div className="space-y-4">
      <div className="space-y-1.5">
        <h1 className="text-display-prompt text-ink">{card.promptEnglish}</h1>
        <p className="text-sm text-ink-mute">Escribe la frase completa en español, sin ayuda.</p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (writePhase === "correct") onNext();
          else if (hasText) onCheck();
        }}
        className={`rounded-lg border bg-surface p-4 transition-colors ${
          writePhase === "correct"
            ? "sb-glow border-[color:var(--correct)]/60"
            : writePhase === "wrong"
              ? "sb-shake border-red-500/50"
              : "border-rule"
        }`}
      >
        <textarea
          value={writeAnswer}
          onChange={(e) => onChangeAnswer(e.target.value)}
          disabled={writePhase === "correct"}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          autoFocus={writePhase !== "correct"}
          rows={3}
          aria-label="Escribe la frase completa en español"
          placeholder="Escribe aquí…"
          className={`w-full resize-none rounded-xl border bg-surface px-4 py-3.5 font-display text-lg leading-relaxed text-ink outline-none transition-colors placeholder:text-ink-mute/70 focus:border-accent/70 disabled:cursor-default ${
            writePhase === "correct"
              ? "border-[color:var(--correct)]/50 bg-[color:var(--correct)]/10"
              : writePhase === "wrong"
                ? "border-red-500 bg-red-500/10"
                : "border-accent/35"
          }`}
        />
      </form>

      <p className="mono-cap text-ink-mute">Sin pistas ni banco de palabras</p>

      <div aria-live="polite">
        {writePhase === "correct" && (
          <div className="fade-in rounded-lg border border-[color:var(--correct)]/40 bg-surface p-4 space-y-2.5">
            <div className="flex items-start justify-between gap-4">
              <p className="mono-cap pt-0.5" style={{ color: "var(--correct)" }}>Sí, eso es.</p>
              <PlayButton text={card.displayAnswer} label={`Escuchar: ${card.displayAnswer}`} />
            </div>
            <p className="text-display-md text-ink">{card.displayAnswer}</p>
          </div>
        )}
        {writePhase === "wrong" && (
          <p className="text-sm text-ink-soft">Casi. Revisa las palabras y el orden.</p>
        )}
      </div>

      <div className="sb-step-actions mt-1 grid grid-cols-2 gap-3 items-stretch">
        <button
          type="button"
          onClick={onClear}
          disabled={writePhase === "correct" || !hasText}
          className="flex items-center justify-center gap-2 rounded-[14px] border border-rule px-4 py-3.5 text-ink transition-colors hover:border-accent/50 hover:text-accent disabled:opacity-40 disabled:hover:border-rule disabled:hover:text-ink-soft"
        >
          <IconReset />
          <span className="font-display text-lg">Borrar</span>
        </button>

        {writePhase === "correct" ? (
          <button
            type="button"
            onClick={onNext}
            className="btn-primary btn-primary--spectrum btn-primary--center"
            style={{ padding: "14px 18px" }}
          >
            <span className="lab">Decir</span>
            <span aria-hidden>→</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={onCheck}
            disabled={!hasText}
            className="btn-primary btn-primary--spectrum btn-primary--center disabled:opacity-50"
            style={{ padding: "14px 18px" }}
          >
            <span className="lab">Comprobar</span>
            <span aria-hidden>→</span>
          </button>
        )}
      </div>
    </div>
  );
}

/* ── Say Step ───────────────────────────────────────────────────────── */

function SayStep({
  say,
  showSpanish,
  saidIt,
  showSaidAgain,
  onShowSpanish,
  onSaidIt,
  onContinue,
}: {
  say: NonNullable<SentenceCard["say"]>;
  showSpanish: boolean;
  saidIt: boolean;
  showSaidAgain: boolean;
  onShowSpanish: () => void;
  onSaidIt: () => void;
  onContinue: () => void;
}) {
  return (
    <div className="space-y-4">
      {/* Prompt */}
      <div className="space-y-2">
        <p className="mono-cap" style={{ color: "var(--accent)" }}>DILO EN VOZ ALTA</p>
        <h1 className="text-display-prompt text-ink">{say.promptEnglish}</h1>
        <p className="text-sm text-ink-mute">{say.instruction}</p>
      </div>

      {/* Spanish reveal */}
      {showSpanish && (
        <div className="fade-in rounded-lg border border-rule bg-surface p-4 space-y-1">
          <p className="mono-cap text-ink-mute">La frase</p>
          <p className="text-display-md text-ink">{say.displayAnswer}</p>
        </div>
      )}

      {/* "Una vez más" nudge after confirming */}
      {showSaidAgain && (
        <div className="fade-in rounded-lg border border-[color:var(--correct)]/30 bg-surface p-4 space-y-1">
          <p className="mono-cap" style={{ color: "var(--correct)" }}>Bien.</p>
          <p className="text-sm text-ink-soft">Una vez más, un poco más rápido.</p>
        </div>
      )}

      {/* Action buttons */}
      <div className="flex flex-col gap-3">
        {/* Escuchar */}
        <div className="flex items-center gap-3 rounded-[14px] border border-rule bg-surface px-5 py-3.5">
          <PlayButton text={say.displayAnswer} label="Escuchar la frase" />
          <span className="font-display text-lg text-ink">Escuchar</span>
        </div>

        {/* Mostrar español */}
        {!showSpanish && (
          <button
            type="button"
            onClick={onShowSpanish}
            className="flex items-center justify-center gap-2 rounded-[14px] border border-rule px-5 py-3.5 font-display text-lg text-ink-soft transition-colors hover:border-accent/50 hover:text-accent"
          >
            <IconEye />
            Mostrar español
          </button>
        )}

        {/* Ya lo dije / Continuar */}
        {!saidIt ? (
          <button
            type="button"
            onClick={onSaidIt}
            className="btn-primary btn-primary--spectrum btn-primary--center"
            style={{ padding: "14px 18px" }}
          >
            <span className="lab">Ya lo dije</span>
            <span aria-hidden>✓</span>
          </button>
        ) : (
          <div className="sb-step-actions grid grid-cols-2 gap-3 items-stretch">
            <button
              type="button"
              onClick={() => {
                // Replay audio and reset "said again" state slightly for encouragement
              }}
              className="flex items-center justify-center gap-2 rounded-[14px] border border-rule px-4 py-3.5 font-display text-lg text-ink transition-colors hover:border-accent/50 hover:text-accent"
            >
              <IconRepeat />
              Repetir
            </button>
            <button
              type="button"
              onClick={onContinue}
              className="btn-primary btn-primary--spectrum btn-primary--center"
              style={{ padding: "14px 18px" }}
            >
              <span className="lab">Continuar</span>
              <span aria-hidden>→</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Remix Step ─────────────────────────────────────────────────────── */

function RemixStep({
  remix,
  remixBank,
  remixHueMap,
  remixAnswer,
  remixPhase,
  remixWrongAt,
  onSelectTile,
  onRemoveTile,
  onClear,
  onCheck,
  onNext,
  remixTileById,
}: {
  remix: NonNullable<SentenceCard["remix"]>;
  remixBank: Tile[];
  remixHueMap: Map<string, string>;
  remixAnswer: number[];
  remixPhase: Phase;
  remixWrongAt: number | null;
  onSelectTile: (id: number) => void;
  onRemoveTile: (id: number) => void;
  onClear: () => void;
  onCheck: () => void;
  onNext: () => void;
  remixTileById: (id: number) => Tile;
}) {
  return (
    <div className="space-y-4">
      {/* Prompt */}
      <div className="space-y-1.5">
        <p className="mono-cap" style={{ color: "var(--accent)" }}>CAMBIA UNA COSA</p>
        <h1 className="text-display-prompt text-ink">{remix.promptEnglish}</h1>
        <p className="text-sm text-ink-mute">Usa el mismo patrón con una palabra nueva.</p>
      </div>

      {/* Answer card */}
      <div
        className={`rounded-lg border bg-surface p-4 transition-colors ${
          remixPhase === "correct"
            ? "sb-glow border-[color:var(--correct)]/60"
            : remixPhase === "wrong"
              ? "sb-shake border-red-500/50"
              : "border-rule"
        }`}
      >
        {remixAnswer.length === 0 ? (
          <div className="flex min-h-[84px] flex-col items-center justify-center gap-3.5">
            <span className="block h-px w-3/4 border-t border-dashed border-rule" />
            <p className="text-sm text-ink-mute">Tu frase aparecerá aquí</p>
          </div>
        ) : (
          <div className="flex min-h-[84px] flex-wrap content-center items-center gap-2">
            {remixAnswer.map((id, i) => {
              const tile = remixTileById(id);
              const isWrong = remixPhase === "wrong" && remixWrongAt === i;
              return (
                <WordTile
                  key={id}
                  label={casedForAnswer(tile.word, i === 0)}
                  hue={remixHueMap.get(normalizeWord(tile.word))}
                  onClick={() => onRemoveTile(id)}
                  disabled={remixPhase === "correct"}
                  highlight={isWrong ? "wrong" : undefined}
                  ariaLabel={`Quitar ${tile.word}`}
                />
              );
            })}
          </div>
        )}
      </div>

      {/* Word bank */}
      <div className="space-y-2">
        <p className="mono-cap">Palabras disponibles</p>
        <div className="rounded-lg border border-rule bg-surface p-4">
          {remixBank.length === 0 ? (
            <p className="py-2 text-center text-sm text-ink-mute">
              Todas las palabras están en tu frase.
            </p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {remixBank.map((tile) => (
                <WordTile
                  key={tile.id}
                  label={tile.word}
                  hue={remixHueMap.get(normalizeWord(tile.word))}
                  onClick={() => onSelectTile(tile.id)}
                  disabled={remixPhase === "correct"}
                  ariaLabel={`Añadir ${tile.word}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Feedback */}
      <div aria-live="polite">
        {remixPhase === "correct" && (
          <div className="fade-in rounded-lg border border-[color:var(--correct)]/40 bg-surface p-4 space-y-2.5">
            <div className="flex items-start justify-between gap-4">
              <p className="mono-cap pt-0.5" style={{ color: "var(--correct)" }}>¡Perfecto!</p>
              <PlayButton text={remix.displayAnswer} label={`Escuchar: ${remix.displayAnswer}`} />
            </div>
            <p className="text-display-md text-ink">{remix.displayAnswer}</p>
            <p className="text-sm leading-relaxed text-ink-soft">{remix.explanation}</p>
          </div>
        )}
        {remixPhase === "wrong" && (
          <p className="text-sm text-ink-soft">Casi. Revisa el orden de las palabras.</p>
        )}
      </div>

      {/* Actions */}
      <div className="sb-step-actions mt-1 grid grid-cols-2 gap-3 items-stretch">
        <button
          type="button"
          onClick={onClear}
          disabled={remixPhase === "correct" || remixAnswer.length === 0}
          className="flex items-center justify-center gap-2 rounded-[14px] border border-rule px-4 py-3.5 text-ink transition-colors hover:border-accent/50 hover:text-accent disabled:opacity-40 disabled:hover:border-rule disabled:hover:text-ink-soft"
        >
          <IconReset />
          <span className="font-display text-lg">Borrar</span>
        </button>

        {remixPhase === "correct" ? (
          <button
            type="button"
            onClick={onNext}
            className="btn-primary btn-primary--spectrum btn-primary--center"
            style={{ padding: "14px 18px" }}
          >
            <span className="lab">Siguiente</span>
            <span aria-hidden>→</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={onCheck}
            disabled={remixAnswer.length === 0}
            className="btn-primary btn-primary--spectrum btn-primary--center disabled:opacity-50"
            style={{ padding: "14px 18px" }}
          >
            <span className="lab">Comprobar</span>
            <span aria-hidden>→</span>
          </button>
        )}
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

function IconEye() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...iconStroke}>
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function IconRepeat() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...iconStroke}>
      <path d="M17 1l4 4-4 4" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <path d="M7 23l-4-4 4-4" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
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
