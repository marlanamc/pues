"use client";

import { useSyncExternalStore } from "react";
import {
  getPhraseEnglishVisible,
  setPhraseEnglishVisible as persistPhraseEnglishVisible,
} from "@/lib/store";

const PHRASE_ENGLISH_EVENT = "pues:phrase-english-visible-change";

function subscribe(callback: () => void) {
  window.addEventListener(PHRASE_ENGLISH_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(PHRASE_ENGLISH_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

export function usePhraseEnglishVisible() {
  const visible = useSyncExternalStore(
    subscribe,
    () => getPhraseEnglishVisible(),
    () => false,
  );

  function setVisible(next: boolean) {
    persistPhraseEnglishVisible(next);
    window.dispatchEvent(new Event(PHRASE_ENGLISH_EVENT));
  }

  return { visible, setVisible };
}
