# PRD — KLINIK CITRA (Dental Clinic Website + Booking + Admin)

> Delivery tracking: `.hermes/` (HDS). Audit 2026-08-20: 10/20 — remediation pending. Lihat `.hermes/HERMES_DELIVERY.md`.

**Status:** Draft v1 · **Date:** 16 Aug 2026 · **Author:** Sarae (untuk Haris)
**Source of truth:** Dokumen ini. Sebarang perubahan requirement mesti update PRD dulu, kemudian docs lain.

---

## 1. Ringkasan

Portfolio case study yang membuktikan Haris boleh bina **business website untuk local SME** (service SV-01, RM 800+): laman klinik pergigian tempatan dengan conversion-focused landing page, sistem temujanji (booking) yang berfungsi, dan admin panel untuk urus appointment. Live full-stack (macam Kopi Senja) supaya client boleh cuba sendiri.

**Positioning:** "Local business website yang bukan sekadar brosur - ia sistem: booking masuk terus ke admin, bukan email."

## 2. Pengguna & Tujuan

| Persona | Keperluan |
|---|---|
| **Patient** (orang awam) | Cari klinik gigi, lihat rawatan & harga, buat temujanji cepat dari telefon |
| **Admin/Staff klinik** | Lihat & urus appointment (baru/confirmed/selesai/batal), search patient |
| **Client portfolio (Haris)** | Demo yang boleh diklik: patient booking → admin nampak terus |

## 3. Functional Requirements

### FR-1: Landing page (public, mobile-first)
- Hero: value prop klinik + CTA "Buat Temujanji"
- Services: senarai rawatan (Pembersihan Gigi, Cabutan, Tampalan, Crown/Veneer, Whitening, Braces)
- Kenapa pilih kami: kepercayaan (pengalaman, teknologi, testimoni)
- Waktu operasi + lokasi (Google Maps embed) + CTA WhatsApp
- Structured data: `Dentist` / `LocalBusiness` JSON-LD

### FR-2: Booking flow (public)
- Form: nama, telefon, rawatan (pilih), tarikh, masa (slot tetap)
- Validation: nama/telefon wajib, format telefon MY (01X-XXXXXXX), tarikh >= hari ini, masa dalam slot operasi
- Success state jelas selepas submit ("Temujanji diterima - kami akan hubungi untuk pengesahan")
- Data disimpan ke DB (model `Appointment`)

### FR-3: Admin panel (protected)
- Login (Better Auth, role `ADMIN`)
- Senarai appointment: status + filter (Semua/Baru/Konfirmasi/Selesai/Batal) + search nama/telefon
- Update status per appointment (Baru → Konfirmasi → Selesai, atau Batal)
- (Optional MVP2) Delete

### FR-4: Local SEO
- Metadata penuh (title, description, OG)
- JSON-LD: Dentist + BookingAction (optional)
- Google Maps embed, NAP (Name-Address-Phone) konsisten
- Sitemap + robots

## 4. Non-Functional Requirements

- **Bahasa:** UI Bahasa Melayu (pasaran Malaysia)
- **Mobile-first:** patient majoriti guna telefon
- **Performance:** LCP < 2.5s (landing static + images optimized)
- **Security:** admin guard dua lapis (proxy + server check), validation server-side, tiada secret dalam client
- **Test:** unit test service layer (Vitest), typecheck, build pass
- **Deploy:** Vercel region `sin1`, Neon Postgres

## 5. Stack (konvensyen project)

Next.js 16 · React 19 · Tailwind v4 · Prisma 7 · Better Auth · Neon Postgres · @phosphor-icons · Vitest · Service layer (pure TS) + server actions thin

## 6. Data Model (draft)

```
User (Better Auth)           role: ADMIN
Appointment:
  id, name, phone, service, date (Date), time (slot),
  status: BARU | KONFIRMASI | SELESAI | BATAL  (default BARU)
  createdAt, updatedAt
```

## 7. Design Direction (draft)

**"Clean Clinical"** - putih bersih + soft teal (medical trust) + charcoal text. Bukan Warm Coffee (Kopi Senja) - palette di-rotate.
- Font: Manrope/Plus Jakarta Sans (display+sans), mono untuk metadata
- Icons: Phosphor
- Shape: panel 16px, controls 10px, badge pill (konsisten dengan sistem lain)

## 8. Milestones

1. **M1:** PRD + DESIGN.md approved → scaffold + schema + auth
2. **M2:** Service layer (appointment) + TDD
3. **M3:** Landing page + booking flow
4. **M4:** Admin panel (login, list, status update)
5. **M5:** SEO + deploy Vercel + verify live + update case study newportfolio

## 9. Open Questions (perlu keputusan)

1. **DB:** Guna db `neondb` sedia ada (model Appointment tak conflict dengan Kopi Senja) ATAU create db baru `klinikcitra` dalam Neon project sama? *(Cadangan Sarae: db baru - bersih, senang migrate/rollback)*
2. **Nama:** KLINIK CITRA kekal? *(Cadangan: kekal - konsisten dengan konsep asal)*
3. **Slot masa:** Tetap 09:00-17:00 hourly (7 slot/hari)? *(Cadangan: ya, simple untuk MVP)*
4. **Admin credentials:** Demo admin `admin@klinikcitra.my` / password demo?
