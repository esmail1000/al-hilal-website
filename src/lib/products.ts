import type { Category } from "./constants";

type Localized = { ar: string; en: string };
export type Product = {
  id: string;
  slug: string;
  category: Category;
  name: Localized;
  dimensions?: string;
  weightKg?: string;
  densityKgM3?: string;
  manufacturingType?: Localized;
  modelSrc?: string;
};

// Measurements are transcribed from pages 4–6 of the supplied profile.
// The brochure does not label the dimension unit, so no unit is asserted.
export const products: Product[] = [
  {
    id: "clay-double-20",
    slug: "clay-double-20",
    category: "clay",
    name: { ar: "طوب دوبل 20", en: "Double red clay brick 20" },
    dimensions: "20 × 12 × 10",
    modelSrc: "/models/products/red-clay-double-10-hole.glb",
  },
  {
    id: "clay-double-24",
    slug: "clay-double-24",
    category: "clay",
    name: { ar: "طوب دوبل 24", en: "Double red clay brick 24" },
    dimensions: "24 × 12 × 11",
  },
  {
    id: "clay-double-25",
    slug: "clay-double-25",
    category: "clay",
    name: { ar: "طوب دوبل 25", en: "Double red clay brick 25" },
    dimensions: "25 × 12 × 12",
  },
  {
    id: "clay-fardani-20",
    slug: "clay-fardani-20",
    category: "clay",
    name: { ar: "طوب فرداني 20", en: "Fardani red clay brick 20" },
    dimensions: "20 × 10 × 6",
    modelSrc: "/models/products/red-clay-fardani-8-hole.glb",
  },
  {
    id: "clay-fardani-24",
    slug: "clay-fardani-24",
    category: "clay",
    name: { ar: "طوب فرداني 24", en: "Fardani red clay brick 24" },
    dimensions: "24 × 11 × 6",
  },
  {
    id: "concrete-solid-20",
    slug: "concrete-solid-20",
    category: "concrete",
    name: { ar: "مصمت 20", en: "Solid concrete brick 20" },
    dimensions: "20 × 10 × 6",
    weightKg: "2.5",
    densityKgM3: "2090",
  },
  {
    id: "concrete-solid-25",
    slug: "concrete-solid-25",
    category: "concrete",
    name: { ar: "مصمت 25", en: "Solid concrete brick 25" },
    dimensions: "25 × 12 × 6",
    weightKg: "3.6",
    densityKgM3: "2050",
  },
  {
    id: "concrete-hollow-10",
    slug: "concrete-hollow-10",
    category: "concrete",
    name: { ar: "بلوك 10 مفرغ", en: "Hollow concrete block 10" },
    dimensions: "40 × 20 × 10",
    weightKg: "12",
    densityKgM3: "2172",
  },
  {
    id: "concrete-hollow-12",
    slug: "concrete-hollow-12",
    category: "concrete",
    name: { ar: "بلوك 12 مفرغ", en: "Hollow concrete block 12" },
    dimensions: "40 × 20 × 12",
    weightKg: "13",
    densityKgM3: "2191",
  },
  {
    id: "concrete-hollow-20",
    slug: "concrete-hollow-20",
    category: "concrete",
    name: { ar: "بلوك 20 مفرغ", en: "Hollow concrete block 20" },
    dimensions: "40 × 20 × 20",
    weightKg: "19",
    densityKgM3: "2125",
  },
  {
    id: "concrete-hollow-25-large",
    slug: "concrete-hollow-25-large",
    category: "concrete",
    name: { ar: "بلوك 25 مفرغ — كبير", en: "Hollow concrete block 25 — large" },
    dimensions: "40 × 20 × 25",
    weightKg: "24",
    densityKgM3: "2177",
  },
  {
    id: "concrete-hollow-25-small",
    slug: "concrete-hollow-25-small",
    category: "concrete",
    name: { ar: "بلوك 25 مفرغ — صغير", en: "Hollow concrete block 25 — small" },
    dimensions: "20 × 12 × 25",
    weightKg: "3.5",
    densityKgM3: "1849",
  },
  {
    id: "curb-garden",
    slug: "curb-garden",
    category: "curb",
    name: { ar: "بردورة حدائق", en: "Garden curb stone" },
    dimensions: "50 × 25 × 6",
    manufacturingType: { ar: "كبس آلي", en: "Machine pressed" },
  },
  {
    id: "curb-sidewalk",
    slug: "curb-sidewalk",
    category: "curb",
    name: { ar: "بردورة أرصفة", en: "Sidewalk curb stone" },
    dimensions: "50 × 30 × 10 × 8",
    manufacturingType: { ar: "كبس آلي", en: "Machine pressed" },
  },
  {
    id: "curb-wheel",
    slug: "curb-wheel",
    category: "curb",
    name: { ar: "بردورة عجالي", en: "Wheel curb stone" },
    dimensions: "50 × 30 × 30 × 25",
    manufacturingType: { ar: "كبس آلي", en: "Machine pressed" },
  },
  {
    id: "interlock-s",
    slug: "interlock-s",
    category: "interlock",
    name: { ar: "إنترلوك حرف S", en: "S-shaped interlock" },
  },
  {
    id: "interlock-i",
    slug: "interlock-i",
    category: "interlock",
    name: { ar: "إنترلوك حرف I", en: "I-shaped interlock" },
  },
  {
    id: "interlock-hex",
    slug: "interlock-hex",
    category: "interlock",
    name: { ar: "إنترلوك سداسي", en: "Hexagonal interlock" },
  },
  {
    id: "interlock-rectangle",
    slug: "interlock-rectangle",
    category: "interlock",
    name: { ar: "إنترلوك مستطيل", en: "Rectangular interlock" },
  },
];
