import {
  Search,
  Sparkles,
  Sun,
  Heart,
  Plus,
  AlignCenter,
  Activity,
  ShieldCheck,
  Smile,
  Check,
  Clock,
  MessageCircle,
  MapPin,
  Navigation,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { InstagramLogo, FacebookLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { StickyCta } from "@/components/sticky-cta";
import { EyebrowChip } from "@/components/eyebrow-chip";
import { ButtonPrimary, ExternalButton } from "@/components/button";
import { TreatmentCard } from "@/components/treatment-card";
import { NeedCard } from "@/components/need-card";
import { ReviewCard } from "@/components/review-card";
import { StepItem } from "@/components/step-item";
import { StatItem } from "@/components/stat-item";
import { Stars } from "@/components/stars";
import { ArtImage } from "@/components/art-image";
import { MiniBookingForm } from "@/components/mini-booking-form";

const WHATSAPP_URL = "https://wa.me/60125186720";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Klinik+Citra+Ipoh+Perak";

const IMG = {
  /* Pre-cropped at source (fit=crop + target aspect) so next/image never ships
     pixels the layout hides with object-cover. One photo per slot, all breakpoints. */
  hero: "https://images.unsplash.com/photo-1745970347652-8f22f5d7d3ba?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=75&w=1200&h=900",
  why: "https://images.unsplash.com/photo-1631217872822-1c2546d6b864?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=75&w=1080&h=900",
  dentist:
    "https://images.unsplash.com/photo-1733685372988-69a356984436?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=75&w=1000&h=1150",
};

const STATS: { value: string; label: string; shortLabel: string }[] = [
  { value: "4.9★", label: "Purata penilaian Google", shortLabel: "Penilaian Google" },
  { value: "12 tahun", label: "Melayani keluarga Ipoh", shortLabel: "Melayani Ipoh" },
  { value: "18,000+", label: "Pesakit dirawat", shortLabel: "Pesakit dirawat" },
  { value: "6 doktor", label: "Pasukan pergigian bertauliah", shortLabel: "Bertauliah" },
];

const NEEDS: { icon: LucideIcon; title: string; desc: string; action: string }[] = [
  {
    icon: Activity,
    title: "Gigi sakit?",
    desc: "Pemeriksaan segera dengan pelan lega sakit pada hari yang sama.",
    action: "Dapatkan bantuan →",
  },
  {
    icon: Sparkles,
    title: "Nak cuci gigi?",
    desc: "Scaling, polishing dan nasihat penjagaan harian yang mudah.",
    action: "Tempah cuci gigi →",
  },
  {
    icon: ShieldCheck,
    title: "Gigi patah atau bengkak?",
    desc: "Slot kecemasan diutamakan sepanjang waktu operasi kami.",
    action: "Hubungi segera →",
  },
  {
    icon: Smile,
    title: "Anak takut doktor?",
    desc: "Pendekatan lembut dan pemeriksaan mesra kanak-kanak.",
    action: "Tempah untuk anak →",
  },
];

const TREATMENTS: {
  icon: LucideIcon;
  category: string;
  title: string;
  desc: string;
  price: string;
  hideOnMobile?: boolean;
}[] = [
  {
    icon: Search,
    category: "UMUM",
    title: "Pemeriksaan & X-ray",
    desc: "Pemeriksaan menyeluruh dengan X-ray digital resolusi tinggi.",
    price: "Dari RM60 · 30 min",
  },
  {
    icon: Sparkles,
    category: "UMUM",
    title: "Scaling & Polishing",
    desc: "Buang karang gigi dan licinkan permukaan untuk nafas segar.",
    price: "Dari RM80 · 45 min",
  },
  {
    icon: Sun,
    category: "KOSMETIK",
    title: "Pemutihan gigi",
    desc: "Pemutihan profesional — hasil ketara dalam sekali sesi.",
    price: "Dari RM450 · 60 min",
  },
  {
    icon: Heart,
    category: "PEMULIHAN",
    title: "Tampalan komposit",
    desc: "Bina semula gigi rosak dengan tampalan sewarna gigi asli.",
    price: "Dari RM120 · 45 min",
    hideOnMobile: true,
  },
  {
    icon: Plus,
    category: "PEMULIHAN",
    title: "Implan gigi",
    desc: "Gantikan gigi hilang dengan implan titanium tahan lama.",
    price: "Dari RM3,800 · 2 lawatan",
  },
  {
    icon: AlignCenter,
    category: "ORTHODONTIK",
    title: "Braces & aligner",
    desc: "Susun gigi secara berperingkat dengan pelan bulanan tetap.",
    price: "Dari RM2,900 · 18 bulan",
    hideOnMobile: true,
  },
];

const WHY_POINTS: { title: string; desc: string }[] = [
  {
    title: "Terangkan dulu",
    desc: "Anda tahu apa, kenapa dan berapa sebelum rawatan bermula.",
  },
  {
    title: "Harga telus",
    desc: "Anggaran bertulis diberikan sebelum apa-apa rawatan.",
  },
  {
    title: "Slot fleksibel",
    desc: "Waktu petang dan Sabtu untuk keluarga yang bekerja.",
  },
  {
    title: "Rekod digital",
    desc: "Sejarah rawatan anda tersimpan untuk lawatan akan datang.",
  },
];

const STEPS: { number: string; title: string; desc: string }[] = [
  {
    number: "01",
    title: "Tempah slot",
    desc: "Pilih tarikh dan masa yang sesuai — ambil masa kurang satu minit.",
  },
  {
    number: "02",
    title: "Isi borang ringkas",
    desc: "Sejarah kesihatan asas supaya doktor faham keadaan anda.",
  },
  {
    number: "03",
    title: "Konsultasi & X-ray",
    desc: "Doktor periksa, ambil X-ray dan terangkan apa yang dilihat.",
  },
  {
    number: "04",
    title: "Pelan dan harga",
    desc: "Anda terima pelan rawatan bertulis sebelum apa-apa bermula.",
  },
];

const DOCTORS: { initials: string; name: string; role: string; shortRole: string }[] = [
  {
    initials: "FN",
    name: "Dr. Farah Nadia",
    role: "Pengasas · Doktor Pergigian Utama · 14 tahun",
    shortRole: "Pengasas · Doktor Utama",
  },
  {
    initials: "IH",
    name: "Dr. Imran Hakim",
    role: "Prosthodontik & implan gigi",
    shortRole: "Prostodontik & implan",
  },
  {
    initials: "ML",
    name: "Dr. Mei Ling",
    role: "Orthodontik & aligner",
    shortRole: "Orthodontik & aligner",
  },
];

const REVIEWS: { quote: string; initials: string; name: string; role: string }[] = [
  {
    quote: "Doktor terangkan setiap langkah, tak rasa dipaksa. Bilik pun bersih dan tenang.",
    initials: "NA",
    name: "Nurul Aisyah",
    role: "Scaling & Polishing",
  },
  {
    quote: "Anak saya yang takut klinik gigi sekarang minta datang sendiri. Terima kasih!",
    initials: "HR",
    name: "Hafiz Rahim",
    role: "Rawatan kanak-kanak",
  },
  {
    quote: "Harga disebut awal, tiada caj tersembunyi. Selesa dan cepat.",
    initials: "TW",
    name: "Tan Wei Ming",
    role: "Tampalan komposit",
  },
];

const HOURS: { day: string; time: string }[] = [
  { day: "Isnin – Jumaat", time: "9:00 – 21:00" },
  { day: "Sabtu", time: "9:00 – 18:00" },
  { day: "Ahad", time: "10:00 – 16:00" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Klinik Citra",
  description:
    "Klinik pergigian keluarga di Ipoh, Perak. Rawatan gigi yang tenang, jelas dan mesra keluarga.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No. 12, Jalan Bandar Timah",
    addressLocality: "Ipoh",
    addressRegion: "Perak",
    postalCode: "30000",
    addressCountry: "MY",
  },
  telephone: "+60 5-255 8899",
  openingHours: ["Mo-Fr 09:00-21:00", "Sa 09:00-18:00", "Su 10:00-16:00"],
  priceRange: "RM 60 - RM 3,800",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1280",
  },
};

const sectionShell = "mx-auto max-w-[1440px] px-5 py-10 md:px-10 md:py-12 xl:px-[120px] xl:py-[88px]";
const h2Class =
  "text-[27px] font-extrabold leading-[1.15] tracking-[-0.8px] text-text md:text-[32px] md:leading-[1.12] md:tracking-[-0.9px] xl:text-[40px] xl:tracking-[-1px]";
const bodyClass = "text-[15px] font-medium leading-[1.6] text-text-muted md:text-[16px]";

export default function LandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteNav />
      <a
        href="#kandungan"
        className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-on-primary"
      >
        Langkau ke kandungan
      </a>

      <main id="kandungan">
        {/* 03 Hero */}
        <section className="mx-auto max-w-[1440px] px-5 pb-9 pt-[30px] md:px-10 md:pb-14 md:pt-12 xl:px-[120px] xl:pb-[92px] xl:pt-[72px]">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-[1fr_auto] md:gap-x-10 md:gap-y-[26px] xl:gap-x-16">
            <div className="flex flex-col gap-5 md:col-start-1 md:row-start-1 md:gap-[26px]">
              <EyebrowChip>
                <span className="hidden xl:inline">Pergigian Keluarga · Ipoh, Perak</span>
                <span className="xl:hidden">Pergigian Keluarga · Ipoh</span>
              </EyebrowChip>
              <h1 className="text-[34px] font-extrabold leading-[1.1] tracking-[-1.1px] text-text md:text-[40px] md:leading-[1.08] md:tracking-[-1.2px] xl:text-[58px] xl:leading-[1.06] xl:tracking-[-1.6px]">
                <span className="hidden xl:inline">
                  Rawatan gigi yang tenang, jelas dan mesra keluarga.
                </span>
                <span className="xl:hidden">Rawatan gigi yang tenang dan mesra keluarga.</span>
              </h1>
              <p className={bodyClass}>
                <span className="hidden xl:inline">
                  Dari pemeriksaan rutin hingga implan — kami terangkan setiap langkah sebelum
                  mula, dan setiap harga sebelum anda setuju.
                </span>
                <span className="xl:hidden">
                  Kami terangkan setiap langkah dan setiap harga sebelum rawatan mula.
                </span>
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative h-[250px] w-full overflow-hidden rounded-xl border border-border md:col-start-2 md:row-span-2 md:row-start-1 md:h-[340px] md:w-[360px] xl:h-[530px] xl:w-[600px]">
              <ArtImage
                alt="Ruang sambutan Klinik Citra yang cerah dan selesa"
                src={IMG.hero}
                priority
                sizes="(max-width: 768px) 92vw, 600px"
                className="object-cover"
              />
              {/* Open Badge */}
              <div className="absolute right-5 top-5 flex items-center gap-[7px] rounded-full bg-success px-[13px] py-[7px] md:hidden xl:flex">
                <span aria-hidden="true" className="h-[7px] w-[7px] rounded-full bg-on-primary" />
                <span className="text-[11px] font-bold text-on-primary xl:text-[12px]">
                  <span className="xl:hidden">Sedang buka · sehingga 9 malam</span>
                  <span className="hidden xl:inline">Sedang buka</span>
                </span>
              </div>
              {/* Open Card */}
              <div className="absolute bottom-[56px] left-[28px] hidden w-[300px] items-center gap-3 rounded-lg bg-surface p-[18px] xl:flex">
                <Clock size={22} className="shrink-0 text-primary" aria-hidden="true" />
                <div className="flex flex-col gap-px">
                  <span className="text-[15px] font-extrabold text-text">Buka hari ini</span>
                  <span className="text-[13px] font-medium text-text-muted">
                    9:00 pagi – 9:00 malam
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 md:col-start-1 md:row-start-2 md:gap-[26px]">
              <div className="flex flex-col gap-2.5 xl:flex-row xl:items-center xl:gap-3">
                <ButtonPrimary href="/booking">
                  Tempah temujanji
                </ButtonPrimary>
                <ExternalButton
                  href={WHATSAPP_URL}
                  variant="secondary"
                  icon={<MessageCircle size={18} className="text-primary" aria-hidden="true" />}
                >
                  WhatsApp kami
                </ExternalButton>
              </div>
              <div className="flex items-center gap-2.5">
                <Stars size={15} />
                <p className="text-[13px] font-semibold text-text-muted xl:text-[14px]">
                  <span className="hidden xl:inline">4.9 daripada 1,280 ulasan pesakit</span>
                  <span className="xl:hidden">4.9 · 1,280 ulasan pesakit</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 04 Stats */}
        <section className="border-y border-border bg-surface-soft">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-[18px] px-5 py-[22px] md:px-10 md:py-[26px] xl:px-[120px] xl:py-[34px]">
            <div className="grid grid-cols-2 gap-x-4 gap-y-[18px] md:flex md:items-center md:justify-between md:gap-4">
              {STATS.map((s, i) => (
                <div key={s.label} className="contents">
                  <StatItem value={s.value} label={s.label} shortLabel={s.shortLabel} />
                  {i < STATS.length - 1 && (
                    <span aria-hidden="true" className="hidden h-12 w-px bg-border xl:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 05 Quick Needs */}
        <section id="keperluan" className={sectionShell}>
          <div className="flex flex-col gap-6 md:gap-7 xl:gap-10">
            <div className="flex flex-col gap-3 md:gap-4">
              <EyebrowChip>Bantuan Pantas</EyebrowChip>
              <h2 className={h2Class}>
                <span className="hidden md:inline">Pilih mengikut apa yang anda rasa hari ini.</span>
                <span className="md:hidden">Apa yang anda perlu hari ini?</span>
              </h2>
              <p className={`${bodyClass} hidden xl:block`}>
                Kami susun rawatan di sekeliling keperluan anda — bukan sebaliknya.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-4">
              {NEEDS.map((n) => (
                <NeedCard key={n.title} {...n} />
              ))}
            </div>
          </div>
        </section>

        {/* 06 Treatments */}
        <section id="rawatan" className={`${sectionShell} scroll-mt-20`}>
          <div className="flex flex-col gap-6 md:gap-7 xl:gap-10">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-10">
              <div className="flex flex-col gap-3 md:gap-4">
                <EyebrowChip>Rawatan</EyebrowChip>
                <h2 className={h2Class}>Rawatan lengkap di bawah satu bumbung.</h2>
                <p className={`${bodyClass} hidden xl:block`}>
                  Daripada pemeriksaan rutin sehingga pemulihan lanjutan, semuanya dijelaskan
                  dengan harga sebelum mula.
                </p>
              </div>
              <span id="harga" className="scroll-mt-20" aria-hidden="true" />
              <a
                href="#harga"
                className="hidden shrink-0 text-[15px] font-bold text-primary hover:underline xl:block"
              >
                Lihat semua rawatan →
              </a>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-3">
              {TREATMENTS.map((t) => (
                <div key={t.title} className={t.hideOnMobile ? "hidden md:flex" : "flex"}>
                  <TreatmentCard
                    icon={t.icon}
                    category={t.category}
                    title={t.title}
                    desc={t.desc}
                    price={t.price}
                  />
                </div>
              ))}
            </div>
            <a
              href="#harga"
              className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-md border border-border bg-surface px-[22px] py-[14px] text-[16px] font-bold text-primary hover:border-primary md:hidden"
            >
              <ArrowRight size={18} aria-hidden="true" />
              Lihat semua rawatan
            </a>
          </div>
        </section>

        {/* 07 Why Citra */}
        <section id="tentang" className={`${sectionShell} scroll-mt-20 border-y border-border bg-surface-soft`}>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-10 md:gap-y-6 xl:gap-x-16">
            <div className="flex flex-col gap-5 md:col-start-2 md:row-start-1 xl:gap-6">
              <EyebrowChip>Kenapa Klinik Citra</EyebrowChip>
              <h2 className={h2Class}>Kami utamakan kejelasan sebelum rawatan.</h2>
              <p className={bodyClass}>
                Ramai orang takut ke klinik gigi kerana tidak tahu apa yang akan berlaku. Kami ubah
                itu — anda sentiasa tahu langkah seterusnya.
              </p>
            </div>
            <div className="relative h-[220px] w-full overflow-hidden rounded-lg border border-border md:col-start-1 md:row-span-2 md:row-start-1 md:h-[380px] xl:h-[480px] xl:w-[540px] xl:rounded-xl">
              <ArtImage
                alt="Ruang rawatan Klinik Citra yang bersih dan tenang"
                src={IMG.why}
                sizes="(max-width: 768px) 92vw, 540px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-5 md:col-start-2 md:row-start-2 md:grid md:grid-cols-2 md:gap-x-7 md:gap-y-6">
              {WHY_POINTS.map((p) => (
                <div key={p.title} className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-primary-soft">
                      <Check size={14} className="text-primary" aria-hidden="true" />
                    </span>
                    <h3 className="text-[16px] font-extrabold text-text">{p.title}</h3>
                  </div>
                  <p className="text-[14px] leading-[1.5] text-text-muted">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 08 First Visit */}
        <section id="lawatan" className={sectionShell}>
          <div className="flex flex-col gap-6 md:gap-8 xl:gap-12">
            <div className="flex flex-col items-center gap-3 md:gap-4">
              <EyebrowChip>Lawatan Pertama</EyebrowChip>
              <h2 className={`${h2Class} max-w-[760px] text-center`}>Empat langkah, tiada kejutan.</h2>
              <p className={`${bodyClass} hidden max-w-[640px] text-center xl:block`}>
                Kami rancang setiap lawatan supaya anda tahu apa yang berlaku dari mula hingga akhir.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2 md:gap-7 xl:grid-cols-4">
              {STEPS.map((s) => (
                <StepItem key={s.number} {...s} />
              ))}
            </div>
          </div>
        </section>

        {/* 09 Dentist */}
        <section id="doktor" className={`${sectionShell} scroll-mt-20 xl:bg-surface-soft`}>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 xl:items-center xl:gap-16">
            <div className="relative h-[280px] w-full overflow-hidden rounded-xl border border-border md:h-[420px] xl:h-[560px] xl:w-[480px]">
              <ArtImage
                alt="Dr. Farah Nadia, pengasas Klinik Citra"
                src={IMG.dentist}
                sizes="(max-width: 768px) 92vw, 480px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-5 xl:gap-6">
              <EyebrowChip>Pasukan Pergigian</EyebrowChip>
              <h2 className={h2Class}>Doktor yang anda kenal, bukan orang asing.</h2>
              <p className={bodyClass}>
                Setiap doktor di Klinik Citra dilatih untuk mendengar dahulu. Anda akan berjumpa
                doktor yang sama pada setiap lawatan supaya rawatan anda berterusan.
              </p>
              <div className="flex flex-col">
                {DOCTORS.map((d) => (
                  <div
                    key={d.name}
                    className="flex items-center gap-3 border-b border-border py-[13px] xl:gap-3.5 xl:py-[15px]"
                  >
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary-soft text-[15px] font-extrabold text-primary xl:h-[46px] xl:w-[46px]">
                      {d.initials}
                    </div>
                    <div className="flex min-w-0 flex-col gap-px">
                      <span className="text-[15px] font-extrabold text-text xl:text-[16px]">
                        {d.name}
                      </span>
                      <span className="text-[13px] font-medium text-text-muted xl:text-[14px]">
                        <span className="hidden xl:inline">{d.role}</span>
                        <span className="xl:hidden">{d.shortRole}</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <ExternalButton
                href={WHATSAPP_URL}
                variant="secondary"
                className="self-start"
                icon={<ArrowRight size={18} className="text-primary" aria-hidden="true" />}
              >
                Kenali pasukan kami
              </ExternalButton>
            </div>
          </div>
        </section>

        {/* 10 Reviews */}
        <section id="ulasan" className={`${sectionShell} border-y border-border bg-surface-soft xl:border-0 xl:bg-transparent`}>
          <div className="flex flex-col gap-6 md:gap-8 xl:gap-12">
            <div className="flex flex-col items-center gap-3 md:gap-4">
              <EyebrowChip>Ulasan Pesakit</EyebrowChip>
              <h2 className={`${h2Class} max-w-[760px] text-center`}>1,280 ulasan, purata 4.9.</h2>
              <p className={`${bodyClass} hidden max-w-[640px] text-center xl:block`}>
                Kepercayaan pesakit dari seluruh Ipoh dan Perak — kami jaga seperti keluarga.
              </p>
            </div>
            <div className="flex items-center justify-center gap-3 md:hidden xl:flex">
              <span className="text-[38px] font-extrabold tracking-[-1.2px] text-text xl:text-[44px] xl:tracking-[-1.5px]">
                4.9
              </span>
              <Stars size={18} />
              <span className="hidden text-[15px] font-semibold text-text-muted xl:inline">
                daripada 1,280 ulasan Google
              </span>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
              {REVIEWS.map((r) => (
                <ReviewCard key={r.name} {...r} />
              ))}
            </div>
          </div>
        </section>

        {/* 11 Location */}
        <section id="lokasi" className={`${sectionShell} scroll-mt-20 xl:bg-surface-soft`}>
          <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2 md:gap-x-10 md:gap-y-5 xl:gap-x-16">
            <div className="flex flex-col gap-[18px] md:col-start-1 md:row-start-1 xl:gap-[22px]">
              <EyebrowChip>
                <span className="hidden xl:inline">Lokasi & Waktu Operasi</span>
                <span className="xl:hidden">Lokasi & Waktu</span>
              </EyebrowChip>
              <h2 className={h2Class}>Datang ke Klinik Citra di Ipoh.</h2>
              <p className={bodyClass}>
                No. 12, Jalan Bandar Timah, 30000 Ipoh, Perak.
              </p>
            </div>

            <div className="relative h-[220px] w-full overflow-hidden rounded-xl border border-border md:col-start-2 md:row-span-3 md:row-start-1 md:h-[380px] xl:h-[460px] xl:w-[560px]">
              <iframe
                title="Peta lokasi Klinik Citra di Ipoh, Perak"
                src="https://www.google.com/maps?q=No.+12,+Jalan+Bandar+Timah,+30000+Ipoh,+Perak&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
              />
              <div className="pointer-events-none absolute bottom-4 left-4 flex w-[300px] items-center gap-3 rounded-md bg-surface p-[14px] shadow-soft xl:bottom-6 xl:left-6 xl:w-[360px] xl:gap-3 xl:rounded-lg xl:p-[18px]">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary xl:h-10 xl:w-10">
                  <MapPin size={18} className="text-on-primary xl:size-5" aria-hidden="true" />
                </span>
                <div className="flex min-w-0 flex-col gap-px">
                  <span className="text-[14px] font-extrabold text-text xl:text-[15px]">
                    Klinik Citra Ipoh
                  </span>
                  <span className="text-[12px] font-medium text-text-muted xl:text-[13px]">
                    <span className="hidden xl:inline">5 minit dari Ipoh Parade · Berhampiran Medan Kidd</span>
                    <span className="xl:hidden">5 minit dari Ipoh Parade</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-surface px-[18px] py-1.5 md:col-start-1 md:row-start-2 xl:w-[440px] xl:px-[22px] xl:py-2">
              {HOURS.map((h) => (
                <div
                  key={h.day}
                  className="flex items-center justify-between border-b border-border py-[13px] last:border-b-0 xl:py-[14px]"
                >
                  <span className="text-[14px] font-semibold text-text xl:text-[15px]">{h.day}</span>
                  <span className="text-[14px] font-extrabold text-primary xl:text-[15px]">
                    {h.time}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 md:col-start-1 md:row-start-3 xl:flex-row xl:items-center">
              <ExternalButton
                href={MAPS_URL}
                variant="primary"
                icon={<Navigation size={18} aria-hidden="true" />}
              >
                Dapatkan arah
              </ExternalButton>
              <ExternalButton
                href={WHATSAPP_URL}
                variant="secondary"
                icon={<MessageCircle size={18} className="text-primary" aria-hidden="true" />}
              >
                WhatsApp kami
              </ExternalButton>
            </div>
            <p className="text-[13px] font-medium text-text-muted md:col-start-1 md:row-start-4">
              Parking percuma di hadapan klinik · Akses kerusi roda tersedia.
            </p>
          </div>
        </section>

        {/* 12 Booking */}
        <section className="mx-auto max-w-[1440px] px-5 pb-10 md:px-10 md:pb-12 xl:px-[120px] xl:pb-[120px]">
          <div className="flex flex-col gap-6 rounded-xl bg-primary p-6 md:gap-8 md:p-10 xl:flex-row xl:items-center xl:gap-14 xl:p-14">
            <div className="flex flex-col gap-5 xl:gap-5">
              <span className="inline-flex w-fit items-center justify-center rounded-full bg-white/[0.12] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[1.1px] text-on-primary xl:text-[12px] xl:tracking-[1.2px]">
                Tempah dalam 1 minit
              </span>
              <h2 className="text-[27px] font-extrabold leading-[1.15] tracking-[-0.8px] text-on-primary xl:text-[40px] xl:leading-[1.12] xl:tracking-[-1px]">
                Sedia untuk mulakan rawatan anda?
              </h2>
              <p className="text-[15px] font-medium leading-[1.6] text-white/70 xl:text-[17px]">
                <span className="hidden xl:inline">
                  Pilih slot yang sesuai dan kami akan mengesahkannya melalui WhatsApp dalam masa
                  satu jam bekerja.
                </span>
                <span className="xl:hidden">
                  Kami akan mengesahkan slot anda melalui WhatsApp dalam masa satu jam bekerja.
                </span>
              </p>
              <div className="hidden items-center gap-[22px] xl:flex">
                {["Tiada bayaran pendahuluan", "Batal bebas sebelum 24 jam", "Slot petang & Sabtu"].map(
                  (p) => (
                    <span key={p} className="flex items-center gap-2">
                      <Check size={16} className="text-white/80" aria-hidden="true" />
                      <span className="text-[14px] font-semibold text-white/80">{p}</span>
                    </span>
                  )
                )}
              </div>
            </div>
            <MiniBookingForm />
          </div>
        </section>
      </main>

      {/* 13 Footer */}
      <footer className="bg-text text-on-primary">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-[26px] px-5 py-9 md:gap-10 md:px-10 md:py-16 xl:px-[120px]">
          <div className="flex flex-col gap-10 xl:flex-row xl:gap-14">
            <div className="flex flex-col gap-[14px] xl:w-[340px] xl:gap-[18px]">
              <div className="flex items-center gap-2.5 xl:gap-3">
                <span
                  className="grid h-[34px] w-[34px] place-items-center rounded-[10px] bg-on-primary text-[17px] font-extrabold text-text xl:h-[38px] xl:w-[38px] xl:rounded-[11px] xl:text-[19px]"
                  aria-hidden="true"
                >
                  C
                </span>
                <span className="text-[18px] font-extrabold tracking-[-0.4px] xl:text-[20px]">
                  Klinik Citra
                </span>
              </div>
              <p className="text-[14px] font-medium leading-[1.6] text-white/60 xl:text-[15px]">
                <span className="hidden xl:inline">
                  Klinik pergigian keluarga di Ipoh. Rawatan jelas, harga telus, dan doktor yang
                  anda kenal.
                </span>
                <span className="xl:hidden">
                  Klinik pergigian keluarga di Ipoh. Rawatan jelas, harga telus.
                </span>
              </p>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://www.instagram.com/klinikcitra.ipoh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Klinik Citra"
                  className="grid h-[38px] w-[38px] place-items-center rounded-[10px] bg-white/[0.08] text-white/80 hover:text-white xl:h-10 xl:w-10"
                >
                  <InstagramLogo size={18} />
                </a>
                <a
                  href="https://www.facebook.com/klinikcitra.ipoh"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Klinik Citra"
                  className="grid h-[38px] w-[38px] place-items-center rounded-[10px] bg-white/[0.08] text-white/80 hover:text-white xl:h-10 xl:w-10"
                >
                  <FacebookLogo size={18} />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Klinik Citra"
                  className="grid h-[38px] w-[38px] place-items-center rounded-[10px] bg-white/[0.08] text-white/80 hover:text-white md:hidden"
                >
                  <MessageCircle size={17} />
                </a>
              </div>
            </div>

            <div className="grid flex-1 grid-cols-2 gap-6 md:grid-cols-3 md:gap-8 xl:gap-14">
              <div className="flex min-w-0 flex-col gap-3">
                <h3 className="text-[13px] font-bold tracking-[0.4px] xl:text-[14px]">Rawatan</h3>
                <div className="flex flex-col gap-3">
                  <a href="#rawatan" className="text-[13px] font-medium text-white/60 hover:text-white xl:text-[14px]">
                    Pemeriksaan & X-ray
                  </a>
                  <a href="#rawatan" className="text-[13px] font-medium text-white/60 hover:text-white xl:text-[14px]">
                    Scaling & polishing
                  </a>
                  <a href="#rawatan" className="text-[13px] font-medium text-white/60 hover:text-white xl:text-[14px]">
                    Pemutihan gigi
                  </a>
                  <a href="#rawatan" className="text-[13px] font-medium text-white/60 hover:text-white xl:text-[14px]">
                    Implan gigi
                  </a>
                  <a href="#rawatan" className="hidden text-[14px] font-medium text-white/60 hover:text-white md:block">
                    Braces & aligner
                  </a>
                </div>
              </div>
              <div className="flex min-w-0 flex-col gap-3">
                <h3 className="text-[13px] font-bold tracking-[0.4px] xl:text-[14px]">Klinik</h3>
                <div className="flex flex-col gap-3">
                  <a href="#tentang" className="text-[13px] font-medium text-white/60 hover:text-white xl:text-[14px]">
                    Tentang kami
                  </a>
                  <a href="#doktor" className="text-[13px] font-medium text-white/60 hover:text-white xl:text-[14px]">
                    Doktor kami
                  </a>
                  <a href="#harga" className="text-[13px] font-medium text-white/60 hover:text-white xl:text-[14px]">
                    Harga & pakej
                  </a>
                  <span className="hidden text-[14px] font-medium text-white/60 md:block">Blog kesihatan</span>
                  <span className="hidden text-[14px] font-medium text-white/60 md:block">Kerjaya</span>
                  <a href="#lokasi" className="text-[13px] font-medium text-white/60 hover:text-white md:hidden">
                    Hubungi
                  </a>
                </div>
              </div>
              <div className="hidden min-w-0 flex-col gap-3 md:flex">
                <h3 className="text-[13px] font-bold tracking-[0.4px] xl:text-[14px]">Hubungi</h3>
                <div className="flex flex-col gap-3">
                  <span className="text-[13px] font-medium text-white/60 xl:text-[14px]">
                    No. 12, Jalan Bandar Timah, Ipoh
                  </span>
                  <a href="tel:+6052558899" className="text-[13px] font-medium text-white/60 hover:text-white xl:text-[14px]">
                    +60 5-255 8899
                  </a>
                  <a href="mailto:hello@klinikcitra.my" className="text-[13px] font-medium text-white/60 hover:text-white xl:text-[14px]">
                    hello@klinikcitra.my
                  </a>
                  <span className="text-[13px] font-medium text-white/60 xl:text-[14px]">
                    Isnin–Jumaat 9:00–21:00
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-white/10" />

          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p className="text-[12px] font-medium text-white/50 md:text-[13px]">
              © 2026 Klinik Citra Sdn Bhd.
              <span className="hidden md:inline"> Hak cipta terpelihara.</span>
            </p>
            <div className="flex items-center gap-3 md:gap-5">
              <Link
                href="/privacy"
                className="text-[12px] font-medium text-white/50 hover:text-white md:text-[13px]"
              >
                Dasar Privasi
              </Link>
              <span aria-hidden="true" className="text-[12px] text-white/40 md:hidden">
                ·
              </span>
              <Link
                href="/terms"
                className="text-[12px] font-medium text-white/50 hover:text-white md:text-[13px]"
              >
                <span className="md:hidden">Terma Perkhidmatan</span>
                <span className="hidden md:inline">Terma</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile sticky CTA + spacer */}
      <div className="h-[76px] md:hidden" aria-hidden="true" />
      <StickyCta />
    </>
  );
}
