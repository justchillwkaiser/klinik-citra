# DATABASE.md — KLINIK CITRA

**Status:** Approved · **Date:** 16 Aug 2026 · **Source:** PRD
Schema + keputusan data. DB: Neon Postgres, database `klinikcitra` (baru).

## 1. Keputusan

- **Database baru `klinikcitra`** dalam Neon project sedia ada (bukan `neondb` Kopi Senja) — bersih, migrate/rollback senang, tiada campur data.
- **Status appointment = string** (BARU/KONFIRMASI/SELESAI/BATAL) — konsisten dengan Kopi Senja, extendable.
- **`date` = `@db.Date` + `time` = string slot** — bukan DateTime penuh; booking ikut slot, senang filter/papar.
- **Index:** `@@index([status, date])` untuk admin list (filter status + sort tarikh), `@@index([date])` untuk senarai harian.
- Anti-double-booking: **OUT untuk MVP** (tanpa check slot conflict). Bila perlu, tambah unique constraint atau semakan dalam service.

## 2. Schema

```prisma
// ===== Better Auth (1.6) =====

model User {
  id            String    @id @default(cuid())
  name          String?
  email         String    @unique
  emailVerified Boolean   @default(false)
  image         String?
  role          String    @default("ADMIN")
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  accounts Account[]
  sessions Session[]
}

model Account {
  id                    String    @id @default(cuid())
  userId                String
  accountId             String
  providerId            String
  accessToken           String?   @db.Text
  refreshToken          String?   @db.Text
  idToken               String?   @db.Text
  accessTokenExpiresAt  DateTime?
  refreshTokenExpiresAt DateTime?
  scope                 String?
  password              String?
  createdAt             DateTime  @default(now())
  updatedAt             DateTime  @updatedAt

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([providerId, accountId])
  @@index([providerId, accountId])
}

model Session {
  id        String   @id @default(cuid())
  userId    String
  token     String   @unique
  expiresAt DateTime
  ipAddress String?
  userAgent String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model Verification {
  id         String   @id @default(cuid())
  identifier String
  value      String
  expiresAt  DateTime
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt

  @@index([identifier])
}

// ===== Domain =====

model Appointment {
  id        String   @id @default(cuid())
  name      String
  phone     String
  service   String
  date      DateTime @db.Date
  time      String   // slot: "09:00" | "10:00" | ... | "17:00"
  status    String   @default("BARU") // BARU | KONFIRMASI | SELESAI | BATAL
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([status, date])
  @@index([date])
}
```

## 3. Status

| Status | Makna | Warna (DESIGN.md) |
|---|---|---|
| BARU | Baru submit | teal |
| KONFIRMASI | Staff sahkan | sage |
| SELESAI | Rawatan selesai | sage |
| BATAL | Dibatalkan | terracotta |

Transisi (MVP): BARU → KONFIRMASI → SELESAI; mana-mana → BATAL. Validation dalam service.

## 4. Slot Masa

```
09:00, 10:00, 11:00, 14:00, 15:00, 16:00, 17:00
```
- 7 slot/hari (rehat 12:00-14:00)
- Validation: `date >= hari ini`, `time` dalam senarai slot
- Util `src/lib/slot.ts` (senarai + `isValidSlot`)

## 5. Seed

- 1 admin: `admin@klinikcitra.my` / `Demo123!` (hash via better-auth/crypto, Account credential)
- 4-6 contoh appointment (status campuran) supaya admin page nampak hidup
- Idempotent: deleteMany ikut urutan FK (Appointment → Account → Session → User → Verification)
