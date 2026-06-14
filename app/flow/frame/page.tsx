"use client";

import { useRouter } from "next/navigation";
import { frameDays, totalDays } from "@/content/frames";
import { useFlowDraft } from "@/hooks/useFlowDraft";
import { useStats } from "@/hooks/useStats";

export default function ChooseFramePage() {
  const router = useRouter();
  const { patch } = useFlowDraft();
  const { stats } = useStats();
  const today = frameDays[stats.daysPracticed % totalDays];

  function choose(stem: string) {
    patch({ frameStem: stem });
    router.push("/flow/situation");
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => router.back()}
          aria-label="Back"
          className="text-ink-soft text-xl leading-none"
        >
          ‹
        </button>
        <p className="text-caption text-ink-mute">Choose a Frame</p>
        <span className="w-3" aria-hidden />
      </div>

      <ul className="space-y-4">
        {today.frames.map((f) => (
          <li key={f.stem}>
            <button
              type="button"
              onClick={() => choose(f.stem)}
              className="block w-full rounded-lg border border-rule bg-surface p-6 text-left transition-colors active:bg-surface-sunk active:border-accent/60"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-display-xl text-ink">{f.stem}</p>
                  <p className="text-display-italic text-[0.9375rem]">
                    {f.english}
                  </p>
                </div>
                <span className="text-caption text-ink-mute pt-2">0 / 5</span>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
