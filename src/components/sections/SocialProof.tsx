"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { target: 500, suffix: "K+", label: "Followers" },
  { target: 12, suffix: "M+", label: "Monthly Views" },
  { target: 87, suffix: "0%", label: "Engagement" },
  { target: 50, suffix: "+", label: "Brand Collaborations" },
] as const;

export default function SocialProof() {
  return (
    <section className="border-y border-black/5 bg-neutral-50 dark:border-white/5 dark:bg-neutral-900">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px sm:grid-cols-4">
        {stats.map((stat, i) => {
          const displayTarget =
            stat.target === 87 ? 8.7 : stat.target;
          const displaySuffix =
            stat.target === 87 ? "%" : stat.suffix;

          return (
            <div
              key={stat.label}
              className="relative flex items-center justify-center py-12 sm:py-16"
            >
              {i > 0 && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-px bg-black/5 dark:bg-white/5 max-sm:hidden" />
              )}
              <AnimatedCounter
                target={displayTarget}
                suffix={displaySuffix}
                label={stat.label}
                duration={1.8}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
