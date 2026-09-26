"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { navigationItems } from "@/lib/constants";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const nav = useTranslations("Navigation");
  const common = useTranslations("Common");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={`${isHome ? "fixed" : "sticky"} inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        transparent
          ? "border-white/15 bg-transparent text-white"
          : "border-border bg-background/95 text-primary shadow-sm backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex h-[88px] w-full max-w-[1280px] items-center justify-between gap-4 px-5 md:px-8 lg:h-[92px] lg:px-10">
        <Link href="/" className="flex min-h-12 shrink-0 items-center" aria-label={nav("home")}>
          <Image
            src="/brand/logo/al-hilal-logo.png"
            alt={common("brand")}
            width={180}
            height={180}
            priority
            className="h-auto w-[86px] md:w-[108px] lg:w-[122px]"
          />
        </Link>

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
