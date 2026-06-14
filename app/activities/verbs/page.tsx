import Link from "next/link";
import { PlayButton } from "@/components/PlayButton";
import { SettingsMenuButton } from "@/components/SettingsMenu";
import { VerbsJumpNav } from "@/components/VerbsJumpNav";
import { verbSections } from "@/content/verbs";

export default function VerbsPage() {
  return (
    <div className="confusions-page space-y-8 lg:mx-auto lg:max-w-[640px]">
      <header className="flex items-center justify-between">
        <Link
          href="/activities"
          className="text-caption text-ink-mute hover:text-accent transition-colors min-h-[40px] inline-flex items-center"
        >
          ← Activities
        </Link>
        <p className="text-caption text-ink-mute">Verbos</p>
        <SettingsMenuButton />
      </header>

      <section className="space-y-3">
        <p className="day-pill">How verbs work</p>
        <h1 className="text-display-lg text-ink">The shape of Spanish.</h1>
        <p className="text-gloss">
          Not a conjugation workbook — a map of how verbs are built, changed,
          and chained together. Enough to understand what you&apos;re saying when
          you speak.
        </p>
      </section>

      <section
        aria-labelledby="verbs-map-heading"
        className="rounded-lg border border-accent/30 bg-surface p-6 space-y-4"
      >
        <h2 id="verbs-map-heading" className="text-caption text-accent">
          Quick map
        </h2>
        <ul className="space-y-3 text-sm leading-relaxed">
          <li className="flex gap-3">
            <span className="text-caption text-ink-mute shrink-0 w-24">
              Dictionary form
            </span>
            <span className="text-ink">
              <span className="font-display">hablar · comer · vivir</span>
              <span className="text-ink-mute"> — -ar / -er / -ir</span>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-caption text-ink-mute shrink-0 w-24">
              Who does it
            </span>
            <span className="text-ink">
              <span className="font-display">hablo · hablas · habla</span>
              <span className="text-ink-mute"> — ending changes</span>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-caption text-ink-mute shrink-0 w-24">
              Two verbs
            </span>
            <span className="text-ink">
              <span className="font-display">Quiero aprender</span>
              <span className="text-ink-mute"> — only first conjugates</span>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-caption text-ink-mute shrink-0 w-24">
              Right now
            </span>
            <span className="text-ink">
              <span className="font-display">Estoy trabajando</span>
              <span className="text-ink-mute"> — estar + -ando/-iendo</span>
            </span>
          </li>
        </ul>
      </section>

      <section aria-labelledby="verbs-practice-heading" className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="hairline-copper" aria-hidden />
          <h2 id="verbs-practice-heading" className="text-caption text-ink-mute">
            How to practice
          </h2>
        </div>
        <ol className="space-y-3 text-sm text-ink-soft leading-relaxed">
          <li className="flex gap-3">
            <span className="text-caption text-accent">01</span>
            <span>Pick one pattern — *voy a*, *tengo que*, or *me gusta* — and say three real sentences.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-caption text-accent">02</span>
            <span>Listen to an example. Name the ending: -ar, -er, or -ir?</span>
          </li>
          <li className="flex gap-3">
            <span className="text-caption text-accent">03</span>
            <span>When you hit something odd, check Matiz or Reflexivos — not every verb plays by the same rules.</span>
          </li>
        </ol>
      </section>

      <VerbsJumpNav />

      <ul className="space-y-5">
        {verbSections.map((section) => (
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
