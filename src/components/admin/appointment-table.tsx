"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Check, CheckSquare, X, CaretLeft, CaretRight } from "@phosphor-icons/react";
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

const PAGE_SIZE = 10;

function fmtDate(d: Date): string {
  return d.toLocaleDateString("ms-MY", { day: "numeric", month: "short" });
}

export function AppointmentTable({ items }: { items: AppointmentRow[] }) {
  const router = useRouter();
  const [filter, setFilter] = useState<AppointmentFilter>("all");
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pendingId, setPendingId] = useState<string | null>(null);

  // Debounce search input (300ms) to avoid re-filtering on every keystroke
  useEffect(() => {
    const t = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1); // reset pagination when the committed query changes
    }, 300);
    return () => clearTimeout(t);
  }, [search]);

  const counts: Record<AppointmentFilter, number> = {
    all: items.length,
    BARU: items.filter((i) => i.status === "BARU").length,
    KONFIRMASI: items.filter((i) => i.status === "KONFIRMASI").length,
    SELESAI: items.filter((i) => i.status === "SELESAI").length,
    BATAL: items.filter((i) => i.status === "BATAL").length,
  };

  const visible = useMemo(() => {
    return items.filter((i) => {
      const matchStatus = filter === "all" || i.status === filter;
      const q = debouncedSearch.trim().toLowerCase();
      const matchSearch =
        !q || i.name.toLowerCase().includes(q) || i.phone.toLowerCase().includes(q);
      return matchStatus && matchSearch;
    });
  }, [items, filter, debouncedSearch]);

  const totalPages = Math.max(1, Math.ceil(visible.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageItems = visible.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  async function setStatus(id: string, status: "KONFIRMASI" | "SELESAI" | "BATAL") {
    setPendingId(id);
    try {
      await updateAppointmentStatusAction(id, status);
      router.refresh();
    } finally {
      setPendingId(null);
    }
  }

  const actionBtn =
    "grid h-11 w-11 place-items-center rounded-lg border border-line bg-surface text-taupe transition-colors disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <div className="flex flex-wrap gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setFilter(tab.key);
                setPage(1); // reset pagination on tab change
              }}
              className={`rounded-full border px-4 py-2.5 min-h-[44px] text-[13px] font-semibold transition-colors ${
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
          aria-label="Cari temujanji mengikut nama atau telefon"
          className="w-full rounded-[10px] border border-line bg-surface px-3 py-2.5 min-h-[44px] text-[13.5px] focus:outline-2 focus:outline-accent md:w-[240px]"
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
            {pageItems.map((a) => (
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
                          aria-label={`Konfirmasi temujanji ${a.name}`}
                          disabled={pendingId === a.id}
                          className={`${actionBtn} hover:bg-ok-bg hover:text-ok`}
                        >
                          <Check size={14} weight="bold" />
                        </button>
                        <button
                          onClick={() => setStatus(a.id, "BATAL")}
                          title="Batal"
                          aria-label={`Batalkan temujanji ${a.name}`}
                          disabled={pendingId === a.id}
                          className={`${actionBtn} hover:bg-bad-bg hover:text-bad`}
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
                          aria-label={`Tandakan selesai temujanji ${a.name}`}
                          disabled={pendingId === a.id}
                          className={`${actionBtn} hover:bg-ok-bg hover:text-ok`}
                        >
                          <CheckSquare size={14} weight="bold" />
                        </button>
                        <button
                          onClick={() => setStatus(a.id, "BATAL")}
                          title="Batal"
                          aria-label={`Batalkan temujanji ${a.name}`}
                          disabled={pendingId === a.id}
                          className={`${actionBtn} hover:bg-bad-bg hover:text-bad`}
                        >
                          <X size={14} weight="bold" />
                        </button>
                      </>
                    )}
                    {pendingId === a.id && (
                      <span className="ml-1 self-center font-mono text-[10px] uppercase tracking-wider text-taupe-faint">
                        Memproses...
                      </span>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {visible.length > PAGE_SIZE && (
        <div className="mt-4 flex items-center justify-between">
          <p className="text-[13px] text-taupe">
            Papar {(currentPage - 1) * PAGE_SIZE + 1}-
            {Math.min(currentPage * PAGE_SIZE, visible.length)} daripada {visible.length}
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              aria-label="Halaman sebelumnya"
              className="grid h-11 w-11 place-items-center rounded-lg border border-line bg-surface text-taupe transition-colors hover:text-espresso disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <CaretLeft size={16} weight="bold" />
            </button>
            <span className="font-mono text-[12px] text-taupe px-1">
              {currentPage}/{totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              aria-label="Halaman seterusnya"
              className="grid h-11 w-11 place-items-center rounded-lg border border-line bg-surface text-taupe transition-colors hover:text-espresso disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <CaretRight size={16} weight="bold" />
            </button>
          </div>
        </div>
      )}

      {visible.length === 0 && (
        <p className="panel mt-4 p-6 text-center text-sm text-taupe">
          Tiada temujanji untuk penapis ini.
        </p>
      )}
    </div>
  );
}
