import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

import ProductCategories from "@/components/home/ProductCategories";
import RequestQuoteCTA from "@/components/home/RequestQuoteCTA";
import WhySection from "@/components/home/WhySection";
import PageIntro from "@/components/ui/PageIntro";
import { routeMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return routeMetadata("about");
}

export default async function AboutPage() {
  const t = await getTranslations("AboutPage");
  const locale = await getLocale();

  const isArabic = locale === "ar";

  const videoContent = {
    eyebrow: isArabic ? "فيديو من المصنع" : "FACTORY VIDEO",
    title: isArabic
      ? "جولة من داخل مصنع الهلال"
      : "A Look Inside Al-Hilal Factory",
    description: isArabic
      ? "لقطات من داخل مصنع الهلال توضح بيئة العمل والإنتاج ومراحل التشغيل."
      : "A short look inside Al-Hilal factory showing the work environment, production and daily operations.",
    fallback: isArabic
      ? "متصفحك لا يدعم تشغيل الفيديو."
      : "Your browser does not support video playback.",
  };

  return (
    <>
      <PageIntro
        eyebrow={t("eyebrow")}
        title={t("title")}
        lead={t("lead")}
      />

      {/* Factory Video */}
      <section className="bg-background pb-20 pt-8">
        <div className="page-container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-9 text-center">
              <span className="eyebrow">
                {videoContent.eyebrow}
              </span>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                {videoContent.title}
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
                {videoContent.description}
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border bg-black shadow-xl">
              <video
                controls
                playsInline
                preload="metadata"
                poster="https://res.cloudinary.com/uhpukqhg/video/upload/so_15,w_1600,q_auto,f_jpg/v1790466569/al-hilal-company.jpg"
                className="aspect-video w-full bg-black object-contain"
              >
                <source
                  src="https://res.cloudinary.com/uhpukqhg/video/upload/v1790466569/al-hilal-company.mp4"
                  type="video/mp4"
                />

                {videoContent.fallback}
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-space bg-background">
        <div className="page-container">
          <div className="mb-12 max-w-3xl">
            <span className="eyebrow">
              {isArabic ? "عن الهلال" : "ABOUT AL-HILAL"}
            </span>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              {isArabic ? "نبذة عن الشركة" : "Company Overview"}
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              <span className="eyebrow" dir="ltr">
                01
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                {t("storyTitle")}
              </h3>

              <p className="mt-5 text-base leading-8 text-muted-foreground">
                {t("story")}
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              <span className="eyebrow" dir="ltr">
                02
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                {t("productionTitle")}
              </h3>

              <p className="mt-5 text-base leading-8 text-muted-foreground">
                {t("production")}
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              <span className="eyebrow" dir="ltr">
                03
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                {t("visionTitle")}
              </h3>

              <p className="mt-5 text-base leading-8 text-muted-foreground">
                {t("vision")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProductCategories />
      <WhySection />
      <RequestQuoteCTA />
    </>
  );
}