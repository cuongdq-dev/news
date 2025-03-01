import type { AdsenseResponse, HomeResponse } from "~/types";

const API_URL = import.meta.env.SITE_API_URL + "/news";
const AUTH_TOKEN = import.meta.env.SITE_AUTH_TOKEN;

export async function getAdsense(): Promise<AdsenseResponse | undefined> {
  try {
    const response = await fetch(`${API_URL}/adsense`, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    return (await response.json()) as AdsenseResponse;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

export async function getHome(): Promise<HomeResponse | undefined> {
  try {
    const response = await fetch(`${API_URL}`, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    return (await response.json()) as HomeResponse;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

type Category = {
  id?: string;
  slug?: string;
  name?: string;
  postCount?: number;
};
export async function getCategory(): Promise<Category[] | undefined> {
  try {
    const response = await fetch(`${API_URL}/categories`, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    return (await response.json()) as Category[];
  } catch (error) {
    console.log(error);
    return undefined;
  }
}
