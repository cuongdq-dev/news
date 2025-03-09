declare global {
  namespace App {
    interface Locals {
      categories: CategoryItem[];
      adsense: AdsenseResponse;
      home: HomeResponse;
    }
  }

  const socialIcons: Record<string, unknown>;

  type TagItem = {
    query?: string;
    slug?: string;
    count?: number;
  };

  type Site = {
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

  type Favicon = {
    src: string;
    theme?: "light" | "dark";
    sizes?: string;
  };

  type SocialObjects = {
    name: keyof typeof socialIcons;
    href: string;
    active: boolean;
    linkTitle: string;
  }[];

  type ThumbnailItem = {
    url?: string;
    data?: string;
    slug?: string;
  };
  type CategoryItem = {
    id: string;
    name: string;
    slug: string;
    postCount?: number;
  };
  type ArticleItem = {
    id: string;
    title: string;
    meta_description: string;
    relatedQueries?: { query?: string; slug?: string }[];
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
  type HomeResponse = {
    recentNews: ArticleItem[];
    featureNews: ArticleItem[];
    otherNews: ArticleItem[];
  };

  type AdsenseResponse = {
    adsense_client?: string;
    adsense_slots?: {
      slot_name: string;
      slot_id: string;
      slot_type: "horizontal" | "vertical" | "square";
    }[];
  };

  type ListResponse = {
    category?: CategoryItem;
    tag?: { query?: string; slug?: string };
    data: ArticleItem[];
    meta: {
      itemsPerPage: number;
      totalItems: number;
      currentPage: number;
      totalPages: number;
    };
    links: {
      first?: string;
      previous?: string;
      current: string;
      next?: string;
      last?: string;
    };
  };
}

export {};
