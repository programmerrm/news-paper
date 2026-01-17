import Image from "next/image";
import videoTham from "../../assets/image/video-tham.png";
import playVideoIcon from "../../assets/icon/play-icon.svg";
import VideoNewsItem from "./VideoNewsItem";
import videoItemImage from "../../assets/image/video-item-image.png";
import Link from "next/link";

const videoList = [
  {
    image: videoItemImage,
    title: "দুইশো ডেক তোবারক বিতরণ করা হবে রাজৈর বেপারীপাড়ার মাহফিলে",
    time: "১ মিনিট আগে",
  },
  {
    image: videoItemImage,
    title: "দুইশো ডেক তোবারক বিতরণ করা হবে রাজৈর বেপারীপাড়ার মাহফিলে",
    time: "১ মিনিট আগে",
  },
  {
    image: videoItemImage,
    title: "দুইশো ডেক তোবারক বিতরণ করা হবে রাজৈর বেপারীপাড়ার মাহফিলে",
    time: "১ মিনিট আগে",
  },
  {
    image: videoItemImage,
    title: "দুইশো ডেক তোবারক বিতরণ করা হবে রাজৈর বেপারীপাড়ার মাহফিলে",
    time: "১ মিনিট আগে",
  },
];


export default function VideoSection() {
  return (
    <section className="bg-[#171717] py-8 lg:py-16">
      <div className="container">
        {/* Header */}
        <div className="pb-3">
          <h3 className="text-white! mb-2 sm:mb-3">ভিডিও</h3>
          <div className="flex gap-3">
            <Link
              href="#"
              className="text-xs sm:text-sm leading-5.5 text-[#E5E5E5] font-medium border-r border-[#E5E5E5] pr-3 relative after:absolute after:left-0 after:right-0 after:-bottom-3 after:w-full after:h-0.5 after:bg-amber-700"
            >
              ভিডিও খবর
            </Link>

            <Link
              href="#"
              className="text-xs sm:text-sm leading-5.5 text-[#E5E5E5] relative after:absolute after:left-0 after:right-0 after:-bottom-3 after:w-full after:h-0.5 after:bg-transparent hover:after:bg-amber-700 transition-all duration-300"
            >
              রিল খবর
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="mt-4 sm:mt-6 flex flex-col md:flex-row gap-6">
          {/* Left Big Video */}
          <div className="w-full md:max-w-[55.938%]">
            <div className="overflow-hidden">
              <Link href="#" className="relative block group">
                <Image
                  src={videoTham}
                  alt="video thumbnail"
                  width={716}
                  height={537}
                  className="w-full h-full object-cover transition-transform duration-500 transform-gpu group-hover:scale-105"
                  priority
                />

                <Image
                src={playVideoIcon}
                alt="play icon"
                width={56}
                height={56}
                className="absolute bottom-6 left-6 w-7 h-7 sm:w-10 sm:h-10 md:w-14 md:h-14"
                />
              </Link>
            </div>

            <div className="px-3 md:px-6 pt-3 md:pt-8 pb-3 md:pb-13 bg-body">
              <Link href="#">
                <h4 className="text-white! mb-3 sm:mb-4 transition-colors hover:text-[#1877F2]!">
                  টানা ২৮ বছর ধরে আওয়ামী লীগের আসনে বিএনপির ইঞ্জিনিয়ার আশরাফ উদ্দিন বকুল
                </h4>
              </Link>

              <span className="text-xs leading-3.75 text-gray">
                ১ মিনিট আগে
              </span>
            </div>
          </div>

          <div className="w-full md:max-w-[42.188%] flex flex-col gap-4">
              {videoList.map((item, index) => (
                <VideoNewsItem
                key={index}
                image={item.image}
                title={item.title}
                time={item.time}
                />
            ))}
          </div>
        </div>
        <div className="w-full flex items-center justify-center mt-5 lg:mt-10">
            <button type="submit" className="w-full max-w-60 bg-red p-2 lg:p-3 text-sm leading-6 text-white font-medium cursor-pointer ">ভোট দিন</button>
        </div>
      </div>
    </section>
  );
}
