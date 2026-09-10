export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: "Behind The Scenes" | "Travel" | "Events" | "Lifestyle" | "Campaigns";
  width: number;
  height: number;
  caption: string;
}

export const gallery: GalleryItem[] = [
  {
    id: "g-01",
    src: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1200&q=80",
    alt: "Camera setup on a mountain ridge at sunrise",
    category: "Behind The Scenes",
    width: 1200,
    height: 800,
    caption: "Setting up for a sunrise shoot in the Swiss Alps. 4 AM starts are worth it when the light looks like this.",
  },
  {
    id: "g-02",
    src: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=1200&q=80",
    alt: "Dramatic cliff coastline with turquoise water",
    category: "Travel",
    width: 1200,
    height: 900,
    caption: "The Amalfi Coast from a angle most tourists never see. Worth the two-hour hike down.",
  },
  {
    id: "g-03",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
    alt: "Speaker on stage at a creator conference",
    category: "Events",
    width: 1200,
    height: 800,
    caption: "Taking the stage at VidCon 2024. Still gets my heart racing every time.",
  },
  {
    id: "g-04",
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80",
    alt: "Golden valley with mountains in the background",
    category: "Travel",
    width: 1200,
    height: 800,
    caption: "Yosemite Valley in autumn. No filter needed when nature provides its own color grading.",
  },
  {
    id: "g-05",
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80",
    alt: "Editing workspace with dual monitors and warm lighting",
    category: "Behind The Scenes",
    width: 1200,
    height: 800,
    caption: "Where the magic happens. My editing desk at 2 AM during the Patagonia post-production.",
  },
  {
    id: "g-06",
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80",
    alt: "Lakeside mountain reflection at sunset",
    category: "Travel",
    width: 1200,
    height: 800,
    caption: "Lake Bled, Slovenia. Arrived an hour before sunrise to get this shot with zero tourists in frame.",
  },
  {
    id: "g-07",
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&q=80",
    alt: "Crowded networking event with creative professionals",
    category: "Events",
    width: 1200,
    height: 800,
    caption: "Creator Economy Summit in New York. Met some of the most inspiring people in this industry.",
  },
  {
    id: "g-08",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    alt: "Mountain peaks above clouds at golden hour",
    category: "Travel",
    width: 1200,
    height: 900,
    caption: "Above the clouds in the Dolomites. This is why I wake up early. Every single time.",
  },
  {
    id: "g-09",
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
    alt: "Team brainstorming session with sticky notes",
    category: "Behind The Scenes",
    width: 1200,
    height: 800,
    caption: "Pre-production meeting for the Oatly fermentation series. Whiteboards are still the best brainstorming tool.",
  },
  {
    id: "g-10",
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80",
    alt: "Artfully plated dish at a restaurant",
    category: "Lifestyle",
    width: 1200,
    height: 800,
    caption: "Meal prep day. My cooking skills have improved dramatically since I started filming them.",
  },
  {
    id: "g-11",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    alt: "Analytics dashboard showing content performance",
    category: "Campaigns",
    width: 1200,
    height: 800,
    caption: "The moment the Sony Xperia campaign hit 10 million views. Numbers don't tell the whole story, but they tell part of it.",
  },
  {
    id: "g-12",
    src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80",
    alt: "Kayak on a calm lake surrounded by mountains",
    category: "Travel",
    width: 1200,
    height: 800,
    caption: "New Zealand, day 12. At this point, I'd stopped counting the jaw-dropping views.",
  },
  {
    id: "g-13",
    src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=80",
    alt: "Close-up of camera lens with bokeh lights",
    category: "Behind The Scenes",
    width: 1200,
    height: 1200,
    caption: "The Sony 35mm f/1.4. My desert island lens. If I could only carry one, this is it.",
  },
  {
    id: "g-14",
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80",
    alt: "Starry night sky over snowy mountains",
    category: "Travel",
    width: 1200,
    height: 800,
    caption: "Milky Way over the Swiss Alps. 25-second exposure, ISO 3200, and a lot of patience.",
  },
  {
    id: "g-15",
    src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&q=80",
    alt: "Brand collaboration meeting in a modern office",
    category: "Campaigns",
    width: 1200,
    height: 800,
    caption: "First creative meeting with the Dell team. The energy in the room when the concept clicked was electric.",
  },
  {
    id: "g-16",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    alt: "Tropical beach at sunset with palm trees",
    category: "Lifestyle",
    width: 1200,
    height: 800,
    caption: "Bali, sunset. Sometimes the best content is the moment you put the camera down and just watch.",
  },
];

export const galleryCategories = ["Behind The Scenes", "Travel", "Events", "Lifestyle", "Campaigns"] as const;

export const getGalleryByCategory = (category: GalleryItem["category"]): GalleryItem[] =>
  gallery.filter((item) => item.category === category);
