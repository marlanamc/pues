"use client";

import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { LabRealSpanish } from "@/components/LabRealSpanish";
import { realPairs } from "@/content/lab";

export default function RealPage() {
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
              Español Real
            </span>
          }
          meta={
            <span className="mono-cap" style={{ color: "var(--accent)" }}>
              Cómo se habla
            </span>
          }
        />
      </div>

      <section className="space-y-3">
        <p className="text-display-italic text-[1.0625rem]">
          How people actually talk.
        </p>
        <p className="text-gloss">
          The textbook version and the street version aren&apos;t always the same
          thing. Native speakers compress, merge, and drop sounds — especially
          between common words. This isn&apos;t incorrect Spanish. This is fluent
          Spanish.
        </p>
      </section>

      <div className="tip-card">
        <span className="tip-card__label mono-cap">Tu objetivo</span>
        <p className="tip-card__body">
          You don&apos;t need to speak this way yet. You just need to{" "}
          <em>recognize</em> it. That recognition is what closes the gap between
          classroom Spanish and real Spanish.
        </p>
      </div>

      <LabRealSpanish pairs={realPairs} />
    </div>
  );
}
