"use client";

import Link from "next/link";
import VideoPage from "../../components/video/VideoPage";
import VideoPlayer from "../../components/video/VideoPage";

type VideoCardProps = {
  title: string;
  href?: string;
};

export default function FullDetailsItem({
  title,
  href = "#",
}: VideoCardProps) {
  return (
    <div className="flex bg-white gap-3 pb-4.5" >
      <div className="w-full max-w-32">
        <VideoPlayer
          src="/video/jodinat.mp4"
          poster="/video/Image.png"
          controls={true}
          muted
        />
      </div>

      <div className="w-full bg-white">
        <h5 className=" transition-colors hover:text-blue">
          <Link href={href}>
            {title}
          </Link>
        </h5>
      </div>
    </div>
  );
}
