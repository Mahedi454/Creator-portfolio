export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export const testimonials: TestimonialItem[] = [
  {
    id: "t-01",
    quote: "Working with Alex was a masterclass in creative storytelling. They don't just make content — they build emotional narratives that audiences genuinely connect with. Our campaign exceeded every metric we set, but more importantly, it started a conversation that lasted months after the final post went live.",
    author: "Sarah Chen",
    role: "VP of Marketing",
    company: "Sony Mobile",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    id: "t-02",
    quote: "Alex has an extraordinary ability to find the human story in any brand message. They took our product campaign and turned it into a genuine cultural moment. The content didn't feel like advertising — it felt like discovery. That's the rarest skill in this industry.",
    author: "Marcus Rivera",
    role: "Director of Brand Storytelling",
    company: "Patagonia",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    id: "t-03",
    quote: "We've worked with dozens of creators, and Alex is the only one who made us feel like true collaborators rather than a line item on their content calendar. The final product — a film that was Emmy-nominated — exceeded our wildest expectations. They're the real deal.",
    author: "Jens Berggren",
    role: "Global Head of Creative",
    company: "Oatly",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
  {
    id: "t-04",
    quote: "What sets Alex apart is their refusal to take the easy route. When we suggested a straightforward product showcase, they pitched something bolder — a personal film shot in the Utah desert. It won a D&AD Pencil. That's the kind of creative courage you can't manufacture.",
    author: "Nina Kowalski",
    role: "Chief Marketing Officer",
    company: "Dell Technologies",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    id: "t-05",
    quote: "Alex doesn't just create content — they create cultural moments. The Less Is More campaign with Everlane became the most talked-about fashion initiative of the season because it challenged the very industry it was part of. That kind of authentic disruption is priceless.",
    author: "Kayla Thompson",
    role: "Creative Director",
    company: "Everlane",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
  },
];
