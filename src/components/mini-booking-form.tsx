"use client";

import { useActionState } from "react";
import { Check, ChevronDown, CalendarDays, Clock, User, Phone } from "lucide-react";
import { createAppointmentAction, type ActionState } from "@/server/actions/appointment.actions";
import { SLOTS } from "@/lib/slot";
import { SERVICES } from "@/lib/services";
import { ButtonPrimary } from "@/components/button";
import { FieldShell, FieldSlot, controlClass } from "@/components/field-input";

const initialState: ActionState = { ok: false };

/* Booking Card — inside the 12 Booking band (klinikcitra.pen) */

export function MiniBookingForm() {
  const [state, formAction, pending] = useActionState(createAppointmentAction, initialState);
  const today = new Date().toISOString().slice(0, 10);

  if (state.ok) {
    return (
      <div className="rounded-lg bg-surface p-6 text-center">
        <div className="mx-auto mb-3 grid h-14 w-14 place-items-center rounded-full bg-success-soft text-success">
          <Check size={28} />
        </div>
        <h3 className="text-[20px] font-extrabold text-text">Temujanji diterima!</h3>
        <p className="mx-auto mt-2 max-w-[36ch] text-[13px] leading-relaxed text-text-muted">
          Kami akan hubungi anda melalui WhatsApp atau telefon untuk pengesahan slot.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-3.5 rounded-lg bg-surface p-5 xl:w-[410px] xl:p-[26px]">
      <h3 className="hidden text-[20px] font-extrabold text-text md:block">Tempah temujanji</h3>

      <FieldShell label="Rawatan">
        <select
          name="service"
          defaultValue=""
          required
          aria-label="Rawatan"
          className={`${controlClass} cursor-pointer appearance-none pr-6`}
        >
          <option value="" disabled>
            Pilih rawatan
          </option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <ChevronDown size={18} className="pointer-events-none -ml-6 shrink-0 text-text-muted" aria-hidden="true" />
      </FieldShell>

      <FieldShell
        label="Tarikh & Masa"
        boxClassName="flex-col items-stretch gap-0 p-0 md:h-12 md:flex-row md:items-center md:gap-2 md:px-3.5"
      >
        <FieldSlot>
          <CalendarDays size={18} className="shrink-0 text-text-muted" aria-hidden="true" />
          <input
            type="date"
            name="date"
            min={today}
            required
            aria-label="Tarikh temujanji"
            className={controlClass}
          />
        </FieldSlot>
        <span aria-hidden="true" className="h-px w-full shrink-0 bg-border md:h-5 md:w-px" />
        <FieldSlot>
          <Clock size={18} className="shrink-0 text-text-muted" aria-hidden="true" />
          <select
            name="time"
            defaultValue=""
            required
            aria-label="Masa temujanji"
            className={`${controlClass} cursor-pointer appearance-none pr-6`}
          >
            <option value="" disabled>
              Masa
            </option>
            {SLOTS.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
          <ChevronDown size={18} className="pointer-events-none -ml-6 shrink-0 text-text-muted" aria-hidden="true" />
        </FieldSlot>
      </FieldShell>

      <FieldShell
        label="Nama & Telefon"
        boxClassName="flex-col items-stretch gap-0 p-0 md:h-12 md:flex-row md:items-center md:gap-2 md:px-3.5"
      >
        <FieldSlot>
          <User size={18} className="shrink-0 text-text-muted" aria-hidden="true" />
          <input
            type="text"
            name="name"
            required
            placeholder="Aina"
            aria-label="Nama penuh"
            className={controlClass}
          />
        </FieldSlot>
        <span aria-hidden="true" className="h-px w-full shrink-0 bg-border md:h-5 md:w-px" />
        <FieldSlot>
          <Phone size={18} className="shrink-0 text-text-muted" aria-hidden="true" />
          <input
            type="tel"
            name="phone"
            required
            placeholder="012-345 6789"
            aria-label="Nombor telefon"
            className={controlClass}
          />
        </FieldSlot>
      </FieldShell>

      {state.error && <p className="text-[13px] text-bad">{state.error}</p>}

      <ButtonPrimary type="submit" fullWidth disabled={pending}>
        {pending ? "Menghantar..." : "Sahkan temujanji"}
      </ButtonPrimary>

      <p className="hidden text-center text-[13px] font-medium text-text-muted md:block">
        Kami akan hubungi anda dalam masa 1 jam bekerja.
      </p>
    </form>
  );
}
