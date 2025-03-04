const API_URL = import.meta.env.SITE_API_URL + "/news";
const AUTH_TOKEN = import.meta.env.SITE_AUTH_TOKEN;

export async function getSitemapCategories(
  domain: string
): Promise<CategoryItem[]> {
  try {
    const response = await fetch(
      `${API_URL}/sitemap-categories?domain=${domain}`,
      {
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    return (await response.json()) as CategoryItem[];
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getSitemapPosts(
  domain: string
): Promise<{ total: number; perpage: number }> {
  try {
    const response = await fetch(
      `${API_URL}/sitemap-total-posts?domain=${domain}`,
      {
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    return (await response.json()) as { total: number; perpage: number };
  } catch (error) {
    console.log(error);
    return { total: 0, perpage: 50 };
  }
}

export async function getSitemapPostsByPage(
  domain: string,
  page: number
): Promise<ArticleItem[]> {
  try {
    const response = await fetch(
      `${API_URL}/sitemap-posts?page=${page}&domain=${domain}`,
      {
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    return (await response.json()) as ArticleItem[];
  } catch (error) {
    return [];
  }
}

export async function getRss(): Promise<ArticleItem[]> {
  try {
    const response = await fetch(`${API_URL + "/rss"}`, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    return (await response.json()) as ArticleItem[];
  } catch (error) {
    console.log(error);
    return [] as ArticleItem[];
  }
}
