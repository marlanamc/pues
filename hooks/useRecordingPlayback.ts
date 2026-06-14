"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { getRecordingUrl } from "@/lib/audioStore";

export type PlaybackState = "idle" | "loading" | "playing" | "unavailable";

export function useRecordingPlayback(recordingId?: string) {
  const [state, setState] = useState<PlaybackState>("idle");
  const urlRef = useRef<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const idRef = useRef(recordingId);

  useEffect(() => {
    idRef.current = recordingId;
    audioRef.current?.pause();
    if (urlRef.current) {
      URL.revokeObjectURL(urlRef.current);
      urlRef.current = null;
    }
    setState(recordingId ? "idle" : "idle");
  }, [recordingId]);

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      if (urlRef.current) {
        URL.revokeObjectURL(urlRef.current);
        urlRef.current = null;
      }
    };
  }, []);

  const stop = useCallback(() => {
    audioRef.current?.pause();
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
    setState((s) => (s === "playing" ? "idle" : s));
  }, []);

  const play = useCallback(async () => {
    const id = idRef.current;
    if (!id || state === "loading" || state === "playing") return;

    try {
      setState("loading");
      if (!urlRef.current) {
        const url = await getRecordingUrl(id);
        if (!url) {
          setState("unavailable");
          return;
        }
        urlRef.current = url;
      }

      const audio = audioRef.current ?? new Audio();
      audioRef.current = audio;
      audio.onended = () => setState("idle");
      audio.onpause = () => setState((s) => (s === "playing" ? "idle" : s));
      audio.src = urlRef.current;
      setState("playing");
      await audio.play();
    } catch {
      setState("unavailable");
    }
  }, [state]);

  return { state, play, stop, hasRecording: Boolean(recordingId) };
}
