"use client";

import { useState } from "react";
import Link from "next/link";
import { PlayButton } from "@/components/PlayButton";
import { SettingsMenuButton } from "@/components/SettingsMenu";
import { frequentVerbs } from "@/content/frequentVerbs";

export default function FrequentVerbsPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  function toggleVerb(id: string) {
    setSelectedId((current) => (current === id ? null : id));
  }

  return (
    <div className="confusions-page space-y-8 lg:mx-auto lg:max-w-[640px]">
      <header className="flex items-center justify-between">
        <Link
          href="/guides/verbs"
          className="text-caption text-ink-mute hover:text-accent transition-colors min-h-[40px] inline-flex items-center"
        >
          ← Verbos
        </Link>
        <p className="text-caption text-ink-mute">Frecuentes</p>
        <SettingsMenuButton />
      </header>

      <section className="space-y-3">
        <p className="day-pill">Top 20</p>
        <h1 className="text-display-lg text-ink">The verbs you&apos;ll hear most.</h1>
        <p className="text-gloss">
          Tap a verb to see the present tense below. Listen, then say each row
          out loud once.
        </p>
      </section>

      <ul className="rounded-lg border border-rule bg-surface divide-y divide-rule overflow-hidden">
        {frequentVerbs.map((verb) => {
          const isOpen = selectedId === verb.id;

          return (
            <li key={verb.id}>
              <div
                className="flex items-center gap-4 px-5 py-4 transition-colors"
                style={{
                  background: isOpen
                    ? "color-mix(in oklab, var(--accent) 8%, var(--surface))"
                    : undefined,
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleVerb(verb.id)}
                  aria-expanded={isOpen}
                  className="flex flex-1 min-w-0 items-center gap-3 text-left"
                >
                  <span className="flex-1 min-w-0">
                    <span className="font-display text-[1.125rem] text-ink leading-tight block">
                      {verb.infinitive}
                    </span>
                    <span className="text-sm text-ink-mute leading-snug block mt-0.5">
                      {verb.english}
                    </span>
                  </span>
                  <span
                    className="text-ink-mute shrink-0 transition-transform"
                    style={{
                      transform: isOpen ? "rotate(-90deg)" : "rotate(90deg)",
                    }}
                    aria-hidden
                  >
                    ›
                  </span>
                </button>
                <PlayButton
                  text={verb.infinitive}
                  label={`Play ${verb.infinitive}`}
                  contextBefore="El verbo "
                />
              </div>

              {isOpen && (
                <div className="border-t border-rule bg-surface-sunk px-5 py-5 space-y-4">
                  {verb.note && (
                    <p className="text-sm text-ink-mute leading-relaxed">
                      {verb.note}
                    </p>
                  )}

                  <div className="space-y-2">
                    <p className="text-caption text-accent">Presente</p>
                    <ul className="space-y-2">
                      {verb.present.map((row) => (
                        <li
                          key={row.pronoun}
                          className="flex items-center gap-3 py-1"
                        >
                          <PlayButton text={row.form} label={`Play ${row.form}`} />
                          <div className="flex flex-1 items-baseline justify-between gap-3 min-w-0">
                            <span className="text-caption text-ink-mute shrink-0">
                              {row.pronoun}
                            </span>
                            <span className="font-display text-[1.0625rem] text-ink">
                              {row.form}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
