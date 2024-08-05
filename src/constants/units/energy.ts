interface EnergyUnit {
  unit: string;
  conversionFactor: number;
}
export const energy: EnergyUnit[] = [
  {
    unit: "J",
    conversionFactor: 1,
  },
  {
    unit: "kJ",
    conversionFactor: 1e3,
  },
  {
    unit: "MJ",
    conversionFactor: 1e6,
  },
  {
    unit: "GJ",
    conversionFactor: 1e9,
  },
  {
    unit: "cal",
    conversionFactor: 4.184,
  },
  {
    unit: "kcal",
    conversionFactor: 4184,
  },
  {
    unit: "Wh",
    conversionFactor: 3600,
  },
  {
    unit: "kWh",
    conversionFactor: 3.6e6,
  },
  {
    unit: "MWh",
    conversionFactor: 3.6e9,
  },
  {
    unit: "GWh",
    conversionFactor: 3.6e12,
  },
  {
    unit: "BTU",
    conversionFactor: 1055.06,
  },
  {
    unit: "therm",
    conversionFactor: 1.05506e8,
  },
  {
    unit: "eV",
    conversionFactor: 1.60218e-19,
  },
  {
    unit: "erg",
    conversionFactor: 1e-7,
  },
  {
    unit: "ft-lb",
    conversionFactor: 1.35582,
  },
  {
    unit: "quad",
    conversionFactor: 1.055e18,
  },
  {
    unit: "toe",
    conversionFactor: 4.1868e10,
  },
  {
    unit: "boe",
    conversionFactor: 5.8e6,
  },
];
