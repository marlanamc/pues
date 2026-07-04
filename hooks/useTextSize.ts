"use client";

import { useSyncExternalStore } from "react";
import {
  getTextSize,
  setTextSize as persistTextSize,
  type TextSize,
} from "@/lib/store";

const TEXT_SIZE_EVENT = "pues:text-size-change";

export function applyTextSize(size: TextSize) {
  if (typeof document === "undefined") return;
  document.documentElement.dataset.textSize = size;
}

function subscribe(callback: () => void) {
  window.addEventListener(TEXT_SIZE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(TEXT_SIZE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

export function useTextSize() {
  const size = useSyncExternalStore(
    subscribe,
    () => getTextSize(),
    () => "default" as TextSize,
  );

  function setSize(next: TextSize) {
    persistTextSize(next);
    applyTextSize(next);
    window.dispatchEvent(new Event(TEXT_SIZE_EVENT));
  }

  return { size, setSize };
}
