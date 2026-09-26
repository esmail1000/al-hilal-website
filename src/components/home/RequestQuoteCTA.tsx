import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function RequestQuoteCTA() {
  const t = await getTranslations("QuoteCTA");
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-white md:py-28">
      <div
        className="industrial-grid pointer-events-none absolute inset-0 opacity-15"
        aria-hidden="true"
      />
      <div className="page-container relative grid gap-9 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="eyebrow text-[#e2b95f]">{t("eyebrow")}</p>
          <h2 className="section-title mt-4 max-w-3xl text-white">
            {t("title")}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
            {t("description")}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/request-quote"
            className="inline-flex min-h-12 items-center rounded-md bg-[#b58a32] px-6 py-3 font-bold text-primary hover:bg-[#d4ac51]"
          >
            {t("quoteButton")}
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center rounded-md border border-white/60 px-6 py-3 font-semibold hover:bg-white hover:text-primary"
          >
            {t("contactButton")}
          </Link>
        </div>
      </div>
    </section>
  );
}
