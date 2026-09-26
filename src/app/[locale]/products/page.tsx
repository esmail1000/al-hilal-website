import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import PageIntro from "@/components/ui/PageIntro";
import Product3DViewer from "@/components/products/Product3DViewer";
import { Link } from "@/i18n/navigation";
import { categories } from "@/lib/constants";
import { products } from "@/lib/products";
import { routeMetadata } from "@/lib/metadata";
export async function generateMetadata(): Promise<Metadata> {
  return routeMetadata("products");
}
export default async function ProductsPage() {
  const locale = (await getLocale()) as "ar" | "en";
  const t = await getTranslations("ProductsPage");
  const cats = await getTranslations("ProductCategories");
  const c = await getTranslations("Common");
  return (
    <>
      <PageIntro eyebrow={t("eyebrow")} title={t("title")} lead={t("lead")} />
      <div className="sticky top-[80px] z-30 border-b border-border bg-background/95 backdrop-blur">
        <nav
          className="page-container flex gap-2 overflow-x-auto py-3"
          aria-label={t("title")}
        >
          <a
            href="#all"
            className="min-h-11 shrink-0 rounded-md border border-border px-4 py-2 text-sm font-semibold hover:border-brick"
          >
            {t("all")}
          </a>
          {categories.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className="min-h-11 shrink-0 rounded-md border border-border px-4 py-2 text-sm font-semibold hover:border-brick"
            >
              {cats(key)}
            </a>
          ))}
        </nav>
      </div>
      <div id="all" className="section-space bg-background">
        <div className="page-container">
          <p className="mb-10 max-w-3xl border-s-2 border-brick ps-5 text-sm leading-7 text-muted-foreground">
            {t("note")}
          </p>
          {categories.map((category) => (
            <section
              key={category}
              id={category}
              className="mb-20 scroll-mt-40 last:mb-0"
            >
              <div className="mb-7 flex flex-wrap items-baseline justify-between gap-3 border-b border-border pb-4">
                <h2 className="text-3xl font-bold">{cats(category)}</h2>
                <span className="eyebrow" dir="ltr">
                  {String(
                    products.filter((x) => x.category === category).length,
                  ).padStart(2, "0")}{" "}
                  / {t("countLabel")}
                </span>
              </div>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {products
                  .filter((x) => x.category === category)
                  .map((product) => (
                    <article
                      key={product.id}
                      className="flex min-w-0 flex-col overflow-hidden border border-border bg-surface"
                    >
                      {product.modelSrc ? (
                        <Product3DViewer
                          src={product.modelSrc}
                          alt={product.name[locale]}
                        />
                      ) : (
                        <div className="relative flex h-44 flex-col justify-end overflow-hidden border-b border-border bg-muted p-6">
                          <div
                            className="industrial-grid absolute inset-0 opacity-30"
                            aria-hidden="true"
                          />
                          <span className="relative text-sm font-semibold text-muted-foreground">
                            {c("noPhoto")}
                          </span>
                          <strong className="relative mt-2 text-xl">
                            {cats(category)}
                          </strong>
                        </div>
                      )}
                      <div className="flex flex-1 flex-col p-6">
                        <p className="eyebrow">{cats(category)}</p>
                        <h3 className="mt-3 text-2xl font-bold">
                          {product.name[locale]}
                        </h3>
                        <dl className="mt-6 border-t border-border text-sm">
                          {product.dimensions && (
                            <div className="flex flex-wrap justify-between gap-2 border-b border-border py-3">
                              <dt className="text-muted-foreground">
                                {c("dimensions")}
                              </dt>
                              <dd dir="ltr" className="font-bold">
                                {product.dimensions}
                              </dd>
                            </div>
                          )}
                          {product.weightKg && (
                            <div className="flex justify-between gap-2 border-b border-border py-3">
                              <dt className="text-muted-foreground">
                                {c("weight")}
                              </dt>
                              <dd dir="ltr">
                                {product.weightKg} {c("kg")}
                              </dd>
                            </div>
                          )}
                          {product.densityKgM3 && (
                            <div className="flex justify-between gap-2 border-b border-border py-3">
                              <dt className="text-muted-foreground">
                                {c("density")}
                              </dt>
                              <dd dir="ltr">
                                {product.densityKgM3} {c("kgM3")}
                              </dd>
                            </div>
                          )}
                          {product.manufacturingType && (
                            <div className="flex justify-between gap-2 border-b border-border py-3">
                              <dt className="text-muted-foreground">
                                {c("type")}
                              </dt>
                              <dd>{product.manufacturingType[locale]}</dd>
                            </div>
                          )}
                        </dl>
                        {product.modelSrc && (
                          <p className="mt-3 text-sm leading-6 text-muted-foreground">
                            {t("modelNote")}
                          </p>
                        )}
                        <Link
                          href={`/request-quote?product=${encodeURIComponent(product.slug)}`}
                          className="mt-auto inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-5 py-3 font-semibold text-white hover:bg-secondary"
                          style={{ marginTop: "auto" }}
                        >
                          {c("requestQuote")}
                        </Link>
                      </div>
                    </article>
                  ))}
              </div>
              {category === "interlock" && (
                <p className="mt-5 text-sm text-muted-foreground">
                  {t("interlockNote")}
                </p>
              )}
              {category === "curb" && (
                <p className="mt-5 text-sm text-muted-foreground">
                  {t("curbNote")}
                </p>
              )}
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
