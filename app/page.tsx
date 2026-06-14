"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { frameDays, totalDays } from "@/content/frames";
import { useStats } from "@/hooks/useStats";
import { StreakBadge } from "@/components/StreakBadge";
import { completeCurrentDay } from "@/lib/store";

function firstName() {
  return "Marlana";
}

export default function HomePage() {
  const { stats, hydrated } = useStats();
  const router = useRouter();
  const [completing, setCompleting] = useState(false);
  const today = frameDays[stats.currentDayIndex % totalDays];
  const dayNum = today.day.toString().padStart(2, "0");
  const greeting = (() => {
    const h = new Date().getHours();
    if (h < 12) return "Good morning";
    if (h < 18) return "Good afternoon";
    return "Good evening";
  })();

  return (
    <div className="space-y-10">
      <header className="space-y-6">
        <div className="flex items-start justify-between">
          <p className="text-caption text-ink-mute">Pues</p>
          <StreakBadge />
        </div>

        <div className="space-y-3">
          <h1 className="text-display-lg text-ink">
            {greeting}, {firstName()}.
          </h1>
          <p className="text-gloss">
            Let's build your Spanish, one thought at a time.
          </p>
        </div>

        <div className="space-y-2">
          <div className="day-pill">
            <span>Day {dayNum}</span>
            <span className="sep" aria-hidden />
            <span>{today.theme}</span>
          </div>
          <p className="text-gloss text-[0.8125rem]">{today.subtitle}</p>
        </div>
      </header>

      <section className="space-y-5">
        <div
          className="rounded-lg border border-rule bg-surface p-6"
          style={{ opacity: hydrated ? 1 : 0.6 }}
        >
          <div className="mb-5 space-y-1">
            <p className="font-display text-[1.25rem] text-ink">Today's Five</p>
            <p className="text-gloss text-[0.8125rem]">5 frames to practice</p>
          </div>
          <ul className="space-y-4">
            {today.frames.map((f) => (
              <li
                key={f.stem}
                className="flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="inline-block h-3.5 w-3.5 rounded-full border"
                    style={{ borderColor: "var(--ink-mute)" }}
                    aria-hidden
                  />
                  <span className="font-display text-[1.25rem] text-ink">
                    {f.stem}
                  </span>
                </div>
                <span className="text-ink-mute" aria-hidden>›</span>
              </li>
            ))}
          </ul>
        </div>

        <Link
          href="/flow/frame"
          className="block w-full rounded-lg bg-accent px-6 py-4 text-center font-medium text-bg transition-colors active:bg-accent-soft"
        >
          Start Day {dayNum}
        </Link>

        <button
          type="button"
          disabled={!hydrated || completing}
          onClick={() => {
            if (completing) return;
            const ok = window.confirm(
              `Mark Day ${dayNum} complete and move to the next day?`
            );
            if (!ok) return;
            setCompleting(true);
            completeCurrentDay(totalDays);
            router.refresh();
            window.location.reload();
          }}
          className="block w-full rounded-lg border border-rule bg-surface px-6 py-3 text-center font-medium text-ink transition-colors active:bg-bg disabled:opacity-50"
        >
          {completing ? "Saving…" : `Mark Day ${dayNum} complete`}
        </button>
      </section>
    </div>
  );
}
