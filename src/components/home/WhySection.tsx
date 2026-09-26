import {
  BadgeCheck,
  ClipboardCheck,
  CalendarDays,
  Factory,
  Truck,
  Timer,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

const items = [
  { key: "quality", icon: BadgeCheck },
  { key: "standards", icon: ClipboardCheck },
  { key: "week", icon: CalendarDays },
  { key: "direct", icon: Factory },
  { key: "delivery", icon: Truck },
  { key: "speed", icon: Timer },
] as const;

export default async function WhySection() {
  const t = await getTranslations("Why");
  return (
    <section className="section-space bg-background">
      <div className="page-container">
        <p className="eyebrow">{t("eyebrow")}</p>
        <h2 className="section-title mt-4 max-w-3xl">{t("title")}</h2>
        <div className="mt-10 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ key, icon: Icon }, i) => (
            <div key={key} className="min-h-52 bg-background p-6">
              <Icon
                size={27}
                strokeWidth={1.7}
                className="text-brick"
                aria-hidden="true"
              />
              <h3 className="mt-6 text-xl font-bold">{t(key)}</h3>
              <p className="mt-2 leading-7 text-muted-foreground">
                {t(`${key}Body`)}
              </p>
              <span className="mt-4 block text-xs text-concrete" dir="ltr">
                0{i + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
