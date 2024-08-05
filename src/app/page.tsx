"use client";

import { useEffect, useRef, useState } from "react";
import Heading from "@/components/other/Heading";
import SelectOption from "@/components/SelectOption";
import SelectUnit from "@/components/SelectUnit";
import { area } from "@/constants/units/area";
import { FaArrowCircleRight } from "react-icons/fa";
import { mass } from "@/constants/units/mass";
import { lengthUnit } from "@/constants/units/length";
import { energy } from "@/constants/units/energy";
import { cubic } from "@/constants/units/cubic";
import { time } from "@/constants/units/time";
import { force } from "@/constants/units/force";
import { pressure } from "@/constants/units/pressure";
import { calculate } from "@/functions/convert";
import { Button } from "@nextui-org/react";

interface UnitType {
  unit: string;
  conversionFactor: number;
}

export default function Home() {
  const [value_convert, set_value_convert] = useState(0);
  const [PeriodUnit, setPeriodUnit] = useState<string>("length");
  const [option_input_value, set_option_input_value] = useState<number>(0);
  const [option_output_value, set_option_output_value] = useState<number>(0);
  const [PeriodArray, setPeriodArray] = useState<UnitType[]>([]);
  const input_ref = useRef<HTMLInputElement>(null);
  const [input_value, setInput_value] = useState(0);

  useEffect(() => {
    function loading(): void {
      PeriodUnit.toLowerCase() === "length"
        ? setPeriodArray(lengthUnit)
        : PeriodUnit.toLowerCase() === "mass"
        ? setPeriodArray(mass)
        : PeriodUnit.toLowerCase() === "area"
        ? setPeriodArray(area)
        : PeriodUnit.toLowerCase() === "energy"
        ? setPeriodArray(energy)
        : PeriodUnit.toLowerCase() === "time"
        ? setPeriodArray(time)
        : PeriodUnit.toLowerCase() === "force"
        ? setPeriodArray(force)
        : PeriodUnit.toLowerCase() === "pressure"
        ? setPeriodArray(pressure)
        : PeriodUnit.toLowerCase() === "cubic"
        ? setPeriodArray(cubic)
        : setPeriodArray([]);
    }

    loading();
  }, [PeriodUnit]);

  useEffect(() => {
    set_value_convert(input_value);
  }, [input_value]);

  // useEffect(() => {
  //   alert(option_input_value + " " + option_output_value + " " + value_convert);
  // }, [option_input_value, option_output_value, value_convert]);

  return (
    <div className="h-[100vh] w-full p-2 mx-auto max-w-[1200px]">
      <Heading />
      <div className="sm:mx-5 md:mx-10 flex items-center gap-2">
        <h3 className="text-lg uppercase text-gray-300 font-bold">Select unit for Convert</h3>
        <SelectOption setPeriodUnit={setPeriodUnit} PeriodUnit={PeriodUnit} />
      </div>
      <div className="flex gap-3 py-4 sm:mx-5 md:mx-10 items-center">
        <SelectUnit array={PeriodArray} conversion_Factor={set_option_input_value} />
        <FaArrowCircleRight className="text-white" />
        <SelectUnit array={PeriodArray} conversion_Factor={set_option_output_value} />
      </div>
      <div className="flex flex-col gap-4  items-start  sm:mx-5 md:mx-10">
        <div className="flex items-center gap-3">
          <input
            type="number"
            ref={input_ref}
            value={input_value == 0 ? " " : input_value}
            className="px-2 py-1 rounded-xl border-none outline-none"
            onChange={(e) => setInput_value(e.target.valueAsNumber)}
          />
          <Button
            color="danger"
            size="sm"
            onClick={() => {
              setInput_value(0);
              input_ref.current && (input_ref.current.value = "");
            }}>
            clear
          </Button>
        </div>
        <h2 className="text-white">
          Result : {calculate(null, option_input_value, option_output_value, value_convert).toLocaleString()}{" "}
        </h2>
      </div>
    </div>
  );
}
