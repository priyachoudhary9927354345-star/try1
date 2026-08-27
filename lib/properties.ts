export type Room = {
  label: string;
  x: number;
  z: number;
  width: number;
  depth: number;
  height?: number;
};

export type Property = {
  id: string;
  slug: string;
  name: string;
  location: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  tagline: string;
  description: string;
  gradient: [string, string];
  accent: string;
  features: string[];
  rooms: Room[];
};

export const properties: Property[] = [
  {
    id: "p1",
    slug: "the-monolith",
    name: "The Monolith",
    location: "Bel Air, California",
    price: 24500000,
    beds: 6,
    baths: 8,
    sqft: 12400,
    tagline: "A concrete-and-glass sculpture suspended above the canyon.",
    description:
      "Carved into the hillside, The Monolith is a study in restraint — board-formed concrete, floor-to-ceiling glazing, and a cantilevered infinity pool that appears to pour into the canyon below. Every material was chosen to age in silence: raw stone, brushed bronze, and white oak.",
    gradient: ["#1f1f25", "#3a2f1c"],
    accent: "#d4af6a",
    features: [
      "Cantilevered infinity pool",
      "Home theatre & wine cellar",
      "Floor-to-ceiling glazing",
      "Private car gallery (8 vehicles)",
    ],
    rooms: [
      { label: "Great Room", x: -3.2, z: 0, width: 5.5, depth: 6 },
      { label: "Primary Suite", x: 3.4, z: -2.4, width: 4.2, depth: 4.4 },
      { label: "Kitchen", x: 2.6, z: 2.6, width: 3.6, depth: 3.2 },
      { label: "Study", x: -3.4, z: 3.6, width: 3, depth: 2.6 },
      { label: "Guest Wing", x: 6.4, z: 1.2, width: 3.4, depth: 4.2 },
    ],
  },
  {
    id: "p2",
    slug: "villa-serena",
    name: "Villa Serena",
    location: "Lake Como, Italy",
    price: 18900000,
    beds: 7,
    baths: 9,
    sqft: 15800,
    tagline: "Renaissance stonework meets uncompromising modern comfort.",
    description:
      "Set on three private acres along the western shore, Villa Serena pairs 18th-century stone facades with a fully re-engineered modern interior — radiant limestone floors, a hidden spa level, and a private boat dock for arrival by water.",
    gradient: ["#20242b", "#1b3a3a"],
    accent: "#cbb387",
    features: [
      "Private lake dock & boathouse",
      "Subterranean spa & sauna",
      "Terraced Italian gardens",
      "Original 18th-century frescoes",
    ],
    rooms: [
      { label: "Grand Salon", x: 0, z: -1.5, width: 6.4, depth: 5 },
      { label: "Dining Hall", x: -4.6, z: -1.2, width: 3.6, depth: 4.4 },
      { label: "Primary Suite", x: 4.6, z: -1.8, width: 3.8, depth: 4 },
      { label: "Loggia", x: 0, z: 3.6, width: 6.4, depth: 2.6 },
      { label: "Spa Level", x: -4.6, z: 3, width: 3.4, depth: 3 },
    ],
  },
  {
    id: "p3",
    slug: "sky-atrium",
    name: "Sky Atrium Penthouse",
    location: "Manhattan, New York",
    price: 32500000,
    beds: 5,
    baths: 6,
    sqft: 9200,
    tagline: "A private atrium in the clouds, 92 storeys above the city.",
    description:
      "Occupying the top two floors of one of Manhattan's most exclusive towers, Sky Atrium features a double-height botanical atrium, 270-degree skyline views, and a private elevator vestibule accessible only by key-card.",
    gradient: ["#191b22", "#26232f"],
    accent: "#e2c894",
    features: [
      "Private elevator vestibule",
      "Double-height botanical atrium",
      "270° skyline views",
      "Smart climate & lighting throughout",
    ],
    rooms: [
      { label: "Atrium", x: 0, z: 0, width: 4.4, depth: 4.4 },
      { label: "Living Room", x: 4.6, z: -2, width: 4.4, depth: 3.6 },
      { label: "Primary Suite", x: -4.6, z: -2.2, width: 3.8, depth: 4 },
      { label: "Kitchen", x: 4.4, z: 2.6, width: 3.4, depth: 3 },
      { label: "Library", x: -4.4, z: 2.8, width: 3.2, depth: 2.8 },
    ],
  },
  {
    id: "p4",
    slug: "dune-house",
    name: "The Dune House",
    location: "Malibu, California",
    price: 21200000,
    beds: 5,
    baths: 7,
    sqft: 10800,
    tagline: "Weathered timber and glass, anchored to the shoreline.",
    description:
      "Designed around a series of shifting sand-dune forms, The Dune House uses reclaimed timber cladding, a living roof, and pocketing glass walls that dissolve the boundary between the great room and the Pacific.",
    gradient: ["#22201c", "#39321f"],
    accent: "#d8b774",
    features: [
      "Pocketing glass walls",
      "Living roof & solar array",
      "Private beach access",
      "Outdoor fire lounge",
    ],
    rooms: [
      { label: "Great Room", x: 0, z: -2, width: 6, depth: 4.4 },
      { label: "Primary Suite", x: -4.6, z: 1.4, width: 3.6, depth: 4 },
      { label: "Kitchen", x: 4.4, z: 1.2, width: 3.4, depth: 3.4 },
      { label: "Media Room", x: 0, z: 3.6, width: 4, depth: 2.6 },
    ],
  },
  {
    id: "p5",
    slug: "obsidian-ridge",
    name: "Obsidian Ridge",
    location: "Aspen, Colorado",
    price: 16700000,
    beds: 6,
    baths: 7,
    sqft: 11200,
    tagline: "Charred timber and blackened steel against alpine white.",
    description:
      "A ski-in, ski-out retreat clad in shou-sugi-ban timber, Obsidian Ridge balances rugged materiality with warm, museum-quality interiors — a double-sided fireplace anchors the great room, visible from every wing of the home.",
    gradient: ["#1a1a1f", "#2c2620"],
    accent: "#d1ab68",
    features: [
      "Ski-in, ski-out access",
      "Double-sided stone fireplace",
      "Indoor-outdoor hot springs",
      "Heated motor court",
    ],
    rooms: [
      { label: "Great Room", x: 0, z: 0, width: 5.6, depth: 5 },
      { label: "Primary Suite", x: 4.8, z: -2.2, width: 3.6, depth: 3.8 },
      { label: "Bunk Wing", x: -4.8, z: -2.2, width: 3.6, depth: 3.8 },
      { label: "Kitchen", x: -4.6, z: 2.6, width: 3.4, depth: 3 },
      { label: "Spa", x: 4.6, z: 2.8, width: 3.2, depth: 2.8 },
    ],
  },
  {
    id: "p6",
    slug: "the-glass-pavilion",
    name: "The Glass Pavilion",
    location: "Kyoto, Japan",
    price: 14300000,
    beds: 4,
    baths: 5,
    sqft: 7600,
    tagline: "Minimalist pavilion architecture within a private bamboo grove.",
    description:
      "A meditation on light and negative space, The Glass Pavilion sits within a walled bamboo garden. Structural steel columns are set flush to invisible glass, so the roofline appears to float above the koi pond below.",
    gradient: ["#1c1f1c", "#232a24"],
    accent: "#c7b27e",
    features: [
      "Private bamboo garden & koi pond",
      "Engawa veranda on all sides",
      "Hinoki cypress soaking tub",
      "Tea ceremony room",
    ],
    rooms: [
      { label: "Living Pavilion", x: 0, z: -1, width: 5, depth: 4 },
      { label: "Primary Suite", x: -3.8, z: 2, width: 3.2, depth: 3.4 },
      { label: "Tea Room", x: 3.6, z: 2.2, width: 2.8, depth: 2.8 },
      { label: "Kitchen", x: 3.4, z: -2.6, width: 3, depth: 2.6 },
    ],
  },
];

export function formatPrice(value: number): string {
  if (value >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
  }
  return `$${value.toLocaleString("en-US")}`;
}
