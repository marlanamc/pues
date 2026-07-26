/**
 * Más práctica — curriculum-aligned drills that aren't games.
 * Lives on /mas, separate from the Juegos shelf.
 */

export type MasPracticaItem = {
  href: string;
  label: string;
  description: string;
  descriptionEn: string;
  meta?: string;
  metaEn?: string;
};

export const masPracticaItems: MasPracticaItem[] = [
  {
    href: "/practice/sentence-former",
    label: "Formar la frase",
    description: "Termina la frase antes de pensarlo demasiado.",
    descriptionEn: "Finish the sentence before you overthink it.",
    meta: "5 frases",
    metaEn: "5 sentences",
  },
];
