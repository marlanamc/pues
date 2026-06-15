"use client";

import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { LabHearIt } from "@/components/LabHearIt";
import { rrPairs } from "@/content/lab";

export default function RRPage() {
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
              R y RR
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
        The single R is a quick tap — like the D in the English word "butter."
        The double RR is a sustained trill. One letter apart. Completely
        different words.
      </p>

      <div className="tip-card">
        <span className="tip-card__label mono-cap">Cómo funciona</span>
        <p className="tip-card__body">
          You&apos;ll hear one word — either the R or the RR version. Choose
          which you heard. Then compare both.
        </p>
      </div>

      <LabHearIt pairs={rrPairs} />
    </div>
  );
}
