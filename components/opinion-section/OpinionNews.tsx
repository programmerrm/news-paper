import Image, { StaticImageData } from "next/image";

interface OpinionNewsItemProps {
  image: StaticImageData | string;
  title: string;
  author: string;
  imageWidth: number;
  imageHeight: number;
}

const OpinionNewsItem = ({
  image,
  title,
  author,
  imageWidth,
  imageHeight,
}: OpinionNewsItemProps) => {
  return (
    <div className="flex items-center gap-2 border-b border-red pb-7 last:pb-0 last:border-b-0">
      <div className="shrink-0">
        <Image
          src={image}
          alt={title}
          width={imageWidth}
          height={imageHeight}
          className="object-cover"
        />
      </div>

      <div>
        <h5 className="font-medium leading-6">{title}</h5>
        <span className="text-xs sm:text-sm leading-5.5 text-[#525252] mt-2 inline-block">
          লেখক: {author}
        </span>
      </div>
    </div>
  );
};

export default OpinionNewsItem;