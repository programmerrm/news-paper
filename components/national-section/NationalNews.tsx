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

export default function NationalNews({
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
    <div className="flex flex-col gap-3">
      {/* Image */}
      <a href={href}>
        <Image
          src={image}
          alt={title}
          width={imageWidth}
          height={imageHeight}
          className="w-full h-auto object-cover"
          priority
        />
      </a>

      {/* Content */}
      <div>
        <a href={href}>
          <h5 className="font-semibold leading-6 sm:leading-7">
            {title}
          </h5>

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
