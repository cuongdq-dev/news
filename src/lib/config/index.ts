import type { Link } from "../types";

export const SITE = {
  title: import.meta.env.SITE_TITLE || process.env.SITE_TITLE,
  description: import.meta.env.SITE_DESC || process.env.SITE_DESC,
  author: import.meta.env.SITE_AUTHOR || process.env.SITE_AUTHOR,
  profile: import.meta.env.SITE_PROFILE || process.env.SITE_PROFILE,
  url: import.meta.env.SITE_WEBSITE || process.env.SITE_WEBSITE,
  ogImage: "default-og.jpg",

  locale: "en-US",
  dir: "ltr",
  charset: "UTF-8",
  basePath: "/",
  postsPerPage: 4,
  favicon: [],
};

export const NAVIGATION_LINKS: Link[] = [
  {
    href: "/danh-muc/technology",
    text: "Technology",
  },
  {
    href: "/danh-muc/programming",
    text: "Programming",
  },
  {
    href: "/danh-muc/lifestyle",
    text: "Lifestyle",
  },
  {
    href: "/danh-muc/productivity",
    text: "Productivity",
  },
  {
    href: "/danh-muc/health",
    text: "Health",
  },
  {
    href: "/danh-muc/finance",
    text: "Finance",
  },
];

export const OTHER_LINKS: Link[] = [
  {
    href: "/about",
    text: "About us",
  },
  {
    href: "/contact",
    text: "Contact",
  },
  {
    href: "/privacy",
    text: "Privacy",
  },
  {
    href: "/terms",
    text: "Terms",
  },
  // {
  //   href: "/cookie-policy",
  //   text: "Cookie Policy",
  // },
  {
    href: `${SITE.url}/rss.xml`,
    text: "RSS",
  },
  {
    href: `${SITE.url}/sitemap.xml`,
    text: "Sitemap",
  },
];

export const SOCIAL_LINKS: Link[] = [
  {
    href: "https://github.com",
    text: "GitHub",
    icon: "github",
  },
  {
    href: "httpe://www.t.me",
    text: "Telegram",
    icon: "telegram",
  },
  {
    href: "https://twitter.com",
    text: "Twitter",
    icon: "newTwitter",
  },
  {
    href: "https://www.facebook.com",
    text: "Facebook",
    icon: "facebook",
  },
];
