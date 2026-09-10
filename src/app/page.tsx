"use client";

import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import FeaturedContent from "@/components/sections/FeaturedContent";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";
import SocialHub from "@/components/sections/SocialHub";
import Newsletter from "@/components/sections/Newsletter";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <FeaturedContent />
      <TestimonialCarousel />
      <SocialHub />
      <Newsletter />
      <FAQ />
    </>
  );
}
