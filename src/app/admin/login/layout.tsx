import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Log masuk",
  description: "Halaman log masuk kakitangan Klinik Citra.",
  robots: { index: false, follow: false },
};

export default function AdminLoginLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
