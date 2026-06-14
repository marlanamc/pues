"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { parseWhy } from "@/content/prompts";
import type { Reflection } from "@/lib/store";
import { useFlowDraft } from "@/hooks/useFlowDraft";
import { useAudioSpeed } from "@/hooks/useAudioSpeed";
import { PlayButton } from "@/components/PlayButton";

const options: { value: Reflection; label: string }[] = [
  { value: "yes", label: "Lo dije con soltura" },
  { value: "maybe", label: "Casi — por poco" },
  { value: "not_really", label: "Quiero practicarla" },
];

export default function RevealPage() {
  const router = useRouter();
  const { draft, patch, hydrated } = useFlowDraft();
  const { speed, setSpeed } = useAudioSpeed();

  // Speak-first gate: the reveal is unreachable until a speak attempt was made.
  useEffect(() => {
    if (!hydrated) return;
    if (!draft.spoke || !draft.spanishAnswer) router.replace("/flow/speak");
  }, [hydrated, draft.spoke, draft.spanishAnswer, router]);

  function choose(value: Reflection) {
    patch({ reflection: value });
    router.push("/flow/saved");
  }

  const answer = draft.spanishAnswer ?? "";
  const whySegments = draft.whyNote ? parseWhy(draft.whyNote) : [];

  return (
    <div
      className="flex flex-1 flex-col"
      style={{ opacity: hydrated ? 1 : 0.5 }}
    >
      <p className="mono-cap" style={{ margin: "24px 0 12px" }}>
        Una forma natural de decirlo
      </p>

      <div style={{ borderTop: "2px solid var(--accent)", paddingTop: 16 }}>
        <p className="text-display-md text-ink">{answer}</p>

        <div className="flex items-center gap-3" style={{ marginTop: 16 }}>
          <PlayButton text={answer} label={`Escuchar: ${answer}`} />
          <div className="flex items-center gap-2">
            <span className="mono-cap">Escuchar ·</span>
            <button
              type="button"
              onClick={() => setSpeed("slow")}
              aria-pressed={speed === "slow"}
              className="mono-cap transition-colors"
              style={{ color: speed === "slow" ? "var(--accent)" : undefined }}
            >
              lento
            </button>
            <span className="mono-cap">/</span>
            <button
              type="button"
              onClick={() => setSpeed("normal")}
              aria-pressed={speed === "normal"}
              className="mono-cap transition-colors"
              style={{ color: speed === "normal" ? "var(--accent)" : undefined }}
            >
              normal
            </button>
          </div>
        </div>
      </div>

      {whySegments.length > 0 && (
        <p className="text-gloss" style={{ marginTop: 18 }}>
          {whySegments.map((seg, i) =>
            seg.italic ? (
              <em
                key={i}
                className="font-display"
                style={{ fontStyle: "italic", color: "var(--ink)" }}
              >
                {seg.text}
              </em>
            ) : (
              <span key={i}>{seg.text}</span>
            )
          )}
        </p>
      )}

      <div className="flex-1" />

      <p
        className="font-display text-ink"
        style={{
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: 16,
          margin: "0 0 12px",
        }}
      >
        ¿Cómo se sintió la tuya?
      </p>

      <div className="flex flex-col gap-2" style={{ marginBottom: 18 }}>
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            onClick={() => choose(o.value)}
            className="flex items-center gap-3 text-left transition-colors"
            style={{
              padding: "12px 14px",
              borderRadius: 11,
              background: "var(--surface)",
              border: "1px solid var(--rule)",
              fontSize: 14,
              color: "var(--ink)",
            }}
          >
            <span
              className="inline-flex items-center justify-center rounded-full"
              style={{
                width: 16,
                height: 16,
                border: "1px solid var(--ink-mute)",
              }}
              aria-hidden
            />
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}
