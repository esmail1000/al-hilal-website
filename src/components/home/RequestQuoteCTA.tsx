"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { Link } from "@/i18n/navigation";

export default function RequestQuoteCTA() {
  const t = useTranslations("QuoteCTA");
  const reduceMotion = useReducedMotion();
  const section = useRef<HTMLElement>(null);
  const [nearViewport, setNearViewport] = useState(false);

  useEffect(() => {
    if (reduceMotion || !section.current) return;
    if (!window.IntersectionObserver) {
      const frame = window.requestAnimationFrame(() => setNearViewport(true));
      return () => window.cancelAnimationFrame(frame);
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: "160px" },
    );
    observer.observe(section.current);
    return () => observer.disconnect();
  }, [reduceMotion]);

  return (
    <section
      ref={section}
      className="relative min-h-[620px] overflow-hidden bg-primary text-white"
    >
      <Image
        src="/images/hero/hero-2-poster.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      {nearViewport && !reduceMotion && (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/images/hero/hero-2-poster.webp"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/images/hero/hero-2.mp4" type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/20" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-[620px] w-full max-w-[1280px] items-center px-5 py-24 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: reduceMotion ? 0 : 0.6 }}
          className="max-w-4xl"
        >
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-[#e2b95f] md:text-base">
            {t("eyebrow")}
          </p>
          <h2 className="max-w-4xl text-4xl leading-[1.1] font-bold text-white md:text-6xl lg:text-[68px]">
            {t("title")}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
            {t("description")}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/request-quote"
              className="group inline-flex min-h-12 items-center gap-3 rounded-[6px] bg-gold px-7 py-3 font-semibold text-primary transition hover:bg-[#d4ac51]"
            >
              {t("quoteButton")}
              <ArrowUpRight
                size={19}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:-translate-y-1"
              />
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center rounded-[6px] border border-white/65 bg-white/5 px-7 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-primary"
            >
              {t("contactButton")}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
