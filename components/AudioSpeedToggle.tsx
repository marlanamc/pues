"use client";

import { useAudioSpeed } from "@/hooks/useAudioSpeed";
import type { AudioSpeed } from "@/lib/store";

const options: { value: AudioSpeed; label: string }[] = [
  { value: "normal", label: "Normal" },
  { value: "slow", label: "Slow" },
];

export function AudioSpeedToggle() {
  const { speed, setSpeed } = useAudioSpeed();

  return (
    <div className="fixed inset-x-0 top-0 z-30 pointer-events-none">
      <div className="mx-auto flex w-full max-w-[520px] justify-end px-6 pt-3">
        <div
          className="pointer-events-auto inline-flex rounded-full border border-rule bg-bg/90 p-1 shadow-soft backdrop-blur-md"
          aria-label="Audio speed"
          role="group"
        >
          {options.map((option) => {
            const active = speed === option.value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => setSpeed(option.value)}
                aria-pressed={active}
                className="min-w-16 rounded-full px-3 py-1.5 text-[0.6875rem] font-medium transition-colors"
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
    </div>
  );
}
