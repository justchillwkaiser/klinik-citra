/* Stat / Item — klinikcitra.pen component */

export function StatItem({
  value,
  label,
  shortLabel,
}: {
  value: string;
  label: string;
  shortLabel?: string;
}) {
  return (
    <div className="flex flex-col gap-[3px] md:gap-1">
      <p className="text-[26px] font-extrabold tracking-[-0.6px] text-text md:text-[28px] md:tracking-[-0.8px] xl:text-[34px] xl:tracking-[-1px]">
        {value}
      </p>
      <p className="text-[13px] font-medium text-text-muted xl:text-[14px]">
        <span className="md:hidden">{shortLabel ?? label}</span>
        <span className="hidden md:inline">{label}</span>
      </p>
    </div>
  );
}
