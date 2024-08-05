import React, { Dispatch, SetStateAction } from "react";
import { Select, SelectItem } from "@nextui-org/select";

interface UnitOption {
  unit: string;
  conversionFactor: number;
}

interface SelectOptionProps {
  array: UnitOption[];
  conversion_Factor: Dispatch<SetStateAction<number>>;
}

const SelectUnit: React.FC<SelectOptionProps> = ({ array, conversion_Factor }) => {
  return (
    <div>
      <Select
        required
        placeholder="Select one"
        className="w-[140px] font-bold text-black"
        defaultSelectedKeys={[array[0]?.unit]}
        radius="full"
        scrollShadowProps={{
          isEnabled: false,
        }}
        size="md"
        onSelectionChange={(keys) => {
          const selectedKey = Array.from(keys)[0] as string;
          const selectedOption = array.find((option) => option.unit === selectedKey);
          if (selectedOption) {
            // alert(selectedOption.conversionFactor);
            conversion_Factor(selectedOption.conversionFactor);
          }
        }}
        labelPlacement="outside">
        {array.map(({ unit }) => (
          <SelectItem key={unit} value={unit} className="text-black">
            {unit}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default SelectUnit;
