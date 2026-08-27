export type PropertyType = "villa" | "penthouse" | "estate" | "townhouse";

export type Condition = "needs-renovation" | "good" | "excellent" | "new-build";

export type ValuationInput = {
  address: string;
  city: string;
  propertyType: PropertyType;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  condition: Condition;
  features: string[];
};

const BASE_RATE_PER_SQFT: Record<PropertyType, number> = {
  villa: 1450,
  penthouse: 1950,
  estate: 1250,
  townhouse: 1650,
};

const CONDITION_MULTIPLIER: Record<Condition, number> = {
  "needs-renovation": 0.82,
  good: 1,
  excellent: 1.14,
  "new-build": 1.28,
};

const FEATURE_PREMIUM: Record<string, number> = {
  pool: 380_000,
  "sea-view": 950_000,
  "smart-home": 210_000,
  "wine-cellar": 260_000,
  "guest-house": 420_000,
  "private-dock": 610_000,
};

export type ValuationResult = {
  low: number;
  high: number;
  midpoint: number;
  pricePerSqft: number;
};

export function estimateValuation(input: ValuationInput): ValuationResult {
  const baseRate = BASE_RATE_PER_SQFT[input.propertyType];
  const conditionMultiplier = CONDITION_MULTIPLIER[input.condition];

  const roomAdjustment =
    Math.max(0, input.bedrooms - 3) * 180_000 +
    Math.max(0, input.bathrooms - 3) * 90_000;

  const featureAdjustment = input.features.reduce(
    (sum, feature) => sum + (FEATURE_PREMIUM[feature] ?? 0),
    0,
  );

  const base = input.sqft * baseRate * conditionMultiplier;
  const midpoint = Math.round((base + roomAdjustment + featureAdjustment) / 10_000) * 10_000;

  const low = Math.round((midpoint * 0.93) / 10_000) * 10_000;
  const high = Math.round((midpoint * 1.08) / 10_000) * 10_000;

  return {
    low,
    high,
    midpoint,
    pricePerSqft: Math.round(midpoint / Math.max(input.sqft, 1)),
  };
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}
