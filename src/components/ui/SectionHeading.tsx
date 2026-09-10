"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const alignClasses =
    align === "center"
      ? "mx-auto max-w-2xl text-center"
      : "max-w-2xl text-left";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 ${alignClasses} ${className}`}
    >
      <h2 className="text-3xl font-semibold tracking-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-black/60 dark:text-white/60">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}