import type { Metadata } from "next";
import { BookingForm } from "@/components/booking-form";
import { BrandMark } from "@/components/brand-mark";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Buat Temujanji",
  description:
    "Buat temujanji online di Klinik Citra, Ipoh. Pilih rawatan, tarikh dan masa - kami akan hubungi anda untuk pengesahan.",
  alternates: { canonical: "/booking" },
};

export default function BookingPage() {
  return (
    <main className="min-h-dvh">
      <nav className="mx-auto flex max-w-[640px] items-center px-5 py-5">
        <BrandMark compact />
        <Link href="/" className="ml-auto inline-flex items-center px-3 min-h-[44px] text-sm font-semibold text-taupe hover:text-espresso">
          ← Kembali
        </Link>
      </nav>
      <div className="mx-auto max-w-[640px] px-5 pb-16">
        <div className="rounded-[20px] border border-line bg-surface p-8 shadow-soft">
          <h1 className="text-[26px] font-extrabold">Buat Temujanji</h1>
          <p className="mt-1.5 mb-6 text-sm text-taupe">
            Isi maklumat di bawah. Kami akan hubungi anda untuk pengesahan.
          </p>
          <BookingForm />
        </div>
      </div>
    </main>
  );
}
