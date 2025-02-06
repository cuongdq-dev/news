import { defaultFavicons } from "@constants/icon";
import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
  title: "NEWS",
  subtitle: "CK Tech",
  lang: "en", // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
  themeColor: {
    hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false, // Hide the theme color picker for visitors
  },
  banner: {
    enable: true,
    src: "assets/images/demo-banner.webp", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
    credit: {
      enable: false, // Display the credit text of the banner image
      text: "", // Credit text to be displayed
      url: "", // (Optional) URL link to the original artwork or artist's page
    },
  },
  toc: {
    enable: true, // Display the table of contents on the right side of the post
    depth: 2, // Maximum heading depth to show in the table, from 1 to 3
  },
  favicon: defaultFavicons,
};

export const navBarConfig: NavBarConfig = {
  links: [
    // LinkPreset.Home,
    // LinkPreset.Archive,
    // LinkPreset.About,
  ],
};

export const profileConfig: ProfileConfig = {
  avatar: "assets/images/avatar.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: "CK Tech",
  bio: "Cập nhật tin tức mới trong ngày",
  links: [
    {
      name: "Facebook",
      icon: "fa6-brands:facebook",
      url: "https://facebook.com",
    },
    {
      name: "Tiktok",
      icon: "fa6-brands:tiktok",
      url: "https://tiktok.com",
    },
  ],
};

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: "CC BY-NC-SA 4.0",
  url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};
