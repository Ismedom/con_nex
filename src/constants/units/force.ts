interface ForceUnit {
  unit: string;
  conversionFactor: number;
}

export const force: ForceUnit[] = [
  { unit: "N", conversionFactor: 1 },
  { unit: "dyn", conversionFactor: 0.00001 },
  { unit: "kgf", conversionFactor: 9.80665 },
  { unit: "lbf", conversionFactor: 4.44822 },
  { unit: "poundal", conversionFactor: 0.138255 },
  { unit: "kN", conversionFactor: 1000 },
  { unit: "MN", conversionFactor: 1_000_000 },
  { unit: "GN", conversionFactor: 1_000_000_000 },
  { unit: "gf", conversionFactor: 0.00980665 },
  { unit: "kgf·m", conversionFactor: 9.80665 },
  { unit: "t (ton-force)", conversionFactor: 9_806.65 },
  { unit: "kgf·cm", conversionFactor: 0.0980665 },
  { unit: "lb·ft", conversionFactor: 1.35582 },
  { unit: "lb·in", conversionFactor: 0.113 },
  { unit: "kgf·ft", conversionFactor: 33.57 },
];
