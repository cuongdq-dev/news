export async function GET(context) {
  // const domain = new URL(SITE.url).hostname;

  const sitemapContent = `
  <?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    <url>
        <loc>https://hottrending.asia/</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet</loc>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/nhan-dinh-union-berlin-vs-holstein-kiel-chon-chan-o-thu-do-21h30-ngay-0232025</loc>
        <lastmod>2025-03-02T08:30:03.969Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/trung-quan-idol-va-bui-anh-tuan-song-kiem-hop-bich-trong-cuoc-hen-cuoi-tuan</loc>
        <lastmod>2025-03-02T08:10:26.981Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/xiaomi-15-series-ra-mat-tai-viet-nam-thau-kinh-leica-summilux-trai-nghiem-xiaomi-hyperai-thiet-ke-bat-mat</loc>
        <lastmod>2025-03-02T07:50:32.728Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/nhan-dinh-bologna-vs-cagliari-chu-nha-ca-vang-21h00-ngay-0232025</loc>
        <lastmod>2025-03-02T07:50:08.932Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/tuan-moi-3-93-4-con-giap-nay-ra-duong-la-don-tai-loc-top-1-van-do-nhu-son-de-gap-quy-nhan</loc>
        <lastmod>2025-03-02T07:20:18.142Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/nhan-dinh-bong-da-almere-city-vs-ajax-vdqg-ha-lan-hom-nay</loc>
        <lastmod>2025-03-02T06:50:08.606Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/xiaomi-15-ultra-ra-mat-voi-camera-tiem-vong-len-den-200-megapixel</loc>
        <lastmod>2025-03-02T06:40:05.824Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/nhan-dinh-lyon-vs-brest-su-hu-cua-tren-21h00-ngay-0232025</loc>
        <lastmod>2025-03-02T06:40:04.381Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/ba-con-giap-khoi-dau-thang-3-voi-su-giau-co-va-may-man</loc>
        <lastmod>2025-03-02T06:20:04.555Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/canh-gay-tranh-cai-trong-gap-nhau-cuoi-tuan</loc>
        <lastmod>2025-03-02T06:20:03.244Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/tran-dau-kho-xu-giua-clb-ha-noi-va-shb-da-nang</loc>
        <lastmod>2025-03-02T06:20:02.285Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/thu-tuong-pham-minh-chinh-nhan-danh-hieu-giao-su-danh-du-dai-hoc-thanh-hoa</loc>
        <lastmod>2025-03-02T05:20:05.539Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/nhan-dinh-leganes-vs-getafe-chim-sau-khung-hoang-20h00-ngay-232025</loc>
        <lastmod>2025-03-02T05:20:01.930Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/mien-bac-sap-don-hai-dot-khong-khi-lanh</loc>
        <lastmod>2025-03-02T05:00:15.831Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/nhan-dinh-monza-vs-torino-chim-sau-day-bang-18h30-ngay-232025</loc>
        <lastmod>2025-03-02T04:50:09.953Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/ket-qua-xo-so-hom-nay-kqxs-xo-so-truc-tiep-chu-nhat-ngay-232025</loc>
        <lastmod>2025-03-02T03:30:06.775Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/thiet-ke-camera-iphone-17-pro-max-tiep-tuc-lo-dien</loc>
        <lastmod>2025-03-02T03:00:01.860Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/ha-noi-dau-gia-thanh-cong-54-lo-dat-bi-bo-coc</loc>
        <lastmod>2025-03-02T02:40:27.446Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/nhan-dinh-bong-da-zhejiang-professional-vs-dalian-yingbo</loc>
        <lastmod>2025-03-02T02:10:06.856Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/nhan-dinh-bong-da-shandong-taishan-vs-dalian-zhixing-hom-nay</loc>
        <lastmod>2025-03-02T02:10:04.975Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/nhan-dinh-shanghai-shenhua-vs-beijing-guoan-vdqg-trung-quoc-2025</loc>
        <lastmod>2025-03-02T02:10:02.654Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/ba-ria-vung-tau-thao-go-diem-nghen-thu-tuc-hanh-chinh</loc>
        <lastmod>2025-03-02T02:00:07.279Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/ha-noi-trien-khai-30-co-so-cong-an-tai-30-cong-an-quan-huyen-cu</loc>
        <lastmod>2025-03-02T01:40:06.313Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/cong-an-ha-noi-bo-tri-30-co-so-dat-tai-cac-quan-huyen-thi-xa</loc>
        <lastmod>2025-03-02T01:40:05.006Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/ong-nguyen-quang-thieu-nho-luat-su-lam-viec-ve-viec-mot-so-nguoi-bia-dat-tho-ong</loc>
        <lastmod>2025-03-02T01:00:20.383Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/dau-gia-54-lo-dat-tai-huyen-thanh-oai-trung-cao-nhat-hon-90-trieu-dongm2</loc>
        <lastmod>2025-03-01T23:30:02.934Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/54-lo-dat-bi-bo-coc-o-huyen-thanh-oai-duoc-dau-gia-thanh-cong</loc>
        <lastmod>2025-03-01T23:30:01.520Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/ba-ria-vung-tau-co-thanh-pho-thu-3</loc>
        <lastmod>2025-03-01T23:10:04.293Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/hoa-hau-bao-ngoc-cung-bo-ghe-tham-khach-san-5-sao</loc>
        <lastmod>2025-03-01T23:10:01.744Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/nhan-dinh-fagiano-okayama-vs-shimizu-s-pulse-vdqg-nhat-ban-2025</loc>
        <lastmod>2025-03-01T23:00:02.633Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/nhan-dinh-bong-da-western-sydney-vs-perth-glory-vdqg-australia</loc>
        <lastmod>2025-03-01T22:30:02.107Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/nu-ca-si-khien-quang-le-thach-thuc-khan-gia</loc>
        <lastmod>2025-03-01T22:20:04.488Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/khanh-an-gianh-ngoi-a-quan-solo-cung-bolero-2024</loc>
        <lastmod>2025-03-01T22:20:03.560Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/nhan-dinh-yokohama-marinos-vs-shonan-bellmare-vdqg-nhat-ban-2025</loc>
        <lastmod>2025-03-01T22:10:04.386Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/canh-gay-tranh-cai-du-doi-trong-gap-nhau-cuoi-tuan</loc>
        <lastmod>2025-03-01T21:50:08.357Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/chu-tich-hoi-nha-van-viet-nam-nho-co-quan-chuc-nang-can-thiep-vu-bi-xuyen-tac-tho</loc>
        <lastmod>2025-03-01T21:40:02.810Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/du-bao-thoi-tiet-tu-2-3-den-8-3-bac-bo-don-khong-khi-lanh-trung-bo-mua-rao-nam-bo-nang-nong</loc>
        <lastmod>2025-03-01T21:20:19.364Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/gap-nhau-cuoi-tuan-bat-trend-pickleball-baby-three-loi-tho-tuc-hoi-nhieu-hai-con-roi-rac</loc>
        <lastmod>2025-03-01T21:20:04.664Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/nhan-dinh-bong-da-los-angeles-fc-vs-new-york-city-fc-hom-nay</loc>
        <lastmod>2025-03-01T20:50:02.286Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/nhan-dinh-bong-da-orlando-city-vs-toronto-fc-nha-nghe-my-2025</loc>
        <lastmod>2025-03-01T20:10:10.488Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/nhan-dinh-bong-da-chicago-fire-vs-dc-united-nha-nghe-my</loc>
        <lastmod>2025-03-01T20:10:03.606Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/nhan-dinh-bong-da-philadelphia-union-vs-cincinnati-nha-nghe-my</loc>
        <lastmod>2025-03-01T20:00:09.649Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/nhan-dinh-bong-da-colorado-rapids-vs-dallas-nha-nghe-my-hom-nay</loc>
        <lastmod>2025-03-01T20:00:07.882Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/cuu-sao-milan-tung-duoc-mu-va-arsenal-san-don-dat-ve-malaysia-choi-bong</loc>
        <lastmod>2025-03-01T19:30:04.031Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/mien-bac-tiep-tuc-mua-phun-suong-mu</loc>
        <lastmod>2025-03-01T18:20:28.649Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/huong-ly-truoc-khi-nhan-loi-cau-hon</loc>
        <lastmod>2025-03-01T17:10:05.472Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/mien-bac-nom-am-truoc-khi-don-khong-khi-lanh-cuong-do-manh</loc>
        <lastmod>2025-03-01T16:40:01.306Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/lich-truc-tiep-bong-da-chau-au-ngay-2-3-hap-dan-voi-nhung-tran-dau-cua-man-united-barca-ac-milan</loc>
        <lastmod>2025-03-01T16:10:21.541Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/a-hau-huong-ly-nhan-loi-cau-hon</loc>
        <lastmod>2025-03-01T16:10:06.353Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://hottrending.asia/bai-viet/huong-ly-duoc-cau-hon</loc>
        <lastmod>2025-03-01T16:10:04.943Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
</urlset>

  `;

  const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  const cleanSitemap = sitemapContent.trim();

  const finalSitemap = cleanSitemap.startsWith("<?xml")
    ? cleanSitemap
    : xmlHeader + cleanSitemap;

  return new Response(finalSitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
