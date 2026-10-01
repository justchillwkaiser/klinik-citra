"use client";

import { useState } from "react";
import { List, X, Phone, MessageCircle } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { ButtonPrimary, ExternalButton } from "@/components/button";

const NAV_LINKS = [
  { href: "#rawatan", label: "Rawatan" },
  { href: "#doktor", label: "Doktor" },
  { href: "#harga", label: "Harga" },
  { href: "#tentang", label: "Tentang", desktopOnly: true },
  { href: "#lokasi", label: "Lokasi" },
];

const WHATSAPP_URL = "https://wa.me/60125186720";

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50">
      {/* 01 Topbar */}
      <div className="block bg-primary md:hidden xl:block">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-[9px] md:px-10 md:py-[11px] xl:px-[120px]">
          <p className="text-[11px] font-medium text-white/80 md:text-[13px]">
            <span className="md:hidden">Isnin–Jumaat 9:00–21:00</span>
            <span className="hidden md:inline">
              Klinik pergigian keluarga · Ipoh, Perak
            </span>
          </p>
          <div className="flex items-center gap-4">
            <span className="hidden text-[13px] font-medium text-white/80 md:inline">
              Isnin–Jumaat  9:00–21:00
            </span>
            <span aria-hidden="true" className="hidden h-1 w-1 rounded-full bg-white/40 md:block" />
            <a href="tel:+6052558899" className="text-[11px] font-bold text-on-primary md:text-[13px]">
              +60 5-255 8899
            </a>
          </div>
        </div>
      </div>

      {/* 02 Nav */}
      <nav
        aria-label="Navigasi utama"
        className="border-b border-border bg-bg"
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-[14px] md:px-10 md:py-4 xl:px-[120px] xl:py-[18px]">
          <BrandMark />

          <div className="hidden items-center gap-[26px] md:flex xl:gap-[30px]">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`py-1.5 text-[14px] font-semibold text-text transition-colors hover:text-primary xl:text-[15px] ${
                  l.desktopOnly ? "hidden xl:inline" : ""
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Tablet + desktop right side */}
          <div className="hidden items-center gap-3.5 md:flex xl:gap-4">
            <a
              href="tel:+6052558899"
              className="flex items-center gap-2 text-[14px] font-bold text-primary xl:text-[15px]"
            >
              <Phone size={16} aria-hidden="true" />
              05-255 8899
            </a>
            <ButtonPrimary href="/booking" className="px-5 py-3 text-[14px] xl:px-6 xl:py-[15px] xl:text-[16px]">
              <span className="hidden xl:inline">Tempah temujanji</span>
              <span className="xl:hidden">Tempah</span>
            </ButtonPrimary>
          </div>

          {/* Mobile right side */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="tel:+6052558899"
              aria-label="Panggil Klinik Citra"
              className="grid h-[38px] w-[38px] place-items-center rounded-md border border-border bg-surface text-primary"
            >
              <Phone size={18} aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? "Tutup menu" : "Buka menu"}
              className="grid h-[38px] w-[38px] place-items-center rounded-md bg-primary text-on-primary"
            >
              {open ? <X size={18} /> : <List size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-b border-border bg-surface-soft px-5 py-4 md:hidden">
            <div className="flex flex-col">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[44px] items-center border-b border-border py-2 text-[16px] font-semibold text-text last:border-0"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <ExternalButton
              href={WHATSAPP_URL}
              variant="secondary"
              fullWidth
              className="mt-3"
              icon={<MessageCircle size={18} className="text-primary" aria-hidden="true" />}
            >
              WhatsApp kami
            </ExternalButton>
          </div>
        )}
      </nav>
    </header>
  );
}
