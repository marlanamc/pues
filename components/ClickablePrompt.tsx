"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import type { WordHint } from "@/content/prompts";
import { tokenizeEnglish } from "@/lib/tokenizeEnglish";

type ClickablePromptProps = {
  text: string;
  wordHints?: WordHint[];
  /** Size/typography class for the prompt. Defaults to the large speak-prompt style. */
  className?: string;
  /** Wrap the prompt in curly quotes. Defaults to true. */
  quotes?: boolean;
};

export function ClickablePrompt({
  text,
  wordHints,
  className = "text-display-prompt",
  quotes = true,
}: ClickablePromptProps) {
  const hintMap = useMemo(() => {
    const map = new Map<string, string>();
    for (const hint of wordHints ?? []) {
      map.set(hint.en.toLowerCase(), hint.es);
    }
    return map;
  }, [wordHints]);

  const tokens = useMemo(() => tokenizeEnglish(text), [text]);
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const containerRef = useRef<HTMLParagraphElement>(null);
  const popoverId = useId();

  useEffect(() => {
    if (!activeKey) return;

    function onPointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setActiveKey(null);
      }
    }

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [activeKey]);

  return (
    <p
      ref={containerRef}
      className={`${className} text-ink clickable-prompt`}
    >
      {quotes && "“"}
      {tokens.map((token, i) => {
        if (!token.key) {
          return <span key={i}>{token.text}</span>;
        }

        const gloss = hintMap.get(token.key);
        if (!gloss) {
          return <span key={i}>{token.text}</span>;
        }

        const isActive = activeKey === token.key;

        return (
          <span key={i} className="clickable-prompt__word-wrap">
            <button
              type="button"
              className={`clickable-prompt__word${isActive ? " is-active" : ""}`}
              aria-label={`Spanish: ${gloss}`}
              aria-expanded={isActive}
              aria-controls={isActive ? popoverId : undefined}
              onClick={() => setActiveKey(isActive ? null : token.key)}
              onMouseEnter={() => setActiveKey(token.key)}
              onMouseLeave={() => setActiveKey((k) => (k === token.key ? null : k))}
              onFocus={() => setActiveKey(token.key)}
              onBlur={() => setActiveKey((k) => (k === token.key ? null : k))}
            >
              {token.text}
            </button>
            {isActive && (
              <span
                id={popoverId}
                role="tooltip"
                className="clickable-prompt__popover"
              >
                {gloss}
              </span>
            )}
          </span>
        );
      })}
      {quotes && "”"}
    </p>
  );
}
