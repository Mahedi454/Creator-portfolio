"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

export type FadeInDirection = "up" | "down" | "left" | "right";

interface FadeInProps {
  children: ReactNode;
  direction?: FadeInDirection;
  delay?: number;
  duration?: number;
  className?: string;
}

const offset = 28;

const directionOffset: Record<FadeInDirection, { x: number; y: number }> = {
  up: { x: 0, y: offset },
  down: { x: 0, y: -offset },
  left: { x: offset, y: 0 },
  right: { x: -offset, y: 0 },
};

export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();

  const { x, y } = directionOffset[direction];

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        x: reduceMotion ? 0 : x,
        y: reduceMotion ? 0 : y,
      }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{
        duration: reduceMotion ? 0 : duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}