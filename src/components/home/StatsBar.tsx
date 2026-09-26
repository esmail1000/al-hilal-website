import { getTranslations } from "next-intl/server";

export default async function StatsBar() {
  const t = await getTranslations("Stats");
  return (
    <section
      className="border-b border-border bg-surface"
      aria-label={t("production")}
    >
      <div className="mx-auto grid max-w-[1280px] md:grid-cols-3">
        {(["production", "supply", "standards"] as const).map((key, index) => (
          <div
            key={key}
            className="flex min-h-24 items-center gap-5 border-b border-border px-5 py-6 last:border-b-0 md:border-b-0 md:border-e md:px-8 md:last:border-e-0"
          >
            <span className="text-lg font-bold text-brick" dir="ltr">
              0{index + 1}
            </span>
            <p className="text-base font-semibold leading-6">{t(key)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
