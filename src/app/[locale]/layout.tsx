import "../globals.css";

import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { IBM_Plex_Sans_Arabic, Manrope } from "next/font/google";
import { notFound } from "next/navigation";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { routing } from "@/i18n/routing";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export const metadata = {
  title: {
    default: "Al-Hilal",
    template: "%s | Al-Hilal",
  },

  description:
    "Al-Hilal Building Materials Factory - Red Clay Bricks, Concrete Blocks, Curb Stones and Interlock.",

  applicationName: "Al-Hilal",
};

export default async function LocaleLayout({
  children,
  params,
}: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
   <html
  lang={locale}
  dir={direction}
  data-scroll-behavior="smooth"
  className={`${manrope.variable} ${ibmPlexArabic.variable}`}
>
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex-1">
              {children}
            </main>

            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}