/**
 * Práctica hub — active practice: the phrase plan, bedtime reading, and games.
 */

export type PracticeHubItem = {
  href: string;
  label: string;
  description: string;
  meta?: string;
  iconId: "plan" | "read";
  disabled?: boolean;
};

export const practiceOverview = {
  pill: "Do the work",
  title: "Speak, save, play.",
};

export function practiceHubItems(opts?: {
  planDay?: { current: number; total: number };
  readingDay?: { current: number; total: number; doneToday?: boolean };
}): PracticeHubItem[] {
  const planDay = opts?.planDay;
  const readingDay = opts?.readingDay;

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
    {
      href: "/read",
      label: "La lectura",
      description:
        "A short dialogue before bed — vocab first, then read at your pace.",
      meta: readingDay
        ? readingDay.doneToday
          ? "Leído esta noche ✓"
          : `Día ${String(readingDay.current).padStart(2, "0")} de ${readingDay.total}`
        : undefined,
      iconId: "read",
    },
  ];
}
