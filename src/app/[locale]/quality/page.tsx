import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageIntro from "@/components/ui/PageIntro";
import WhySection from "@/components/home/WhySection";
import { Link } from "@/i18n/navigation";
import { routeMetadata } from "@/lib/metadata";
export async function generateMetadata(): Promise<Metadata> {
  return routeMetadata("quality");
}
export default async function QualityPage() {
  const t = await getTranslations("QualityPage");
  const sections = ["production", "spec", "scope"] as const;
  return (
    <>
      <PageIntro eyebrow={t("eyebrow")} title={t("title")} lead={t("lead")} />
      <section className="section-space bg-background">
        <div className="page-container grid gap-4 lg:grid-cols-3">
          {sections.map((key, i) => (
            <article key={key} className="border border-border bg-surface p-7">
              <span className="eyebrow" dir="ltr">
                0{i + 1}
              </span>
              <h2 className="mt-7 text-2xl font-bold">{t(`${key}Title`)}</h2>
              <p className="mt-5 leading-8 text-muted-foreground">{t(key)}</p>
            </article>
          ))}
        </div>
        <div className="page-container mt-9">
          <Link
            href="/products"
            className="text-link inline-flex min-h-11 items-center"
          >
            {t("cta")} ↗
          </Link>
        </div>
      </section>
      <WhySection />
    </>
  );
}
