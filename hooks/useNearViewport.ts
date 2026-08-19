"use client";

import { useEffect, useState, type RefObject } from "react";

/**
 * Whether an element is within `margin` of the viewport.
 *
 * Used to keep only a handful of writing canvases live at once. A full week's
 * sheet is 35 lines, and a canvas backing store on a 2x screen is roughly half
 * a megabyte each — iOS purges those under memory pressure, and a purged
 * backing store comes back blank, which would look exactly like losing your
 * handwriting. The strokes themselves live in IndexedDB, so a row that scrolls
 * away can be torn down and rebuilt from storage without losing anything.
 */
export function useNearViewport(ref: RefObject<Element | null>, margin = "800px"): boolean {
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // No feature check: InkLine already depends on ResizeObserver, which
    // reached Safari a year later than IntersectionObserver. Anything that can
    // draw a line can observe one.
    const observer = new IntersectionObserver(
      ([entry]) => setNear(entry.isIntersecting),
      { rootMargin: margin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, margin]);

  return near;
}
