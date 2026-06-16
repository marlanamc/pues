"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import type { CSSProperties } from "react";
import { SettingsMenuButton } from "@/components/SettingsMenu";
import { SentenceBuilderGame } from "@/components/SentenceBuilderGame";
import { getSbProgress, type SbProgress } from "@/lib/store";
import {
  cardsForLevel,
  levelCardCount,
  sentenceBuilderHowTo,
  sentenceBuilderLevels,
  sentenceBuilderOverview,
} from "@/content/sentenceBuilder";

export default function SentenceBuilderPage() {
  const [activeLevel, setActiveLevel] = useState<string | null>(null);
  const [progress, setProgress] = useState<SbProgress>({});

  const refresh = useCallback(() => setProgress(getSbProgress()), []);

  useEffect(() => {
    refresh();
    window.addEventListener("pues:stats-change", refresh);
    window.addEventListener("focus", refresh);
    return () => {
      window.removeEventListener("pues:stats-change", refresh);
      window.removeEventListener("focus", refresh);
    };
  }, [refresh]);

  if (activeLevel) {
    return (
      <div
        className="lg:w-full lg:max-w-2xl"
        style={{ "--zone": "var(--zone-practica)" } as CSSProperties}
      >
        <SentenceBuilderGame
          cards={cardsForLevel(activeLevel)}
          onQuit={() => {
            setActiveLevel(null);
            refresh();
          }}
        />
      </div>
    );
  }

  const levels = sentenceBuilderLevels;
  const orderedNames = levels.map((l) => l.name);
  const isUnlocked = (i: number) =>
    i === 0 || progress[orderedNames[i - 1]]?.completed === true;

  // The level the big CTA resumes: first unlocked + not-yet-completed level.
  const nextIndex = levels.findIndex(
    (l, i) => isUnlocked(i) && !progress[l.name]?.completed
  );
  const ctaIndex = nextIndex === -1 ? 0 : nextIndex;
  const ctaLevel = levels[ctaIndex];
  const hasProgress = Object.keys(progress).length > 0;

  return (
    <div
      className="space-y-8 lg:mx-auto lg:max-w-2xl"
      style={{ "--zone": "var(--zone-practica)" } as CSSProperties}
    >
      <header className="flex items-center justify-between">
        <Link
          href="/practice"
          className="text-caption text-ink-mute transition-colors hover:text-accent min-h-[40px] inline-flex items-center"
        >
          ← Práctica
        </Link>
        <p className="text-caption text-ink-mute">{sentenceBuilderOverview.pill}</p>
        <SettingsMenuButton />
      </header>

      {/* Hero */}
      <section className="space-y-3">
        <p className="day-pill">Construye la frase</p>
        <h1 className="text-display-lg text-ink">{sentenceBuilderOverview.title}</h1>
      </section>

      {/* How to play */}
      <section className="space-y-3">
        <p className="mono-cap">Cómo se juega</p>
        <ol className="rounded-lg border border-rule bg-surface divide-y divide-rule overflow-hidden">
          {sentenceBuilderHowTo.map((step, i) => (
            <li key={step.title} className="flex items-start gap-3.5 px-4 py-3.5">
              <span
                aria-hidden
                className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-display text-base"
                style={{
                  background: "color-mix(in oklab, var(--accent) 13%, var(--surface))",
                  color: "var(--accent)",
                }}
              >
                {i + 1}
              </span>
              <span className="min-w-0">
                <span className="font-display text-[1.0625rem] text-ink leading-snug block">
                  {step.title}
                </span>
                <span className="text-sm text-ink-mute leading-snug block mt-0.5">
                  {step.body}
                </span>
              </span>
            </li>
          ))}
        </ol>
      </section>

      {/* Levels */}
      <section className="space-y-3">
        <p className="mono-cap">Niveles</p>
        <ul className="space-y-2.5">
          {levels.map((level, i) => {
            const unlocked = isUnlocked(i);
            const completed = progress[level.name]?.completed === true;
            const count = levelCardCount(level.name);

            const row = (
              <>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span
                      aria-hidden
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-display text-sm"
                      style={{
                        background: unlocked
                          ? "var(--accent)"
                          : "var(--surface-sunk)",
                        color: unlocked ? "var(--accent-ink)" : "var(--ink-mute)",
                      }}
                    >
                      {completed ? "✓" : i + 1}
                    </span>
                    <span className="min-w-0">
                      <span className="font-display text-[1.0625rem] text-ink leading-tight block truncate">
                        {level.name}
                      </span>
                      <span className="text-sm text-ink-soft leading-tight block">
                        {level.tagline}
                      </span>
                    </span>
                  </div>
                  <span
                    className="mono-cap shrink-0 text-right"
                    style={{ color: unlocked ? "var(--accent)" : "var(--ink-mute)" }}
                  >
                    {unlocked ? `${count} frases` : "Bloqueado"}
                  </span>
                </div>

                <p className="text-sm text-ink-mute leading-relaxed mt-3">
                  {unlocked ? level.blurb : "Completa el nivel anterior para abrirlo."}
                </p>

                <ul className="mt-2.5 flex flex-wrap gap-1.5">
                  {level.patterns.map((p) => (
                    <li
                      key={p}
                      className="rounded-full border border-rule px-2.5 py-1 text-xs text-ink-soft"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </>
            );

            const rowStyle: CSSProperties | undefined = unlocked
              ? {
                  borderColor: "color-mix(in oklab, var(--accent) 45%, var(--rule))",
                  background: "color-mix(in oklab, var(--accent) 8%, var(--surface))",
                }
              : undefined;

            return (
              <li key={level.name}>
                {unlocked ? (
                  <button
                    type="button"
                    onClick={() => setActiveLevel(level.name)}
                    className="w-full rounded-lg border p-4 text-left transition-colors hover:border-accent"
                    style={rowStyle}
                  >
                    {row}
                  </button>
                ) : (
                  <div className="rounded-lg border border-rule bg-surface p-4 opacity-70">
                    {row}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </section>

      <button
        type="button"
        onClick={() => setActiveLevel(ctaLevel.name)}
        className="btn-primary btn-primary--spectrum mx-auto w-full max-w-xs justify-center gap-3"
      >
        <span className="lab">
          {hasProgress ? "Continuar" : "Empezar"} · {ctaLevel.name}
        </span>
        <span aria-hidden>→</span>
      </button>
    </div>
  );
}
