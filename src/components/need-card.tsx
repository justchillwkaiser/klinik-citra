/* Card / Need — klinikcitra.pen component
   Desktop/tablet: vertical card with action link.
   Mobile: horizontal row with chevron. */

import { ChevronRight, type LucideIcon } from "lucide-react";

export function NeedCard({
  icon: Icon,
  title,
  desc,
  action,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
  action: string;
}) {
  return (
    <article className="flex w-full items-center gap-3.5 rounded-lg border border-border bg-surface-soft p-4 md:flex-col md:items-start md:gap-2.5 md:p-6">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-border bg-surface md:border-0">
        <Icon size={22} className="text-primary" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-[3px] md:gap-2.5">
        <h3 className="text-[16px] font-extrabold text-text md:text-[18px]">{title}</h3>
        <p className="text-[13px] leading-[1.45] text-text-muted md:text-[14px] md:leading-[1.5]">
          {desc}
        </p>
        <span className="hidden text-[14px] font-bold text-primary md:block">{action}</span>
      </div>
      <ChevronRight size={20} className="shrink-0 text-text-muted md:hidden" aria-hidden="true" />
    </article>
  );
}
