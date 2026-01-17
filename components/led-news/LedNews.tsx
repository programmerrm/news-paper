import Image, { StaticImageData } from "next/image";

type LedNewsProps = {
  image: StaticImageData;
  title: string;
  content?: string;
  time?: string;
  href?: string;
  imageWidth?: number;
  imageHeight?: number;
  contentMt?: number;
  timeMt?: number;
};

export default function LedNews({
  image,
  title,
  content,
  time,
  href = "#",
  imageWidth = 503,
  imageHeight = 377,
  contentMt = 12,
  timeMt = 16,
}: LedNewsProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* Image */}
      <a href={href} className="overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={imageWidth}
          height={imageHeight}
          className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
          priority
        />
      </a>

      {/* Content */}
      <div>
        <a href={href}>
          <h4 className="font-semibold leading-6 sm:leading-7 transition-all duration-300 hover:text-blue-600!">
            {title}
          </h4>

          {content && (
            <p
              className="text-xs sm:text-sm sm:leading-5.5"
              style={{ marginTop: `${contentMt}px` }}
            >
              {content}
            </p>
          )}
        </a>

        {time && (
          <span
            className="text-xs leading-3.75 text-gray inline-block"
            style={{ marginTop: `${timeMt}px` }}
          >
            {time}
          </span>
        )}
      </div>
    </div>
  );
}
