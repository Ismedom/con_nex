interface TimeUnit {
  unit: string;
  conversionFactor: number;
}
export const time: TimeUnit[] = [
  { unit: "s", conversionFactor: 1 },
  { unit: "ms", conversionFactor: 0.001 },
  { unit: "μs", conversionFactor: 0.000001 },
  { unit: "ns", conversionFactor: 0.000000001 },
  { unit: "min", conversionFactor: 60 },
  { unit: "h", conversionFactor: 3600 },
  { unit: "day", conversionFactor: 86_400 },
  { unit: "week", conversionFactor: 604_800 },
  { unit: "month", conversionFactor: 2_629_746 },
  { unit: "year", conversionFactor: 31_556_952 },
  { unit: "decade", conversionFactor: 315_569_520 },
  { unit: "century", conversionFactor: 3_155_695_200 },
];
