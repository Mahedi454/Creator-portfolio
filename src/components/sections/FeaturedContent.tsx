"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Eye, Tag } from "lucide-react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Modal from "@/components/ui/Modal";
import FadeIn from "@/components/ui/FadeIn";
import {
  content,
  contentCategories,
  featuredContent,
  formatViews,
  type ContentItem,
} from "@/data/content";
import { formatDate } from "@/lib/utils";

const allFilters = ["All", ...contentCategories] as const;
type Filter = (typeof allFilters)[number];

function ContentCard({
  item,
  onClick,
  large,
}: {
  item: ContentItem;
  onClick: () => void;
  large?: boolean;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={
        large
          ? "group relative col-span-full overflow-hidden rounded-2xl bg-white dark:bg-neutral-900"
          : "group relative overflow-hidden rounded-xl bg-white text-left dark:bg-neutral-900"
      }
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      <div
        className={
          large
            ? "relative aspect-[21/9] w-full overflow-hidden"
            : "relative aspect-video w-full overflow-hidden"
        }
      >
        <Image
          src={item.thumbnail}
          alt={item.title}
          fill
          sizes={
            large
              ? "(max-width: 1024px) 100vw, 80vw"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          }
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30" />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg">
            <Play className="ml-0.5 h-6 w-6 text-black" fill="black" />
          </div>
        </div>

        <div className="absolute right-3 top-3">
          <Badge variant="accent">{item.category}</Badge>
        </div>

        {item.duration && (
          <div className="absolute bottom-3 right-3 rounded bg-black/70 px-2 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
            {item.duration}
          </div>
        )}
      </div>

      <div className={large ? "p-6 sm:p-8" : "p-4"}>
        <h3
          className={
            large
              ? "text-xl font-semibold text-black dark:text-white sm:text-2xl"
              : "text-sm font-medium text-black dark:text-white"
          }
        >
          {item.title}
        </h3>
        {large && (
          <p className="mt-2 line-clamp-2 text-sm text-black/50 dark:text-white/50">
            {item.description}
          </p>
        )}
        <div className="mt-3 flex items-center gap-4 text-xs text-black/40 dark:text-white/40">
          <span className="flex items-center gap-1">
            <Eye className="h-3.5 w-3.5" />
            {formatViews(item.views)}
          </span>
          <span>{formatDate(item.date)}</span>
        </div>
      </div>
    </motion.button>
  );
}

function DetailModal({
  item,
  onClose,
}: {
  item: ContentItem | null;
  onClose: () => void;
}) {
  if (!item) return null;

  return (
    <Modal isOpen={!!item} onClose={onClose} title={item.title}>
      <div className="space-y-5">
        <div className="relative aspect-video w-full overflow-hidden rounded-xl">
          <Image
            src={item.thumbnail}
            alt={item.title}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="h-full w-full object-cover"
          />
        </div>

        <p className="text-sm leading-relaxed text-black/60 dark:text-white/60">
          {item.description}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-xs text-black/50 dark:text-white/50">
          <span className="flex items-center gap-1">
            <Eye className="h-3.5 w-3.5" />
            {formatViews(item.views)} views
          </span>
          <span>{formatDate(item.date)}</span>
        </div>

        {item.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 rounded-full bg-black/5 px-3 py-1 text-xs text-black/60 dark:bg-white/5 dark:text-white/60"
              >
                <Tag className="h-3 w-3" />
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Modal>
  );
}

export default function FeaturedContent() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);

  const mainFeatured = featuredContent[0];

  const filteredContent =
    activeFilter === "All"
      ? content
      : content.filter((item) => item.category === activeFilter);

  const gridItems = filteredContent.filter(
    (item) => item.id !== mainFeatured?.id,
  );

  return (
    <section className="bg-white px-6 py-24 dark:bg-neutral-950 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Featured Content"
          subtitle="A selection of my best work across platforms."
          align="center"
        />

        {/* Featured card */}
        {mainFeatured && (
          <FadeIn className="mb-12">
            <ContentCard
              item={mainFeatured}
              onClick={() => setSelectedItem(mainFeatured)}
              large
            />
          </FadeIn>
        )}

        {/* Filter tabs */}
        <FadeIn delay={0.1} className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {allFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeFilter === filter
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "bg-black/5 text-black/60 hover:bg-black/10 dark:bg-white/10 dark:text-white/60 dark:hover:bg-white/15"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Content grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {gridItems.map((item) => (
              <ContentCard
                key={item.id}
                item={item}
                onClick={() => setSelectedItem(item)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {gridItems.length === 0 && (
          <p className="py-16 text-center text-sm text-black/40 dark:text-white/40">
            No content in this category yet.
          </p>
        )}
      </div>

      <DetailModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
}
