"use client";

import { useLocale, useTranslations } from "next-intl";
import { useState, type FormEvent } from "react";
import { categories } from "@/lib/constants";
import { products } from "@/lib/products";

type Key =
  | "name"
  | "company"
  | "phone"
  | "whatsapp"
  | "email"
  | "projectName"
  | "location"
  | "category"
  | "product"
  | "size"
  | "quantity"
  | "unit"
  | "delivery"
  | "requirements";
type Values = Record<Key, string>;
const empty: Values = {
  name: "",
  company: "",
  phone: "",
  whatsapp: "",
  email: "",
  projectName: "",
  location: "",
  category: "",
  product: "",
  size: "",
  quantity: "",
  unit: "pieces",
  delivery: "",
  requirements: "",
};
const clean = (s: string) =>
  s
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
const inputStyle =
  "mt-2 min-h-12 w-full rounded-md border border-border bg-white px-4 py-3 text-primary focus:border-brick";

export default function QuoteForm({
  initialProduct,
}: {
  initialProduct?: string;
}) {
  const selected = products.find((p) => p.slug === initialProduct);
  const [form, setForm] = useState<Values>({
    ...empty,
    category: selected?.category || "",
    product: selected?.id || "",
    size: selected?.dimensions || "",
  });
  const [draft, setDraft] = useState("");
  const [feedback, setFeedback] = useState("");
  const locale = useLocale() as "ar" | "en";
  const t = useTranslations("QuoteForm");
  const cats = useTranslations("ProductCategories");
  function update(key: Key, value: string) {
    setDraft("");
    setFeedback("");
    setForm((prev) => ({
      ...prev,
      [key]: value,
      ...(key === "category" ? { product: "", size: "" } : {}),
    }));
  }
  function field(key: Key, type = "text", required = false) {
    return (
      <label key={key} className="block text-sm font-semibold">
        {t(key)}
        {!required && (
          <span className="ms-1 font-normal text-muted-foreground">
            ({t("optional")})
          </span>
        )}
        <input
          name={key}
          className={inputStyle}
          type={type}
          dir={
            ["phone", "whatsapp", "email", "quantity"].includes(key)
              ? "ltr"
              : undefined
          }
          required={required}
          value={form[key]}
          onChange={(e) => update(key, e.target.value)}
          maxLength={160}
          min={type === "number" ? "1" : undefined}
          step={type === "number" ? "any" : undefined}
          autoComplete={
            key === "name"
              ? "name"
              : key === "email"
                ? "email"
                : key === "phone"
                  ? "tel"
                  : undefined
          }
        />
      </label>
    );
  }
  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const v = Object.fromEntries(
      Object.entries(form).map(([k, value]) => [k, clean(value)]),
    ) as Values;
    const validPhone = (s: string) => {
      const digits = s.replace(/\D/g, "");
      return (
        /^[+0-9 ()-]+$/.test(s) && digits.length >= 7 && digits.length <= 15
      );
    };
    const quantity = Number(v.quantity);
    if (
      !v.name ||
      !v.location ||
      !validPhone(v.phone) ||
      (v.whatsapp && !validPhone(v.whatsapp)) ||
      (v.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) ||
      !Number.isFinite(quantity) ||
      quantity <= 0 ||
      !products.some((p) => p.id === v.product && p.category === v.category)
    ) {
      setFeedback(t("error"));
      return;
    }
    const product = products.find((p) => p.id === v.product);
    const category = categories.find((c) => c === v.category);
    const unit =
      (["pieces", "pallets", "loads", "otherUnit"] as const).find(
        (x) => x === v.unit,
      ) || "pieces";
    const rows: [string, string][] = [
      [t("name"), v.name],
      [t("company"), v.company],
      [t("phone"), v.phone],
      [t("whatsapp"), v.whatsapp],
      [t("email"), v.email],
      [t("projectName"), v.projectName],
      [t("location"), v.location],
      [t("category"), category ? cats(category) : ""],
      [t("product"), product?.name[locale] || ""],
      [t("size"), v.size],
      [t("quantity"), `${v.quantity} ${t(unit)}`],
      [t("delivery"), v.delivery],
      [t("requirements"), v.requirements],
    ];
    setDraft(
      [
        t("shareTitle"),
        ...rows
          .filter(([, value]) => value)
          .map(([label, value]) => `${label}: ${value}`),
        "",
        t("generatedNotice"),
      ].join("\n"),
    );
    setFeedback("");
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(draft);
      setFeedback(t("copied"));
    } catch {
      setFeedback(t("copyFailed"));
    }
  }
  async function share() {
    if (!navigator.share) {
      setFeedback(t("shareUnavailable"));
      return;
    }
    try {
      await navigator.share({ title: t("shareTitle"), text: draft });
      setFeedback("");
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      setFeedback(t("shareUnavailable"));
    }
  }
  return (
    <div className="border border-border bg-surface p-5 md:p-9">
      <form onSubmit={prepare} className="grid gap-6 md:grid-cols-2">
        {field("name", "text", true)}
        {field("company")}
        {field("phone", "tel", true)}
        {field("whatsapp", "tel")}
        {field("email", "email")}
        {field("projectName")}
        {field("location", "text", true)}
        <label className="text-sm font-semibold">
          {t("category")}
          <select
            required
            className={inputStyle}
            name="category"
            value={form.category}
            onChange={(e) => update("category", e.target.value)}
          >
            <option value="">{t("select")}</option>
            {categories.map((c) => (
              <option value={c} key={c}>
                {cats(c)}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm font-semibold">
          {t("product")}
          <select
            required
            className={inputStyle}
            name="product"
            value={form.product}
            onChange={(e) => {
              const p = products.find((p) => p.id === e.target.value);
              setDraft("");
              setForm((prev) => ({
                ...prev,
                product: e.target.value,
                size: p?.dimensions || "",
              }));
            }}
          >
            <option value="">{t("select")}</option>
            {products
              .filter((p) => p.category === form.category)
              .map((p) => (
                <option value={p.id} key={p.id}>
                  {p.name[locale]}
                </option>
              ))}
          </select>
        </label>
        {field("size")}
        {field("quantity", "number", true)}
        <label className="text-sm font-semibold">
          {t("unit")}
          <select
            className={inputStyle}
            name="unit"
            value={form.unit}
            onChange={(e) => update("unit", e.target.value)}
          >
            {(["pieces", "pallets", "loads", "otherUnit"] as const).map(
              (key) => (
                <option key={key} value={key}>
                  {t(key)}
                </option>
              ),
            )}
          </select>
        </label>
        {(["delivery", "requirements"] as const).map((key) => (
          <label key={key} className="text-sm font-semibold md:col-span-2">
            {t(key)}
            <textarea
              className={inputStyle}
              name={key}
              value={form[key]}
              onChange={(e) => update(key, e.target.value)}
              rows={3}
              maxLength={1000}
            />
          </label>
        ))}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="min-h-12 rounded-md bg-primary px-7 py-3 font-semibold text-white hover:bg-secondary"
          >
            {t("prepare")}
          </button>
        </div>
      </form>
      {draft && (
        <section
          aria-label={t("preview")}
          className="mt-9 border-t border-border pt-7"
        >
          <h2 className="text-xl font-bold">{t("preview")}</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {t("generatedNotice")}
          </p>
          <textarea
            aria-label={t("preview")}
            readOnly
            value={draft}
            rows={17}
            dir={locale === "ar" ? "rtl" : "ltr"}
            className="mt-4 w-full resize-y rounded-md border border-border bg-background p-4 text-sm leading-7"
          />
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={copy}
              className="min-h-12 rounded-md bg-primary px-6 py-3 font-semibold text-white"
            >
              {t("copy")}
            </button>
            <button
              type="button"
              onClick={share}
              className="min-h-12 rounded-md border border-primary px-6 py-3 font-semibold"
            >
              {t("share")}
            </button>
          </div>
        </section>
      )}
      {feedback && (
        <p
          role="status"
          aria-live="polite"
          className="mt-4 text-sm font-semibold text-brick"
        >
          {feedback}
        </p>
      )}
    </div>
  );
}
