export type EnglishToken = {
  /** Text as it appears in the sentence (preserves casing). */
  text: string;
  /** Lowercase lookup key for wordHints, or null for punctuation / whitespace. */
  key: string | null;
};

const WORD_RE = /[A-Za-zÀ-ÿ']+/g;

/**
 * Split an English prompt into word and punctuation tokens for hint lookup.
 * Contractions stay intact (e.g. "I'm" → key "i'm").
 */
export function tokenizeEnglish(text: string): EnglishToken[] {
  const tokens: EnglishToken[] = [];
  let last = 0;

  for (const match of text.matchAll(WORD_RE)) {
    const start = match.index ?? 0;
    const word = match[0];

    if (start > last) {
      tokens.push({ text: text.slice(last, start), key: null });
    }

    tokens.push({ text: word, key: word.toLowerCase() });
    last = start + word.length;
  }

  if (last < text.length) {
    tokens.push({ text: text.slice(last), key: null });
  }

  return tokens;
}
