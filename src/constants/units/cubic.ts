interface VolumeUnit {
  unit: string;
  conversionFactor: number;
}
export const cubic: VolumeUnit[] = [
  {
    unit: "m³",
    conversionFactor: 1,
  },
  {
    unit: "cm³",
    conversionFactor: 1e-6,
  },
  {
    unit: "mm³",
    conversionFactor: 1e-9,
  },
  {
    unit: "km³",
    conversionFactor: 1e9,
  },
  {
    unit: "dm³",
    conversionFactor: 1e-3,
  },
  {
    unit: "dam³",
    conversionFactor: 1e3,
  },
  {
    unit: "hm³",
    conversionFactor: 1e6,
  },
  {
    unit: "liter",
    conversionFactor: 1e-3,
  },
  {
    unit: "milliliter",
    conversionFactor: 1e-6,
  },
  {
    unit: "microliter",
    conversionFactor: 1e-9,
  },
  {
    unit: "nanoliter",
    conversionFactor: 1e-12,
  },
  {
    unit: "gallon",
    conversionFactor: 0.00378541,
  },
  {
    unit: "quart",
    conversionFactor: 0.000946353,
  },
  {
    unit: "pint",
    conversionFactor: 0.000473176,
  },
  {
    unit: "cup",
    conversionFactor: 0.00024,
  },
  {
    unit: "fluid ounce",
    conversionFactor: 2.95735e-5,
  },
  {
    unit: "tablespoon",
    conversionFactor: 1.47868e-5,
  },
  {
    unit: "teaspoon",
    conversionFactor: 4.92892e-6,
  },
  {
    unit: "in³",
    conversionFactor: 1.6387e-5,
  },
  {
    unit: "ft³",
    conversionFactor: 0.0283168,
  },
  {
    unit: "yd³",
    conversionFactor: 0.764555,
  },
];
