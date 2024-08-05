interface MassUnit {
  unit: string;
  conversionFactor: number;
}
export const mass: MassUnit[] = [
  { unit: "g", conversionFactor: 1 },
  { unit: "kg", conversionFactor: 1000 },
  { unit: "mg", conversionFactor: 0.001 },
  { unit: "μg", conversionFactor: 0.000001 },
  { unit: "t", conversionFactor: 1_000_000 },
  { unit: "lb", conversionFactor: 453.592 },
  { unit: "oz", conversionFactor: 28.3495 },
  { unit: "st", conversionFactor: 6350.29 },
  { unit: "slug", conversionFactor: 14593.9 },
  { unit: "carat", conversionFactor: 0.2 },
  { unit: "grain", conversionFactor: 0.06479891 },
  { unit: "dr", conversionFactor: 1.77185 },
  { unit: "stone", conversionFactor: 6350.29 },
  { unit: "ton (US)", conversionFactor: 907185 },
  { unit: "ton (UK)", conversionFactor: 1_016_047 },
];
