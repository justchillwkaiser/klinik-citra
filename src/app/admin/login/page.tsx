"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "@phosphor-icons/react";
import { BrandMark } from "@/components/brand-mark";
import { authClient } from "@/lib/auth-client";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@klinikcitra.my");
  const [password, setPassword] = useState("Demo123!");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function doLogin(em: string, pw: string) {
    setBusy(true);
    setError(null);
    const { error: signInError } = await authClient.signIn.email({ email: em, password: pw });
    if (signInError) {
      setError("Emel atau kata laluan tidak tepat.");
      setBusy(false);
      return;
    }
    router.push("/admin");
    router.refresh();
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    void doLogin(email, password);
  }

  return (
    <main className="grid min-h-dvh place-items-center p-6">
      <div className="w-full max-w-[400px] rounded-[20px] border border-line bg-surface p-8 shadow-soft">
        <div className="mb-6">
          <BrandMark />
        </div>
        <h1 className="text-[22px] font-extrabold">Log masuk admin</h1>
        <p className="mb-5 mt-1 text-[13.5px] text-taupe">Urus temujanji pesakit.</p>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="field">
            <label htmlFor="email">Emel</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="password">Kata laluan</label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className="text-[12.5px] text-bad">{error}</p>}
          </div>
          <button type="submit" className="btn btn-primary btn-block" disabled={busy}>
            {busy ? "Memproses..." : "Log Masuk"}
            {!busy && <ArrowRight size={16} />}
          </button>
        </form>
      </div>
    </main>
  );
}
