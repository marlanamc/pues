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
 * Las palabras barrel — adult-first, not Fluent Forever source order.
 *
 * An adult already has a verb when they stall. What they lack is the slot
 * around it: who, where, when, how, then the people and places of a real
 * week, then the nouns that fill a kitchen. Picture-book themes (animals,
 * colors, art) wait at the bottom. Related themes still sit together so a
 * sweep stays in one neighborhood.
 *
 * Follows CURRICULUM.md convention 7: types live in content/vocab/types.ts and
 * are imported by the theme files, never the other way around, so there is no
 * circular import. Theme files are grouped by kind rather than one-per-theme.
 */
export const vocabThemes: VocabTheme[] = [
  preguntas,
  preposiciones,
  conectores,
  pronombres,
  tiempo,
  dias,
  meses,
  numeros,
  estaciones,
  gente,
  trabajos,
  sociedad,
  lugares,
  direcciones,
  transporte,
  casa,
  comida,
  bebidas,
  cuerpo,
  electronica,
  ropa,
  verbos,
  adjetivos,
  naturaleza,
  medidas,
  materiales,
  varios,
  colores,
  animales,
  arte,
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
