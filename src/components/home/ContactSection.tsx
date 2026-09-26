import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function ContactSection() {
  const t = await getTranslations("ContactHome");
  return (
    <section className="section-space bg-background">
      <div className="page-container flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <p className="eyebrow">{t("eyebrow")}</p>
          <h2 className="section-title mt-4 max-w-2xl">{t("title")}</h2>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            {t("description")}
          </p>
        </div>
        <Link
          href="/request-quote"
          className="inline-flex min-h-12 shrink-0 items-center rounded-md bg-primary px-6 py-3 font-bold text-white hover:bg-secondary"
        >
          {t("cta")}
        </Link>
      </div>
    </section>
  );
}
