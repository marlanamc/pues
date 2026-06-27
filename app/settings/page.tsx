import Link from "next/link";
import { AccountCard } from "@/components/AccountCard";
import { ThemePicker } from "@/components/ThemePicker";
import { AudioSpeedToggle } from "@/components/AudioSpeedToggle";
import { EnglishGlossToggle } from "@/components/EnglishGlossToggle";

export default function SettingsPage() {
  return (
    <div className="space-y-8 lg:mx-auto lg:max-w-[640px]">
      <header className="flex items-center justify-between">
        <Link
          href="/"
          className="text-caption text-ink-mute hover:text-accent transition-colors min-h-[40px] inline-flex items-center"
        >
          ← Today
        </Link>
        <p className="text-caption text-ink-mute">Settings</p>
        <span className="w-12" aria-hidden />
      </header>

      <section className="space-y-2">
        <h1 className="text-display-lg text-ink">Settings.</h1>
        <p className="text-gloss">Small preferences for how the app looks and sounds.</p>
      </section>

      <ul className="space-y-4">
        <AccountCard />

        <li className="rounded-lg border border-rule bg-surface p-6 space-y-4">
          <div className="min-w-0 space-y-1">
            <p className="font-display text-[1.125rem] text-ink leading-tight">
              Apariencia
            </p>
            <p className="text-sm text-ink-mute leading-relaxed">
              Elige el tema que te acompaña.
            </p>
          </div>
          <ThemePicker />
        </li>

        <li className="rounded-lg border border-rule bg-surface p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 space-y-1">
              <p className="font-display text-[1.125rem] text-ink leading-tight">
                Audio speed
              </p>
              <p className="text-sm text-ink-mute leading-relaxed">
                Slow plays pronunciation at a gentler pace for shadowing.
              </p>
            </div>
            <AudioSpeedToggle />
          </div>
        </li>

        <li className="rounded-lg border border-rule bg-surface p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 space-y-1">
              <p className="font-display text-[1.125rem] text-ink leading-tight">
                English glosses
              </p>
              <p className="text-sm text-ink-mute leading-relaxed">
                Show a small English translation under Spanish UI phrases.
              </p>
            </div>
            <EnglishGlossToggle />
          </div>
        </li>

        <li className="rounded-lg border border-rule bg-surface p-6">
          <Link
            href="/progress"
            className="flex items-center justify-between gap-4 transition-colors hover:text-accent"
          >
            <div className="min-w-0 space-y-1">
              <p className="font-display text-[1.125rem] text-ink leading-tight">
                Progreso
              </p>
              <p className="text-sm text-ink-mute leading-relaxed">
                Streak, frames practiced, and sentences built.
              </p>
            </div>
            <span className="text-ink-mute" aria-hidden>
              ›
            </span>
          </Link>
        </li>
      </ul>

      <div className="rounded-lg border border-dashed border-rule p-6">
        <div className="space-y-3 text-center">
          <p className="font-display text-[1.0625rem] text-ink">
            Content profile questionnaire
          </p>
          <p className="text-sm text-ink-mute leading-relaxed">
            Fill in your life context so Pues can generate speak prompts that
            sound like your notebook.
          </p>
          <Link
            href="/questionnaire"
            className="mono-cap inline-flex items-center justify-center rounded-full border border-rule px-4 py-2 text-ink-soft transition-colors hover:border-accent/60 hover:text-accent"
          >
            Open questionnaire →
          </Link>
        </div>
      </div>
    </div>
  );
}
