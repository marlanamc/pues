"use client";

import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { PlayButton } from "@/components/PlayButton";
import { jgWords } from "@/content/lab";

export default function JGPage() {
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
              J y G
            </span>
          }
          meta={
            <span className="mono-cap" style={{ color: "var(--accent)" }}>
              Pronuncia
            </span>
          }
        />
      </div>

      <p className="text-gloss">
        In Spanish, J always sounds like a strong English H — never the buzzy J
        of "jump." And G before E or I makes the exact same sound. Listen to
        each word. Then say it yourself.
      </p>

      <div className="tip-card">
        <span className="tip-card__label mono-cap">La regla</span>
        <p className="tip-card__body">
          J → always H sound (<em>José, trabajo, reloj</em>).
          G before E or I → same H sound (<em>gente, girar</em>).
          G before A, O, U → hard G like English "go" (<em>guerra, gato</em>).
        </p>
      </div>

      <ul className="space-y-3">
        {jgWords.map((item) => (
          <li
            key={item.word}
            className="rounded-[14px] border"
            style={{ borderColor: "var(--rule)", background: "var(--surface)" }}
          >
            <div className="flex items-center gap-4 px-5 py-4">
              <PlayButton
                text={item.word}
                label={`Escuchar: ${item.word}`}
                contextBefore="En español:"
              />
              <div className="flex-1 min-w-0">
                <span
                  className="font-display block"
                  style={{ fontSize: "1.375rem", color: "var(--ink)", letterSpacing: "-0.01em" }}
                >
                  {item.word}
                </span>
                <span className="mono-cap" style={{ color: "var(--accent)" }}>
                  sonido {item.sound}
                </span>
              </div>
            </div>
            {item.note && (
              <div
                className="border-t px-5 py-3"
                style={{ borderColor: "var(--rule)" }}
              >
                <p className="text-gloss">{item.note}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
