"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <section className="relative overflow-hidden bg-neutral-50 px-6 py-24 dark:bg-neutral-900 sm:px-8 lg:py-32">
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amber-500/5 blur-3xl dark:bg-amber-500/10" />

      <div className="relative mx-auto max-w-xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10">
            <Mail className="h-6 w-6 text-amber-500" />
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-black dark:text-white sm:text-4xl">
            Stay in the loop
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-black/50 dark:text-white/50">
            Get my latest stories, videos and creator insights delivered to your
            inbox.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 rounded-xl border border-black/10 bg-white px-5 py-3.5 text-sm text-black placeholder-black/30 outline-none transition-colors focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 dark:border-white/10 dark:bg-neutral-800 dark:text-white dark:placeholder-white/30 dark:focus:border-amber-500"
              />
              <button
                type="submit"
                className="rounded-xl bg-amber-500 px-6 py-3.5 text-sm font-medium text-black transition-colors hover:bg-amber-400"
              >
                Subscribe
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mt-8 flex items-center justify-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/10">
                <Check className="h-5 w-5 text-amber-500" />
              </div>
              <span className="text-lg font-medium text-black dark:text-white">
                You&apos;re on the list!
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
