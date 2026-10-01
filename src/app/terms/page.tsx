import type { Metadata } from "next";
import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { EyebrowChip } from "@/components/eyebrow-chip";

export const metadata: Metadata = {
  title: "Terma Perkhidmatan",
  description:
    "Terma perkhidmatan Klinik Citra: tempahan dan pembatalan temujanji, harga dan pembayaran, persetujuan rawatan, serta had liabiliti kami.",
  alternates: { canonical: "/terms" },
};

const SECTIONS: { title: string; paras: string[] }[] = [
  {
    title: "Tempahan temujanji",
    paras: [
      "Tempahan dalam talian adalah permintaan slot. Temujanji dianggap disahkan selepas kami menghubungi anda melalui WhatsApp atau telefon, biasanya dalam masa satu jam bekerja.",
      "Sila hadir 10 minit lebih awal untuk lawatan pertama bagi melengkapkan borang kesihatan ringkas.",
    ],
  },
  {
    title: "Pembatalan & perubahan",
    paras: [
      "Pembatalan atau pertukaran tarikh adalah percuma jika dimaklumkan sekurang-kurangnya 24 jam sebelum slot temujanji. Kegagalan hadir berulang tanpa maklumat mungkin mengehadkan akses slot keutamaan.",
      "Slot kecemasan (gigi sakit, bengkak atau patah) diutamakan sepanjang waktu operasi dan mungkin memerlukan waktu menunggu.",
    ],
  },
  {
    title: "Harga & pembayaran",
    paras: [
      "Semua harga yang dipaparkan adalah permulaan («Dari RM…») dan anggaran muktamad diberikan secara bertulis sebelum rawatan bermula. Tiada bayaran pendahuluan diperlukan untuk menempah slot.",
      "Kami menerima tunai, kad debit/kredit dan pindahan bank. Pelan pembayaran bulanan tersedia untuk rawatan ortodontik.",
    ],
  },
  {
    title: "Rawatan & persetujuan",
    paras: [
      "Setiap rawatan dimulakan hanya selepas penerangan prosedur, risiko, alternatif dan kos, dan selepas anda memberikan persetujuan. Anda berhak menolak atau menangguhkan mana-mana rawatan pada bila-bila masa.",
      "Hasil rawatan berbeza antara individu. Gambar rujukan atau kajian kes adalah ilustrasi dan bukan jaminan hasil.",
    ],
  },
  {
    title: "Had liabiliti",
    paras: [
      "Klinik Citra menyediakan perkhidmatan pergigian dengan standard profesional yang munasabah. Maklumat dalam laman ini adalah untuk tujuan pendidikan dan tidak menggantikan nasihat pergigian profesional — sila dapatkan pemeriksaan untuk diagnosis sebenar.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-dvh">
      <nav className="border-b border-border bg-bg">
        <div className="mx-auto flex max-w-[900px] items-center px-5 py-[14px] md:px-10">
          <BrandMark />
          <Link
            href="/"
            className="ml-auto inline-flex min-h-[44px] items-center px-3 text-sm font-semibold text-text-muted hover:text-text"
          >
            ← Kembali
          </Link>
        </div>
      </nav>

      <article className="mx-auto max-w-[900px] px-5 py-10 md:px-10 md:py-16">
        <EyebrowChip>Undang-undang</EyebrowChip>
        <h1 className="mt-4 text-[32px] font-extrabold leading-[1.1] tracking-[-1px] text-text md:text-[40px]">
          Terma Perkhidmatan
        </h1>
        <p className="mt-3 text-[15px] font-medium text-text-muted">
          Berkuat kuasa 1 Januari 2026 · Klinik Citra Sdn Bhd (No. 12, Jalan Bandar Timah, 30000
          Ipoh, Perak)
        </p>

        <div className="mt-10 flex flex-col gap-9">
          {SECTIONS.map((s) => (
            <section key={s.title} className="flex flex-col gap-3">
              <h2 className="text-[20px] font-extrabold text-text">{s.title}</h2>
              {s.paras.map((p) => (
                <p key={p.slice(0, 24)} className="text-[15px] leading-[1.7] text-text-muted">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>

        <p className="mt-12 text-[13px] text-text-muted">
          Soalan tentang terma ini? Hubungi{" "}
          <a href="tel:+6052558899" className="font-semibold text-primary hover:underline">
            05-255 8899
          </a>{" "}
          atau baca{" "}
          <Link href="/privacy" className="font-semibold text-primary hover:underline">
            Dasar Privasi
          </Link>
          .
        </p>
      </article>
    </main>
  );
}
