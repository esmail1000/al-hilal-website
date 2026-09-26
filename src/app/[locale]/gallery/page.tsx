import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import PageIntro from "@/components/ui/PageIntro";
import Product3DViewer from "@/components/products/Product3DViewer";
import { Link } from "@/i18n/navigation";
import { products } from "@/lib/products";
import { routeMetadata } from "@/lib/metadata";
export async function generateMetadata(): Promise<Metadata> {
  return routeMetadata("gallery");
}
export default async function GalleryPage() {
  const t = await getTranslations("GalleryPage");
  const locale = (await getLocale()) as "ar" | "en";
  const items = products.filter((p) => p.modelSrc);
  return (
    <>
      <PageIntro eyebrow={t("eyebrow")} title={t("title")} lead={t("lead")} />
      <section className="section-space bg-background">
        <div className="page-container">
          <h2 className="text-3xl font-bold">{t("products")}</h2>
          <p className="mt-3 text-muted-foreground">{t("productView")}</p>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {items.map((p) => (
              <article
                key={p.id}
                className="overflow-hidden border border-border bg-surface"
              >
                <Product3DViewer src={p.modelSrc!} alt={p.name[locale]} />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{p.name[locale]}</h3>
                  <Link
                    href={`/products#clay`}
                    className="text-link mt-4 inline-flex min-h-11 items-center"
                  >
                    {t("cta")} ↗
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 grid gap-4 border-t border-border pt-8 md:grid-cols-3">
            {(["factory", "production", "projects"] as const).map((key) => (
              <div key={key} className="border-s-2 border-brick ps-4">
                <h2 className="text-xl font-bold">{t(key)}</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  {t("unavailable")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
