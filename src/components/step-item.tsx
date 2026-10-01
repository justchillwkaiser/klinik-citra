/* Step / Item — klinikcitra.pen component */

export function StepItem({ number, title, desc }: { number: string; title: string; desc: string }) {
  return (
    <div className="flex w-full flex-col gap-2.5">
      <div className="grid h-10 w-10 place-items-center rounded-full bg-primary-soft">
        <span className="text-[15px] font-extrabold text-primary">{number}</span>
      </div>
      <h3 className="text-[18px] font-extrabold text-text">{title}</h3>
      <p className="text-[14px] leading-[1.5] text-text-muted">{desc}</p>
    </div>
  );
}
