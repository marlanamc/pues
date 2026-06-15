"use client";

import { useState } from "react";
import Link from "next/link";
import { SettingsMenuButton } from "@/components/SettingsMenu";
import { SerEstarGame } from "@/components/SerEstarGame";
import { SerEstarHints } from "@/components/SerEstarHints";
import { serEstarOverview } from "@/content/serEstar";

export default function SerEstarPage() {
  const [started, setStarted] = useState(false);

  return (
    <div
      className={`space-y-8 ${
        started ? "lg:max-w-4xl lg:w-full" : "lg:mx-auto lg:max-w-2xl"
      }`}
    >
      <header className="flex items-center justify-between">
        <Link
          href="/practice"
          className="text-caption text-ink-mute hover:text-accent transition-colors min-h-[40px] inline-flex items-center"
        >
          ← Práctica
        </Link>
        <p className="text-caption text-ink-mute">Juego</p>
        <SettingsMenuButton />
      </header>

      {!started ? (
        <>
          <section className="space-y-3">
            <p className="day-pill">{serEstarOverview.pill}</p>
            <h1 className="text-display-lg text-ink">{serEstarOverview.title}</h1>
            <p className="text-gloss">{serEstarOverview.gloss}</p>
          </section>

          <SerEstarHints />

          <button
            type="button"
            onClick={() => setStarted(true)}
            className="btn-primary w-full max-w-xs mx-auto"
          >
            <span className="lab">Empezar</span>
            <span aria-hidden>›</span>
          </button>
        </>
      ) : (
        <SerEstarGame onQuit={() => setStarted(false)} />
      )}
    </div>
  );
}

