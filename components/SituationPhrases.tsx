"use client";

import { PlayButton } from "@/components/PlayButton";
import { usePhraseEnglishVisible } from "@/hooks/usePhraseEnglishVisible";
import type { Phrase } from "@/content/situations";

export function SituationPhrases({ phrases }: { phrases: Phrase[] }) {
  const { visible, setVisible } = usePhraseEnglishVisible();

  return (
    <section aria-labelledby="phrases-heading" className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <span className="hairline-copper" aria-hidden />
          <h2 id="phrases-heading" className="text-caption text-ink-mute">
            Phrases
          </h2>
        </div>
        <div
          className="inline-flex shrink-0 rounded-full border border-rule bg-bg/60 p-1"
          aria-label="English translations"
          role="group"
        >
          {(
            [
              { value: false, label: "Hide" },
              { value: true, label: "Show" },
            ] as const
          ).map((option) => {
            const active = visible === option.value;
            return (
              <button
                key={option.label}
                type="button"
                onClick={() => setVisible(option.value)}
                aria-pressed={active}
                className="min-w-14 rounded-full px-3 py-1.5 text-[0.6875rem] font-medium transition-colors"
                style={{
                  background: active ? "var(--accent)" : "transparent",
                  color: active ? "var(--bg)" : "var(--ink-mute)",
                }}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      <ul className="space-y-6">
        {phrases.map((p) => (
          <li key={p.es}>
            <div className="flex items-start gap-3">
              <PlayButton text={p.es} />
              <div className="flex-1 min-w-0">
                <p className="font-display text-[1.375rem] leading-snug text-ink">
                  {p.es}
                </p>
                {visible && <p className="mt-1 text-gloss">{p.en}</p>}
                {p.note && (
                  <p className="mt-2 text-sm text-ink-mute">
                    <span className="text-caption text-accent mr-2">Note</span>
                    {p.note}
                  </p>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
