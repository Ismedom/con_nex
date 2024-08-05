interface FrequencyUnit {
  unit: string;
  conversionFactor: number;
}

export const frequency: FrequencyUnit[] = [
  { unit: "Hz", conversionFactor: 1 },
  { unit: "kHz", conversionFactor: 1000 },
  { unit: "MHz", conversionFactor: 1_000_000 },
  { unit: "GHz", conversionFactor: 1_000_000_000 },
  { unit: "THz", conversionFactor: 1_000_000_000_000 },
  { unit: "rpm", conversionFactor: 1 / 60 },
  { unit: "cpm", conversionFactor: 1 / 60 },
  { unit: "dps", conversionFactor: 1 / (2 * Math.PI) },
  { unit: "rps", conversionFactor: 1 / (2 * Math.PI) },
  { unit: "cycles/s", conversionFactor: 1 },
  { unit: "rev/s", conversionFactor: 1 },
  { unit: "mHz", conversionFactor: 0.001 },
  { unit: "μHz", conversionFactor: 0.000001 },
  { unit: "GHz (10^9 Hz)", conversionFactor: 1_000_000_000 },
  { unit: "MHz (10^6 Hz)", conversionFactor: 1_000_000 },
  { unit: "kHz (10^3 Hz)", conversionFactor: 1000 },
];
