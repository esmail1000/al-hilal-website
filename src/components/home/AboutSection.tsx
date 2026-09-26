"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import FactoryClip from "@/components/media/FactoryClip";
import { Link } from "@/i18n/navigation";

export default function AboutSection() {
  const t = useTranslations("AboutHome");
  const reduceMotion = useReducedMotion();

  return (
    <section className="overflow-hidden bg-background py-20 md:py-28 lg:py-32">
      <div className="mx-auto grid w-full max-w-[1280px] items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: reduceMotion ? 0 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.65, ease: "easeOut" }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <FactoryClip
              src="/images/factory/about-1.mp4"
              poster="/images/factory/about-1-poster.webp"
              alt={t("factoryShotOneAlt")}
              caption={t("factoryShotOne")}
            />
            <div className="mt-9 sm:mt-12">
              <FactoryClip
                src="/images/factory/about-2.mp4"
                poster="/images/factory/about-2-poster.webp"
                alt={t("factoryShotTwoAlt")}
                caption={t("factoryShotTwo")}
              />
            </div>
          </div>
          <div className="absolute -bottom-5 -end-5 hidden h-28 w-28 border-b-4 border-e-4 border-gold lg:block" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.08 }}
        >
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-brick">
            {t("eyebrow")}
          </p>
          <h2 className="max-w-xl text-4xl leading-[1.15] font-bold text-primary md:text-5xl lg:text-[56px]">
            {t("title")}
          </h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
            {t("description")}
          </p>
          <div className="mt-8 grid max-w-xl grid-cols-2 gap-6 border-y border-border py-7 text-sm font-semibold sm:text-base">
            <p>{t("point1")}</p>
            <p>{t("point2")}</p>
          </div>
          <Link
            href="/about"
            className="group mt-8 inline-flex min-h-12 items-center gap-3 rounded-[6px] bg-gold px-6 py-3 font-semibold text-white transition hover:brightness-110"
          >
            {t("button")}
            <ArrowUpRight
              size={19}
              aria-hidden="true"
              className="transition-transform group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
