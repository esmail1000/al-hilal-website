"use client";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { navigationItems } from "@/lib/constants";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("Navigation");
  const pathname = usePathname();
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-label={open ? t("close") : t("menu")}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen(!open)}
        className="flex h-11 w-11 items-center justify-center rounded-md border border-border text-primary"
      >
        {open ? <X size={23} /> : <Menu size={23} />}
      </button>
      {open && (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full max-h-[calc(100svh-80px)] overflow-y-auto border-t border-border bg-background shadow-xl"
        >
          <nav
            aria-label={t("menu")}
            className="page-container flex flex-col py-4"
          >
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center border-b border-border text-base font-semibold"
              >
                {t(item.key)}
              </Link>
            ))}
            <Link
              href="/request-quote"
              onClick={() => setOpen(false)}
              className="mt-4 flex min-h-12 items-center justify-center rounded-md bg-primary p-3 font-semibold text-white"
            >
              {t("quote")}
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
