import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import ReelsIcon from "../../assets/icon/reels-icon.svg"

type WebStorisCardProps = {
    thumbnail: StaticImageData | string;
    title: string;
    time: string;
    href?: string;
};

export default function ReelStorisCard({
    thumbnail,
    title,
    time,
    href = "#",
}: WebStorisCardProps) {
    return (
        <div>
            <Link href={href} className="block group">
                <div className="relative w-full h-132.5 overflow-hidden rounded-md">

                    {/* Thumbnail */}
                    <Image
                        src={thumbnail}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-300"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

                    {/* Play Icon */}
                    <button type="button" className="absolute top-6 left-6 w-10 h-10 flex items-center justify-center cursor-pointer">
                        <Image
                            src={ReelsIcon}
                            alt="ReelsIcon"
                            width={40}
                            height={40}
                        />
                    </button>

                    {/* Text Content */}
                    <div className="absolute bottom-0 p-4 text-white">
                        <h5 className="text-white">
                            {title}
                        </h5>
                    </div>
                </div>
            </Link>
            <div>
                <p className="text-xs mt-4 text-gray leading-3.75">{time}</p>
            </div>
        </div>
    );
}
