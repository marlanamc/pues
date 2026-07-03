/**
 * Juegos — the Práctica game library.
 *
 * One source of truth for every playable game so the games shelf
 * (/practice/games), the Práctica door count, and any future "continue
 * playing" surface stay in sync. The shelf's lead tile ("Juego de hoy")
 * rotates through this list by day index — order matters for variety,
 * not for rank.
 */

export type GameItem = {
  href: string;
  label: string;
  /** Spanish-first, a little playful — the shelf's voice. */
  description: string;
  /** English gloss for the EN toggle. */
  descriptionEn: string;
  /** Skill area badge, e.g. "Frases", "Tiempos", "Verbos". */
  group: string;
  /** Difficulty label shown as quiet row meta. */
  level: string;
  iconId: "build" | "timeline" | "markers" | "scales" | "flash";
};

export const games: GameItem[] = [
  {
    href: "/practice/sentence-builder",
    label: "Construye la frase",
    description: "Ordena las palabras hasta que la frase suene bien.",
    descriptionEn: "Tap the Spanish words into the right order.",
    group: "Frases",
    level: "Principiante 1",
    iconId: "build",
  },
  {
    href: "/practice/la-linea",
    label: "La Línea",
    description: "Cada frase a su tiempo: ¿pasado, presente o futuro?",
    descriptionEn: "Place each sentence on the timeline of tenses.",
    group: "Tiempos",
    level: "Principiante 2",
    iconId: "timeline",
  },
  {
    href: "/practice/marcadores",
    label: "Marcadores",
    description: "¿Ayer pide pasado? Une cada marcador con su tiempo.",
    descriptionEn: "Match time words to the tense they call for.",
    group: "Tiempos",
    level: "Principiante 2",
    iconId: "markers",
  },
  {
    href: "/practice/ser-estar",
    label: "Ser vs Estar",
    description: "Cada frase a su verbo. Suena fácil… hasta que no.",
    descriptionEn: "Sort each sentence into ser or estar. Easy… until it isn't.",
    group: "Verbos",
    level: "Principiante 1",
    iconId: "scales",
  },
  {
    href: "/practice/sentence-former",
    label: "Formar la frase",
    description: "Termina la frase antes de pensarlo demasiado.",
    descriptionEn: "Finish the sentence before you overthink it.",
    group: "Frases",
    level: "Principiante 1",
    iconId: "flash",
  },
];

export const gameCount = games.length;
