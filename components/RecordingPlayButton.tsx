"use client";

import { useEffect } from "react";
import { useRecordingPlayback } from "@/hooks/useRecordingPlayback";

type RecordingPlayButtonProps = {
  recordingId?: string;
  label?: string;
  onPlayStart?: () => void;
  /** Increment to stop any in-progress playback (e.g. when re-recording starts). */
  stopToken?: number;
};

/**
 * Replay a user recording from IndexedDB. Styled as a small circle like PlayButton.
 */
export function RecordingPlayButton({
  recordingId,
  label = "Tu voz",
  onPlayStart,
  stopToken = 0,
}: RecordingPlayButtonProps) {
  const { state, play, stop } = useRecordingPlayback(recordingId);

  useEffect(() => {
    stop();
  }, [stopToken, stop]);

  if (!recordingId) return null;

  async function onClick() {
    if (state === "loading") return;
    if (state === "playing") {
      stop();
      return;
    }
    onPlayStart?.();
    await play();
  }

  if (state === "unavailable") return null;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Reproducir: ${label}`}
      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-rule text-ink-mute transition-colors hover:border-accent/60 hover:text-accent active:bg-surface-sunk"
    >
      {state === "loading" ? (
        <span className="block h-3 w-3 animate-spin rounded-full border border-current border-t-transparent" />
      ) : state === "playing" ? (
        <svg viewBox="0 0 16 16" className="h-4 w-4 fill-current" aria-hidden>
          <rect x="4" y="3" width="3" height="10" rx="1" />
          <rect x="9" y="3" width="3" height="10" rx="1" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
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
    </button>
  );
}
