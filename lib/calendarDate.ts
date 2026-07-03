/** Local calendar day as YYYY-MM-DD (matches how users experience "today"). */
export function calendarDateKey(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function addCalendarDays(date: Date, delta: number): Date {
  const next = new Date(date);
  next.setDate(next.getDate() + delta);
  next.setHours(12, 0, 0, 0);
  return next;
}
