# 02 — Supply Chain Review

Engagement: `2026-10-01-klinik-citra-supply-chain` · Tarikh: 2026-10-01
Sasaran: `C:\Users\haris\klinik-citra` (package.json @ post-redesign, package-lock.json)
Kelulusan: arahan bertulis user untuk membaiki dependencies (`00-scope.md`).

## 1. Inventori

- **Lockfile**: `package-lock.json` sahaja (359,995 bytes, committed). Tiada pnpm/yarn/bun lock.
- **Install lifecycle**: `postinstall: prisma generate` — first-party, menjana Prisma Client ke `src/generated/prisma`. Diketahui & dijustifikasi (keperluan build Prisma 7). Tiada lifecycle script pihak ketiga yang luar biasa dalam `package.json` sendiri.
- **Build**: `prisma generate && next build` · **Start**: `next start` · **Test**: `vitest run`.
- **Runtime deps**: `next 16.3.8`, `react/react-dom 19.2.8`, `prisma`/`@prisma/client`/`@prisma/adapter-pg` 7.9.1, `pg` 8.x, `better-auth` 1.6.x, `zod` 4.x, `motion` 13.x, `lucide-react` 1.x, `@phosphor-icons/react` 2.x.
- **Deps istimewa**: `sharp` (dibawa `next` — pemprosesan imej, terdedah ke network melalui image optimization), `pg` (network ke DB), `prisma` CLI (fs + child_process semasa generate).

## 2. Semakan (verdict per kawasan)

| # | Kawasan | Verdict | Bukti |
|---|---|---|---|
| 1 | Perubahan mencurigakan (lockfile/package.json) | **not-assessed (tiada baseline git untuk diff dep)** — package-lock hanya berubah atas arahan remediasi ini (npm audit fix + install next@16.3.8 + overrides) | `03-evidence/npm-ls-resolved.txt` |
| 2 | Typosquat / pakej tidak dijangka | **clean** — semua direct deps adalah nama pakar mapan (next, react, prisma, zod, lucide-react, phosphor, motion, better-auth, pg); tiada nama pelik/scope tidak dikenali | `package.json` |
| 3 | Dependency confusion | **clean** — tiada `.npmrc` (repo mahupun user); semua `resolved` dalam lockfile → `https://registry.npmjs.org/`; tiada pakej private | command (Select-String lockfile) → tiada padanan selain npmjs.org |
| 4 | Lifecycle scripts berniat jahat | **clean (direct)** — satu-sahaja `postinstall: prisma generate` (first-party). Skrip pihak ketiga tidak dievaluasi baris-per-baris; dipercayai melalui registry + audit (had: lihat §5) | `package.json:12` |
| 5 | Install hooks / audit dilumpuhkan | **clean** — tiada konfigurasi `audit=false`, tiada `ignore-scripts` yang mencurigakan | `package.json` |
| 6 | Dependency drift | **low-risk** — range `^` biasa (react/next dipin tepat atau patch-level), lockfile wujud & committed | `package.json:14-41` |
| 7 | Known vulnerable deps | **9 findings (1 CRITICAL, 8 HIGH) → semua fixed** — lihat `02-findings.json` | `03-evidence/npm-audit-before.json`, `npm-audit-after.txt` |
| 8 | Privileged deps tidak perlu | **suspected (tidak dibuang)** — `mysql2` dibawa `prisma` tetapi aplikasi guna `@prisma/adapter-pg`; `mysql2` tidak diimport oleh kod aplikasi. Tidak boleh dibuang tanpa memecah `prisma` (transitive) — ditangani melalui override versi selamat | `rg "mysql2" src/` → tiada padanan; `03-evidence/npm-ls-resolved.txt` |

## 3. Remediation (dilaksanakan)

1. `npm audit fix` — bump transitive: `brace-expansion`, `fast-uri`, `js-yaml`, `sharp` (4 vuln hilang).
2. `npm install next@16.3.8 eslint-config-next@16.3.8` — tutup 3× RCE `next` (patch dalam major 16; `isSemVerMajor=false`).
3. `package.json` `overrides`: `"mysql2": "^3.24.5"`, `"deepmerge-ts": "^8.0.2"` — tutup rantaian `prisma` **tanpa** downgrade major ke prisma 6 (cadangan `npm audit fix --force` yang akan memecah `prisma.config.ts` + generated client).

## 4. Pengesahan selepas remediation

- `npm audit` → **found 0 vulnerabilities** (`03-evidence/npm-audit-after.txt`)
- `npm run typecheck` ✅ · `npm run lint` ✅ · `vitest` **17/17 passed** (`03-evidence/verify-tests.txt`) · `next build` ✅ (BUILD ID direkod dalam transkrip sesi)
- Confidence: `executed` (audit + command sebenar dijalankan; tiada exploit runtime dijalankan — bukan skop).

## 5. Had / susulan

- Skrip `postinstall` pihak ketiga (dalam node_modules) tidak dibaca baris-per-baris — keyakinan melalui audit registry + reputasi pakej.
- Overrides `deepmerge-ts@8` ialah major bump transitive untuk `@prisma/config`; `prisma generate` + build lulus, tetapi pantau jika Prisma keluar versi yang sudah pin `deepmerge-ts@8` sendiri (override boleh dibuang kemudian).
- Cadangan berasingan (bukan engagement ini): `sec-code-review-webapp` untuk semakan auth/authz aplikasi.
