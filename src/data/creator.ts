export interface Achievement {
  id: string;
  title: string;
  description: string;
  year: string;
}

export interface Skill {
  id: string;
  name: string;
  level: number;
  category: string;
}

export interface JourneyEvent {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface Platform {
  name: string;
  username: string;
  followers: string;
  url: string;
}

export interface CreatorProfile {
  name: string;
  tagline: string;
  bio: string;
  portrait: string;
  description: string;
  philosophy: string;
  achievements: Achievement[];
  skills: Skill[];
  journey: JourneyEvent[];
  platforms: Platform[];
  email: string;
  location: string;
}

export const creator: CreatorProfile = {
  name: "Alex Morgan",
  tagline: "Crafting stories that move people forward",
  bio: "I'm a content creator, filmmaker, and digital storyteller based in Los Angeles. Over the past six years, I've built a community of over 1.2 million people who care about creativity, intentional living, and exploring the world with curiosity. Every piece of content I create starts with a simple question: what story deserves to be told?",
  portrait: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  description: "Alex Morgan is an award-winning content creator and filmmaker known for cinematic travel content, thoughtful brand collaborations, and a deeply engaged community. With a background in documentary filmmaking and a passion for visual storytelling, Alex creates content that sits at the intersection of adventure, technology, and authentic human connection.",
  philosophy: "I believe content should earn the viewer's time, not demand it. Every frame, every word, every edit should serve the story. I don't chase algorithms — I chase meaning. The work that resonates isn't always the work that goes viral, but it's the work that stays with someone long after they scroll past it.",
  achievements: [
    {
      id: "ach-1",
      title: "YouTube Gold Creator Award",
      description: "Surpassed 1 million subscribers on YouTube with a focus on long-form travel documentaries",
      year: "2024",
    },
    {
      id: "ach-2",
      title: "Shorty Awards Finalist",
      description: "Nominated for Best Travel Content Creator at the 14th Annual Shorty Awards",
      year: "2023",
    },
    {
      id: "ach-3",
      title: "Vimeo Staff Pick",
      description: "Three short films selected as Vimeo Staff Picks,累计 over 2 million views across platforms",
      year: "2023",
    },
    {
      id: "ach-4",
      title: "Forbes 30 Under 30 - Media",
      description: "Recognized in the media category for innovative approaches to digital storytelling",
      year: "2022",
    },
    {
      id: "ach-5",
      title: "Brand Collaboration of the Year",
      description: "Won Creator Economy Award for the 'Reimagine Tomorrow' campaign with a major tech brand",
      year: "2024",
    },
  ],
  skills: [
    { id: "sk-1", name: "Cinematography", level: 95, category: "Creative" },
    { id: "sk-2", name: "Video Editing", level: 92, category: "Creative" },
    { id: "sk-3", name: "Color Grading", level: 88, category: "Creative" },
    { id: "sk-4", name: "Motion Graphics", level: 80, category: "Creative" },
    { id: "sk-5", name: "Photography", level: 90, category: "Creative" },
    { id: "sk-6", name: "Storytelling", level: 95, category: "Strategy" },
    { id: "sk-7", name: "Content Strategy", level: 85, category: "Strategy" },
    { id: "sk-8", name: "Community Building", level: 88, category: "Strategy" },
    { id: "sk-9", name: "Public Speaking", level: 82, category: "Strategy" },
    { id: "sk-10", name: "Premiere Pro", level: 93, category: "Tools" },
    { id: "sk-11", name: "DaVinci Resolve", level: 87, category: "Tools" },
    { id: "sk-12", name: "Final Cut Pro", level: 90, category: "Tools" },
  ],
  journey: [
    {
      id: "j-1",
      year: "2018",
      title: "The First Upload",
      description: "Published my first YouTube video — a 3-minute short film about a sunrise hike in Joshua Tree. It got 47 views in the first month. I was hooked.",
    },
    {
      id: "j-2",
      year: "2019",
      title: "Going All In",
      description: "Left my day job as a junior editor to pursue content creation full-time. Started taking on small brand collaborations and reinvesting everything into better gear and travel.",
    },
    {
      id: "j-3",
      year: "2020",
      title: "Finding My Voice",
      description: "Used the quiet of the pandemic to develop my signature style — cinematic, reflective, personal. Started a weekly series that grew my audience from 10K to 100K subscribers.",
    },
    {
      id: "j-4",
      year: "2021",
      title: "Going Global",
      description: "First international project — a 6-part documentary series across Southeast Asia. The series crossed 5 million total views and caught the attention of major brands.",
    },
    {
      id: "j-5",
      year: "2022",
      title: "Building a Team",
      description: "Hired my first editor and producer. Moved from solo creator to a small creative studio, allowing me to take on bigger projects and higher production value.",
    },
    {
      id: "j-6",
      year: "2023",
      title: "1 Million Subscribers",
      description: "Crossed the 1 million subscriber milestone on YouTube. Launched a mentorship program to help emerging creators find their voice and build sustainable careers.",
    },
    {
      id: "j-7",
      year: "2024",
      title: "The Next Chapter",
      description: "Expanding into long-form documentary work and launching a podcast. Focused on telling stories that matter — the ones that don't usually get told.",
    },
  ],
  platforms: [
    { name: "YouTube", username: "@alexmorgan", followers: "1.2M", url: "https://youtube.com/@alexmorgan" },
    { name: "Instagram", username: "@alexmorgan", followers: "845K", url: "https://instagram.com/alexmorgan" },
    { name: "TikTok", username: "@alexmorgan", followers: "620K", url: "https://tiktok.com/@alexmorgan" },
    { name: "Twitter / X", username: "@alexmorgan", followers: "210K", url: "https://x.com/alexmorgan" },
  ],
  email: "hello@alexmorgan.co",
  location: "Los Angeles, CA",
};
