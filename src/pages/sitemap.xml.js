import { getSitemap } from "../lib/api/post";
import { SITE } from "../lib/config";

export async function GET(context) {
  const domain = new URL(SITE.url).hostname;

  // Lấy nội dung sitemap từ API NestJS
  const sitemapContent = await getSitemap(domain);

  // Đảm bảo header XML chuẩn
  const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  const cleanSitemap = sitemapContent.trim();

  const finalSitemap = cleanSitemap.startsWith("<?xml")
    ? cleanSitemap
    : xmlHeader + cleanSitemap;

  return new Response(finalSitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600", // Cache 1 tiếng
    },
  });
}
