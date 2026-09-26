import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function ContactSection() {
  const t = await getTranslations("ContactHome");
  const c = await getTranslations("Common");
  return (
    <section className="overflow-hidden bg-[#171717] text-white">
      <div className="border-b border-white/15">
        <div className="page-container grid items-center gap-10 py-16 md:py-20 lg:grid-cols-[1fr_auto] lg:py-24">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-[#e2b95f] md:text-base">
              {t("eyebrow")}
            </p>
            <h2 className="max-w-4xl text-4xl leading-[1.1] font-bold text-white md:text-5xl lg:text-[60px]">
              {t("title")}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
              {t("description")}
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/brand/logo/al-hilal-logo.png"
              alt={c("brand")}
              width={240}
              height={240}
              className="h-auto w-[150px] object-contain md:w-[180px] lg:w-[210px]"
            />
          </div>
        </div>
      </div>
      <div className="page-container flex justify-end py-7">
        <Link
          href="/request-quote"
          className="group inline-flex min-h-12 shrink-0 items-center gap-3 rounded-[6px] bg-gold px-6 py-3 font-semibold text-primary transition hover:bg-[#d4ac51]"
        >
          {t("cta")}
          <ArrowUpRight
            size={18}
            aria-hidden="true"
            className="transition-transform group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </section>
  );
}
