interface PressureUnit {
  unit: string;
  conversionFactor: number;
}
export const pressure: PressureUnit[] = [
  { unit: "Pa", conversionFactor: 1 },
  { unit: "kPa", conversionFactor: 1_000 },
  { unit: "MPa", conversionFactor: 1_000_000 },
  { unit: "hPa", conversionFactor: 100 },
  { unit: "bar", conversionFactor: 100_000 },
  { unit: "mbar", conversionFactor: 100 },
  { unit: "psi", conversionFactor: 6_894.76 },
  { unit: "atm", conversionFactor: 101_325 },
  { unit: "torr", conversionFactor: 133.322 },
  { unit: "mmHg", conversionFactor: 133.322 },
  { unit: "inHg", conversionFactor: 3_386.39 },
  { unit: "cmH2O", conversionFactor: 98.0665 },
  { unit: "kgf/cm²", conversionFactor: 98_066.5 },
  { unit: "kgf/m²", conversionFactor: 9.80665 },
  { unit: "lbf/ft²", conversionFactor: 47.8803 },
];
