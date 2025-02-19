import type { Page } from "astro";
import type { PostItem } from "types";

const API_URL = import.meta.env.SITE_API_URL + "/news/posts";
const AUTH_TOKEN = import.meta.env.SITE_AUTH_TOKEN;

export type ListResponse = {
  data: PostItem[];
  meta: {
    itemsPerPage: number;
    totalItems: number;
    currentPage: number;
    totalPages: number;
  };
  links: {
    first?: string;
    previous?: string;
    current: string;
    next?: string;
    last?: string;
  };
};

export async function getRss(): Promise<PostItem[]> {
  try {
    const response = await fetch(
      `${import.meta.env.SITE_API_URL + "/news/rss"}`,
      {
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    return (await response.json()) as PostItem[];
  } catch (error) {
    console.log(error);
    return [] as PostItem[];
  }
}

export async function getPosts(page: number): Promise<Page> {
  try {
    const response = await fetch(`${API_URL}?page=${page}`, {
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
        prev:
          Number(meta?.currentPage) > 1
            ? `/posts/page/${Number(meta.currentPage) - 1}`
            : undefined,
        next:
          Number(meta.currentPage) < Number(meta.totalPages)
            ? `/posts/page/${Number(meta.currentPage) + 1}`
            : undefined,
      },
    } as Page;
    return paginationData;
  } catch (error) {
    console.log(error);
    return {} as Page;
  }
}

export type DetailResponse = { data: PostItem; relatedPosts: PostItem[] };

export async function getPostBySlug(slug: string): Promise<DetailResponse> {
  try {
    const response = await fetch(`${API_URL}/${slug}`, {
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
