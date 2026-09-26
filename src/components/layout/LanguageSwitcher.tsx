"use client";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LanguageSwitcher({ light = false }: { light?: boolean }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("Navigation");
  function changeLanguage() {
    const destination = `${pathname}${window.location.search}${window.location.hash}`;
    router.replace(destination, { locale: locale === "ar" ? "en" : "ar" });
  }
  return (
    <button
      type="button"
      aria-label={t("language")}
      onClick={changeLanguage}
      className={`min-h-11 rounded-md border px-3 text-sm font-bold transition ${
        light
          ? "border-white/45 text-white hover:bg-white hover:text-primary"
          : "border-border text-primary hover:bg-muted"
      } ${locale === "en" ? "font-arabic" : ""}`}
      lang={locale === "ar" ? "en" : "ar"}
      dir={locale === "en" ? "rtl" : "ltr"}
    >
      {locale === "ar" ? "EN" : "العربية"}
    </button>
  );
}
