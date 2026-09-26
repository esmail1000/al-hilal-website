import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { categories } from "@/lib/constants";

export default async function ProductCategories() {
  const t = await getTranslations("ProductCategories");
  const c = await getTranslations("Common");
  return (
    <section className="section-space border-y border-border bg-surface">
      <div className="page-container">
        <p className="eyebrow">{t("eyebrow")}</p>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
          <h2 className="section-title max-w-2xl">{t("title")}</h2>
          <p className="max-w-sm text-muted-foreground">{t("description")}</p>
        </div>
        <div className="mt-10 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {categories.map((key, i) => (
            <Link
              key={key}
              href={`/products#${key}`}
              className="group flex min-h-56 flex-col justify-between bg-surface p-6 transition hover:bg-[#f7f5f0]"
            >
              <span className="text-sm font-bold text-brick" dir="ltr">
                0{i + 1} / 04
              </span>
              <span className="flex items-end justify-between gap-3">
                <strong className="text-[clamp(1.4rem,2vw,1.9rem)] leading-9">
                  {t(key)}
                </strong>
                <span
                  aria-hidden="true"
                  className="text-2xl text-gold transition group-hover:-translate-y-1"
                >
                  ↗
                </span>
              </span>
            </Link>
          ))}
        </div>
        <Link
          href="/products"
          className="text-link mt-7 inline-flex min-h-11 items-center"
        >
          {c("viewProducts")} <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
