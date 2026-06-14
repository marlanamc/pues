"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Reflection } from "@/lib/store";
import { useFlowDraft } from "@/hooks/useFlowDraft";

const options: { value: Reflection; label: string }[] = [
  { value: "yes", label: "Yes, definitely" },
  { value: "maybe", label: "Maybe" },
  { value: "not_really", label: "Not really" },
];

export default function ReflectPage() {
  const router = useRouter();
  const { draft, patch, hydrated } = useFlowDraft();
  const [selected, setSelected] = useState<Reflection | null>(null);

  function next() {
    if (!selected) return;
    patch({ reflection: selected });
    router.push("/flow/save");
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
        <p className="text-caption text-ink-mute">Reflect</p>
        <span className="w-3" aria-hidden />
      </div>

      <div className="space-y-1">
        <p className="text-display-xl text-ink">{draft.frameStem}</p>
        {draft.situationLabel && (
          <p className="text-display-italic text-[0.9375rem]">
            {draft.situationLabel}
          </p>
        )}
      </div>

      <p className="font-display text-[1.75rem] leading-snug text-ink">
        {draft.sentence ?? "—"}
      </p>

      <span className="hairline-copper" aria-hidden />

      <p className="text-ink-soft">Would you actually say this?</p>

      <ul className="space-y-3">
        {options.map((o) => {
          const active = selected === o.value;
          return (
            <li key={o.value}>
              <button
                type="button"
                onClick={() => setSelected(o.value)}
                className="flex w-full items-center gap-3 rounded-lg border bg-surface px-5 py-4 text-left transition-colors active:bg-surface-sunk"
                style={{
                  borderColor: active ? "var(--accent)" : "var(--rule)",
                }}
              >
                <span
                  className="inline-flex h-5 w-5 items-center justify-center rounded-full border"
                  style={{
                    borderColor: active ? "var(--accent)" : "var(--ink-mute)",
                  }}
                  aria-hidden
                >
                  {active && (
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ background: "var(--accent)" }}
                    />
                  )}
                </span>
                <span className="text-ink">{o.label}</span>
              </button>
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        onClick={next}
        disabled={!selected}
        className="block w-full rounded-lg bg-accent px-6 py-4 text-center font-medium text-bg transition-colors active:bg-accent-soft disabled:opacity-40"
      >
        Next
      </button>
    </div>
  );
}
