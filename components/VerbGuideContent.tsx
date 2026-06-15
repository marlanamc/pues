"use client";

import { useRef } from "react";
import Link from "next/link";
import { PlayButton } from "@/components/PlayButton";
import { SettingsMenuButton } from "@/components/SettingsMenu";
import type { VerbSection, VerbTenseGuide } from "@/content/verbs";
import { sectionsByCategory } from "@/content/verbs";

export function VerbJumpNav({ guide }: { guide: VerbTenseGuide }) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const count = guide.sections.length;
  const grouped = sectionsByCategory(guide);

  function handleLinkClick() {
    detailsRef.current?.removeAttribute("open");
  }

  return (
    <details ref={detailsRef} className="confusions-jump">
      <summary className="confusions-jump__summary">
        <span className="confusions-jump__summary-label">On this page</span>
        <span className="confusions-jump__summary-hint">
          {count} {count === 1 ? "section" : "sections"}
        </span>
      </summary>

      <div className="confusions-jump__panel">
        {grouped.map(({ category, sections }) => (
          <div key={category.id} className="confusions-jump__group">
            <p className="confusions-jump__category">{category.label}</p>
            <ul className="confusions-jump__list">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="confusions-jump__link"
                    onClick={handleLinkClick}
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </details>
  );
}

export function VerbSectionList({ sections }: { sections: VerbSection[] }) {
  return (
    <ul className="space-y-5">
      {sections.map((section) => (
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
  );
}

type VerbTensePageProps = {
  guide: VerbTenseGuide;
  backHref?: string;
  backLabel?: string;
};

export function VerbTensePage({
  guide,
  backHref = "/guides/verbs",
  backLabel = "← Verbos",
}: VerbTensePageProps) {
  const pageId = guide.slug || "overview";

  return (
    <div className="confusions-page space-y-8 lg:mx-auto lg:max-w-[640px]">
      <header className="flex items-center justify-between">
        <Link
          href={backHref}
          className="text-caption text-ink-mute hover:text-accent transition-colors min-h-[40px] inline-flex items-center"
        >
          {backLabel}
        </Link>
        <p className="text-caption text-ink-mute">{guide.label}</p>
        <SettingsMenuButton />
      </header>

      <section className="space-y-3">
        <p className="day-pill">{guide.pill}</p>
        <h1 className="text-display-lg text-ink">{guide.title}</h1>
        <p className="text-gloss">{guide.gloss}</p>
      </section>

      <section
        aria-labelledby={`${pageId}-map-heading`}
        className="rounded-lg border border-accent/30 bg-surface p-6 space-y-4"
      >
        <h2
          id={`${pageId}-map-heading`}
          className="text-caption text-accent"
        >
          Quick map
        </h2>
        <ul className="space-y-3 text-sm leading-relaxed">
          {guide.quickMap.map((item) => (
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

      <section aria-labelledby={`${pageId}-practice-heading`} className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="hairline-copper" aria-hidden />
          <h2
            id={`${pageId}-practice-heading`}
            className="text-caption text-ink-mute"
          >
            How to practice
          </h2>
        </div>
        <ol className="space-y-3 text-sm text-ink-soft leading-relaxed">
          {guide.practiceSteps.map((step, i) => (
            <li key={step} className="flex gap-3">
              <span className="text-caption text-accent">
                {(i + 1).toString().padStart(2, "0")}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <VerbJumpNav guide={guide} />
      <VerbSectionList sections={guide.sections} />
    </div>
  );
}
