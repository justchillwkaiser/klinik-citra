import Link from "next/link";

/* Brand — klinikcitra.pen "Brand": logo mark + wordmark */

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 xl:gap-3">
      <span
        className={`grid place-items-center rounded-[10px] bg-primary font-extrabold text-on-primary xl:rounded-[11px] ${
          compact ? "h-8 w-8 text-[15px]" : "h-[34px] w-[34px] text-[17px] xl:h-[38px] xl:w-[38px] xl:text-[19px]"
        }`}
        aria-hidden="true"
      >
        C
      </span>
      <span
        className={`font-extrabold tracking-[-0.4px] text-text ${
          compact ? "text-[15px]" : "text-[18px] xl:text-[20px]"
        }`}
      >
        Klinik Citra
      </span>
    </Link>
  );
}
