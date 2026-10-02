import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import type { Metadata } from "next";
import { getLocale } from "next-intl/server";

import PageIntro from "@/components/ui/PageIntro";
import { Link } from "@/i18n/navigation";
import { routeMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return routeMetadata("contact");
}

export default async function ContactPage() {
  const locale = await getLocale();
  const isArabic = locale === "ar";

  const content = {
    eyebrow: isArabic ? "تواصل معنا" : "CONTACT US",

    title: isArabic
      ? "تواصل مباشرة مع مصنع الهلال"
      : "Contact Al-Hilal Factory",

    lead: isArabic
      ? "للاستفسار عن منتجاتنا أو التوريد أو المشروعات، يمكنك التواصل معنا مباشرة عبر الهاتف أو واتساب أو البريد الإلكتروني."
      : "For product, supply or project inquiries, contact Al-Hilal Factory directly by phone, WhatsApp or email.",

    phone: isArabic ? "الهاتف" : "Phone",

    whatsapp: isArabic ? "واتساب" : "WhatsApp",

    whatsappAction: isArabic
      ? "تواصل معنا الآن"
      : "Chat with us",

    email: isArabic ? "البريد الإلكتروني" : "Email",

    address: isArabic ? "عنوان المصنع" : "Factory Address",

    addressValue: isArabic
      ? "مركز الصف – المنطقة الصناعية"
      : "El Saff Center – Industrial Zone",

    mapAction: isArabic
      ? "فتح الموقع على Google Maps"
      : "Open in Google Maps",

    quoteTitle: isArabic
      ? "هل تحتاج إلى عرض سعر؟"
      : "Need a quotation?",

    quoteText: isArabic
      ? "حدد المنتجات والكميات وموقع التسليم وأرسل طلبك لفريق مصنع الهلال."
      : "Select the products, quantities and delivery location and send your request to Al-Hilal Factory.",

    quoteButton: isArabic
      ? "اطلب عرض سعر"
      : "Request a Quote",
  };

  return (
    <>
      <PageIntro
        eyebrow={content.eyebrow}
        title={content.title}
        lead={content.lead}
      />

      {/* Contact Methods */}
      <section className="section-space bg-background">
        <div className="page-container">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

            {/* Phone 1 */}
            <a
              href="tel:+201096862828"
              className="group rounded-3xl border border-border bg-card p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/5">
                <Phone className="h-5 w-5 text-primary" />
              </div>

              <p className="mt-6 text-sm font-semibold text-muted-foreground">
                {content.phone}
              </p>

              <p className="mt-2 text-xl font-bold" dir="ltr">
                +20 10 96862828
              </p>
            </a>

            {/* Phone 2 */}
            <a
              href="tel:+201017400302"
              className="group rounded-3xl border border-border bg-card p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/5">
                <Phone className="h-5 w-5 text-primary" />
              </div>

              <p className="mt-6 text-sm font-semibold text-muted-foreground">
                {content.phone}
              </p>

              <p className="mt-2 text-xl font-bold" dir="ltr">
                +20 10 17400302
              </p>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/201096862828"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-border bg-card p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/5">
                <MessageCircle className="h-5 w-5 text-primary" />
              </div>

              <p className="mt-6 text-sm font-semibold text-muted-foreground">
                {content.whatsapp}
              </p>

              <div className="mt-2 flex items-center gap-2 text-lg font-bold">
                <span>{content.whatsappAction}</span>
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:esmailasadd55@gamil.com"
              className="group rounded-3xl border border-border bg-card p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/5">
                <Mail className="h-5 w-5 text-primary" />
              </div>

              <p className="mt-6 text-sm font-semibold text-muted-foreground">
                {content.email}
              </p>

              <p className="mt-2 break-all text-base font-bold" dir="ltr">
                esmailasadd55@gamil.com
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Address */}
      <section className="pb-20 md:pb-28">
        <div className="page-container">
          <div className="rounded-3xl border border-border bg-surface p-8 md:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white">
                <MapPin className="h-6 w-6" />
              </div>

              <span className="eyebrow mt-7 inline-block">
                {content.address}
              </span>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                {content.addressValue}
              </h2>

              <a
                href="https://maps.app.goo.gl/oviwLbg7deZNheG58"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3 font-semibold text-white transition hover:opacity-90"
              >
                {content.mapAction}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="pb-20 md:pb-28">
        <div className="page-container">
          <div className="rounded-3xl bg-primary px-7 py-12 text-center text-white md:px-12 md:py-16">
            <h2 className="text-3xl font-bold md:text-4xl">
              {content.quoteTitle}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              {content.quoteText}
            </p>

            <Link
              href="/request-quote"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-7 py-3 font-bold text-primary transition hover:bg-white/90"
            >
              {content.quoteButton}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}