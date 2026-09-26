import { getLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";
import HeroSlider from "@/components/home/HeroSlider";
import ProductCategories from "@/components/home/ProductCategories";
import RequestQuoteCTA from "@/components/home/RequestQuoteCTA";
import StatsBar from "@/components/home/StatsBar";
import WhySection from "@/components/home/WhySection";
import { Link } from "@/i18n/navigation";
import { projects } from "@/lib/constants";
import { routeMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return routeMetadata("home");
}

export default async function HomePage() {
  const locale = (await getLocale()) as "ar" | "en";
  const m = await getTranslations("Manufacturing");
  const q = await getTranslations("QualityShort");
  const p = await getTranslations("ProjectsShort");
  return (
    <>
      <HeroSlider />
      <StatsBar />
      <AboutSection />
      <ProductCategories />
      <WhySection />
      <section className="section-space border-y border-border bg-surface">
        <div className="page-container grid gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow">{m("eyebrow")}</p>
            <h2 className="section-title mt-4">{m("title")}</h2>
            <p className="mt-5 leading-8 text-muted-foreground">
              {m("description")}
            </p>
          </div>
          <div className="border-s-2 border-brick ps-6">
            <p className="eyebrow">{q("eyebrow")}</p>
            <h3 className="mt-4 text-3xl font-bold leading-snug">
              {q("title")}
            </h3>
            <p className="mt-5 leading-8 text-muted-foreground">
              {q("description")}
            </p>
            <Link
              href="/quality"
              className="text-link mt-5 inline-flex min-h-11 items-center"
            >
              {q("cta")} ↗
            </Link>
          </div>
        </div>
      </section>
      <section className="section-space bg-background">
        <div className="page-container">
          <p className="eyebrow">{p("eyebrow")}</p>
          <h2 className="section-title mt-4 max-w-3xl">{p("title")}</h2>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            {p("description")}
          </p>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {projects.slice(0, 3).map((entry, i) => (
              <article
                key={entry.client.ar}
                className="border border-border bg-surface p-6"
              >
                <span className="text-sm text-brick" dir="ltr">
                  0{i + 1}
                </span>
                <h3 className="mt-5 text-xl font-bold">
                  {entry.client[locale]}
                </h3>
                <p className="mt-3 text-muted-foreground">
                  {entry.project[locale]}
                </p>
              </article>
            ))}
          </div>
          <Link
            href="/projects"
            className="text-link mt-6 inline-flex min-h-11 items-center"
          >
            {p("cta")} ↗
          </Link>
        </div>
      </section>
      <RequestQuoteCTA />
      <ContactSection />
    </>
  );
}
