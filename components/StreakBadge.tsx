"use client";

import { useStats } from "@/hooks/useStats";

export function StreakBadge() {
  const { stats, hydrated } = useStats();
  const count = stats.daysPracticed;

  return (
    <div
      className="inline-flex items-center gap-1.5"
      style={{ opacity: hydrated ? 1 : 0.5 }}
      aria-label={`${count} day streak`}
    >
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        aria-hidden
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3c1 3 4 5 4 9a4 4 0 1 1-8 0c0-2 1-3 2-4-1 5 2 5 2 5s0-3 0-10Z" />
      </svg>
      <span className="font-display text-[1.0625rem] leading-none text-accent">
        {count}
      </span>
    </div>
  );
}
