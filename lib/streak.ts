import { addCalendarDays, calendarDateKey } from "@/lib/calendarDate";
import type { Thought } from "@/lib/store";

export type DayActivity = {
  date: string;
  label: string;
  practiced: boolean;
  isToday: boolean;
};

const DAY_LABELS = ["D", "L", "M", "M", "J", "V", "S"] as const;

export function practiceDatesFromThoughts(thoughts: Thought[]): Set<string> {
  return new Set(thoughts.map((t) => calendarDateKey(new Date(t.createdAt))));
}

/** Consecutive practice days ending today, or yesterday if today is still open. */
export function currentStreak(practiced: Set<string>, now = new Date()): number {
  const today = calendarDateKey(now);
  let cursor = now;

  if (!practiced.has(today)) {
    cursor = addCalendarDays(now, -1);
  }

  let streak = 0;
  while (practiced.has(calendarDateKey(cursor))) {
    streak += 1;
    cursor = addCalendarDays(cursor, -1);
  }

  return streak;
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
