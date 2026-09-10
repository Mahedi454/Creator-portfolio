import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Alex Morgan's website. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-amber-500"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-white sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-neutral-500">Last updated: September 10, 2026</p>

        <div className="prose-neutral mt-12 space-y-12">
          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white">
              Overview
            </h2>
            <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
              This Privacy Policy describes how Alex Morgan (&ldquo;we,&rdquo;
              &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and
              discloses information when you visit our website, interact with our
              content, or engage with us through other channels. By using this
              website, you agree to the practices described here.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white">
              Information We Collect
            </h2>
            <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
              We may collect the following types of information:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-neutral-600 dark:text-neutral-400">
              <li>
                <span className="font-medium text-black dark:text-white">
                  Contact Information
                </span>{" "}
                — such as your name and email address when you submit a contact
                form, subscribe to a newsletter, or reach out for business
                inquiries.
              </li>
              <li>
                <span className="font-medium text-black dark:text-white">
                  Usage Data
                </span>{" "}
                — including pages visited, time spent on the site, referral
                sources, and general browser information collected automatically
                through analytics tools.
              </li>
              <li>
                <span className="font-medium text-black dark:text-white">
                  Device Information
                </span>{" "}
                — such as browser type, operating system, and screen resolution,
                used to optimize your viewing experience.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white">
              How We Use Information
            </h2>
            <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
              We use the information we collect for the following purposes:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-neutral-600 dark:text-neutral-400">
              <li>To respond to your inquiries and communicate with you.</li>
              <li>To improve the website and user experience.</li>
              <li>To analyze traffic patterns and understand which content resonates with our audience.</li>
              <li>To send occasional updates or newsletters if you have opted in.</li>
              <li>To fulfill brand collaboration obligations where applicable.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white">
              Cookies
            </h2>
            <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
              This website may use cookies and similar tracking technologies to
              enhance your browsing experience. Cookies are small data files
              stored on your device. They help us understand how visitors
              interact with our site and allow us to remember preferences. You can
              control cookie settings through your browser. Disabling cookies may
              affect certain functionality on the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white">
              Third-Party Links
            </h2>
            <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
              Our website may contain links to third-party platforms such as
              YouTube, Instagram, TikTok, and other social media sites. We are
              not responsible for the privacy practices of these external sites.
              We encourage you to review their privacy policies before providing
              any personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white">
              Data Security
            </h2>
            <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
              We take reasonable measures to protect the personal information
              you share with us. However, no method of transmission over the
              Internet or electronic storage is completely secure. While we
              strive to use commercially acceptable means to safeguard your data,
              we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white">
              Your Rights
            </h2>
            <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
              Depending on your location, you may have the right to:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-neutral-600 dark:text-neutral-400">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction or deletion of your personal data.</li>
              <li>Opt out of marketing communications at any time.</li>
              <li>Withdraw consent where processing is based on your consent.</li>
            </ul>
            <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
              To exercise any of these rights, please contact us using the
              information below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white">
              Contact
            </h2>
            <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
              If you have any questions about this Privacy Policy or how we
              handle your data, you can reach us at{" "}
              <a
                href="mailto:hello@alexmorgan.com"
                className="font-medium text-amber-500 underline underline-offset-2 hover:text-amber-400"
              >
                hello@alexmorgan.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
