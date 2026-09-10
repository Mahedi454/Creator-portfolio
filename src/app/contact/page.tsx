"use client";

import { useState, useRef, type FormEvent } from "react";
import {
  Mail,
  MapPin,
  Megaphone,
  Check,
  ArrowRight,
} from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import FAQ from "@/components/sections/FAQ";
import { creator } from "@/data/creator";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent" />
      <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <FadeIn>
          <Badge className="mb-6">Contact</Badge>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Get in Touch
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400">
            Questions, collaborations, or just want to say hello? I&apos;d love to
            hear from you.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function ContactInfoCards() {
  const cards = [
    {
      icon: Mail,
      title: "Email",
      value: creator.email,
      href: `mailto:${creator.email}`,
      isExternal: false,
    },
    {
      icon: MapPin,
      title: "Location",
      value: creator.location,
      href: undefined,
      isExternal: false,
    },
    {
      icon: Megaphone,
      title: "Collaboration",
      value: "Have a project in mind?",
      href: "/work-with-me",
      isExternal: false,
    },
  ];

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {cards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.08}>
              {card.href ? (
                <a
                  href={card.href}
                  target={card.isExternal ? "_blank" : undefined}
                  rel={card.isExternal ? "noopener noreferrer" : undefined}
                  className="group flex h-full flex-col items-center rounded-2xl border border-neutral-200 bg-white p-8 text-center transition-all duration-300 hover:border-amber-500/50 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-amber-500/50"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-amber-500/10 text-amber-500 transition-colors group-hover:bg-amber-500 group-hover:text-black">
                    <card.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-base font-medium text-black dark:text-white">
                    {card.value}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm text-amber-500 transition-colors group-hover:text-amber-400">
                    {card.title === "Collaboration" ? "Learn more" : "Send a message"}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </a>
              ) : (
                <div className="flex h-full flex-col items-center rounded-2xl border border-neutral-200 bg-white p-8 text-center dark:border-neutral-800 dark:bg-neutral-900">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
                    <card.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-base font-medium text-black dark:text-white">
                    {card.value}
                  </p>
                </div>
              )}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialLinks() {
  return (
    <section className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <FadeIn>
          <p className="mb-6 text-center text-sm font-medium text-neutral-500">
            Or find me on social
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {creator.platforms.map((platform, i) => (
              <FadeIn key={platform.name} delay={0.05 + i * 0.05}>
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-sm font-medium text-neutral-700 transition-all duration-300 hover:border-amber-500/50 hover:text-amber-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:border-amber-500/50 dark:hover:text-amber-400"
                >
                  {platform.name}
                  <span className="text-neutral-400">{platform.followers}</span>
                </a>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
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

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter a message.";
    }

    return newErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
    }
  };

  const inputClasses =
    "w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-black placeholder-neutral-400 transition-colors focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:placeholder-neutral-500 dark:focus:border-amber-500";

  const labelClasses =
    "mb-1.5 block text-sm font-medium text-black dark:text-white";

  const errorClasses = "mt-1 text-xs text-red-500";

  return (
    <section className="bg-neutral-50 py-24 dark:bg-neutral-900 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <FadeIn>
              <SectionHeading
                title="Send a Message"
                subtitle="Fill out the form and I'll get back to you within 2 business days."
              />
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-black dark:text-white">
                      Email
                    </h4>
                    <a
                      href={`mailto:${creator.email}`}
                      className="mt-0.5 text-sm text-neutral-600 transition-colors hover:text-amber-500 dark:text-neutral-400"
                    >
                      {creator.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-black dark:text-white">
                      Location
                    </h4>
                    <p className="mt-0.5 text-sm text-neutral-600 dark:text-neutral-400">
                      {creator.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
                    <Megaphone className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-black dark:text-white">
                      Business Inquiries
                    </h4>
                    <a
                      href="/work-with-me"
                      className="mt-0.5 text-sm text-neutral-600 transition-colors hover:text-amber-500 dark:text-neutral-400"
                    >
                      Visit the Work With Me page
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-3">
            <FadeIn delay={0.15}>
              {isSubmitted ? (
                <div className="flex h-full min-h-[400px] items-center justify-center rounded-2xl border border-neutral-200 bg-white p-12 text-center dark:border-neutral-700 dark:bg-neutral-800">
                  <div>
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/10">
                      <Check className="h-8 w-8 text-amber-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-black dark:text-white">
                      Message Sent!
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                      Thanks for reaching out. I&apos;ll get back to you within 2
                      business days.
                    </p>
                  </div>
                </div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-neutral-200 bg-white p-8 dark:border-neutral-700 dark:bg-neutral-800 sm:p-10"
                  noValidate
                >
                  <div className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className={labelClasses}>
                          Name <span className="text-red-500">*</span>
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
                        {errors.name && (
                          <p className={errorClasses}>{errors.name}</p>
                        )}
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
                        {errors.email && (
                          <p className={errorClasses}>{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className={labelClasses}>
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className={inputClasses}
                        placeholder="What's this about?"
                      />
                      {errors.subject && (
                        <p className={errorClasses}>{errors.subject}</p>
                      )}
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
                        rows={6}
                        className={inputClasses}
                        placeholder="Tell me what's on your mind..."
                      />
                      {errors.message && (
                        <p className={errorClasses}>{errors.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                      Send Message
                    </Button>
                  </div>
                </form>
              )}
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <>
      <Hero />
      <ContactInfoCards />
      <SocialLinks />
      <ContactSection />
      <FAQ />
    </>
  );
}
