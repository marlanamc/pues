"use client";

import { useEffect } from "react";
import { useRecorder } from "@/hooks/useRecorder";
import { useFlowDraft } from "@/hooks/useFlowDraft";

type RecordingCaptureButtonProps = {
  replaceId?: string;
  label: string;
  recordingLabel?: string;
  onCaptureStart?: () => void;
  onCaptured?: (recordingId: string) => void;
};

/**
 * Inline mic control for re-recording on Reveal (Grabar de nuevo / Grabar ahora).
 */
export function RecordingCaptureButton({
  replaceId,
  label,
  recordingLabel = "Escuchando… tap para terminar",
  onCaptureStart,
  onCaptured,
}: RecordingCaptureButtonProps) {
  const { patch } = useFlowDraft();
  const recorder = useRecorder({ replaceId });

  useEffect(() => {
    if (recorder.state !== "done" || !recorder.recordingId) return;
    patch({ recordingId: recorder.recordingId });
    onCaptured?.(recorder.recordingId);
    recorder.reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recorder.state, recorder.recordingId]);

  if (!recorder.supported) return null;

  async function onTap() {
    if (recorder.state === "recording") {
      recorder.stop();
      return;
    }
    if (recorder.state === "done") return;
    onCaptureStart?.();
    await recorder.start();
  }

  const recording = recorder.state === "recording";
  const subtitle = recording ? recordingLabel : label;

  return (
    <button
      type="button"
      onClick={onTap}
      aria-label={subtitle}
      className="mono-cap inline-flex items-center gap-1.5 transition-colors hover:text-accent"
      style={{ color: recording ? "var(--accent)" : "var(--ink-mute)" }}
    >
      {recording ? (
        <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden fill="currentColor">
          <rect x="7" y="7" width="10" height="10" rx="2.5" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          width="13"
          height="13"
          aria-hidden
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="9" y="3" width="6" height="11" rx="3" />
          <path d="M6 11a6 6 0 0 0 12 0M12 17v3" />
        </svg>
      )}
      {subtitle}
    </button>
  );
}
