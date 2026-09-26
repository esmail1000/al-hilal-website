"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { Link } from "@/i18n/navigation";

const products = [
  {
    key: "redBricks",
    image: "/images/hero/hero-3.jpg",
    href: "/products",
    className: "lg:col-span-2 lg:row-span-2",
  },
  {
    key: "concreteBlocks",
    image: "/images/hero/hero-1.png",
    href: "/products",
    className: "",
  },
  {
    key: "curbStone",
    image: "/images/hero/hero-3.jpg",
    href: "/products",
    className: "",
  },
  {
    key: "interlock",
    image: "/images/hero/hero-1.png",
    href: "/products",
    className: "lg:col-span-2",
  },
] as const;

export default function ProductCategories() {
  const t = useTranslations("ProductCategories");
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-background py-20 text-primary md:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8 lg:px-10">

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
          className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-5 text-2xl font-bold text-gold md:text-3xl lg:text-4xl">
  {t("eyebrow")}
</p>
            <h2 className="max-w-2xl text-4xl font-bold leading-[1.1] text-primary md:text-5xl lg:text-[56px]">
              {t("title")}
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-muted-foreground">
            {t("description")}
          </p>
        </motion.div>

        <div className="grid auto-rows-[300px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">

          {products.map((product, index) => (
            <motion.article
              key={product.key}
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.2,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.55,
                delay: reduceMotion ? 0 : index * 0.08,
              }}
              className={`group relative overflow-hidden rounded-[8px] bg-secondary ${product.className}`}
            >
              <Image
                src={product.image}
                alt={t(`${product.key}.alt`)}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/5" />

              <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                <span className="mb-3 block h-[3px] w-10 bg-gold transition-all duration-300 group-hover:w-16" />

                <h3 className="text-2xl font-bold text-white md:text-3xl">
                  {t(`${product.key}.title`)}
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
                  {t(`${product.key}.description`)}
                </p>

                <Link
                  href={product.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold"
                >
                  {t("explore")}

                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}