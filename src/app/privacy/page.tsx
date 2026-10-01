import type { Metadata } from "next";
import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { EyebrowChip } from "@/components/eyebrow-chip";

export const metadata: Metadata = {
  title: "Dasar Privasi",
  description:
    "Bagaimana Klinik Citra mengumpul, menggunakan dan melindungi maklumat peribadi serta rekod perubatan anda, dan hak anda untuk akses atau pembetulan data.",
  alternates: { canonical: "/privacy" },
};

const SECTIONS: { title: string; paras: string[] }[] = [
  {
    title: "Maklumat yang kami kumpul",
    paras: [
      "Kami mengumpul maklumat yang anda berikan secara terus apabila anda membuat temujanji — nama, nombor telefon, rawatan yang dipilih, serta tarikh dan masa lawatan. Semasa lawatan, kami juga menyimpan rekod pergigian anda seperti X-ray, nota rawatan dan pelan rawatan.",
      "Laman ini tidak menggunakan kuki pengiklanan atau penjejak pihak ketiga. Data analitik asas (seperti bilangan pelawat) mungkin dikumpul secara agregat untuk menambah baik laman.",
    ],
  },
  {
    title: "Bagaimana kami gunakan maklumat",
    paras: [
      "Maklumat anda digunakan untuk: mengesahkan dan mengurus temujanji, memberikan rawatan pergigian yang berterusan, menghubungi anda melalui WhatsApp atau telefon berkaitan lawatan anda, dan memenuhi keperluan undang-undang rekod perubatan di Malaysia.",
      "Kami tidak menjual, menyewa atau berkongsi data peribadi anda dengan mana-mana pihak untuk tujuan pemasaran.",
    ],
  },
  {
    title: "Penyimpanan & keselamatan",
    paras: [
      "Rekod perubatan disimpan secara digital dalam sistem klinik yang dilindungi kata laluan dan hanya boleh diakses oleh kakitangan bertauliah Klinik Citra. Rekod rawatan dikekalkan mengikut keperluan profesional pergigian Malaysia.",
      "Maklumat temujanji dalam talian dihantar melalui sambungan yang disulitkan (HTTPS).",
    ],
  },
  {
    title: "Hak anda",
    paras: [
      "Anda boleh meminta salinan, pembetulan atau pemadaman data peribadi anda pada bila-bila masa, tertakluk kepada keperluan undang-undang penyimpanan rekod perubatan. Hubungi kami di hello@klinikcitra.my atau 05-255 8899.",
    ],
  },
  {
    title: "Pautan pihak ketiga",
    paras: [
      "Laman ini memaut ke WhatsApp, Google Maps dan media sosial kami. Perkhidmatan tersebut mempunyai dasar privasi mereka sendiri yang di luar kawalan kami.",
    ],
  },
];

export default function PrivacyPage() {
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
          Dasar Privasi
        </h1>
        <p className="mt-3 text-[15px] font-medium text-text-muted">
          Dikemas kini 1 Januari 2026 · Klinik Citra Sdn Bhd (No. 12, Jalan Bandar Timah, 30000
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
          Sebarang pertanyaan tentang dasar ini? Hubungi{" "}
          <a href="mailto:hello@klinikcitra.my" className="font-semibold text-primary hover:underline">
            hello@klinikcitra.my
          </a>{" "}
          atau{" "}
          <Link href="/terms" className="font-semibold text-primary hover:underline">
            Terma Perkhidmatan
          </Link>
          .
        </p>
      </article>
    </main>
  );
}
