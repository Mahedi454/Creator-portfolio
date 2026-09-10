"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {!isSubmitted ? (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 bg-neutral-900 dark:bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 transition-colors"
          >
            Subscribe
          </button>
        </motion.form>
      ) : (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 text-green-400"
        >
          <div className="flex items-center justify-center w-8 h-8 bg-green-500/20 rounded-full">
            <Check className="w-5 h-5" />
          </div>
          <span className="font-medium">You&apos;re on the list!</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
