import { getSitemap } from "../lib/api/post";
import { SITE } from "../lib/config";

export async function GET(context) {
  const domain = new URL(SITE.url).hostname;

  const sitemapContent = await getSitemap(domain);
  console.log(!!sitemapContent);
  return new Response(sitemapContent, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
