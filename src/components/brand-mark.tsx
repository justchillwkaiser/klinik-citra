import { Tooth } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <div
        className="grid place-items-center rounded-xl bg-accent text-accent-ink"
        style={{ width: compact ? 32 : 38, height: compact ? 32 : 38 }}
      >
        <Tooth size={compact ? 16 : 20} weight="fill" />
      </div>
      <div>
        <div className="text-[15px] font-extrabold tracking-wide leading-none" style={compact ? { fontSize: 14 } : undefined}>
          KLINIK CITRA
        </div>
        <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-taupe-faint">
          Pergigian Keluarga
        </div>
      </div>
    </Link>
  );
}
