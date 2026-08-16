# KLINIK CITRA - Clean Clinical Candidate (Mockup)

Design layout mockup untuk KLINIK CITRA (dental clinic website + booking + admin).

## Design Read

> Reading this as: local dental clinic website for Malaysian patients (mobile-first),
> with a clean clinical trust language (white + soft teal + charcoal), leaning toward
> custom utility styling + warm-neutral accents + restrained motion.

Palet di-rotate dari Kopi Senja (Warm Coffee) - putih + soft teal + charcoal, medical trust.
Accent teal #0e7a6b (bukan AI-slop), text charcoal-hijau, status guna keluarga sama.

## Dials

- `DESIGN_VARIANCE: 5`
- `MOTION_INTENSITY: 2` (medical = tenang, hover/active sahaja)
- `VISUAL_DENSITY: 4` (airy)

## Screens

1. **Landing** - topbar + hero split + services grid (6 rawatan) + why us + testimoni + lokasi/waktu/maps + footer NAP
2. **Booking** - form (nama, telefon, rawatan, tarikh, slot pill 09:00-17:00) + validation error + success state
3. **Admin** - login (demo) + senarai temujanji (table, filter tabs, search, status badge, action)

## Layout Decisions

- Landing conversion-focused: CTA "Buat Temujanji" berulang (nav, hero, lokasi)
- Slot masa sebagai pill buttons (mobile-friendly)
- Status: BARU (teal) / KONFIRMASI (sage) / SELESAI (sage) / BATAL (terracotta) - text + warna
- Shape: panel 16px, controls 10px, badge pill
- Fonts: Manrope (display+body) + IBM Plex Mono (metadata)
- Icons: Phosphor
- Bahasa: BM, mock data Malaysia (Ipoh, Perak)

## Verification

- [x] Static: 0 em-dash, JS OK, ID/handler konsisten
- [x] Browser: landing render, booking validation + success, admin login + filter + search + empty state
- [x] Mobile (390px): no overflow, 1-col collapse
