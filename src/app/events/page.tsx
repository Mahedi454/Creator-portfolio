"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Calendar,
  Check,
  Play,
  ArrowRight,
} from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { formatDate } from "@/lib/utils";
import { upcomingEvents, pastEvents } from "@/data/events";
import type { Event } from "@/data/events";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent" />
      <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <FadeIn>
          <Badge className="mb-6">Events</Badge>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Events
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400">
            Live shows, talks, and meetups. Come say hello at an event near you.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function UpcomingEvents() {
  const [modalEvent, setModalEvent] = useState<Event | null>(null);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegisterSuccess = () => {
    setIsRegistered(true);
  };

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn>
          <Badge variant="accent" className="mb-4">
            Happening Soon
          </Badge>
          <SectionHeading
            title="Upcoming Events"
            subtitle="Secure your spot at an event near you."
          />
        </FadeIn>

        <div className="mt-4 space-y-8">
          {upcomingEvents.map((event, i) => (
            <FadeIn key={event.id} delay={i * 0.1}>
              <div className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900 dark:hover:shadow-2xl dark:hover:shadow-neutral-900/50 lg:grid lg:grid-cols-2">
                <div className="relative aspect-[16/9] overflow-hidden lg:aspect-auto">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute left-4 top-4">
                    <Badge variant="accent">Upcoming</Badge>
                  </div>
                </div>

                <div className="flex flex-col justify-center p-8 lg:p-10">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-amber-500" />
                      {formatDate(event.date)}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-amber-500" />
                      {event.location}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-black dark:text-white">
                    {event.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {event.description}
                  </p>

                  <div className="mt-8">
                    <Button
                      onClick={() => {
                        setModalEvent(event);
                        setIsRegistered(false);
                      }}
                    >
                      Register Now
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <RegistrationModal
        event={modalEvent}
        onClose={() => setModalEvent(null)}
        isRegistered={isRegistered}
        onRegister={handleRegisterSuccess}
      />
    </section>
  );
}

function PastEvents() {
  return (
    <section className="bg-neutral-50 py-24 dark:bg-neutral-900 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn>
          <Badge variant="default" className="mb-4">
            Archive
          </Badge>
          <SectionHeading
            title="Past Events"
            subtitle="A look back at events that brought the community together."
          />
        </FadeIn>

        <div className="mt-4 space-y-12">
          {pastEvents.map((event, i) => (
            <FadeIn key={event.id} delay={i * 0.1}>
              <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-800">
                <div className="lg:grid lg:grid-cols-2">
                  <div className="relative aspect-[16/9] overflow-hidden lg:aspect-auto">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>

                  <div className="flex flex-col justify-center p-8 lg:p-10">
                    <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 text-amber-500" />
                        {formatDate(event.date)}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-amber-500" />
                        {event.location}
                      </span>
                    </div>

                    <h3 className="mt-4 text-2xl font-semibold tracking-tight text-black dark:text-white">
                      {event.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                      {event.description}
                    </p>

                    <div className="mt-8">
                      <Button variant="secondary">
                        <Play className="h-4 w-4" />
                        Watch Recap
                      </Button>
                    </div>
                  </div>
                </div>

                {event.gallery.length > 0 && (
                  <div className="border-t border-neutral-100 dark:border-neutral-700">
                    <div className="grid grid-cols-3 gap-1 p-1 sm:grid-cols-4 sm:gap-1.5 sm:p-1.5">
                      {event.gallery.slice(0, 4).map((img, gi) => (
                        <div
                          key={gi}
                          className="relative aspect-[4/3] overflow-hidden rounded-lg"
                        >
                          <Image
                            src={img}
                            alt={`${event.title} gallery ${gi + 1}`}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-105"
                            sizes="25vw"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function RegistrationModal({
  event,
  onClose,
  isRegistered,
  onRegister,
}: {
  event: Event | null;
  onClose: () => void;
  isRegistered: boolean;
  onRegister: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const validateEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};

    if (!name.trim()) {
      newErrors.name = "Please enter your name.";
    }
    if (!email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onRegister();
    }
  };

  const handleClose = () => {
    setName("");
    setEmail("");
    setErrors({});
    onClose();
  };

  const inputClasses =
    "w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-black placeholder-neutral-400 transition-colors focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white dark:placeholder-neutral-500 dark:focus:border-amber-500";

  return (
    <Modal isOpen={!!event} onClose={handleClose} title={event?.title}>
      {event && (
        <div>
          {isRegistered ? (
            <div className="py-4 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/10">
                <Check className="h-8 w-8 text-amber-500" />
              </div>
              <p className="text-lg font-medium text-black dark:text-white">
                You&apos;re on the list!
              </p>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                We&apos;ll send you details about <strong>{event.title}</strong> as
                the event approaches.
              </p>
              <div className="mt-6">
                <Button variant="secondary" size="sm" onClick={handleClose}>
                  Close
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-6 flex items-center gap-3 text-sm text-neutral-500">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-amber-500" />
                  {formatDate(event.date)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-amber-500" />
                  {event.location}
                </span>
              </div>

              <p className="mb-6 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {event.description}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label
                    htmlFor="reg-name"
                    className="mb-1.5 block text-sm font-medium text-black dark:text-white"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="reg-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClasses}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="reg-email"
                    className="mb-1.5 block text-sm font-medium text-black dark:text-white"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="reg-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClasses}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>

                <div className="pt-2">
                  <Button type="submit" className="w-full">
                    Register for {event.title.split(":")[0] || event.title}
                  </Button>
                </div>
              </form>

              <p className="mt-4 text-center text-xs text-neutral-400">
                This is a frontend demo. No data is sent.
              </p>
            </div>
          )}
        </div>
      )}
    </Modal>
  );
}

export default function EventsPage() {
  return (
    <>
      <Hero />
      <UpcomingEvents />
      <PastEvents />
    </>
  );
}
