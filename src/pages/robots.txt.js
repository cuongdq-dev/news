export async function GET() {
  return new Response(
    `
    User-agent: *
    Allow: /
    Sitemap: https://hottrending.asia/sitemap.xml`,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}
