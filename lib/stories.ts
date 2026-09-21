export interface StoryMeta {
  slug: string;
  title: string;
  dek: string;
  minutes: number;
  founded: string;
}

export const stories: StoryMeta[] = [
  {
    slug: "tiktok-bytedance-story",
    title: "The Guy Whose First Startup Flopped Before He Built TikTok",
    dek: "Zhang Yiming failed at his first company. His second was a news app. TikTok almost happened by accident.",
    minutes: 6,
    founded: "2012",
  },
  {
    slug: "youtube-story",
    title: "YouTube Started as a Dating Site. It Launched on Valentine's Day.",
    dek: "Three ex-PayPal guys built a video dating site nobody wanted. They kept the video part.",
    minutes: 5,
    founded: "2005",
  },
  {
    slug: "instagram-story",
    title: "Instagram Was a Bourbon-Themed Check-In App Before It Was Instagram",
    dek: "It had a to-do list, a points system, and check-ins. Almost none of it survived the launch.",
    minutes: 5,
    founded: "2010",
  },
  {
    slug: "facebook-story",
    title: "Facebook Almost Got Its Founder Expelled — Before It Even Existed",
    dek: "The prank that came before Facebook, the dorm room, and the $500,000 phone call that changed everything.",
    minutes: 6,
    founded: "2004",
  },
  {
    slug: "whatsapp-story",
    title: "They Got Rejected by Facebook. Facebook Paid $19 Billion for Their Company.",
    dek: "Two guys, one food-stamp office, and the most satisfying plot twist in tech history.",
    minutes: 6,
    founded: "2009",
  },
  {
    slug: "twitter-x-story",
    title: "Twitter Was a Side Project at a Company Whose Real Product Was Dying",
    dek: "Apple accidentally killed their podcasting startup. What they built instead changed how the internet talks.",
    minutes: 6,
    founded: "2006",
  },
  {
    slug: "snapchat-story",
    title: "Three Friends, One Disappearing-Photo App, and a $157 Million Lawsuit",
    dek: "Not every origin story ends clean. This one's a genuine, disputed mess — and still a useful one.",
    minutes: 6,
    founded: "2011",
  },
];
