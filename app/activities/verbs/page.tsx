import Link from "next/link";
import { SettingsMenuButton } from "@/components/SettingsMenu";
import {
  VerbJumpNav,
  VerbSectionList,
} from "@/components/VerbGuideContent";
import {
  verbOverviewGuide,
  verbHubLinks,
} from "@/content/verbs";

export default function VerbsHubPage() {
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
        <p className="day-pill">{verbOverviewGuide.pill}</p>
        <h1 className="text-display-lg text-ink">{verbOverviewGuide.title}</h1>
        <p className="text-gloss">{verbOverviewGuide.gloss}</p>
      </section>

      <section aria-labelledby="verb-guides-heading" className="space-y-3">
        <h2 id="verb-guides-heading" className="text-caption text-ink-mute">
          Guides
        </h2>
        <ul className="rounded-lg border border-rule bg-surface divide-y divide-rule overflow-hidden">
          {verbHubLinks.map((link) => (
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
        aria-labelledby="verbs-map-heading"
        className="rounded-lg border border-accent/30 bg-surface p-6 space-y-4"
      >
        <h2 id="verbs-map-heading" className="text-caption text-accent">
          Quick map
        </h2>
        <ul className="space-y-3 text-sm leading-relaxed">
          {verbOverviewGuide.quickMap.map((item) => (
            <li key={item.label} className="flex gap-3">
              <span className="text-caption text-ink-mute shrink-0 w-24">
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

      <VerbJumpNav guide={verbOverviewGuide} />
      <VerbSectionList sections={verbOverviewGuide.sections} />
    </div>
  );
}
