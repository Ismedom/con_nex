"use client";

import React, { Dispatch, SetStateAction } from "react";

interface CustomButtonType {
  text: string;
  text_alternate: string;
  bg_color: string;
  value: boolean;
  set_value: Dispatch<SetStateAction<boolean>>;
}

const CustomButton: React.FC<CustomButtonType> = ({ text, text_alternate, bg_color, value, set_value }) => {
  return (
    <button
      onClick={() => set_value(!value)}
      className="text-gray-100 px-2  text-center rounded-xl cursor-pointer hover:bg-blue-800 max-w-max"
      style={{ background: bg_color }}
      draggable>
      {value ? text_alternate : text}
    </button>
  );
};

export default CustomButton;
