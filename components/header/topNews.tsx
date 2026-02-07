import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export type TopNewsItem = {
  image: StaticImageData;
  title: string;
  href: string;
};

type TopNewsProps = {
  news: TopNewsItem[];
};

export default function TopNews({ news }: TopNewsProps) {
  return (
    <div className="py-5">
      <div className="container">
        <div className="grid grid-cols-4 items-center justify-between gap-5">
          {news.map((item, index) => (
            <div key={index} className="flex gap-3 w-full lg:w-auto">
              <Link
                href={item.href}
                className="bg-gray-dark w-full max-w-22 h-full max-h-16.5"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={88}
                  height={66}
                  className="object-cover"
                />
              </Link>
              <Link href={item.href} className="hidden lg:block font-inter text-sm sm:text-base font-medium sm:leading-6">
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
