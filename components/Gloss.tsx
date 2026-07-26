"use client";

import { usePhraseEnglishVisible } from "@/hooks/usePhraseEnglishVisible";

export function Gloss({ children }: { children: string }) {
  const { visible } = usePhraseEnglishVisible();
  if (!visible) return null;
  return (
    <span className="gloss-line">{children}</span>
  );
}
