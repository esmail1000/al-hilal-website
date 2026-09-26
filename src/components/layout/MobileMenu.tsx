"use client";

import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { Link } from "@/i18n/navigation";
import { navigationItems } from "@/lib/navigation";

type Props = {
  light?: boolean;
};

export default function MobileMenu({
  light = false,
}: Props) {
  const [open, setOpen] = useState(false);
  const t = useTranslations("Navigation");

  return (
    <div className="lg:hidden">

      <button
        type="button"
        aria-label="Toggle navigation menu"
        onClick={() => setOpen(!open)}
        className={`
          flex h-11 w-11 cursor-pointer
          items-center justify-center
          rounded-[6px]
          border
          transition
          ${
            light
              ? "border-white/40 text-white"
              : "border-border text-primary"
          }
        `}
      >
        {open ? <X size={23} /> : <Menu size={23} />}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full border-t border-border bg-background shadow-xl">

          <nav className="mx-auto flex max-w-[1280px] flex-col px-5 py-6">

            {navigationItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 text-base font-semibold text-primary"
              >
                {t(item.key)}
              </Link>
            ))}

            <Link
              href="/request-quote"
              onClick={() => setOpen(false)}
              className="mt-5 flex min-h-12 items-center justify-center rounded-[6px] bg-primary px-5 text-center font-semibold text-white"
            >
              {t("quote")}
            </Link>

          </nav>

        </div>
      )}

    </div>
  );
}