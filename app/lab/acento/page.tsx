"use client";

import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { LabHearIt } from "@/components/LabHearIt";
import { acentoPairs } from "@/content/lab";

export default function AcentoPage() {
  return (
    <div className="space-y-6 pb-28 lg:pb-8 fade-rise">
      <div className="space-y-1">
        <Link
          href="/lab"
          className="text-sm transition-colors"
          style={{ color: "var(--ink-mute)" }}
        >
          ← Lab
        </Link>
        <PageHeader
          title={
            <span className="font-display" style={{ fontSize: "1.375rem", color: "var(--ink)" }}>
              Acento
            </span>
          }
          meta={
            <span className="mono-cap" style={{ color: "var(--accent)" }}>
              Escucha
            </span>
          }
        />
      </div>

      <p className="text-gloss">
        In Spanish, stress is meaning. One accent mark shifts where the weight
        falls — and changes the word completely. This section is about hearing
        where the stress lands.
      </p>

      <div className="tip-card">
        <span className="tip-card__label mono-cap">Cómo funciona</span>
        <p className="tip-card__body">
          You&apos;ll hear one word. Listen for where the stress falls, then
          choose which version you heard.
        </p>
      </div>

      <LabHearIt pairs={acentoPairs} />
    </div>
  );
}
