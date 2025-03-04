import { getSitemapPostsByPage } from "../lib/api/xml";
import { SITE } from "../lib/config";

export async function GET({ params }) {
  const domain = new URL(SITE.url).hostname;
  const page = Number(params.page) || 1;
  const posts = await getSitemapPostsByPage(domain, page);
  if (!posts.length) return new Response("No posts found", { status: 404 });

  const urls = posts
    .map((post) => {
      const postAge =
        (Date.now() - new Date(post.created_at).getTime()) /
        (1000 * 60 * 60 * 24);
      let changefreq = "daily";
      if (postAge > 30) changefreq = "weekly";
      if (postAge > 180) changefreq = "monthly";
      return `
    <url>
      <loc>${SITE.url}/bai-viet/${post.slug}</loc>
      <lastmod>${new Date(post.created_at).toISOString()}</lastmod>
      <changefreq>${changefreq}</changefreq>
      <priority>${postAge < 30 ? 0.8 : 0.6}</priority>
    </url>
  `;
    })
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
  </urlset>`;

  return new Response(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}
