import Link from "next/link";
import type { ReactNode } from "react";

/* Button / Primary + Button / Secondary — klinikcitra.pen components */

type BaseProps = {
  children: ReactNode;
  icon?: ReactNode;
  fullWidth?: boolean;
  className?: string;
};

function classes(fullWidth: boolean | undefined, extra: string, className?: string) {
  return [
    "inline-flex items-center justify-center gap-2 rounded-md font-bold",
    "min-h-[48px] transition-colors duration-150 active:scale-[0.98]",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    fullWidth ? "w-full" : "",
    extra,
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");
}

export function ButtonPrimary({
  children,
  icon,
  fullWidth,
  className,
  href,
  type,
  disabled,
  onClick,
}: BaseProps & {
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}) {
  const cls = classes(
    fullWidth,
    "px-6 py-[15px] bg-primary text-on-primary hover:bg-primary-hover",
    className
  );
  if (href) {
    return (
      <Link href={href} className={cls}>
        {icon}
        {children}
      </Link>
    );
  }
  return (
    <button type={type ?? "button"} disabled={disabled} onClick={onClick} className={cls}>
      {icon}
      {children}
    </button>
  );
}

export function ButtonSecondary({
  children,
  icon,
  fullWidth,
  className,
  href,
  type,
  disabled,
  onClick,
}: BaseProps & {
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}) {
  const cls = classes(
    fullWidth,
    "px-[22px] py-[14px] bg-surface border border-border text-primary hover:border-primary",
    className
  );
  if (href) {
    return (
      <Link href={href} className={cls}>
        {icon}
        {children}
      </Link>
    );
  }
  return (
    <button type={type ?? "button"} disabled={disabled} onClick={onClick} className={cls}>
      {icon}
      {children}
    </button>
  );
}

export function ExternalButton({
  children,
  icon,
  href,
  variant,
  fullWidth,
  className,
}: BaseProps & { href: string; variant: "primary" | "secondary" }) {
  const cls = classes(
    fullWidth,
    variant === "primary"
      ? "px-6 py-[15px] bg-primary text-on-primary hover:bg-primary-hover"
      : "px-[22px] py-[14px] bg-surface border border-border text-primary hover:border-primary",
    className
  );
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {icon}
      {children}
    </a>
  );
}
