"use client";

import { useActionState, useState } from "react";
import { Check, PaperPlaneTilt } from "@phosphor-icons/react";
import { createAppointmentAction, type ActionState } from "@/server/actions/appointment.actions";
import { SLOTS } from "@/lib/slot";
import { SERVICES } from "@/lib/services";
import { ButtonPrimary } from "@/components/button";

const initialState: ActionState = { ok: false };

export function BookingForm() {
  const [state, formAction, pending] = useActionState(createAppointmentAction, initialState);
  const [time, setTime] = useState("");

  const today = new Date().toISOString().slice(0, 10);

  if (state.ok) {
    return (
      <div className="py-10 text-center">
        <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-success-soft text-success">
          <Check size={32} weight="bold" />
        </div>
        <h2 className="text-[22px] font-extrabold">Temujanji diterima!</h2>
        <p className="mx-auto mt-2 max-w-[40ch] text-sm leading-relaxed text-text-muted">
          Terima kasih. Kami akan hubungi anda melalui WhatsApp atau telefon untuk pengesahan slot.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4">
      <div className="field">
        <label htmlFor="bk-name">Nama penuh</label>
        <input id="bk-name" name="name" type="text" placeholder="cth: Nurul Aisyah" required />
      </div>
      <div className="field">
        <label htmlFor="bk-phone">No. telefon</label>
        <input id="bk-phone" name="phone" type="tel" placeholder="012-345 6789" required />
      </div>
      <div className="field">
        <label htmlFor="bk-service">Rawatan</label>
        <select id="bk-service" name="service" defaultValue="" required>
          <option value="" disabled>
            Pilih rawatan...
          </option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="bk-date">Tarikh</label>
        <input id="bk-date" name="date" type="date" min={today} required />
      </div>
      <div className="field">
        <label>Masa</label>
        <input type="hidden" name="time" value={time} />
        <div className="flex flex-wrap gap-2">
          {SLOTS.map((slot) => (
            <button
              key={slot}
              type="button"
              aria-pressed={time === slot}
              onClick={() => setTime(slot)}
              className={`min-h-[44px] rounded-full border px-4 py-2.5 text-[13px] font-semibold transition-colors ${
                time === slot
                  ? "border-primary bg-primary text-on-primary"
                  : "border-border bg-surface text-text-muted hover:text-text"
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>
      {state.error && <p className="text-[13px] text-bad">{state.error}</p>}
      <ButtonPrimary type="submit" fullWidth disabled={pending}>
        {pending ? "Menghantar..." : "Hantar Temujanji"}
        {!pending && <PaperPlaneTilt size={16} />}
      </ButtonPrimary>
    </form>
  );
}
