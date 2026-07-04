"use client";

import { useTextSize } from "@/hooks/useTextSize";
import type { TextSize } from "@/lib/store";

const options: { value: TextSize; label: string }[] = [
  { value: "default", label: "Normal" },
  { value: "comfortable", label: "Large" },
  { value: "large", label: "XL" },
];

export function TextSizeToggle() {
  const { size, setSize } = useTextSize();

  return (
    <div
      className="inline-flex rounded-full border border-rule bg-bg/60 p-1"
      aria-label="Text size"
      role="group"
    >
      {options.map((option) => {
        const active = size === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setSize(option.value)}
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
