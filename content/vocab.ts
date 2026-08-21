export type { CoreWord, VocabTheme, VocabThemeSlug } from "./vocab/types";
import type { CoreWord, VocabTheme, VocabThemeSlug } from "./vocab/types";

import { animales, transporte, lugares, ropa, colores } from "./vocab/cosas";
import { gente, trabajos, sociedad, arte } from "./vocab/gente";
import { bebidas, comida, casa, electronica } from "./vocab/casa";
import { cuerpo, naturaleza, materiales, medidas, varios, direcciones } from "./vocab/mundo";
import { estaciones, numeros, meses, dias, tiempo } from "./vocab/tiempo";
import { verbos } from "./vocab/acciones";
import { adjetivos, pronombres } from "./vocab/cualidades";
import { preguntas, preposiciones, conectores } from "./vocab/pegamento";

/**
 * Las palabras barrel — the Fluent Forever 625 in source-list order, then the
 * glue (preguntas, preposiciones, conectores).
 *
 * Follows CURRICULUM.md convention 7: types live in content/vocab/types.ts and
 * are imported by the theme files, never the other way around, so there is no
 * circular import. Theme files are grouped by kind rather than one-per-theme.
 *
 * The index renders `vocabThemes` in this order and the sweep follows it:
 * related words scan faster in their group, and scanning fast is the whole
 * point of the sweep.
 */
export const vocabThemes: VocabTheme[] = [
  animales,
  transporte,
  lugares,
  ropa,
  colores,
  gente,
  trabajos,
  sociedad,
  arte,
  bebidas,
  comida,
  casa,
  electronica,
  cuerpo,
  naturaleza,
  materiales,
  medidas,
  varios,
  direcciones,
  estaciones,
  numeros,
  meses,
  dias,
  tiempo,
  verbos,
  adjetivos,
  pronombres,
  preguntas,
  preposiciones,
  conectores,
];

export const vocabWords: CoreWord[] = vocabThemes.flatMap((t) => t.words);

export const VOCAB_TOTAL = vocabWords.length;

// Lookups are Maps, not .find(): the drill resolves a word by id on every card,
// and a linear scan over 600+ entries is the kind of cost that never shows up
// in dev and does on a phone.
const byId = new Map(vocabWords.map((w) => [w.id, w]));
const bySlug = new Map<string, VocabTheme>(vocabThemes.map((t) => [t.slug, t]));

export function wordById(id: string): CoreWord | undefined {
  return byId.get(id);
}

export function themeBySlug(slug: string): VocabTheme | undefined {
  return bySlug.get(slug);
}

/** Every id in one theme, in authoring order — the shape lib/store's counters take. */
export function wordIdsForTheme(slug: VocabThemeSlug): string[] {
  return bySlug.get(slug)?.words.map((w) => w.id) ?? [];
}

/** Every id in the list, theme order preserved. */
export function allWordIds(): string[] {
  return vocabWords.map((w) => w.id);
}
