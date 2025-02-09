import type { BlogPostData } from "@/types/config";
import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";
import type { Page } from "astro";
import { getCollection } from "astro:content";

const API_URL = import.meta.env.PUBLIC_API_URL + "/news/posts";
const AUTH_TOKEN = import.meta.env.PUBLIC_AUTH_TOKEN;

export type ListResponse = {
  data: any;
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

export async function getSortedPosts(): Promise<
  { body: string; data: BlogPostData; slug: string }[]
> {
  const allBlogPosts = (await getCollection("posts", ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  })) as unknown as { body: string; data: BlogPostData; slug: string }[];

  const sorted = allBlogPosts.sort(
    (a: { data: BlogPostData }, b: { data: BlogPostData }) => {
      const dateA = new Date(a.data.published);
      const dateB = new Date(b.data.published);
      return dateA > dateB ? -1 : 1;
    }
  );

  for (let i = 1; i < sorted.length; i++) {
    sorted[i].data.nextSlug = sorted[i - 1].slug;
    sorted[i].data.nextTitle = sorted[i - 1].data.title;
  }
  for (let i = 0; i < sorted.length - 1; i++) {
    sorted[i].data.prevSlug = sorted[i + 1].slug;
    sorted[i].data.prevTitle = sorted[i + 1].data.title;
  }

  return sorted;
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

export async function getPostBySlug(
  slug: string
): Promise<Record<string, any>> {
  try {
    const response = await fetch(`${API_URL}/${slug}`, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    const { message, data } = await response.json();
    return data;
  } catch (error) {
    return {};
  }
}

export type Tag = {
  name: string;
  count: number;
};

export async function getTagList(): Promise<Tag[]> {
  const allBlogPosts = await getCollection<"posts">("posts", ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  });

  const countMap: { [key: string]: number } = {};
  allBlogPosts.map((post: { data: { tags: string[] } }) => {
    post.data.tags.map((tag: string) => {
      if (!countMap[tag]) countMap[tag] = 0;
      countMap[tag]++;
    });
  });

  // sort tags
  const keys: string[] = Object.keys(countMap).sort((a, b) => {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });

  return keys.map((key) => ({ name: key, count: countMap[key] }));
}

export type Category = {
  name: string;
  count: number;
};

export async function getCategoryList(): Promise<Category[]> {
  const allBlogPosts = await getCollection<"posts">("posts", ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  });
  const count: { [key: string]: number } = {};
  allBlogPosts.map((post: { data: { category: string | number } }) => {
    if (!post.data.category) {
      const ucKey = i18n(I18nKey.uncategorized);
      count[ucKey] = count[ucKey] ? count[ucKey] + 1 : 1;
      return;
    }
    count[post.data.category] = count[post.data.category]
      ? count[post.data.category] + 1
      : 1;
  });

  const lst = Object.keys(count).sort((a, b) => {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });

  const ret: Category[] = [];
  for (const c of lst) {
    ret.push({ name: c, count: count[c] });
  }
  return ret;
}
