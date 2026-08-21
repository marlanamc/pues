"use client";

import { useCallback, useMemo, useState } from "react";
import { PlayButton } from "@/components/PlayButton";
import type { CoreWord } from "@/content/vocab";
import { getVocabProgress, markVocabKnown, markVocabLearning } from "@/lib/store";

/**
 * El barrido — the triage sweep.
 *
 * One word at a time with everything visible: the Spanish, the English, the
 * example. That is deliberate and it is *not* the drill. The question here is
 * "do I own this word", which is a recognition question, and hiding the answer
 * would turn it into a production test — which is what the drill is for. Two
 * screens, two different questions.
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
        {/* Plain text, never <Gloss> — on this screen the English is half the
            question, not an optional gloss, so the EN toggle must not remove it. */}
        <p className="stem-recall-card__english" style={{ marginTop: "0.5rem" }}>
          {card.en}
        </p>

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
