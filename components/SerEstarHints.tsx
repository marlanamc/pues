import { serEstarRules } from "@/content/serEstar";

export function SerEstarHints() {
  return (
    <section aria-label="Quick rules" className="space-y-2">
      <p className="text-caption">Ayuda</p>
      <div className="rounded-lg border border-accent/30 bg-surface p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {serEstarRules.map((rule) => (
          <div key={rule.verb} className="space-y-1">
            <p className="font-display text-[1.125rem] text-ink">{rule.verb}</p>
            <p className="text-sm text-ink-mute leading-relaxed">{rule.cue}</p>
            <p className="text-sm text-accent">{rule.example}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
