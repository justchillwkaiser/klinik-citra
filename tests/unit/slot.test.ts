import { describe, it, expect } from "vitest";
import { SLOTS, isValidSlot, isTodayOrLater } from "../../src/lib/slot";

describe("slot", () => {
  it("has 7 fixed slots", () => {
    expect(SLOTS).toEqual(["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"]);
  });

  it("isValidSlot accepts known slots and rejects others", () => {
    expect(isValidSlot("10:00")).toBe(true);
    expect(isValidSlot("12:00")).toBe(false);
    expect(isValidSlot("18:00")).toBe(false);
    expect(isValidSlot("")).toBe(false);
  });

  it("isTodayOrLater accepts today and future, rejects past", () => {
    const today = new Date();
    expect(isTodayOrLater(today)).toBe(true);
    const future = new Date(today.getTime() + 86400000);
    expect(isTodayOrLater(future)).toBe(true);
    const past = new Date(today.getTime() - 86400000);
    expect(isTodayOrLater(past)).toBe(false);
  });
});
