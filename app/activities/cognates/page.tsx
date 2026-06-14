"use client";

import { useState } from "react";
import Link from "next/link";
import { PlayButton } from "@/components/PlayButton";
import {
  cognatePatterns,
  cognateThemes,
  falseFriends,
} from "@/content/cognates";

type Tab = "patterns" | "true" | "false";

export default function CognatesPage() {
  const [tab, setTab] = useState<Tab>("patterns");

  return (
    <div className="space-y-8">
      <header className="flex items-center justify-between">
        <Link
          href="/activities"
          className="text-caption text-ink-mute hover:text-accent transition-colors min-h-[40px] inline-flex items-center"
        >
          ← Activities
        </Link>
        <p className="text-caption text-ink-mute">Cognates</p>
        <span className="w-12" aria-hidden />
      </header>

      <div className="space-y-2">
        <h1 className="text-display-lg text-ink">Free vocabulary.</h1>
        <p className="text-gloss">
          Words you almost already know — plus a few that lie to you.
        </p>
      </div>

      <div className="rounded-full border border-rule bg-surface p-1 flex">
        {(
          [
            { key: "patterns", label: "Patterns" },
            { key: "true", label: "Cognates" },
            { key: "false", label: "False friends" },
          ] as { key: Tab; label: string }[]
        ).map((t) => {
          const active = tab === t.key;
          return (
            <button
              key={t.key}
              type="button"
              onClick={() => setTab(t.key)}
              className="flex-1 rounded-full py-2 text-sm font-medium transition-colors"
              style={{
                background: active ? "var(--accent)" : "transparent",
                color: active ? "var(--bg)" : "var(--ink-mute)",
              }}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {tab === "patterns" && <PatternsView />}
      {tab === "true" && <ThemesView />}
      {tab === "false" && <FalseFriendsView />}
    </div>
  );
}

/* ─── Patterns ──────────────────────────────────────────── */

function PatternsView() {
  return (
    <ul className="space-y-4">
      {cognatePatterns.map((p) => (
        <li
          key={p.id}
          className="rounded-lg border border-rule bg-surface p-6 space-y-4"
        >
          <div className="space-y-2">
            <p className="font-display text-[1.5rem] text-ink leading-tight">
              {p.rule}
            </p>
            <p className="text-gloss">{p.ruleEn}</p>
            <p className="text-sm text-ink-soft leading-relaxed pt-1">
              {p.description}
            </p>
          </div>
          <span className="hairline-copper" aria-hidden />
          <ul className="space-y-2.5">
            {p.pairs.map((pair) => (
              <li
                key={pair.es}
                className="flex items-center justify-between gap-3"
              >
                <div className="min-w-0 flex-1">
                  <span className="text-ink-mute text-sm">{pair.en}</span>
                  <span className="text-ink-mute mx-2">→</span>
                  <span className="font-display text-[1.0625rem] text-ink">
                    {pair.es}
                  </span>
                </div>
                <PlayButton text={pair.es.split(" / ")[0]} />
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

/* ─── Themed cognates ──────────────────────────────────── */

function ThemesView() {
  return (
    <ul className="space-y-6">
      {cognateThemes.map((theme) => (
        <li
          key={theme.id}
          className="rounded-lg border border-rule bg-surface p-6 space-y-4"
        >
          <div className="space-y-1">
            <p className="font-display text-[1.375rem] text-ink leading-tight">
              {theme.title}
            </p>
            <p className="text-gloss">{theme.description}</p>
          </div>
          <span className="hairline-copper" aria-hidden />
          <ul className="space-y-3">
            {theme.words.map((w) => (
              <li key={w.es} className="space-y-1">
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <span className="font-display text-[1.0625rem] text-ink">
                      {w.es}
                    </span>
                    <span className="text-ink-mute mx-2">·</span>
                    <span className="text-ink-mute text-sm">{w.en}</span>
                  </div>
                  <PlayButton text={w.es} />
                </div>
                {w.note && (
                  <p className="text-sm text-ink-mute pl-1">{w.note}</p>
                )}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

/* ─── False friends ────────────────────────────────────── */

function FalseFriendsView() {
  return (
    <ul className="space-y-4">
      {falseFriends.map((f, i) => (
        <li
          key={i}
          className="rounded-lg border border-rule bg-surface p-6 space-y-3"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-1 min-w-0">
              <p className="font-display text-[1.375rem] text-ink leading-tight">
                {f.spanish}
              </p>
              <p className="text-caption text-ink-mute">
                Looks like: <span className="text-ink-soft">{f.looksLike}</span>
              </p>
            </div>
            <PlayButton text={f.spanish} />
          </div>
          <span className="hairline-copper" aria-hidden />
          <div className="space-y-2 text-sm">
            <p className="text-ink-soft">
              <span className="text-caption text-accent mr-2">Actually</span>
              {f.actuallyMeans}
            </p>
            <p className="text-ink-mute">{f.realTranslation}</p>
          </div>
          <p className="font-display text-[1.0625rem] text-ink-soft italic leading-snug pt-1">
            {f.example}
          </p>
        </li>
      ))}
    </ul>
  );
}
