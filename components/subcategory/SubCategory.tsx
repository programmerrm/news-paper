import Link from "next/link";
export default function SubCategory() {
  const categories = [
    { name: "রাজনীতি", href: "/sub-category" },
    { name: "দুর্ঘটনা", href: "/webstoriscategory" },
    { name: "ক্রাইম", href: "/reelscategory" },
    { name: "সরকার", href: "/sub-category/government" },
    { name: "শহর", href: "/sub-category/city" },
    { name: "লোকাল খবর", href: "/sub-category/local-news" },
    { name: "ভাল খবর", href: "/sub-category/good-news" },
    { name: "উপজেলা", href: "/sub-category/upazila" },
    { name: "জেলা শহর", href: "/sub-category/district-city" },
    { name: "উপজাতি", href: "/sub-category/tribal" },
  ];

  return (
    <ul className="flex items-center gap-y-2 gap-x-6 flex-wrap mt-2">
      {categories.map((category) => (
        <li key={category.href}>
          <Link
            href={category.href}
            className="relative top-1/2 pl-3 
                       after:absolute after:top-1/2 after:-translate-y-1/2
                       after:left-0 after:w-1.5 after:h-1.5
                       after:bg-[#B6C3C8] after:rounded-full
                       text-black"
          >
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
