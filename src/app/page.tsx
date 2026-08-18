import Link from "next/link";
import {
  Star,
  User,
  ShieldCheck,
  CurrencyCircleDollar,
  Clock,
  Sparkle,
  Scissors,
  CheckCircle,
  Crown,
  Sun,
  Smiley,
  MapPin,
  Phone,
  Envelope,
  CalendarPlus,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import { HeroParallax } from "@/components/hero-parallax";

const SERVICES = [
  { icon: Sparkle, name: "Pembersihan Gigi", desc: "Scaling dan polishing untuk kesihatan gusi dan gigi yang bersih.", price: "Dari RM 80" },
  { icon: Scissors, name: "Cabutan Gigi", desc: "Cabutan selamat dan selesa, termasuk gigi bungsu bermasalah.", price: "Dari RM 60" },
  { icon: CheckCircle, name: "Tampalan", desc: "Tampalan estetik warna gigi untuk gigi berlubang dan rosak.", price: "Dari RM 90" },
  { icon: Crown, name: "Crown & Veneer", desc: "Pulihkan dan perbaiki bentuk gigi dengan crown dan veneer.", price: "Dari RM 350" },
  { icon: Sun, name: "Whitening", desc: "Pemutihan gigi profesional untuk senyuman lebih cerah.", price: "Dari RM 250" },
  { icon: Smiley, name: "Braces", desc: "Rawatan ortodontik untuk susunan gigi yang lebih kemas.", price: "Dari RM 2,500" },
];

const TRUST = [
  { icon: User, text: "Doktor Berpengalaman 12 Tahun" },
  { icon: ShieldCheck, text: "Peralatan Moden Digital" },
  { icon: CurrencyCircleDollar, text: "Harga Telus Tanpa Tersembunyi" },
  { icon: Clock, text: "Temujanji Dihormati" },
];

const TESTIMONIALS = [
  {
    quote: "Anak saya tak takut lagi ke klinik gigi. Doktor sangat sabar dan terangkan setiap langkah dengan jelas.",
    name: "Nurul Izzah",
    meta: "Ibu kepada 2 anak, Ipoh",
    initials: "NI",
  },
  {
    quote: "Temujanji on time, harga pun sama macam yang diberitahu. Recommend untuk keluarga.",
    name: "Azman Khalid",
    meta: "Pesakit tetap, Taiping",
    initials: "AK",
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

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-4 bg-surface border-b border-line">
        <Link href="/" className="text-lg font-bold text-espresso">
          Klinik Citra
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <a href="#rawatan" className="text-sm text-taupe hover:text-accent transition-colors">
            Rawatan
          </a>
          <a href="#kenapa" className="text-sm text-taupe hover:text-accent transition-colors">
            Kenapa Kami
          </a>
          <a href="#lokasi" className="text-sm text-taupe hover:text-accent transition-colors">
            Lokasi
          </a>
          <Link
            href="/booking"
            className="px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-dark transition-colors"
          >
            Buat Temujanji
          </Link>
        </div>
        <Link
          href="/booking"
          className="md:hidden px-4 py-2 bg-accent text-white text-sm font-semibold rounded-lg"
        >
          Tempah
        </Link>
      </nav>

      {/* Hero */}
      <header className="grid md:grid-cols-2 min-h-screen pt-[68px]">
        <div className="flex flex-col justify-center px-10 md:px-16 py-20 bg-surface">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent-soft rounded font-mono text-[11px] uppercase tracking-wider text-accent w-fit mb-8">
            Klinik Keluarga · Ipoh
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6">
            Senyuman sihat{" "}
            <em className="not-italic text-accent relative">
              bermula di sini.
              <span className="absolute bottom-1 left-0 right-0 h-2 bg-accent-soft -z-10" />
            </em>
          </h1>
          <p className="text-lg text-taupe max-w-md mb-10 leading-relaxed">
            Rawatan pergigian mesra keluarga dengan teknologi moden, harga telus, dan temujanji yang dihormati.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark hover:-translate-y-0.5 hover:shadow-lg transition-all"
            >
              Buat Temujanji →
            </Link>
            <a
              href="https://wa.me/60123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-line text-espresso font-semibold rounded-lg hover:border-accent hover:text-accent transition-colors"
            >
              <WhatsappLogo size={20} weight="fill" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center p-10 bg-cream overflow-hidden">
          <HeroParallax />
        </div>
      </header>

      {/* Services */}
      <section id="rawatan" className="max-w-6xl mx-auto px-10 py-24">
        <div className="text-center mb-16">
          <p className="font-mono text-[11px] uppercase tracking-widest text-taupe-faint mb-3">
            Rawatan Kami
          </p>
          <h2 className="text-4xl font-extrabold tracking-tight">
            Perkhidmatan Pergigian Lengkap
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.name}
                className="group relative bg-surface border border-line rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                <div className="w-14 h-14 bg-accent-soft rounded-xl grid place-items-center mb-6">
                  <Icon size={28} className="text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">{s.name}</h3>
                <p className="text-sm text-taupe mb-5 leading-relaxed">{s.desc}</p>
                <span className="font-mono text-accent font-bold">{s.price}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-surface-2 border-y border-line py-10">
        <div className="max-w-6xl mx-auto px-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {TRUST.map((t) => {
            const Icon = t.icon;
            return (
              <div key={t.text} className="flex items-center gap-4">
                <Icon size={28} className="text-accent shrink-0" />
                <span className="text-sm font-semibold">{t.text}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative max-w-6xl mx-auto px-10 py-24">
        <div className="absolute top-10 left-10 font-serif italic text-[120px] leading-none text-accent-soft opacity-40 pointer-events-none select-none whitespace-nowrap">
          Apa Kata Pesakit
        </div>
        <div className="relative z-10">
          <p className="font-mono text-[11px] uppercase tracking-widest text-accent mb-3">
            Testimoni
          </p>
          <h2 className="text-4xl font-extrabold tracking-tight mb-12">
            Apa Kata Pesakit
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="relative bg-surface border border-line rounded-2xl p-8"
              >
                <span className="absolute top-5 left-6 font-serif text-5xl text-accent-soft leading-none">
                  "
                </span>
                <p className="relative text-base leading-relaxed italic mb-6 pl-8">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3 pl-8">
                  <div className="w-10 h-10 bg-accent-soft rounded-full grid place-items-center text-sm font-bold text-accent">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold">{t.name}</p>
                    <p className="text-xs text-taupe-faint">{t.meta}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="relative bg-accent py-24 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold text-[200px] text-white/[0.03] whitespace-nowrap pointer-events-none select-none">
          CITRA
        </div>
        <div className="relative z-10 max-w-2xl mx-auto text-center px-10">
          <p className="text-2xl md:text-3xl font-bold text-white leading-snug mb-6">
            "Kami komited untuk memberikan rawatan pergigian terbaik dengan harga yang telus dan perkhidmatan yang mesra."
          </p>
          <p className="font-mono text-xs uppercase tracking-widest text-white/70">
            Dr. Aminah binti Hassan — Pengasas Klinik Citra
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface border-t border-line py-24">
        <div className="max-w-xl mx-auto text-center px-10">
          <h2 className="text-4xl font-extrabold mb-4">
            Sedia Untuk Senyuman Lebih Sihat?
          </h2>
          <p className="text-lg text-taupe mb-8">
            Tempah slot rawatan anda sekarang. Pengesahan segera melalui WhatsApp.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 px-10 py-4 bg-accent text-white font-bold rounded-lg hover:bg-accent-dark hover:-translate-y-0.5 hover:shadow-lg transition-all"
          >
            Buat Temujanji Sekarang →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-espresso text-white py-16">
        <div className="max-w-6xl mx-auto px-10 grid md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Klinik Citra</h3>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Klinik pergigian keluarga yang komited untuk memberikan rawatan berkualiti dengan harga telus dan perkhidmatan mesra.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Hubungi</h4>
            <div className="space-y-2 text-sm text-white/70">
              <p className="flex items-center gap-2">
                <Phone size={16} /> 05-255 8899
              </p>
              <p className="flex items-center gap-2">
                <Envelope size={16} /> hello@klinikcitra.my
              </p>
              <p className="flex items-center gap-2">
                <WhatsappLogo size={16} /> 012-345 6789
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Lokasi</h4>
            <div className="space-y-2 text-sm text-white/70">
              <p className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                No. 12, Jalan Dato Ahmad, 30000 Ipoh, Perak
              </p>
            </div>
            <h4 className="text-sm font-bold uppercase tracking-wider mt-6 mb-4">Waktu Operasi</h4>
            <div className="space-y-1 text-sm text-white/70">
              <p>Isnin - Jumaat: 9:00 - 17:00</p>
              <p>Sabtu: 9:00 - 13:00</p>
              <p>Ahad: Tutup</p>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-10 pt-8 border-t border-white/20 text-center text-sm text-white/50">
          © 2026 Klinik Citra. Hak cipta terpelihara.
        </div>
      </footer>
    </>
  );
}
