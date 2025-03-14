import mdx from "@astrojs/mdx";
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";
import pagefind from "astro-pagefind";
import { defineConfig } from "astro/config";
import { SITE } from "./src/lib/config";
import { modifiedTime, readingTime } from "./src/lib/utils/remarks.mjs";
import sitemap from "@astrojs/sitemap";
import dotenv from "dotenv";
import react from "@astrojs/react";
dotenv.config();

export default defineConfig({
  site: SITE.url || process.env.SITE_WEBSITE,
  base: SITE.basePath,
  output: "server",
  adapter: node({ mode: "standalone" }),
  server: {
    port: 5000,
    host: true,
  },
  markdown: {
    remarkPlugins: [readingTime, modifiedTime],
  },
  integrations: [tailwind(), mdx(), sitemap(), pagefind(), react()],
  experimental: {
    responsiveImages: true,
  },
});
