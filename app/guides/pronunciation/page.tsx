import Link from "next/link";
import { SettingsMenuButton } from "@/components/SettingsMenu";
import {
  pronunciationHubLinks,
  pronunciationOverview,
} from "@/content/pronunciation";

export default function PronunciationHubPage() {
  return (
    <div className="confusions-page space-y-8 lg:mx-auto lg:max-w-[640px]">
      <header className="flex items-center justify-between">
        <Link
          href="/guides"
          className="text-caption text-ink-mute hover:text-accent transition-colors min-h-[40px] inline-flex items-center"
        >
          ← Guías
        </Link>
        <p className="text-caption text-ink-mute">Pronunciación</p>
        <SettingsMenuButton />
      </header>

      <section className="space-y-3">
        <p className="day-pill">{pronunciationOverview.pill}</p>
        <h1 className="text-display-lg text-ink">
          {pronunciationOverview.title}
        </h1>
        <p className="text-gloss">{pronunciationOverview.gloss}</p>
      </section>

      <section aria-labelledby="pronunciation-guides-heading" className="space-y-3">
        <h2 id="pronunciation-guides-heading" className="text-caption text-ink-mute">
          Guides
        </h2>
        <ul className="rounded-lg border border-rule bg-surface divide-y divide-rule overflow-hidden">
          {pronunciationHubLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="flex items-center gap-4 px-5 py-4 transition-colors active:bg-surface-sunk hover:border-accent/50"
              >
                <span className="flex-1">
                  <span className="font-display text-[1.125rem] text-ink leading-tight block">
                    {link.label}
                  </span>
                  <span className="text-sm text-ink-mute leading-snug block mt-0.5">
                    {link.title}
                  </span>
                </span>
                <span className="text-ink-mute" aria-hidden>
                  ›
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="pronunciation-map-heading"
        className="rounded-lg border border-accent/30 bg-surface p-6 space-y-4"
      >
        <h2 id="pronunciation-map-heading" className="text-caption text-accent">
          Quick map
        </h2>
        <ul className="space-y-3 text-sm leading-relaxed">
          {pronunciationOverview.quickMap.map((item) => (
            <li key={item.label} className="flex gap-3">
              <span className="text-caption text-ink-mute shrink-0 w-28">
                {item.label}
              </span>
              <span className="text-ink">
                <span className="font-display">{item.spanish}</span>
                <span className="text-ink-mute"> {item.hint}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="pronunciation-routine-heading" className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="hairline-copper" aria-hidden />
          <h2 id="pronunciation-routine-heading" className="text-caption text-ink-mute">
            How to practice
          </h2>
        </div>
        <ol className="space-y-3 text-sm text-ink-soft leading-relaxed">
          {pronunciationOverview.practiceSteps.map((step, index) => (
            <li key={step} className="flex gap-3">
              <span className="text-caption text-accent">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
