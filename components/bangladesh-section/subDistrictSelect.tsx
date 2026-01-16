"use client";

import { useState } from "react";
import Image from "next/image";
import { subdistricts } from "../../src/data/subdistricts";
import CaretDown from "../../assets/image/caretdown.svg"; 

export default function SubdistrictSelect() {
  const [selected, setSelected] = useState("");

  return (
    <div className="relative w-full border border-[#B6C3C8] py-2 lg:py-3 bg-white">
      <select
        name="subdistrict"
        id="subdistrict"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="w-full appearance-none px-4 focus:outline-0 font-inter relative z-20 cursor-pointer bg-transparent"
      >
        {subdistricts.map((sub) => (
          <option key={sub.value} value={sub.value}>
            {sub.label}
          </option>
        ))}
      </select>

      <span className="absolute top-1/2 right-2 -translate-y-1/2 pointer-events-none">
        <Image src={CaretDown} alt="caretdown" width={16} height={16} />
      </span>
    </div>
  );
}
