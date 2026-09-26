"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Link, usePathname } from "@/i18n/navigation";
import { navigationItems } from "@/lib/navigation";

import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const nav = useTranslations("Navigation");
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={`
        ${
          isHome
            ? "fixed"
            : "sticky"
        }
        left-0 right-0 top-0 z-50
        border-b
        transition-all
        duration-300
        ${
          transparent
            ? "border-white/15 bg-transparent text-white"
            : "border-border bg-background/95 text-primary shadow-sm backdrop-blur-xl"
        }
      `}
    >
      <div className="mx-auto flex h-[92px] w-full max-w-[1280px] items-center justify-between gap-6 px-5 md:px-8 lg:px-10">

        <Link href="/" className="shrink-0">
          <Image
            src="/brand/logo/al-hilal-logo.png"
            alt="Al-Hilal"
            width={180}
            height={180}
            priority
            className="h-auto w-[100px] md:w-[115px] lg:w-[125px]"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`
                text-sm font-semibold
                transition-colors
                ${
                  transparent
                    ? "text-white/90 hover:text-white"
                    : "text-primary/80 hover:text-primary"
                }
              `}
            >
              {nav(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">

          <LanguageSwitcher light={transparent} />

          <Link
            href="/request-quote"
            className={`
              hidden min-h-11 items-center
              rounded-[6px]
              px-5 py-2
              text-sm font-semibold
              transition
              md:inline-flex
              ${
                transparent
                  ? "bg-gold text-white hover:brightness-110"
                  : "bg-primary text-white hover:bg-secondary"
              }
            `}
          >
            {nav("quote")}
          </Link>

          <MobileMenu light={transparent} />

        </div>

      </div>
    </header>
  );
}