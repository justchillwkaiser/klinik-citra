import { db } from "@/lib/db";
import { isValidSlot, isTodayOrLater } from "@/lib/slot";

export const APPOINTMENT_STATUSES = ["BARU", "KONFIRMASI", "SELESAI", "BATAL"] as const;
export type AppointmentStatus = (typeof APPOINTMENT_STATUSES)[number];
export type AppointmentFilter = "all" | AppointmentStatus;

export interface AppointmentRow {
  id: string;
  name: string;
  phone: string;
  service: string;
  date: Date;
  time: string;
  status: string; // BARU | KONFIRMASI | SELESAI | BATAL (schema string)
  createdAt: Date;
}

export interface AppointmentInput {
  name: string;
  phone: string;
  service: string;
  date: Date;
  time: string;
}

const PHONE_RE = /^01[0-9]-?\d{7,8}$/;

export function validateAppointmentInput(input: AppointmentInput): string | null {
  if (input.name.trim().length < 2) return "Sila masukkan nama.";
  if (!PHONE_RE.test(input.phone.trim())) return "Sila masukkan nombor telefon sah (cth: 012-3456789).";
  if (!input.service.trim()) return "Sila pilih rawatan.";
  if (!isTodayOrLater(input.date)) return "Pilih tarikh yang sah.";
  if (!isValidSlot(input.time)) return "Sila pilih masa yang sah.";
  return null;
}

export async function listAppointments(
  filter: AppointmentFilter = "all",
  search = ""
): Promise<AppointmentRow[]> {
  const trimmed = search.trim();
  const where = {
    ...(filter !== "all" ? { status: filter } : {}),
    ...(trimmed
      ? {
          OR: [
            { name: { contains: trimmed, mode: "insensitive" as const } },
            { phone: { contains: trimmed, mode: "insensitive" as const } },
          ],
        }
      : {}),
  };

  return db.appointment.findMany({
    where,
    orderBy: [{ date: "desc" }, { time: "asc" }],
  });
}

export async function createAppointment(input: AppointmentInput): Promise<AppointmentRow> {
  const error = validateAppointmentInput(input);
  if (error) throw new Error(error);

  return db.appointment.create({
    data: {
      name: input.name.trim(),
      phone: input.phone.trim(),
      service: input.service.trim(),
      date: input.date,
      time: input.time,
    },
  });
}

export async function updateAppointmentStatus(
  id: string,
  status: AppointmentStatus
): Promise<AppointmentRow> {
  if (!APPOINTMENT_STATUSES.includes(status)) throw new Error("Status tidak sah.");

  const existing = await db.appointment.findUnique({ where: { id } });
  if (!existing) throw new Error("Temujanji tidak dijumpai.");

  return db.appointment.update({ where: { id }, data: { status } });
}
