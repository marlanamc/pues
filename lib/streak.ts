import { addCalendarDays, calendarDateKey } from "@/lib/calendarDate";
import type { Thought } from "@/lib/store";

export type DayActivity = {
  date: string;
  label: string;
  practiced: boolean;
  isToday: boolean;
};

const DAY_LABELS = ["D", "L", "M", "M", "J", "V", "S"] as const;

/**
 * Collapses spoken phrases (thoughts from the speak flow) into the set of
 * calendar days they were said on — the basis for the calm "did I practice
 * today" checkmark calendar below. Thoughts are also the one activity that
 * syncs across devices (lib/sync.ts), so this reads the same everywhere.
 */
export function practiceDatesFromThoughts(thoughts: Thought[]): Set<string> {
  return new Set(thoughts.map((t) => calendarDateKey(new Date(t.createdAt))));
}

export function last7Days(practiced: Set<string>, now = new Date()): DayActivity[] {
  const days: DayActivity[] = [];

  for (let offset = 6; offset >= 0; offset -= 1) {
    const date = addCalendarDays(now, -offset);
    const key = calendarDateKey(date);

    days.push({
      date: key,
      label: DAY_LABELS[date.getDay()],
      practiced: practiced.has(key),
      isToday: offset === 0,
    });
  }

  return days;
}
