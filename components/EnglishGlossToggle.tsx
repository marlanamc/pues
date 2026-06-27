"use client";

import { usePhraseEnglishVisible } from "@/hooks/usePhraseEnglishVisible";

const options = [
  { value: false, label: "Off" },
  { value: true, label: "On" },
] as const;

export function EnglishGlossToggle() {
  const { visible, setVisible } = usePhraseEnglishVisible();

  return (
    <div
      className="inline-flex rounded-full border border-rule bg-bg/60 p-1"
      aria-label="English glosses"
      role="group"
    >
      {options.map((option) => {
        const active = visible === option.value;
        return (
          <button
            key={option.label}
            type="button"
            onClick={() => setVisible(option.value)}
            aria-pressed={active}
            className="min-w-12 rounded-full px-3 py-1.5 text-[0.6875rem] font-medium transition-colors"
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
  );
}
