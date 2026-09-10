"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Clock, User } from "lucide-react";
import { blog, blogCategories } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";

type CategoryFilter = "All" | (typeof blogCategories)[number];

const ITEMS_PER_PAGE = 6;

export default function BlogPageClient() {
  const [activeCategory, setActiveCategory] =
    useState<CategoryFilter>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const featuredPosts = blog.filter((p) => p.featured);
  const featured = featuredPosts[0];

  const filteredPosts = useMemo(() => {
    let posts = blog.filter((p) => p !== featured);

    if (activeCategory !== "All") {
      posts = posts.filter((p) => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)),
      );
    }

    posts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );

    return posts;
  }, [activeCategory, searchQuery, featured]);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  return (
    <>
      <section className="bg-neutral-950 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              title="Blog"
              subtitle="Thoughts on creativity, storytelling, and the creator life."
              align="center"
              className="mx-auto text-center"
            />
          </FadeIn>
        </div>
      </section>

      {featured && (
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeIn>
              <Link
                href={`/blog/${featured.slug}`}
                className="group block overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900"
              >
                <div className="relative aspect-[21/9] overflow-hidden">
                  <Image
                    src={featured.thumbnail}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
                    <Badge variant="accent" className="mb-3">
                      {featured.category}
                    </Badge>
                    <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                      {featured.title}
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm text-white/70 sm:text-base">
                      {featured.excerpt}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/60">
                      <span className="flex items-center gap-1.5">
                        <User className="h-4 w-4" />
                        {featured.author}
                      </span>
                      <span>{formatDate(featured.date)}</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        {featured.readingTime}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          </div>
        </section>
      )}

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn delay={0.1}>
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setActiveCategory("All");
                    setVisibleCount(ITEMS_PER_PAGE);
                  }}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                    activeCategory === "All"
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : "bg-black/5 text-black/60 hover:bg-black/10 dark:bg-white/10 dark:text-white/60 dark:hover:bg-white/15"
                  }`}
                >
                  All
                </button>
                {blogCategories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => {
                      setActiveCategory(cat);
                      setVisibleCount(ITEMS_PER_PAGE);
                    }}
                    className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                      activeCategory === cat
                        ? "bg-black text-white dark:bg-white dark:text-black"
                        : "bg-black/5 text-black/60 hover:bg-black/10 dark:bg-white/10 dark:text-white/60 dark:hover:bg-white/15"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="relative max-w-md">
                <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-black/40 dark:text-white/40" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setVisibleCount(ITEMS_PER_PAGE);
                  }}
                  className="w-full rounded-xl border border-black/10 bg-white py-2.5 pl-10 pr-4 text-sm text-black placeholder-black/40 outline-none transition-colors focus:border-amber-500 dark:border-white/10 dark:bg-neutral-900 dark:text-white dark:placeholder-white/40 dark:focus:border-amber-500"
                />
              </div>
            </div>
          </FadeIn>

          <div className="mt-10">
            <AnimatePresence mode="wait">
              {visiblePosts.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  className="py-24 text-center"
                >
                  <p className="text-lg text-black/40 dark:text-white/40">
                    No articles found. Try adjusting your search or filter.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key={`${activeCategory}-${searchQuery}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {visiblePosts.map((post, i) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                    >
                      <Link
                        href={`/blog/${post.slug}`}
                        className="group block"
                      >
                        <div className="relative aspect-video overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800">
                          <Image
                            src={post.thumbnail}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                          <div className="absolute left-3 top-3">
                            <Badge variant="accent">
                              {post.category}
                            </Badge>
                          </div>
                        </div>
                        <div className="mt-4">
                          <h3 className="text-lg font-semibold text-black dark:text-white line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-black/60 dark:text-white/60 line-clamp-2">
                            {post.excerpt}
                          </p>
                          <div className="mt-3 flex items-center gap-3 text-xs text-black/50 dark:text-white/50">
                            <span className="flex items-center gap-1">
                              <User className="h-3.5 w-3.5" />
                              {post.author}
                            </span>
                            <span>{formatDate(post.date)}</span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5" />
                              {post.readingTime}
                            </span>
                          </div>
                        </div>
                      </Link>
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
                onClick={() =>
                  setVisibleCount((prev) => prev + ITEMS_PER_PAGE)
                }
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-8 py-3 text-sm font-medium text-black transition-colors hover:bg-black/5 dark:border-white/10 dark:bg-neutral-900 dark:text-white dark:hover:bg-white/10"
              >
                Load More
                <span className="text-black/40 dark:text-white/40">
                  ({filteredPosts.length - visibleCount} remaining)
                </span>
              </button>
            </FadeIn>
          )}
        </div>
      </section>
    </>
  );
}
