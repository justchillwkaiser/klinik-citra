# DESIGN.md — KLINIK CITRA (Clean Clinical)

**Status:** Draft · **Date:** 16 Aug 2026 · **Source:** PRD approved
Design direction untuk mockup + implementasi. Mockup: `sketches/clean-clinical-candidate/index.html`.

## Design Read

> Reading this as: local dental clinic website for Malaysian patients (mobile-first),
> with a clean clinical trust language (white + soft teal + charcoal), leaning toward
> custom utility styling + warm-neutral accents + restrained motion.

Bukan Warm Coffee (Kopi Senja) - palette di-rotate untuk elak pengulangan.

## Dials

- `DESIGN_VARIANCE: 5` - struktur jelas, hero split, services grid
- `MOTION_INTENSITY: 2` - hover/active sahaja (medical = tenang, bukan animasi berat)
- `VISUAL_DENSITY: 4` - airy, selesa dibaca

## Tokens

```
--bg:          #f6faf8   (putih-hijau lembut)
--surface:     #ffffff
--surface-2:   #eaf2ef
--text:        #14201c   (charcoal-hijau)
--text-soft:   #4d5f58
--text-faint:  #8ba097
--line:        #dce8e3
--accent:      #0e7a6b   (teal medical)
--accent-soft: #d9ede8
--accent-ink:  #ffffff
--ok:          #3f6b58   (status sama keluarga)
--ok-bg:       #e2ece5
--warn:        #8a5f24
--warn-bg:     #f4e9d4
--bad:         #97493a
--bad-bg:      #f4e2dc
--radius-panel: 16px
--radius-ctrl: 10px
--shadow-soft: 0 12px 32px rgba(20, 45, 40, 0.08)
```

## Type

- Sans: **Manrope** (display + body) - bersih, klinikal, bukan Inter (DILAKSANAKAN 20 Ogos 2026 - migrate dari Inter ke Manrope selesai)
- Serif aksen: **Playfair Display** (quote mark dekoratif sahaja)
- Mono: **IBM Plex Mono** (metadata/label kecil)
- Icons: **Phosphor** (satu famili, konsisten)

## Layout Decisions

- **Landing:** topbar (logo + nav + CTA) → hero split (copy + visual) → services grid → why us + testimoni → lokasi/waktu + maps → footer NAP
- **Booking:** form 1 column (mobile) / 2 column (desktop), slot masa sebagai pill buttons, error inline bawah field, success state penuh
- **Admin:** shell ringkas (topbar + content), table appointment + filter tabs + search, status badge + actions
- Shape system: panel 16px, controls 10px, badge pill (didokumen, konsisten)
- Bahasa: BM (pasaran Malaysia)

## Status Model

`BARU` (teal) → `KONFIRMASI` (ok) → `SELESAI` (ok) · `BATAL` (bad)
Status = text + warna, bukan warna sahaja.

## Pre-flight

- ZERO em-dash (guna hyphen)
- Button contrast: primary teal `#0e7a6b` + white text = ~5.1:1 (AA)
- Dark mode: tidak untuk MVP (landing klinik, light-first; dark optional nanti)
- Mock data Malaysia (nama, telefon 01X, RM, lokasi Perak)
