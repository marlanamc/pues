import Link from "next/link";
import { ConfusionsJumpNav } from "@/components/ConfusionsJumpNav";
import { PlayButton } from "@/components/PlayButton";
import { SettingsMenuButton } from "@/components/SettingsMenu";
import {
  confusionGroups,
} from "@/content/confusions";

export default function ConfusionsPage() {
  return (
    <div className="confusions-page space-y-8 lg:mx-auto lg:max-w-[640px]">
      <header className="flex items-center justify-between">
        <Link
          href="/guides"
          className="text-caption text-ink-mute hover:text-accent transition-colors min-h-[40px] inline-flex items-center"
        >
          ← Guías
        </Link>
        <p className="text-caption text-ink-mute">Matiz</p>
        <SettingsMenuButton />
      </header>

      <section className="space-y-3">
        <p className="day-pill">Usage traps</p>
        <h1 className="text-display-lg text-ink">Which one do I use?</h1>
        <p className="text-gloss">
          English packs many ideas into one word. Spanish splits them. These are
          the mix-ups American speakers hit most — starting with feel, mood, and
          want.
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
              I feel tired
            </span>
            <span className="text-ink">
              <span className="font-display">Me siento cansada</span>
              <span className="text-ink-mute"> — how you feel inside</span>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-caption text-ink-mute shrink-0 w-28">
              I feel like coffee
            </span>
            <span className="text-ink">
              <span className="font-display">Tengo ganas de un café</span>
              <span className="text-ink-mute"> — mood, craving</span>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-caption text-ink-mute shrink-0 w-28">
              I want coffee
            </span>
            <span className="text-ink">
              <span className="font-display">Quiero un café</span>
              <span className="text-ink-mute"> — direct, now</span>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-caption text-ink-mute shrink-0 w-28">
              I would like…
            </span>
            <span className="text-ink">
              <span className="font-display">Me gustaría…</span>
              <span className="text-ink-mute"> — polite wish, down the road</span>
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
            <span>Read the English line first. Guess which Spanish pattern fits.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-caption text-accent">02</span>
            <span>Listen to the example. Say it back once.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-caption text-accent">03</span>
            <span>Swap in your own noun or verb — same pattern, your life.</span>
          </li>
        </ol>
      </section>

      <ConfusionsJumpNav />

      <ul className="space-y-5">
        {confusionGroups.map((group) => (
          <li
            key={group.id}
            id={group.id}
            className="confusions-section rounded-lg border border-rule bg-surface p-6 space-y-4"
          >
            <div className="space-y-2">
              <p className="font-display text-[1.375rem] text-ink leading-tight">
                {group.title}
              </p>
              <p className="text-sm text-accent leading-relaxed">
                {group.headline}
              </p>
              <p className="text-sm text-ink-mute leading-relaxed">
                {group.note}
              </p>
            </div>

            <span className="hairline-copper" aria-hidden />

            <ul className="space-y-4">
              {group.options.map((option) => (
                <li key={option.pattern} className="space-y-1">
                  <p className="font-display text-[1.0625rem] text-ink leading-snug">
                    {option.pattern}
                  </p>
                  <p className="text-sm text-ink-soft">{option.english}</p>
                  <p className="text-sm text-ink-mute leading-relaxed">
                    <span className="text-caption text-accent mr-2">When</span>
                    {option.when}
                  </p>
                  {option.avoid && (
                    <p className="text-sm text-ink-mute leading-relaxed">
                      <span className="text-caption text-ink-mute mr-2">
                        Avoid
                      </span>
                      {option.avoid}
                    </p>
                  )}
                </li>
              ))}
            </ul>

            <span className="hairline-copper" aria-hidden />

            <ul className="space-y-4">
              {group.examples.map((example) => (
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
