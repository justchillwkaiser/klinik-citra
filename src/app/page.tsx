import Link from "next/link";
import {
  Tooth,
  ShieldCheck,
  Sparkle,
  MinusCircle,
  Crown,
  Sun,
  Smiley,
  UserCheck,
  Wrench,
  CurrencyCircleDollar,
  Clock,
  MapPin,
  Phone,
  Envelope,
  CalendarPlus,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import { BrandMark } from "@/components/brand-mark";

const SERVICES = [
  { icon: Sparkle, name: "Pembersihan Gigi", desc: "Scaling dan polishing untuk kesihatan gusi dan gigi yang bersih.", price: "Dari RM 80" },
  { icon: MinusCircle, name: "Cabutan Gigi", desc: "Cabutan selamat dan selesa, termasuk gigi bungsu bermasalah.", price: "Dari RM 60" },
  { icon: Tooth, name: "Tampalan", desc: "Tampalan estetik warna gigi untuk gigi berlubang dan rosak.", price: "Dari RM 90" },
  { icon: Crown, name: "Crown & Veneer", desc: "Pulihkan dan perbaiki bentuk gigi dengan crown dan veneer.", price: "Dari RM 350" },
  { icon: Sun, name: "Whitening", desc: "Pemutihan gigi profesional untuk senyuman lebih cerah.", price: "Dari RM 250" },
  { icon: Smiley, name: "Braces", desc: "Rawatan ortodontik untuk susunan gigi yang lebih kemas.", price: "Dari RM 2,500" },
];

const WHY = [
  { icon: UserCheck, title: "Doktor berpengalaman", desc: "Lebih 10 tahun pengalaman merawat keluarga di Perak." },
  { icon: Wrench, title: "Peralatan moden", desc: "Radiografi digital dan rawatan minimally invasive." },
  { icon: CurrencyCircleDollar, title: "Harga telus", desc: "Anggaran kos diberi sebelum rawatan bermula." },
  { icon: Clock, title: "Temujanji dihormati", desc: "Masa anda dihormati, kurang menunggu." },
];

const TESTIMONIALS = [
  {
    quote: "Anak saya tak takut lagi ke klinik gigi. Doktor sangat sabar dan terangkan setiap langkah.",
    name: "Nurul Izzah",
    meta: "Ibu kepada 2 anak, Ipoh",
  },
  {
    quote: "Temujanji on time, harga pun sama macam yang diberitahu. Recommend untuk keluarga.",
    name: "Azman Khalid",
    meta: "Pesakit tetap, Taiping",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Klinik Citra",
  description:
    "Klinik pergigian keluarga di Ipoh, Perak. Pembersihan gigi, cabutan, tampalan, whitening, braces.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No. 12, Jalan Dato Ahmad",
    addressLocality: "Ipoh",
    addressRegion: "Perak",
    postalCode: "30000",
    addressCountry: "MY",
  },
  telephone: "+60-5-255-8899",
  openingHours: ["Mo-Fr 09:00-17:00", "Sa 09:00-13:00"],
  priceRange: "RM 60 - RM 2,500",
};

export default function LandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="mx-auto flex max-w-[1120px] items-center gap-7 px-5 py-5">
        <BrandMark />
        <div className="hidden items-center gap-6 text-sm font-semibold text-taupe md:flex">
          <a href="#rawatan" className="hover:text-espresso">Rawatan</a>
          <a href="#kenapa" className="hover:text-espresso">Kenapa Kami</a>
          <a href="#lokasi" className="hover:text-espresso">Lokasi</a>
        </div>
        <Link href="/booking" className="btn btn-primary ml-auto">
          <CalendarPlus size={18} weight="bold" />
          Buat Temujanji
        </Link>
      </nav>

      <header className="mx-auto grid max-w-[1120px] items-center gap-12 px-5 pb-10 pt-12 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-accent">
            <ShieldCheck size={14} weight="fill" />
            Klinik keluarga di Ipoh, Perak
          </span>
          <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight md:text-[44px]">
            Senyuman sihat bermula <em className="text-accent">di sini.</em>
          </h1>
          <p className="mt-4 max-w-[46ch] text-base leading-relaxed text-taupe">
            Rawatan pergigian mesra keluarga dengan teknologi moden, harga telus, dan temujanji
            yang dihormati. Tiada menunggu berjam-jam.
          </p>
          <div className="mt-7 flex flex-wrap gap-2.5">
            <Link href="/booking" className="btn btn-primary">
              Buat Temujanji Sekarang
            </Link>
            <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <WhatsappLogo size={18} weight="fill" />
              WhatsApp Kami
            </a>
          </div>
          <p className="mt-3.5 font-mono text-[11px] text-taupe-faint">
            Buka Isnin - Sabtu · 9:00 pagi - 5:00 petang
          </p>
        </div>
        <div className="grid min-h-[360px] place-items-center rounded-3xl border border-line bg-gradient-to-br from-[#e7f3ef] to-[#d5eae3]">
          <Tooth size={88} weight="fill" className="opacity-50 text-accent" />
        </div>
      </header>

      <section id="rawatan" className="mx-auto max-w-[1120px] px-5 py-12">
        <p className="kpi-label mb-2">Rawatan</p>
        <h2 className="mb-7 text-[28px] font-extrabold tracking-tight">
          Perkhidmatan pergigian lengkap
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.name} className="panel p-5">
                <div className="mb-3.5 grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent">
                  <Icon size={22} />
                </div>
                <h3 className="mb-1.5 text-base font-bold">{s.name}</h3>
                <p className="text-[13.5px] leading-relaxed text-taupe">{s.desc}</p>
                <span className="mt-3 block font-mono text-xs font-semibold text-accent">
                  {s.price}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <section id="kenapa" className="mx-auto max-w-[1120px] px-5 py-12">
        <p className="kpi-label mb-2">Kenapa Kami</p>
        <h2 className="mb-7 text-[28px] font-extrabold tracking-tight">
          Kepercayaan keluarga, teknologi moden
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {WHY.map((w) => {
            const Icon = w.icon;
            return (
              <div key={w.title} className="flex gap-3.5 rounded-panel border border-line bg-surface p-5 shadow-soft">
                <Icon size={24} className="shrink-0 text-accent" />
                <div>
                  <h3 className="mb-1 text-[15px] font-bold">{w.title}</h3>
                  <p className="text-[13.5px] leading-relaxed text-taupe">{w.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="panel p-5">
              <p className="text-sm leading-relaxed">"{t.quote}"</p>
              <div className="mt-3.5 flex items-center gap-2.5">
                <div className="grid h-8 w-8 place-items-center rounded-full bg-surface-2 text-[13px] font-bold text-taupe">
                  {t.name.split(" ").map((p) => p[0]).join("")}
                </div>
                <div>
                  <p className="text-[13px] font-bold">{t.name}</p>
                  <p className="text-xs text-taupe-faint">{t.meta}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="lokasi" className="mx-auto max-w-[1120px] px-5 py-12">
        <p className="kpi-label mb-2">Lokasi & Waktu</p>
        <h2 className="mb-7 text-[28px] font-extrabold tracking-tight">
          Senang ditemui, dekat dengan anda
        </h2>
        <div className="grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
          <div className="overflow-hidden rounded-panel border border-line shadow-soft">
            <iframe
              title="Lokasi Klinik Citra di Ipoh"
              src="https://www.google.com/maps?q=Ipoh,Perak&output=embed"
              className="h-[280px] w-full border-0"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-3.5">
            <div className="panel p-4.5 p-5">
              <div className="flex items-center gap-3 text-sm">
                <MapPin size={20} className="shrink-0 text-accent" />
                <div>
                  <p className="text-xs font-semibold text-taupe">Alamat</p>
                  <p>No. 12, Jalan Dato Ahmad, 30000 Ipoh, Perak</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-3 text-sm">
                <Phone size={20} className="shrink-0 text-accent" />
                <div>
                  <p className="text-xs font-semibold text-taupe">Telefon</p>
                  <p>05-255 8899 · WhatsApp 012-345 6789</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-3 text-sm">
                <Envelope size={20} className="shrink-0 text-accent" />
                <div>
                  <p className="text-xs font-semibold text-taupe">Emel</p>
                  <p>hello@klinikcitra.my</p>
                </div>
              </div>
            </div>
            <div className="panel p-5">
              <div className="flex items-center gap-3 text-sm">
                <Clock size={20} className="shrink-0 text-accent" />
                <div>
                  <p className="text-xs font-semibold text-taupe">Waktu Operasi</p>
                  <p>Isnin - Jumaat: 9:00 pagi - 5:00 petang · Sabtu: 9:00 pagi - 1:00 tengah hari · Ahad: Tutup</p>
                </div>
              </div>
            </div>
            <Link href="/booking" className="btn btn-primary">
              Buat Temujanji
            </Link>
          </div>
        </div>
      </section>

      <footer className="mt-10 bg-espresso px-5 py-8 text-[13px] text-[#b8cec5]">
        <div className="mx-auto flex max-w-[1120px] flex-wrap justify-between gap-5">
          <div>
            <p className="font-bold text-white">KLINIK CITRA</p>
            <p>Pergigian keluarga di Ipoh, Perak</p>
          </div>
          <div>
            <p className="font-bold text-white">Hubungi</p>
            <p>05-255 8899 · hello@klinikcitra.my</p>
          </div>
          <div>
            <p className="font-bold text-white">Waktu</p>
            <p>Isnin - Sabtu · 9:00 pagi - 5:00 petang</p>
          </div>
        </div>
      </footer>
    </>
  );
}
