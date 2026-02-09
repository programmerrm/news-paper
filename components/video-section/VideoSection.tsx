
import VideoNewsItem from "./VideoNewsItem";
import videoItemImage from "../../assets/image/video-item-image.png";
import Link from "next/link";
import VideoPlayer from "../video/VideoPage";

const videoList = [
  {
    image: videoItemImage,
    title: "দুইশো ডেক তোবারক বিতরণ করা হবে রাজৈর বেপারীপাড়ার মাহফিলে",
    time: "১ মিনিট আগে",
    href: "/videofulldetails"
  },
  {
    image: videoItemImage,
    title: "দুইশো ডেক তোবারক বিতরণ করা হবে রাজৈর বেপারীপাড়ার মাহফিলে",
    time: "১ মিনিট আগে",
    href: "/videofulldetails"
  },
  {
    image: videoItemImage,
    title: "দুইশো ডেক তোবারক বিতরণ করা হবে রাজৈর বেপারীপাড়ার মাহফিলে",
    time: "১ মিনিট আগে",
    href: "/videofulldetails"
  },
  {
    image: videoItemImage,
    title: "দুইশো ডেক তোবারক বিতরণ করা হবে রাজৈর বেপারীপাড়ার মাহফিলে",
    time: "১ মিনিট আগে",
    href: "/videofulldetails"
  },
];


export default function VideoSection() {
  return (
    <section className="bg-[#171717] py-8 lg:py-16">
      <div className="container">
        <div className="pb-3">
          <h3 className="text-white! mb-2 sm:mb-3">ভিডিও</h3>
          <div className="flex gap-3">
            <Link
              href="/video-news"
              className="text-xs sm:text-sm leading-5.5 text-[#E5E5E5] font-medium border-r border-[#E5E5E5] pr-3 relative after:absolute after:left-0 after:right-0 after:-bottom-3 after:w-full after:h-0.5 after:bg-amber-700"
            >
              ভিডিও খবর
            </Link>

            <Link
              href="/reels"
              className="text-xs sm:text-sm leading-5.5 text-[#E5E5E5] relative after:absolute after:left-0 after:right-0 after:-bottom-3 after:w-full after:h-0.5 after:bg-transparent hover:after:bg-amber-700 transition-all duration-300"
            >
              রিল খবর
            </Link>
          </div>
        </div>
        <div className="mt-4 sm:mt-6 flex flex-col md:flex-row gap-6 ">
          <div className="w-full md:max-w-[55.938%] bg-body">
            <div className="overflow-hidden max-w-179">
              <VideoPlayer
                src="/video/jodinat.mp4"
                poster="/video/Image.png"
                controls={true}
                muted
              />
            </div>

            <div className="px-3 md:px-6 pt-3 md:pt-8 pb-3 md:pb-13">
              <Link href="/videofulldetails">
                <h4 className="text-white! mb-3 sm:mb-4 transition-colors hover:text-blue!">
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
                href={item.href}
                />
            ))}
          </div>
        </div>
        <div className="w-full flex items-center justify-center mt-5 lg:mt-10">
            <button type="submit" className="w-full max-w-60 bg-red p-2 lg:p-3 text-sm leading-6 text-white font-medium cursor-pointer ">সব দেখুন</button>
        </div>
      </div>
    </section>
  );
}
