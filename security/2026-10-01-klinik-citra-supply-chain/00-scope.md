# 00 — Scope

- **Engagement ID**: `2026-10-01-klinik-citra-supply-chain`
- **Tarikh**: 2026-10-01
- **Jenis**: supply-chain review + remediation (dependency vulnerabilities)
- **Sasaran**: repo `C:\Users\haris\klinik-citra` (klinik-citra.vercel.app — concept/portfolio project milik Haris Aiman)
- **Commit/keadaan**: working tree tidak bersih (redesign belum dicommit) — snapshot merangkumi `package.json` + `package-lock.json` semasa

## Kebenaran
- Arahan bertulis user (haris) dalam sesi ini: *"Boleh pass ke sec-supply-chain untuk fix dependecies sedia ada."*
- Aset milik user sendiri. Kelulusan diberi untuk **membaiki** dependencies (perubahan `package.json`/`package-lock.json` + rebuild). Tiada sentuh produksi/Vercel/DB.

## Stack & rangka kerja
- Next.js 16.3.1 (App Router, Turbopack) + React 19
- Tailwind CSS v4, `motion`, `lucide-react`, `@phosphor-icons/react`
- Prisma 7 (`src/generated/prisma`), better-auth, `pg`
- Vitest (uji), ESLint
- Runtime: Node/npm (Windows dev machine), deploy: Vercel

## Dalam skop
- `package.json`, `package-lock.json`, tree dependencies npm
- Install/build/lifecycle scripts (supply-chain vectors)
- Patch/upgrade dependency untuk tutup CVE yang dilaporkan `npm audit`

## Luar skop (observed)
- `.env` / nilai kredensial — tidak dibaca, tidak dicetak
- Vercel production, VPS, DB, akaun pihak ketiga
- Kod aplikasi (auth/authz review) — bukan engagement ini (rujuk sec-code-review-webapp jika perlu)
- `C:\Users\haris\package-lock.json` (di luar repo — amaran Next.js sendiri; observed, tidak diubah)

## Kaedah dibenarkan
- Statik: `npm audit` (registry advisories), inspeksi `package.json` + lockfile
- Dinamik terhad: `npm ci`/`npm install`, `npm run build`, `npm test` pada mesin lokal

## Kadar & tetingkap
- Local-only; tiada network probing. Registry requests ikut npm biasa. Tetingkap: sesi ini sahaja.

## Had diketahui
- `npm audit` bergantung pada advisory DB registry (confidence `executed` untuk hasil audit, bukan runtime exploit verification)
- Major upgrade (cth. `npm audit fix --force`) boleh pecah API — dinilai sebelum dilaksanakan; jika pecah, laporkan dan rollback
