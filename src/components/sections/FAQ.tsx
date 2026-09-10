"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    question: "Do you accept brand collaborations?",
    answer:
      "Yes! I collaborate with brands that align with my values and audience. Every partnership is approached with the same creative rigour as my personal projects — I believe branded content should be as compelling as anything else on my channel. If you're interested in working together, head over to the Work With Me page or reach out directly.",
  },
  {
    question: "What type of content do you create?",
    answer:
      "I specialize in cinematic video content, lifestyle photography, tech reviews, and travel documentaries. My work spans long-form YouTube films, short-form reels and shorts, social media campaigns, and brand storytelling projects. The throughline is always visual quality and authentic narrative.",
  },
  {
    question: "What platforms do you work on?",
    answer:
      "I create content across YouTube, Instagram, TikTok, and emerging platforms. Each platform gets tailored content — I don't just repost the same clip everywhere. My YouTube channel is home to long-form documentaries and deep dives, while Instagram and TikTok are where I experiment with shorter, more immediate storytelling.",
  },
  {
    question: "How long does a campaign take?",
    answer:
      "Typical campaigns run 2–8 weeks depending on scope. This includes pre-production, filming, post-production, and delivery. I work closely with brands during the brief phase to ensure alignment before any production begins, which saves time and produces better results.",
  },
  {
    question: "Do you create UGC?",
    answer:
      "Absolutely. UGC is a core part of my offering. I create authentic, high-quality user-generated-style content that feels native to each platform. Whether it's for paid ads, organic social, or website assets, I approach UGC with the same production value I bring to my personal work.",
  },
  {
    question: "How can I request your media kit?",
    answer:
      "You can download my media kit directly from the Media Kit page, or simply send me an email and I'll send it over. The kit includes audience demographics, engagement rates, past case studies, partnership options, and pricing frameworks.",
  },
] as const;

function FAQItem({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof faqs)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-black/5 dark:border-white/5">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-base font-medium text-black dark:text-white sm:text-lg">
          {item.question}
        </span>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/5 text-black/60 transition-colors dark:bg-white/5 dark:text-white/60">
          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-black/60 dark:text-white/60 sm:text-base">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white px-6 py-24 dark:bg-neutral-950 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about working with me."
          align="center"
        />

        <div className="mt-4">
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.question}
              item={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
