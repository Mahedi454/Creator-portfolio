"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Download,
  MapPin,
  Mail,
  MonitorPlay,
  Camera,
  Music,
  MessageSquare,
  Eye,
  TrendingUp,
  Users,
  Handshake,
  Quote,
  ArrowRight,
  Loader2,
  Check,
} from "lucide-react";
import { creator } from "@/data/creator";
import { totalFollowers, formatFollowers } from "@/data/social";
import { testimonials } from "@/data/testimonials";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

const platformIcons: Record<string, typeof MonitorPlay> = {
  YouTube: MonitorPlay,
  Instagram: Camera,
  TikTok: Music,
  "Twitter / X": MessageSquare,
};

interface MockPlatformData {
  engagement: string;
  avgReach: string;
}

const mockPlatformData: Record<string, MockPlatformData> = {
  YouTube: { engagement: "8.2%", avgReach: "2.4M" },
  Instagram: { engagement: "6.5%", avgReach: "890K" },
  TikTok: { engagement: "11.8%", avgReach: "1.8M" },
  "Twitter / X": { engagement: "5.3%", avgReach: "420K" },
};

const collaborations = [
  { brand: "Sony", campaign: "Vision of Tomorrow", year: "2024" },
  { brand: "Patagonia", campaign: "Wild Stories Series", year: "2023" },
  { brand: "Samsung", campaign: "Frame Your World", year: "2024" },
  { brand: "Everlane", campaign: "Less Is More", year: "2023" },
  { brand: "Oatly", campaign: "The Oat Film", year: "2024" },
  { brand: "Dell", campaign: "Desert Forward", year: "2023" },
];

const services = [
  {
    name: "Sponsored YouTube Video",
    price: "Starting from $15,000",
    description: "Long-form cinematic content (8-15 min) with dedicated audience focus",
  },
  {
    name: "Instagram Campaign",
    price: "Starting from $8,000",
    description: "3 feed posts + stories package with cross-platform amplification",
  },
  {
    name: "TikTok Campaign",
    price: "Starting from $5,000",
    description: "Multi-video campaign optimized for discovery and engagement",
  },
  {
    name: "Brand Ambassadorship",
    price: "Starting from $25,000",
    description: "Quarterly partnership with sustained storytelling and exclusivity",
  },
  {
    name: "UGC Content Package",
    price: "Starting from $3,000",
    description: "Authentic branded content for your own channels and ad use",
  },
  {
    name: "Event Appearance",
    price: "Starting from $5,000",
    description: "Live coverage, speaking engagements, or hosted experiences",
  },
];

const demographics = {
  age: [
    { label: "18–24", percent: 32 },
    { label: "25–34", percent: 45 },
    { label: "35–44", percent: 15 },
    { label: "45+", percent: 8 },
  ],
  gender: [
    { label: "Male", percent: 58 },
    { label: "Female", percent: 38 },
    { label: "Other", percent: 4 },
  ],
  locations: [
    { label: "United States", percent: 42 },
    { label: "United Kingdom", percent: 12 },
    { label: "Canada", percent: 8 },
    { label: "Australia", percent: 7 },
    { label: "Germany", percent: 5 },
    { label: "Other", percent: 26 },
  ],
};

const contentCategories = [
  { name: "Travel & Adventure", percent: 35 },
  { name: "Technology", percent: 25 },
  { name: "Lifestyle", percent: 20 },
  { name: "Food & Culture", percent: 12 },
  { name: "Other", percent: 8 },
];

function AnimatedBar({ percent, delay = 0 }: { percent: number; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="h-2.5 w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
      <motion.div
        className="h-full rounded-full bg-amber-500"
        initial={{ width: 0 }}
        animate={inView ? { width: `${percent}%` } : {}}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}

function Header() {
  const [downloadState, setDownloadState] = useState<
    "idle" | "preparing" | "ready"
  >("idle");

  const handleDownload = () => {
    setDownloadState("preparing");
    window.setTimeout(() => {
      setDownloadState("ready");
      window.setTimeout(() => setDownloadState("idle"), 4000);
    }, 800);
  };

  return (
    <section className="relative overflow-hidden bg-neutral-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn direction="left">
          <Badge className="mb-6">Media Kit</Badge>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Media Kit
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-neutral-400">
            Everything you need to know about partnering with {creator.name}.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="mt-12 flex flex-col items-start gap-8 sm:flex-row sm:items-center">
            <div className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-2xl">
              <Image
                src={creator.portrait}
                alt={creator.name}
                fill
                className="object-cover"
                sizes="112px"
                priority
              />
            </div>

            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-white">{creator.name}</h2>
              <p className="mt-1 text-neutral-400">{creator.tagline}</p>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-neutral-500">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  {creator.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5" />
                  {creator.email}
                </span>
              </div>
            </div>

            <div className="flex flex-col items-start gap-3">
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-amber-400"
              >
                {downloadState === "preparing" ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Download className="h-4 w-4" />
                )}
                Download Media Kit
              </button>
              <AnimatePresence>
                {downloadState === "ready" && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    className="flex items-center gap-2 text-sm font-medium text-amber-400"
                  >
                    <Check className="h-4 w-4" />
                    Media kit ready! Connect your PDF to enable the download.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function AboutSummary() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading title="About" subtitle="A brief overview of who I am and what I do." />
          <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
            {creator.bio}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function AudienceOverview() {
  const stats = [
    { label: "Total Audience", value: formatFollowers(totalFollowers), icon: Users },
    { label: "Monthly Views", value: "12M+", icon: Eye },
    { label: "Avg. Engagement", value: "8.7%", icon: TrendingUp },
    { label: "Brand Collabs", value: "50+", icon: Handshake },
  ];

  return (
    <section className="bg-neutral-50 py-24 dark:bg-neutral-900 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            title="Audience Overview"
            subtitle="Key metrics that define our reach and impact."
            align="center"
          />
        </FadeIn>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 text-center dark:border-neutral-700 dark:bg-neutral-800">
                <stat.icon className="mx-auto mb-3 h-6 w-6 text-amber-500" />
                <span className="block text-3xl font-semibold tracking-tight text-black dark:text-white sm:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-1 block text-xs uppercase tracking-[0.15em] text-neutral-500">
                  {stat.label}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlatformBreakdown() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            title="Platform Breakdown"
            subtitle="Detailed performance across each platform."
          />
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2">
          {creator.platforms.map((platform, i) => {
            const Icon = platformIcons[platform.name] ?? Users;
            const mock = mockPlatformData[platform.name] ?? { engagement: "6.0%", avgReach: "300K" };

            return (
              <FadeIn key={platform.name} delay={i * 0.08}>
                <div className="group rounded-2xl border border-neutral-200 bg-white p-6 transition-colors hover:border-amber-500/50 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-amber-500/50">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-700">
                        <Icon className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-black dark:text-white">
                          {platform.name}
                        </h3>
                        <p className="text-sm text-neutral-500">{platform.username}</p>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-black dark:text-white">
                      {platform.followers}
                    </span>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-4 border-t border-neutral-100 pt-4 dark:border-neutral-700">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-neutral-500">
                        Engagement
                      </p>
                      <p className="mt-0.5 text-lg font-semibold text-amber-500">
                        {mock.engagement}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-neutral-500">
                        Avg. Reach
                      </p>
                      <p className="mt-0.5 text-lg font-semibold text-black dark:text-white">
                        {mock.avgReach}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AudienceDemographics() {
  return (
    <section className="bg-neutral-50 py-24 dark:bg-neutral-900 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            title="Audience Demographics"
            subtitle="Who's watching, listening, and engaging."
          />
        </FadeIn>

        <div className="grid gap-10 lg:grid-cols-3">
          <FadeIn delay={0.1}>
            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-500">
                Age Distribution
              </h3>
              <div className="space-y-4">
                {demographics.age.map((item, i) => (
                  <div key={item.label}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="font-medium text-black dark:text-white">{item.label}</span>
                      <span className="text-neutral-500">{item.percent}%</span>
                    </div>
                    <AnimatedBar percent={item.percent} delay={i * 0.1} />
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-500">
                Gender
              </h3>
              <div className="space-y-4">
                {demographics.gender.map((item, i) => (
                  <div key={item.label}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="font-medium text-black dark:text-white">{item.label}</span>
                      <span className="text-neutral-500">{item.percent}%</span>
                    </div>
                    <AnimatedBar percent={item.percent} delay={i * 0.1} />
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-500">
                Top Locations
              </h3>
              <div className="space-y-4">
                {demographics.locations.map((item, i) => (
                  <div key={item.label}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="font-medium text-black dark:text-white">{item.label}</span>
                      <span className="text-neutral-500">{item.percent}%</span>
                    </div>
                    <AnimatedBar percent={item.percent} delay={i * 0.08} />
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function ContentCategories() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            title="Content Categories"
            subtitle="The topics that resonate most with our audience."
            align="center"
          />
        </FadeIn>

        <div className="space-y-5">
          {contentCategories.map((cat, i) => (
            <FadeIn key={cat.name} delay={i * 0.08}>
              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium text-black dark:text-white">{cat.name}</span>
                  <span className="text-neutral-500">{cat.percent}%</span>
                </div>
                <AnimatedBar percent={cat.percent} delay={i * 0.1} />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function PreviousCollaborations() {
  return (
    <section className="bg-neutral-50 py-24 dark:bg-neutral-900 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            title="Previous Collaborations"
            subtitle="Brands we've worked with and the campaigns we've built together."
          />
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {collaborations.map((collab, i) => (
            <FadeIn key={collab.brand} delay={i * 0.08}>
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 transition-colors hover:border-amber-500/50 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-amber-500/50">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-black dark:text-white">
                    {collab.brand}
                  </h3>
                  <span className="text-xs font-medium text-neutral-500">{collab.year}</span>
                </div>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  {collab.campaign}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesAndRates() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            title="Services & Rates"
            subtitle="Flexible collaboration options tailored to your goals."
          />
        </FadeIn>

        <div className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-700">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <FadeIn key={service.name} delay={i * 0.06}>
                <div className="flex flex-col border-b border-neutral-200 p-6 last:border-b-0 sm:border-b-0 sm:[&:not(:nth-child(3n))]:border-r dark:border-neutral-700 sm:dark:[&:not(:nth-child(3n))]:border-r">
                  <h3 className="text-base font-semibold text-black dark:text-white">
                    {service.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-500">
                    {service.description}
                  </p>
                  <p className="mt-4 text-lg font-semibold text-amber-500">{service.price}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.3}>
          <p className="mt-6 text-center text-sm text-neutral-500">
            Custom packages available. Contact for pricing.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const brandTestimonials = testimonials.slice(0, 3);

  return (
    <section className="bg-neutral-50 py-24 dark:bg-neutral-900 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            title="What Brands Say"
            subtitle="Feedback from partners we've collaborated with."
            align="center"
          />
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-3">
          {brandTestimonials.map((t, i) => (
            <FadeIn key={t.id} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-800">
                <Quote className="mb-4 h-6 w-6 text-amber-500/40" />
                <p className="flex-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-neutral-100 pt-4 dark:border-neutral-700">
                  <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={t.avatar}
                      alt={t.author}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-black dark:text-white">{t.author}</p>
                    <p className="text-xs text-neutral-500">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="bg-neutral-950 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
        <FadeIn>
          <SectionHeading
            title="Ready to collaborate?"
            subtitle="Let's create something that resonates."
            align="center"
          />
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/work-with-me" size="lg">
              <ArrowRight className="h-4 w-4" />
              Get in Touch
            </Button>
            <a
              href={`mailto:${creator.email}`}
              className="inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4" />
              {creator.email}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function PrintNote() {
  return (
    <section className="border-t border-neutral-200 py-8 dark:border-neutral-800">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="text-center text-xs text-neutral-400">
          For a printable version, click <strong className="font-medium text-neutral-500">Download Media Kit</strong> above.
        </p>
      </div>
    </section>
  );
}

export default function MediaKitPage() {
  return (
    <>
      <Header />
      <AboutSummary />
      <AudienceOverview />
      <PlatformBreakdown />
      <AudienceDemographics />
      <ContentCategories />
      <PreviousCollaborations />
      <ServicesAndRates />
      <TestimonialsSection />
      <ContactCTA />
      <PrintNote />
    </>
  );
}
