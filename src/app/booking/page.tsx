import type { Metadata } from "next";
import { BookingForm } from "@/components/booking-form";
import { BrandMark } from "@/components/brand-mark";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Buat Temujanji",
  description:
    "Buat temujanji online di Klinik Citra, SS2 Petaling Jaya. Pilih rawatan, tarikh dan masa - kami akan hubungi anda untuk pengesahan.",
  alternates: { canonical: "/booking" },
};

export default function BookingPage() {
  return (
    <main className="min-h-dvh">
      <nav className="mx-auto flex max-w-[640px] items-center px-5 py-5">
        <BrandMark compact />
        <Link
          href="/"
          className="ml-auto inline-flex min-h-[44px] items-center px-3 text-sm font-semibold text-text-muted hover:text-text"
        >
          ← Kembali
        </Link>
      </nav>
      <div className="mx-auto max-w-[640px] px-5 pb-16">
        <div className="rounded-[20px] border border-border bg-surface p-8 shadow-soft">
          <h1 className="text-[26px] font-extrabold">Buat Temujanji</h1>
          <p className="mb-6 mt-1.5 text-sm text-text-muted">
            Isi maklumat di bawah. Kami akan hubungi anda untuk pengesahan.
          </p>
          <BookingForm />
        </div>
      </div>
    </main>
  );
}
