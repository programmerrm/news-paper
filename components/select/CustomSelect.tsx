"use client";

import { useState } from "react";

const SelectArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="7"
    viewBox="0 0 12 7"
    fill="none"
  >
    <path
      fill="#171717"
      stroke="#171717"
      strokeWidth=".3"
      d="M10.8.15a.653.653 0 0 1 .6.899.7.7 0 0 1-.14.21l-5 5a.65.65 0 0 1-.71.141.7.7 0 0 1-.21-.141l-5-5a.651.651 0 0 1 .92-.92L5.8 4.88 10.34.34a.65.65 0 0 1 .46-.19Z"
    />
  </svg>
);

type Option = {
  label: string;
  value: string;
};

type CustomSelectProps = {
  options: Option[];
  defaultValue?: string;
  onChange?: (value: string) => void;
};

export default function CustomSelect({
  options,
  defaultValue,
  onChange,
}: CustomSelectProps) {
  const [value, setValue] = useState(
    defaultValue || options[0]?.value
  );

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
    onChange?.(e.target.value);
  };

  return (
    <div className="relative inline-block">
      <select
        value={value}
        onChange={handleChange}
        className="appearance-none px-3.5 py-2 pr-9 border border-[#A1A1A1] text-sm text-[#171717] focus:outline-none"
      >
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>

      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
        <SelectArrowIcon />
      </span>
    </div>
  );
}