import Image, { StaticImageData } from "next/image";
import VideoPage from "../video/VideoPage";

type ReportVideoProps = {
  src: StaticImageData | string;
  alt: string;
  caption?: string;
};

export default function ReportVideo({
  src,
  alt,
  caption,
}: ReportVideoProps) {
  return (
    <div className="w-full max-w-185 h-full border-b border-[#D4D4D4]">
      <div className=" bg-gray-dark max-w-185 max-h-138.75">
        {/* <Image
          src={src}
          alt={alt}
          width={740}
          height={555}
          className="w-full h-auto"
        /> */}
        <VideoPage />
      </div>
        {caption && (
          <span className="py-3 text-base leading-6 font-medium text-[#525252] block">
            {caption}
          </span>
        )}
    </div>
  );
}
