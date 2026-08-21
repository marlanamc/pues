"use client";

import { useCallback, useMemo, useState } from "react";
import { Gloss } from "@/components/Gloss";
import { PlayButton } from "@/components/PlayButton";
import type { CoreWord } from "@/content/vocab";
import { recordVocabRecall } from "@/lib/store";
import { shuffle } from "@/lib/shuffle";

/**
 * El repaso — cued production over the words the sweep put on the list.
 *
 * Same shape as Sin mirar and for the same reason: recognizing *la cuchara* on
 * sight says nothing about whether it comes when you're standing in someone
 * else's kitchen. English first, say the Spanish out loud, then reveal and
 * judge whether it arrived or you assembled it. Assembling counts as a miss.
 *
 * Written fresh rather than by generalizing components/StemRecall.tsx. That
 * component carries four things this screen doesn't want — hands-free
 * playback, handwriting capture, the week's prompt-id practice flags, and the
 * repaso sub-flow — and it is the product's most consequential interaction
 * with no component test behind it. The CSS is shared verbatim; the logic is
 * not. No hands-free here either: it is the largest and most fragile part of
 * StemRecall and vocab doesn't need it.
 */
export function VocabRecall({
  words,
  onDone,
  onQuit,
}: {
  words: CoreWord[];
  onDone: (arrived: number, total: number) => void;
  onQuit: () => void;
}) {
  // Frozen at mount: judging a card rewrites its status, and a live deck would
  // renumber itself mid-run.
  const deck = useMemo(() => shuffle(words), [words]);

  const [i, setI] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [arrived, setArrived] = useState(0);

  const card = deck[i];

  const judge = useCallback(
    (didArrive: boolean) => {
      if (!card) return;
      recordVocabRecall(card.id, didArrive);
      const nextArrived = arrived + (didArrive ? 1 : 0);
      setArrived(nextArrived);
      if (i + 1 >= deck.length) {
        onDone(nextArrived, deck.length);
      } else {
        setI(i + 1);
        setRevealed(false);
      }
    },
    [card, arrived, i, deck.length, onDone],
  );

  if (!card) return null;

  return (
    <div className="fade-rise">
      <p className="mono-cap text-ink-mute">
        {i + 1} de {deck.length}
      </p>

      <div className="stem-recall-card">
        <p className="mono-cap text-ink-mute stem-recall-card__hint">
          {revealed ? "¿Llegó sola?" : "Dilo en voz alta"}
        </p>

        {/* The stimulus. Plain text, never <Gloss>: with the English toggle off
            <Gloss> renders null, and this card would go blank. */}
        <p className="stem-recall-card__english">{card.en}</p>

        {!revealed ? (
          <button
            type="button"
            className="stem-recall-reveal"
            onClick={() => setRevealed(true)}
          >
            <span className="stem-recall-reveal-label">Ver la respuesta</span>
          </button>
        ) : (
          <>
            <p className="stem-recall-card__stem">{card.es}</p>

            <div style={{ marginTop: "0.75rem" }}>
              <PlayButton
                text={card.es}
                contextBefore={card.example}
                label={`Oír ${card.es}`}
              />
            </div>

            <p
              className="font-display text-ink-soft"
              style={{ marginTop: "1rem", fontSize: "0.9375rem", lineHeight: 1.5 }}
            >
              {card.example}
            </p>
            <Gloss>{card.exampleEn}</Gloss>

            <div className="stem-recall-judge-row stem-recall-judge-row--duo">
              <button
                type="button"
                className="stem-recall-judge stem-recall-judge--zone"
                onClick={() => judge(true)}
              >
                <span className="stem-recall-judge-label">Llegó</span>
              </button>
              <button
                type="button"
                className="stem-recall-judge stem-recall-judge--mute"
                onClick={() => judge(false)}
              >
                <span className="stem-recall-judge-label">La armé</span>
              </button>
            </div>
          </>
        )}
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
