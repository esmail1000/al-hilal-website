import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageIntro from "@/components/ui/PageIntro";
import QuoteForm from "@/components/quote/QuoteForm";
import { routeMetadata } from "@/lib/metadata";
export async function generateMetadata(): Promise<Metadata> {
  return routeMetadata("quote");
}
export default async function RequestQuotePage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string | string[] }>;
}) {
  const t = await getTranslations("QuotePage");
  const query = await searchParams;
  return (
    <>
      <PageIntro eyebrow={t("eyebrow")} title={t("title")} lead={t("lead")} />
      <section className="section-space bg-background">
        <div className="page-container max-w-5xl">
          <p className="mb-5 text-sm text-muted-foreground">{t("privacy")}</p>
          <QuoteForm
            initialProduct={
              typeof query.product === "string" ? query.product : undefined
            }
          />
        </div>
      </section>
    </>
  );
}
