export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  type: "upcoming" | "past";
  registrationUrl: string;
  gallery: string[];
}

export const events: Event[] = [
  {
    id: "e-01",
    title: "Creator Stories Live: Los Angeles",
    description: "An evening of live storytelling, filmmaking workshops, and community connection. Join Alex for an intimate event featuring live Q&A, a screening of unreleased footage, and a hands-on workshop on cinematic storytelling techniques. Limited to 150 attendees for an intimate experience.",
    date: "2026-11-15",
    location: "The Mayan Theater, Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    type: "upcoming",
    registrationUrl: "#",
    gallery: [],
  },
  {
    id: "e-02",
    title: "VidCon 2026 Keynote & Workshop",
    description: "Alex delivers the opening keynote on the future of authentic storytelling in a saturated content landscape, followed by a 90-minute hands-on workshop on building a sustainable creative career. The workshop includes live editing demonstrations and portfolio reviews for select attendees.",
    date: "2026-12-08",
    location: "Anaheim Convention Center, Anaheim, CA",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
    type: "upcoming",
    registrationUrl: "#",
    gallery: [],
  },
  {
    id: "e-03",
    title: "Creator Summit 2025",
    description: "A two-day conference bringing together 500+ content creators, brand partners, and industry leaders. Alex hosted a masterclass on documentary-style branded content and participated in a panel on ethical storytelling in travel media.",
    date: "2025-06-20",
    location: "Brooklyn Navy Yard, New York, NY",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
    type: "past",
    registrationUrl: "#",
    gallery: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
      "https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=800&q=80",
      "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&q=80",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80",
    ],
  },
  {
    id: "e-04",
    title: "Patagonia Film Premiere & Screening",
    description: "The world premiere of the Patagonia documentary at the Egyptian Theatre in Hollywood. A sold-out screening followed by a panel discussion with the conservation team featured in the film and a reception celebrating the project's impact on environmental awareness.",
    date: "2025-10-05",
    location: "Egyptian Theatre, Hollywood, CA",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
    type: "past",
    registrationUrl: "#",
    gallery: [
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80",
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&q=80",
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&q=80",
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
    ],
  },
];

export const upcomingEvents = events.filter((event) => event.type === "upcoming");
export const pastEvents = events.filter((event) => event.type === "past");
