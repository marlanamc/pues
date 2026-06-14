"use client";

import { useThemeMode } from "@/hooks/useThemeMode";
import type { ThemeMode } from "@/lib/store";

const options: { value: ThemeMode; label: string }[] = [
  { value: "light", label: "Day" },
  { value: "dark", label: "Night" },
];

export function ThemeModeToggle() {
  const { mode, setMode } = useThemeMode();

  return (
    <div
      className="inline-flex rounded-full border border-rule bg-bg/60 p-1"
      aria-label="Color theme"
      role="group"
    >
      {options.map((option) => {
        const active = mode === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setMode(option.value)}
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
  );
}
