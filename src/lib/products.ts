import type { Category } from "./constants";

type Localized = {
  ar: string;
  en: string;
};

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
  name: {
    ar: "طوب دوبل 20",
    en: "Double red clay brick 20",
  },
  dimensions: "20 × 12 × 10",
  modelSrc: "/models/products/red-clay-double-10-hole.glb",
},

{
  id: "clay-double-24",
  slug: "clay-double-24",
  category: "clay",
  name: {
    ar: "طوب دوبل 24",
    en: "Double red clay brick 24",
  },
  dimensions: "24 × 12 × 11",
  modelSrc: "/models/products/red-clay-double-10-hole.glb",
},

{
  id: "clay-double-25",
  slug: "clay-double-25",
  category: "clay",
  name: {
    ar: "طوب دوبل 25",
    en: "Double red clay brick 25",
  },
  dimensions: "25 × 12 × 12",
  modelSrc: "/models/products/red-clay-double-10-hole.glb",
},

{
  id: "clay-fardani-20",
  slug: "clay-fardani-20",
  category: "clay",
  name: {
    ar: "طوب فرداني 20",
    en: "Fardani red clay brick 20",
  },
  dimensions: "20 × 10 × 6",
  modelSrc: "/models/products/red-clay-fardani-8-hole.glb",
},

{
  id: "clay-fardani-24",
  slug: "clay-fardani-24",
  category: "clay",
  name: {
    ar: "طوب فرداني 24",
    en: "Fardani red clay brick 24",
  },
  dimensions: "24 × 11 × 6",
  modelSrc: "/models/products/red-clay-fardani-8-hole.glb",
},

  // ==========================================
  // الطوب والبلوك الأسمنتي
  // ==========================================

  {
    id: "concrete-solid-20",
    slug: "concrete-solid-20",
    category: "concrete",
    name: {
      ar: "مصمت 20",
      en: "Solid concrete brick 20",
    },
    dimensions: "20 × 10 × 6",
    weightKg: "2.5",
    densityKgM3: "2090",
    modelSrc: "/models/products/solid-cement-brick.glb",
  },

  {
    id: "concrete-solid-25",
    slug: "concrete-solid-25",
    category: "concrete",
    name: {
      ar: "مصمت 25",
      en: "Solid concrete brick 25",
    },
    dimensions: "25 × 12 × 6",
    weightKg: "3.6",
    densityKgM3: "2050",
    modelSrc: "/models/products/solid-cement-brick.glb",
  },

  {
  id: "concrete-hollow-10",
  slug: "concrete-hollow-10",
  category: "concrete",
  name: {
    ar: "بلوك 10 مفرغ",
    en: "Hollow concrete block 10",
  },
  dimensions: "40 × 20 × 10",
  weightKg: "12",
  densityKgM3: "2172",
  modelSrc: "/models/products/cement-block-large-small-large-3-void.glb",
},

{
  id: "concrete-hollow-12",
  slug: "concrete-hollow-12",
  category: "concrete",
  name: {
    ar: "بلوك 12 مفرغ",
    en: "Hollow concrete block 12",
  },
  dimensions: "40 × 20 × 12",
  weightKg: "13",
  densityKgM3: "2191",
  modelSrc: "/models/products/cement-block-large-small-large-3-void-bigger.glb",
},

 {
  id: "concrete-hollow-20",
  slug: "concrete-hollow-20",
  category: "concrete",
  name: {
    ar: "بلوك 20 مفرغ",
    en: "Hollow concrete block 20",
  },
  dimensions: "40 × 20 × 20",
  weightKg: "19",
  densityKgM3: "2125",
  modelSrc: "/models/products/cement-block-3-void-interlocking.glb",
},

{
  id: "concrete-hollow-25-large",
  slug: "concrete-hollow-25-large",
  category: "concrete",
  name: {
    ar: "بلوك 25 مفرغ — كبير",
    en: "Hollow concrete block 25 — large",
  },
  dimensions: "40 × 20 × 25",
  weightKg: "24",
  densityKgM3: "2177",
  modelSrc: "/models/products/cement-block-2-void-plain.glb",
},

{
  id: "concrete-hollow-25-small",
  slug: "concrete-hollow-25-small",
  category: "concrete",
  name: {
    ar: "بلوك 25 مفرغ — صغير",
    en: "Hollow concrete block 25 — small",
  },
  dimensions: "20 × 12 × 25",
  weightKg: "3.5",
  densityKgM3: "1849",
  modelSrc: "/models/products/cement-block-2-void-interlocking.glb",
},

  // ==========================================
  // البردورات
  // ==========================================

  {
  id: "curb-garden",
  slug: "curb-garden",
  category: "curb",
  name: {
    ar: "بردورة حدائق",
    en: "Garden curb stone",
  },
  dimensions: "50 × 25 × 6",
  manufacturingType: {
    ar: "كبس آلي",
    en: "Machine pressed",
  },
  modelSrc: "/models/products/concrete-garden-curb-rounded-tapered.glb",
},

  {
  id: "curb-sidewalk",
  slug: "curb-sidewalk",
  category: "curb",
  name: {
    ar: "بردورة أرصفة",
    en: "Sidewalk curb stone",
  },
  dimensions: "50 × 30 × 10 × 8",
  manufacturingType: {
    ar: "كبس آلي",
    en: "Machine pressed",
  },
  modelSrc: "/models/products/concrete-pavement-curb-beveled.glb",
},

  {
  id: "curb-wheel",
  slug: "curb-wheel",
  category: "curb",
  name: {
    ar: "بردورة عجالي",
    en: "Wheel curb stone",
  },
  dimensions: "50 × 30 × 30 × 25",
  manufacturingType: {
    ar: "كبس آلي",
    en: "Machine pressed",
  },
  modelSrc: "/models/products/cement-block-single-round-through-hole.glb",
},

  // ==========================================
  // الإنترلوك
  // ==========================================

 {
  id: "interlock-s",
  slug: "interlock-s",
  category: "interlock",
  name: {
    ar: "إنترلوك حرف I",
    en: "S-shaped interlock",
  },
  modelSrc: "/models/products/concrete-interlocking-paver-i-shape.glb",
},

  

 {
  id: "interlock-hex",
  slug: "interlock-hex",
  category: "interlock",
  name: {
    ar: "إنترلوك سداسي",
    en: "Hexagonal interlock",
  },
  modelSrc: "/models/products/concrete-interlocking-hexagon.glb",
},

  {
  id: "interlock-rectangle",
  slug: "interlock-rectangle",
  category: "interlock",
  name: {
    ar: "إنترلوك مستطيل",
    en: "Rectangular interlock",
  },
  modelSrc: "/models/products/concrete-interlocking-paver-rectangle.glb",
},
];