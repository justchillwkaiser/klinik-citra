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
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-extrabold">Senarai Temujanji</h2>
          <span className="kpi-label">{items.length} temujanji</span>
        </div>
        <AppointmentTable items={items} />
      </div>
    </main>
  );
}
