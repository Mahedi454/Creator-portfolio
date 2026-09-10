"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/content", label: "Content" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/gallery", label: "Gallery" },
  { href: "/work-with-me", label: "Work With Me" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <span className="text-lg lg:text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
                ALEX MORGAN
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-amber-500"
                        : "text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500"
                        layoutId="activeTab"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Right Section */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <Link
                href="/work-with-me"
                className="px-5 py-2.5 text-sm font-medium bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors"
              >
                Let&apos;s Collaborate
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-600 dark:text-neutral-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              className="absolute top-0 left-0 right-0 bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between mb-6">
                  <Link href="/" className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white">
                    ALEX MORGAN
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-neutral-600 dark:text-neutral-300"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="space-y-1">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={closeMobileMenu}
                        className={`block py-3 px-4 text-base font-medium rounded-lg transition-colors ${
                          isActive
                            ? "text-amber-500 bg-amber-500/10"
                            : "text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </nav>

                <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-800">
                  <div className="flex items-center justify-between mb-4">
                    <button
                      onClick={toggleTheme}
                      className="flex items-center gap-2 px-4 py-2 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
                    >
                      {theme === "dark" ? (
                        <>
                          <Sun className="w-5 h-5" />
                          <span>Light Mode</span>
                        </>
                      ) : (
                        <>
                          <Moon className="w-5 h-5" />
                          <span>Dark Mode</span>
                        </>
                      )}
                    </button>
                  </div>

                  <Link
                    href="/work-with-me"
                    className="block w-full px-5 py-3 text-center text-sm font-medium bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors"
                  >
                    Let&apos;s Collaborate
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
