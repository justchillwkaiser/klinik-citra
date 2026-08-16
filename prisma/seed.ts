import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { hashPassword } from "better-auth/crypto";

const connectionString = process.env.DATABASE_URL!;
const db = new PrismaClient({ adapter: new PrismaPg({ connectionString }) });

// Contoh appointment (tarikh relatif kepada hari ini supaya sentiasa relevan)
function dayOffset(offset: number): Date {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + offset);
  return d;
}

async function main() {
  // Idempotent
  await db.appointment.deleteMany();
  await db.session.deleteMany();
  await db.account.deleteMany();
  await db.user.deleteMany();
  await db.verification.deleteMany();

  // Admin
  const hash = await hashPassword("Demo123!");
  const admin = await db.user.create({
    data: { name: "Admin Klinik Citra", email: "admin@klinikcitra.my", role: "ADMIN" },
  });
  await db.account.create({
    data: { userId: admin.id, accountId: admin.id, providerId: "credential", password: hash },
  });
  console.log("user: admin@klinikcitra.my (ADMIN)");

  const samples = [
    { name: "Nurul Izzah", phone: "012-345 6789", service: "Pembersihan Gigi", offset: 1, time: "10:00", status: "BARU" },
    { name: "Azman Khalid", phone: "019-876 5432", service: "Cabutan Gigi", offset: 1, time: "14:00", status: "BARU" },
    { name: "Sarah Lim", phone: "011-2345 6789", service: "Whitening", offset: 2, time: "09:00", status: "BARU" },
    { name: "Muhammad Faiz", phone: "017-555 1234", service: "Tampalan", offset: 0, time: "15:00", status: "KONFIRMASI" },
    { name: "Aisyah Roslan", phone: "013-222 3344", service: "Braces Konsultasi", offset: 0, time: "16:00", status: "KONFIRMASI" },
    { name: "Hafiz Iskandar", phone: "016-888 9900", service: "Pembersihan Gigi", offset: -1, time: "11:00", status: "SELESAI" },
  ];

  for (const s of samples) {
    await db.appointment.create({
      data: {
        name: s.name,
        phone: s.phone,
        service: s.service,
        date: dayOffset(s.offset),
        time: s.time,
        status: s.status,
      },
    });
  }

  console.log(`seed selesai: 1 admin, ${samples.length} appointments`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
