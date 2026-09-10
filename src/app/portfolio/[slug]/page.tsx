import { portfolio } from "@/data/portfolio";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Quote } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export function generateStaticParams() {
  return portfolio.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolio.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${project.brand}`,
    description: project.description,
  };
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = portfolio.find((p) => p.slug === slug);
  if (!project) notFound();

  const related = portfolio
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);

  return (
    <>
      <section className="pt-8 pb-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-black/50 transition-colors hover:text-black dark:text-white/50 dark:hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
        </div>
      </section>

      <section className="pb-16 pt-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </FadeIn>

          <FadeIn className="mt-10 max-w-3xl">
            <div className="flex items-center gap-3">
              <Badge variant="accent">{project.category}</Badge>
              <span className="text-sm text-black/40 dark:text-white/40">
                {project.year}
              </span>
            </div>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-500">
              {project.brand}
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-black dark:text-white sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1fr_1fr]">
            <div>
              <FadeIn>
                <SectionHeading title="Campaign Overview" />
                <p className="text-base leading-relaxed text-black/60 dark:text-white/60">
                  {project.description}
                </p>
              </FadeIn>

              <FadeIn delay={0.1} className="mt-12">
                <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">
                  The Challenge
                </h3>
                <p className="text-base leading-relaxed text-black/60 dark:text-white/60">
                  {project.challenge}
                </p>
              </FadeIn>

              <FadeIn delay={0.15} className="mt-12">
                <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">
                  Creative Approach
                </h3>
                <p className="text-base leading-relaxed text-black/60 dark:text-white/60">
                  {project.creativeApproach}
                </p>
              </FadeIn>
            </div>

            <div>
              <FadeIn delay={0.1}>
                <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">
                  Deliverables
                </h3>
                <ul className="space-y-3">
                  {project.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-black/60 dark:text-white/60"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </FadeIn>

              <FadeIn delay={0.15} className="mt-12">
                <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">
                  Results
                </h3>
                <ul className="space-y-3">
                  {project.results.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-black/60 dark:text-white/60"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-20 dark:bg-neutral-900 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <FadeIn>
            <Quote className="mx-auto mb-6 h-10 w-10 text-amber-500/40" />
            <blockquote className="text-xl leading-relaxed text-black/70 italic dark:text-white/70 sm:text-2xl">
              &ldquo;{project.testimonial.quote}&rdquo;
            </blockquote>
            <div className="mt-8">
              <p className="text-base font-semibold text-black dark:text-white">
                {project.testimonial.author}
              </p>
              <p className="mt-1 text-sm text-black/50 dark:text-white/50">
                {project.testimonial.role}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <SectionHeading title="Gallery" />
          </FadeIn>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800">
                  <Image
                    src={project.image}
                    alt={`${project.title} — image ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/5 py-20 dark:border-white/5 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              title="Related Projects"
              subtitle="More of my work across different industries."
            />
          </FadeIn>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <FadeIn key={p.id} delay={i * 0.1}>
                <Link href={`/portfolio/${p.slug}`} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="mt-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-500">
                      {p.brand}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-black dark:text-white">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <FadeIn>
            <SectionHeading
              title="Interested in working together?"
              subtitle="I'm always open to creative collaborations, brand partnerships, and new stories to tell."
              align="center"
            />
            <div className="mt-8 flex justify-center">
              <Button href="/work-with-me" size="lg">
                Get in Touch
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
