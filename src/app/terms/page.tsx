import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for Alex Morgan's website. Please review these terms before using the site or engaging in collaborations.",
};

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-neutral-500">Last updated: September 10, 2026</p>

        <div className="prose-neutral mt-12 space-y-12">
          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white">
              Agreement to Terms
            </h2>
            <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
              By accessing or using this website, you agree to be bound by these
              Terms of Service. If you do not agree with any part of these terms,
              please discontinue use of the site immediately. We reserve the
              right to update these terms at any time, and continued use of the
              site constitutes acceptance of any changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white">
              Content Ownership
            </h2>
            <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
              All content published on this website — including but not limited to
              articles, photographs, videos, graphics, and audio — is owned by
              Alex Morgan or used with appropriate licenses. You are welcome to
              share links to our content, but you may not reproduce, distribute,
              or create derivative works without prior written permission.
            </p>
            <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
              User-submitted content, such as comments or messages, remains your
              intellectual property. By submitting content, you grant us a
              non-exclusive license to display and moderate it on the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white">
              Intellectual Property
            </h2>
            <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
              The trademarks, logos, and brand elements used on this site are
              proprietary to Alex Morgan. Unauthorized use of any branding,
              including impersonation or misleading association, is strictly
              prohibited. Requests for licensing or collaborative use of
              intellectual property should be directed via the{" "}
              <Link
                href="/work-with-me"
                className="font-medium text-amber-500 underline underline-offset-2 hover:text-amber-400"
              >
                Work With Me
              </Link>{" "}
              page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white">
              Prohibited Use
            </h2>
            <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
              You agree not to use this website for any unlawful or prohibited
              purpose, including but not limited to:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-neutral-600 dark:text-neutral-400">
              <li>Scraping, crawling, or using automated tools to extract content.</li>
              <li>Attempting to gain unauthorized access to any part of the site.</li>
              <li>Uploading malicious code or interfering with site functionality.</li>
              <li>Impersonating Alex Morgan or any associated brand.</li>
              <li>Using content from this site for spam, phishing, or deceptive purposes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white">
              Brand Collaboration Terms
            </h2>
            <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
              All brand partnerships and sponsored content are governed by
              separate written agreements. Posting or publishing sponsored content
              does not constitute an endorsement of any product or service
              beyond what is explicitly stated in the collaboration. Sponsors
              must not alter, misrepresent, or misuse delivered content without
              written consent. Deliverables, timelines, and usage rights are
              defined in each individual collaboration contract.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white">
              Limitation of Liability
            </h2>
            <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
              This website is provided &ldquo;as is&rdquo; without warranties of
              any kind. We make no guarantees regarding the accuracy,
              completeness, or availability of the content. To the fullest extent
              permitted by law, Alex Morgan shall not be liable for any damages
              arising from your use of or inability to use this website,
              including indirect, incidental, or consequential damages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white">
              Changes to Terms
            </h2>
            <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
              We may revise these Terms of Service from time to time. The
              &ldquo;Last updated&rdquo; date at the top reflects the most recent
              revision. We encourage you to review this page periodically. Your
              continued use of the site after changes are posted constitutes your
              acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white">
              Contact
            </h2>
            <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
              For questions about these Terms of Service, please contact us at{" "}
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
