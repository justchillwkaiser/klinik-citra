/* Chip / Eyebrow — klinikcitra.pen component */

import type { ReactNode } from "react";

export function EyebrowChip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex w-fit items-center justify-center rounded-full bg-primary-soft px-3 py-1.5 text-[12px] font-bold uppercase tracking-[1.2px] text-primary">
      {children}
    </span>
  );
}
