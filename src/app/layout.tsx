import type { Metadata } from "next";
import { Inter, Playfair_Display, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KLINIK CITRA - Klinik Pergigian Keluarga di Ipoh",
  description:
    "Klinik pergigian keluarga di Ipoh, Perak. Pembersihan gigi, cabutan, tampalan, whitening, braces. Buat temujanji online.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ms" className={`${inter.variable} ${playfair.variable} ${plexMono.variable}`}>
      <body className="bg-cream text-espresso min-h-dvh">{children}</body>
    </html>
  );
}
