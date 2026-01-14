import Image, { StaticImageData } from "next/image";

type NewsItemProps = {
  image?: StaticImageData;
  title?: string;
  content?: string;
  time?: string;
  href?: string;
  imageWidth?: number;   // নতুন prop
  imageHeight?: number;  // নতুন prop
};

export default function NewsItem({
  image,
  title,
  content,
  time,
  href = "#",
  imageWidth = 104,
  imageHeight = 78, 
}: NewsItemProps) {
  return (
    <div className={`flex gap-3 py-5 first:pt-0 last:pb-0`}>
      {/* Image (optional) */}
      {image && (
        <a href={href} className={` max-w-[${imageWidth}px]`}>
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
            <h6 className="text-sm sm:text-base font-semibold leading-6">
              {title}
            </h6>
          </a>
        )}
        {content && <p className="text-xs sm:text-sm text-body">{content}</p>}
        {time && (
          <span className="text-xs sm:text-[13px] text-black/50 block mt-1">
            {time}
          </span>
        )}
      </div>
    </div>
  );
}
