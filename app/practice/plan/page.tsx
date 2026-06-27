"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { PageHeader, Wordmark } from "@/components/PageHeader";
import { PlanSchedule } from "@/components/PlanSchedule";
import { speakDays } from "@/content/prompts";
import { useStats } from "@/hooks/useStats";

export default function PlanPage() {
  const { stats, hydrated } = useStats();
  const totalDays = speakDays.length;
  const currentDay = hydrated ? (stats.currentDayIndex % totalDays) + 1 : 1;

  return (
    <div
      className="space-y-6"
      style={{ "--zone": "var(--zone-practica)" } as CSSProperties}
    >
      <div className="space-y-3">
        <Link
          href="/practice"
          className="text-caption text-ink-mute hover:text-accent transition-colors min-h-[40px] inline-flex items-center"
        >
          ← Práctica
        </Link>
        <PageHeader
          title={<Wordmark>El plan</Wordmark>}
          meta={
            hydrated ? (
              <span className="mono-cap text-ink-soft">
                Día {String(currentDay).padStart(2, "0")} de {totalDays}
              </span>
            ) : undefined
          }
        />
        <span className="hairline" aria-hidden />
      </div>

      <PlanSchedule />
    </div>
  );
}
