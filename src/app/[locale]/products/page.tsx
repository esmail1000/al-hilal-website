import { ArrowUpRight } from "lucide-react";
import { getLocale } from "next-intl/server";

import Product3DViewer from "@/components/products/Product3DViewer";
import { Link } from "@/i18n/navigation";
import { products } from "@/lib/products";

export default async function ProductsPage() {
  const locale = await getLocale();
  const isArabic = locale === "ar";

  return (
    <section className="bg-background py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8 lg:px-10">

        {/* Heading */}
        <div className={isArabic ? "text-right" : "text-left"}>
          <p className="mb-4 text-2xl font-bold text-gold md:text-3xl">
            {isArabic ? "منتجاتنا" : "Our Products"}
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-[1.1] text-primary md:text-5xl lg:text-[60px]">
            {isArabic
              ? "أول منتجات الطوب الأحمر ثلاثية الأبعاد"
              : "Our First 3D Red Clay Brick Products"}
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
            {isArabic
              ? "يمكن للعميل تدوير المنتج 360 درجة ومعاينته من جميع الزوايا مباشرة داخل الموقع."
              : "Customers can rotate each product 360 degrees and inspect it interactively from every angle directly on the website."}
          </p>
        </div>

        {/* Products Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {products.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-[12px] border border-border bg-surface"
            >
              <Product3DViewer
                src={product.modelSrc}
                alt={isArabic ? product.name.ar : product.name.en}
              />

              <div className="p-6 md:p-7">
                <p className="text-sm font-semibold text-gold">
                  {isArabic ? product.category.ar : product.category.en}
                </p>

                <h2 className="mt-3 text-2xl font-bold text-primary md:text-3xl">
                  {isArabic ? product.name.ar : product.name.en}
                </h2>

                <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
                  {isArabic
                    ? product.description.ar
                    : product.description.en}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="rounded-[6px] bg-muted px-4 py-2 text-sm font-medium text-primary">
                    {isArabic
                      ? `عدد الفتحات: ${product.holes}`
                      : `Holes: ${product.holes}`}
                  </div>

                  <div className="rounded-[6px] bg-muted px-4 py-2 text-sm font-medium text-primary">
                    {isArabic ? "3D Model" : "3D Model"}
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-4">
                  <Link
                    href="/request-quote"
                    className="group inline-flex min-h-12 items-center gap-3 rounded-[6px] bg-gold px-6 py-3 font-semibold text-white transition hover:brightness-110"
                  >
                    {isArabic ? "اطلب عرض سعر" : "Request a Quote"}

                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex min-h-12 items-center rounded-[6px] border border-primary px-6 py-3 font-semibold text-primary transition hover:bg-primary hover:text-white"
                  >
                    {isArabic ? "تواصل معنا" : "Contact Us"}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}