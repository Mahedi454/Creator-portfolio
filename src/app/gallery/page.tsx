"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { gallery, galleryCategories, type GalleryItem } from "@/data/gallery";
import { cn } from "@/lib/utils";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";

type ActiveCategory = "All" | GalleryItem["category"];

const categories: ActiveCategory[] = ["All", ...galleryCategories];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredGallery = useMemo(() => {
    if (activeCategory === "All") return gallery;
    return gallery.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const openLightbox = useCallback((index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredGallery.length - 1 : prev - 1
    );
  }, [filteredGallery.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === filteredGallery.length - 1 ? 0 : prev + 1
    );
  }, [filteredGallery.length]);

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, closeLightbox, goToPrevious, goToNext]);

  const currentItem = filteredGallery[currentIndex];

  return (
    <>
      <section className="bg-neutral-950 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              title="Gallery"
              subtitle="A visual journey through my work, travels, and creative process."
              align="center"
              className="mx-auto text-center"
            />
          </FadeIn>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "rounded-full px-5 py-2 text-sm font-medium transition-colors",
                    activeCategory === category
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : "bg-black/5 text-black/60 hover:bg-black/10 dark:bg-white/10 dark:text-white/60 dark:hover:bg-white/15"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </FadeIn>

          <div className="mt-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="columns-2 sm:columns-3 lg:columns-4 gap-4"
              >
                {filteredGallery.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="break-inside-avoid mb-4"
                  >
                    <button
                      type="button"
                      onClick={() => openLightbox(index)}
                      className="group relative block w-full overflow-hidden rounded-xl"
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={item.width}
                        height={item.height}
                        className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <Badge variant="accent" className="mb-2">
                          {item.category}
                        </Badge>
                        <p className="text-sm leading-snug text-white line-clamp-2">
                          {item.caption}
                        </p>
                      </div>
                    </button>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightboxOpen && currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95"
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="absolute left-4 top-1/2 z-50 -translate-y-1/2">
              <button
                type="button"
                onClick={goToPrevious}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            </div>

            <div className="absolute right-4 top-1/2 z-50 -translate-y-1/2">
              <button
                type="button"
                onClick={goToNext}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            <button
              type="button"
              onClick={goToPrevious}
              className="absolute left-0 top-0 h-full w-1/4 cursor-pointer md:w-1/3"
              aria-label="Previous image"
            />
            <button
              type="button"
              onClick={goToNext}
              className="absolute right-0 top-0 h-full w-1/4 cursor-pointer md:w-1/3"
              aria-label="Next image"
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentItem.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="relative flex max-w-[90vw] flex-col items-center"
              >
                <div className="relative max-h-[75vh] w-full">
                  <Image
                    src={currentItem.src}
                    alt={currentItem.alt}
                    width={currentItem.width}
                    height={currentItem.height}
                    className="max-h-[75vh] w-auto object-contain"
                    priority
                  />
                </div>
                <div className="mt-4 max-w-2xl text-center">
                  <Badge variant="accent" className="mb-2">
                    {currentItem.category}
                  </Badge>
                  <p className="text-sm text-white/70">
                    {currentItem.caption}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
              <span className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
                {currentIndex + 1} / {filteredGallery.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
