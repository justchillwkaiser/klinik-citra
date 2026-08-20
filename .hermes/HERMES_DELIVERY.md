# Hermes Delivery Checklist

Project: KLINIK CITRA — Dental Clinic Website + Booking + Admin
Version: 1.1.0 (post-audit remediation cycle)
Overall Status: IN PROGRESS
Overall Progress: 62% (fasa asal siap; remediation bermula)

## Current State

Current Phase: PHASE 09 — QA (Audit complete; remediation pending approval)
Current Task: AUD-REM-001 — Fix critical responsive & trust-flow defects
Current Objective: Baiki semua P1 supaya website layak ditunjukkan kepada client sebagai hasil premium
Next Approved Action: Tunggu approval Haris untuk mula remediation ikut susunan: adapt → harden → clarify → bolder/animate → layout → optimize → polish

## Active Blockers

- Approval Haris untuk mula remediation.
- Aset sebenar (foto klinik, doktor, logo, Google reviews) — belum dibekalkan.
- Keputusan font: kekal Inter+Playfair ATAU migrate ke Manrope (ikut DESIGN.md).

## Active Risks

- Stat placeholder (4.9/5.0, 5,000+) boleh merosakkan kredibiliti jika client tanya sumber — mitigasi: pautkan ke Google Business Profile atau label data dalaman.
- Gambar stok Unsplash boleh kelihatan generik — mitigasi: ganti dengan foto sebenar sebelum final delivery.

## Evidence Index

- Audit report: diserahkan ke Haris dalam chat 2026-08-20 (10/20).
- Live site: https://klinik-citra.vercel.app
- Codebase: C:/Users/haris/klinik-citra
- PRD: docs/PRD.md (M5 milestone)
- DESIGN.md: docs/DESIGN.md (Clean Clinical direction)
- ARCHITECTURE.md: docs/ARCHITECTURE.md

## XP Tracking

Total XP this project: 425 (375 fasa asal + 50 audit)
Complexity breakdown: TRIVIAL:2 SIMPLE:3 COMPLEX:7 HIGH-RISK:0
Quest log entries: 12

---

# PHASE 01 — DISCOVERY

- [x] DISC-001 Define the problem the project solves.
  - Evidence: Portfolio case study untuk buktikan Haris boleh bina business website local SME lengkap (PRD §1).
- [x] DISC-002 Identify primary target users.
  - Evidence: Patient, Admin/Staff, Client portfolio (PRD §2).
- [x] DISC-003 Define desired outcome.
  - Evidence: Live demo boleh klik: booking masuk terus ke admin (PRD §1).
- [x] DISC-004 Identify project constraints.
  - Evidence: Next.js 16, Tailwind v4, Prisma 7, Better Auth, Neon Postgres, Vercel sin1 (PRD §5).
- [x] DISC-005 Identify external dependencies.
  - Evidence: Vercel, Neon, Google Fonts, Unsplash (placeholder), Google Maps (planned).
- [x] DISC-006 Record important assumptions.
  - Evidence: PRD §9 Open Questions — db baru `klinikcitra`, slot tetap 09:00-17:00, admin demo.
- [x] DISC-007 Record success criteria.
  - Evidence: PRD M1-M5; audit 2026-08-20 = baseline kualiti semasa.

# PHASE 02 — REQUIREMENTS

- [x] REQ-001 Document functional requirements.
  - Evidence: PRD §3 FR-1 hingga FR-4.
- [x] REQ-002 Document non-functional requirements.
  - Evidence: PRD §4.
- [x] REQ-003 Document major user flows.
  - Evidence: PRD §3; .hermes/REQUIREMENTS.md FLOW-001 hingga FLOW-003.
- [x] REQ-004 Define acceptance criteria.
  - Evidence: .hermes/REQUIREMENTS.md AC-001 hingga AC-010.
- [x] REQ-005 Define scope boundaries.
  - Evidence: .hermes/REQUIREMENTS.md Scope boundaries.
- [x] REQ-006 Identify required content/assets.
  - Evidence: Foto klinik/doktor, logo, Google reviews, nombor telefon/emel sebenar — belum dibekalkan.

# PHASE 03 — SCOPE AND PLAN

- [x] PLAN-001 Create milestones.
  - Evidence: PRD §8 M1-M5.
- [x] PLAN-002 Split milestones into atomic tasks.
  - Evidence: Task breakdown implicit dalam PRD; audit tasks ditambah dalam fasa QA di bawah.
- [x] PLAN-003 Define dependencies.
  - Evidence: Booking bergantung pada slot.ts + validation; admin bergantung pada auth + service layer.
- [x] PLAN-004 Identify critical path.
  - Evidence: M3 (Landing + booking) → M4 (Admin) → M5 (SEO + deploy).
- [x] PLAN-005 Identify high-risk work.
  - Evidence: Tiada HIGH-RISK; semua task audit adalah COMPLEX/SIMPLE.

# PHASE 04 — UX

- [x] UX-001 Map primary user journeys.
  - Evidence: FLOW-001 (booking), FLOW-002 (admin), FLOW-003 (hubungi) dalam .hermes/REQUIREMENTS.md.
- [~] UX-002 Define primary actions.
  - Evidence: CTA "Buat Temujanji" jelas; tetapi nav mobile tiada cara navigasi, anchor #kenapa/#lokasi mati (audit P1).
- [x] UX-003 Define loading states.
  - Evidence: Booking form ada `pending` state ("Menghantar...").
- [x] UX-004 Define empty states.
  - Evidence: Admin table ada "Tiada temujanji untuk penapis ini.".
- [x] UX-005 Define success states.
  - Evidence: Booking success "Temujanji diterima!".
- [x] UX-006 Define error states.
  - Evidence: Booking error inline + admin login error.
- [x] UX-007 Define validation behavior.
  - Evidence: Server-side validation di appointment.service.ts + mesej BM.
- [!] UX-008 Review navigation/information hierarchy.
  - Evidence: BLOCKED oleh dead anchors (#kenapa, #lokasi) dan tiada mobile nav. Perlu remediation.

# PHASE 05 — DESIGN SYSTEM

- [x] DES-001 Define color tokens.
  - Evidence: globals.css @theme (cream, surface, espresso, taupe, accent teal, ok/warn/bad).
- [~] DES-002 Define typography.
  - Evidence: Kod load Inter + Playfair + IBM Plex Mono; DESIGN.md kata Manrope. DRIFT — perlu keputusan.
- [x] DES-003 Define spacing.
  - Evidence: Tailwind spacing scale digunakan konsisten (px-10, py-24, gap-6, dll).
- [x] DES-004 Define radius/borders/shadows.
  - Evidence: --radius-panel 16px, --radius-ctrl 10px, --shadow-soft; konsisten.
- [x] DES-005 Define component states.
  - Evidence: hover/active/focus untuk butang; badge status BARU/KONFIRMASI/SELESAI/BATAL.
- [~] DES-006 Define responsive behavior.
  - Evidence: Breakpoints wujud tetapi teks dekoratif 120px pecahkan mobile (audit P1).
- [~] DES-007 Review animation/interaction conventions.
  - Evidence: Parallax scroll listener manual tanpa reduced-motion (audit P1); motion dial 2 tetapi tiada reveal bermakna.

# PHASE 06 — TECHNICAL PLANNING

- [x] TECH-001 Confirm stack/runtime.
  - Evidence: Next.js 16.3.1, React 19.2.8, Tailwind v4, Prisma 7.9, Better Auth 1.6, Neon Postgres.
- [x] TECH-002 Confirm project structure.
  - Evidence: src/app (landing, booking, admin), src/components, src/server (actions + services), src/lib, prisma/.
- [x] TECH-003 Define component/service boundaries.
  - Evidence: Server components untuk static; client leaf untuk booking form, admin table, hero-parallax.
- [x] TECH-004 Define data model where applicable.
  - Evidence: Prisma schema Appointment (id, name, phone, service, date, time, status, createdAt).
- [x] TECH-005 Define API contracts where applicable.
  - Evidence: Server actions createAppointmentAction, updateAppointmentStatusAction; Better Auth route handler.
- [x] TECH-006 Define environment strategy.
  - Evidence: .env / .env.local untuk DATABASE_URL, AUTH_SECRET; production di Vercel.
- [x] TECH-007 Define deployment target.
  - Evidence: Vercel region sin1 (ARCHITECTURE.md §87).
- [x] TECH-008 Record major technical decisions.
  - Evidence: ARCHITECTURE.md + DATABASE.md (db baru `klinikcitra`, bukan neondb Kopi Senja).

# PHASE 07 — IMPLEMENTATION

- [x] IMP-001 Initialize/verify repository.
- [x] IMP-002 Configure tooling.
- [x] IMP-003 Implement foundations.
- [x] IMP-004 Implement pages/screens.
- [x] IMP-005 Implement shared components.
- [x] IMP-006 Implement core interactions.
- [x] IMP-007 Implement validation.
- [x] IMP-008 Implement loading/empty/success/error states.
- [x] IMP-009 Implement integrations.
- [x] IMP-010 Review changes for unintended side effects.
- [x] IMP-011 Run relevant tests/checks.
  - Evidence: tests/unit/appointment.service.test.ts + slot.test.ts wujud; lint/typecheck/build pass.

# PHASE 08 — INTEGRATION

- [x] INT-001 Verify system boundaries.
  - Evidence: Landing (public) / booking (public) / admin (protected) jelas.
- [x] INT-002 Verify API/data contracts.
  - Evidence: Server actions thin; validation di service layer.
- [x] INT-003 Verify database behavior where applicable.
  - Evidence: Neon Postgres; migration 20260816225813_init.
- [x] INT-004 Verify external integrations.
  - Evidence: Better Auth session; WhatsApp link (wa.me); Google Fonts.
- [x] INT-005 Verify failure/retry behavior.
  - Evidence: Error handling di server actions; form error states.

# PHASE 09 — QA

- [x] QA-001 Run production build.
  - Evidence: Live di klinik-citra.vercel.app.
- [x] QA-002 Execute critical user flows.
  - Evidence: Booking flow + admin flow diuji semasa audit.
- [x] QA-003 Test invalid input.
  - Evidence: Validation server-side diuji (telefon format, tarikh, slot).
- [x] QA-004 Test loading/empty/success/error states.
  - Evidence: Semua state wujud dan diuji.
- [x] QA-005 Test refresh/back/direct navigation.
  - Evidence: Tidak ada isu yang ditemui semasa audit.
- [~] QA-006 Test mobile width(s).
  - Evidence: 390px emulation: horizontal overflow dari teks dekoratif 120px; nav mobile tiada; touch target < 44px (audit P1/P2).
- [x] QA-007 Test tablet width(s).
  - Evidence: 768px+ layout stabil.
- [x] QA-008 Test desktop width(s).
  - Evidence: Desktop layout stabil; grid 2 kolom hero + 3 kolom services berfungsi.
- [~] QA-009 Test keyboard/focus where applicable.
  - Evidence: Tiada `:focus-visible` styles; form inputs ada focus outline tetapi tidak konsisten (audit P2).
- [x] QA-010 Inspect console/runtime errors.
  - Evidence: Tiada error JS yang ditemui semasa audit.
- [x] QA-011 Record defects and evidence.
  - Evidence: Audit report 2026-08-20 dengan P1/P2/P3 + lokasi fail.

## QA Remediation Tasks (dari audit 2026-08-20)

- [ ] AUD-REM-001 Fix mobile overflow: teks dekoratif "Apa Kata Pesakit" 120px.
  - Complexity: SIMPLE | XP: 25
  - Files: src/app/page.tsx:198
- [ ] AUD-REM-002 Tambah mobile navigation (hamburger/drawer atau sticky bottom bar).
  - Complexity: COMPLEX | XP: 50
  - Files: src/app/page.tsx:81-108
- [ ] AUD-REM-003 Baiki dead anchors: tambah id="kenapa" dan id="lokasi" + section yang betul.
  - Complexity: SIMPLE | XP: 25
  - Files: src/app/page.tsx:182, 236
- [ ] AUD-REM-004 Tambah section About/Doktor dengan foto + kelayakan.
  - Complexity: COMPLEX | XP: 50
  - Files: src/app/page.tsx (baru)
- [ ] AUD-REM-005 Tambah section Lokasi + Google Maps embed + waktu operasi.
  - Complexity: COMPLEX | XP: 50
  - Files: src/app/page.tsx (baru)
- [ ] AUD-REM-006 Tambah OG tags + canonical + metadata penuh.
  - Complexity: SIMPLE | XP: 25
  - Files: src/app/layout.tsx, src/app/page.tsx
- [ ] AUD-REM-007 Jadikan nombor telefon link `tel:`; WhatsApp link konsisten.
  - Complexity: TRIVIAL | XP: 10
  - Files: src/app/page.tsx, footer
- [ ] AUD-REM-008 Baiki kontras: --taupe-faint (#9a9a9a) terlalu pucat untuk teks kecil.
  - Complexity: TRIVIAL | XP: 10
  - Files: src/app/globals.css
- [ ] AUD-REM-009 Tambah `:focus-visible` styles untuk semua interaktif.
  - Complexity: SIMPLE | XP: 25
  - Files: src/app/globals.css
- [ ] AUD-REM-010 Baiki touch target >= 44px (slot masa, nav mobile, link kecil).
  - Complexity: SIMPLE | XP: 25
  - Files: src/components/booking-form.tsx, src/app/page.tsx
- [ ] AUD-REM-011 Ganti `<img>` hero dengan `next/image` + priority.
  - Complexity: SIMPLE | XP: 25
  - Files: src/components/hero-parallax.tsx
- [ ] AUD-REM-012 Buang `window.addEventListener('scroll')`; guna Motion useScroll atau buang parallax.
  - Complexity: SIMPLE | XP: 25
  - Files: src/components/hero-parallax.tsx
- [ ] AUD-REM-013 Buang em-dash dalam atribusi founder; betulkan testimoni "Recommend".
  - Complexity: TRIVIAL | XP: 10
  - Files: src/app/page.tsx:245, :46
- [ ] AUD-REM-014 Betulkan placeholder telefon supaya match validation regex.
  - Complexity: TRIVIAL | XP: 10
  - Files: src/components/booking-form.tsx:48
- [ ] AUD-REM-015 Tambah `<main>` landmark di landing.
  - Complexity: TRIVIAL | XP: 10
  - Files: src/app/page.tsx
- [ ] AUD-REM-016 Putuskan font: migrate ke Manrope ATAU update DESIGN.md untuk Inter+Playfair.
  - Complexity: SIMPLE | XP: 25
  - Files: src/app/layout.tsx, docs/DESIGN.md

# PHASE 10 — SECURITY

- [x] SEC-001 Inspect for committed secrets.
  - Evidence: .env / .env.local tidak dicommit; .gitignore betul.
- [x] SEC-002 Verify environment variable handling.
  - Evidence: DATABASE_URL, AUTH_SECRET di server sahaja.
- [x] SEC-003 Verify server-side input validation where applicable.
  - Evidence: appointment.service.ts validateAppointmentInput.
- [x] SEC-004 Review authentication where applicable.
  - Evidence: Better Auth; role ADMIN; admin layout guard.
- [x] SEC-005 Review authorization where applicable.
  - Evidence: auth-guards.ts; proxy.ts.
- [x] SEC-006 Review sensitive data exposure.
  - Evidence: Tiada data sensitif di client; nombor telefon pesakit hanya di admin.
- [x] SEC-007 Review error disclosure.
  - Evidence: Error mesej umum, tiada stack trace ke client.
- [x] SEC-008 Review dependency risk.
  - Evidence: Dependencies terkini (Next 16.3.1, React 19.2.8).
- [x] SEC-009 Consider abuse/rate-limit risks where applicable.
  - Evidence: Booking form tiada rate limit — diterima untuk MVP; boleh tambah kemudian.
- [x] SEC-010 Record security status and warnings.
  - Evidence: Tiada isu kritikal; rate limit booking ialah cadangan penambahbaikan.

# PHASE 11 — PERFORMANCE

- [~] PERF-001 Inspect production build output.
  - Evidence: Build pass; tetapi hero image tidak optimized.
- [~] PERF-002 Inspect large assets/images.
  - Evidence: Hero guna Unsplash URL mentah; tiada next/image (audit P2).
- [x] PERF-003 Review request/network behavior.
  - Evidence: Server components; tiada fetch berlebihan.
- [~] PERF-004 Review rendering cost.
  - Evidence: Parallax scroll listener boleh menyebabkan jank (audit P1).
- [x] PERF-005 Review font loading.
  - Evidence: next/font dengan display: swap — bagus.
- [ ] PERF-006 Run an appropriate performance audit.
  - Evidence: Belum dijalankan; cadangan selepas remediation.

# PHASE 12 — SEO / DISCOVERABILITY

- [x] SEO-001 Verify titles.
  - Evidence: Title wujud di layout.tsx dan booking page.
- [x] SEO-002 Verify descriptions where appropriate.
  - Evidence: Meta description wujud.
- [x] SEO-003 Verify heading structure.
  - Evidence: H1 tunggal; H2/H3 hierarki logik.
- [~] SEO-004 Verify indexing/canonical configuration where applicable.
  - Evidence: robots.txt + sitemap.xml wujud; canonical TIADA (audit P1).
- [x] SEO-005 Verify sitemap/robots where applicable.
  - Evidence: public/robots.txt + public/sitemap.xml.
- [~] SEO-006 Verify social metadata.
  - Evidence: OG tags TIADA (audit P1).
- [x] SEO-007 Verify 404 behavior.
  - Evidence: Next.js default 404; boleh tambah custom kemudian.

# PHASE 13 — OBSERVABILITY / RELIABILITY

- [x] OBS-001 Verify meaningful production errors can be detected where needed.
  - Evidence: Vercel logs; tiada custom error tracking (diterima untuk MVP).
- [x] OBS-002 Review logs for usefulness and secret exposure.
  - Evidence: Tiada secret dalam logs.
- [x] OBS-003 Verify critical integrations have actionable failure behavior.
  - Evidence: DB failure akan throw; form error state menangkap.
- [x] OBS-004 Verify important analytics/events where required.
  - Evidence: Tiada analytics — diterima untuk MVP; cadangan tambah Vercel Analytics.
- [x] OBS-005 Verify monitoring/health checks where justified.
  - Evidence: Vercel uptime; tiada custom health check.
- [x] OBS-006 Document recovery/rollback considerations where justified.
  - Evidence: Vercel rollback mudah; DB migrations tracked.

# PHASE 14 — PRODUCTION HARDENING

- [x] PROD-001 Verify production environment variables.
  - Evidence: Vercel env set (DATABASE_URL, AUTH_SECRET, BETTER_AUTH_URL).
- [x] PROD-002 Verify production build configuration.
  - Evidence: next.config.ts; build pass.
- [x] PROD-003 Verify domain/DNS where applicable.
  - Evidence: klinik-citra.vercel.app (Vercel subdomain).
- [x] PROD-004 Verify HTTPS/TLS where applicable.
  - Evidence: Vercel HTTPS automatik.
- [x] PROD-005 Verify production error handling.
  - Evidence: Server actions error states; form validation.
- [x] PROD-006 Verify production-only integrations.
  - Evidence: Neon production db `klinikcitra`.
- [x] PROD-007 Verify deployment procedure.
  - Evidence: Vercel auto-deploy dari git.
- [x] PROD-008 Document known limitations.
  - Evidence: .hermes/CONTEXT.md Active blockers + audit report.

# PHASE 15 — DEPLOYMENT

- [x] DEP-001 Confirm release candidate.
  - Evidence: Live di klinik-citra.vercel.app.
- [x] DEP-002 Confirm mandatory release gates.
  - Evidence: Build pass; tests pass; auth berfungsi.
- [x] DEP-003 Record release commit/tag where appropriate.
  - Evidence: Repo di GitHub; commit history wujud.
- [x] DEP-004 Deploy.
  - Evidence: Vercel deployment aktif.
- [x] DEP-005 Confirm deployment succeeded.
  - Evidence: Site live dan diakses semasa audit.

# PHASE 16 — POST-DEPLOYMENT QA

- [x] PQA-001 Open production entry point.
  - Evidence: https://klinik-citra.vercel.app dibuka semasa audit.
- [x] PQA-002 Test critical user flow in production.
  - Evidence: Landing → booking → admin diuji.
- [x] PQA-003 Test critical forms in production.
  - Evidence: Booking form validation diuji.
- [x] PQA-004 Test critical integrations in production.
  - Evidence: DB, auth, WhatsApp link diuji.
- [x] PQA-005 Inspect production runtime errors where possible.
  - Evidence: Tiada error konsol semasa audit.
- [x] PQA-006 Verify analytics/observability where applicable.
  - Evidence: Tiada analytics; Vercel logs sahaja.
- [~] PQA-007 Verify mobile behavior in production.
  - Evidence: Horizontal overflow ditemui (audit P1).
- [~] PQA-008 Verify public metadata/share behavior where applicable.
  - Evidence: OG tags tiada; share akan tunjuk preview kosong (audit P1).

# PHASE 17 — HANDOFF

- [x] HAND-001 Finalize documentation.
  - Evidence: PRD.md, DESIGN.md, ARCHITECTURE.md, DATABASE.md, .hermes/CONTEXT.md, .hermes/REQUIREMENTS.md.
- [x] HAND-002 Finalize deployment instructions.
  - Evidence: ARCHITECTURE.md §87; Vercel auto-deploy.
- [x] HAND-003 Document environment variables without secrets.
  - Evidence: ARCHITECTURE.md; .env.local tidak dicommit.
- [x] HAND-004 Document ownership/access responsibilities.
  - Evidence: Haris pemilik; Vercel + Neon akaun Haris.
- [x] HAND-005 Document known limitations.
  - Evidence: .hermes/CONTEXT.md Active blockers; audit report.
- [x] HAND-006 Prepare release notes.
  - Evidence: Audit report 2026-08-20 berfungsi sebagai release notes semasa.
- [ ] HAND-007 Complete stakeholder/client review.
  - Evidence: Menunggu Haris review audit + remediation plan.

# PHASE 18 — CLOSURE

- [ ] CLOSE-001 Record final version.
  - Evidence: Akan diisi selepas remediation.
- [ ] CLOSE-002 Record release date.
  - Evidence: Akan diisi selepas remediation.
- [ ] CLOSE-003 Resolve or explicitly accept release issues.
  - Evidence: 16 AUD-REM tasks menunggu.
- [ ] CLOSE-004 Archive QA/release evidence.
  - Evidence: Audit report + HERMES_DELIVERY.md ini.
- [ ] CLOSE-005 Record lessons learned.
  - Evidence: Akan diisi selepas remediation.
