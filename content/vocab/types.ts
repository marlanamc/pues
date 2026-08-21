/**
 * Las palabras — the Fluent Forever 625, authored in Spanish.
 *
 * The daily ritual teaches shapes: frames, stems, completions, tense. What it
 * never teaches is the noun that goes in the slot, and a frame with a hole in
 * it is still a hole. This is the list that fills the holes — high-frequency
 * concrete vocabulary, grouped thematically, swept for what's already known
 * and drilled for what isn't.
 *
 * Distinct from `VocabWord` in content/readings/types.ts on purpose. That one
 * is *incidental* — the four words in tonight's dialogue, anonymous and
 * uncounted. This one is *canonical*: a fixed list you are working through,
 * with a stable id because per-word progress is keyed by it.
 */

/**
 * Theme slug — the URL segment and the id prefix. The union is what keeps the
 * barrel's theme array and the route's params honest at compile time.
 */
export type VocabThemeSlug =
  | "animales"
  | "transporte"
  | "lugares"
  | "ropa"
  | "colores"
  | "gente"
  | "trabajos"
  | "sociedad"
  | "arte"
  | "bebidas"
  | "comida"
  | "casa"
  | "electronica"
  | "cuerpo"
  | "naturaleza"
  | "materiales"
  | "medidas"
  | "varios"
  | "direcciones"
  | "estaciones"
  | "numeros"
  | "meses"
  | "dias"
  | "tiempo"
  | "verbos"
  | "adjetivos"
  | "pronombres";

export type CoreWord = {
  /**
   * Stable progress key: `v-<themeSlug>-<headword>`, accent-folded and
   * article-stripped.
   *
   * FIXED AT AUTHORING TIME. `pues:vocab` is keyed by it, so correcting a
   * headword or reworking a gloss must leave the id alone — otherwise the
   * word silently reverts to unseen and the owner re-sweeps work they already
   * did. The test checks format and uniqueness, deliberately never derivation.
   */
  id: string;
  /**
   * The headword, and only the headword. Nouns carry their article so gender
   * is learned with the word; verbs are infinitives; adjectives are the
   * masculine singular citation form.
   *
   * Never "el maestro / la maestra" — a slash breaks TTS, overflows the recall
   * card's single line, and has no honest id. Author the other form as its own
   * entry where the list calls for both, or let the example carry it.
   */
  es: string;
  /**
   * English gloss. This is the *stimulus* side of the recall card, not
   * decoration — see the note in components/VocabRecall.tsx about why it must
   * never be rendered through <Gloss>. Parentheses only to separate homonyms
   * that both appear on the list: "short (vs tall)".
   */
  en: string;
  /** One sentence using the word, in the register of CURRICULUM.md conv. 3/6/9. */
  example: string;
  exampleEn: string;
};

export type VocabTheme = {
  slug: VocabThemeSlug;
  /** Spanish label — what the index shows. */
  label: string;
  /** English gloss for the EN toggle. */
  labelEn: string;
  words: CoreWord[];
};
