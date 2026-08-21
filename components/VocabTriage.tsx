"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { PlayButton } from "@/components/PlayButton";
import type { CoreWord } from "@/content/vocab";
import { isStrayTouch, notePointerType } from "@/lib/pen";
import { getVocabProgress, markVocabKnown, markVocabLearning } from "@/lib/store";

const TAP_SLOP_PX = 10;
const SWIPE_PX = 48;

/**
 * El barrido — the triage sweep.
 *
 * Spanish on sight. The English sits under a slip you swipe (or tap) aside,
 * so the question is whether *el gato* means anything before the gloss
 * confirms it. Peeking is allowed; judging does not wait for it. The
 * production test is the drill, which runs the other way: English first,
 * say the Spanish.
 *
 * Every verdict writes immediately, so quitting halfway keeps the work and
 * re-entering resumes at the first word not yet swept.
 *
 * No score at the end. The output is a count of what went onto the list, the
 * same way Sin mirar's output is a list of stems.
 */
export function VocabTriage({
  words,
  onDone,
  onQuit,
}: {
  words: CoreWord[];
  onDone: (learningCount: number) => void;
  onQuit: () => void;
}) {
  // Resume where the last sweep stopped: only words with no verdict yet. Frozen
  // at mount so the deck doesn't shrink under the user as they judge.
  const deck = useMemo(() => {
    const progress = getVocabProgress();
    const unseen = words.filter((w) => !progress[w.id]);
    return unseen.length > 0 ? unseen : words;
  }, [words]);

  const [i, setI] = useState(0);
  const [learningCount, setLearningCount] = useState(0);

  const card = deck[i];

  const advance = useCallback(
    (wentToList: boolean) => {
      const nextCount = learningCount + (wentToList ? 1 : 0);
      setLearningCount(nextCount);
      if (i + 1 >= deck.length) onDone(nextCount);
      else setI(i + 1);
    },
    [i, deck.length, learningCount, onDone],
  );

  const judge = useCallback(
    (known: boolean) => {
      if (!card) return;
      if (known) markVocabKnown(card.id);
      else markVocabLearning(card.id);
      advance(!known);
    },
    [card, advance],
  );

  if (!card) return null;

  return (
    <div className="fade-rise">
      <p className="mono-cap text-ink-mute">
        {i + 1} de {deck.length}
      </p>

      <div className="stem-recall-card">
        <p className="mono-cap text-ink-mute stem-recall-card__hint">¿La sabes?</p>

        <p className="stem-recall-card__stem">{card.es}</p>
        <EnglishPeek key={card.id} en={card.en} />

        <div style={{ marginTop: "1rem" }}>
          <PlayButton text={card.es} contextBefore={card.example} label={`Oír ${card.es}`} />
        </div>

        <div className="stem-recall-judge-row stem-recall-judge-row--duo">
          <button
            type="button"
            className="stem-recall-judge stem-recall-judge--zone"
            onClick={() => judge(true)}
          >
            <span className="stem-recall-judge-label">Ya la sé</span>
          </button>
          <button
            type="button"
            className="stem-recall-judge stem-recall-judge--mute"
            onClick={() => judge(false)}
          >
            <span className="stem-recall-judge-label">No la sé</span>
          </button>
        </div>
      </div>

      <p style={{ marginTop: "1.5rem", textAlign: "center" }}>
        <button
          type="button"
          onClick={onQuit}
          className="text-caption text-ink-mute hover:text-accent transition-colors min-h-[44px] inline-flex items-center"
        >
          Dejarlo aquí
        </button>
      </p>
    </div>
  );
}

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * The English gloss, absent until a swipe or a tap. The slip is a button so
 * a click and a keypress both count. Keyed by the card so the next word
 * starts covered.
 */
function EnglishPeek({ en }: { en: string }) {
  const [revealed, setRevealed] = useState(false);
  const [offset, setOffset] = useState(0);
  const [dragging, setDragging] = useState(false);
  const origin = useRef<{ x: number; y: number } | null>(null);
  const captured = useRef(false);

  const reveal = useCallback(() => {
    setRevealed(true);
    setOffset(0);
    setDragging(false);
    origin.current = null;
    captured.current = false;
  }, []);

  const snapBack = useCallback((target: HTMLButtonElement, pointerId: number) => {
    if (target.hasPointerCapture(pointerId)) target.releasePointerCapture(pointerId);
    captured.current = false;
    origin.current = null;
    setDragging(false);
    setOffset(0);
  }, []);

  function onPointerDown(e: ReactPointerEvent<HTMLButtonElement>) {
    notePointerType(e.pointerType);
    if (isStrayTouch(e.pointerType)) return;
    origin.current = { x: e.clientX, y: e.clientY };
    captured.current = false;
  }

  function onPointerMove(e: ReactPointerEvent<HTMLButtonElement>) {
    if (!origin.current) return;
    if (isStrayTouch(e.pointerType)) return;
    const dx = e.clientX - origin.current.x;
    const dy = e.clientY - origin.current.y;
    if (!captured.current) {
      if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > TAP_SLOP_PX) {
        origin.current = null;
        return;
      }
      if (Math.abs(dx) < TAP_SLOP_PX) return;
      e.currentTarget.setPointerCapture(e.pointerId);
      captured.current = true;
      setDragging(true);
    }
    if (!prefersReducedMotion()) setOffset(dx);
  }

  function onPointerUp(e: ReactPointerEvent<HTMLButtonElement>) {
    if (isStrayTouch(e.pointerType)) {
      snapBack(e.currentTarget, e.pointerId);
      return;
    }
    const start = origin.current;
    origin.current = null;
    if (!start) return;
    const dx = e.clientX - start.x;
    if (captured.current) {
      if (Math.abs(dx) >= SWIPE_PX) reveal();
      else snapBack(e.currentTarget, e.pointerId);
    }
  }

  if (revealed) {
    return <p className="stem-recall-card__english vocab-triage-peek-en">{en}</p>;
  }

  return (
    <button
      type="button"
      className={dragging ? "vocab-triage-peek is-dragging" : "vocab-triage-peek"}
      aria-label="Ver el inglés"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={(e) => snapBack(e.currentTarget, e.pointerId)}
      onClick={() => reveal()}
    >
      <span
        className="vocab-triage-peek__label"
        style={{ transform: offset ? `translateX(${offset}px)` : undefined }}
      >
        Desliza
      </span>
    </button>
  );
}
