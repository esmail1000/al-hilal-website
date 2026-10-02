import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

import WhySection from "@/components/home/WhySection";
import PageIntro from "@/components/ui/PageIntro";
import { Link } from "@/i18n/navigation";
import { routeMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return routeMetadata("quality");
}

export default async function QualityPage() {
  const t = await getTranslations("QualityPage");
  const locale = await getLocale();

  const isArabic = locale === "ar";

  const sections = ["production", "spec", "scope"] as const;

  const certificatesContent = {
    eyebrow: isArabic ? "الجودة" : "QUALITY",
    title: isArabic
      ? "اعتمادات مصنع الهلال"
      : "Al-Hilal Factory Approvals",

    description: isArabic
      ? "جودة منتجاتنا مقبولة ومعتمدة من جميع الشركات والمشروعات التي قامت بالتعامل معنا، وأيضًا معتمدة من المركز القومي لبحوث الإسكان والبناء. يمكنك الاطلاع على اعتمادات المصنع وتحميلها من خلال الزر التالي."
      : "The quality of our products is accepted and approved by the companies and projects we have worked with. Al-Hilal Factory products have also been tested and approved by the Housing and Building National Research Center. You can view and download the factory approvals below.",

    button: isArabic
      ? "تحميل شهادات المصنع"
      : "Download Factory Certificates",
  };

  return (
    <>
      <PageIntro
        eyebrow={t("eyebrow")}
        title={t("title")}
        lead={t("lead")}
      />

      {/* Quality Sections */}
      <section className="section-space bg-background">
        <div className="page-container grid gap-4 lg:grid-cols-3">
          {sections.map((key, i) => (
            <article
              key={key}
              className="border border-border bg-surface p-7"
            >
              <span className="eyebrow" dir="ltr">
                0{i + 1}
              </span>

              <h2 className="mt-7 text-2xl font-bold">
                {t(`${key}Title`)}
              </h2>

              <p className="mt-5 leading-8 text-muted-foreground">
                {t(key)}
              </p>
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

      {/* Factory Certificates */}
      <section className="bg-background py-20 md:py-28">
        <div className="page-container">
          <div className="mx-auto max-w-4xl text-center">
            <span className="eyebrow">
              {certificatesContent.eyebrow}
            </span>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              {certificatesContent.title}
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-muted-foreground">
              {certificatesContent.description}
            </p>

            <div className="mt-10">
              <a
                href="/documents/quality/al-hilal-quality-tests-2026.pdf"
                download
                className="inline-flex min-h-14 items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:opacity-90"
              >
                {certificatesContent.button}
              </a>
            </div>
          </div>
        </div>
      </section>

      <WhySection />
    </>
  );
}