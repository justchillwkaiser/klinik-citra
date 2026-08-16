export const SLOTS = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"] as const;

export type Slot = (typeof SLOTS)[number];

export function isValidSlot(time: string): time is Slot {
  return (SLOTS as readonly string[]).includes(time);
}

export function isTodayOrLater(date: Date): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d.getTime() >= today.getTime();
}

export function formatDateLabel(d: Date): string {
  return d.toLocaleDateString("ms-MY", { day: "numeric", month: "long", year: "numeric" });
}
