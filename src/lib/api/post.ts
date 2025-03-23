import type { Page } from "astro";

const API_URL = import.meta.env.SITE_API_URL + "/news";
const AUTH_TOKEN = import.meta.env.SITE_AUTH_TOKEN;

export async function getPosts(page: number): Promise<Page> {
  try {
    const response = await fetch(`${API_URL}/posts?page=${page}`, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    const { data, meta } = (await response.json()) as ListResponse;

    const paginationData = {
      data: data,
      currentPage: meta.currentPage,
      lastPage: meta.totalPages,
      url: {
        current: `/bai-viet/trang-${Number(meta.currentPage)}`,
        prev:
          Number(meta?.currentPage) > 1
            ? `/bai-viet/trang-${Number(meta.currentPage) - 1}`
            : undefined,
        next:
          Number(meta.currentPage) < Number(meta.totalPages)
            ? `/bai-viet/trang-${Number(meta.currentPage) + 1}`
            : undefined,
      },
    } as Page;
    return { ...paginationData };
  } catch (error) {
    console.log(error);
    return {} as Page;
  }
}
export async function getPostsByTags(
  page: number,
  slug: string
): Promise<Page & { tag?: TagItem }> {
  try {
    const response = await fetch(`${API_URL}/tags/${slug}?page=${page}`, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    const { data, tag, meta } = (await response.json()) as ListResponse;

    const paginationData = {
      data: data,
      currentPage: meta.currentPage,
      lastPage: meta.totalPages,
      url: {
        current: `/tags/${tag?.slug}/trang-${Number(meta.currentPage)}`,
        prev:
          Number(meta?.currentPage) > 1
            ? `/tags/${tag?.slug}/trang-${Number(meta.currentPage) - 1}`
            : undefined,
        next:
          Number(meta.currentPage) < Number(meta.totalPages)
            ? `/tags/${tag?.slug}/trang-${Number(meta.currentPage) + 1}`
            : undefined,
      },
    } as Page;
    return { ...paginationData, tag };
  } catch (error) {
    console.log(error);
    return {} as Page;
  }
}

export async function getTags(): Promise<
  { query: string; count: number; slug: string }[]
> {
  try {
    const response = await fetch(`${API_URL}/tags`, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
export async function getPostsByCategory(
  page: number,
  categorySlug: string
): Promise<Page & { category?: CategoryItem }> {
  try {
    const response = await fetch(
      `${API_URL}/posts/category/${categorySlug}?page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    const { data, meta, category } = (await response.json()) as ListResponse;

    const paginationData = {
      data: data,
      currentPage: meta.currentPage,
      lastPage: meta.totalPages,
      url: {
        current: `/danh-muc/${category?.slug}/trang-${Number(
          meta.currentPage
        )}`,
        prev:
          Number(meta?.currentPage) > 1
            ? `/danh-muc/${category?.slug}/trang-${
                Number(meta.currentPage) - 1
              }`
            : undefined,
        next:
          Number(meta.currentPage) < Number(meta.totalPages)
            ? `/danh-muc/${category?.slug}/trang-${
                Number(meta.currentPage) + 1
              }`
            : undefined,
      },
    } as Page;
    return { ...paginationData, category: category };
  } catch (error) {
    console.log(error);
    return {} as Page;
  }
}

export async function getPostRelates(slug: string): Promise<ArticleItem[]> {
  try {
    const response = await fetch(`${API_URL}/relate?post_slug=${slug}`, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    const data = (await response.json()) as ArticleItem[];

    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
export async function getPostRecents(slug: string): Promise<ArticleItem[]> {
  try {
    const response = await fetch(`${API_URL}/recent?post_slug=${slug}`, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    const data = (await response.json()) as ArticleItem[];

    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export type DetailResponse = {
  data: ArticleItem;
  relatedPosts: ArticleItem[];
};

export async function getPostBySlug(slug: string): Promise<DetailResponse> {
  try {
    const response = await fetch(`${API_URL}/posts/${slug}`, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    const result = (await response.json()) as DetailResponse;
    return result;
  } catch (error) {
    console.log(error);
    return {} as DetailResponse;
  }
}
