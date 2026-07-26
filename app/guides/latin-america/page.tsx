import Link from "next/link";
import { LatinAmericaJumpNav } from "@/components/LatinAmericaJumpNav";
import { PlayButton } from "@/components/PlayButton";
import { SettingsMenuButton } from "@/components/SettingsMenu";
import {
  latinAmericaPracticeSteps,
  latinAmericaSections,
} from "@/content/latinAmerica";

export default function LatinAmericaGuidePage() {
  return (
    <div className="confusions-page space-y-8 lg:mx-auto lg:max-w-[640px]">
      <header className="flex items-center justify-between">
        <Link
          href="/guides"
          className="text-caption text-ink-mute hover:text-accent transition-colors min-h-[40px] inline-flex items-center"
        >
          ← Guías
        </Link>
        <p className="text-caption text-ink-mute">Latinoamérica</p>
        <SettingsMenuButton />
      </header>

      <section className="space-y-3">
        <p className="day-pill">Grammar & register</p>
        <h1 className="text-display-lg text-ink">
          Latin America vs. Spain — especially the present perfect.
        </h1>
        <p className="text-gloss">
          Pues teaches Latin American Spanish. The grammar is the same language
          — but Spain reaches for *he visto* where Mexico or Colombia often says
          *vi*. This guide is the map behind those choices.
        </p>
      </section>

      <section
        aria-labelledby="la-map-heading"
        className="rounded-lg border border-accent/30 bg-surface p-6 space-y-4"
      >
        <h2 id="la-map-heading" className="text-caption text-accent">
          Quick map
        </h2>
        <ul className="space-y-3 text-sm leading-relaxed">
          <li className="flex gap-3">
            <span className="text-caption text-ink-mute shrink-0 w-32">
              Lost item
            </span>
            <span className="text-ink">
              <span className="font-display">¿Alguien vio…?</span>
              <span className="text-ink-mute"> — LA casual</span>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-caption text-ink-mute shrink-0 w-32">
              Long time no see
            </span>
            <span className="text-ink">
              <span className="font-display">¿Cómo estás?</span>
              <span className="text-ink-mute"> — not *¿Cómo has estado?*</span>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-caption text-ink-mute shrink-0 w-32">
              Ever / never
            </span>
            <span className="text-ink">
              <span className="font-display">¿Alguna vez has…?</span>
              <span className="text-ink-mute"> — keep present perfect</span>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-caption text-ink-mute shrink-0 w-32">
              Today / yet
            </span>
            <span className="text-ink">
              <span className="font-display">Hoy he… · Todavía no he…</span>
              <span className="text-ink-mute"> — still natural in LA</span>
            </span>
          </li>
        </ul>
      </section>

      <section aria-labelledby="la-practice-heading" className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="hairline-copper" aria-hidden />
          <h2 id="la-practice-heading" className="text-caption text-ink-mute">
            How to practice
          </h2>
        </div>
        <ol className="space-y-3 text-sm text-ink-soft leading-relaxed">
          {latinAmericaPracticeSteps.map((step, index) => (
            <li key={step} className="flex gap-3">
              <span className="text-caption text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <LatinAmericaJumpNav />

      <ul className="space-y-5">
        {latinAmericaSections.map((section) => (
          <li
            key={section.id}
            id={section.id}
            className="confusions-section rounded-lg border border-rule bg-surface p-6 space-y-4"
          >
            <div className="space-y-2">
              <p className="font-display text-[1.375rem] text-ink leading-tight">
                {section.title}
              </p>
              <p className="text-sm text-accent leading-relaxed">
                {section.headline}
              </p>
              <p className="text-sm text-ink-mute leading-relaxed">
                {section.note}
              </p>
            </div>

            {section.rules && section.rules.length > 0 && (
              <>
                <span className="hairline-copper" aria-hidden />
                <ul className="space-y-4">
                  {section.rules.map((rule) => (
                    <li key={rule.pattern} className="space-y-1">
                      <p className="font-display text-[1.0625rem] text-ink leading-snug">
                        {rule.pattern}
                      </p>
                      <p className="text-sm text-ink-soft">{rule.english}</p>
                      <p className="text-sm text-ink-mute leading-relaxed">
                        {rule.note}
                      </p>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <span className="hairline-copper" aria-hidden />

            <ul className="space-y-4">
              {section.examples.map((example) => (
                <li key={example.spanish} className="flex items-start gap-3">
                  <PlayButton text={example.spanish} />
                  <div className="min-w-0 flex-1 space-y-1">
                    <p className="font-display text-[1.125rem] text-ink leading-snug">
                      {example.spanish}
                    </p>
                    <p className="text-sm text-ink-soft">{example.english}</p>
                    <p className="text-sm text-ink-mute leading-relaxed">
                      {example.cue}
                    </p>
                    {example.trap && (
                      <p className="text-sm text-ink-mute leading-relaxed pt-0.5">
                        {example.trap}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
