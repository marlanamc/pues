/**
 * Práctica hub — active practice: journal, progress, and future games.
 */

export type PracticeHubItem = {
  href: string;
  label: string;
  description: string;
  meta?: string;
  iconId: "journal" | "games";
  disabled?: boolean;
};

export const practiceOverview = {
  pill: "Do the work",
  title: "Speak, save, play.",
  gloss:
    "Práctica is where you use Spanish — not just read about it. Open your journal and try the games as they land.",
};

export function practiceHubItems(thoughtCount?: number): PracticeHubItem[] {
  return [
    {
      href: "/thoughts",
      label: "Diario",
      description: "Every sentence you've spoken out loud.",
      meta:
        thoughtCount && thoughtCount > 0
          ? `${thoughtCount} ${thoughtCount === 1 ? "frase" : "frases"}`
          : undefined,
      iconId: "journal",
    },
    {
      href: "/practice/ser-estar",
      label: "Ser vs Estar",
      description: "Sort sentences into ser or estar.",
      meta: "Juego",
      iconId: "games",
    },
  ];
}
