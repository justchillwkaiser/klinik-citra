/* Card / Treatment — klinikcitra.pen component */

import type { LucideIcon } from "lucide-react";

export function TreatmentCard({
  icon: Icon,
  category,
  title,
  desc,
  price,
  action = "Lihat →",
}: {
  icon: LucideIcon;
  category: string;
  title: string;
  desc: string;
  price: string;
  action?: string;
}) {
  return (
    <article className="flex w-full flex-col gap-3 rounded-lg border border-border bg-surface p-6">
      <div className="flex items-center gap-2.5">
        <div className="grid h-10 w-10 place-items-center rounded-md bg-primary-soft">
          <Icon size={20} className="text-primary" />
        </div>
        <span className="text-[12px] font-bold uppercase tracking-[1.2px] text-text-muted">
          {category}
        </span>
      </div>
      <h3 className="text-[22px] font-extrabold tracking-[-0.3px] text-text">{title}</h3>
      <p className="text-[14px] leading-[1.5] text-text-muted">{desc}</p>
      <div className="h-px w-full bg-border" />
      <div className="flex items-center justify-between">
        <span className="text-[14px] font-semibold text-text">{price}</span>
        <span className="text-[14px] font-bold text-primary">{action}</span>
      </div>
    </article>
  );
}
