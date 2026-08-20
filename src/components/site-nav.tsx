"use client";

import { useState } from "react";
import Link from "next/link";
import { List, X, WhatsappLogo } from "@phosphor-icons/react";

const NAV_LINKS = [
  { href: "#rawatan", label: "Rawatan" },
  { href: "#kenapa", label: "Kenapa Kami" },
  { href: "#doktor", label: "Doktor" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#lokasi", label: "Lokasi" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      aria-label="Navigasi utama"
      className="fixed top-0 left-0 right-0 z-50 bg-surface border-b border-line"
    >
      <div className="flex items-center justify-between px-5 md:px-10 h-16">
        <Link href="/" className="text-lg font-bold text-espresso py-2">
          Klinik Citra
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-taupe hover:text-accent transition-colors py-2"
            >
              {l.label}
            </a>
          ))}
          <Link
            href="/booking"
            className="inline-flex items-center px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-dark transition-colors"
          >
            Buat Temujanji
          </Link>
        </div>

        {/* Mobile: booking CTA + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href="/booking"
            className="inline-flex items-center px-4 py-2.5 min-h-[44px] bg-accent text-white text-sm font-semibold rounded-lg"
          >
            Tempah
          </Link>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className="grid place-items-center w-11 h-11 rounded-lg border border-line text-espresso"
          >
            {open ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-line bg-surface px-5 py-3">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center min-h-[44px] py-2 text-[15px] font-semibold text-espresso border-b border-line last:border-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/60123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 mb-1 inline-flex items-center gap-2 min-h-[44px] px-4 py-2.5 border border-line rounded-lg text-sm font-semibold text-espresso"
          >
            <WhatsappLogo size={18} weight="fill" className="text-accent" />
            WhatsApp Klinik
          </a>
        </div>
      )}
    </nav>
  );
}
