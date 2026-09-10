import type { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on creativity, storytelling, and the creator life from Alex Morgan.",
};

export default function BlogPage() {
  return <BlogPageClient />;
}
