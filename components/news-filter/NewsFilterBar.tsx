"use client";

import CustomSelect from "../select/CustomSelect";

type NewsFilterBarProps = {
  total: number | string;
  options: {
    label: string;
    value: string;
  }[];
};

export default function NewsFilterBar({
  total,
  options,
}: NewsFilterBarProps) {
  return (
    <div className="flex items-center justify-between gap-4 w-full">
      <p className="text-sm sm:text-base text-[#171717] font-medium leading-6">
        টোটাল খবর - <span>{total}</span>
      </p>

      {options && <CustomSelect options={options} />}
    </div>
  );
}