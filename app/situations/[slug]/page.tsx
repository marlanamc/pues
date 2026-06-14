import Link from "next/link";
import { notFound } from "next/navigation";
import { PlayButton } from "@/components/PlayButton";
import { categoryLabels, situationBySlug, situations } from "@/content/situations";

export function generateStaticParams() {
  return situations.map((s) => ({ slug: s.slug }));
}

type Params = Promise<{ slug: string }>;

export default async function SituationDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const situation = situationBySlug(slug);
  if (!situation) notFound();

  const hasPhrases = !!situation.phrases?.length;
  const hasPrompts = !!situation.practicePrompts?.length;

  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <Link
          href="/situations"
          className="text-caption text-ink-mute hover:text-accent transition-colors"
        >
          ← Situations
        </Link>
        <p className="text-caption text-ink-mute">
          {categoryLabels[situation.category]}
        </p>
        <h1 className="text-display-lg text-ink">{situation.label}</h1>
        {situation.whenToUse && (
          <p className="text-gloss">{situation.whenToUse}</p>
        )}
      </header>

      {hasPhrases && (
        <section aria-labelledby="phrases-heading" className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="hairline-copper" aria-hidden />
            <h2 id="phrases-heading" className="text-caption text-ink-mute">
              Phrases
            </h2>
          </div>
          <ul className="space-y-6">
            {situation.phrases!.map((p) => (
              <li key={p.es}>
                <div className="flex items-start gap-3">
                  <PlayButton text={p.es} />
                  <div className="flex-1 min-w-0">
                    <p className="font-display text-[1.375rem] leading-snug text-ink">
                      {p.es}
                    </p>
                    <p className="mt-1 text-gloss">{p.en}</p>
                    {p.note && (
                      <p className="mt-2 text-sm text-ink-mute">
                        <span className="text-caption text-accent mr-2">Note</span>
                        {p.note}
                      </p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {hasPrompts && (
        <section aria-labelledby="practice-heading" className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="hairline-copper" aria-hidden />
            <h2 id="practice-heading" className="text-caption text-ink-mute">
              Practice prompts
            </h2>
          </div>
          <ol className="space-y-4">
            {situation.practicePrompts!.map((prompt, i) => (
              <li key={prompt} className="flex gap-4">
                <span className="font-display text-accent text-lg leading-snug">
                  {(i + 1).toString().padStart(2, "0")}
                </span>
                <span className="text-ink-soft leading-relaxed">{prompt}</span>
              </li>
            ))}
          </ol>
        </section>
      )}

      {!hasPhrases && !hasPrompts && (
        <p className="text-gloss">
          No phrasebank yet for this one — pick it in the flow and write your own
          sentence.
        </p>
      )}
    </div>
  );
}
