import Link from "next/link";
import Image from "next/image";
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
  WhatsappLogo,
  GraduationCap,
  Certificate,
  Tooth,
  NavigationArrow,
} from "@phosphor-icons/react/dist/ssr";
import { SiteNav } from "@/components/site-nav";
import { HeroVisual } from "@/components/hero-visual";
import { HeroReveal } from "@/components/hero-reveal";
import { SmileArc } from "@/components/smile-arc";
import { StatCount } from "@/components/stat-count";

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
    quote: "Temujanji on time, harga pun sama macam yang diberitahu. Memang sesuai untuk keluarga.",
    name: "Azman Khalid",
    meta: "Pesakit tetap, Taiping",
    initials: "AK",
  },
  {
    quote: "Scaling tak sakit langsung. Staff peramah dan klinik sangat bersih.",
    name: "Priya Devi",
    meta: "Pesakit scaling, Bercham",
    initials: "PD",
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

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Klinik+Citra+Ipoh+Perak";

export default function LandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteNav />
      <SmileArc />

      <main className="relative z-10">
        {/* Hero */}
        <header className="grid md:grid-cols-2 min-h-[100dvh] pt-16">
          <div className="flex flex-col justify-center px-5 md:px-16 pt-10 pb-6 md:py-20 bg-surface">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent-soft rounded font-mono text-[11px] uppercase tracking-wider text-accent w-fit mb-8">
              Klinik Keluarga · Ipoh
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6">
              <HeroReveal text="Senyuman sihat" />{" "}
              <em className="not-italic text-accent relative inline-block">
                <HeroReveal text="bermula di sini." />
                <span className="absolute bottom-1 left-0 right-0 h-2 bg-accent-soft -z-10" />
              </em>
            </h1>
            <p className="text-lg text-taupe max-w-md mb-10 leading-relaxed">
              Rawatan pergigian mesra keluarga dengan teknologi moden, harga telus, dan temujanji yang dihormati.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 px-8 py-4 min-h-[52px] bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                Buat Temujanji →
              </Link>
              <a
                href="https://wa.me/60123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 min-h-[52px] border border-line text-espresso font-semibold rounded-lg hover:border-accent hover:text-accent transition-colors"
              >
                <WhatsappLogo size={20} weight="fill" />
                WhatsApp
              </a>
            </div>
          </div>

          <HeroVisual />
        </header>

        {/* Services */}
        <section id="rawatan" className="max-w-6xl mx-auto px-5 md:px-10 py-20 md:py-24 scroll-mt-20">
          <div className="text-center mb-14 md:mb-16">
            <p className="font-mono text-[11px] uppercase tracking-widest text-taupe-faint mb-3">
              Rawatan Kami
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
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
        <section id="kenapa" className="bg-surface-2 border-y border-line py-12 md:py-14 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-5 md:px-10">
            <div className="mb-8 md:mb-10 text-center">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Kenapa Pesakit Pilih Klinik Citra
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {TRUST.map((t) => {
                const Icon = t.icon;
                return (
                  <div key={t.text} className="flex items-center gap-4">
                    <div className="w-11 h-11 shrink-0 bg-accent-soft rounded-xl grid place-items-center">
                      <Icon size={24} className="text-accent" />
                    </div>
                    <span className="text-sm font-semibold">{t.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Stat band */}
            <div className="mt-12 grid grid-cols-3 gap-4 max-w-2xl mx-auto text-center">
              <div>
                <p className="text-3xl md:text-4xl font-extrabold text-accent">
                  <StatCount value={12} suffix="+" />
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-taupe-faint">
                  Tahun Pengalaman
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-extrabold text-accent">
                  <StatCount value={5000} suffix="+" />
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-taupe-faint">
                  Pesakit Dilayan
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-extrabold text-accent">4.9</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-taupe-faint">
                  Rating Pesakit
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About / Doktor */}
        <section id="doktor" className="max-w-6xl mx-auto px-5 md:px-10 py-20 md:py-24 scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=900&auto=format&fit=crop&q=80"
                  alt="Dr. Aminah binti Hassan, pengasas dan doktor pergigian Klinik Citra"
                  fill
                  sizes="(max-width: 768px) 92vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-2 md:-right-5 bg-surface border border-line rounded-xl px-5 py-4 shadow-lg">
                <p className="font-mono text-[10px] uppercase tracking-widest text-taupe-faint">
                  Pengasas & Doktor Utama
                </p>
                <p className="mt-1 text-sm font-bold text-espresso">Dr. Aminah binti Hassan</p>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <p className="font-mono text-[11px] uppercase tracking-widest text-accent mb-3">
                Tentang Klinik
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
                Doktor yang anda kenal, bukan sekadar nama.
              </h2>
              <p className="text-base md:text-lg text-taupe leading-relaxed mb-6">
                Klinik Citra diasaskan oleh Dr. Aminah dengan satu prinsip mudah: setiap pesakit
                dilayan macam keluarga sendiri. Sejak 12 tahun lalu, kami berkhidmat untuk
                masyarakat Ipoh dengan rawatan yang jelas, harga yang telus, dan suasana klinik
                yang selesa untuk kanak-kanak dan dewasa.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <GraduationCap size={22} className="text-accent shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">
                    <b>DDS (Doctor of Dental Surgery)</b>, berdaftar dengan Malaysian Dental Council
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Certificate size={22} className="text-accent shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">
                    Klinik berdaftar Kementerian Kesihatan Malaysia
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Tooth size={22} className="text-accent shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">
                    Kepakaran dalam pergigian keluarga dan pergigian estetik
                  </span>
                </li>
              </ul>
              <blockquote className="mt-8 border-l-4 border-accent pl-5 py-1">
                <p className="text-base italic text-espresso leading-relaxed">
                  &ldquo;Kami komited untuk memberikan rawatan pergigian terbaik dengan harga yang
                  telus dan perkhidmatan yang mesra.&rdquo;
                </p>
                <footer className="mt-2 font-mono text-[11px] uppercase tracking-widest text-taupe-faint">
                  Dr. Aminah binti Hassan, Pengasas Klinik Citra
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimoni" className="bg-surface-2 border-y border-line py-20 md:py-24 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-5 md:px-10">
            <div className="mb-12 md:mb-14">
              <p className="font-mono text-[11px] uppercase tracking-widest text-accent mb-3">
                Testimoni
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Apa Kata Pesakit
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.name}
                  className="relative bg-surface border border-line rounded-2xl p-8"
                >
                  <span className="absolute top-5 left-6 font-serif text-5xl text-accent-soft leading-none">
                    &ldquo;
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
                  <div className="absolute top-6 right-6 flex gap-0.5 text-accent">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={13} weight="fill" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lokasi & Waktu Operasi */}
        <section id="lokasi" className="max-w-6xl mx-auto px-5 md:px-10 py-20 md:py-24 scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-accent mb-3">
                Lokasi & Waktu
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
                Jumpa kami di Ipoh.
              </h2>
              <p className="text-base text-taupe leading-relaxed mb-8 max-w-md">
                Klinik kami mudah diakses dengan tempat letak kereta berhampiran. Datang terus,
                atau tempah slot lebih awal supaya anda tidak perlu menunggu lama.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin size={22} className="text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold">Alamat</p>
                    <p className="text-sm text-taupe leading-relaxed">
                      No. 12, Jalan Dato Ahmad, 30000 Ipoh, Perak
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={22} className="text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold">Waktu Operasi</p>
                    <p className="text-sm text-taupe">Isnin - Jumaat: 9:00 pagi - 5:00 petang</p>
                    <p className="text-sm text-taupe">Sabtu: 9:00 pagi - 1:00 petang</p>
                    <p className="text-sm text-taupe">Ahad: Tutup</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={22} className="text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold">Hubungi</p>
                    <a href="tel:+6052558899" className="block text-sm text-taupe hover:text-accent py-3 -my-1.5">
                      05-255 8899
                    </a>
                    <a
                      href="https://wa.me/60123456789"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-taupe hover:text-accent py-3 -my-1.5"
                    >
                      012-345 6789 (WhatsApp)
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 min-h-[48px] border border-line text-espresso text-sm font-semibold rounded-lg hover:border-accent hover:text-accent transition-colors"
                >
                  <NavigationArrow size={18} />
                  Buka Google Maps
                </a>
                <Link
                  href="/booking"
                  className="inline-flex items-center gap-2 px-6 py-3.5 min-h-[48px] bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-dark transition-colors"
                >
                  Buat Temujanji →
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-line bg-surface-2 min-h-[320px]">
              <iframe
                title="Peta lokasi Klinik Citra, Ipoh"
                src="https://www.google.com/maps?q=Ipoh%2C%20Perak%2C%20Malaysia&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-surface border-t border-line py-20 md:py-24">
          <div className="max-w-xl mx-auto text-center px-5 md:px-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Sedia Untuk Senyuman Lebih Sihat?
            </h2>
            <p className="text-lg text-taupe mb-8">
              Tempah slot rawatan anda sekarang. Pengesahan segera melalui WhatsApp.
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 px-10 py-4 min-h-[52px] bg-accent text-white font-bold rounded-lg hover:bg-accent-dark hover:-translate-y-0.5 hover:shadow-lg transition-all"
            >
              Buat Temujanji Sekarang →
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-espresso text-white py-16 relative z-10">
        <div className="max-w-6xl mx-auto px-5 md:px-10 grid md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Klinik Citra</h3>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Klinik pergigian keluarga yang komited untuk memberikan rawatan berkualiti dengan
              harga telus dan perkhidmatan mesra.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Hubungi</h4>
            <div className="space-y-2 text-sm text-white/70">
              <p className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+6052558899" className="hover:text-white inline-flex items-center min-h-[44px] py-2">05-255 8899</a>
              </p>
              <p className="flex items-center gap-2">
                <Envelope size={16} />
                <a href="mailto:hello@klinikcitra.my" className="hover:text-white inline-flex items-center min-h-[44px] py-2">
                  hello@klinikcitra.my
                </a>
              </p>
              <p className="flex items-center gap-2">
                <WhatsappLogo size={16} />
                <a
                  href="https://wa.me/60123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white inline-flex items-center min-h-[44px] py-2"
                >
                  012-345 6789
                </a>
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
        <div className="max-w-6xl mx-auto px-5 md:px-10 pt-8 border-t border-white/20 text-center text-sm text-white/50">
          © 2026 Klinik Citra. Hak cipta terpelihara.
        </div>
      </footer>
    </>
  );
}
