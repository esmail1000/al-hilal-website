import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { navigationItems, categories } from "@/lib/constants";

export default async function Footer() {
  const t = await getTranslations("Footer");
  const n = await getTranslations("Navigation");
  const c = await getTranslations("ProductCategories");
  return (
    <footer className="bg-primary text-white">
      <div className="page-container grid gap-9 py-16 md:grid-cols-3">
        <div>
          <Link href="/" aria-label={n("home")} className="inline-flex">
            <Image
              src="/brand/logo/al-hilal-logo.png"
              alt=""
              width={130}
              height={75}
              className="h-[90px] w-auto"
            />
          </Link>
          <p className="mt-5 max-w-sm leading-8 text-white/75">
            {t("description")}
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold text-white">{t("quick")}</h2>
          <nav className="mt-4 grid grid-cols-2 gap-3">
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="min-h-11 text-sm text-white/75 hover:text-white"
              >
                {n(item.key)}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h2 className="text-lg font-bold text-white">{t("families")}</h2>
          <div className="mt-4 flex flex-col gap-1">
            {categories.map((item) => (
              <Link
                key={item}
                href={`/products#${item}`}
                className="min-h-10 text-sm text-white/75 hover:text-white"
              >
                {c(item)}
              </Link>
            ))}
          </div>
          <Link
            href="/request-quote"
            className="mt-5 inline-flex min-h-11 items-center border-b border-[#e2b95f] font-semibold text-[#e2b95f]"
          >
            {t("inquiry")} ↗
          </Link>
        </div>
      </div>
      <div className="border-t border-white/20">
        <div className="page-container flex flex-wrap justify-between gap-4 py-6 text-sm text-white/65">
          <span>
            © {new Date().getFullYear()} {t("copyright")}
          </span>
          <span>{t("contactPending")}</span>
        </div>
      </div>
    </footer>
  );
}
