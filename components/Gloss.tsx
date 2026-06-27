"use client";

import { usePhraseEnglishVisible } from "@/hooks/usePhraseEnglishVisible";

export function Gloss({ children }: { children: string }) {
  const { visible } = usePhraseEnglishVisible();
  if (!visible) return null;
  return (
    <span
      className="font-display"
      style={{
        display: "block",
        fontSize: 11,
        fontStyle: "italic",
        color: "var(--ink-mute)",
        marginTop: 3,
      }}
    >
      {children}
    </span>
  );
}
