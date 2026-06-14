"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { deleteRecording, putRecording } from "@/lib/audioStore";

export type RecorderState =
  | "idle"
  | "recording"
  | "done"
  | "denied"
  | "unsupported";

function newRecordingId() {
  return `rec_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

export function isRecorderSupported() {
  return (
    typeof window !== "undefined" &&
    "MediaRecorder" in window &&
    typeof navigator !== "undefined" &&
    !!navigator.mediaDevices?.getUserMedia
  );
}

/**
 * Thin MediaRecorder wrapper for the Speak screen and inline re-record on Reveal.
 *
 * The speak-first GATE is the must-have: a tap unlocks the reveal. Recording
 * the user's voice is the nice-to-have layered on top. If the browser lacks
 * MediaRecorder, or the user denies the mic, this degrades to gating-only
 * (state `unsupported`/`denied`) — the flow must never dead-end on that.
 *
 * On stop, the clip is persisted to IndexedDB under a generated id, exposed as
 * `recordingId` so the flow can attach it to the saved Thought.
 */
export function useRecorder(options?: { replaceId?: string | null }) {
  const [state, setState] = useState<RecorderState>("idle");
  const [recordingId, setRecordingId] = useState<string | null>(null);

  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);
  const replaceIdRef = useRef(options?.replaceId ?? null);

  useEffect(() => {
    replaceIdRef.current = options?.replaceId ?? null;
  }, [options?.replaceId]);

  const supported = isRecorderSupported();

  const stopTracks = useCallback(() => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
  }, []);

  useEffect(() => {
    return () => {
      try {
        if (recorderRef.current && recorderRef.current.state !== "inactive") {
          recorderRef.current.stop();
        }
      } catch {
        /* ignore */
      }
      stopTracks();
    };
  }, [stopTracks]);

  /** Begin recording. Returns false if unsupported or denied (caller degrades). */
  const start = useCallback(async (): Promise<boolean> => {
    if (!supported) {
      setState("unsupported");
      return false;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      chunksRef.current = [];
      setRecordingId(null);

      const recorder = new MediaRecorder(stream);
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };
      recorder.onstop = () => {
        void (async () => {
          const blob = new Blob(chunksRef.current, {
            type: recorder.mimeType || "audio/webm",
          });
          stopTracks();
          if (blob.size > 0) {
            const id = newRecordingId();
            await putRecording(id, blob);
            const oldId = replaceIdRef.current;
            if (oldId && oldId !== id) {
              await deleteRecording(oldId);
            }
            setRecordingId(id);
            setState("done");
          } else {
            setState("idle");
          }
        })();
      };

      recorderRef.current = recorder;
      recorder.start();
      setState("recording");
      return true;
    } catch {
      stopTracks();
      setState("denied");
      return false;
    }
  }, [supported, stopTracks]);

  const stop = useCallback(() => {
    const recorder = recorderRef.current;
    if (recorder && recorder.state !== "inactive") {
      recorder.stop();
    } else {
      setState("done");
    }
  }, []);

  const reset = useCallback(() => {
    setState("idle");
    setRecordingId(null);
    chunksRef.current = [];
  }, []);

  return { state, recordingId, supported, start, stop, reset };
}
