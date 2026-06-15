import Link from "next/link";
import { AccentMarksJumpNav } from "@/components/AccentMarksJumpNav";
import { PlayButton } from "@/components/PlayButton";
import { SettingsMenuButton } from "@/components/SettingsMenu";
import { markSections } from "@/content/accentMarks";

export default function AccentMarksPage() {
  return (
    <div className="confusions-page space-y-8 lg:mx-auto lg:max-w-[640px]">
      <header className="flex items-center justify-between">
        <Link
          href="/guides/pronunciation"
          className="text-caption text-ink-mute hover:text-accent transition-colors min-h-[40px] inline-flex items-center"
        >
          ← Pronunciación
        </Link>
        <p className="text-caption text-ink-mute">Tildes</p>
        <SettingsMenuButton />
      </header>

      <section className="space-y-3">
        <p className="day-pill">Written accents</p>
        <h1 className="text-display-lg text-ink">Where does the stress go?</h1>
        <p className="text-gloss">
          The little mark over a vowel — á, é, í, ó, ú — tells you which
          syllable to stress. Sometimes it also changes the meaning entirely:
          qué vs que, tú vs tu. Pair this with{" "}
          <Link
            href="/guides/pronunciation/accent"
            className="text-accent hover:underline"
          >
            Acento
          </Link>{" "}
          to hear the stress in your mouth.
        </p>
      </section>

      <section
        aria-labelledby="cheat-heading"
        className="rounded-lg border border-accent/30 bg-surface p-6 space-y-4"
      >
        <h2 id="cheat-heading" className="text-caption text-accent">
          Quick map
        </h2>
        <ul className="space-y-3 text-sm leading-relaxed">
          <li className="flex gap-3">
            <span className="text-caption text-ink-mute shrink-0 w-28">
              what
            </span>
            <span className="text-ink">
              <span className="font-display">qué</span>
              <span className="text-ink-mute"> — question word, always marked</span>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-caption text-ink-mute shrink-0 w-28">
              that / because
            </span>
            <span className="text-ink">
              <span className="font-display">que</span>
              <span className="text-ink-mute"> — no accent</span>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-caption text-ink-mute shrink-0 w-28">
              you
            </span>
            <span className="text-ink">
              <span className="font-display">tú</span>
              <span className="text-ink-mute"> — pronoun</span>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-caption text-ink-mute shrink-0 w-28">
              your
            </span>
            <span className="text-ink">
              <span className="font-display">tu</span>
              <span className="text-ink-mute"> — possessive, no accent</span>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-caption text-ink-mute shrink-0 w-28">
              why / because
            </span>
            <span className="text-ink">
              <span className="font-display">¿por qué?</span>
              <span className="text-ink-mute"> vs </span>
              <span className="font-display">porque</span>
            </span>
          </li>
        </ul>
      </section>

      <section aria-labelledby="routine-heading" className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="hairline-copper" aria-hidden />
          <h2 id="routine-heading" className="text-caption text-ink-mute">
            How to practice
          </h2>
        </div>
        <ol className="space-y-3 text-sm text-ink-soft leading-relaxed">
          <li className="flex gap-3">
            <span className="text-caption text-accent">01</span>
            <span>Read the pair out loud — stress the syllable with the mark.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-caption text-accent">02</span>
            <span>Cover the accent and guess: would Spanish write one here?</span>
          </li>
          <li className="flex gap-3">
            <span className="text-caption text-accent">03</span>
            <span>Write three sentences using a question word with its accent.</span>
          </li>
        </ol>
      </section>

      <AccentMarksJumpNav />

      <ul className="space-y-5">
        {markSections.map((section) => (
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

            {section.patterns && section.patterns.length > 0 && (
              <>
                <span className="hairline-copper" aria-hidden />
                <ul className="space-y-4">
                  {section.patterns.map((pattern) => (
                    <li key={pattern.pattern} className="space-y-1">
                      <p className="font-display text-[1.0625rem] text-ink leading-snug">
                        {pattern.pattern}
                      </p>
                      <p className="text-sm text-ink-soft">{pattern.english}</p>
                      <p className="text-sm text-ink-mute leading-relaxed">
                        <span className="text-caption text-accent mr-2">
                          When
                        </span>
                        {pattern.when}
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
