export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Creator Tips" | "Technology" | "Travel" | "Lifestyle" | "Behind The Scenes" | "Personal";
  thumbnail: string;
  author: string;
  date: string;
  readingTime: string;
  tags: string[];
  featured: boolean;
}

export const blog: BlogPost[] = [
  {
    id: "b-01",
    slug: "why-i-stopped-chasing-algorithms",
    title: "Why I Stopped Chasing Algorithms and Started Making What Matters",
    excerpt: "After six years of creating content, the single most impactful decision I've made was ignoring what the algorithm wanted and doubling down on what I believed in.",
    content: `For years, I optimized my content around what I thought the algorithm wanted. Shorter hooks. Trending sounds. Posting at peak hours. Thumbnails with exaggerated expressions. And it worked — my numbers went up. But something felt hollow.

The turning point came in early 2023. I had a video about the ethics of travel photography that I'd been working on for weeks. It was personal, thoughtful, and completely at odds with what my analytics said would perform. I almost didn't publish it. Instead, I hit upload and walked away.

That video became my most-viewed piece that year. Not because it hit some algorithmic sweet spot, but because it resonated. People shared it because it made them feel something, not because it triggered an engagement pattern.

Since then, I've built a simple framework for every piece of content I create. First, does this story deserve to be told? Second, am I the right person to tell it? Third, will this matter in five years? If I can't answer yes to all three, I don't make it.

The result? My average view duration went up 40%. My comment section became a place of actual conversation instead of emoji spam. And I started sleeping better, because I was proud of the work again.

The algorithm isn't your enemy. But it's not your creative director either. Make the work that matters, and the audience that matters will find it.`,
    category: "Creator Tips",
    thumbnail: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
    author: "Alex Morgan",
    date: "2024-09-15",
    readingTime: "6 min read",
    tags: ["algorithms", "creativity", "content strategy", "authenticity"],
    featured: true,
  },
  {
    id: "b-02",
    slug: "honest-gear-guide-2024",
    title: "My Honest Gear Guide: What I Actually Use in 2024",
    excerpt: "Forget the wish lists. Here's every piece of gear I rely on daily, what it cost me, and whether I'd buy it again.",
    content: `Every gear guide feels like an advertisement. So here's one that's not. Every item in this list was purchased with my own money (or kept from partnerships I'd have done anyway). No affiliate links. No sponsorships. Just honest opinions from someone who uses this stuff every single day.

My main camera is the Sony FX6. It's not the cheapest option, and it's not the most expensive. It's the one that fits my workflow. The autofocus is reliable enough that I can shoot solo and trust that I'm in focus. The low-light performance means I can shoot in conditions that would have been impossible with my old setup.

For lenses, I keep it simple: a 24-70mm f/2.8 for most of my work, a 70-200mm for compression shots and wildlife, and a 35mm f/1.4 for those intimate, shallow depth-of-field moments. That's it. Three lenses cover 95% of what I shoot.

Audio is where I see creators make the most expensive mistakes. I use the Sennheiser MKH 416 for voice-over and interviews, and the Rode Wireless Go II for run-and-gun work. Total investment: under $800. It sounds professional, and that's what matters.

My editing setup is a custom-built PC (I'll put the specs in a future post) running DaVinci Resolve. I switched from Premiere Pro last year and haven't looked back. The color grading tools alone are worth the learning curve.

The most important piece of gear? The one you actually have with you. I shoot more on my phone than most creators shoot on their cinema cameras. A tool you carry beats a tool that sits in your bag.`,
    category: "Technology",
    thumbnail: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80",
    author: "Alex Morgan",
    date: "2024-08-20",
    readingTime: "8 min read",
    tags: ["gear", "camera", "equipment", "honest review", "filmmaking"],
    featured: true,
  },
  {
    id: "b-03",
    slug: "what-patagonia-taught-me",
    title: "What Three Weeks in Patagonia Taught Me About Patience",
    excerpt: "I went to Patagonia to make a film. I came back with a completely different understanding of what it means to wait for the right moment.",
    content: `Patagonia doesn't care about your shooting schedule. I learned this on day two, when a windstorm locked us inside our tent for 14 hours. I had a shot list, a timeline, and a client deliverable deadline. The wind had none of those things.

For the first week, I fought it. I woke up early, hiked to locations, set up my camera, and waited for conditions that rarely cooperated. The light was flat. The clouds were low. The mountains I'd come to film were hidden behind a wall of grey. I was frustrated, and it showed in the footage — everything felt forced.

The shift happened on day nine. We were camped near a glacial lake, and I'd given up on filming for the day. I sat on a rock with my notebook, just watching. After about an hour, the clouds broke. Not dramatically — just a thin line of golden light cutting across the water. Then a condor appeared, riding thermals above the glacier. The whole scene unfolded in about four minutes. I shot it handheld, no tripod, no planning. It became the most beautiful sequence in the entire film.

That moment taught me something I'd been ignoring for years: the best content doesn't come from preparation alone. It comes from presence. You have to be there, awake and watching, when the moment decides to show up.

Patagonia runs on its own clock. You can either sync with it or spend your entire trip disappointed. I chose to sync, and the work got immeasurably better for it.`,
    category: "Travel",
    thumbnail: "https://images.unsplash.com/photo-1531761535209-180857e963b9?w=800&q=80",
    author: "Alex Morgan",
    date: "2024-10-05",
    readingTime: "5 min read",
    tags: ["patagonia", "patience", "filmmaking", "travel", "storytelling"],
    featured: false,
  },
  {
    id: "b-04",
    slug: "building-creative-routine",
    title: "The Creative Routine That Actually Works (For Me)",
    excerpt: "After trying every productivity system on the planet, here's the simple, imperfect routine that keeps me creating consistently without burning out.",
    content: `I've tried them all. The Pomodoro Technique. Time-blocking. The 5 AM club. Notion templates with seventeen databases. Each one worked for about two weeks before I abandoned it for the next shiny system.

What I've landed on isn't a system. It's a set of principles that I adapt based on where I am in a project cycle.

Monday through Thursday are creation days. I start at 9 AM — not because I'm not a morning person, but because I've accepted that I do my best creative work between 10 AM and 2 PM. Before that, I'm warming up. After that, I'm executing. The distinction matters.

I protect my mornings fiercely. No email, no social media, no meetings before noon. The first three hours are for the hardest creative work: writing scripts, making edit decisions, planning shoots. Everything else happens in the afternoon.

Friday is admin and planning. Emails, contracts, scheduling, social media management. By confining it all to one day, I prevent it from bleeding into creative time.

Weekends are for living. I don't create on weekends. I travel, I cook, I read, I spend time with people I love. This isn't laziness — it's fuel. Every interesting piece of content I've ever made started with an experience I had when I wasn't trying to create.

The biggest lesson? Consistency beats intensity. I'd rather create something small every day than something massive once a month. The compound effect of daily creative practice is staggering.`,
    category: "Lifestyle",
    thumbnail: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    author: "Alex Morgan",
    date: "2024-07-12",
    readingTime: "5 min read",
    tags: ["routine", "productivity", "creativity", "balance", "workflow"],
    featured: false,
  },
  {
    id: "b-05",
    slug: "making-of-northern-lights",
    title: "The Making of: Northern Lights Timelapse in 8K",
    excerpt: "Three nights in the Norwegian Arctic, one broken tripod, and the most spectacular natural phenomenon I've ever witnessed. Here's how it all came together.",
    content: `The Northern Lights timelapse video is the most-viewed piece I've ever created. It looks effortless — a smooth, hypnotic sequence of green and purple light dancing across an Arctic sky. What you don't see is the 72 hours of preparation, failure, and freezing cold that made those 12 minutes possible.

I'd been planning this shoot for six months. The location scouting alone took weeks — I needed somewhere dark enough for the aurora to be visible, accessible enough to reach with gear, and visually interesting enough to anchor the timelapse frames. I settled on a remote spot on the Lofoten Islands, about three hours from the nearest town.

Night one: clear skies, no aurora. I set up the timelapse rig anyway, shooting the stars and the landscape. Beautiful, but not what I came for. I went back to the cabin at 4 AM and checked the aurora forecast for the next night.

Night two: the aurora appeared at 11 PM, exactly as predicted. I was ready. Within 20 minutes of the first green glow, I had my composition locked and the timelapse running. Then the wind picked up. At -15°C with 40 mph gusts, my lightweight tripod started to vibrate. Every frame was blurred. I abandoned the shoot and drove back to town, defeated.

Night three: I borrowed a heavy-duty video tripod from a local filmmaker (bless the Norwegian creator community). The aurora came back stronger — the strongest display of the season. I shot for six hours straight, changing compositions every 45 minutes to keep the final edit dynamic.

The post-production took three weeks. Color grading the aurora is genuinely difficult — the greens and purples shift constantly, and getting them to look natural while still being visually striking is a tightrope walk. I went through 47 versions before I was satisfied.

The lesson? The best content requires patience, adaptability, and a willingness to fail spectacularly before you succeed.`,
    category: "Behind The Scenes",
    thumbnail: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=800&q=80",
    author: "Alex Morgan",
    date: "2024-04-08",
    readingTime: "7 min read",
    tags: ["northern lights", "timelapse", "behind the scenes", "norway", "filmmaking"],
    featured: true,
  },
  {
    id: "b-06",
    slug: "letter-to-younger-self",
    title: "A Letter to My Younger Self, the Day Before My First Upload",
    excerpt: "Six years ago, I was about to hit publish on a video that would change my life. Here's what I wish someone had told me the night before.",
    content: `Dear 2018 Alex,

Tomorrow you're going to upload a three-minute video of a sunrise hike to YouTube. It has 47 views in its first month. You're going to feel like a failure. Don't.

Those 47 views are the beginning of everything. Not because they're impressive — they're not — but because you showed up. You made something from nothing, and you put it where the world could see it. That takes more courage than you realize right now.

Here's what I want you to know. In two years, you're going to quit your day job. It's going to be terrifying. You're going to have three months of savings and zero guarantee that this will work. Do it anyway.

In three years, you're going to have 100,000 subscribers and feel more lost than ever. The number won't matter because you'll have lost sight of why you started. Remember this: you started because you wanted to tell stories that mattered. The subscribers are a bonus, not the point.

In five years, you're going to stand on a stage and receive an award for work you're genuinely proud of. You're going to look out at the audience and see a kid in the third row who reminds you of yourself. That kid is going to ask you how to get started. Tell them the truth: just start. The rest figures itself out.

The most important thing I can tell you is this: the work that matters is the work that costs you something. The videos that make you vulnerable, the stories that scare you, the projects that push you past what you think you're capable of — that's where the magic lives. Stay uncomfortable. Stay curious. Stay kind.

And for the love of everything, invest in a better microphone sooner. Those early videos sound terrible.

See you on the other side,
Future Alex`,
    category: "Personal",
    thumbnail: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&q=80",
    author: "Alex Morgan",
    date: "2024-06-01",
    readingTime: "4 min read",
    tags: ["personal", "reflection", "advice", "journey", "creativity"],
    featured: false,
  },
  {
    id: "b-07",
    slug: "ethical-travel-photography",
    title: "The Ethics of Travel Photography: What I've Learned the Hard Way",
    excerpt: "I've made mistakes. I've photographed people without asking. I've prioritized the shot over the moment. Here's how I'm trying to do better.",
    content: `I want to talk about something uncomfortable: the ethics of travel photography. Specifically, my own failures in this area, and what I'm doing to address them.

Early in my career, I operated under the assumption that public spaces meant public subjects. If someone was in a market, a temple, or on a street, they were fair game for photography. I wasn't wrong about the legality. I was wrong about the morality.

The wake-up call came in Vietnam. I photographed an elderly woman selling fruit at a market. The image was beautiful — golden light, weathered hands, a genuine smile. I posted it. It went viral. Thousands of comments about her "timeless beauty." Not one person asked whether she wanted to be on the internet.

I went back to that market the next day and showed her the photo on my phone. She hadn't seen it. She hadn't been asked. She was gracious about it — more gracious than I deserved — but the look on her face when she realized thousands of strangers had been looking at her without her knowledge changed something in me.

Now I follow a simple rule: if I wouldn't want a stranger to photograph me in the same situation, I don't photograph them. This means I miss shots. Sometimes I miss really good shots. That's okay. The shot is never worth more than the person in it.

For brand collaborations, I now include ethical guidelines in every contract. No staged poverty tourism. No using religious or cultural practices as aesthetic props. No posting images of children without explicit parental consent. These shouldn't be revolutionary standards, but in our industry, they still are.

I'm not perfect at this. I still catch myself framing shots of people without thinking. The difference is that I now stop, put the camera down, and ask myself: am I creating something respectful, or am I taking something?`,
    category: "Creator Tips",
    thumbnail: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
    author: "Alex Morgan",
    date: "2024-03-25",
    readingTime: "6 min read",
    tags: ["ethics", "travel photography", "respect", "responsibility", "growth"],
    featured: false,
  },
  {
    id: "b-08",
    slug: "ai-tools-for-creators",
    title: "AI Tools I Actually Use as a Creator (And the Ones I Don't)",
    excerpt: "The AI landscape for creators is overwhelming. Here's an honest breakdown of what's genuinely useful, what's overhyped, and what I've completely stopped using.",
    content: `Everyone has an opinion about AI in creative work. Here's mine: it's a tool, not a replacement. And like any tool, its value depends entirely on how you use it.

Tools I use daily:

Runway ML — For rotoscoping and object removal. What used to take me an hour in After Effects now takes five minutes. I don't use it for generation, just for cleanup tasks that are tedious but necessary.

Descript — For transcription and rough cuts. I speak my scripts before I write them, and Descript's transcription is accurate enough to be a genuine time-saver. I still rewrite everything manually, but the first draft is faster.

Midjourney — For mood boards and concept visualization. Before I pitch a project, I use Midjourney to create visual references that help clients understand my vision. It's a communication tool, not an art tool.

Tools I've tried and abandoned:

AI voice-over generators. I tested three different services. Every single one produced audio that was technically perfect and emotionally dead. Voice-over is performance, and performance requires a human.

AI thumbnail generators. They produce images that look good for about two seconds before you notice the uncanny valley. Thumbnails need to feel authentic, and AI-generated faces don't pass the trust test.

AI scriptwriting tools. I've tried them all. They produce exactly what you'd expect: competent, generic, and completely devoid of personality. My voice is the one thing I can't outsource.

The principle I follow: AI should handle the mechanical parts of creation so I can focus on the meaningful parts. If a tool automates a task I hate (transcription, rotoscoping, file management), I'm in. If it tries to replace the creative decisions that make my work mine, I'm out.`,
    category: "Technology",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    author: "Alex Morgan",
    date: "2024-11-01",
    readingTime: "6 min read",
    tags: ["AI", "tools", "technology", "honest review", "creative process"],
    featured: false,
  },
];

export const blogCategories = ["Creator Tips", "Technology", "Travel", "Lifestyle", "Behind The Scenes", "Personal"] as const;

export const getBlogByCategory = (category: BlogPost["category"]): BlogPost[] =>
  blog.filter((post) => post.category === category);

export const getBlogBySlug = (slug: string): BlogPost | undefined =>
  blog.find((post) => post.slug === slug);

export const getFeaturedBlog = (): BlogPost[] =>
  blog.filter((post) => post.featured);
