interface AreaUnit {
  unit: string;
  conversionFactor: number;
}

export const area: AreaUnit[] = [
  {
    unit: "m²",
    conversionFactor: 1,
  },
  {
    unit: "cm²",
    conversionFactor: 0.0001,
  },
  {
    unit: "mm²",
    conversionFactor: 0.000001,
  },
  {
    unit: "km²",
    conversionFactor: 1e6,
  },
  {
    unit: "ha",
    conversionFactor: 1e4,
  },
  {
    unit: "dm²",
    conversionFactor: 0.01,
  },
  {
    unit: "dam²",
    conversionFactor: 100,
  },
  {
    unit: "hm²",
    conversionFactor: 1e4,
  },
  {
    unit: "in²",
    conversionFactor: 0.00064516,
  },
  {
    unit: "ft²",
    conversionFactor: 0.092903,
  },
  {
    unit: "yd²",
    conversionFactor: 0.836127,
  },
  {
    unit: "acre",
    conversionFactor: 4046.86,
  },
  {
    unit: "mi²",
    conversionFactor: 2.59e6,
  },
  {
    unit: "are",
    conversionFactor: 100,
  },
];
