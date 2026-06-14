"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useFlowDraft } from "@/hooks/useFlowDraft";
import { CognateHint } from "@/components/CognateHint";

const MAX = 120;

export default function BuildSentencePage() {
  const router = useRouter();
  const { draft, patch, hydrated } = useFlowDraft();
  const [sentence, setSentence] = useState("");

  useEffect(() => {
    if (!hydrated) return;
    if (sentence === "" && draft.frameStem) {
      setSentence(draft.sentence ?? "");
    }
  }, [hydrated, draft.frameStem, draft.sentence, sentence]);

  const isReady = sentence.trim().length >= 2;

  function continueOn() {
    if (!isReady) return;
    patch({ sentence: sentence.trim() });
    router.push("/flow/reflect");
  }

  return (
    <div className="space-y-7" style={{ opacity: hydrated ? 1 : 0.6 }}>
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => router.back()}
          aria-label="Back"
          className="text-ink-soft text-xl leading-none"
        >
          ‹
        </button>
        <p className="text-caption text-ink-mute">Choose Your Situation</p>
        <span className="w-3" aria-hidden />
      </div>

      <div className="text-center space-y-1">
        <p className="text-display-2xl text-ink">{draft.frameStem}</p>
        {draft.situationLabel && (
          <p className="text-display-italic text-[0.9375rem]">
            {draft.situationLabel}
          </p>
        )}
      </div>

      <div className="rounded-lg border border-rule bg-surface p-5 focus-within:border-accent/60 transition-colors">
        <textarea
          value={sentence}
          onChange={(e) => setSentence(e.target.value.slice(0, MAX))}
          rows={4}
          autoFocus
          spellCheck={false}
          autoCorrect="off"
          autoComplete="off"
          className="w-full bg-transparent font-display text-[1.5rem] leading-snug text-ink placeholder:text-ink-mute outline-none min-h-[120px]"
          placeholder={`${draft.frameStem ?? ""} `}
        />
        <div className="mt-2 flex items-center justify-end text-caption text-ink-mute">
          <span>
            {sentence.length} / {MAX}
          </span>
        </div>
      </div>

      <CognateHint frameStem={draft.frameStem} />

      <div className="tip-card">
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          aria-hidden
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mt-0.5 shrink-0"
        >
          <path d="M9 17h6" />
          <path d="M10 20h4" />
          <path d="M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3Z" />
        </svg>
        <div>
          <p className="font-medium text-ink mb-0.5">Tip</p>
          <p>Keep it real. Write what you actually think!</p>
        </div>
      </div>

      <button
        type="button"
        onClick={continueOn}
        disabled={!isReady}
        className="block w-full rounded-lg bg-accent px-6 py-4 text-center font-medium text-bg transition-colors active:bg-accent-soft disabled:opacity-40 disabled:active:bg-accent"
      >
        Continue
      </button>
    </div>
  );
}
