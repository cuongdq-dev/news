export async function GET() {
  return new Response(
    `User-agent: *
Disallow:

Sitemap: https://hottrending.asia/sitemap.xml
`,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}
