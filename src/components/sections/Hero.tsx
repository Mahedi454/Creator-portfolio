"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Camera, Music, MonitorPlay } from "lucide-react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { creator } from "@/data/creator";

const socialCards = [
  {
    platform: "YouTube",
    stat: "285K subscribers",
    icon: MonitorPlay,
    className: "top-8 -left-6 sm:left-4",
    delay: 0,
  },
  {
    platform: "Instagram",
    stat: "180K followers",
    icon: Camera,
    className: "top-1/2 -translate-y-1/2 -right-4 sm:right-2",
    delay: 0.15,
  },
  {
    platform: "TikTok",
    stat: "350K followers",
    icon: Music,
    className: "bottom-12 -left-2 sm:left-8",
    delay: 0.3,
  },
] as const;

function floatingProps(delay: number) {
  return {
    y: [0, -8, 0] as number[],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
      delay,
    },
  };
}

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const headingWords = "Creating stories people remember.".split(" ");

  return (
    <section
      className="relative overflow-hidden bg-white dark:bg-neutral-950"
    >
      {/* Background blob */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-amber-500/5 blur-3xl dark:bg-amber-500/10" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-amber-500/[0.03] blur-3xl dark:bg-amber-500/[0.06]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 sm:px-8 lg:grid-cols-[1.5fr_1fr] lg:gap-16 lg:py-32">
        {/* Left column */}
        <div className="relative z-10 flex flex-col gap-8">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs font-medium uppercase tracking-[0.25em] text-amber-500 sm:text-sm"
          >
            Content Creator &bull; Digital Storyteller
          </motion.p>

          <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-black dark:text-white sm:text-6xl lg:text-7xl">
            {headingWords.map((word, i) => (
              <motion.span
                key={i}
                className="mr-[0.3em] inline-block"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-lg text-base leading-relaxed text-black/60 dark:text-white/60 sm:text-lg"
          >
            I create cinematic digital content around technology, lifestyle,
            travel and culture. My work blends visual storytelling with authentic
            narratives to captivate audiences worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex flex-wrap gap-4"
          >
            <Button href="/content" variant="primary" size="lg">
              Explore My Content
            </Button>
            <Button href="/work-with-me" variant="secondary" size="lg">
              Work With Me
            </Button>
          </motion.div>
        </div>

        {/* Right column */}
        <div className="relative mx-auto w-full max-w-md lg:mx-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] overflow-hidden rounded-3xl"
          >
            <Image
              src={creator.portrait}
              alt={`${creator.name} portrait`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </motion.div>

          {/* Floating social cards */}
          {socialCards.map((card) => {
            const float = reduceMotion
              ? { y: 0, transition: undefined }
              : floatingProps(card.delay);
            return (
              <motion.div
                key={card.platform}
                className={`absolute ${card.className} z-20`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: float.y, transition: float.transition }}
                transition={{
                  duration: 0.6,
                  delay: 0.8 + card.delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
              <div className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white/80 px-4 py-3 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-neutral-900/80">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500/10">
                  <card.icon className="h-4 w-4 text-amber-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-black dark:text-white">
                    {card.platform}
                  </span>
                  <span className="text-[11px] text-black/50 dark:text-white/50">
                    {card.stat}
                  </span>
                </div>
              </div>
            </motion.div>
          );
          })}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <motion.div
          animate={reduceMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-black/40 dark:border-white/10 dark:text-white/40"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
