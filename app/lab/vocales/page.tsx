"use client";

import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { LabHearIt } from "@/components/LabHearIt";
import { vowelPairs } from "@/content/lab";

export default function VocalesPage() {
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
              Vocales
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
        Spanish has five pure vowels — A, E, I, O, U — and each one sounds the
        same every time. No sliding, no diphthongs. Hear the difference that a
        single vowel makes.
      </p>

      <div className="tip-card">
        <span className="tip-card__label mono-cap">Cómo funciona</span>
        <p className="tip-card__body">
          You&apos;ll hear one word. Then choose which you heard.
          After your answer, you can compare both words side by side.
        </p>
      </div>

      <LabHearIt pairs={vowelPairs} />
    </div>
  );
}
