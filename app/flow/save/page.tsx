"use client";

import { useRouter } from "next/navigation";
import { useFlowDraft } from "@/hooks/useFlowDraft";
import { useThoughts } from "@/hooks/useThoughts";

export default function SaveThoughtPage() {
  const router = useRouter();
  const { draft, clear, hydrated } = useFlowDraft();
  const { add } = useThoughts();

  const ready =
    !!draft.frameStem &&
    !!draft.situationSlug &&
    !!draft.situationLabel &&
    !!draft.sentence &&
    !!draft.reflection;

  function saveAndExit() {
    if (!ready) return;
    add({
      frameStem: draft.frameStem!,
      situationSlug: draft.situationSlug!,
      situationLabel: draft.situationLabel!,
      sentence: draft.sentence!,
      reflection: draft.reflection!,
    });
    clear();
    router.push("/activities/thoughts");
  }

  function saveAndContinue() {
    if (!ready) return;
    add({
      frameStem: draft.frameStem!,
      situationSlug: draft.situationSlug!,
      situationLabel: draft.situationLabel!,
      sentence: draft.sentence!,
      reflection: draft.reflection!,
    });
    clear();
    router.push("/flow/frame");
  }

  return (
    <div className="space-y-8" style={{ opacity: hydrated ? 1 : 0.6 }}>
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => router.back()}
          aria-label="Back"
          className="text-ink-soft text-xl leading-none"
        >
          ‹
        </button>
        <p className="text-caption text-ink-mute">Great Job!</p>
        <span className="w-3" aria-hidden />
      </div>

      <div className="flex flex-col items-center text-center space-y-3 pt-4">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-full"
          style={{ background: "color-mix(in oklab, var(--accent) 20%, transparent)" }}
        >
          <svg
            viewBox="0 0 24 24"
            width="28"
            height="28"
            aria-hidden
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12.5 10 17l9-10" />
          </svg>
        </div>
        <h1 className="text-display-xl text-ink">You said it!</h1>
        <p className="text-gloss">Nice work.</p>
      </div>

      <div
        className="rounded-lg border border-rule p-6 text-center space-y-5"
        style={{ background: "var(--surface-2)" }}
      >
        <p className="text-caption text-ink-mute">Your sentence</p>
        <p className="font-display text-[1.5rem] leading-snug text-ink">
          {draft.sentence ?? "—"}
        </p>
        <div className="flex justify-center">
          <button
            type="button"
            aria-label="Play sentence"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-rule text-ink-soft active:bg-surface-sunk"
          >
            <svg
              viewBox="0 0 16 16"
              className="h-4 w-4 fill-current"
              aria-hidden
            >
              <path d="M5 3.5v9l7-4.5z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="space-y-3">
        <button
          type="button"
          onClick={saveAndExit}
          disabled={!ready}
          className="block w-full rounded-lg bg-accent px-6 py-4 text-center font-medium text-bg transition-colors active:bg-accent-soft disabled:opacity-40"
        >
          Save to My Thoughts
        </button>
        <button
          type="button"
          onClick={saveAndContinue}
          disabled={!ready}
          className="block w-full px-6 py-3 text-center font-medium text-accent disabled:opacity-40"
        >
          Continue to next frame
        </button>
      </div>
    </div>
  );
}
