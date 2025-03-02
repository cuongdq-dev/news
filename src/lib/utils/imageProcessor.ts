import sharp from "sharp";

const imageCache = new Map<string, string>();

export async function base64ToWebP(
  base64String: string
): Promise<string | null> {
  try {
    if (imageCache.has(base64String)) {
      return imageCache.get(base64String) as string;
    }

    const buffer = Buffer.from(base64String, "base64");

    const webpBuffer = await sharp(buffer).webp({ quality: 80 }).toBuffer();

    const webpBase64 = `data:image/webp;base64,${webpBuffer.toString(
      "base64"
    )}`;

    imageCache.set(base64String, webpBase64);

    return webpBase64;
  } catch (error) {
    console.error("Lỗi khi chuyển đổi ảnh:", error);
    return null;
  }
}
