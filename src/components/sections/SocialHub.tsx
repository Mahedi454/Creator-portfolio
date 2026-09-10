"use client";

import { motion } from "framer-motion";
import {
  MonitorPlay,
  Camera,
  Music,
  Globe,
  MessageSquare,
  AtSign,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import { socialPlatforms, formatFollowers } from "@/data/social";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Youtube: MonitorPlay,
  Instagram: Camera,
  Music,
  Linkedin: Globe,
  Twitter: MessageSquare,
  AtSign,
};

export default function SocialHub() {
  return (
    <section className="bg-white px-6 py-24 dark:bg-neutral-950 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Follow Along"
          subtitle="Join the community across platforms."
          align="center"
        />

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {socialPlatforms.map((platform, i) => {
            const Icon = iconMap[platform.icon] ?? AtSign;

            return (
              <FadeIn key={platform.platform} delay={i * 0.06}>
                <motion.a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="group flex items-center justify-between rounded-2xl border border-black/5 bg-white p-5 transition-shadow hover:shadow-lg dark:border-white/5 dark:bg-neutral-900"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/5 transition-colors duration-300 group-hover:bg-amber-500/10 dark:bg-white/5 dark:group-hover:bg-amber-500/10">
                      <Icon className="h-5 w-5 text-black/60 transition-colors duration-300 group-hover:text-amber-500 dark:text-white/60" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-black dark:text-white">
                        {platform.platform}
                      </p>
                      <p className="text-xs text-black/40 dark:text-white/40">
                        {platform.username}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <span className="text-sm font-semibold text-black dark:text-white">
                      {formatFollowers(platform.followers)}
                    </span>
                    <span className="rounded-full border border-black/10 px-3 py-1 text-[11px] font-medium text-black/60 transition-colors duration-300 group-hover:border-amber-500/40 group-hover:text-amber-500 dark:border-white/10 dark:text-white/60 dark:group-hover:border-amber-500/40 dark:group-hover:text-amber-500">
                      Follow
                    </span>
                  </div>
                </motion.a>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
