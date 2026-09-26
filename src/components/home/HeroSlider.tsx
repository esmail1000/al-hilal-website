"use client";

import {
    AnimatePresence,
    motion,
    useReducedMotion,
} from "framer-motion";
import {
    ArrowUpRight,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Link } from "@/i18n/navigation";

const SLIDE_DURATION = 4000;

const slides = [
  {
    type: "image",
    src: "/images/hero/hero-1.png",
    key: "factory",
  },
  {
    type: "video",
    src: "/images/hero/hero-2.mp4",
    key: "production",
  },
  {
    type: "image",
    src: "/images/hero/hero-3.jpg",
    key: "products",
  },
] as const;

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const t = useTranslations("Hero");
  const locale = useLocale();
  const reduceMotion = useReducedMotion();

  const isArabic = locale === "ar";
  const slide = slides[activeSlide];

  useEffect(() => {
    if (reduceMotion) return;

    const timer = window.setTimeout(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => window.clearTimeout(timer);
  }, [activeSlide, reduceMotion]);

  function nextSlide() {
    setActiveSlide((current) => (current + 1) % slides.length);
  }

  function previousSlide() {
    setActiveSlide(
      (current) => (current - 1 + slides.length) % slides.length
    );
  }

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-primary">

      {/* Background media */}
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        >
          {slide.type === "image" ? (
            <motion.div
              initial={{ scale: 1 }}
              animate={{
                scale: reduceMotion ? 1 : 1.04,
              }}
              transition={{
                duration: reduceMotion ? 0 : 4,
                ease: "linear",
              }}
              className="absolute inset-0"
            >
              <Image
                src={slide.src}
                alt={t(`${slide.key}.alt`)}
                fill
                priority={activeSlide === 0}
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          ) : (
            <video
              key={slide.src}
              autoPlay
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src={slide.src} type="video/mp4" />
            </video>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      <div
        className={`absolute inset-0 ${
          isArabic
            ? "bg-gradient-to-l from-black/65 via-black/25 to-transparent"
            : "bg-gradient-to-r from-black/65 via-black/25 to-transparent"
        }`}
      />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1280px] items-end px-5 pb-24 pt-36 md:px-8 md:pb-28 lg:px-10 lg:pb-32">

        <AnimatePresence mode="wait">
          <motion.div
            key={`${slide.key}-content`}
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 22,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: reduceMotion ? 0 : -12,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.5,
            }}
            className="max-w-4xl"
          >
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-gold">
              AL-HILAL
            </p>

            <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] text-white md:text-6xl lg:text-[72px]">
              {t(`${slide.key}.title`)}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
              {t(`${slide.key}.description`)}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                href="/request-quote"
                className="group inline-flex min-h-12 items-center gap-3 rounded-[6px] bg-gold px-6 py-3 font-semibold text-white transition hover:brightness-110"
              >
                {t("requestQuote")}

                <ArrowUpRight
                  size={19}
                  className="transition-transform group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                href="/products"
                className="inline-flex min-h-12 items-center rounded-[6px] border border-white/60 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-primary"
              >
                {t("exploreProducts")}
              </Link>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="absolute bottom-8 left-5 right-5 flex items-center justify-between md:left-8 md:right-8 lg:left-10 lg:right-10">

          <div className="flex items-center gap-2">
            {slides.map((item, index) => (
              <button
                key={item.src}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setActiveSlide(index)}
                className={`h-[3px] cursor-pointer transition-all duration-300 ${
                  index === activeSlide
                    ? "w-12 bg-gold"
                    : "w-7 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={previousSlide}
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/40 text-white transition hover:border-white hover:bg-white hover:text-primary"
            >
              {isArabic ? (
                <ChevronRight size={20} />
              ) : (
                <ChevronLeft size={20} />
              )}
            </button>

            <button
              type="button"
              aria-label="Next slide"
              onClick={nextSlide}
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/40 text-white transition hover:border-white hover:bg-white hover:text-primary"
            >
              {isArabic ? (
                <ChevronLeft size={20} />
              ) : (
                <ChevronRight size={20} />
              )}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}