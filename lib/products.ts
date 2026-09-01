export type ScentIntensity = 1 | 2 | 3 | 4 | 5;

export type SizeMl = 30 | 50 | 100;

export type Notes = {
  top: string[];
  heart: string[];
  base: string[];
};

export type Product = {
  slug: string;
  name: string;
  family: string;
  tagline: string;
  description: string;
  story: string;
  prices: Record<SizeMl, number>;
  notes: Notes;
  longevity: ScentIntensity;
  sillage: ScentIntensity;
  accent: string;
  mood: string[];
};

export const SIZES: SizeMl[] = [30, 50, 100];
export const DISCOVERY_PRICE = 35;
export type CartSize = SizeMl | "sample";

export const products: Product[] = [
  {
    slug: "noir-de-santal",
    name: "Noir de Santal",
    family: "Amber · Oud · Sandalwood",
    tagline: "A dusk-lit study in warmth.",
    description:
      "Smoked sandalwood folded into resinous amber, softened by a whisper of vanilla husk. Worn close to the skin, it reads like candlelight.",
    story:
      "Distilled from Mysore sandalwood aged four years in cedar casks, this is the house's most quietly commanding fragrance — built for evenings that begin early and end late.",
    prices: { 30: 145, 50: 205, 100: 285 },
    notes: {
      top: ["Pink pepper", "Bergamot"],
      heart: ["Oud", "Sandalwood"],
      base: ["Amber", "Vanilla husk", "Cedar"],
    },
    longevity: 5,
    sillage: 4,
    accent: "#8A5A32",
    mood: ["warm", "evening", "intimate"],
  },
  {
    slug: "vetiver-brume",
    name: "Vétiver Brume",
    family: "Vetiver · Fig · Moss",
    tagline: "Green light through morning fog.",
    description:
      "Haitian vetiver, damp and earthen, meets fig leaf and a trace of oakmoss. Clean without being cold — the scent of a garden just after rain.",
    story:
      "Sourced from a single vetiver cooperative in Haiti, this root is hand-washed and slow-distilled to preserve its smoky, mineral character.",
    prices: { 30: 135, 50: 190, 100: 265 },
    notes: {
      top: ["Fig leaf", "Bergamot", "Cardamom"],
      heart: ["Vetiver", "Iris"],
      base: ["Oakmoss", "Ambroxan"],
    },
    longevity: 4,
    sillage: 3,
    accent: "#5B6A4F",
    mood: ["fresh", "daytime", "grounded"],
  },
  {
    slug: "rose-embrun",
    name: "Rose Embrun",
    family: "Rose · Sea Salt · Musk",
    tagline: "Petals carried on sea air.",
    description:
      "Turkish rose absolute cut with mineral sea salt and a soft, skin-like musk. Romantic in shape, restrained in delivery.",
    story:
      "The rose is harvested at dawn in the Isparta valley, when the oil content peaks — a narrow window the house's growers have tracked for three generations.",
    prices: { 30: 150, 50: 215, 100: 295 },
    notes: {
      top: ["Sea salt", "Mandarin"],
      heart: ["Rose absolute", "Geranium"],
      base: ["White musk", "Driftwood"],
    },
    longevity: 4,
    sillage: 3,
    accent: "#A5697A",
    mood: ["romantic", "daytime", "airy"],
  },
  {
    slug: "cuir-de-nuit",
    name: "Cuir de Nuit",
    family: "Leather · Tobacco · Amber",
    tagline: "The last hour of the night.",
    description:
      "Supple leather accord layered with dry tobacco leaf and a low ember of amber. Unapologetic, worn by those who don't need to raise their voice.",
    story:
      "A small-batch leather accord, built over eighteen months, references the bound-book libraries the founder grew up in — ink, hide, and dust.",
    prices: { 30: 155, 50: 220, 100: 305 },
    notes: {
      top: ["Saffron", "Black pepper"],
      heart: ["Leather", "Tobacco leaf"],
      base: ["Amber", "Labdanum", "Suede musk"],
    },
    longevity: 5,
    sillage: 5,
    accent: "#3F2E27",
    mood: ["warm", "evening", "bold"],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}
