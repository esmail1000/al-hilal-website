import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function AboutSection() {
  const t = await getTranslations("AboutHome");
  return (
    <section className="section-space bg-background">
      <div className="page-container grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
        <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden border border-border bg-[#e9e5dd] p-12">
          <div
            className="industrial-grid absolute inset-0 opacity-30"
            aria-hidden="true"
          />
          <div className="relative h-60 w-60 max-w-full">
            <Image
              src="/brand/logo/al-hilal-logo.png"
              alt=""
              fill
              sizes="240px"
              className="object-contain"
            />
          </div>
          <span className="absolute bottom-5 start-5 border-s-2 border-brick ps-3 text-sm font-semibold text-muted-foreground">
            {t("materialLabel")}
          </span>
        </div>
        <div>
          <p className="eyebrow">{t("eyebrow")}</p>
          <h2 className="section-title mt-4">{t("title")}</h2>
          <p className="mt-6 max-w-xl text-lg leading-9 text-muted-foreground">
            {t("description")}
          </p>
          <div className="mt-9 grid gap-3 border-y border-border py-6 sm:grid-cols-2">
            <p className="font-semibold">{t("point1")}</p>
            <p className="font-semibold">{t("point2")}</p>
          </div>
          <Link
            href="/about"
            className="text-link mt-7 inline-flex min-h-11 items-center"
          >
            {t("button")} <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
