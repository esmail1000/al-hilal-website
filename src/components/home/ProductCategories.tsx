"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { categories } from "@/lib/constants";

const media: Partial<Record<(typeof categories)[number], string>> = {
  clay: "/images/hero/hero-2-poster.webp",
  concrete: "/images/factory/about-1-poster.webp",
};

export default function ProductCategories() {
  const t = useTranslations("ProductCategories");
  const c = useTranslations("Common");
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-background py-20 text-primary md:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.55 }}
          className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-brick">
              {t("eyebrow")}
            </p>
            <h2 className="max-w-2xl text-4xl leading-[1.1] font-bold text-primary md:text-5xl lg:text-[56px]">
              {t("title")}
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-muted-foreground">
            {t("description")}
          </p>
        </motion.div>

        <div className="grid auto-rows-[300px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((key, index) => (
            <motion.article
              key={key}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : index * 0.06 }}
              className={`group relative overflow-hidden rounded-[8px] bg-secondary ${
                index === 0 ? "md:col-span-2 lg:row-span-2" : ""
              } ${index === 3 ? "lg:col-span-2" : ""}`}
            >
              {media[key] ? (
                <Image
                  src={media[key]!}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              ) : (
                <div
                  className={`industrial-grid absolute inset-0 opacity-30 ${
                    key === "interlock"
                      ? "bg-[linear-gradient(135deg,#343434_25%,transparent_25%,transparent_50%,#343434_50%,#343434_75%,transparent_75%)] bg-[length:64px_64px]"
                      : "bg-[#292827]"
                  }`}
                  aria-hidden="true"
                />
              )}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/5"
                aria-hidden="true"
              />
              <Link
                href={`/products#${key}`}
                className="absolute inset-0 flex flex-col justify-between p-6 text-white md:p-7"
              >
                <span className="text-sm font-semibold tracking-wide text-[#e2b95f]" dir="ltr">
                  0{index + 1} / 04
                </span>
                <span className="block">
                  <span className="mb-3 block h-[3px] w-10 bg-gold transition-all duration-300 group-hover:w-16" />
                  <strong className="block text-2xl font-bold md:text-3xl">
                    {t(key)}
                  </strong>
                  <span className="mt-3 block max-w-md text-sm leading-6 text-white/80">
                    {t(`${key}Body`)}
                  </span>
                  <span className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#e2b95f]">
                    {t("explore")}
                    <ArrowUpRight
                      size={18}
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:-translate-y-1"
                    />
                  </span>
                </span>
              </Link>
            </motion.article>
          ))}
        </div>

        <Link
          href="/products"
          className="group mt-7 inline-flex min-h-11 items-center gap-2 border-b border-current text-sm font-bold text-brick"
        >
          {c("viewProducts")}
          <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
