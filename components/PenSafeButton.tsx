"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { usePenSafePress } from "@/hooks/usePenSafePress";

/**
 * A button that ignores a resting palm. See `hooks/usePenSafePress.ts` for why.
 *
 * The component form exists for buttons rendered inside a map, where a hook
 * cannot be called per item.
 */
export function PenSafeButton({
  onPress,
  children,
  ...rest
}: Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "onPointerDown"> & {
  onPress: () => void;
  children: ReactNode;
}) {
  const press = usePenSafePress(onPress);
  return (
    <button type="button" {...rest} {...press}>
      {children}
    </button>
  );
}
