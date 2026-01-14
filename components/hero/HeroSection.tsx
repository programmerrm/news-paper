import Image from "next/image";
import HeroSideberImage from "../../assets/image/hero-sidebar.png";
import BanarImage from "../../assets/image/banner-image.jpg";
import NewsItem from "../../components/news-items/newsItem";



  const news = [
    {
      id: 1,
      title:
        "ইতিহাস গড়ল ভারত! দক্ষিণ আফ্রিকাকে হারিয়ে নারী বিশ্বকাপ জয়",
      time: "1 min ago",
      image: HeroSideberImage,
    },
    {
      id: 2,
      title: "চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান",
      time: "1 mins ago",
      image: HeroSideberImage,
    },
    {
      id: 3,
      title: "চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান",
      time: "1 mins ago",
      image: HeroSideberImage,
    },
    {
      id: 4,
      title: "যুদ্ধবিরতি ভঙ্গ! ইসরায়েলের বিরুদ্ধে ১৯৪ বার চুক্তি লঙ্ঘনের অভিযোগ",
      time: "1 mins ago",
    },
    {
      id: 5,
      title: "১৯ বছরের ছোট, ডায়মন্ড ব্যবসায়ীর সঙ্গে প্রেমে মজলেন মালাইকা",
      time: "1 mins ago",
    },
    {
      id: 6,
      title: "চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান",
      time: "1 mins ago",
    },
  ];
export default function HeroSection() {
    return (
        <section className="pt-7 pb-10 md:pb-18">
            <div className="container">
                <div className="flex">
                    <div className="w-full max-w-[25.390%] divide-y divide-gray-border space-y-5 pr-5">
                        <div className="flex gap-3 pb-5">
                            <NewsItem 
                                image={HeroSideberImage}
                                title={"ইতিহাস গড়ল ভারত! দক্ষিণ আফ্রিকাকে হারিয়ে নারী বিশ্বকাপ জয়"}
                                time={"1 min ago"}
                                />
                        </div>
                        <div className="flex gap-3 pb-5">
                            <NewsItem 
                                image={HeroSideberImage}
                                title={"চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"}
                                time={"1 min ago"}
                                />
                        </div>
                        <div className="flex gap-3 pb-5">
                            <NewsItem 
                                image={HeroSideberImage}
                                title={"চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"}
                                time={"1 min ago"}
                                />
                        </div>
                        <div className="flex gap-3 pb-5">
                            <NewsItem 
                                title={"যুদ্ধবিরতি ভঙ্গ! ইসরায়েলের বিরুদ্ধে ১৯৪ বার চুক্তি লঙ্ঘনের অভিযোগ"}
                                time={"1 min ago"}
                                />
                        </div>
                        <div className="flex gap-3 pb-5">
                            <NewsItem 
                                title={"যুদ্ধবিরতি ভঙ্গ! ইসরায়েলের বিরুদ্ধে ১৯৪ বার চুক্তি লঙ্ঘনের অভিযোগ"}
                                time={"1 min ago"}
                                />
                        </div>
                        
                    </div>
                    <div className="w-full max-w-[49.062%] divide-y divide-gray-border border-l border-r border-gray px-5">
                        <div className="flex gap-4 py-6 first:pt-0 last:pb-0">
                            <div className="w-full max-w-[51.700%]">
                                <h1>Air pollution: Dhaka logs month’s worst air, health precautions urged</h1>
                                <p className="text-xs sm:text-sm text-gray/80 mt-3">At around 8:30 am, the average Air Quality Index (AQI) for
                                    Dhaka, as reported by IQAir, stood at 193, which is classified as unhealthy.</p>
                                <span className="text-xs sm:text-[13px] text-black/50 mt-4 block">1 min ago</span>
                            </div>
                            <div className="w-full max-w-[45.579%]">
                                 <Image 
                                src={BanarImage}
                                alt="Banar Image"
                                width={268}
                                height={201}
                                />
                            </div>
                        </div>
                        <div className="flex gap-4 py-6 first:pt-0 last:pb-0">
                            <div className="w-full max-w-1/2">
                                <div className="flex gap-2">
                                    <div className="w-full max-w-24">
                                         <Image 
                                            src={HeroSideberImage}
                                            alt="Hero Sideber image"
                                            width={104}
                                            height={78}
                                            />
                                    </div>
                                    <p className="line-clamp-3">2 Jubo Dal factions exchange gunfire in Chattogram</p>
                                </div>
                                <p className="py-2.5">At around 8:30 am, the average Air Qualit Index (AQI) for Dhaka, as reported 193 which
                                    classified.</p>
                                <span className="text-xs sm:text-[13px] text-black/50">1 min ago</span>
                            </div>
                            <div className="w-full max-w-1/2">
                                <div className="flex gap-3 pb-2">
                                    <NewsItem
                                        image={HeroSideberImage}
                                        imageWidth={96}
                                        imageHeight={72}
                                        title={"চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"}
                                        />
                                </div>
                                <div className="flex gap-3 pb-5">
                                    <NewsItem
                                        content={"সংবাদ পরিবেশনায় পক্ষপাত ও নানা বিতর্কের জেরে পদত্যাগ করলেন ব্রিটিশ গণমাধ্যম বিবিসি'র মহাপরিচালক টিম ডেভি এবং বার্তাপ্রধান ডেবোরাহ টারনেস। রোববার (৯ নভেম্বর) তাঁরা"}
                                        time="1 min ago"
                                        />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3 py-6 first:pt-0 last:pb-0 divide-x divide-gray-border">
                            <div className="pr-3 last:pr-0">
                                <h6 className="text-sm sm:text-base font-semibold line-clamp-3">Live: 2 Jubo Dal factions exchange gunfire in
                                </h6>
                                <p className="text-xs sm:text-[13px] sm:leading-5 text-black/80 mt-3">At around 8:30 am, the average Air
                                    Quality Index (AQI) for Dhaka, as reported by IQAir, stood at 193, which is classified.</p>
                                <span className="text-xs sm:text-[13px] text-black/50 block mt-4">1 min ago</span>
                            </div>
                            <div className="pr-3 last:pr-0">
                                <h6 className="text-sm sm:text-base font-semibold line-clamp-3">Live: 2 Jubo Dal factions exchange gunfire in
                                </h6>
                                <p className="text-xs sm:text-[13px] sm:leading-5 text-black/80 mt-3">At around 8:30 am, the average Air
                                    Quality Index (AQI) for Dhaka, as reported by IQAir, stood at 193, which is classified.</p>
                                <span className="text-xs sm:text-[13px] text-black/50 block mt-4">1 min ago</span>
                            </div>
                            <div className="pr-3 last:pr-0">
                                <h6 className="text-sm sm:text-base font-semibold line-clamp-3">Live: 2 Jubo Dal factions exchange gunfire in
                                </h6>
                                <p className="text-xs sm:text-[13px] sm:leading-5 text-black/80 mt-3">At around 8:30 am, the average Air
                                    Quality Index (AQI) for Dhaka, as reported by IQAir, stood at 193, which is classified.</p>
                                <span className="text-xs sm:text-[13px] text-black/50 block mt-4">1 min ago</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-[25.390%] pl-5">
                        <h6 className="text-sm sm:text-base leading-6 text-black font-inter font-semibold">News Flash 71 <span
                            className="text-red font-inter">Special</span></h6>
                        <div className="divide-y divide-gray-border mt-6">
                            <div className="flex gap-3 py-4.5 first:pt-0 last:pb-0">
                                <div className="w-full max-w-22">
                                     <Image 
                                        src={HeroSideberImage}
                                        alt="Hero Sideber image"
                                        width={104}
                                        height={78}
                                        />
                                </div>
                                <h6 className="text-sm sm:text-base leading-6 text-black font-semibold">When Abul Kalam’s life is worth 2.5
                                    bhoris of gold</h6>
                            </div>
                            <div className="flex gap-3 py-4.5 first:pt-0 last:pb-0">
                                <div className="w-full max-w-22">
                                     <Image 
                                        src={HeroSideberImage}
                                        alt="Hero Sideber image"
                                        width={104}
                                        height={78}
                                        />
                                </div>
                                <h6 className="text-sm sm:text-base leading-6 text-black font-semibold">When Abul Kalam’s life is worth 2.5
                                    bhoris of gold</h6>
                            </div>
                            <div className="flex gap-3 py-4.5 first:pt-0 last:pb-0">
                                <div className="w-full max-w-22">
                                     <Image 
                                        src={HeroSideberImage}
                                        alt="Hero Sideber image"
                                        width={104}
                                        height={78}
                                        />
                                </div>
                                <h6 className="text-sm sm:text-base leading-6 text-black font-semibold">When Abul Kalam’s life is worth 2.5
                                    bhoris of gold</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}