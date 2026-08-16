"use client";

import { useRouter } from "next/navigation";
import { SignOut } from "@phosphor-icons/react";
import { BrandMark } from "@/components/brand-mark";
import { authClient } from "@/lib/auth-client";

export function AdminHeader() {
  const router = useRouter();

  async function logout() {
    await authClient.signOut();
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <header className="mx-auto flex max-w-[1080px] items-center gap-3 px-5 pt-5">
      <BrandMark compact />
      <button
        onClick={logout}
        className="ml-auto inline-flex items-center gap-2 rounded-[10px] border border-line bg-surface px-3.5 py-2 text-[13px] font-semibold text-taupe hover:bg-surface-2 hover:text-espresso"
      >
        <SignOut size={16} />
        Log keluar
      </button>
    </header>
  );
}
