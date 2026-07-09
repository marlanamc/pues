"use client";

import type { RecorderState } from "@/hooks/useRecorder";

const ringIdle =
  "0 0 0 10px color-mix(in oklab, var(--accent) 15%, transparent)";
const ringRecording =
  "0 0 0 14px color-mix(in oklab, var(--accent) 22%, transparent)";

/**
 * Mic control for Speak / Reveal. Presentational — recording lifecycle lives
 * in the page. `variant="optional"` is the secondary Grabar control on Speak;
 * default keeps the larger accent circle for places that still lead with mic.
 */
export function MicButton({
  state,
  onTap,
  variant = "primary",
}: {
  state: RecorderState;
  onTap: () => void;
  variant?: "primary" | "optional";
}) {
  const recording = state === "recording";
  const optional = variant === "optional";
  const size = optional && !recording ? 52 : 86;

  const label =
    state === "recording"
      ? "Stop recording"
      : state === "done"
        ? "Recorded"
        : "Record (optional)";

  return (
    <button
      type="button"
      onClick={onTap}
      aria-label={label}
      className={[
        "mic-btn flex items-center justify-center rounded-full transition-shadow",
        recording ? "mic-btn--recording" : "mic-btn--idle",
        optional && !recording ? "mic-btn--optional" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        width: size,
        height: size,
        border: optional && !recording ? "1px solid var(--rule)" : "none",
        cursor: "pointer",
        background:
          optional && !recording
            ? "color-mix(in oklab, var(--accent) 12%, var(--surface))"
            : "var(--accent)",
        color:
          optional && !recording ? "var(--accent)" : "var(--accent-ink)",
        boxShadow: recording ? ringRecording : optional ? "none" : ringIdle,
      }}
    >
      {state === "done" ? (
        <svg
          viewBox="0 0 24 24"
          width={optional ? 22 : 32}
          height={optional ? 22 : 32}
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
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          aria-hidden
          fill="currentColor"
        >
          <rect x="7" y="7" width="10" height="10" rx="2.5" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          width={optional ? 22 : 32}
          height={optional ? 22 : 32}
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
