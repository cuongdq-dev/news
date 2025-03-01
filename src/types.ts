import type socialIcons from "~/assets/socialIcons";

export type Site = {
  website: string;
  author: string;
  profile: string;
  desc: string;
  title: string;
  ogImage?: string;
  lightAndDarkMode: boolean;
  postPerIndex: number;
  postPerPage: number;
  scheduledPostMargin: number;
  showArchives?: boolean;
  editPost?: {
    url?: URL["href"];
    text?: string;
    appendFilePath?: boolean;
  };
  favicon: Favicon[];
};

export type Favicon = {
  src: string;
  theme?: "light" | "dark";
  sizes?: string;
};

export type SocialObjects = {
  name: keyof typeof socialIcons;
  href: string;
  active: boolean;
  linkTitle: string;
}[];

export type ThumbnailItem = {
  url?: string;
  data?: string;
  slug?: string;
};
export type CategoryItem = {
  id: string;
  name: string;
  slug: string;
  postCount?: number;
};
export type ArticleItem = {
  id: string;
  title: string;
  meta_description: string;
  created_at: string;
  slug: string;
  status: string;
  thumbnail: ThumbnailItem;
  categories?: CategoryItem[];
  content?: string;
  canonicalURL?: string;
  article?: { source?: string; url?: string };
  sites?: AdsenseResponse[];
};
export type HomeResponse = {
  recentNews: ArticleItem[];
  featureNews: ArticleItem[];
  otherNews: ArticleItem[];
};

export type AdsenseResponse = {
  adsense_client?: string;
  adsense_slots?: {
    slot_name: string;
    slot_id: string;
    slot_type: "horizontal" | "vertical" | "square";
  }[];
};
