import { blog } from "@/data/blog";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import { formatDate } from "@/lib/utils";
import Badge from "@/components/ui/Badge";
import FadeIn from "@/components/ui/FadeIn";

export function generateStaticParams() {
  return blog.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blog.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blog.find((p) => p.slug === slug);

  if (!post) notFound();

  const paragraphs = post.content
    .split("\n\n")
    .filter((p) => p.trim().length > 0);

  const relatedPosts = blog
    .filter((p) => p.id !== post.id)
    .slice(0, 3);

  return (
    <>
      <article className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-black/60 transition-colors hover:text-black dark:text-white/60 dark:hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </FadeIn>

          <FadeIn delay={0.05}>
            <Badge variant="accent" className="mb-4">
              {post.category}
            </Badge>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-5xl">
              {post.title}
            </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-black/50 dark:text-white/50">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readingTime}
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800">
              <Image
                src={post.thumbnail}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1024px"
                priority
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="mx-auto mt-12 max-w-3xl">
              {paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className="mb-6 text-lg leading-relaxed text-black/80 dark:text-white/80"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mx-auto mt-12 max-w-3xl">
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-black/5 px-3 py-1 text-xs text-black/60 dark:bg-white/10 dark:text-white/60"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-8 flex items-center gap-3">
                <span className="text-sm text-black/40 dark:text-white/40">
                  Share
                </span>
                <a
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-black/50 transition-colors hover:bg-black/5 dark:border-white/10 dark:text-white/50 dark:hover:bg-white/10"
                  aria-label="Share on Twitter"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-black/50 transition-colors hover:bg-black/5 dark:border-white/10 dark:text-white/50 dark:hover:bg-white/10"
                  aria-label="Share on LinkedIn"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-black/50 transition-colors hover:bg-black/5 dark:border-white/10 dark:text-white/50 dark:hover:bg-white/10"
                  aria-label="Share on Facebook"
                >
                  <Share2 className="h-4 w-4" />
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.35}>
            <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-black/10 bg-black/[0.02] p-6 dark:border-white/10 dark:bg-white/[0.02] sm:p-8">
              <div className="flex items-start gap-4">
                <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-700">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
                    alt={post.author}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <p className="font-semibold text-black dark:text-white">
                    {post.author}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-black/60 dark:text-white/60">
                    Content creator, filmmaker, and digital storyteller.
                    Crafting cinematic stories around technology, lifestyle,
                    and travel.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="border-t border-black/10 py-16 dark:border-white/10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeIn>
              <h2 className="mb-8 text-2xl font-bold tracking-tight text-black dark:text-white">
                More Articles
              </h2>
            </FadeIn>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related, i) => (
                <FadeIn key={related.id} delay={i * 0.1}>
                  <Link
                    href={`/blog/${related.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-video overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800">
                      <Image
                        src={related.thumbnail}
                        alt={related.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute left-3 top-3">
                        <Badge variant="accent">
                          {related.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h3 className="text-base font-semibold text-black dark:text-white line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-black/60 dark:text-white/60 line-clamp-2">
                        {related.excerpt}
                      </p>
                      <div className="mt-2 flex items-center gap-3 text-xs text-black/50 dark:text-white/50">
                        <span>{formatDate(related.date)}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {related.readingTime}
                        </span>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-neutral-950 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Stay in the Loop
            </h2>
            <p className="mt-3 text-white/60">
              Get new articles and behind-the-scenes stories delivered straight
              to your inbox. No spam, ever.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-amber-500"
              />
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-amber-400"
              >
                Subscribe
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
