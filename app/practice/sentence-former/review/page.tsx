"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { SettingsMenuButton } from "@/components/SettingsMenu";
import {
  deleteSentenceFormerEntry,
  listSentenceFormerEntries,
  type SentenceFormerEntry,
} from "@/lib/store";

const SERIF = "var(--font-display)";
const MONO = "var(--font-mono)";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("es", { month: "short", day: "numeric" });
}

export default function SentenceFormerReviewPage() {
  const [entries, setEntries] = useState<SentenceFormerEntry[]>([]);

  const refresh = useCallback(() => setEntries(listSentenceFormerEntries()), []);

  useEffect(() => {
    refresh();
    window.addEventListener("pues:stats-change", refresh);
    return () => window.removeEventListener("pues:stats-change", refresh);
  }, [refresh]);

  return (
    <div className="space-y-5 lg:mx-auto lg:w-full lg:max-w-2xl">
      <header className="flex items-center justify-between">
        <Link
          href="/practice/sentence-former"
          className="text-caption text-ink-mute transition-colors hover:text-accent min-h-[40px] inline-flex items-center"
        >
          ← Formar la frase
        </Link>
        <SettingsMenuButton />
      </header>

      <section className="space-y-1">
        <p style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.13em", textTransform: "uppercase", color: "var(--ink-mute)" }}>
          Mis frases
        </p>
        <h1 style={{ fontFamily: SERIF, fontWeight: 300, fontSize: 28, color: "var(--ink)" }}>
          Frases guardadas
        </h1>
        <p style={{ fontSize: 13, color: "var(--ink-soft)" }}>
          Nadie las revisa todavía — es solo tu propio registro de lo que escribiste.
        </p>
      </section>

      {entries.length === 0 ? (
        <p style={{ fontSize: 13.5, color: "var(--ink-mute)", padding: "20px 0" }}>
          Todavía no guardaste ninguna frase en modo Escribir.
        </p>
      ) : (
        <ul style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {entries.map((entry) => (
            <li
              key={entry.id}
              style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, padding: "12px 14px", background: "var(--surface)", border: "1px solid var(--rule)", borderRadius: 12 }}
            >
              <div style={{ minWidth: 0 }}>
                <p style={{ fontFamily: SERIF, fontSize: 16, color: "var(--ink)", margin: 0 }}>{entry.text}</p>
                <p style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ink-mute)", margin: "6px 0 0" }}>
                  Día {entry.day} · {formatDate(entry.createdAt)}
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  deleteSentenceFormerEntry(entry.id);
                  refresh();
                }}
                aria-label="Eliminar"
                style={{ flexShrink: 0, background: "none", border: "none", color: "var(--ink-mute)", cursor: "pointer", padding: 4 }}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
