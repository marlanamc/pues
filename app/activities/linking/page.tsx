import Link from "next/link";
import { PlayButton } from "@/components/PlayButton";
import { linkingDrills } from "@/content/linking";

export default function LinkingPage() {
  return (
    <div className="space-y-8">
      <header className="flex items-center justify-between">
        <Link
          href="/activities"
          className="text-caption text-ink-mute hover:text-accent transition-colors min-h-[40px] inline-flex items-center"
        >
          ← Activities
        </Link>
        <p className="text-caption text-ink-mute">Linking</p>
        <span className="w-16" aria-hidden />
      </header>

      <section className="space-y-3">
        <p className="day-pill">Connected speech</p>
        <h1 className="text-display-lg text-ink">Join the words.</h1>
        <p className="text-gloss">
          Native speakers glide words together — they don&apos;t say one at a
          time. Learn where the joins happen and you&apos;ll sound fluent and
          finally follow fast speech.
        </p>
      </section>

      <section aria-labelledby="routine-heading" className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="hairline-copper" aria-hidden />
          <h2 id="routine-heading" className="text-caption text-ink-mute">
            Daily loop
          </h2>
        </div>
        <ol className="space-y-3 text-sm text-ink-soft leading-relaxed">
          <li className="flex gap-3">
            <span className="text-caption text-accent">01</span>
            <span>Listen once and find where the words join.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-caption text-accent">02</span>
            <span>Shadow it three times in one smooth breath, not word by word.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-caption text-accent">03</span>
            <span>Record yourself once and check that the joins flow.</span>
          </li>
        </ol>
      </section>

      <ul className="space-y-5">
        {linkingDrills.map((drill) => (
          <li
            key={drill.id}
            className="rounded-lg border border-rule bg-surface p-6 space-y-4"
          >
            <div className="space-y-2">
              <p className="font-display text-[1.375rem] text-ink leading-tight">
                {drill.title}
              </p>
              <p className="text-sm text-accent leading-relaxed">
                {drill.target}
              </p>
              <p className="text-sm text-ink-mute leading-relaxed">
                {drill.note}
              </p>
            </div>
            <span className="hairline-copper" aria-hidden />
            <ul className="space-y-4">
              {drill.examples.map((example) => (
                <li key={example.text} className="flex items-start gap-3">
                  <PlayButton text={example.text} />
                  <div className="min-w-0 flex-1 space-y-1">
                    <p className="font-display text-[1.125rem] text-ink leading-snug">
                      {example.text}
                    </p>
                    <p className="text-sm text-accent leading-snug">
                      ≈ {example.linked}
                    </p>
                    <p className="text-sm text-ink-mute leading-relaxed">
                      {example.cue}
                    </p>
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
