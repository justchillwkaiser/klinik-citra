"use server";

import { revalidatePath } from "next/cache";
import { createAppointment, updateAppointmentStatus, type AppointmentStatus } from "@/server/services/appointment.service";

export interface ActionState {
  ok: boolean;
  error?: string;
}

export async function createAppointmentAction(
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const dateRaw = String(formData.get("date") ?? "");
  const time = String(formData.get("time") ?? "");

  const date = new Date(`${dateRaw}T12:00:00`);
  if (Number.isNaN(date.getTime())) {
    return { ok: false, error: "Pilih tarikh yang sah." };
  }

  try {
    await createAppointment({ name, phone, service, date, time });
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Temujanji gagal dihantar." };
  }

  revalidatePath("/admin");
  return { ok: true };
}

export async function updateAppointmentStatusAction(id: string, status: AppointmentStatus) {
  try {
    await updateAppointmentStatus(id, status);
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Gagal kemas kini status." };
  }
  revalidatePath("/admin");
  return { ok: true };
}
