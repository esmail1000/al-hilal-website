"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

export default function AboutSection() {
  const t = useTranslations("AboutHome");
  const reduceMotion = useReducedMotion();

  return (
    <section className="overflow-hidden bg-background py-20 md:py-28 lg:py-32">
      <div className="mx-auto grid w-full max-w-[1280px] items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">

        {/* Image */}
        <motion.div
          initial={{
            opacity: 0,
            x: reduceMotion ? 0 : -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: false,
            amount: 0.25,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            ease: "easeOut",
          }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-4">

  <div className="relative aspect-[3/4] overflow-hidden rounded-[8px] bg-muted">
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="absolute inset-0 h-full w-full object-cover"
    >
      <source
        src="/images/factory/about-1.mp4"
        type="video/mp4"
      />
    </video>
  </div>

  <div className="relative mt-10 aspect-[3/4] overflow-hidden rounded-[8px] bg-muted">
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="absolute inset-0 h-full w-full object-cover"
    >
      <source
        src="/images/factory/about-2.mp4"
        type="video/mp4"
      />
    </video>
  </div>

</div>

          {/* Decorative gold block */}
          <div className="absolute -bottom-5 -end-5 hidden h-28 w-28 border-b-4 border-e-4 border-gold lg:block" />
        </motion.div>

        {/* Content */}
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
            amount: 0.3,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            delay: reduceMotion ? 0 : 0.1,
          }}
        >
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-gold">
            {t("eyebrow")}
          </p>

          <h2 className="max-w-xl text-4xl font-bold leading-[1.15] text-primary md:text-5xl lg:text-[56px]">
            {t("title")}
          </h2>

          <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
            {t("description")}
          </p>

          <div className="mt-8 grid max-w-xl grid-cols-2 gap-6 border-y border-border py-7">
            <div>
              <div className="text-2xl font-bold text-gold">
                30+
              </div>

              <p className="mt-1 text-sm text-muted-foreground">
                {t("experience")}
              </p>
            </div>

            <div>
              <div className="text-2xl font-bold text-gold">
                99+
              </div>

              <p className="mt-1 text-sm text-muted-foreground">
                {t("projects")}
              </p>
            </div>
          </div>

          <div className="mt-8">
         <Link
  href="/about"
  className="group inline-flex min-h-12 items-center gap-3 rounded-[6px] bg-gold px-6 py-3 font-semibold text-white transition hover:brightness-110"
>
  {t("button")}

  <ArrowUpRight
    size={19}
    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
  />
</Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}