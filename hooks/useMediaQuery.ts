"use client";

import { useEffect, useState } from "react";

/**
 * Tracks a media query from the client.
 *
 * Starts false: the server has no viewport, so every caller settles on the
 * first client pass rather than mismatching during hydration.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(query);
    const sync = () => setMatches(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [query]);

  return matches;
}

/** Wide enough for tablet proportions. */
export function useTabletUp(): boolean {
  return useMediaQuery("(min-width: 768px)");
}

/**
 * Wide *and* tall enough to spend height freely. iPad portrait qualifies;
 * iPad landscape is only 768–834px tall, where a taller writing page would
 * push the save button below the fold.
 */
export function useRoomyPage(): boolean {
  return useMediaQuery("(min-width: 768px) and (min-height: 900px)");
}
