/**
 * Juegos — the Práctica game library.
 *
 * One source of truth for every playable game so the games menu, the Práctica
 * hub count, and any future "continue playing" surface stay in sync.
 */

export type GameItem = {
  href: string;
  label: string;
  description: string;
  /** Skill area badge, e.g. "Frases", "Tiempos", "Verbos". */
  group: string;
  /** Difficulty label shown as the row meta. */
  level: string;
  iconId: "build" | "timeline" | "markers" | "scales" | "flash";
  /** At most one — rendered as the standout card above the ledger. */
  featured?: boolean;
};

export const games: GameItem[] = [
  {
    href: "/practice/sentence-builder",
    label: "Construye la frase",
    description: "Tap the Spanish words into the right order.",
    group: "Frases",
    level: "Principiante 1",
    iconId: "build",
    featured: true,
  },
  {
    href: "/practice/la-linea",
    label: "La Línea",
    description: "Place each sentence on the timeline of tenses.",
    group: "Tiempos",
    level: "Principiante 2",
    iconId: "timeline",
  },
  {
    href: "/practice/marcadores",
    label: "Marcadores",
    description: "Match time words to the tense they call for.",
    group: "Tiempos",
    level: "Principiante 2",
    iconId: "markers",
  },
  {
    href: "/practice/ser-estar",
    label: "Ser vs Estar",
    description: "Sort each sentence into ser or estar.",
    group: "Verbos",
    level: "Principiante 1",
    iconId: "scales",
  },
  {
    href: "/practice/sentence-former",
    label: "Formar la frase",
    description: "Termina la frase antes de pensarlo demasiado.",
    group: "Frases",
    level: "Principiante 1",
    iconId: "flash",
  },
];

export const featuredGame = games.find((g) => g.featured) ?? null;
export const gameCount = games.length;
