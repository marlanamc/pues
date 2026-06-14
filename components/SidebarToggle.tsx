"use client";

import { useSidebarVisible } from "@/hooks/useSidebarVisible";

const options = [
  { value: true, label: "Show" },
  { value: false, label: "Hide" },
] as const;

export function SidebarToggle() {
  const { visible, setVisible } = useSidebarVisible();

  return (
    <div
      className="inline-flex rounded-full border border-rule bg-bg/60 p-1"
      aria-label="Desktop sidebar"
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
