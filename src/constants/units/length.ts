interface LengthUnit {
  unit: string;
  conversionFactor: number;
}

export const lengthUnit: LengthUnit[] = [
  {
    unit: "m",
    conversionFactor: 1,
  },
  {
    unit: "cm",
    conversionFactor: 0.01,
  },
  {
    unit: "mm",
    conversionFactor: 0.001,
  },
  {
    unit: "km",
    conversionFactor: 1000,
  },
  {
    unit: "hm",
    conversionFactor: 100,
  },
  {
    unit: "dam",
    conversionFactor: 10,
  },
  {
    unit: "dm",
    conversionFactor: 0.1,
  },
  {
    unit: "inch",
    conversionFactor: 0.0254,
  },
  {
    unit: "foot",
    conversionFactor: 0.3048,
  },
  {
    unit: "yard",
    conversionFactor: 0.9144,
  },
  {
    unit: "mile",
    conversionFactor: 1609.34,
  },
  {
    unit: "micrometer",
    conversionFactor: 1e-6,
  },
  {
    unit: "nanometer",
    conversionFactor: 1e-9,
  },
  {
    unit: "angstrom",
    conversionFactor: 1e-10,
  },
  {
    unit: "nautical mile",
    conversionFactor: 1852,
  },
  {
    unit: "light year",
    conversionFactor: 9.461e15,
  },
  {
    unit: "astronomical unit",
    conversionFactor: 1.496e11,
  },
  {
    unit: "parsec",
    conversionFactor: 3.086e16,
  },
];
