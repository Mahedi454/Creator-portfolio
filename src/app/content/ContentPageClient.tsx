"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Search, Play, Eye, Heart, ChevronDown } from "lucide-react";
import { content, formatViews } from "@/data/content";
import type { ContentItem } from "@/data/content";
import { formatDate, cn } from "@/lib/utils";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Modal from "@/components/ui/Modal";

type FilterTab = "All" | "Videos" | "Reels" | "Shorts";
type SortOption = "newest" | "most-viewed" | "most-liked";

const ITEMS_PER_PAGE = 6;

const filterTabs: { key: FilterTab; label: string; categories: ContentItem["category"][] }[] = [
  { key: "All", label: "All", categories: [] },
  { key: "Videos", label: "Videos", categories: ["YouTube"] },
  { key: "Reels", label: "Reels", categories: ["Instagram", "Reels"] },
  { key: "Shorts", label: "Shorts", categories: ["Shorts", "TikTok"] },
];

const sortOptions: { key: SortOption; label: string }[] = [
  { key: "newest", label: "Newest" },
  { key: "most-viewed", label: "Most Viewed" },
  { key: "most-liked", label: "Most Liked" },
];

export default function ContentPageClient() {
  const [activeTab, setActiveTab] = useState<FilterTab>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);

  const filteredContent = useMemo(() => {
    let items = [...content];

    if (activeTab !== "All") {
      const tab = filterTabs.find((t) => t.key === activeTab);
      if (tab) {
        items = items.filter((item) => tab.categories.includes(item.category));
      }
    }

    if (categoryFilter !== "All") {
      items = items.filter((item) => item.category === categoryFilter);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.tags.some((tag) => tag.toLowerCase().includes(q)),
      );
    }

    switch (sortBy) {
      case "newest":
        items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      case "most-viewed":
        items.sort((a, b) => b.views - a.views);
        break;
      case "most-liked":
        items.sort((a, b) => b.likes - a.likes);
        break;
    }

    return items;
  }, [activeTab, searchQuery, categoryFilter, sortBy]);

  const visibleItems = filteredContent.slice(0, visibleCount);
  const hasMore = visibleCount < filteredContent.length;

  return (
    <>
      <section className="bg-neutral-950 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              title="Everything I Create"
              subtitle="Explore my full library of content across all platforms."
              align="center"
              className="mx-auto text-center"
            />
          </FadeIn>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn delay={0.1}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap items-center justify-center gap-2">
                {filterTabs.map((tab) => (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => {
                      setActiveTab(tab.key);
                      setVisibleCount(ITEMS_PER_PAGE);
                    }}
                    className={cn(
                      "rounded-full px-5 py-2 text-sm font-medium transition-colors",
                      activeTab === tab.key
                        ? "bg-black text-white dark:bg-white dark:text-black"
                        : "bg-black/5 text-black/60 hover:bg-black/10 dark:bg-white/10 dark:text-white/60 dark:hover:bg-white/15",
                    )}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="relative flex-1">
                  <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-black/40 dark:text-white/40" />
                  <input
                    type="text"
                    placeholder="Search content..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setVisibleCount(ITEMS_PER_PAGE);
                    }}
                    className="w-full rounded-xl border border-black/10 bg-white py-2.5 pl-10 pr-4 text-sm text-black placeholder-black/40 outline-none transition-colors focus:border-amber-500 dark:border-white/10 dark:bg-neutral-900 dark:text-white dark:placeholder-white/40 dark:focus:border-amber-500"
                  />
                </div>

                <div className="relative">
                  <select
                    value={categoryFilter}
                    onChange={(e) => {
                      setCategoryFilter(e.target.value);
                      setVisibleCount(ITEMS_PER_PAGE);
                    }}
                    className="appearance-none rounded-xl border border-black/10 bg-white py-2.5 pl-4 pr-10 text-sm text-black outline-none transition-colors focus:border-amber-500 dark:border-white/10 dark:bg-neutral-900 dark:text-white dark:focus:border-amber-500"
                  >
                    <option value="All">All Categories</option>
                    <option value="YouTube">YouTube</option>
                    <option value="Instagram">Instagram</option>
                    <option value="TikTok">TikTok</option>
                    <option value="Shorts">Shorts</option>
                    <option value="Reels">Reels</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-black/40 dark:text-white/40" />
                </div>

                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="appearance-none rounded-xl border border-black/10 bg-white py-2.5 pl-4 pr-10 text-sm text-black outline-none transition-colors focus:border-amber-500 dark:border-white/10 dark:bg-neutral-900 dark:text-white dark:focus:border-amber-500"
                  >
                    {sortOptions.map((opt) => (
                      <option key={opt.key} value={opt.key}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-black/40 dark:text-white/40" />
                </div>
              </div>
            </div>
          </FadeIn>

          <div className="mt-10">
            <AnimatePresence mode="wait">
              {visibleItems.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  className="py-24 text-center"
                >
                  <p className="text-lg text-black/40 dark:text-white/40">
                    No content matches your search.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key={`${activeTab}-${categoryFilter}-${searchQuery}-${sortBy}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {visibleItems.map((item, i) => (
                    <motion.article
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                    >
                      <button
                        type="button"
                        onClick={() => setSelectedItem(item)}
                        className="group w-full text-left"
                      >
                        <div className="relative aspect-video overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800">
                          <Image
                            src={item.thumbnail}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/30">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-black opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 scale-75">
                              <Play className="h-5 w-5 ml-0.5" fill="currentColor" />
                            </div>
                          </div>
                          <div className="absolute left-3 top-3">
                            <Badge variant="accent">{item.category}</Badge>
                          </div>
                          <div className="absolute bottom-3 right-3">
                            <span className="rounded-md bg-black/70 px-2 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
                              {item.duration}
                            </span>
                          </div>
                        </div>
                        <div className="mt-3 px-1">
                          <h3 className="text-base font-semibold text-black dark:text-white line-clamp-1">
                            {item.title}
                          </h3>
                          <div className="mt-1.5 flex items-center gap-3 text-xs text-black/50 dark:text-white/50">
                            <span className="flex items-center gap-1">
                              <Eye className="h-3.5 w-3.5" />
                              {formatViews(item.views)}
                            </span>
                            <span>{formatDate(item.date)}</span>
                          </div>
                        </div>
                      </button>
                    </motion.article>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {hasMore && (
            <FadeIn className="mt-12 text-center">
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-8 py-3 text-sm font-medium text-black transition-colors hover:bg-black/5 dark:border-white/10 dark:bg-neutral-900 dark:text-white dark:hover:bg-white/10"
              >
                Load More
                <span className="text-black/40 dark:text-white/40">
                  ({filteredContent.length - visibleCount} remaining)
                </span>
              </button>
            </FadeIn>
          )}
        </div>
      </section>

      <Modal
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        title={selectedItem?.title}
      >
        {selectedItem && (
          <div className="-m-8 mt-0">
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src={selectedItem.thumbnail}
                alt={selectedItem.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 512px"
              />
            </div>
            <div className="p-8">
              <div className="mb-3 flex items-center gap-2">
                <Badge variant="accent">{selectedItem.category}</Badge>
                <span className="text-xs text-black/40 dark:text-white/40">
                  {selectedItem.duration}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-black/70 dark:text-white/70">
                {selectedItem.description}
              </p>
              <div className="mt-4 flex items-center gap-4 text-sm text-black/50 dark:text-white/50">
                <span className="flex items-center gap-1.5">
                  <Eye className="h-4 w-4" />
                  {formatViews(selectedItem.views)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Heart className="h-4 w-4" />
                  {formatViews(selectedItem.likes)}
                </span>
                <span>{formatDate(selectedItem.date)}</span>
              </div>
              {selectedItem.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedItem.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-black/5 px-3 py-1 text-xs text-black/60 dark:bg-white/10 dark:text-white/60"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
