import type { Metadata } from "next";
import { Manrope, Playfair_Display, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
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

const SITE_URL = "https://klinik-citra.vercel.app";
const OG_IMAGE =
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&h=630&fit=crop&q=80";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "KLINIK CITRA - Klinik Pergigian Keluarga di Ipoh",
    template: "%s | KLINIK CITRA",
  },
  description:
    "Klinik pergigian keluarga di Ipoh, Perak. Pembersihan gigi, cabutan, tampalan, whitening, braces. Buat temujanji online.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ms_MY",
    url: SITE_URL,
    siteName: "Klinik Citra",
    title: "KLINIK CITRA - Klinik Pergigian Keluarga di Ipoh",
    description:
      "Rawatan pergigian mesra keluarga dengan teknologi moden, harga telus, dan temujanji yang dihormati.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Klinik Citra - klinik pergigian keluarga di Ipoh",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ms" className={`${manrope.variable} ${playfair.variable} ${plexMono.variable}`}>
      <body className="bg-cream text-espresso min-h-dvh">{children}</body>
    </html>
  );
}
