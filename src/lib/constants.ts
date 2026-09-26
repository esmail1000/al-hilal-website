export const SITE = {
  name: { ar: "الهلال", en: "Al-Hilal" },
  // Contact details in the supplied profile belong to the source company and are
  // intentionally omitted until the owner provides Al-Hilal's current channels.
  phones: [] as string[],
  whatsapp: null as string | null,
  email: null as string | null,
  address: null as { ar: string; en: string } | null,
  googleMapsUrl: null as string | null,
  workingHours: null as { ar: string; en: string } | null,
  social: [] as { name: string; href: string }[],
  url: process.env.NEXT_PUBLIC_SITE_URL || null,
} as const;

export const navigationItems = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "products", href: "/products" },
  { key: "quality", href: "/quality" },
  { key: "projects", href: "/projects" },
  { key: "gallery", href: "/gallery" },
  { key: "contact", href: "/contact" },
] as const;

export const categories = ["clay", "concrete", "curb", "interlock"] as const;
export type Category = (typeof categories)[number];

// The owner confirmed that these relationships can be attributed to Al-Hilal.
// Spelling was checked against page 8 of the supplied Arabic profile.
export const projects = [
  {
    client: { ar: "نيو فيجن", en: "New Vision" },
    project: {
      ar: "القرية الأولمبية بالعاصمة الإدارية",
      en: "Olympic Village, New Administrative Capital",
    },
  },
  {
    client: { ar: "جولدن ماكس", en: "Golden Max" },
    project: {
      ar: "الكيان العسكري بالعاصمة الإدارية",
      en: "Military Complex, New Administrative Capital",
    },
  },
  {
    client: { ar: "مجموعة الدار الشروق", en: "Al Dar Al Shorouk Group" },
    project: {
      ar: "ميد تاون R7 بالعاصمة الإدارية",
      en: "Midtown R7, New Administrative Capital",
    },
  },
  {
    client: { ar: "مينا للمقاولات العمومية", en: "Mena General Contracting" },
    project: { ar: "العاصمة الإدارية", en: "New Administrative Capital" },
  },
  {
    client: { ar: "الأهرام", en: "Al Ahram" },
    project: { ar: "الإسماعيلية الجديدة", en: "New Ismailia" },
  },
  {
    client: { ar: "السلام", en: "Al Salam" },
    project: {
      ar: "R6 بالعاصمة الإدارية",
      en: "R6, New Administrative Capital",
    },
  },
  {
    client: { ar: "الإخلاص", en: "Al Ikhlas" },
    project: {
      ar: "R6 بالعاصمة الإدارية",
      en: "R6, New Administrative Capital",
    },
  },
  {
    client: { ar: "هيديكو", en: "Hedico" },
    project: { ar: "العاصمة الإدارية", en: "New Administrative Capital" },
  },
  {
    client: { ar: "GMC", en: "GMC" },
    project: { ar: "نادي العباسية", en: "Abbassia Club" },
  },
  {
    client: { ar: "داركو", en: "Darko" },
    project: { ar: "المنصورة الجديدة", en: "New Mansoura" },
  },
] as const;
