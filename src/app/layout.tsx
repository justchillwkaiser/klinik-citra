import type { Metadata } from "next";
import { Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
  "https://images.unsplash.com/photo-1745970347652-8f22f5d7d3ba?w=1200&h=630&fit=crop&q=80";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "KLINIK CITRA - Klinik Pergigian Keluarga di Ipoh",
    template: "%s | KLINIK CITRA",
  },
  description:
    "Klinik pergigian keluarga di Ipoh, Perak. Pemeriksaan, scaling, pemutihan, implan dan braces dengan harga yang jelas. Tempah temujanji dalam talian.",
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
      "Rawatan gigi yang tenang, jelas dan mesra keluarga. Kami terangkan setiap langkah dan setiap harga sebelum rawatan mula.",
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
    <html lang="ms" className={`${manrope.variable} ${plexMono.variable}`}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
