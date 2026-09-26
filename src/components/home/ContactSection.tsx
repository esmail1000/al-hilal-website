"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
    ArrowUpLeft,
    ArrowUpRight,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

import { SITE } from "@/lib/constants";

export default function ContactSection() {
  const t = useTranslations("ContactHome");
  const locale = useLocale();
  const reduceMotion = useReducedMotion();

  const isArabic = locale === "ar";
  const ArrowIcon = isArabic ? ArrowUpLeft : ArrowUpRight;

  const contactItems = [
    {
      key: "phone",
      title: t("phoneTitle"),
      value: SITE.phone,
      href: `tel:${SITE.phone}`,
      icon: Phone,
      external: false,
    },
    {
      key: "whatsapp",
      title: t("whatsappTitle"),
      value: SITE.phone,
      href: `https://wa.me/${SITE.whatsapp}`,
      icon: MessageCircle,
      external: true,
    },
    {
      key: "email",
      title: t("emailTitle"),
      value: SITE.email,
      href: `mailto:${SITE.email}`,
      icon: Mail,
      external: false,
    },
    {
      key: "location",
      title: t("addressTitle"),
      value: isArabic ? SITE.address.ar : SITE.address.en,
      href: SITE.googleMapsUrl,
      icon: MapPin,
      external: true,
    },
  ] as const;

  return (
    <section className="overflow-hidden bg-[#171717] text-white">

      {/* =========================
          Heading + Logo
      ========================== */}
      <div className="border-b border-white/15">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 md:px-8 md:py-20 lg:px-10 lg:py-24">

          <motion.div
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 30,
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
              duration: reduceMotion ? 0 : 0.6,
            }}
            className="grid items-center gap-10 lg:grid-cols-[1fr_auto]"
            dir="ltr"
          >

            {/* Text */}
            <div
              dir={isArabic ? "rtl" : "ltr"}
              className={isArabic ? "text-right" : "text-left"}
            >
              <p className="mb-5 text-xl font-bold text-gold md:text-2xl">
                {t("eyebrow")}
              </p>

              <h2 className="max-w-4xl text-4xl font-bold leading-[1.1] text-white md:text-5xl lg:text-[60px]">
                {t("title")}
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
                {t("description")}
              </p>
            </div>

            {/* Logo */}
            <div className="flex shrink-0 justify-center lg:justify-end">
              <motion.div
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        scale: 1.04,
                        y: -4,
                      }
                }
                transition={{
                  duration: 0.25,
                }}
              >
                <Image
                  src="/brand/logo/al-hilal-logo.png"
                  alt="Al-Hilal"
                  width={240}
                  height={240}
                  className="h-auto w-[150px] object-contain md:w-[180px] lg:w-[210px]"
                />
              </motion.div>
            </div>

          </motion.div>
        </div>
      </div>

      {/* =========================
          Contact Cards
      ========================== */}
      <div>
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 px-5 md:grid-cols-2 md:px-8 lg:grid-cols-4 lg:px-10">

          {contactItems.map((item, index) => {
            const Icon = item.icon;

            const valueNeedsLTR =
              item.key === "phone" ||
              item.key === "whatsapp" ||
              item.key === "email";

            return (
              <motion.a
                key={item.key}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: false,
                  amount: 0.25,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.5,
                  delay: reduceMotion ? 0 : index * 0.07,
                }}
                className="
                  group
                  relative
                  min-h-[270px]
                  cursor-pointer
                  border-b
                  border-white/15
                  px-7
                  py-8
                  transition-all
                  duration-300
                  md:border-e
                  lg:border-b-0
                  hover:bg-gold
                "
              >
                <div className="flex h-full flex-col justify-between">

                  {/* Icon + Arrow */}
                  <div className="flex items-start justify-between">

                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-gold
                        text-gold
                        transition-all
                        duration-300
                        group-hover:border-white
                        group-hover:bg-white
                        group-hover:text-primary
                      "
                    >
                      <Icon size={24} strokeWidth={1.8} />
                    </div>

                    <ArrowIcon
                      size={24}
                      className="
                        text-white/30
                        transition-all
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:text-white
                      "
                    />

                  </div>

                  {/* Details */}
                  <div className="mt-14">

                    <p
                      className="
                        text-sm
                        font-semibold
                        text-gold
                        transition-colors
                        group-hover:text-white/75
                      "
                    >
                      0{index + 1}
                    </p>

                    <h3 className="mt-3 text-2xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p
                      dir={valueNeedsLTR ? "ltr" : undefined}
                      className={`
                        mt-3
                        break-words
                        text-sm
                        leading-7
                        text-white/55
                        transition-colors
                        group-hover:text-white
                        ${
                          valueNeedsLTR && isArabic
                            ? "text-right"
                            : ""
                        }
                      `}
                    >
                      {item.value}
                    </p>

                  </div>

                </div>
              </motion.a>
            );
          })}

        </div>
      </div>

      {/* =========================
          Bottom Line
      ========================== */}
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-6 text-sm text-white/40 md:px-8 lg:px-10">

          <span>Al-Hilal</span>

          <span className="font-semibold text-gold">
            {isArabic ? "نبني معًا" : "Building Together"}
          </span>

        </div>
      </div>

    </section>
  );
}