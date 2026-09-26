"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";

const slides = [
  { type: "image", src: "/images/hero/hero-1.webp", key: "factory" },
  {
    type: "video",
    src: "/images/hero/hero-2.mp4",
    poster: "/images/hero/hero-2-poster.webp",
    key: "production",
  },
  { type: "image", src: "/images/hero/hero-3.webp", key: "products" },
] as const;

const SLIDE_DURATION = 6000;

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const t = useTranslations("Hero");
  const common = useTranslations("Common");
  const locale = useLocale();
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = prefersReducedMotion ?? false;
  const slide = slides[activeSlide];
  const isArabic = locale === "ar";

  useEffect(() => {
    if (paused || reduceMotion) return;
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => window.clearInterval(timer);
  }, [paused, reduceMotion]);

  function previousSlide() {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  }

  function nextSlide() {
    setActiveSlide((current) => (current + 1) % slides.length);
  }

  return (
    <section
      role="region"
      aria-label={t("eyebrow")}
      className="relative min-h-[100svh] overflow-hidden bg-primary text-white"
      aria-roledescription={t("carousel")}
      onFocusCapture={() => setPaused(true)}
      onMouseEnter={() => setPaused(true)}
    >
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={slide.src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.65, ease: "easeInOut" }}
          className="absolute inset-0"
          aria-hidden="true"
        >
          {slide.type === "image" ? (
            <Image
              src={slide.src}
              alt=""
              fill
              priority={activeSlide === 0}
              sizes="100vw"
              className={`object-cover ${slide.key === "factory" ? "object-center lg:object-right" : "object-center"}`}
              quality={82}
            />
          ) : (
            <video
              key={slide.src}
              autoPlay={!reduceMotion}
              muted
              loop={!reduceMotion}
              playsInline
              preload="none"
              poster={slide.poster}
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src={slide.src} type="video/mp4" />
            </video>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
      <div
        className={`absolute inset-0 ${
          isArabic
            ? "bg-gradient-to-l from-black/70 via-black/30 to-transparent"
            : "bg-gradient-to-r from-black/70 via-black/30 to-transparent"
        }`}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1280px] items-end px-5 pb-28 pt-36 md:px-8 md:pb-32 lg:px-10 lg:pb-36">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`${slide.key}-content`}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : -12 }}
            transition={{ duration: reduceMotion ? 0 : 0.45 }}
            className="max-w-4xl"
            aria-live={paused || reduceMotion ? "polite" : "off"}
          >
            <p className="mb-5 flex items-center gap-3 text-sm font-bold text-[#e2b95f]">
              <span className="h-px w-9 bg-[#e2b95f]" aria-hidden="true" />
              {t("eyebrow")}
            </p>
            <h1 className="max-w-4xl text-4xl leading-[1.08] font-bold text-white md:text-6xl lg:text-[72px]">
              {t(`${slide.key}.title`)}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
              {t(`${slide.key}.description`)}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/request-quote"
                className="group inline-flex min-h-12 items-center gap-3 rounded-[6px] bg-[#b58a32] px-6 py-3 font-semibold text-primary transition hover:brightness-110"
              >
                {common("requestQuote")}
                <ArrowUpRight
                  size={19}
                  aria-hidden="true"
                  className="transition-transform group-hover:-translate-y-0.5"
                />
              </Link>
              <Link
                href="/products"
                className="inline-flex min-h-12 items-center rounded-[6px] border border-white/65 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-primary"
              >
                {t("secondary")}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-4 md:inset-x-8 md:bottom-7 lg:inset-x-10">
          <div className="flex items-center gap-1" role="group" aria-label={t("carouselControls")}>
            {slides.map((item, index) => (
              <button
                key={item.src}
                type="button"
                aria-label={t("slideNumber", { number: index + 1 })}
                aria-pressed={index === activeSlide}
                onClick={() => setActiveSlide(index)}
                className="flex min-h-11 min-w-11 items-center justify-center"
              >
                <span
                  className={`h-[3px] transition-all duration-300 ${
                    index === activeSlide
                      ? "w-10 bg-[#e2b95f]"
                      : "w-6 bg-white/50 hover:bg-white/80"
                  }`}
                />
              </button>
            ))}
            {!reduceMotion && (
              <button
                type="button"
                aria-label={paused ? t("play") : t("pause")}
                onClick={() => setPaused((value) => !value)}
                className="ms-1 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition hover:bg-white hover:text-primary"
              >
                {paused ? <Play size={18} /> : <Pause size={18} />}
              </button>
            )}
          </div>

          <div className="flex gap-2" dir="ltr">
            <button
              type="button"
              aria-label={t("previous")}
              onClick={previousSlide}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/45 text-white transition hover:bg-white hover:text-primary"
            >
              {isArabic ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
            </button>
            <button
              type="button"
              aria-label={t("next")}
              onClick={nextSlide}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/45 text-white transition hover:bg-white hover:text-primary"
            >
              {isArabic ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
