import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { SITE } from "./constants";

const paths = {
  home: "",
  about: "about",
  products: "products",
  quality: "quality",
  projects: "projects",
  gallery: "gallery",
  contact: "contact",
  quote: "request-quote",
} as const;

export async function routeMetadata(
  route: keyof typeof paths,
): Promise<Metadata> {
  const locale = (await getLocale()) as "ar" | "en";
  const t = await getTranslations("Meta");
  const title = t(`${route}Title`);
  const description = t(`${route}Description`);
  const path = paths[route];
  const base = SITE.url ? SITE.url.replace(/\/$/, "") : null;
  return {
    title,
    description,
    applicationName: SITE.name[locale],
    alternates: base
      ? {
          canonical: `${base}/${locale}${path ? `/${path}` : ""}`,
          languages: {
            ar: `${base}/ar${path ? `/${path}` : ""}`,
            en: `${base}/en${path ? `/${path}` : ""}`,
          },
        }
      : undefined,
    openGraph: {
      title,
      description,
      siteName: SITE.name[locale],
      locale: locale === "ar" ? "ar_EG" : "en_US",
      type: "website",
      url: base ? `${base}/${locale}${path ? `/${path}` : ""}` : undefined,
    },
  };
}

export const publicPaths = Object.values(paths);
