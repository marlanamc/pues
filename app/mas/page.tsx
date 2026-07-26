"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { Gloss } from "@/components/Gloss";
import { PageHeader, Wordmark } from "@/components/PageHeader";
import { gameCount } from "@/content/games";
import { masPracticaItems } from "@/content/masPractica";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export default function MasPage() {
  return (
    <div
      className="fade-rise"
      style={{ paddingBottom: 96, "--zone": "var(--zone-practica)" } as CSSProperties}
    >
      <PageHeader title={<Wordmark>Más</Wordmark>} />

      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <section style={{ marginTop: 24 }}>
          <p className="mono-cap" style={{ marginBottom: 4 }}>Más práctica</p>
          <Gloss>More practice</Gloss>
          <p
            className="font-display text-ink-soft"
            style={{ fontSize: 15, lineHeight: 1.45, margin: "10px 0 0" }}
          >
            Repaso del día — frases y lectura, sin contar como juego.
          </p>
          <Gloss>Review the day — sentences and reading, not a game.</Gloss>

          {masPracticaItems.map((item) => (
            <ExtraRow
              key={item.href}
              href={item.href}
              title={item.label}
              titleEn={item.descriptionEn}
              meta={item.meta ?? ""}
              metaEn={item.metaEn ?? ""}
            />
          ))}
        </section>

        <section style={{ marginTop: 36 }}>
          <p className="mono-cap" style={{ marginBottom: 4 }}>Extras</p>
          <Gloss>Optional companions</Gloss>
          <p
            className="font-display text-ink-soft"
            style={{ fontSize: 15, lineHeight: 1.45, margin: "10px 0 0" }}
          >
            Compañeros opcionales — nunca un segundo curso.
          </p>
          <Gloss>Optional companions — never a second course.</Gloss>

          <ExtraRow
            href="/practice/games"
            title="Juegos"
            titleEn="Games"
            meta={`${gameCount} juegos`}
            metaEn={`${gameCount} games`}
          />
          <ExtraRow
            href="/situations"
            title="Lugares"
            titleEn="Places"
            meta="escenas reales"
            metaEn="real-life scenes"
          />
          <ExtraRow
            href="/lab"
            title="El oído"
            titleEn="The ear"
            meta="pronunciación"
            metaEn="pronunciation"
          />
          <ExtraRow
            href="/guides"
            title="Guías · Referencia"
            titleEn="Guides · Reference"
            meta="buscar un patrón"
            metaEn="look up a pattern"
          />
        </section>
      </div>
    </div>
  );
}

function ExtraRow({
  href,
  title,
  titleEn,
  meta,
  metaEn,
  metaAccent,
}: {
  href: string;
  title: string;
  titleEn: string;
  meta: string;
  metaEn: string;
  metaAccent?: boolean;
}) {
  return (
    <Link
      href={href}
      className="flex items-center transition-colors active:bg-surface-sunk"
      style={{ gap: 12, padding: "16px 2px", borderTop: "1px solid var(--rule)" }}
    >
      <span className="flex flex-col" style={{ flex: 1, minWidth: 0 }}>
        <span className="font-display text-ink" style={{ fontSize: 17 }}>
          {title}
        </span>
        <Gloss>{titleEn}</Gloss>
      </span>
      {meta && (
        <span className="flex flex-col items-end" style={{ flexShrink: 0 }}>
          <span
            className="mono-cap"
            style={{ color: metaAccent ? "var(--accent)" : undefined }}
          >
            {meta}
          </span>
          {metaEn && <Gloss>{metaEn}</Gloss>}
        </span>
      )}
      <svg
        viewBox="0 0 24 24"
        width="14"
        height="14"
        aria-hidden
        {...stroke}
        style={{ color: "var(--ink-mute)", flexShrink: 0 }}
      >
        <path d="M9 6l6 6-6 6" />
      </svg>
    </Link>
  );
}
