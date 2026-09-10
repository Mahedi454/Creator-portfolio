import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Alex Morgan — Content Creator & Digital Storyteller",
    template: "%s | Alex Morgan",
  },
  description:
    "Alex Morgan is an award-winning content creator and filmmaker crafting cinematic stories around technology, lifestyle, travel and culture.",
  keywords: [
    "content creator",
    "filmmaker",
    "digital storyteller",
    "travel",
    "lifestyle",
    "technology",
    "brand collaborations",
  ],
  authors: [{ name: "Alex Morgan" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Alex Morgan",
    title: "Alex Morgan — Content Creator & Digital Storyteller",
    description:
      "Crafting cinematic stories people remember. Content creator, filmmaker, and digital storyteller based in Los Angeles.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Alex Morgan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Morgan — Content Creator & Digital Storyteller",
    description:
      "Crafting cinematic stories people remember. Content creator, filmmaker, and digital storyteller based in Los Angeles.",
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <head>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem("theme");
                  var theme = stored === "light" || stored === "dark"
                    ? stored
                    : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
                  var root = document.documentElement;
                  if (theme === "dark") root.classList.add("dark");
                  else root.classList.remove("dark");
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full bg-white text-black antialiased dark:bg-neutral-950 dark:text-white">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
