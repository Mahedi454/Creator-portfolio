"use client";

import { useState, useRef, type FormEvent } from "react";
import {
  Video,
  Briefcase,
  PenTool,
  Smartphone,
  Mic,
  MonitorPlay,
  Camera,
  Music,
  Check,
  ArrowDown,
} from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import FAQ from "@/components/sections/FAQ";

const services = [
  {
    icon: Video,
    name: "Sponsored Content",
    description:
      "Authentic, high-production content that tells your brand's story.",
    deliverables: ["1-2 videos", "Social promotion", "Usage rights"],
  },
  {
    icon: Briefcase,
    name: "Brand Campaigns",
    description:
      "Full-funnel campaigns across platforms with real impact.",
    deliverables: ["Multi-platform strategy", "Content suite", "Analytics report"],
  },
  {
    icon: PenTool,
    name: "Product Reviews",
    description:
      "Honest, in-depth reviews that build trust with my audience.",
    deliverables: ["Dedicated video", "Honest assessment", "Follow-up coverage"],
  },
  {
    icon: Smartphone,
    name: "UGC Content",
    description:
      "Native, scroll-stopping content for paid ads and organic social.",
    deliverables: ["3-5 assets", "Platform-optimized", "Full buyout"],
  },
  {
    icon: Mic,
    name: "Event Appearances",
    description:
      "Speaking, hosting, and live audience engagement.",
    deliverables: ["Live appearance", "Social coverage", "Recap content"],
  },
  {
    icon: MonitorPlay,
    name: "YouTube Integrations",
    description:
      "Long-form integrations woven naturally into my content.",
    deliverables: ["Integrated segment", "Pre-roll option", "Comment pinned"],
  },
  {
    icon: Camera,
    name: "Instagram Campaigns",
    description:
      "Reels, stories, and feed content engineered for engagement.",
    deliverables: ["Reels + stories", "Feed post", "Swipe-up link"],
  },
  {
    icon: Music,
    name: "TikTok Campaigns",
    description:
      "Trend-native content for a younger, highly engaged audience.",
    deliverables: ["Custom sound", "3-5 videos", "Duet/stitch options"],
  },
];

const steps = [
  {
    number: "01",
    title: "Brief & Discovery",
    description: "We align on goals, audience, and creative direction.",
  },
  {
    number: "02",
    title: "Concept & Planning",
    description: "I develop the concept, script, and production plan.",
  },
  {
    number: "03",
    title: "Production & Delivery",
    description: "Filming, editing, and review with your team.",
  },
  {
    number: "04",
    title: "Performance & Insights",
    description: "Post-campaign analysis and reporting.",
  },
];

const campaignTypes = [
  "Sponsored Content",
  "Brand Campaign",
  "Product Review",
  "UGC",
  "Event Appearance",
  "YouTube Integration",
  "Instagram Campaign",
  "TikTok Campaign",
  "Other",
];

const platforms = ["YouTube", "Instagram", "TikTok", "Multiple", "Other"];

const budgetRanges = [
  "Under $5k",
  "$5k-$10k",
  "$10k-$25k",
  "$25k-$50k",
  "$50k+",
];

interface FormData {
  name: string;
  email: string;
  company: string;
  campaignType: string;
  platform: string;
  budget: string;
  deadline: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent" />
      <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <FadeIn>
          <Badge className="mb-6">Work With Me</Badge>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let&apos;s create something people remember.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400">
            I partner with brands and creators who value authentic storytelling
            and cinematic production. Every collaboration is a chance to make
            something that resonates.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="#contact" size="lg">
              Start a Project
              <ArrowDown className="h-4 w-4" />
            </Button>
            <Button href="/portfolio" variant="secondary" size="lg">
              View Portfolio
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            title="Services"
            subtitle="Flexible collaboration options tailored to your campaign goals."
          />
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <FadeIn key={service.name} delay={i * 0.05}>
              <div className="group h-full rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:border-amber-500/50 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-amber-500/50">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10 text-amber-500 transition-colors group-hover:bg-amber-500 group-hover:text-black">
                  <service.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-black dark:text-white">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-xs text-neutral-500"
                    >
                      <Check className="h-3 w-3 text-amber-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="bg-neutral-50 py-24 dark:bg-neutral-900 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            title="How It Works"
            subtitle="A streamlined process from first contact to final delivery."
            align="center"
          />
        </FadeIn>

        <div className="relative mt-16">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-700 md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <FadeIn
                key={step.number}
                direction={i % 2 === 0 ? "left" : "right"}
                delay={i * 0.1}
              >
                <div className="relative flex items-start gap-8 md:items-center">
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-amber-500 bg-white text-xl font-bold text-amber-600 dark:bg-neutral-900 md:absolute md:left-1/2 md:-translate-x-1/2">
                    {step.number}
                  </div>
                  <div className="ml-24 md:ml-0 md:w-[calc(50%-4rem)] md:pl-16">
                    <div
                      className={`rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-800 ${
                        i % 2 === 0 ? "md:mr-auto" : "md:ml-auto md:text-right"
                      }`}
                    >
                      <h3 className="text-lg font-semibold text-black dark:text-white">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CollaborationForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    campaignType: "",
    platform: "",
    budget: "",
    deadline: "",
    message: "",
  });

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Please enter your company or brand name.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please tell me about your project.";
    }

    return newErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsModalOpen(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        campaignType: "",
        platform: "",
        budget: "",
        deadline: "",
        message: "",
      });
      formRef.current?.reset();
    }
  };

  const inputClasses =
    "w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-black placeholder-neutral-400 transition-colors focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:placeholder-neutral-500 dark:focus:border-amber-500";

  const labelClasses =
    "mb-1.5 block text-sm font-medium text-black dark:text-white";

  const errorClasses = "mt-1 text-xs text-red-500";

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            title="Tell me about your project"
            subtitle="Fill out the form below and I'll get back to you within 2 business days."
            align="center"
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 space-y-6"
            noValidate
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClasses}>
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={inputClasses}
                  placeholder="Your name"
                />
                {errors.name && <p className={errorClasses}>{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className={labelClasses}>
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={inputClasses}
                  placeholder="you@example.com"
                />
                {errors.email && <p className={errorClasses}>{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="company" className={labelClasses}>
                  Company / Brand <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className={inputClasses}
                  placeholder="Your company or brand"
                />
                {errors.company && (
                  <p className={errorClasses}>{errors.company}</p>
                )}
              </div>

              <div>
                <label htmlFor="campaignType" className={labelClasses}>
                  Campaign Type
                </label>
                <select
                  id="campaignType"
                  name="campaignType"
                  value={formData.campaignType}
                  onChange={(e) =>
                    setFormData({ ...formData, campaignType: e.target.value })
                  }
                  className={inputClasses}
                >
                  <option value="">Select a type</option>
                  {campaignTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="platform" className={labelClasses}>
                  Platform
                </label>
                <select
                  id="platform"
                  name="platform"
                  value={formData.platform}
                  onChange={(e) =>
                    setFormData({ ...formData, platform: e.target.value })
                  }
                  className={inputClasses}
                >
                  <option value="">Select a platform</option>
                  {platforms.map((platform) => (
                    <option key={platform} value={platform}>
                      {platform}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="budget" className={labelClasses}>
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={(e) =>
                    setFormData({ ...formData, budget: e.target.value })
                  }
                  className={inputClasses}
                >
                  <option value="">Select a range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="deadline" className={labelClasses}>
                  Campaign Deadline
                </label>
                <input
                  type="date"
                  id="deadline"
                  name="deadline"
                  value={formData.deadline}
                  onChange={(e) =>
                    setFormData({ ...formData, deadline: e.target.value })
                  }
                  className={inputClasses}
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className={labelClasses}>
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={5}
                className={inputClasses}
                placeholder="Tell me about your project, goals, and timeline..."
              />
              {errors.message && (
                <p className={errorClasses}>{errors.message}</p>
              )}
            </div>

            <div className="flex justify-center pt-4">
              <Button type="submit" size="lg">
                Send Inquiry
              </Button>
            </div>
          </form>
        </FadeIn>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Request Received!"
      >
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/10">
            <Check className="h-8 w-8 text-amber-500" />
          </div>
          <p className="text-lg font-medium text-black dark:text-white">
            Thank you for reaching out!
          </p>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            I&apos;ll get back to you within 2 business days.
          </p>
          <p className="mt-4 text-xs text-neutral-500">
            This is a frontend demo. Connect your preferred backend/email
            service to receive submissions.
          </p>
          <div className="mt-6">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </Button>
          </div>
        </div>
      </Modal>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-neutral-950 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
        <FadeIn>
          <SectionHeading
            title="Prefer email?"
            subtitle="Sometimes a direct conversation is better than a form."
            align="center"
          />
          <div className="mt-8">
            <a
              href="mailto:hello@alexmorgan.co"
              className="text-lg font-medium text-amber-500 transition-colors hover:text-amber-400"
            >
              hello@alexmorgan.co
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default function WorkWithMePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <ProcessSection />
      <CollaborationForm />
      <FAQ />
      <FinalCTA />
    </>
  );
}
