import type { Thought } from "@/lib/store";

export type DayActivity = {
  date: string;
  label: string;
  practiced: boolean;
  isToday: boolean;
};

const DAY_LABELS = ["D", "L", "M", "M", "J", "V", "S"] as const;

export function practiceDatesFromThoughts(thoughts: Thought[]): Set<string> {
  return new Set(thoughts.map((t) => t.createdAt.slice(0, 10)));
}

/** Consecutive practice days ending today, or yesterday if today is still open. */
export function currentStreak(practiced: Set<string>, now = new Date()): number {
  const cursor = new Date(now);
  const today = toDateKey(cursor);

  if (!practiced.has(today)) {
    cursor.setDate(cursor.getDate() - 1);
  }

  let streak = 0;
  while (practiced.has(toDateKey(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  return streak;
}

export function last7Days(practiced: Set<string>, now = new Date()): DayActivity[] {
  const days: DayActivity[] = [];

  for (let offset = 6; offset >= 0; offset -= 1) {
    const date = new Date(now);
    date.setDate(date.getDate() - offset);
    const key = toDateKey(date);

    days.push({
      date: key,
      label: DAY_LABELS[date.getDay()],
      practiced: practiced.has(key),
      isToday: offset === 0,
    });
  }

  return days;
}

function toDateKey(date: Date): string {
  return date.toISOString().slice(0, 10);
}
