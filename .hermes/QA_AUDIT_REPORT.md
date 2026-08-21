# QA AUDIT REPORT — KLINIK CITRA
**Date:** 20 Ogos 2026 | **Auditor:** Sarae | **Method:** HDS + Impeccable + tasteskill
**Scope:** Layout, spacing, pagination, search, micro-interaction, micro-animation, UX/UI, accessibility, responsive, performance

---

## DESIGN READ

> Reading this as: dental clinic landing page for Malaysian patients (mobile-first), with a clean clinical trust language (white + teal + cream), using custom Tailwind v4 + Motion for restrained animation, leaning toward premium healthcare aesthetic.

**Dials inferred:** DESIGN_VARIANCE: 5, MOTION_INTENSITY: 4, VISUAL_DENSITY: 4

---

## AUDIT HEALTH SCORE

| # | Dimension | Score | Key Finding |
|---|-----------|-------|-------------|
| 1 | Accessibility | 3/4 | Kontras baik, tapi `white/50` di footer gagal AA (2.81:1) |
| 2 | Performance | 3/4 | next/image bagus, tapi hero 974px > viewport mobile (844px) |
| 3 | Responsive | 3/4 | Tiada overflow, tapi hero terlalu tinggi di mobile |
| 4 | Theming | 3/4 | Tokens konsisten, tapi tiada dark mode |
| 5 | Implementation Integrity | 2/4 | Duplicate CTA intent, fake stats, eyebrow overuse |
| **Total** | | **14/20** | **Good — address weak dimensions** |

---

## CRITICAL FINDINGS (P1)

### [P1] Hero tidak muat dalam viewport mobile
- **Location:** `page.tsx:102` (`min-h-[100dvh]`)
- **Evidence:** Mobile 390px × 844px, hero height = 974px
- **Impact:** Pengguna mobile perlu scroll untuk nampak CTA. tasteskill rule: "Hero MUST fit in the initial viewport."
- **Fix:** Kurangkan padding atau font size di mobile; atau terima bahwa hero > viewport untuk klinik (content-first).

### [P1] Duplicate CTA intent (4 variasi)
- **Location:** `page.tsx` multiple locations
- **Evidence:** "Buat Temujanji", "Tempah", "Buat Temujanji →", "Buat Temujanji Sekarang →"
- **Impact:** tasteskill Section 4.5: "NO DUPLICATE CTA INTENT" — user confused which is primary action.
- **Fix:** Standardize satu label: "Buat Temujanji" untuk semua primary CTA.

### [P1] Fake stats tanpa sumber (4.9/5.0, 5,000+)
- **Location:** `hero-visual.tsx:91,102`, `page.tsx:196-214`
- **Impact:** tasteskill Section 4.9: "Fake-precise numbers are flagged." Client akan tanya "dari mana data ni?"
- **Fix:** Pautkan ke Google Business Profile ATAU label sebagai "data dalaman klinik" ATAU buang terus.

### [P1] Eyebrow overuse (11 eyebrows untuk 6 sections)
- **Location:** Multiple sections
- **Evidence:** tasteskill rule: max 1 eyebrow per 3 sections = max 2 untuk 6 sections. Actual: 11.
- **Impact:** Templated rhythm, AI-slop pattern.
- **Fix:** Buang eyebrows dari sections yang tidak perlu; keep hanya 2 (hero + satu lagi).

---

## MAJOR FINDINGS (P2)

### [P2] Contrast `white/50` di footer gagal AA
- **Location:** `page.tsx:486` (`text-white/50`)
- **Evidence:** Contrast 2.81:1 (AA requires 4.5:1)
- **Impact:** Teks copyright sukar dibaca, WCAG violation.
- **Fix:** Tukar ke `text-white/70` (contrast 8.30:1).

### [P2] Admin page tiada pagination
- **Location:** `appointment-table.tsx`
- **Evidence:** `hasPagination: false`, semua rows dirender sekaligus
- **Impact:** Performance issue bila data banyak; UX issue untuk cari record lama.
- **Fix:** Tambah pagination atau infinite scroll untuk > 20 rows.

### [P2] Admin search tiada debounce
- **Location:** `appointment-table.tsx:73-79`
- **Evidence:** `onChange` terus setState tanpa debounce
- **Impact:** Re-render setiap keystroke, janky untuk data besar.
- **Fix:** Tambah 300ms debounce.

### [P2] Micro-interaction: tiada loading state untuk async actions
- **Location:** `appointment-table.tsx` (status update buttons)
- **Evidence:** Button klik → immediate action, tiada spinner/disabled state
- **Impact:** User tak tahu action sedang diproses; boleh double-click.
- **Fix:** Tambah `isPending` state dengan visual feedback.

### [P2] Micro-animation: tiada page transition
- **Location:** Global
- **Evidence:** Navigasi antara pages (landing → booking) adalah instant
- **Impact:** Feels abrupt, tidak premium.
- **Fix:** Tambah subtle fade/slide transition antara routes.

---

## MINOR FINDINGS (P3)

### [P3] Spacing rhythm tidak konsisten
- **Location:** Multiple sections
- **Evidence:** Section padding: 96px (rawatan), 56px (kenapa), 96px (doktor), 96px (testimoni), 96px (lokasi), 96px (CTA)
- **Impact:** "Kenapa" section rasa cramped berbanding yang lain.
- **Fix:** Standardize 96px untuk semua, atau 80px untuk semua.

### [P3] Submit button 43px (bawah 44px)
- **Location:** `booking-form.tsx:84`
- **Evidence:** `submitBtn.h = 43`
- **Impact:** Touch target slightly bawah recommended.
- **Fix:** Tambah `min-h-[44px]`.

### [P3] Back link "← Kembali" 32px
- **Location:** `booking/page.tsx:17`
- **Evidence:** `backLinkH = 32`
- **Impact:** Touch target kecil.
- **Fix:** Tambah `min-h-[44px] py-2`.

### [P3] Tiada skip-to-content link
- **Location:** Global
- **Impact:** Keyboard users perlu tab melalui nav setiap page.
- **Fix:** Tambah `<a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>`.

### [P3] Tiada breadcrumb di admin
- **Location:** `admin/page.tsx`
- **Impact:** Admin tak tahu di mana mereka dalam hierarchy.
- **Fix:** Tambah breadcrumb "Admin > Senarai Temujanji".

---

## POSITIVE FINDINGS (Kekalkan)

| Aspek | Apa yang bagus |
|-------|---------------|
| **Layout** | Grid system konsisten, max-w-6xl container, responsive breakpoints betul |
| **Spacing** | Section padding 96px/80px/56px ada rhythm, tidak arbitrary |
| **Typography** | Manrope loaded dengan next/font, hierarchy jelas (H1 > H2 > H3) |
| **Color** | Token system konsisten, accent teal #0d6e5f kontras 6.15:1 |
| **Images** | next/image dengan priority untuk hero, lazy untuk bawah fold |
| **Forms** | Label di atas input, placeholder bukan label, validation server-side |
| **Icons** | Phosphor satu famili, konsisten |
| **Motion** | Smile arc scroll-drawn, hero word reveal, stat count-up — semua reduced-motion safe |
| **Accessibility** | Focus-visible styles, semantic HTML (main, nav, section), alt text ada |
| **Copy** | Tiada em-dash, BM natural, tiada AI-slop phrases |

---

## DETAILED METRICS

### Layout & Spacing
| Metric | Value | Status |
|--------|-------|--------|
| Section count | 6 | ✅ |
| Sections with ID | 5 (rawatan, kenapa, doktor, testimoni, lokasi) | ✅ |
| Horizontal overflow (desktop) | No | ✅ |
| Horizontal overflow (mobile 390px) | No | ✅ |
| Hero height mobile | 974px | ⚠️ > 844px viewport |
| Section padding consistency | 56px-96px | ⚠️ Tidak standard |
| Max-width container | 1152px (max-w-6xl) | ✅ |

### Micro-Interactions
| Element | Hover | Active | Focus | Loading |
|---------|-------|--------|-------|---------|
| Primary CTA | ✅ | ❌ | ✅ | N/A |
| Secondary CTA | ✅ | ❌ | ✅ | N/A |
| Nav links | ✅ | ❌ | ✅ | N/A |
| Service cards | ✅ | ❌ | ❌ | N/A |
| Admin action buttons | ✅ | ❌ | ❌ | ❌ |
| Slot buttons | ✅ | ❌ | ❌ | N/A |

### Micro-Animations
| Animation | Trigger | Reduced-motion | Purpose |
|-----------|---------|----------------|---------|
| Smile arc draw | Scroll | ✅ Full | Storytelling |
| Hero word reveal | Load | ✅ Instant | Hierarchy |
| Stat count-up | In-view | ✅ Instant | Feedback |
| Parallax hero | Scroll | ✅ Static | Depth |
| Card hover lift | Hover | N/A | Feedback |
| Page transition | Route change | ❌ | None |

### Search & Pagination
| Feature | Status | Notes |
|---------|--------|-------|
| Admin search | ✅ | Functional, no debounce |
| Admin filter tabs | ✅ | 5 statuses with counts |
| Admin pagination | ❌ | Not implemented |
| Search input styling | ✅ | Consistent with design |

### Accessibility
| Check | Status | Notes |
|-------|--------|-------|
| Contrast AA (body) | ✅ | 5.33:1 to 8.30:1 |
| Contrast AA (footer) | ❌ | white/50 = 2.81:1 |
| Focus visible | ✅ | Outline 2px accent |
| Touch targets ≥44px | ⚠️ | 2 elements at 43px, 32px |
| Alt text | ✅ | Descriptive |
| Landmark main | ✅ | Present |
| Skip to content | ❌ | Missing |
| Reduced motion | ✅ | Handled |

### Performance
| Metric | Status | Notes |
|--------|--------|-------|
| next/image | ✅ | Priority + lazy |
| Scroll listener | ✅ | None (Motion useScroll) |
| will-change overuse | ✅ | 5 elements only |
| Layout thrashing | ✅ | None detected |
| Z-index sanity | ✅ | Max 50 (nav) |

### Copy & Content
| Check | Status | Notes |
|-------|--------|-------|
| Em-dash | ✅ | 0 found |
| Duplicate CTA | ❌ | 4 variations |
| Fake stats | ❌ | 4.9/5.0, 5,000+ unsourced |
| Eyebrow count | ❌ | 11 (max 2 for 6 sections) |
| BM natural | ✅ | No code-mixing issues |

---

## RECOMMENDED ACTIONS (Priority Order)

### Immediate (P1)
1. **[P1] `/impeccable clarify`** — Standardize CTA to "Buat Temujanji" only
2. **[P1] `/impeccable harden`** — Add source label for stats OR remove them
3. **[P1] `/impeccable layout`** — Reduce eyebrows to 2 maximum
4. **[P1] `/impeccable adapt`** — Fix hero height for mobile viewport

### Short-term (P2)
5. **[P2] `/impeccable colorize`** — Fix footer contrast (white/50 → white/70)
6. **[P2] `/impeccable layout`** — Add pagination to admin table
7. **[P2] `/impeccable optimize`** — Add debounce to admin search
8. **[P2] `/impeccable animate`** — Add loading states to admin actions
9. **[P2] `/impeccable animate`** — Add page transitions

### Polish (P3)
10. **[P3] `/impeccable layout`** — Standardize section padding rhythm
11. **[P3] `/impeccable adapt`** — Fix 43px/32px touch targets to 44px
12. **[P3] `/impeccable harden`** — Add skip-to-content link
13. **[P3] `/impeccable layout`** — Add breadcrumb to admin

### Final
14. **[P3] `/impeccable polish`** — Final sweep before client delivery

---

## ESTIMATED EFFORT

| Priority | Tasks | Est. Time |
|----------|-------|-----------|
| P1 | 4 | 2-3 hours |
| P2 | 5 | 3-4 hours |
| P3 | 5 | 1-2 hours |
| **Total** | **14** | **6-9 hours** |

---

## SIGN-OFF

**Current state:** Website Klinik Citra adalah **Good (14/20)** — functional dan presentable, tetapi ada isu-isu yang perlu diselesaikan sebelum boleh dianggap **Excellent (18/20)**.

**Recommendation:** Selesaikan semua P1 terlebih dahulu, kemudian P2. P3 boleh dilakukan jika ada masa.

**Next step:** Beritahu Sarae untuk proceed dengan remediation, atau minta clarification untuk mana-mana finding.

---

*Report generated by Sarae using HDS + Impeccable + tasteskill methodology.*
