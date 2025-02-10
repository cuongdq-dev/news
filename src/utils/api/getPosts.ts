import type { Page } from "astro";
import type { PostItem } from "types";

const API_URL = import.meta.env.SITE_API_URL + "/news/posts";
const AUTH_TOKEN = import.meta.env.SITE_AUTH_TOKEN;

export type ListResponse = {
  data: Record<string, any>;
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
export async function getPosts(page: number): Promise<Page> {
  try {
    const response = await fetch(`${API_URL}?page=${page}`, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    const { data, links, meta } = (await response.json()) as ListResponse;

    const paginationData = {
      data: data,
      currentPage: meta.currentPage,
      lastPage: meta.totalPages,
      url: {
        prev:
          Number(meta?.currentPage) > 1
            ? `/trang-${Number(meta.currentPage) - 1}`
            : undefined,
        next:
          Number(meta.currentPage) < Number(meta.totalPages)
            ? `/trang-${Number(meta.currentPage) + 1}`
            : undefined,
      },
    } as Page;
    return paginationData;
  } catch (error) {
    return {} as Page;
  }
}
