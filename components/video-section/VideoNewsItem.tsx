import Image, { StaticImageData } from "next/image";
import videoIcon from "../../assets/icon/play-icon.svg";

type VideoNewsItemProps = {
  image: StaticImageData;
  title: string;
  time?: string;
  href?: string;
};

export default function VideoNewsItem({
  image,
  title,
  time = "কিছুক্ষণ আগে",
  href = "#",
}: VideoNewsItemProps) {
  return (
    <div className="p-3 md:p-4 bg-body flex gap-4">
      {/* Thumbnail */}
      <a href={href} className=" overflow-hidden block group w-full max-w-41">
        <span className="relative">
          <Image
            src={image}
            alt={title}
            width={164}
            height={123}
            className="object-cover transition-transform duration-500 transform-gpu group-hover:scale-105"
          />

          <Image
            src={videoIcon}
            alt="play icon"
            width={24}
            height={24}
            className="absolute bottom-2 left-2"
          />
        </span>
        
      </a>

      {/* Content */}
      <div>
        <a href={href}>
          <h6 className="text-white! text-base leading-6 mb-2 lg:mb-6 hover:text-[#1877F2]! transition-colors">
            {title}
          </h6>
        </a>

        {time && (
          <span className="text-xs leading-3.75 text-gray">{time}</span>
        )}
      </div>
    </div>
  );
}
