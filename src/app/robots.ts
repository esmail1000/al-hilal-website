import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: SITE.url ? "/" : undefined,
      disallow: SITE.url ? undefined : "/",
    },
    sitemap: SITE.url
      ? `${SITE.url.replace(/\/$/, "")}/sitemap.xml`
      : undefined,
  };
}
