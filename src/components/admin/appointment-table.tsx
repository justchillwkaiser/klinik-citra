"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, CheckSquare, X } from "@phosphor-icons/react";
import { updateAppointmentStatusAction } from "@/server/actions/appointment.actions";
import type { AppointmentRow, AppointmentFilter } from "@/server/services/appointment.service";

const TABS: { key: AppointmentFilter; label: string }[] = [
  { key: "all", label: "Semua" },
  { key: "BARU", label: "Baru" },
  { key: "KONFIRMASI", label: "Konfirmasi" },
  { key: "SELESAI", label: "Selesai" },
  { key: "BATAL", label: "Batal" },
];

const BADGE_CLASS: Record<string, string> = {
  BARU: "badge-baru",
  KONFIRMASI: "badge-konfirmasi",
  SELESAI: "badge-selesai",
  BATAL: "badge-batal",
};

function fmtDate(d: Date): string {
  return d.toLocaleDateString("ms-MY", { day: "numeric", month: "short" });
}

export function AppointmentTable({ items }: { items: AppointmentRow[] }) {
  const router = useRouter();
  const [filter, setFilter] = useState<AppointmentFilter>("all");
  const [search, setSearch] = useState("");

  const counts: Record<AppointmentFilter, number> = {
    all: items.length,
    BARU: items.filter((i) => i.status === "BARU").length,
    KONFIRMASI: items.filter((i) => i.status === "KONFIRMASI").length,
    SELESAI: items.filter((i) => i.status === "SELESAI").length,
    BATAL: items.filter((i) => i.status === "BATAL").length,
  };

  const visible = items.filter((i) => {
    const matchStatus = filter === "all" || i.status === filter;
    const q = search.trim().toLowerCase();
    const matchSearch =
      !q || i.name.toLowerCase().includes(q) || i.phone.toLowerCase().includes(q);
    return matchStatus && matchSearch;
  });

  async function setStatus(id: string, status: "KONFIRMASI" | "SELESAI" | "BATAL") {
    await updateAppointmentStatusAction(id, status);
    router.refresh();
  }

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <div className="flex flex-wrap gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`rounded-full border px-3.5 py-1.5 text-[13px] font-semibold transition-colors ${
                filter === tab.key
                  ? "border-espresso bg-espresso text-white"
                  : "border-line bg-surface text-taupe hover:text-espresso"
              }`}
            >
              {tab.label}
              <span className="ml-1 font-mono text-[10px] opacity-70">{counts[tab.key]}</span>
            </button>
          ))}
        </div>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Cari nama atau telefon..."
          className="w-full rounded-[10px] border border-line bg-surface px-3 py-2 text-[13.5px] focus:outline-2 focus:outline-accent md:w-[240px]"
        />
      </div>

      <div className="table-wrap overflow-x-auto">
        <table className="min-w-[720px]">
          <thead>
            <tr>
              <th className="sticky-col">Nama</th>
              <th>Telefon</th>
              <th>Rawatan</th>
              <th>Tarikh</th>
              <th>Masa</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {visible.map((a) => (
              <tr key={a.id}>
                <td className="sticky-col whitespace-nowrap font-semibold">{a.name}</td>
                <td className="whitespace-nowrap">{a.phone}</td>
                <td className="whitespace-nowrap">{a.service}</td>
                <td className="whitespace-nowrap">{fmtDate(a.date)}</td>
                <td className="whitespace-nowrap">{a.time}</td>
                <td className="whitespace-nowrap">
                  <span className={`badge ${BADGE_CLASS[a.status] ?? "badge-baru"}`}>
                    {a.status}
                  </span>
                </td>
                <td className="whitespace-nowrap">
                  <div className="flex gap-1.5">
                    {a.status === "BARU" && (
                      <>
                        <button
                          onClick={() => setStatus(a.id, "KONFIRMASI")}
                          title="Konfirmasi"
                          className="grid h-8 w-8 place-items-center rounded-lg border border-line bg-surface text-taupe hover:bg-ok-bg hover:text-ok"
                        >
                          <Check size={14} weight="bold" />
                        </button>
                        <button
                          onClick={() => setStatus(a.id, "BATAL")}
                          title="Batal"
                          className="grid h-8 w-8 place-items-center rounded-lg border border-line bg-surface text-taupe hover:bg-bad-bg hover:text-bad"
                        >
                          <X size={14} weight="bold" />
                        </button>
                      </>
                    )}
                    {a.status === "KONFIRMASI" && (
                      <>
                        <button
                          onClick={() => setStatus(a.id, "SELESAI")}
                          title="Selesai"
                          className="grid h-8 w-8 place-items-center rounded-lg border border-line bg-surface text-taupe hover:bg-ok-bg hover:text-ok"
                        >
                          <CheckSquare size={14} weight="bold" />
                        </button>
                        <button
                          onClick={() => setStatus(a.id, "BATAL")}
                          title="Batal"
                          className="grid h-8 w-8 place-items-center rounded-lg border border-line bg-surface text-taupe hover:bg-bad-bg hover:text-bad"
                        >
                          <X size={14} weight="bold" />
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {visible.length === 0 && (
        <p className="panel mt-4 p-6 text-center text-sm text-taupe">
          Tiada temujanji untuk penapis ini.
        </p>
      )}
    </div>
  );
}
