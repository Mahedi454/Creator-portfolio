import type { HTMLAttributes, ReactNode } from "react";

type BadgeVariant = "default" | "accent" | "outline";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  default:
    "bg-black/5 text-black/80 dark:bg-white/10 dark:text-white/80",
  accent: "bg-amber-500 text-black font-medium",
  outline: "border border-current text-current",
};

const baseClasses =
  "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs leading-5 tracking-wide";

export default function Badge({
  variant = "default",
  children,
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={[baseClasses, variantClasses[variant], className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </span>
  );
}