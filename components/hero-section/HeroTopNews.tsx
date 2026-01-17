import Image, { StaticImageData } from "next/image";

type TopNewsProps = {
  title: string;
  description: string;
  time: string;
  image: StaticImageData;
  imageAlt?: string;
  caption?: string; // ✅ figcaption dynamic
};

export default function HeroTopNews({
  title,
  description,
  time,
  image,
  imageAlt = "News Image",
  caption,
}: TopNewsProps) {
  return (
    <div className="flex justify-between gap-5 w-full pb-6 flex-col sm:flex-row">
      {/* Content */}
      <div className="w-full sm:max-w-[51.700%] order-2 sm:order-1">
        <h2 className="text-[26px]! leading-8!">
          <a href="#" className="transition-all hover:text-blue-600">
            {title}
          </a>
        </h2>

        <a href="#" className="text-xs sm:text-sm leading-5.5 mt-3">
          {description}
        </a>

        <span className="text-xs sm:text-[13px] text-black/50 mt-4 block">
          {time}
        </span>
      </div>

      {/* Image */}
      <a href="#" className="w-full sm:max-w-[45.579%] order-1 sm:order-2 overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          width={268}
          height={201}
          className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
          priority
        />

        {caption && (
          <figcaption className="mt-2 text-xs leading-4 text-black/60 flex items-center justify-center">
            {caption}
          </figcaption>
        )}
      </a>
    </div>
  );
}
