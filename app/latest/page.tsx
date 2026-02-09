import NewsItem from "@/components/news-items/newsItem";
import LedNews from "@/components/led-news/LedNews";
import HeroSideberImage from "../../assets/image/hero-sidebar.png";
import ledImage from "../../assets/image/led-image.png";
import LatestNewsRead from "@/components/LatestNewsRed/LatestNewsRed";
import LatestNews from "@/components/latest-news/LatestNews";
import Add from "@/components/add/Add";
import RiverImage from "../../assets/image/river-image.png"
import SingleNewsItem from "@/components/news-items/SingleNewsItem";
import Image from "next/image";
import NewsFlashImage from "../../assets/image/news-flash.png"
import Button from "@/components/button/Button";

const latestNewsData = [
  { title: "দাঁতের জন্য ক্ষতিকর ৬ খাবার ও পানীয়: বিশেষজ্ঞদের সতর্কতা" },
  { title: "শীতকালে ত্বক ভালো রাখার ৫টি কার্যকর উপায়" },
  { title: "সকালে খালি পেটে যে খাবারগুলো খাওয়া উচিত" },
  { title: "চা না কফি—কোনটি স্বাস্থ্যের জন্য ভালো?" },
  { title: "অতিরিক্ত চিনি খেলে শরীরে কী হয়?" },
  { title: "সকালে খালি পেটে যে খাবারগুলো খাওয়া উচিত" },
];

const mostReadNews = [
  { title: "জোটে অংশ নিলেও নিজ দলের প্রতীকে ভোট বাধ্যতামূলক" },
  { title: "নির্বাচন নিয়ে নতুন ঘোষণা কমিশনের" },
  { title: "রাজনীতিতে নতুন মোড়, কী বলছেন বিশ্লেষকরা" },
  { title: "ভোটার উপস্থিতি বাড়াতে যে উদ্যোগ" },
  { title: "সংসদ নির্বাচন: গুরুত্বপূর্ণ ৫ দিক" },
  { title: "নির্বাচন নিয়ে নতুন ঘোষণা কমিশনের" },
];

export default function LatestNewspage() {
  return (
    <>
        <section className="py-5 sm:py-10">
            <div className="container">
                <h2 className="text-2xl font-bold">সর্বশেষ সংবাদ</h2>
                <div className="flex flex-col lg:flex-row mt-8 gap-5">
                {/* Left column - small news items */}
                <div className="w-full lg:max-w-[32%] flex flex-col gap-5 divide-y divide-[#D4D4D4] order-2 lg:order-1">
                    <NewsItem
                    image={HeroSideberImage}
                    imageWidth={140}
                    imageHeight={104}
                    title="ইতিহাস গড়ল ভারত! দক্ষিণ আফ্রিকাকে হারিয়ে নারী বিশ্বকাপ জয়"
                    time="১ মিনিট আগে"
                    href="/singledetails"
                    timeMt={16}
                    imageWrap="max-w-[140px]"
                    />
                    <NewsItem
                    image={HeroSideberImage}
                    imageWidth={140}
                    imageHeight={104}
                    title="কুমিল্লায় ট্রেনে আতশবাজি বিস্ফোরণ: শতাধিক যাত্রী বড় দুর্ঘটনা থেকে রক্ষা পেলেন"
                    time="১ মিনিট আগে"
                    href="/singledetails"
                    timeMt={16}
                    imageWrap="max-w-[140px]"
                    />
                    <NewsItem
                    image={HeroSideberImage}
                    imageWidth={140}
                    imageHeight={104}
                    title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                    time="১ মিনিট আগে"
                    href="/singledetails"
                    timeMt={16}
                    imageWrap="max-w-[140px]"
                    />
                    <NewsItem
                    image={HeroSideberImage}
                    imageWidth={140}
                    imageHeight={104}
                    title="কুমিল্লায় ট্রেনে আতশবাজি বিস্ফোরণ: শতাধিক যাত্রী বড় দুর্ঘটনা থেকে রক্ষা পেলেন"
                    time="১ মিনিট আগে"
                    href="/singledetails"
                    timeMt={16}
                    imageWrap="max-w-[140px]"
                    />
                </div>

                {/* Center column - LED news */}
                <div className="w-full lg:max-w-[42%] lg:px-4.75 lg:border-r lg:border-l border-[#A1A1A1] order-1 lg:order-2">
                    <LedNews
                    image={ledImage}
                    imageWidth={503}
                    imageHeight={377}
                    title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                    content="আসন্ন ত্রয়োদশ জাতীয় সংসদ নির্বাচনে চূড়ান্ত প্রার্থী ঘোষণা প্রসঙ্গে বাংলাদেশ জামায়াতে ইসলামীর আমির ডা. শফিকুর রহমান জানিয়েছেন, “সময়মতো আমরা চূড়ান্ত তালিকা জানিয়ে দেব।”"
                    time="১ মিনিট আগে"
                    href="/singledetails"
                    contentMt={12}
                    timeMt={16}
                    />
                </div>

                {/* Right column - tabs */}
                <div className="w-full lg:max-w-[25%] flex flex-col gap-5 divide-y divide-[#D4D4D4] order-3 lg:order-3">
                    <div className="group">
                    <input
                        type="radio"
                        name="newsTab"
                        id="latest"
                        defaultChecked
                        className="hidden"
                    />
                    <input
                        type="radio"
                        name="newsTab"
                        id="popular"
                        className="hidden"
                    />

                    {/* Tab labels */}
                    <div className="flex">
                        <label
                        htmlFor="latest"
                        className="w-1/2 text-center text-base leading-6 font-medium py-2 cursor-pointer border-b border-[#A1A1A1] text-title group-has-[#latest:checked]:border-red group-has-[#latest:checked]:text-red"
                        >
                        সর্বশেষ
                        </label>

                        <label
                        htmlFor="popular"
                        className="w-1/2 text-center text-base leading-6 font-medium py-2 cursor-pointer border-b border-[#A1A1A1] text-title group-has-[#popular:checked]:border-red group-has-[#popular:checked]:text-red"
                        >
                        বেশি পঠিত
                        </label>
                    </div>

                    {/* Tab content */}
                    <div className="mt-6">
                        <div className="hidden group-has-[#latest:checked]:block">
                        
                        <LatestNews items={latestNewsData} />
                        </div>

                        <div className="hidden group-has-[#popular:checked]:block">
                        <LatestNewsRead items={mostReadNews} />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        <Add />
        <section className="py-7 lg:py-14">
            <div className="container">
                <div className="space-y-8 divide-y divide-gray-dark max-w-220.5 mx-auto">
                    
                    <div className="pb-4 md:pb-8">
                        <SingleNewsItem
                                image={RiverImage}
                                imageWidth={340}
                                imageHeight={304}
                                title={"চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"}
                                time={"১ সেকেন্ড আগে"}
                                href="#"
                                timeMt={16}
                                SingleimageWrap="max-w-[200px]"
                                content="বলিউডের আইটেম গার্ল খ্যাত অভিনেত্রী মালাইকা অরোরা ব্যক্তিগত জীবন নিয়ে সবসময় আলোচনায় থাকেন। দীর্ঘদাম্পত্য আর সম্পর্ক ভেঙে যাওয়ার পর মালাইকা এবার নতুন প্রেমের গুঞ্জনে ছড়িয়ে পড়েছেন।"
                                titleMb={12}
                            />
                    </div>
                    <div className="pb-4 md:pb-8">
                        <SingleNewsItem
                                image={RiverImage}
                                imageWidth={340}
                                imageHeight={304}
                                title={"চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"}
                                time={"১ সেকেন্ড আগে"}
                                href="#"
                                timeMt={16}
                                SingleimageWrap="max-w-[200px]"
                                content="বলিউডের আইটেম গার্ল খ্যাত অভিনেত্রী মালাইকা অরোরা ব্যক্তিগত জীবন নিয়ে সবসময় আলোচনায় থাকেন। দীর্ঘদাম্পত্য আর সম্পর্ক ভেঙে যাওয়ার পর মালাইকা এবার নতুন প্রেমের গুঞ্জনে ছড়িয়ে পড়েছেন।"
                                titleMb={12}
                                isLive
                                
                            />
                    </div>
                    <div className="pb-4 md:pb-8">
                        <SingleNewsItem
                                image={RiverImage}
                                imageWidth={340}
                                imageHeight={304}
                                title={"চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"}
                                time={"১ সেকেন্ড আগে"}
                                href="#"
                                timeMt={16}
                                SingleimageWrap="max-w-[200px]"
                                content="বলিউডের আইটেম গার্ল খ্যাত অভিনেত্রী মালাইকা অরোরা ব্যক্তিগত জীবন নিয়ে সবসময় আলোচনায় থাকেন। দীর্ঘদাম্পত্য আর সম্পর্ক ভেঙে যাওয়ার পর মালাইকা এবার নতুন প্রেমের গুঞ্জনে ছড়িয়ে পড়েছেন।"
                                titleMb={12}
                                showPlayButton= {true}
                            />
                    </div>
                    <div className="pb-4 md:pb-8">
                        <SingleNewsItem
                                image={RiverImage}
                                imageWidth={340}
                                imageHeight={304}
                                title={"চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"}
                                time={"১ সেকেন্ড আগে"}
                                href="#"
                                timeMt={16}
                                SingleimageWrap="max-w-[200px]"
                                content="বলিউডের আইটেম গার্ল খ্যাত অভিনেত্রী মালাইকা অরোরা ব্যক্তিগত জীবন নিয়ে সবসময় আলোচনায় থাকেন। দীর্ঘদাম্পত্য আর সম্পর্ক ভেঙে যাওয়ার পর মালাইকা এবার নতুন প্রেমের গুঞ্জনে ছড়িয়ে পড়েছেন।"
                                titleMb={12}
                                showPlayButton= {true}
                            />
                    </div>
                    <div className="pb-4 md:pb-8">
                        <SingleNewsItem
                                image={RiverImage}
                                imageWidth={340}
                                imageHeight={304}
                                title={"চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"}
                                time={"১ সেকেন্ড আগে"}
                                href="#"
                                timeMt={16}
                                SingleimageWrap="max-w-[200px]"
                                content="বলিউডের আইটেম গার্ল খ্যাত অভিনেত্রী মালাইকা অরোরা ব্যক্তিগত জীবন নিয়ে সবসময় আলোচনায় থাকেন। দীর্ঘদাম্পত্য আর সম্পর্ক ভেঙে যাওয়ার পর মালাইকা এবার নতুন প্রেমের গুঞ্জনে ছড়িয়ে পড়েছেন।"
                                titleMb={12}
                                showPlayButton= {true}
                            />
                    </div>
                    <div className="pb-4 md:pb-8">
                        <SingleNewsItem
                                image={RiverImage}
                                imageWidth={340}
                                imageHeight={304}
                                title={"চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"}
                                time={"১ সেকেন্ড আগে"}
                                href="#"
                                timeMt={16}
                                SingleimageWrap="max-w-[200px]"
                                content="বলিউডের আইটেম গার্ল খ্যাত অভিনেত্রী মালাইকা অরোরা ব্যক্তিগত জীবন নিয়ে সবসময় আলোচনায় থাকেন। দীর্ঘদাম্পত্য আর সম্পর্ক ভেঙে যাওয়ার পর মালাইকা এবার নতুন প্রেমের গুঞ্জনে ছড়িয়ে পড়েছেন।"
                                titleMb={12}
                                showPlayButton= {true}
                            />
                    </div>
                    <div className="pb-4 md:pb-8">
                        <SingleNewsItem
                                image={RiverImage}
                                imageWidth={340}
                                imageHeight={304}
                                title={"চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"}
                                time={"১ সেকেন্ড আগে"}
                                href="#"
                                timeMt={16}
                                SingleimageWrap="max-w-[200px]"
                                content="বলিউডের আইটেম গার্ল খ্যাত অভিনেত্রী মালাইকা অরোরা ব্যক্তিগত জীবন নিয়ে সবসময় আলোচনায় থাকেন। দীর্ঘদাম্পত্য আর সম্পর্ক ভেঙে যাওয়ার পর মালাইকা এবার নতুন প্রেমের গুঞ্জনে ছড়িয়ে পড়েছেন।"
                                titleMb={12}
                                showPlayButton= {true}
                            />
                    </div>
                    <div className="pb-4 md:pb-8">
                        <SingleNewsItem
                                image={RiverImage}
                                imageWidth={340}
                                imageHeight={304}
                                title={"চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"}
                                time={"১ সেকেন্ড আগে"}
                                href="#"
                                timeMt={16}
                                SingleimageWrap="max-w-[200px]"
                                content="বলিউডের আইটেম গার্ল খ্যাত অভিনেত্রী মালাইকা অরোরা ব্যক্তিগত জীবন নিয়ে সবসময় আলোচনায় থাকেন। দীর্ঘদাম্পত্য আর সম্পর্ক ভেঙে যাওয়ার পর মালাইকা এবার নতুন প্রেমের গুঞ্জনে ছড়িয়ে পড়েছেন।"
                                titleMb={12}
                                showPlayButton= {true}
                            />
                    </div>
                    <div className="pb-4 md:pb-8">
                        <SingleNewsItem
                                image={RiverImage}
                                imageWidth={340}
                                imageHeight={304}
                                title={"চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"}
                                time={"১ সেকেন্ড আগে"}
                                href="#"
                                timeMt={16}
                                SingleimageWrap="max-w-[200px]"
                                content="বলিউডের আইটেম গার্ল খ্যাত অভিনেত্রী মালাইকা অরোরা ব্যক্তিগত জীবন নিয়ে সবসময় আলোচনায় থাকেন। দীর্ঘদাম্পত্য আর সম্পর্ক ভেঙে যাওয়ার পর মালাইকা এবার নতুন প্রেমের গুঞ্জনে ছড়িয়ে পড়েছেন।"
                                titleMb={12}
                                showPlayButton= {true}
                            />
                    </div>
                    <div className="pb-4 md:pb-8">
                        <SingleNewsItem
                                image={RiverImage}
                                imageWidth={340}
                                imageHeight={304}
                                title={"চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"}
                                time={"১ সেকেন্ড আগে"}
                                href="#"
                                timeMt={16}
                                SingleimageWrap="max-w-[200px]"
                                content="বলিউডের আইটেম গার্ল খ্যাত অভিনেত্রী মালাইকা অরোরা ব্যক্তিগত জীবন নিয়ে সবসময় আলোচনায় থাকেন। দীর্ঘদাম্পত্য আর সম্পর্ক ভেঙে যাওয়ার পর মালাইকা এবার নতুন প্রেমের গুঞ্জনে ছড়িয়ে পড়েছেন।"
                                titleMb={12}
                                showPlayButton= {true}
                            />
                    </div>
                    <div className="pb-4 md:pb-8">
                        <Image
                            src={NewsFlashImage}
                            alt="NewsFlashImage"
                        />
                    </div>
                    <div className="pb-4 md:pb-8 pt-2 max-w-60 mx-auto">
                        <Button 
                            text="আরো দেখুন"
                        />
                    </div>
                </div>
            </div>
        </section>
        <Add />
    </>
  );
}