# Project Context

## Project

KLINIK CITRA — Dental Clinic Website + Booking + Admin

## Goal

Buktikan Haris boleh deliver business website lengkap untuk local SME (SV-01, RM800+): landing conversion-focused, booking flow berfungsi, admin panel, live full-stack untuk demo portfolio.

## Target users

- Patient (orang awam Malaysia, mobile-first) — cari klinik gigi, lihat rawatan/harga, buat temujanji cepat.
- Admin/Staff klinik — urus appointment (baru/konfirmasi/selesai/batal), cari pesakit.
- Client portfolio (Haris) — demo boleh klik: patient booking → admin nampak terus.

## Business/product outcome

Case study portfolio yang impressive + conversion-ready. Bila client (klinik sebenar) tengok, mereka nampak website yang boleh jual, bukan sekadar mockup statik.

## Current phase

PHASE 09 — QA (Audit complete; remediation pending)

## Current task

AUD-REM-001 — Fix critical responsive & trust-flow defects dari audit 2026-08-20

## Current focus

Baiki 5 dapatan P1: mobile overflow, dead nav anchors, missing About/Doktor, missing Lokasi/Maps, missing OG tags.

## Last completed

Audit penuh 2026-08-20 (10/20) — live site + code inspection. Audit report diserahkan ke Haris.

## Next action

Dapatkan approval Haris untuk mula remediation ikut susunan cadangan: adapt → harden → clarify → bolder/animate → layout → optimize → polish.

## Do not work on yet

- Konsep "Garis Senyuman" (smile-arc scroll-drawn) — belum approved, jangan build dulu.
- Admin features beyond MVP (delete, export) — di luar scope.
- Dark mode — DESIGN.md kata light-first untuk MVP.

## Related skills

- hermes-delivery-system (HDS lifecycle)
- impeccable (audit, adapt, harden, layout, bolder, animate, optimize, polish)
- design-taste-frontend (anti-slop, trust-flow, pre-flight)
- seo-audit (Local SEO, structured data)
- nextjs-fullstack-setup (reference)

## Design direction

Clean Clinical: white + soft teal (#0d6e5f) + charcoal, light-first. Font sepatutnya Manrope (ikut DESIGN.md) tetapi kod sebenar load Inter + Playfair Display — drift ini perlu diputuskan: kekal Inter/Playfair ATAU migrate ke Manrope. Bentuk: panel 16px, controls 10px, badge pill.

## Active assumptions

- Live site di klinik-citra.vercel.app ialah versi yang client akan tengok.
- Gambar Unsplash hero ialah placeholder; perlu ganti dengan foto klinik/doktor sebenar sebelum dianggap siap.
- Stat 4.9/5.0 dan 5,000+ ialah angka placeholder; perlu dipautkan ke Google Business Profile atau label sebagai data dalaman.

## Active blockers

- Approval Haris untuk mula remediation.
- Aset sebenar (foto klinik, doktor, logo, Google reviews) — Haris perlu supply atau beri kebenaran gana imej sementara.
- Keputusan font: kekal Inter+Playfair atau migrate ke Manrope (ikut DESIGN.md).
