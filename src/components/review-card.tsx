/* Card / Review — klinikcitra.pen component */

import { Stars } from "@/components/stars";

export function ReviewCard({
  quote,
  initials,
  name,
  role,
}: {
  quote: string;
  initials: string;
  name: string;
  role: string;
}) {
  return (
    <article className="flex w-full flex-col gap-3.5 rounded-lg border border-border bg-surface p-6">
      <Stars size={16} />
      <p className="text-[16px] font-medium leading-[1.55] text-text">{quote}</p>
      <div className="h-px w-full bg-border" />
      <div className="flex items-center gap-2.5">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary-soft text-[14px] font-bold text-primary">
          {initials}
        </div>
        <div className="flex min-w-0 flex-col gap-px">
          <span className="text-[14px] font-bold text-text">{name}</span>
          <span className="text-[13px] font-medium text-text-muted">{role}</span>
        </div>
      </div>
    </article>
  );
}
