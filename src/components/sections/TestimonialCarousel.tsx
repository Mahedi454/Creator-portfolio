"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current],
  );

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const testimonial = testimonials[current];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 40 : -40,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -40 : 40,
      opacity: 0,
    }),
  };

  return (
    <section className="bg-neutral-50 px-6 py-24 dark:bg-neutral-900 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="What Brands Say"
          subtitle="Trusted by forward-thinking companies worldwide."
          align="center"
        />

        <div
          className="relative mt-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Decorative quote marks */}
          <Quote
            className="pointer-events-none absolute -left-2 -top-6 h-16 w-16 text-amber-500/15 dark:text-amber-500/20 sm:-left-6 sm:h-24 sm:w-24"
            fill="currentColor"
          />

          <div className="min-h-[280px] px-4 sm:px-12">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.blockquote
                key={testimonial.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <p className="text-lg leading-relaxed text-black/80 dark:text-white/80 sm:text-xl sm:leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <footer className="mt-8 flex items-center gap-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <cite className="not-italic text-sm font-medium text-black dark:text-white">
                      {testimonial.author}
                    </cite>
                    <p className="text-xs text-black/50 dark:text-white/50">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Navigation dots */}
          <div className="mt-10 flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-amber-500"
                    : "w-2 bg-black/15 dark:bg-white/15"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
