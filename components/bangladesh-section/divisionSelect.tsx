"use client";

import { useState } from "react";
import Image from "next/image";
import { divisions } from "../../data/division"; 
import CaretDown from "../../assets/image/caretdown.svg";

export default function DivisionSelect() {
  const [selected, setSelected] = useState("");

  return (
    <div className="relative w-full border border-[#B6C3C8] py-2 lg:py-3 bg-white">
      <select
        name="division"
        id="division"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="w-full appearance-none px-4 focus:outline-0 font-inter cursor-pointer relative z-20 bg-transparent"
      >
        {divisions.map((division) => (
          <option key={division.value} value={division.value}>
            {division.label}
          </option>
        ))}
      </select>

      <span className="absolute top-1/2 right-2 -translate-y-1/2 pointer-events-none">
        <Image src={CaretDown} alt="caretdown" width={16} height={16} />
      </span>
    </div>
  );
}
