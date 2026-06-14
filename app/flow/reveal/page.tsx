"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { parseWhy } from "@/content/prompts";
import type { Reflection } from "@/lib/store";
import { useFlowDraft } from "@/hooks/useFlowDraft";
import { useAudioSpeed } from "@/hooks/useAudioSpeed";
import { isRecorderSupported } from "@/hooks/useRecorder";
import { PlayButton } from "@/components/PlayButton";
import { RecordingPlayButton } from "@/components/RecordingPlayButton";
import { RecordingCaptureButton } from "@/components/RecordingCaptureButton";

const options: { value: Reflection; label: string }[] = [
  { value: "yes", label: "Lo dije con soltura" },
  { value: "maybe", label: "Casi — por poco" },
  { value: "not_really", label: "Quiero practicarla" },
];

export default function RevealPage() {
  const router = useRouter();
  const { draft, patch, hydrated } = useFlowDraft();
  const { speed, setSpeed } = useAudioSpeed();
  const [playbackStopToken, setPlaybackStopToken] = useState(0);
  const [showReflection, setShowReflection] = useState(false);
  const reflectionRef = useRef<HTMLDivElement>(null);
  const recorderSupported = isRecorderSupported();

  useEffect(() => {
    if (!showReflection || !reflectionRef.current) return;
    reflectionRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [showReflection]);

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
      <p className="mono-cap mt-6 mb-3 lg:mt-4 lg:mb-2.5">
        Una forma natural de decirlo
      </p>

      <div className="border-t-2 border-accent pt-4">
        <p className="text-display-md text-ink">{answer}</p>

        <div className="compare-audio">
          <div className="compare-audio__row">
            <div className="compare-audio__slot">
              <PlayButton
                text={answer}
                label={`Modelo: ${answer}`}
                speed={speed}
                stopToken={playbackStopToken}
              />
            </div>
            <div className="compare-audio__meta">
              <span className="mono-cap compare-audio__label">Modelo</span>
              <span className="mono-cap text-ink-mute">·</span>
              <button
                type="button"
                onClick={() => setSpeed("slow")}
                aria-pressed={speed === "slow"}
                className="mono-cap transition-colors"
                style={{ color: speed === "slow" ? "var(--accent)" : undefined }}
              >
                lento
              </button>
              <span className="mono-cap text-ink-mute">/</span>
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

          {recorderSupported && (
            <div className="compare-audio__row">
              <div className="compare-audio__slot">
                {draft.recordingId ? (
                  <RecordingPlayButton
                    key={draft.recordingId}
                    recordingId={draft.recordingId}
                    stopToken={playbackStopToken}
                  />
                ) : (
                  <span className="compare-audio__slot-empty" aria-hidden>
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.6}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="9" y="3" width="6" height="11" rx="3" />
                      <path d="M6 11a6 6 0 0 0 12 0M12 17v3" />
                    </svg>
                  </span>
                )}
              </div>
              <div className="compare-audio__meta">
                <span className="mono-cap compare-audio__label compare-audio__label--mine">
                  Tu voz
                </span>
                <span className="mono-cap text-ink-mute">·</span>
                <RecordingCaptureButton
                  replaceId={draft.recordingId}
                  label={draft.recordingId ? "Grabar de nuevo" : "Grabar ahora"}
                  onCaptureStart={() => setPlaybackStopToken((t) => t + 1)}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {whySegments.length > 0 && (
        <aside className="tip-card mt-4 lg:mt-3.5" aria-label="Nota">
          <span className="mono-cap tip-card__label">Nota</span>
          <p className="tip-card__body">
            {whySegments.map((seg, i) =>
              seg.italic ? <em key={i}>{seg.text}</em> : <span key={i}>{seg.text}</span>
            )}
          </p>
        </aside>
      )}

      <div className="flex-1 lg:hidden" />

      {!showReflection ? (
        <div className="mb-4 lg:mt-8">
          <p className="mono-cap mb-3 text-center">
            Escucha, compara, y sigue cuando quieras
          </p>
          <button
            type="button"
            onClick={() => setShowReflection(true)}
            className="btn-primary"
          >
            <span className="lab">Listo para seguir</span>
            <svg
              viewBox="0 0 24 24"
              width="19"
              height="19"
              aria-hidden
              fill="none"
              stroke="currentColor"
              strokeWidth={1.6}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      ) : (
        <div ref={reflectionRef} className="lg:mt-8">
          <p className="mb-3 font-display text-base italic text-ink">
            ¿Cómo se sintió la tuya?
          </p>

          <div className="mb-4 flex flex-col gap-2 lg:mb-0">
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
      )}
    </div>
  );
}
