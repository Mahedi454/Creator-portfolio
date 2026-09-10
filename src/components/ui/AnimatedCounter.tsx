"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  label: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

export default function AnimatedCounter({
  target,
  label,
  prefix = "",
  suffix = "",
  duration = 1.6,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const displayValue = useMotionValue(0);
  const spring = useSpring(displayValue, {
    stiffness: 60,
    damping: 20,
  });

  const [value, setValue] = useState(0);

  useEffect(() => {
    return spring.on("change", (latest) => setValue(Math.round(latest)));
  }, [spring]);

  useEffect(() => {
    if (!inView) return;
    displayValue.set(0);
    const controls = animate(displayValue, target, { duration });
    return controls.stop;
  }, [inView, target, duration, displayValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center gap-2 text-center"
    >
      <span className="text-4xl font-light tabular-nums tracking-tight text-black dark:text-white sm:text-5xl">
        {prefix}
        {value.toLocaleString()}
        {suffix}
      </span>
      <span className="text-xs uppercase tracking-[0.2em] text-black/50 dark:text-white/50">
        {label}
      </span>
    </motion.div>
  );
}