"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { navigationItems } from "@/lib/constants";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const nav = useTranslations("Navigation");
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-lg">
      <div className="mx-auto flex h-[80px] max-w-[1280px] items-center justify-between gap-4 px-5 md:px-8 lg:px-10">
        <Link
          href="/"
          className="flex min-h-12 shrink-0 items-center gap-2"
          aria-label={nav("home")}
        >
          <Image
            src="/brand/logo/al-hilal-logo.png"
            alt=""
            width={120}
            height={66}
            priority
            className="h-[65px] w-auto"
          />
          <span className="hidden font-bold lg:inline">{nav("home")}</span>
        </Link>
        <nav
          className="hidden items-center gap-4 xl:flex"
          aria-label={nav("menu")}
        >
          {navigationItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="flex min-h-11 items-center text-sm font-semibold text-primary/85 transition hover:text-brick"
            >
              {nav(item.key)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <Link
            href="/request-quote"
            className="hidden min-h-11 items-center rounded-md bg-primary px-4 text-sm font-semibold text-white transition hover:bg-secondary md:inline-flex"
          >
            {nav("quote")}
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
