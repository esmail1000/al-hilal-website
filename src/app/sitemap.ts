import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { publicPaths } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!SITE.url) return [];
  const base = SITE.url.replace(/\/$/, "");
  return publicPaths.flatMap((path) =>
    (["ar", "en"] as const).map((locale) => ({
      url: `${base}/${locale}${path ? `/${path}` : ""}`,
      alternates: {
        languages: {
          ar: `${base}/ar${path ? `/${path}` : ""}`,
          en: `${base}/en${path ? `/${path}` : ""}`,
        },
      },
    })),
  );
}
