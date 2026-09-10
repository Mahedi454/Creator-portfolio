import type { Metadata } from "next";
import ContentPageClient from "./ContentPageClient";

export const metadata: Metadata = {
  title: "Content Library",
  description:
    "Explore Alex Morgan's full library of content across YouTube, Instagram, TikTok, Shorts, and Reels.",
};

export default function ContentPage() {
  return <ContentPageClient />;
}
