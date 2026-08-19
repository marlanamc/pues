"use client";

import { useSyncExternalStore } from "react";
import { useTabletUp } from "@/hooks/useMediaQuery";
import { getInkInput, setInkInput as persistInkInput, type InkInput } from "@/lib/store";

const INK_INPUT_EVENT = "pues:ink-input-change";

function subscribe(callback: () => void) {
  window.addEventListener(INK_INPUT_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(INK_INPUT_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

/**
 * Which input Escribir opens with. The stored preference is three-valued:
 * an explicit "ink"/"type" always wins, and "auto" — the default — lets the
 * viewport decide, so the iPad gets a pencil and the phone gets a keyboard
 * without anyone having to choose.
 */
export function useInkInput() {
  const preference = useSyncExternalStore(
    subscribe,
    () => getInkInput(),
    () => "auto" as InkInput,
  );

  // "auto" resolves by viewport — a phone has no pencil, a tablet does.
  const wide = useTabletUp();

  function setPreference(next: InkInput) {
    persistInkInput(next);
    window.dispatchEvent(new Event(INK_INPUT_EVENT));
  }

  return {
    preference,
    usingInk: preference === "ink" || (preference === "auto" && wide),
    setPreference,
  };
}
