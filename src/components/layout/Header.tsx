"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Link, usePathname } from "@/i18n/navigation";
import { navigationItems } from "@/lib/constants";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const nav = useTranslations("Navigation");
  const common = useTranslations("Common");
  const locale = useLocale();
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);

  const isHome = pathname === "/";
  const isArabic = locale === "ar";

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

  const companyTitle = isArabic
    ? "مصنع الهلال للإنتاج والتوريد"
    : "Al-Hilal Factory for Production & Supply";

  return (
    <header
      className={`${isHome ? "fixed" : "sticky"} inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        transparent
          ? "border-white/15 bg-transparent text-white"
          : "border-border bg-background/95 text-primary shadow-sm backdrop-blur-xl"
      }`}
    >
      {/* Top Company Title */}
   {/* Premium Brand Ribbon */}
<div className="relative overflow-hidden border-b border-[#B98522]/40 bg-[#090806]">
  {/* Gold ambient glow */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-120%,rgba(212,164,62,0.28),transparent_58%)]"
  />

  {/* Animated golden shine */}
  <div
    aria-hidden="true"
    className="brand-ribbon-shine pointer-events-none absolute inset-y-0 -left-1/3 w-1/3"
  />

  {/* Top gold hairline */}
  <div
    aria-hidden="true"
    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D7A542] to-transparent"
  />

  <div className="relative mx-auto flex h-[46px] max-w-[1280px] items-center justify-center px-5">
    <div className="flex items-center gap-4">
      {/* Left ornament */}
      <span
        aria-hidden="true"
        className="hidden h-px w-16 bg-gradient-to-l from-[#D7A542] to-transparent sm:block"
      />

      <span
        aria-hidden="true"
        className="h-1.5 w-1.5 rotate-45 border border-[#D7A542] bg-[#D7A542]/20"
      />

      <div className="text-center">
        <p
          className="brand-ribbon-title whitespace-nowrap text-[13px] font-semibold tracking-[0.04em] text-[#F7E7B4] sm:text-[14px] md:text-[15px]"
          dir={isArabic ? "rtl" : "ltr"}
        >
          {isArabic
            ? "مصنع الهلال للإنتاج والتوريد"
            : "AL-HILAL FACTORY FOR PRODUCTION & SUPPLY"}
        </p>
      </div>

      <span
        aria-hidden="true"
        className="h-1.5 w-1.5 rotate-45 border border-[#D7A542] bg-[#D7A542]/20"
      />

      {/* Right ornament */}
      <span
        aria-hidden="true"
        className="hidden h-px w-16 bg-gradient-to-r from-[#D7A542] to-transparent sm:block"
      />
    </div>
  </div>

  {/* Bottom glow line */}
  <div
    aria-hidden="true"
    className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#8D641B]/80 to-transparent"
  />
</div>

      {/* Main Header */}
      <div className="mx-auto flex h-[88px] w-full max-w-[1280px] items-center justify-between gap-4 px-5 md:px-8 lg:h-[92px] lg:px-10">
        {/* Logo */}
        <Link
          href="/"
          className="flex min-h-12 shrink-0 items-center"
          aria-label={nav("home")}
        >
          <Image
            src="/brand/logo/al-hilal-logo.png"
            alt={common("brand")}
            width={180}
            height={180}
            priority
            className="h-auto w-[86px] md:w-[108px] lg:w-[122px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-4 lg:flex xl:gap-6"
          aria-label={nav("menu")}
        >
          {navigationItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`flex min-h-11 items-center text-sm font-semibold transition-colors ${
                transparent
                  ? "text-white/90 hover:text-white"
                  : "text-primary/85 hover:text-brick"
              }`}
            >
              {nav(item.key)}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-2 md:gap-3">
          <LanguageSwitcher light={transparent} />

          <Link
            href="/request-quote"
            className={`hidden min-h-11 items-center rounded-[6px] px-4 py-2 text-sm font-semibold transition md:inline-flex ${
              transparent
                ? "bg-gold text-white hover:brightness-110"
                : "bg-primary text-white hover:bg-secondary"
            }`}
          >
            {nav("quote")}
          </Link>

          <MobileMenu light={transparent} />
        </div>
      </div>
    </header>
  );
}