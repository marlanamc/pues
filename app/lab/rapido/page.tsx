"use client";

import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { PlayButton } from "@/components/PlayButton";
import { fastPhrases } from "@/content/lab";

export default function RapidoPage() {
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
              Español Rápido
            </span>
          }
          meta={
            <span className="mono-cap" style={{ color: "var(--accent)" }}>
              Español Real
            </span>
          }
        />
      </div>

      <p className="text-gloss">
        Native speakers aren&apos;t speaking faster — they&apos;re doing something
        different. Words merge, vowels blur, syllables disappear. This is
        called connected speech, and once you hear it, you can&apos;t un-hear it.
      </p>

      <div className="tip-card">
        <span className="tip-card__label mono-cap">Enlace</span>
        <p className="tip-card__body">
          When a word ends in a vowel and the next starts with one, they link
          together into a single syllable. <em>Voy a ir</em> becomes{" "}
          <em>Voyair</em>. This is not sloppiness — it&apos;s the rhythm of
          the language.
        </p>
      </div>

      <ul className="space-y-3">
        {fastPhrases.map((phrase, i) => (
          <li
            key={i}
            className="rounded-[14px] border overflow-hidden"
            style={{ borderColor: "var(--rule)", background: "var(--surface)" }}
          >
            {/* Written form */}
            <div
              className="flex items-center gap-4 px-5 py-4 border-b"
              style={{ borderColor: "var(--rule)" }}
            >
              <PlayButton
                text={phrase.written}
                label={`Escuchar versión formal: ${phrase.written}`}
                contextBefore="En español:"
              />
              <div className="flex-1 min-w-0">
                <p className="mono-cap mb-1" style={{ color: "var(--ink-mute)" }}>
                  Lo que ves
                </p>
                <p
                  className="font-display leading-snug"
                  style={{ fontSize: "1.0625rem", color: "var(--ink)" }}
                >
                  {phrase.written}
                </p>
              </div>
            </div>

            {/* Spoken form */}
            <div
              className="flex items-center gap-4 px-5 py-4"
              style={{
                background: "color-mix(in oklab, var(--accent) 5%, var(--surface))",
              }}
            >
              <PlayButton
                text={phrase.written}
                label={`Escuchar como suena: ${phrase.spoken}`}
              />
              <div className="flex-1 min-w-0">
                <p className="mono-cap mb-1" style={{ color: "var(--accent)" }}>
                  Lo que oyes
                </p>
                <p
                  className="font-display leading-snug"
                  style={{
                    fontSize: "1.0625rem",
                    color: "var(--ink)",
                    fontStyle: "italic",
                  }}
                >
                  {phrase.spoken}
                </p>
              </div>
            </div>

            {phrase.note && (
              <div
                className="border-t px-5 py-3"
                style={{ borderColor: "var(--rule)" }}
              >
                <p className="text-gloss">{phrase.note}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
