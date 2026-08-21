"use client";

import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { Gloss } from "@/components/Gloss";
import { PlayButton } from "@/components/PlayButton";
import { VocabCounts } from "@/components/VocabCounts";
import { VocabRecall } from "@/components/VocabRecall";
import { VocabTriage } from "@/components/VocabTriage";
import { useVocabProgress } from "@/hooks/useVocabProgress";
import type { VocabTheme } from "@/content/vocab";
import { resetVocabTheme } from "@/lib/store";

type Mode = "idle" | "barrido" | "repaso";

/**
 * One theme: browse the words, sweep them, drill what's left.
 *
 * Mode is local state rather than a route or a query param, matching
 * app/practice/ser-estar/page.tsx — the sweep and the drill are two states of
 * this screen, not two places you can be linked to.
 */
export function VocabThemeScreen({ theme }: { theme: VocabTheme }) {
  const { progress, refresh } = useVocabProgress();
  const [mode, setMode] = useState<Mode>("idle");
  const [note, setNote] = useState<string | null>(null);

  const ids = useMemo(() => theme.words.map((w) => w.id), [theme]);
  const learning = useMemo(
    () => theme.words.filter((w) => progress[w.id]?.status === "learning"),
    [theme, progress],
  );
  const swept = ids.some((id) => progress[id]);

  const finish = useCallback(
    (message: string) => {
      setMode("idle");
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
      <header className="flex items-center justify-between">
        <Link
          href="/palabras"
          className="text-caption text-ink-mute hover:text-accent transition-colors min-h-[44px] inline-flex items-center"
        >
          ← Las palabras
        </Link>
        <span className="text-caption text-ink-mute">{theme.words.length} palabras</span>
      </header>

      <section style={{ marginTop: 8 }}>
        <h1 className="text-display-lg text-ink">{theme.label}</h1>
        <Gloss>{theme.labelEn}</Gloss>
        <p style={{ marginTop: 10 }}>
          <VocabCounts ids={ids} progress={progress} />
        </p>
      </section>

      {mode === "barrido" && (
        <section style={{ marginTop: 28 }}>
          <VocabTriage
            words={theme.words}
            onDone={(n) =>
              finish(
                n === 0
                  ? "Nada para la lista. Ya te las sabes todas."
                  : n === 1
                    ? "Una palabra a la lista."
                    : `${n} palabras a la lista.`,
              )
            }
            onQuit={() => finish("")}
          />
        </section>
      )}

      {mode === "repaso" && (
        <section style={{ marginTop: 28 }}>
          <VocabRecall
            words={learning}
            onDone={(arrived, total) => finish(`Llegaron ${arrived} de ${total}.`)}
            onQuit={() => finish("")}
          />
        </section>
      )}

      {mode === "idle" && (
        <>
          {note && (
            <p className="stem-recall-body" style={{ marginTop: 20 }}>
              {note}
            </p>
          )}

          <div style={{ display: "flex", gap: 8, marginTop: 24 }}>
            <button
              type="button"
              className="stem-recall-start"
              onClick={() => {
                setNote(null);
                setMode("barrido");
              }}
            >
              <span className="stem-recall-start-label">Barrido</span>
            </button>
            {learning.length > 0 && (
              <button
                type="button"
                className="stem-recall-start"
                onClick={() => {
                  setNote(null);
                  setMode("repaso");
                }}
              >
                <span className="stem-recall-start-label">
                  Repaso · {learning.length}
                </span>
              </button>
            )}
          </div>
          <p className="text-caption text-ink-mute" style={{ marginTop: 10 }}>
            {learning.length > 0
              ? "Barre el tema otra vez, o repasa lo que quedó en la lista."
              : "Marca lo que ya sabes; lo demás pasa a la lista."}
          </p>

          <div className="hairline" style={{ margin: "28px 0 0" }} />

          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {theme.words.map((w) => {
              const state = progress[w.id];
              return (
                <li
                  key={w.id}
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                    padding: "14px 0",
                    borderBottom: "1px solid var(--rule)",
                  }}
                >
                  <span style={{ marginTop: 2 }}>
                    <PlayButton
                      text={w.es}
                      contextBefore={w.example}
                      label={`Oír ${w.es}`}
                    />
                  </span>
                  <span style={{ minWidth: 0, flex: 1 }}>
                    <span className="week-stems-stem">{w.es}</span>
                    {" "}
                    <span className="week-stems-gloss">{w.en}</span>
                    <span
                      className="font-display text-ink-soft"
                      style={{
                        display: "block",
                        marginTop: 6,
                        fontSize: "0.9375rem",
                        lineHeight: 1.5,
                      }}
                    >
                      {w.example}
                    </span>
                    <Gloss>{w.exampleEn}</Gloss>
                  </span>
                  {/* Only "en marcha" is marked. A word you know gets no
                      checkmark and no color: an affirmative that lights up is
                      the scoreboard this product doesn't keep. */}
                  {state?.status === "learning" && (
                    <span className="mono-cap" style={{ color: "var(--zone)" }}>
                      en marcha
                    </span>
                  )}
                </li>
              );
            })}
          </ul>

          {swept && (
            <p style={{ marginTop: 24 }}>
              <button
                type="button"
                onClick={() => {
                  resetVocabTheme(ids);
                  setNote(null);
                  refresh();
                }}
                className="text-caption text-ink-mute hover:text-accent transition-colors min-h-[44px] inline-flex items-center"
              >
                Barrer el tema desde cero
              </button>
            </p>
          )}
        </>
      )}
    </div>
  );
}
