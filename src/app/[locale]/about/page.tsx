import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageIntro from "@/components/ui/PageIntro";
import ProductCategories from "@/components/home/ProductCategories";
import WhySection from "@/components/home/WhySection";
import RequestQuoteCTA from "@/components/home/RequestQuoteCTA";
import { routeMetadata } from "@/lib/metadata";
export async function generateMetadata(): Promise<Metadata> {
  return routeMetadata("about");
}
export default async function AboutPage() {
  const t = await getTranslations("AboutPage");
  return (
    <>
      <PageIntro eyebrow={t("eyebrow")} title={t("title")} lead={t("lead")} />
      <section className="section-space bg-background">
        <div className="page-container grid gap-14 lg:grid-cols-2 lg:gap-24">
          <div>
            <span className="eyebrow" dir="ltr">
              01 / 03
            </span>
            <h2 className="mt-4 text-3xl font-bold">{t("storyTitle")}</h2>
            <p className="mt-5 text-lg leading-9 text-muted-foreground">
              {t("story")}
            </p>
          </div>
          <div className="border-s-2 border-brick ps-7">
            <span className="eyebrow" dir="ltr">
              02 / 03
            </span>
            <h2 className="mt-4 text-3xl font-bold">{t("productionTitle")}</h2>
            <p className="mt-5 text-lg leading-9 text-muted-foreground">
              {t("production")}
            </p>
          </div>
          <div className="border-t border-border pt-8 lg:col-span-2">
            <span className="eyebrow" dir="ltr">
              03 / 03
            </span>
            <h2 className="mt-4 text-3xl font-bold">{t("visionTitle")}</h2>
            <p className="mt-5 max-w-3xl text-lg leading-9 text-muted-foreground">
              {t("vision")}
            </p>
          </div>
        </div>
      </section>
      <ProductCategories />
      <WhySection />
      <RequestQuoteCTA />
    </>
  );
}
