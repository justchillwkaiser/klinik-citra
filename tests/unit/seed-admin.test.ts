import { describe, expect, it } from "vitest";
import {
  DEFAULT_ADMIN_EMAIL,
  MIN_ADMIN_PASSWORD_LENGTH,
  generateAdminPassword,
  resolveAdminCredentials,
} from "@/lib/seed-admin";

describe("resolveAdminCredentials", () => {
  it("guna emel lalai dan jana kata laluan bila env kosong", () => {
    const c = resolveAdminCredentials({});
    expect(c.email).toBe(DEFAULT_ADMIN_EMAIL);
    expect(c.passwordSource).toBe("generated");
    expect(c.password).toHaveLength(20);
  });

  it("guna ADMIN_EMAIL dan ADMIN_PASSWORD dari env (dipangkas)", () => {
    const c = resolveAdminCredentials({
      ADMIN_EMAIL: "  bos@klinikcitra.my  ",
      ADMIN_PASSWORD: "  RahsiaKuat1234!  ",
    });
    expect(c.email).toBe("bos@klinikcitra.my");
    expect(c.password).toBe("RahsiaKuat1234!");
    expect(c.passwordSource).toBe("env");
  });

  it("tolak ADMIN_PASSWORD yang terlalu pendek", () => {
    expect(() => resolveAdminCredentials({ ADMIN_PASSWORD: "x".repeat(MIN_ADMIN_PASSWORD_LENGTH - 1) })).toThrow(
      /ADMIN_PASSWORD/,
    );
  });

  it("terima ADMIN_PASSWORD tepat pada panjang minimum", () => {
    const pw = "a".repeat(MIN_ADMIN_PASSWORD_LENGTH);
    expect(resolveAdminCredentials({ ADMIN_PASSWORD: pw }).password).toBe(pw);
  });

  it("anggap ADMIN_PASSWORD kosong/ruang sebagai tiada", () => {
    expect(resolveAdminCredentials({ ADMIN_PASSWORD: "   " }).passwordSource).toBe("generated");
  });

  it("kata laluan dijana berbeza setiap kali dan ikut panjang yang diminta", () => {
    expect(generateAdminPassword()).not.toBe(generateAdminPassword());
    expect(generateAdminPassword(32)).toHaveLength(32);
    expect(generateAdminPassword(16)).toMatch(/^[a-zA-Z0-9!@#%*+?]+$/);
  });
});
