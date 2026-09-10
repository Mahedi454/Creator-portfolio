export interface SocialPlatform {
  platform: string;
  username: string;
  followers: number;
  url: string;
  icon: string;
}

export const socialPlatforms: SocialPlatform[] = [
  {
    platform: "YouTube",
    username: "@alexmorgan",
    followers: 1200000,
    url: "https://youtube.com/@alexmorgan",
    icon: "Youtube",
  },
  {
    platform: "Instagram",
    username: "@alexmorgan",
    followers: 845000,
    url: "https://instagram.com/alexmorgan",
    icon: "Instagram",
  },
  {
    platform: "TikTok",
    username: "@alexmorgan",
    followers: 620000,
    url: "https://tiktok.com/@alexmorgan",
    icon: "Music",
  },
  {
    platform: "Twitter",
    username: "@alexmorgan",
    followers: 210000,
    url: "https://x.com/alexmorgan",
    icon: "Twitter",
  },
  {
    platform: "LinkedIn",
    username: "Alex Morgan",
    followers: 45000,
    url: "https://linkedin.com/in/alexmorgan",
    icon: "Linkedin",
  },
  {
    platform: "Threads",
    username: "@alexmorgan",
    followers: 89000,
    url: "https://threads.net/@alexmorgan",
    icon: "AtSign",
  },
];

export const formatFollowers = (count: number): string => {
  if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
  if (count >= 1000) return `${(count / 1000).toFixed(0)}K`;
  return count.toString();
};

export const totalFollowers = socialPlatforms.reduce((sum, platform) => sum + platform.followers, 0);
