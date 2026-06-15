import Link from "next/link";
import { PlayButton } from "@/components/PlayButton";
import { ReflexiveJumpNav } from "@/components/ReflexiveJumpNav";
import { SettingsMenuButton } from "@/components/SettingsMenu";
import { reflexiveSections } from "@/content/reflexive";

export default function ReflexivePage() {
  return (
    <div className="confusions-page space-y-8 lg:mx-auto lg:max-w-[640px]">
      <header className="flex items-center justify-between">
        <Link
          href="/guides/verbs"
          className="text-caption text-ink-mute hover:text-accent transition-colors min-h-[40px] inline-flex items-center"
        >
          ← Verbos
        </Link>
        <p className="text-caption text-ink-mute">Reflexivos</p>
        <SettingsMenuButton />
      </header>

      <section className="space-y-3">
        <p className="day-pill">Grammar that clicks</p>
        <h1 className="text-display-lg text-ink">The action comes back to you.</h1>
        <p className="text-gloss">
          Reflexive verbs aren&apos;t about being dramatic — they&apos;re just
          Spanish&apos;s way of saying you do something to yourself. Or that the
          verb only works with *-se*, even when English says nothing.
        </p>
      </section>

      <section
        aria-labelledby="reflexive-map-heading"
        className="rounded-lg border border-accent/30 bg-surface p-6 space-y-4"
      >
        <h2 id="reflexive-map-heading" className="text-caption text-accent">
          Quick map
        </h2>
        <ul className="space-y-3 text-sm leading-relaxed">
          <li className="flex gap-3">
            <span className="text-caption text-ink-mute shrink-0 w-24">
              The idea
            </span>
            <span className="text-ink">
              <span className="font-display">me + verb</span>
              <span className="text-ink-mute"> — you do it to yourself</span>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-caption text-ink-mute shrink-0 w-24">
              Conjugated
            </span>
            <span className="text-ink">
              <span className="font-display">Me levanto</span>
              <span className="text-ink-mute"> — pronoun before</span>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-caption text-ink-mute shrink-0 w-24">
              Infinitive
            </span>
            <span className="text-ink">
              <span className="font-display">Voy a levantarme</span>
              <span className="text-ink-mute"> — pronoun attached</span>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-caption text-ink-mute shrink-0 w-24">
              Chunk verbs
            </span>
            <span className="text-ink">
              <span className="font-display">Me llamo · me acuerdo de</span>
              <span className="text-ink-mute"> — learn as phrases</span>
            </span>
          </li>
        </ul>
      </section>

      <section aria-labelledby="reflexive-practice-heading" className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="hairline-copper" aria-hidden />
          <h2 id="reflexive-practice-heading" className="text-caption text-ink-mute">
            How to practice
          </h2>
        </div>
        <ol className="space-y-3 text-sm text-ink-soft leading-relaxed">
          <li className="flex gap-3">
            <span className="text-caption text-accent">01</span>
            <span>Read the English. Ask: is the person doing this to themselves?</span>
          </li>
          <li className="flex gap-3">
            <span className="text-caption text-accent">02</span>
            <span>Listen to the Spanish. Notice where *me / te / se* lands.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-caption text-accent">03</span>
            <span>Say your own morning routine out loud — three reflexives in a row.</span>
          </li>
        </ol>
      </section>

      <ReflexiveJumpNav />

      <ul className="space-y-5">
        {reflexiveSections.map((section) => (
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
