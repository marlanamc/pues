"use client";

import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { Gloss } from "@/components/Gloss";
import { PageHeader, Wordmark } from "@/components/PageHeader";
import { VocabCounts } from "@/components/VocabCounts";
import { VocabRecall } from "@/components/VocabRecall";
import { useVocabProgress } from "@/hooks/useVocabProgress";
import { VOCAB_TOTAL, vocabThemes, vocabWords } from "@/content/vocab";
import { shuffle } from "@/lib/shuffle";

/**
 * Las palabras — the index.
 *
 * Twenty-seven themes as hairline rows rather than cards: DESIGN.md reaches
 * for cards last, and twenty-seven tinted icon circles would be decoration in
 * a zone that already has a hue.
 */

/**
 * Cards in one "Repaso general" run. The cap is the point, not a limitation —
 * an uncapped deck of two hundred words is precisely the activation-energy
 * wall PRODUCT.md warns about. Another round is always one tap away.
 */
const GENERAL_DECK_SIZE = 20;

export default function VocabIndexPage() {
  const { progress, refresh } = useVocabProgress();
  const [drilling, setDrilling] = useState(false);
  const [note, setNote] = useState<string | null>(null);

  const learning = useMemo(
    () => vocabWords.filter((w) => progress[w.id]?.status === "learning"),
    [progress],
  );

  // Frozen for the run: judging rewrites status, so a live list would shrink
  // under the deck mid-drill.
  const [deck, setDeck] = useState<typeof learning>([]);

  const start = useCallback(() => {
    setNote(null);
    setDeck(shuffle(learning).slice(0, GENERAL_DECK_SIZE));
    setDrilling(true);
  }, [learning]);

  const finish = useCallback(
    (message: string) => {
      setDrilling(false);
      setNote(message);
      refresh();
    },
    [refresh],
  );

  return (
    <div
      className="page-column fade-rise"
      style={{ paddingBottom: 96, "--zone": "var(--zone-practica)" } as CSSProperties}
    >
      <PageHeader
        title={<Wordmark>Las palabras</Wordmark>}
        meta={<span className="text-caption">{VOCAB_TOTAL} palabras</span>}
      />

      {drilling ? (
        <section style={{ marginTop: 24 }}>
          <VocabRecall
            words={deck}
            onDone={(arrived, total) => finish(`Llegaron ${arrived} de ${total}.`)}
            onQuit={() => finish("")}
          />
        </section>
      ) : (
        <>
          <section style={{ marginTop: 4 }}>
            <p
              className="font-display text-ink-soft"
              style={{ fontSize: 15, lineHeight: 1.45, margin: 0, maxWidth: "34rem" }}
            >
              Las palabras que sostienen una frase cualquiera. Barre un tema para
              separar lo que ya sabes, y repasa lo que quede.
            </p>
            <Gloss>
              The words that hold up an ordinary sentence. Sweep a theme to sort out
              what you already know, and drill whatever&apos;s left.
            </Gloss>
          </section>

          {note && (
            <p className="stem-recall-body" style={{ marginTop: 18 }}>
              {note}
            </p>
          )}

          {learning.length > 0 && (
            <div style={{ marginTop: 22, maxWidth: "22rem" }}>
              <button type="button" className="stem-recall-start" onClick={start}>
                <span className="stem-recall-start-label">
                  Repaso general · {Math.min(learning.length, GENERAL_DECK_SIZE)}
                </span>
              </button>
              <p className="text-caption text-ink-mute" style={{ marginTop: 8 }}>
                {learning.length} en marcha entre todos los temas.
              </p>
            </div>
          )}

          <div className="hairline" style={{ margin: "26px 0 0" }} />

          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {vocabThemes.map((t) => (
              <li key={t.slug} style={{ borderBottom: "1px solid var(--rule)" }}>
                <Link
                  href={`/palabras/${t.slug}`}
                  className="hover:text-accent transition-colors"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    minHeight: 44,
                    padding: "14px 0",
                  }}
                >
                  <span style={{ minWidth: 0 }}>
                    <span className="week-day-title">{t.label}</span>
                    <Gloss>{t.labelEn}</Gloss>
                  </span>
                  <span style={{ textAlign: "right", flexShrink: 0 }}>
                    <VocabCounts
                      ids={t.words.map((w) => w.id)}
                      progress={progress}
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
