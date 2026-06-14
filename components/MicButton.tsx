"use client";

import type { RecorderState } from "@/hooks/useRecorder";

const ringIdle =
  "0 0 0 10px color-mix(in oklab, var(--accent) 15%, transparent)";
const ringRecording =
  "0 0 0 14px color-mix(in oklab, var(--accent) 22%, transparent)";

/**
 * The 86px accent mic circle from the Speak screen. Presentational — the
 * recording lifecycle lives in the page; this just reflects `state`.
 */
export function MicButton({
  state,
  onTap,
}: {
  state: RecorderState;
  onTap: () => void;
}) {
  const recording = state === "recording";

  const label =
    state === "recording"
      ? "Stop recording"
      : state === "done"
        ? "Recorded"
        : "Start recording";

  return (
    <button
      type="button"
      onClick={onTap}
      aria-label={label}
      className="flex items-center justify-center rounded-full transition-shadow"
      style={{
        width: 86,
        height: 86,
        border: "none",
        cursor: "pointer",
        background: "var(--accent)",
        color: "var(--accent-ink)",
        boxShadow: recording ? ringRecording : ringIdle,
      }}
    >
      {state === "done" ? (
        <svg
          viewBox="0 0 24 24"
          width="32"
          height="32"
          aria-hidden
          fill="none"
          stroke="currentColor"
          strokeWidth={1.9}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12.5 10 17l9-10" />
        </svg>
      ) : recording ? (
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden fill="currentColor">
          <rect x="7" y="7" width="10" height="10" rx="2.5" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          width="32"
          height="32"
          aria-hidden
          fill="none"
          stroke="currentColor"
          strokeWidth={1.7}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="9" y="3" width="6" height="11" rx="3" />
          <path d="M6 11a6 6 0 0 0 12 0M12 17v3" />
        </svg>
      )}
    </button>
  );
}
