import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";

// The original slider requested media files that were never supplied.
// This single editorial composition uses only the approved brand asset.
export default async function HeroSlider() {
  const t = await getTranslations("Hero");
  const common = await getTranslations("Common");
  const cats = await getTranslations("ProductCategories");
  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <div
        className="industrial-grid pointer-events-none absolute inset-0 opacity-20"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid min-h-[620px] max-w-[1280px] items-stretch lg:grid-cols-[1.15fr_.85fr]">
        <div className="flex flex-col justify-center px-5 pb-16 pt-32 md:px-8 lg:py-32 lg:ps-10 lg:pe-16">
          <p className="mb-5 flex items-center gap-3 text-sm font-bold text-[#e2b95f]">
            <span className="h-px w-9 bg-[#e2b95f]" />
            {t("eyebrow")}
          </p>
          <h1 className="max-w-[780px] text-[clamp(2.55rem,5vw,4.7rem)] leading-[1.17] font-bold text-white">
            {t("title")}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80">
            {t("description")}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/request-quote"
              className="inline-flex min-h-12 items-center gap-3 rounded-md bg-[#b58a32] px-6 py-3 font-bold text-[#171717] transition hover:bg-[#d4ac51]"
            >
              {common("requestQuote")}
              <ArrowUpRight size={19} />
            </Link>
            <Link
              href="/products"
              className="inline-flex min-h-12 items-center rounded-md border border-white/55 px-6 py-3 font-semibold transition hover:bg-white hover:text-primary"
            >
              {t("secondary")}
            </Link>
          </div>
          <p className="mt-14 text-sm tracking-wide text-white/55">
            {t("caption")}
          </p>
        </div>
        <div className="relative isolate flex min-h-[460px] flex-col justify-center overflow-hidden border-t border-white/15 bg-[#262524] p-5 md:p-9 lg:min-h-[620px] lg:border-s lg:border-t-0">
          <div
            className="absolute -end-20 -top-32 h-80 w-80 rounded-full border border-white/10"
            aria-hidden="true"
          />
          <div className="relative mx-auto mb-8 h-48 w-48 md:h-56 md:w-56">
            <Image
              src="/brand/logo/al-hilal-logo.png"
              alt={common("brand")}
              fill
              priority
              sizes="(max-width: 768px) 192px, 224px"
              className="object-contain"
            />
          </div>
          <div className="relative grid grid-cols-2 border-t border-s border-white/20">
            {(["clay", "concrete", "curb", "interlock"] as const).map(
              (key, i) => (
                <div
                  key={key}
                  className="flex min-h-24 flex-col justify-between border-e border-b border-white/20 p-4 text-sm md:p-5"
                >
                  <span className="text-[#d6ac51]" dir="ltr">
                    0{i + 1}
                  </span>
                  <span className="font-semibold leading-6">{cats(key)}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
