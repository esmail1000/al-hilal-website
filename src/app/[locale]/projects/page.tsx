import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import PageIntro from "@/components/ui/PageIntro";
import RequestQuoteCTA from "@/components/home/RequestQuoteCTA";
import { projects } from "@/lib/constants";
import { routeMetadata } from "@/lib/metadata";
export async function generateMetadata(): Promise<Metadata> {
  return routeMetadata("projects");
}
export default async function ProjectsPage() {
  const t = await getTranslations("ProjectsPage");
  const locale = (await getLocale()) as "ar" | "en";
  return (
    <>
      <PageIntro eyebrow={t("eyebrow")} title={t("title")} lead={t("lead")} />
      <section className="section-space bg-background">
        <div className="page-container grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={p.client.ar}
              className="flex min-h-52 flex-col border border-border bg-surface p-6"
            >
              <span className="eyebrow" dir="ltr">
                {String(i + 1).padStart(2, "0")} /{" "}
                {String(projects.length).padStart(2, "0")}
              </span>
              <p className="mt-7 text-sm font-semibold text-muted-foreground">
                {t("client")}
              </p>
              <h2 className="mt-1 text-2xl font-bold">{p.client[locale]}</h2>
              <p className="mt-5 border-t border-border pt-4 text-sm text-muted-foreground">
                {t("project")}
              </p>
              <p className="mt-1 font-semibold">{p.project[locale]}</p>
            </article>
          ))}
        </div>
      </section>
      <RequestQuoteCTA />
    </>
  );
}
