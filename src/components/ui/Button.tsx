"use client";

import Link from "next/link";
import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = BaseButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = BaseButtonProps & {
  href: string;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-amber-500 text-black font-medium hover:bg-amber-400 focus-visible:outline-amber-500",
  secondary:
    "border border-current text-current hover:bg-white/10 dark:hover:bg-white/10 focus-visible:outline-current",
  ghost:
    "hover:bg-black/5 dark:hover:bg-white/10 text-current focus-visible:outline-current",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const baseClasses =
  "inline-flex select-none items-center justify-center gap-2 rounded-full transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50";

const MotionLink = motion.create(Link);

const defaultMotionProps = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.96 },
  transition: { type: "spring" as const, stiffness: 400, damping: 17 },
};

function resolveClasses({
  variant,
  size,
  className,
}: {
  variant: ButtonVariant;
  size: ButtonSize;
  className?: string;
}) {
  return [baseClasses, variantClasses[variant], sizeClasses[size], className]
    .filter(Boolean)
    .join(" ");
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(props, ref) {
    const { variant = "primary", size = "md", className, children } = props;

    if (typeof props.href === "string") {
      const {
        href,
        variant: _v,
        size: _s,
        className: _c,
        children: _ch,
        ...rest
      } = props;
      void _v;
      void _s;
      void _c;
      void _ch;
      return (
        <MotionLink
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={resolveClasses({ variant, size, className })}
          {...defaultMotionProps}
          {...rest}
        >
          {children}
        </MotionLink>
      );
    }

    const {
      type = "button",
      variant: _v,
      size: _s,
      className: _c,
      children: _ch,
      ...rest
    } = props;
    void _v;
    void _s;
    void _c;
    void _ch;
    const buttonProps = rest as unknown as HTMLMotionProps<"button">;
    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        className={resolveClasses({ variant, size, className })}
        {...defaultMotionProps}
        {...buttonProps}
      >
        {children}
      </motion.button>
    );
  },
);

export default Button;