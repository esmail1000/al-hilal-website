"use client";

import {
  usePathname,
  useRouter,
} from "@/i18n/navigation";
import { useLocale } from "next-intl";

type Props = {
  light?: boolean;
};

export default function LanguageSwitcher({
  light = false,
}: Props) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const nextLocale = locale === "ar" ? "en" : "ar";

  function changeLanguage() {
    router.replace(pathname, {
      locale: nextLocale,
    });
  }

  return (
    <button
      type="button"
      onClick={changeLanguage}
      className={`
        min-h-11 cursor-pointer
        rounded-[6px]
        border px-3 py-2
        text-sm font-semibold
        transition
        ${
          light
            ? "border-white/40 text-white hover:bg-white hover:text-primary"
            : "border-border text-primary hover:bg-muted"
        }
      `}
    >
      {locale === "ar" ? "EN" : "العربية"}
    </button>
  );
}