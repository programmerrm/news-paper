import Image from "next/image";
import BosontoImage from "../../assets/image/bosonto-image-1.png";
import ImageSquare from "../../assets/icon/ImageSquare.svg";
import Link from "next/link";

type GallaryLednewsProps = {
  imageCount: string;
  title: string;
  time: string;
  href?: string;
};

export default function GallaryLednews({
  imageCount,
  title,
  time,
  href = "#",
}: GallaryLednewsProps) {
  return (
    <div>
      <div className="relative">
        <div className="absolute bottom-5 left-5">
          <Image
            src={ImageSquare}
            alt="ImageSquare"
            width={48}
            height={48}
          />
        </div>

        <Image
          src={BosontoImage}
          alt="bosonto image"
          width={616}
          height={616}
        />
      </div>

      {/* Dynamic Content */}
      <span className="px-4 py-1.5 border border-red text-xs font-medium leading-4.5 text-red inline-block mt-4 md:mt-8">
        {imageCount}
      </span>

      <h3 className="mt-2 md:mt-3 transition-all hover:text-[#1877f2]">
        <Link href={href}>{title}</Link>
      </h3>

      <p className="mt-2 md:mt-3 text-gray">{time}</p>
    </div>
  );
}
