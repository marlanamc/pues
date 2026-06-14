import Link from "next/link";
import { PlayButton } from "@/components/PlayButton";
import { QuestionsJumpNav } from "@/components/QuestionsJumpNav";
import { SettingsMenuButton } from "@/components/SettingsMenu";
import { questionSections } from "@/content/questions";

export default function QuestionsPage() {
  return (
    <div className="confusions-page space-y-8 lg:mx-auto lg:max-w-[640px]">
      <header className="flex items-center justify-between">
        <Link
          href="/activities"
          className="text-caption text-ink-mute hover:text-accent transition-colors min-h-[40px] inline-flex items-center"
        >
          ← Activities
        </Link>
        <p className="text-caption text-ink-mute">Preguntas</p>
        <SettingsMenuButton />
      </header>

      <section className="space-y-3">
        <p className="day-pill">Asking in Spanish</p>
        <h1 className="text-display-lg text-ink">How do I ask that?</h1>
        <p className="text-gloss">
          English flips words around for questions. Spanish usually keeps the
          same order and raises your voice — or drops in a question word up
          front. These are the shapes you&apos;ll use every day.
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
              Are you ready?
            </span>
            <span className="text-ink">
              <span className="font-display">¿Estás lista?</span>
              <span className="text-ink-mute"> — same words, voice goes up</span>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-caption text-ink-mute shrink-0 w-28">
              What do you need?
            </span>
            <span className="text-ink">
              <span className="font-display">¿Qué necesitas?</span>
              <span className="text-ink-mute"> — qué + verb</span>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-caption text-ink-mute shrink-0 w-28">
              Where is it?
            </span>
            <span className="text-ink">
              <span className="font-display">¿Dónde está?</span>
              <span className="text-ink-mute"> — dónde + estar</span>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-caption text-ink-mute shrink-0 w-28">
              Could you repeat?
            </span>
            <span className="text-ink">
              <span className="font-display">¿Podrías repetir eso?</span>
              <span className="text-ink-mute"> — softer with podrías</span>
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
            <span>Read the English first. Try to build the Spanish before you listen.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-caption text-accent">02</span>
            <span>Play the audio. Notice where your voice would rise on yes/no questions.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-caption text-accent">03</span>
            <span>Swap in your own noun or situation — same template, your life.</span>
          </li>
        </ol>
      </section>

      <QuestionsJumpNav />

      <ul className="space-y-5">
        {questionSections.map((section) => (
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
