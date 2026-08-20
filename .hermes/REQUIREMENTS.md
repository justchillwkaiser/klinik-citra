# Requirements

## Product requirements

KLINIK CITRA ialah website klinik pergigian tempatan (Ipoh) yang mengubah pelawat menjadi pesakit melalui trust, maklumat harga telus, dan booking online yang mudah. Sistem ini juga menyediakan admin panel ringkas untuk klinik urus temujanji.

## Functional requirements

- REQ-F-001: Landing page dengan hero (value prop + CTA), senarai rawatan + harga, kelebihan klinik, testimoni, lokasi/waktu operasi, CTA booking.
- REQ-F-002: Booking form (nama, telefon, rawatan, tarikh, masa) dengan validation server-side dan success state.
- REQ-F-003: Admin panel dilindungi auth (Better Auth, role ADMIN) dengan senarai appointment, filter status, carian, dan update status.
- REQ-F-004: Local SEO: metadata penuh (title, description, OG), JSON-LD Dentist, sitemap, robots, Google Maps embed, NAP konsisten.
- REQ-F-005: Section About/Doktor dengan foto, nama, kelayakan, dan cerita ringkas klinik.
- REQ-F-006: Trust badges/sebenar: pautan ke Google reviews, badge kelayakan/panel, nombor telefon boleh klik (tel:).

## Non-functional requirements

- REQ-NF-001: Mobile-first; tiada horizontal scroll pada viewport 360px-430px.
- REQ-NF-002: Accessibility: WCAG AA minimum (kontras >= 4.5:1, focus visible, landmark `<main>`, touch target >= 44px).
- REQ-NF-003: Performance: LCP < 2.5s; hero image optimized (next/image, priority); tiada scroll listener manual.
- REQ-NF-004: Bahasa Melayu Malaysia; copy semulajadi, tiada em-dash, tiada code-mixing janggal.
- REQ-NF-005: Design tokens konsisten; tiada drift antara DESIGN.md dan implementasi.
- REQ-NF-006: Reduced-motion dihormati untuk semua animasi.

## User flows

### FLOW-001: Patient buat temujanji

Trigger: Pesakit klik "Buat Temujanji" dari mana-mana bahagian landing.

Steps:
1. Pesakit tiba di /booking.
2. Isi nama, telefon, pilih rawatan, pilih tarikh, pilih slot masa.
3. Submit form.
4. Server validate (nama, format telefon MY, tarikh >= hari ini, slot sah).
5. Data disimpan; status BARU.

Expected result: Pesakit nampak success state "Temujanji diterima - kami akan hubungi untuk pengesahan".

Failure behavior: Error inline per field; mesej jelas dalam BM.

### FLOW-002: Admin urus temujanji

Trigger: Admin log masuk ke /admin.

Steps:
1. Admin lihat senarai appointment (terkini dahulu).
2. Filter ikut status atau cari nama/telefon.
3. Klik tindakan: Konfirmasi / Selesai / Batal.
4. Status berubah dan UI refresh.

Expected result: Status terkini disimpan; admin boleh lihat perubahan serta-merta.

Failure behavior: Error toast/mesej jika gagal; tiada perubahan senyap.

### FLOW-003: Patient hubungi klinik terus

Trigger: Pesakit klik WhatsApp atau telefon.

Steps:
1. Klik pautan WhatsApp (wa.me) atau nombor telefon (tel:).
2. Aplikasi WhatsApp/telefon terbuka dengan nombor klinik.

Expected result: Pesakit boleh hubungi klinik dalam satu klik dari mobile.

Failure behavior: Pautan tidak rosak; fallback ke halaman hubungi jika perlu.

## Acceptance criteria

- AC-001: Audit remediation selesai — semua P1 selesai, skor audit naik ke >= 14/20.
- AC-002: Mobile 390px: tiada horizontal scroll, nav mobile berfungsi, semua anchor nav berfungsi.
- AC-003: Landing ada section About/Doktor dengan sekurang-kurangnya 1 foto + kelayakan.
- AC-004: Landing ada section Lokasi dengan Google Maps embed + waktu operasi + CTA WhatsApp/telefon.
- AC-005: Semua nombor telefon di landing/footer ialah link `tel:`; semua pautan WhatsApp betul.
- AC-006: OG tags (og:title, og:description, og:image) dan canonical wujud; JSON-LD Dentist kekal.
- AC-007: Tiada em-dash dalam mana-mana copy yang kelihatan; testimoni tidak code-mixing janggal.
- AC-008: Touch target >= 44px untuk semua CTA dan slot masa.
- AC-009: Kontras semua teks >= 4.5:1; `:focus-visible` jelas.
- AC-010: Hero image guna `next/image` dengan `priority`; tiada `window.addEventListener('scroll')`.

## Scope boundaries

### In scope

- Remediation semua P1/P2 dari audit 2026-08-20.
- Tambah section About/Doktor dan Lokasi/Maps.
- Baiki SEO (OG tags, canonical, anchor links).
- Baiki accessibility (kontras, focus, touch target, landmark).
- Baiki performance (hero image, parallax).
- Copy cleanup (em-dash, placeholder telefon, testimoni).

### Out of scope

- Konsep "Garis Senyuman" (smile-arc) — menunggu approval berasingan.
- Dark mode.
- Admin features tambahan (delete, export, notifikasi).
- Multi-language toggle.
- Sistem pembayaran/deposit.
- Penggantian gambar dengan fotografi sebenar (menunggu aset Haris).
