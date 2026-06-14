"use client";

import { useEffect, useState } from "react";
import {
  getAudioSpeed,
  setAudioSpeed as persistAudioSpeed,
  type AudioSpeed,
} from "@/lib/store";

const AUDIO_SPEED_EVENT = "pues:audio-speed-change";

export function playbackRateFor(speed: AudioSpeed) {
  return speed === "slow" ? 0.75 : 1;
}

export function useAudioSpeed() {
  const [speed, setSpeedState] = useState<AudioSpeed>("normal");

  useEffect(() => {
    setSpeedState(getAudioSpeed());

    function sync() {
      setSpeedState(getAudioSpeed());
    }

    window.addEventListener(AUDIO_SPEED_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(AUDIO_SPEED_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  function setSpeed(next: AudioSpeed) {
    persistAudioSpeed(next);
    setSpeedState(next);
    window.dispatchEvent(new Event(AUDIO_SPEED_EVENT));
  }

  return { speed, setSpeed, playbackRate: playbackRateFor(speed) };
}
