import Link from "next/link";
import { notFound } from "next/navigation";
import { SettingsMenuButton } from "@/components/SettingsMenu";
import { SituationPhrases } from "@/components/SituationPhrases";
import { StartSituationPracticeButton } from "@/components/StartSituationPracticeButton";
import {
  categoryLabels,
  practiceItemsForSituation,
  relatedSituations,
  situationBySlug,
  situations,
} from "@/content/situations";

export function generateStaticParams() {
  return situations.map((s) => ({ slug: s.slug }));
}

type Params = Promise<{ slug: string }>;

export default async function SituationDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const situation = situationBySlug(slug);
  if (!situation) notFound();

  const hasPhrases = !!situation.phrases?.length;
  const practiceItems = practiceItemsForSituation(situation);
  const hasPrompts =
    practiceItems.length > 0 || !!situation.practicePrompts?.length;
  const related = relatedSituations(situation.slug, 4);

  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <div className="flex items-center justify-between">
          <Link
            href="/situations"
            className="text-caption text-ink-mute hover:text-accent transition-colors"
          >
            ← Lugares
          </Link>
          <SettingsMenuButton />
        </div>
        <p className="text-caption text-ink-mute">
          {categoryLabels[situation.category]}
        </p>
        <h1 className="text-display-lg text-ink">{situation.label}</h1>
        {situation.whenToUse && (
          <p className="text-gloss">{situation.whenToUse}</p>
        )}
        <div className="max-w-sm">
          <StartSituationPracticeButton situation={situation} />
        </div>
      </header>

      <div className="space-y-10 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12 lg:space-y-0">
        {hasPhrases && <SituationPhrases phrases={situation.phrases!} />}

        {hasPrompts && (
          <section aria-labelledby="practice-heading" className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="hairline-copper" aria-hidden />
              <h2 id="practice-heading" className="text-caption text-ink-mute">
                Practice prompts
              </h2>
            </div>
            <ol className="space-y-4">
              {practiceItems.map((prompt, i) => (
                <li key={prompt.id} className="flex gap-4">
                  <span className="font-display text-accent text-lg leading-snug">
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block text-ink-soft leading-relaxed">
                      {prompt.english}
                    </span>
                    <span className="mt-1 block font-display text-[1.125rem] leading-snug text-ink">
                      {prompt.spanish}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          </section>
        )}
      </div>

      {!hasPhrases && !hasPrompts && (
        <p className="text-gloss">
          No phrasebank yet for this one — pick it in the flow and write your own
          sentence.
        </p>
      )}

      {related.length > 0 && (
        <section aria-labelledby="related-heading" className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="hairline-copper" aria-hidden />
            <h2 id="related-heading" className="text-caption text-ink-mute">
              Cerca de aquí
            </h2>
          </div>
          <ul className="rounded-lg border border-rule bg-surface divide-y divide-rule overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4 lg:divide-y-0 lg:border-0 lg:bg-transparent lg:overflow-visible">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/situations/${item.slug}`}
                  className="flex items-center gap-4 px-5 py-4 transition-colors active:bg-surface-sunk lg:rounded-lg lg:border lg:border-rule lg:bg-surface lg:hover:border-accent/50"
                >
                  <span className="min-w-0 flex-1 text-ink-soft">
                    {item.label}
                  </span>
                  {(item.phrases?.length || item.practiceItems?.length) && (
                    <span className="text-caption text-accent">Listo</span>
                  )}
                  <span className="text-ink-mute" aria-hidden>
                    ›
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
