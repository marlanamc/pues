/**
 * Más práctica — curriculum-aligned drills that aren't games.
 * Lives on /mas, separate from the Juegos shelf.
 */

import { readingDays } from "./readings";
import { VOCAB_TOTAL } from "./vocab";

export type MasPracticaItem = {
  href: string;
  label: string;
  description: string;
  descriptionEn: string;
  meta?: string;
  metaEn?: string;
  /**
   * Which motif and tint the /mas row wears. Named rather than positional:
   * the shelf used to pick both by array index, so a third item silently
   * inherited the second one's icon. Same pattern as GameItem.iconId.
   */
  iconId: "sentence-former" | "book" | "words";
};

export const masPracticaItems: MasPracticaItem[] = [
  {
    href: "/practice/sentence-former",
    label: "Formar la frase",
    description: "Termina la frase antes de pensarlo demasiado.",
    descriptionEn: "Finish the sentence before you overthink it.",
    meta: "5 frases",
    metaEn: "5 sentences",
    iconId: "sentence-former",
  },
  {
    href: "/read?dias",
    label: "La lectura",
    description: "Vocabulario y diálogo — elige cualquier día.",
    descriptionEn: "Vocabulary and dialogue — pick any day.",
    meta: `${readingDays.length} días`,
    metaEn: `${readingDays.length} days`,
    iconId: "book",
  },
  {
    href: "/palabras",
    label: "Las palabras",
    description: "Barre un tema y repasa lo que falte.",
    descriptionEn: "Sweep a theme, drill whatever's left.",
    meta: `${VOCAB_TOTAL} palabras`,
    metaEn: `${VOCAB_TOTAL} words`,
    iconId: "words",
  },
];
