import type { HomeResponse } from "types";

const API_URL = import.meta.env.SITE_API_URL + "/news";
const AUTH_TOKEN = import.meta.env.SITE_AUTH_TOKEN;

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
