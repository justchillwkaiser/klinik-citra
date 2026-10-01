/* Field / Input — klinikcitra.pen component (label + field box shell)
   Sizing lives in `boxClassName` so grouped fields can override it cleanly. */

export const controlClass =
  "h-full w-full min-w-0 bg-transparent text-[15px] font-medium text-text outline-none placeholder:text-text-muted/70";

export function FieldShell({
  label,
  children,
  boxClassName = "h-12 items-center gap-2 px-3.5",
}: {
  label: string;
  children: React.ReactNode;
  boxClassName?: string;
}) {
  return (
    <div className="flex w-full flex-col gap-1.5">
      <span className="text-[12px] font-bold uppercase tracking-[1px] text-text-muted">
        {label}
      </span>
      <div
        className={`flex rounded-md border border-border bg-surface focus-within:outline-2 focus-within:outline-primary focus-within:outline-offset-1 ${boxClassName}`}
      >
        {children}
      </div>
    </div>
  );
}

/* A labelled sub-field inside a grouped field box:
   full-width row on mobile, inline half-width from md up. */
export function FieldSlot({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-12 w-full min-w-0 items-center gap-2 px-3.5 md:h-auto md:w-auto md:flex-1 md:px-0">
      {children}
    </div>
  );
}
