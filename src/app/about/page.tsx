import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink, MapPin, Mail } from "lucide-react";
import { creator } from "@/data/creator";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Alex Morgan's journey as a content creator and filmmaker.",
};

function PageHero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn direction="left">
            <Badge className="mb-6">About</Badge>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              About Alex Morgan
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-400">
              {creator.bio}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-neutral-500">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {creator.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="h-4 w-4" />
                {creator.email}
              </span>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.15}>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl lg:mx-0">
              <Image
                src={creator.portrait}
                alt={creator.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function CreatorStory() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading title="My Story" />
          <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
            {creator.description}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

const CARD_LEFT = "lg:order-1 lg:pr-24 lg:text-right";
const CARD_LEFT_SPACER = "lg:order-2 lg:pl-24";
const CARD_RIGHT = "lg:order-2 lg:pl-24 lg:text-left";
const CARD_RIGHT_SPACER = "lg:order-1 lg:pr-24";

function JourneyTimeline() {
  return (
    <section className="bg-neutral-50 py-24 dark:bg-neutral-900 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            title="The Journey"
            subtitle="A timeline of milestones, risks, and creative breakthroughs."
          />
        </FadeIn>

        <div className="relative mt-16">
          <div className="absolute bottom-0 left-3 top-0 w-px bg-neutral-200 dark:bg-neutral-700 lg:left-1/2 lg:-translate-x-px" />

          {creator.journey.map((event, i) => {
            const onRight = i % 2 === 0;
            return (
              <FadeIn
                key={event.id}
                direction={onRight ? "right" : "left"}
                delay={Math.min(i * 0.06, 0.3)}
                className="relative mb-14 last:mb-0"
              >
                <div className="lg:grid lg:grid-cols-2 lg:items-start">
                  <div className={`pl-12 lg:pl-0 ${onRight ? CARD_LEFT : CARD_RIGHT}`}>
                    <div className={`flex items-center gap-2 ${onRight ? "lg:justify-end" : "lg:justify-start"}`}>
                      <span className="text-sm font-bold uppercase tracking-wider text-amber-600 dark:text-amber-500">
                        {event.year}
                      </span>
                    </div>
                    <h3 className="mt-1.5 text-lg font-semibold text-black dark:text-white">
                      {event.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                      {event.description}
                    </p>
                  </div>

                  <div
                    className={`hidden lg:block ${onRight ? CARD_LEFT_SPACER : CARD_RIGHT_SPACER}`}
                    aria-hidden="true"
                  />
                </div>

                <div className="absolute left-3 top-0.5 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center lg:left-1/2">
                  <span className="absolute inset-0 rounded-full bg-amber-500" />
                  <span className="absolute -inset-1.5 rounded-full bg-amber-500/15" />
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const categories = creator.skills.reduce<Record<string, typeof creator.skills>>(
    (acc, skill) => {
      (acc[skill.category] ??= []).push(skill);
      return acc;
    },
    {},
  );

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            title="Skills & Expertise"
            subtitle="Years of practice distilled into craft."
          />
        </FadeIn>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(categories).map(([category, skills], ci) => (
            <FadeIn key={category} delay={ci * 0.1}>
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-500">
                {category}
              </h3>
              <div className="space-y-5">
                {skills.map((skill) => (
                  <div key={skill.id}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="font-medium text-black dark:text-white">
                        {skill.name}
                      </span>
                      <span className="text-neutral-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
                      <div
                        className="h-full rounded-full bg-amber-500 transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function AchievementsSection() {
  return (
    <section className="bg-neutral-50 py-24 dark:bg-neutral-900 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            title="Recognition"
            subtitle="Milestones and awards along the way."
          />
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {creator.achievements.map((ach, i) => (
            <FadeIn key={ach.id} delay={i * 0.08}>
              <div className="group rounded-2xl border border-neutral-200 bg-white p-6 transition-colors hover:border-amber-500/50 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-amber-500/50">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-500">
                  {ach.year}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-black dark:text-white">
                  {ach.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {ach.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlatformsSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            title="Where to Find Me"
            subtitle="Follow along across these platforms."
          />
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2">
          {creator.platforms.map((platform, i) => (
            <FadeIn key={platform.name} delay={i * 0.08}>
              <a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-neutral-200 bg-white p-5 transition-all hover:border-amber-500/50 hover:shadow-sm dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-amber-500/50"
              >
                <div>
                  <h3 className="font-semibold text-black dark:text-white">
                    {platform.name}
                  </h3>
                  <p className="mt-0.5 text-sm text-neutral-500">
                    {platform.username}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                    {platform.followers} followers
                  </span>
                  <ExternalLink className="h-4 w-4 text-neutral-400 transition-colors group-hover:text-amber-500" />
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhilosophySection() {
  return (
    <section className="bg-neutral-950 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <FadeIn>
          <SectionHeading title="Philosophy" align="center" />
          <blockquote className="relative text-xl leading-relaxed text-neutral-300 before:absolute before:-left-4 before:-top-4 before:text-6xl before:text-amber-500/30 sm:text-2xl">
            {creator.philosophy}
          </blockquote>
          <p className="mt-8 text-sm font-medium text-neutral-500">
            — {creator.name}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
        <FadeIn>
          <SectionHeading
            title="Want to work together?"
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
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero />
      <CreatorStory />
      <JourneyTimeline />
      <SkillsSection />
      <AchievementsSection />
      <PlatformsSection />
      <PhilosophySection />
      <CTASection />
    </>
  );
}
