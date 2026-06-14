"use client";

import { useEffect, useState } from "react";
import {
  getPhraseEnglishVisible,
  setPhraseEnglishVisible as persistPhraseEnglishVisible,
} from "@/lib/store";

const PHRASE_ENGLISH_EVENT = "pues:phrase-english-visible-change";

export function usePhraseEnglishVisible() {
  const [visible, setVisibleState] = useState(false);

  useEffect(() => {
    const current = getPhraseEnglishVisible();
    setVisibleState(current);

    function sync() {
      setVisibleState(getPhraseEnglishVisible());
    }

    window.addEventListener(PHRASE_ENGLISH_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(PHRASE_ENGLISH_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  function setVisible(next: boolean) {
    persistPhraseEnglishVisible(next);
    setVisibleState(next);
    window.dispatchEvent(new Event(PHRASE_ENGLISH_EVENT));
  }

  return { visible, setVisible };
}
