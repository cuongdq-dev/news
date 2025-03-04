import { SITE } from "../lib/config";

export async function GET() {
  const pages = [
    { loc: `${SITE.url}/`, priority: "1.0", changefreq: "daily" },
    { loc: `${SITE.url}/bai-viet`, priority: "0.9", changefreq: "daily" },
    // { loc: `${SITE.url}/danh-muc`, priority: "0.9", changefreq: "weekly" },
    // { loc: `${SITE.url}/lien-he`, priority: "0.7", changefreq: "monthly" }, // Nếu có
    // { loc: `${SITE.url}/about`, priority: "0.7", changefreq: "monthly" }, // Nếu có
  ];

  const sitemapContent = pages
    .map(
      (page) => `
    <url>
        <loc>${page.loc}</loc>
        <changefreq>${page.changefreq}</changefreq>
        <priority>${page.priority}</priority>
    </url>
    `
    )
    .join("\n");

  const finalSitemap = `<?xml version="1.0" encoding="UTF-8"?>\n
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n
  ${sitemapContent}
  </urlset>`;

  return new Response(finalSitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}
