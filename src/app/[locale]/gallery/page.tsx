import Image from "next/image";
import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import FactoryClip from "@/components/media/FactoryClip";
import Product3DViewer from "@/components/products/Product3DViewer";
import PageIntro from "@/components/ui/PageIntro";
import { Link } from "@/i18n/navigation";
import { products } from "@/lib/products";
import { routeMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return routeMetadata("gallery");
}

export default async function GalleryPage() {
  const t = await getTranslations("GalleryPage");
  const locale = (await getLocale()) as "ar" | "en";
  const models = products.filter((product) => product.modelSrc);

  return (
    <>
      <PageIntro eyebrow={t("eyebrow")} title={t("title")} lead={t("lead")} />
      <section className="section-space bg-background">
        <div className="page-container">
          <section aria-labelledby="gallery-factory">
            <h2 id="gallery-factory" className="text-3xl font-bold">
              {t("factory")}
            </h2>
            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <FactoryClip
                src="/images/factory/about-1.mp4"
                poster="/images/factory/about-1-poster.webp"
                alt={t("factoryOneAlt")}
                caption={t("factoryOne")}
              />
            </div>
          </section>

          <section aria-labelledby="gallery-production" className="mt-16">
            <h2 id="gallery-production" className="text-3xl font-bold">
              {t("production")}
            </h2>
            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <FactoryClip
                src="/images/factory/about-2.mp4"
                poster="/images/factory/about-2-poster.webp"
                alt={t("factoryTwoAlt")}
                caption={t("factoryTwo")}
              />
              <figure className="relative aspect-[3/4] overflow-hidden rounded-[8px] bg-muted">
                <Image
                  src="/images/hero/hero-3.webp"
                  alt={t("productionPhotoAlt")}
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover"
                />
                <figcaption className="absolute inset-x-4 bottom-4 rounded-sm bg-black/65 px-4 py-3 text-sm font-semibold text-white">
                  {t("productionPhoto")}
                </figcaption>
              </figure>
            </div>
          </section>

          <section aria-labelledby="gallery-products" className="mt-16">
            <h2 id="gallery-products" className="text-3xl font-bold">
              {t("products")}
            </h2>
            <p className="mt-3 text-muted-foreground">{t("productView")}</p>
            <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              <figure className="relative aspect-[3/4] overflow-hidden rounded-[8px] bg-muted">
                <Image
                  src="/images/hero/hero-2-poster.webp"
                  alt={t("clayPhotoAlt")}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <figcaption className="absolute inset-x-4 bottom-4 rounded-sm bg-black/65 px-4 py-3 text-sm font-semibold text-white">
                  {t("clayPhoto")}
                </figcaption>
              </figure>
              {models.map((product) => (
                <article
                  key={product.id}
                  className="overflow-hidden rounded-[8px] border border-border bg-surface"
                >
                  <Product3DViewer
                    src={product.modelSrc!}
                    alt={product.name[locale]}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold">
                      {product.name[locale]}
                    </h3>
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
          </section>

          <section
            aria-labelledby="gallery-projects"
            className="mt-16 border-t border-border pt-9"
          >
            <h2 id="gallery-projects" className="text-3xl font-bold">
              {t("projects")}
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              {t("projectsNote")}
            </p>
          </section>
        </div>
      </section>
    </>
  );
}
