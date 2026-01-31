"use client";

import Link from "next/link";
import { categories } from "../../data/subCategory";

export default function SubCategory() {
  return (
    <ul className="flex items-center gap-y-2 gap-x-6 flex-wrap mt-2">
      {categories.map((category, index) => (
        <li key={index}>
          <Link
            href="#"
            className="relative top-1/2 pl-3 
                       after:absolute after:top-1/2 after:-translate-y-1/2
                       after:left-0 after:w-1.5 after:h-1.5
                       after:bg-[#B6C3C8] after:rounded-full
                       text-black"
          >
            {category}
          </Link>
        </li>
      ))}
    </ul>
  );
}
