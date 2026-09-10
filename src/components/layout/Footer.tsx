import Link from "next/link";
import Image from "next/image";
import { Video, Camera, Music, MessageSquare, Briefcase, Code } from "lucide-react";
import NewsletterForm from "./NewsletterForm";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/content", label: "Content" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/gallery", label: "Gallery" },
];

const contentLinks = [
  { href: "https://youtube.com", label: "YouTube", external: true },
  { href: "https://instagram.com", label: "Instagram", external: true },
  { href: "https://tiktok.com", label: "TikTok", external: true },
  { href: "https://twitter.com", label: "Twitter", external: true },
  { href: "https://linkedin.com", label: "LinkedIn", external: true },
];

const businessLinks = [
  { href: "/work-with-me", label: "Work With Me" },
  { href: "/media-kit", label: "Media Kit" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

const socialLinks = [
  { href: "https://youtube.com", icon: Video, label: "YouTube" },
  { href: "https://instagram.com", icon: Camera, label: "Instagram" },
  { href: "https://tiktok.com", icon: Music, label: "TikTok" },
  { href: "https://twitter.com", icon: MessageSquare, label: "Twitter" },
  { href: "https://linkedin.com", icon: Briefcase, label: "LinkedIn" },
  { href: "https://github.com", icon: Code, label: "GitHub" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-white">
      {/* CTA Section */}
      <div className="border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Have a story worth telling?
            </h2>
            <p className="text-lg text-neutral-400 mb-8 max-w-2xl mx-auto">
              Let&apos;s collaborate and create something extraordinary together.
            </p>
            <Link
              href="/work-with-me"
              className="inline-flex items-center px-8 py-4 text-base font-medium bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors"
            >
              Let&apos;s Work Together
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-bold tracking-tight">ALEX MORGAN</span>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Content creator, storyteller, and digital nomad. Crafting meaningful
              connections through visual narratives and authentic experiences.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-300 mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Content Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-300 mb-4">
              Content
            </h3>
            <ul className="space-y-3">
              {contentLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-300 mb-4">
              Business
            </h3>
            <ul className="space-y-3">
              {businessLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-12 border-t border-neutral-800">
          <div className="max-w-xl">
            <h3 className="text-lg font-semibold mb-2">Stay in the loop</h3>
            <p className="text-neutral-400 text-sm mb-4">
              Get the latest updates, behind-the-scenes content, and exclusive insights
              delivered straight to your inbox.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="flex flex-wrap items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
            <p className="text-center text-sm text-neutral-500 md:text-left">
              &copy; {currentYear} Alex Morgan. All rights reserved.
            </p>
            <div className="flex items-center justify-center gap-6">
              <Link
                href="/privacy"
                className="text-neutral-500 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-neutral-500 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
            <a
              href="https://shei-it.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 md:justify-end"
              aria-label="SHEI IT"
            >
              <Image
                src="/Shei%20IT%20Logo.png"
                alt="SHEI IT"
                width={24}
                height={24}
                className="h-5 w-auto"
              />
              <span className="text-sm font-semibold text-neutral-400 transition-colors hover:text-white">
                SHEI IT
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
