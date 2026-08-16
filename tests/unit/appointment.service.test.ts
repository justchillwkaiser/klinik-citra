import { describe, it, expect, vi, beforeEach } from "vitest";

const mockDb = vi.hoisted(() => ({
  appointment: {
    findMany: vi.fn(),
    findUnique: vi.fn(),
    create: vi.fn(),
    update: vi.fn(),
  },
}));

vi.mock("../../src/lib/db", () => ({ db: mockDb }));

import {
  listAppointments,
  createAppointment,
  updateAppointmentStatus,
  validateAppointmentInput,
} from "../../src/server/services/appointment.service";

const validInput = {
  name: "Nurul Izzah",
  phone: "012-3456789",
  service: "Pembersihan Gigi",
  date: new Date(Date.now() + 86400000),
  time: "10:00",
};

const row = { id: "a1", ...validInput, status: "BARU", createdAt: new Date() };

beforeEach(() => {
  vi.clearAllMocks();
});

describe("validateAppointmentInput", () => {
  it("returns null for valid input", () => {
    expect(validateAppointmentInput(validInput)).toBeNull();
  });

  it("rejects short name", () => {
    expect(validateAppointmentInput({ ...validInput, name: "A" })).toBe("Sila masukkan nama.");
  });

  it("rejects invalid phone", () => {
    expect(validateAppointmentInput({ ...validInput, phone: "12345" })).toContain("telefon");
  });

  it("rejects empty service", () => {
    expect(validateAppointmentInput({ ...validInput, service: "  " })).toContain("rawatan");
  });

  it("rejects past date", () => {
    expect(
      validateAppointmentInput({ ...validInput, date: new Date(Date.now() - 86400000) })
    ).toContain("tarikh");
  });

  it("rejects invalid slot", () => {
    expect(validateAppointmentInput({ ...validInput, time: "12:00" })).toContain("masa");
  });
});

describe("listAppointments", () => {
  it("queries with status filter when not all", async () => {
    mockDb.appointment.findMany.mockResolvedValue([row]);
    const result = await listAppointments("BARU");
    expect(mockDb.appointment.findMany).toHaveBeenCalledWith(
      expect.objectContaining({ where: expect.objectContaining({ status: "BARU" }) })
    );
    expect(result).toHaveLength(1);
  });

  it("queries with search in name/phone OR", async () => {
    mockDb.appointment.findMany.mockResolvedValue([]);
    await listAppointments("all", "azman");
    const where = mockDb.appointment.findMany.mock.calls[0][0].where;
    expect(where.OR).toBeDefined();
    expect(where.OR[0].name.contains).toBe("azman");
  });

  it("omits status when filter is all", async () => {
    mockDb.appointment.findMany.mockResolvedValue([]);
    await listAppointments("all");
    const where = mockDb.appointment.findMany.mock.calls[0][0].where;
    expect(where.status).toBeUndefined();
  });
});

describe("createAppointment", () => {
  it("creates trimmed data", async () => {
    mockDb.appointment.create.mockResolvedValue(row);
    const result = await createAppointment({ ...validInput, name: "  Nurul Izzah  " });
    expect(mockDb.appointment.create).toHaveBeenCalledWith({
      data: expect.objectContaining({ name: "Nurul Izzah" }),
    });
    expect(result.id).toBe("a1");
  });

  it("throws on invalid input without hitting db", async () => {
    await expect(createAppointment({ ...validInput, phone: "x" })).rejects.toThrow();
    expect(mockDb.appointment.create).not.toHaveBeenCalled();
  });
});

describe("updateAppointmentStatus", () => {
  it("updates status when found", async () => {
    mockDb.appointment.findUnique.mockResolvedValue(row);
    mockDb.appointment.update.mockResolvedValue({ ...row, status: "KONFIRMASI" });
    const result = await updateAppointmentStatus("a1", "KONFIRMASI");
    expect(mockDb.appointment.update).toHaveBeenCalledWith({
      where: { id: "a1" },
      data: { status: "KONFIRMASI" },
    });
    expect(result.status).toBe("KONFIRMASI");
  });

  it("throws when appointment not found", async () => {
    mockDb.appointment.findUnique.mockResolvedValue(null);
    await expect(updateAppointmentStatus("nope", "BARU")).rejects.toThrow("tidak dijumpai");
    expect(mockDb.appointment.update).not.toHaveBeenCalled();
  });

  it("throws on invalid status", async () => {
    await expect(updateAppointmentStatus("a1", "HACK" as never)).rejects.toThrow("Status tidak sah");
  });
});
