"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import type { PortfolioProject } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";

type FilterTab = "All" | PortfolioProject["category"];

const filterTabs: FilterTab[] = [
  "All",
  "Fashion",
  "Technology",
  "Travel",
  "Lifestyle",
  "Food",
];

export default function PortfolioPageClient() {
  const [activeTab, setActiveTab] = useState<FilterTab>("All");

  const filteredProjects =
    activeTab === "All"
      ? portfolio
      : portfolio.filter((p) => p.category === activeTab);

  return (
    <>
      <section className="bg-neutral-950 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              title="Selected Work"
              subtitle="A curated collection of brand collaborations and creative projects."
              align="center"
              className="mx-auto text-center"
            />
          </FadeIn>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn delay={0.1}>
            <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "rounded-full px-5 py-2 text-sm font-medium transition-colors",
                    activeTab === tab
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : "bg-black/5 text-black/60 hover:bg-black/10 dark:bg-white/10 dark:text-white/60 dark:hover:bg-white/15",
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </FadeIn>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid gap-8 sm:grid-cols-2"
            >
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-center gap-2">
                          <Badge variant="accent">{project.category}</Badge>
                          <span className="text-xs text-white/60">
                            {project.year}
                          </span>
                        </div>
                      </div>
                      <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                        <ArrowUpRight className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="mt-4 px-1">
                      <p className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-500">
                        {project.brand}
                      </p>
                      <h3 className="mt-1 text-xl font-semibold text-black dark:text-white">
                        {project.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-black/50 dark:text-white/50">
                        {project.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <FadeIn className="py-24 text-center">
              <p className="text-lg text-black/40 dark:text-white/40">
                No projects in this category yet.
              </p>
            </FadeIn>
          )}
        </div>
      </section>
    </>
  );
}
