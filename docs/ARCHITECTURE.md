# ARCHITECTURE.md — KLINIK CITRA

> Delivery tracking: `.hermes/` (HDS). Lihat `.hermes/HERMES_DELIVERY.md` untuk status fasa dan task semasa.

**Status:** Approved · **Date:** 16 Aug 2026 · **Source:** PRD + DESIGN.md approved
Rujukan struktur & keputusan architecture. Ikut konvensyen project Haris (Biz Dashboard, Maisara, Kopi Senja).

## 1. Stack

- Next.js 16 (App Router, TS strict, Turbopack) + React 19
- Tailwind v4 (tokens Clean Clinical dari DESIGN.md)
- Prisma 7.9 (generated client `src/generated/prisma`) + Neon Postgres (db `klinikcitra`)
- Better Auth (email/password, role `ADMIN`)
- @phosphor-icons/react
- Vitest (unit test service layer) + `tsc --noEmit` + `next build`

## 2. Struktur Folder

```
src/
  app/
    layout.tsx              # fonts (Manrope + IBM Plex Mono), metadata
    page.tsx                # landing (public)
    booking/page.tsx        # booking form (public)
    admin/
      layout.tsx            # guard requireRole([ADMIN])
      page.tsx              # senarai temujanji
    api/auth/[...all]/route.ts
    globals.css
  components/
    landing/*               # hero, services, why, lokasi, footer
    booking-form.tsx        # client form
    admin/*                 # appointment-table, status badge
    brand-mark.tsx
  lib/
    db.ts                   # PrismaClient + PrismaPg adapter
    auth.ts                 # betterAuth
    auth-client.ts
    auth-guards.ts          # requireUser / requireRole
    appointment-status.ts   # pure util status
    slot.ts                 # slot masa + validasi
  server/services/
    appointment.service.ts  # list/create/updateStatus (pure TS + Prisma)
  proxy.ts                  # auth guard middleware
tests/unit/                 # service + util tests
prisma/
  schema.prisma
  seed.ts                   # admin user + contoh appointments
```

## 3. Service Layer (WAJIB — konvensyen project)

- Business logic HANYA dalam `src/server/services/*.service.ts` (pure TS + Prisma, bebas React/Next).
- Server actions = thin wrapper: zod validate → call service → return result.
- Nama fungsi konsisten: `listAppointments(filter?)`, `getAppointment(id)`, `createAppointment(input)`, `updateAppointmentStatus(id, status)`.
- Reads optional → return null (wrapper decide 404). Mutations yang jangka wujud → semak dulu, throw Error BM.
- TDD: tulis test dulu (mock db `vi.hoisted`), implement, pass, typecheck/build.

## 4. Auth & Guards

- Better Auth email/password, `additionalFields.role` default `ADMIN`.
- `proxy.ts`: route protected = `/admin/*`; redirect ke `/booking` atau `/` bila tiada session? (Keputusan: admin pages protected; landing/booking public.)
- Guard dua lapis: proxy + semakan server-side dalam admin layout (`requireRole(['ADMIN'])`).
- Demo admin: `admin@klinikcitra.my` / `Demo123!` (seed).

## 5. Booking Flow (public)

1. User isi form (nama, telefon, rawatan, tarikh, slot) → client validation
2. Server action `createAppointment` → zod validate (nama >= 2, telefon regex MY, service pilihan, tarikh >= hari ini, slot dalam senarai)
3. Service `createAppointment` → DB
4. Return success → UI papar success state
5. (Optional MVP2) WhatsApp notification / anti-double-booking

## 6. Admin Flow (protected)

1. `/admin` → proxy + layout guard (session + role ADMIN)
2. Server page panggil `listAppointments(filter, search)` → render table
3. Status update: server action `updateAppointmentStatus` → service validate transition → DB
4. Filter tabs + search client-side (data kecil) atau server-side search (pilih: server-side untuk konsisten service layer; client untuk UX cepat — keputusan implementasi)

## 7. SEO (public pages)

- Landing + booking: metadata penuh, `Dentist`/`LocalBusiness` JSON-LD di landing
- NAP konsisten, Google Maps embed
- Sitemap + robots

## 8. Deployment

- Vercel, region `sin1`, env: `DATABASE_URL` (db klinikcitra), `AUTH_SECRET`, `BETTER_AUTH_URL`
- Commit author email WAJIB `harisaiman2005@gmail.com` (Vercel block kalau tak match)
- Repo baru `klinik-citra` (public, macam kopisenja-mvp)

## 9. Keputusan yang patut direkod

- db baru `klinikcitra` (bukan neondb) - bersih, senang migrate/rollback
- Status appointment string (BARU/KONFIRMASI/SELESAI/BATAL) - konsisten, extendable
- Slot masa tetap 09:00-17:00 hourly, 7 slot/hari
- Anti-double-booking: OUT (MVP) - tambah bila perlu
