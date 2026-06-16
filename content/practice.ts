/**
 * Práctica hub — active practice: the phrase plan and games.
 */

export type PracticeHubItem = {
  href: string;
  label: string;
  description: string;
  meta?: string;
  iconId: "plan";
  disabled?: boolean;
};

export const practiceOverview = {
  pill: "Do the work",
  title: "Speak, save, play.",
};

export function practiceHubItems(planDay?: {
  current: number;
  total: number;
}): PracticeHubItem[] {
  return [
    {
      href: "/practice/plan",
      label: "El plan",
      description: "The 14-day phrase schedule — themes, frames, and prompts.",
      meta: planDay
        ? `Día ${String(planDay.current).padStart(2, "0")} de ${planDay.total}`
        : undefined,
      iconId: "plan",
    },
  ];
}
