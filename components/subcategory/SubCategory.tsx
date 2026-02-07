import Link from "next/link";

export const categories = [
  "রাজনীতি",
  "দুর্ঘটনা",
  "ক্রাইম",
  "সরকার",
  "শহর",
  "লোকাল খবর",
  "ভাল খবর",
  "উপজেলা",
  "জেলা শহর",
  "উপজাতি",
];

export default function SubCategory() {
  return (
    <ul className="flex items-center gap-y-2 gap-x-6 flex-wrap mt-2">
      {categories.map((category, index) => (
        <li key={index}>
          <Link
            href="/sub-category"
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
