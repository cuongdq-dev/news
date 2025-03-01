import { defineMiddleware } from "astro:middleware";
import { getAdsense, getCategory, getHome } from "./lib/api/home";

const cache = new Map();

const CACHE_DURATION = {
  home: 5 * 60 * 1000, // 5 phút
  categories: 10 * 60 * 1000, // 10 phút
  adsense: 30 * 60 * 1000, // 30 phút
  page: 60 * 1000, // Cache toàn bộ trang trong 1 phút (có thể chỉnh)
};

// Hàm cache dữ liệu API
async function getCachedData(
  key: string,
  fetchFunction: () => Promise<any>,
  duration: number
) {
  const now = Date.now();
  if (cache.has(key)) {
    const { data, expires } = cache.get(key);
    if (now < expires) {
      return data;
    }
  }
  const data = await fetchFunction();
  cache.set(key, { data, expires: now + duration });
  return data;
}

export const onRequest = defineMiddleware(async (context, next) => {
  const url = context.url.pathname;

  if (
    url.endsWith("sitemap.xml") ||
    url.endsWith("rss.xml") ||
    url.endsWith("robots.txt") ||
    url.endsWith("ads.txt")
  ) {
    return next(); // Không cache, gọi API trực tiếp
  }
  // **1️⃣ Check cache response trước**
  if (cache.has(url)) {
    const { data, expires } = cache.get(url);
    if (Date.now() < expires) {
      return new Response(data, {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }
  }

  // **2️⃣ Lấy dữ liệu từ API & cache**
  const cacheKeys = {
    home: `home_${url}`,
    adsense: "adsense",
    categories: "categories",
  };

  const [adsense, categories, home] = await Promise.all([
    getCachedData(cacheKeys.adsense, getAdsense, CACHE_DURATION.adsense),
    getCachedData(cacheKeys.categories, getCategory, CACHE_DURATION.categories),
    getCachedData(cacheKeys.home, getHome, CACHE_DURATION.home),
  ]);

  Object.assign(context.locals, { adsense, categories, home });

  // **3️⃣ Gọi tiếp request**
  const response = await next();

  // **4️⃣ Cache toàn bộ response HTML nếu thành công**
  if (response.status === 200) {
    const clonedResponse = response.clone();
    const text = await clonedResponse.text();
    cache.set(url, { data: text, expires: Date.now() + CACHE_DURATION.page });

    // Tự động xóa cache khi hết hạn
    setTimeout(() => cache.delete(url), CACHE_DURATION.page);
  }

  return response;
});
