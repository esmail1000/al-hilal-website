import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageIntro from "@/components/ui/PageIntro";
import QuoteForm from "@/components/quote/QuoteForm";
import { routeMetadata } from "@/lib/metadata";
export async function generateMetadata(): Promise<Metadata> {
  return routeMetadata("contact");
}
export default async function ContactPage() {
  const t = await getTranslations("ContactPage");
  return (
    <>
      <PageIntro eyebrow={t("eyebrow")} title={t("title")} lead={t("lead")} />
      <section className="section-space bg-background">
        <div className="page-container max-w-5xl">
          <h2 className="text-3xl font-bold">{t("nextTitle")}</h2>
          <p className="mb-8 mt-4 max-w-3xl leading-8 text-muted-foreground">
            {t("next")}
          </p>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
