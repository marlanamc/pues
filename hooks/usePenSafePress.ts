"use client";

import { useRef, type MouseEvent, type PointerEvent } from "react";
import { isStrayTouch } from "@/lib/pen";

/**
 * Props for a button that must not answer to a resting palm.
 *
 * Anything sitting on a screen you write on with a stylus is a target for the
 * hand holding it. Some of those presses are merely annoying — a hint opening
 * itself — and some undo the work: saving and advancing mid-sentence,
 * revealing an answer you were still writing, erasing a line.
 *
 * The pointer that opened the press decides whether the press counts. A
 * keyboard activation reports `detail === 0` and always counts, so this costs
 * nothing in accessibility. Someone who never picks up a pencil is unaffected:
 * the rule only arms once a pen has been seen (see `lib/pen.ts`).
 *
 *   <button {...usePenSafePress(() => save())}>Guardar</button>
 */
export function usePenSafePress(onPress: () => void) {
  const strayRef = useRef(false);

  return {
    onPointerDown: (e: PointerEvent) => {
      strayRef.current = isStrayTouch(e.pointerType);
    },
    onClick: (e: MouseEvent) => {
      if (e.detail !== 0 && strayRef.current) return;
      onPress();
    },
  };
}
