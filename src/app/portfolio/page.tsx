import type { Metadata } from "next";
import PortfolioPageClient from "./PortfolioPageClient";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "A curated collection of brand collaborations and creative projects by Alex Morgan.",
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
