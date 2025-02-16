import rss from "@astrojs/rss";
import { SITE } from "@config";
import { getRss } from "@utils/api/post";

export async function GET() {
  const posts = await getRss();
  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: SITE.website,
    items: posts.map(({ title, meta_description, created_at, slug }) => ({
      link: `posts/${slug}/`,
      title: title,
      description: meta_description,
      pubDate: new Date(created_at),
    })),
  });
}
