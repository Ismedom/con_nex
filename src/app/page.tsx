"use client";

import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
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
import CustomButton from "@/components/button/Button";

interface UnitType {
  unit: string;
  conversionFactor: number;
}

export default function Home() {
  const [value_convert, set_value_convert] = useState<number>(0);
  const [PeriodUnit, setPeriodUnit] = useState<string>("length");
  const [option_input_value, set_option_input_value] = useState<number>(0);
  const [option_output_value, set_option_output_value] = useState<number>(0);
  const [PeriodArray, setPeriodArray] = useState<UnitType[]>([]);
  const input_ref = useRef<HTMLInputElement>(null);
  const [input_value, setInput_value] = useState<number | "">(0);
  const [Is_comma_separated, set_Is_comma_separated] = useState<boolean>(false);
  const [copy, set_copy] = useState({ isCopy: false, value: "copy" });

  const unitMap = {
    length: lengthUnit,
    mass: mass,
    area: area,
    energy: energy,
    time: time,
    force: force,
    pressure: pressure,
    cubic: cubic,
  } as const;

  type UnitKey = keyof typeof unitMap;

  const loadPeriodArray = useCallback(() => {
    const key = PeriodUnit.toLowerCase() as UnitKey;
    return unitMap[key] ?? [];
  }, [PeriodUnit]);

  useEffect(() => {
    setPeriodArray(loadPeriodArray());
  }, [loadPeriodArray]);

  useEffect(() => {
    set_value_convert(typeof input_value === "number" ? input_value : 0);
  }, [input_value]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === "" ? "" : Number(e.target.value);
    setInput_value(value);
  }, []);

  const handleClear = useCallback(() => {
    setInput_value("");
    if (input_ref.current) {
      input_ref.current.value = "";
    }
  }, []);

  const result = useMemo(
    () =>
      Is_comma_separated
        ? calculate(null, option_input_value, option_output_value, value_convert).toLocaleString()
        : calculate(null, option_input_value, option_output_value, value_convert).toString(),
    [option_input_value, option_output_value, value_convert, Is_comma_separated]
  );

  useEffect(() => {
    const timeOut = setTimeout(() => set_copy({ isCopy: false, value: "copy" }), 1000);
    return () => clearTimeout(timeOut);
  }, [copy.isCopy]);

  return (
    <div className="min-h-screen w-full p-2 mx-auto max-w-[1200px] flex flex-col items-center select-none">
      <Heading />
      <div className="rounded-lg p-4 pb-8 border border-gray-600">
        <div className="sm:mx-5 md:mx-10 flex items-center gap-3 px-2 rounded-lg bg-gray-200">
          <h3 className="text-lg uppercase text-gray-700 font-bold">Select unit</h3>
          <SelectOption {...{ setPeriodUnit, PeriodUnit }} />
        </div>
        <div className="flex gap-4 py-4 sm:mx-5 md:mx-10 items-center mb-4">
          <SelectUnit {...{ array: PeriodArray, conversion_Factor: set_option_input_value, N_C: 1 }} />
          <FaArrowCircleRight className="text-white" />
          <SelectUnit {...{ array: PeriodArray, conversion_Factor: set_option_output_value, N_C: 2 }} />
        </div>
        <div className="flex flex-col gap-4 items-start sm:mx-5 md:mx-10">
          <div className="flex items-center gap-3">
            <input
              type="number"
              ref={input_ref}
              placeholder="Input value..."
              value={input_value === 0 || input_value === "" ? "" : input_value}
              className="px-2 py-1 rounded-xl border-none outline-none"
              onChange={handleInputChange}
            />
            <Button color="danger" size="sm" onClick={handleClear}>
              clear
            </Button>
          </div>
          <div className="bg-blue-950 p-3 py-2 rounded-lg block w-full">
            <div className="flex gap-2">
              <CustomButton
                {...{
                  text: "comma",
                  text_alternate: "unformate",
                  bg_color: "#023e7d",
                  value: Is_comma_separated,
                  set_value: set_Is_comma_separated,
                }}
              />
              <button
                onClick={(e) => {
                  navigator.clipboard.writeText(result);
                  set_copy({ isCopy: true, value: "copied" });
                }}
                className="text-gray-100 px-2  text-center rounded-xl cursor-pointer hover:bg-blue-800 max-w-max"
                style={{ background: "#023e7d" }}
                draggable>
                {copy.value}
              </button>
            </div>
            <h2 className="text-white py-2 select-text">RESULT : {result}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
