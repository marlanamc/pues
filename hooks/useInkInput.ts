"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { getInkInput, setInkInput as persistInkInput, type InkInput } from "@/lib/store";

const INK_INPUT_EVENT = "pues:ink-input-change";

/** Below this the surface opens with the keyboard — a phone has no pencil. */
const TABLET_QUERY = "(min-width: 768px)";

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

  // Resolved after mount: the server has no viewport, so "auto" starts as the
  // keyboard and settles on the first client pass rather than mismatching.
  const [wide, setWide] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(TABLET_QUERY);
    const sync = () => setWide(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

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
