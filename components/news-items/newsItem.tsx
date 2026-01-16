import Image, { StaticImageData } from "next/image";

type NewsItemProps = {
  image?: StaticImageData;
  title?: string;
  content?: string;
  time?: string;
  href?: string;
  imageWidth?: number;
  imageHeight?: number;
  titleMb?: number;
  isLive?: boolean;
  timeMt?: number;
};


export default function NewsItem({
  image,
  title,
  content,
  time,
  href = "#",
  imageWidth = 104,
  imageHeight = 78,
  titleMb = 4,
  isLive = false,
  timeMt = 4,
}: NewsItemProps) {
  return (
    <div className="flex gap-3 py-5 first:pt-0 last:pb-0">
      {/* Image */}
      {image && (
        <a href={href} style={{ maxWidth: imageWidth }} className="block">
          <Image
            src={image}
            alt={title || "News image"}
            width={imageWidth}
            height={imageHeight}
            className="object-cover"
          />
        </a>
      )}

      {/* Content */}
      <div className="flex-1">
        {title && (
          <h6
            className="text-sm sm:text-base font-semibold leading-6"
            style={{ marginBottom: `${titleMb}px` }}
          >
            {isLive && (
              <span className="inline-flex items-center gap-2">
                <span className="relative inline-flex items-center justify-center">
                  <span className="absolute inline-flex h-3.5 w-3.5 rounded-full bg-red-500 opacity-30 animate-ping"></span>
                  <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-red-500"></span>
                </span>
                <span className="text-sm sm:text-base font-semibold text-[#F50A0A] mr-1 -mb-1.5">
                  লাইভ:
                </span>
              </span>
            )}

            <a href={href} className="transition-all hover:text-blue-700">
              {title}
            </a>
          </h6>
        )}

        {content && (
          <a href={href} className="text-xs sm:text-sm text-body">
            {content}
          </a>
        )}

        {time && (
          <span
            className="text-xs sm:text-[13px] text-black/50 block"
            style={{ marginTop: `${timeMt}px` }}
          >
            {time}
          </span>
        )}
      </div>
    </div>
  );
}
