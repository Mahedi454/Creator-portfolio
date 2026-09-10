export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface PortfolioProject {
  id: string;
  slug: string;
  brand: string;
  title: string;
  category: "Fashion" | "Technology" | "Travel" | "Lifestyle" | "Food";
  image: string;
  description: string;
  challenge: string;
  creativeApproach: string;
  deliverables: string[];
  results: string[];
  testimonial: Testimonial;
  year: string;
  tags: string[];
}

export const portfolio: PortfolioProject[] = [
  {
    id: "p-01",
    slug: "reimagine-tomorrow-xperia",
    brand: "Sony Xperia",
    title: "Reimagine Tomorrow",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    description: "A 4-part cinematic series exploring how mobile filmmaking is democratizing visual storytelling. Shot entirely on the Sony Xperia 1 V, the series followed four emerging filmmakers across four continents.",
    challenge: "Sony wanted to position the Xperia as a serious filmmaking tool, not just a phone with a good camera. The challenge was proving this to a skeptical creator community that equates quality with bulky, expensive gear.",
    creativeApproach: "Instead of spec-sheet marketing, we focused on story. Each filmmaker had a personal project they'd been putting off because they couldn't afford proper equipment. We gave them the Xperia and watched what happened. The results spoke louder than any feature list.",
    deliverables: [
      "4 x 12-minute documentary episodes",
      "16 x short-form behind-the-scenes clips",
      "Photography series from each location",
      "Instagram and TikTok campaign content",
      "Live Q&A events with featured filmmakers",
    ],
    results: [
      "12.4M total views across platforms",
      "340% increase in Xperia cinema-mode feature awareness",
      "Featured at Mobile World Congress 2024",
      "89% positive sentiment in creator community",
      "Shortlisted for Clio Entertainment Awards",
    ],
    testimonial: {
      quote: "Alex didn't just make a campaign — they told a story that genuinely moved people. The series redefined what we thought was possible with our product narrative.",
      author: "Sarah Chen",
      role: "VP of Marketing, Sony Mobile",
    },
    year: "2024",
    tags: ["technology", "filmmaking", "mobile", "documentary", "series"],
  },
  {
    id: "p-02",
    slug: "wanderlust-collection-patagonia",
    brand: "Patagonia",
    title: "Wanderlust Collection",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    description: "A visual storytelling project for Patagonia's sustainable travel collection, documenting the intersection of outdoor adventure and environmental responsibility across three national parks.",
    challenge: "Patagonia needed content that felt authentic to their brand values while reaching a younger, digital-first audience. Generic outdoor lifestyle content wouldn't cut it — it needed substance and a genuine point of view.",
    creativeApproach: "We embedded with park rangers and conservationists, using their daily work as the narrative backbone. Every piece of gear shown was actually used during real expeditions. No styling, no staging — just honest documentation of people doing meaningful work in extraordinary places.",
    deliverables: [
      "3 x 15-minute mini-documentaries",
      "Social media campaign (40+ pieces of content)",
      "Email marketing visuals and copy",
      "Brand ambassador content partnership",
      "On-location photography portfolio",
    ],
    results: [
      "8.7M impressions across social channels",
      "42% engagement rate above Patagonia's average",
      "Directly attributed to 18% sales lift in travel collection",
      "Won a Webby Award for Best Branded Content",
      "Ongoing partnership expanded to include 3 additional projects",
    ],
    testimonial: {
      quote: "Alex understood that Patagonia's audience doesn't want to be sold to — they want to be inspired. The content felt like a love letter to the places we're trying to protect.",
      author: "Marcus Rivera",
      role: "Director of Brand storytelling, Patagonia",
    },
    year: "2023",
    tags: ["travel", "sustainability", "outdoor", "documentary", "environment"],
  },
  {
    id: "p-03",
    slug: "connected-kitchen-smart-home",
    brand: "Samsung SmartThings",
    title: "The Connected Kitchen",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    description: "A lifestyle series showing how smart home technology integrates seamlessly into daily life, told through the lens of five real families across different cultures and living situations.",
    challenge: "Smart home technology often feels cold and clinical in marketing. Samsung needed content that showed genuine human warmth while demonstrating product capabilities in real-world settings.",
    creativeApproach: "We chose families over influencers. Each episode was built around a meal — cooking together is universal, and it naturally showcases how technology can reduce friction in daily life. We spent full days with each family, capturing not just the tech moments but the laughter, the mess, and the real conversations around the table.",
    deliverables: [
      "5 x 8-minute YouTube episodes",
      "30 x vertical short-form clips",
      "Recipe collaboration content",
      "Interactive kitchen tour experiences",
      "Behind-the-scenes podcast episode",
    ],
    results: [
      "6.2M total views",
      "3.8% click-through rate (industry average: 0.9%)",
      "45K new SmartThings app installations attributed to campaign",
      "Featured in Fast Company's Innovation by Design awards",
      "Extended to a second season with new family stories",
    ],
    testimonial: {
      quote: "We've tried influencer campaigns before, but this was different. Alex made technology feel human. The families in the series became real advocates for our brand, not just paid endorsers.",
      author: "David Park",
      role: "Head of Content, Samsung SmartThings",
    },
    year: "2024",
    tags: ["technology", "lifestyle", "smart home", "family", "food"],
  },
  {
    id: "p-04",
    slug: "less-is-more-capsule",
    brand: "Everlane",
    title: "Less Is More",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    description: "A minimalist fashion campaign built around the idea that owning fewer, better things leads to a richer life. Alex documented a 30-day experiment wearing only 15 pieces from Everlane's essential collection.",
    challenge: "Everlane wanted to stand apart from fast-fashion noise during peak shopping season. The brief was counterintuitive: convince people to buy less, but buy better. A campaign about restraint in a season built on excess.",
    creativeApproach: "Complete transparency. We documented the entire 30-day experience — the moments of doubt, the outfit repetitions, the surprising freedom of having fewer choices. We published daily on social media with honest captions about what minimalism actually feels like when you're living it, not just posting about it.",
    deliverables: [
      "1 x 10-minute YouTube documentary",
      "30 x daily social media posts (real-time documentation)",
      "Photography series of 15 outfits in context",
      "Email campaign with personal essays",
      "Pop-up exhibition in Los Angeles",
    ],
    results: [
      "14.1M social media impressions",
      "Best-performing Everlane campaign of 2023",
      "38% increase in essential collection sales",
      "Earned media coverage in Vogue, GQ, and The Cut",
      "Campaign concept licensed by two other brands",
    ],
    testimonial: {
      quote: "Alex took a risk with this campaign — being honest about the complexity of minimalism in a hyper-consumer culture. That honesty is exactly why it worked. It felt real.",
      author: "Kayla Thompson",
      role: "Creative Director, Everlane",
    },
    year: "2023",
    tags: ["fashion", "minimalism", "sustainability", "personal experiment"],
  },
  {
    id: "p-05",
    slug: "fermented-world-culture",
    brand: "Oatly",
    title: "The Fermented World",
    category: "Food",
    image: "https://images.unsplash.com/photo-1495195134817-aeb325a55b65?w=800&q=80",
    description: "A 6-part culinary documentary exploring fermentation traditions around the world — from Korean kimchi to Ethiopian injera — and how these ancient practices connect to modern plant-based eating.",
    challenge: "Oatly wanted to position itself within a broader cultural conversation about food, not just sell oat milk. They needed content that was genuinely educational and culturally respectful, while still being entertaining and shareable.",
    creativeApproach: "We approached fermentation as a cultural bridge. Each episode visited a different country, partnering with local food historians and home cooks — not restaurant chefs. The focus was on tradition, community, and the simple magic of transformation. Oatly's product appeared naturally within the narrative, never forced.",
    deliverables: [
      "6 x 14-minute YouTube episodes",
      "Podcast companion series (6 episodes)",
      "Recipe cards and fermentation guides",
      "Social media series with fermentation tips",
      "Festival booth activations at 3 food events",
    ],
    results: [
      "9.3M total views across platforms",
      "Emmy nomination for Outstanding Science and Technology Documentary",
      "47% increase in brand favorability among 25-34 demographic",
      "312K podcast downloads in first month",
      "Partnership extended for Season 2 covering 6 additional countries",
    ],
    testimonial: {
      quote: "Alex turned a brand partnership into genuine cultural content. We've never had a project that made people think, laugh, and learn in equal measure. The Emmy nomination says it all.",
      author: "Jens Berggren",
      role: "Global Head of Creative, Oatly",
    },
    year: "2024",
    tags: ["food", "culture", "documentary", "fermentation", "plant-based"],
  },
  {
    id: "p-06",
    slug: "desert-solitude-xps",
    brand: "Dell XPS",
    title: "Desert Solitude",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80",
    description: "A personal project turned brand partnership — Alex took the Dell XPS 16 into the Utah desert for two weeks to create a feature-length film about solitude, creativity, and the tools that enable both.",
    challenge: "Dell wanted to reach the creator audience with an authentic message about their premium laptop line. Previous tech campaigns felt too corporate for the creator community. They needed a story, not a spec sheet.",
    creativeApproach: "Alex proposed an unconventional approach: take the laptop somewhere extreme and let the environment dictate the story. We filmed in complete isolation — no crew, no schedule, no script. The laptop became a character in the story, not just a tool. Every challenge (battery life in extreme heat, file management in the field, editing on the go) was documented honestly.",
    deliverables: [
      "1 x 32-minute feature film",
      "3 x 5-minute making-of episodes",
      "Photo essay and journal excerpts",
      "Social media teaser campaign",
      "Screening events in 5 cities",
    ],
    results: [
      "7.8M total views",
      "Film selected for three international film festivals",
      "92% of viewers rated content as 'highly authentic' in post-campaign survey",
      "Dell XPS creator edition sales increased 28% during campaign period",
      "Project won a D&AD Graphite Pencil for branded filmmaking",
    ],
    testimonial: {
      quote: "This wasn't a laptop commercial. It was a film that happened to feature our product in the most natural, unforced way possible. Alex proved that brand content can be art.",
      author: "Nina Kowalski",
      role: "Chief Marketing Officer, Dell Technologies",
    },
    year: "2024",
    tags: ["technology", "solitude", "filmmaking", "personal project", "desert"],
  },
];

export const portfolioCategories = ["Fashion", "Technology", "Travel", "Lifestyle", "Food"] as const;

export const getPortfolioByCategory = (category: PortfolioProject["category"]): PortfolioProject[] =>
  portfolio.filter((project) => project.category === category);

export const getPortfolioBySlug = (slug: string): PortfolioProject | undefined =>
  portfolio.find((project) => project.slug === slug);
