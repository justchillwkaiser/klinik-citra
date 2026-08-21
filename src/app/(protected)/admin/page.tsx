import { AdminHeader } from "@/components/admin/admin-header";
import { AppointmentTable } from "@/components/admin/appointment-table";
import { listAppointments } from "@/server/services/appointment.service";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const items = await listAppointments("all");

  return (
    <main className="min-h-dvh pb-16">
      <AdminHeader />
      <div className="mx-auto max-w-[1080px] px-5 pt-6">
        <nav aria-label="Breadcrumb" className="mb-2 flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-taupe-faint">
          <span>Admin</span>
          <span aria-hidden="true">/</span>
          <span className="text-accent">Senarai Temujanji</span>
        </nav>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-extrabold">Senarai Temujanji</h2>
          <span className="kpi-label">{items.length} temujanji</span>
        </div>
        <AppointmentTable items={items} />
      </div>
    </main>
  );
}
