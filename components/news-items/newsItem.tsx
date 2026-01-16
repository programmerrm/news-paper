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
          <a href={href}>
            <h6
              className="text-sm sm:text-base font-semibold leading-6"
              style={{ marginBottom: `${titleMb}px` }}
            >
                {isLive && (
                  <>
                    <span className="inline-flex items-end gap-2 -mb-1">
                      <span className="relative inline-flex items-end justify-center">
                        <span className="absolute inline-flex h-3.5 w-3.5 rounded-full bg-red-500 opacity-30 animate-ping"></span>
                        <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-red-500"></span>
                      </span>
                    </span>
                    <span className="text-sm sm:text-base font-semibold leading-6 text-[#F50A0A] ml-2 mr-1">লাইভ:</span>
                  </>
                )}
              {title}
            </h6>
          </a>
        )}

        {content && (
          <p className="text-xs sm:text-sm text-body">
            {content}
          </p>
        )}

        {time && (
          <span className="text-xs sm:text-[13px] text-black/50 block mt-1">
            {time}
          </span>
        )}
      </div>
    </div>
  );
}
