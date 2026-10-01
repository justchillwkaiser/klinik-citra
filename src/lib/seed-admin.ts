import { randomInt } from "node:crypto";

/*
  Kredensial admin untuk prisma/seed.ts — TIADA kata laluan dalam kod.
  Hanya diimport oleh seed dan ujian (server-side sahaja).

  Keutamaan:
  1. ADMIN_EMAIL + ADMIN_PASSWORD dari env (disyorkan).
  2. Jika ADMIN_PASSWORD tiada: jana kata laluan rawak semasa seed dan
     paparkan sekali kepada pemanggil — tidak pernah disimpan dalam repo.
*/

export const DEFAULT_ADMIN_EMAIL = "admin@klinikcitra.my";
export const MIN_ADMIN_PASSWORD_LENGTH = 12;
export const GENERATED_PASSWORD_LENGTH = 20;

/* Tanpa aksara mengelirukan (0/O, 1/l/I). */
const ALPHABET = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789!@#%*+?";

export type AdminSeedCredentials = {
  email: string;
  password: string;
  passwordSource: "env" | "generated";
};

/** Kata laluan rawak kriptografi (randomInt — tiada modulo bias). */
export function generateAdminPassword(length: number = GENERATED_PASSWORD_LENGTH): string {
  let out = "";
  for (let i = 0; i < length; i += 1) out += ALPHABET[randomInt(ALPHABET.length)];
  return out;
}

export function resolveAdminCredentials(
  env: Record<string, string | undefined> = process.env,
): AdminSeedCredentials {
  const email = env.ADMIN_EMAIL?.trim() || DEFAULT_ADMIN_EMAIL;
  const fromEnv = env.ADMIN_PASSWORD?.trim() ?? "";

  if (fromEnv.length > 0) {
    if (fromEnv.length < MIN_ADMIN_PASSWORD_LENGTH) {
      throw new Error(
        `ADMIN_PASSWORD terlalu pendek (${fromEnv.length} aksara). Minimum ${MIN_ADMIN_PASSWORD_LENGTH} aksara.`,
      );
    }
    return { email, password: fromEnv, passwordSource: "env" };
  }

  return { email, password: generateAdminPassword(), passwordSource: "generated" };
}
