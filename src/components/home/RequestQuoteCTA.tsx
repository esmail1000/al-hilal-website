"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

export default function RequestQuoteCTA() {
  const t = useTranslations("QuoteCTA");
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[620px] overflow-hidden bg-primary">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="/images/hero/hero-2.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[620px] w-full max-w-[1280px] items-center px-5 py-24 md:px-8 lg:px-10">

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.35,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
          }}
          className="max-w-4xl"
        >
          <p className="mb-5 text-xl font-bold text-gold md:text-2xl">
            {t("eyebrow")}
          </p>

          <h2 className="max-w-4xl text-4xl font-bold leading-[1.1] text-white md:text-6xl lg:text-[68px]">
            {t("title")}
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
            {t("description")}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">

            <Link
              href="/request-quote"
              className="group inline-flex min-h-12 items-center gap-3 rounded-[6px] bg-gold px-7 py-3 font-semibold text-white transition hover:brightness-110"
            >
              {t("quoteButton")}

              <ArrowUpRight
                size={19}
                className="transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center rounded-[6px] border border-white/50 bg-white/5 px-7 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-primary"
            >
              {t("contactButton")}
            </Link>

          </div>
        </motion.div>

      </div>
    </section>
  );
}