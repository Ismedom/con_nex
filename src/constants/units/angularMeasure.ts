interface AngularRadianUnit {
  unit: string;
  conversionFactor: number;
}

// export const angularRadian: AngularRadian[] = [
//   {
//     unit: "°",
//     conversionFactor: 57.2958,
//   },
//   {
//     unit: "gon",
//     conversionFactor: 63.662,
//   },
//   {
//     unit: "rev",
//     conversionFactor: 0.159155,
//   },
// ];

export const angularRadianUnit: AngularRadianUnit[] = [
  {
    unit: "radian",
    conversionFactor: 1,
  },
  {
    unit: "degree",
    conversionFactor: Math.PI / 180,
  },
  {
    unit: "minute of arc",
    conversionFactor: Math.PI / (180 * 60),
  },
  {
    unit: "second of arc",
    conversionFactor: Math.PI / (180 * 60 * 60),
  },
  {
    unit: "gradian",
    conversionFactor: Math.PI / 200,
  },
  {
    unit: "circle",
    conversionFactor: 2 * Math.PI,
  },
  {
    unit: "milliradian",
    conversionFactor: 1 / 1000,
  },
  {
    unit: "turn",
    conversionFactor: 2 * Math.PI,
  },
  {
    unit: "gon",
    conversionFactor: Math.PI / 200,
  },
  {
    unit: "quadrant",
    conversionFactor: Math.PI / 2,
  },
  {
    unit: "revolution",
    conversionFactor: 2 * Math.PI,
  },
];
