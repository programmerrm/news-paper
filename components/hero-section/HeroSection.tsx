import HeroSideberImage from "../../assets/image/hero-sidebar.png";
import BanarImage from "../../assets/image/banner-image.jpg";
import NewsItem from "../news-items/newsItem";
import HeroTopNews from "./HeroTopNews";
import Image4 from "../../assets/image/image4.png"

export default function HeroSection() {
    return (
        <section className="pt-10 pb-10 md:pb-18">
            <div className="container">
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:max-w-[25.390%] divide-y divide-[#D4D4D4] space-y-5 pr-5 order-2 lg:order-1">
                        <div className="flex gap-3 pb-5">
                            <NewsItem 
                                image={HeroSideberImage}
                                title={"ইতিহাস গড়ল ভারত! দক্ষিণ আফ্রিকাকে হারিয়ে নারী বিশ্বকাপ জয়"}
                                time={"1 min ago"}
                                href="/singledetails"
                                imageWrap="max-w-[104px]"
                                imageWidth={104}
                                imageHeight={78}
                

                                />
                        </div>
                        <div className="flex gap-3 pb-5">
                            <NewsItem 
                                image={HeroSideberImage}
                                title={"চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"}
                                time={"1 min ago"}
                                imageWrap="max-w-[104px]"
                                imageWidth={104}
                                imageHeight={78}
                                href="/singledetails"
                                />
                        </div>
                        <div className="flex gap-3 pb-5">
                            <NewsItem 
                                image={HeroSideberImage}
                                title={"চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"}
                                time={"1 min ago"}
                                imageWrap="max-w-[104px]"
                                imageWidth={104}
                                imageHeight={78}
                                href="/singledetails"
                                />
                        </div>
                        <div className="flex gap-3 pb-5">
                            <NewsItem 
                                title={"যুদ্ধবিরতি ভঙ্গ! ইসরায়েলের বিরুদ্ধে ১৯৪ বার চুক্তি লঙ্ঘনের অভিযোগ"}
                                time={"1 min ago"}
                                href="/singledetails"
                                />
                        </div>
                        <div className="flex gap-3 pb-5">
                            <NewsItem 
                                title={"যুদ্ধবিরতি ভঙ্গ! ইসরায়েলের বিরুদ্ধে ১৯৪ বার চুক্তি লঙ্ঘনের অভিযোগ"}
                                time={"1 min ago"}
                                href="/singledetails"
                                />
                        </div>
                        
                    </div>
                    <div className="w-full lg:max-w-[49.062%] divide-y divide-[#A1A1A1] lg:border-l lg:border-r border-[#A1A1A1] lg:px-5 order-1 lg:order-2">
                            <HeroTopNews
                                title="ইতিহাস গড়ল ভারত! দক্ষিণ আফ্রিকাকে হারিয়ে নারী বিশ্বকাপ জয়"
                                description="২০০৫ ও ২০১৭ সালের আক্ষেপ ঘুচিয়ে নারী ওয়ানডে ক্রিকেটে বিশ্ব চ্যাম্পিয়ন হলো ভারত। রোববার নাভি মুম্বাইয়ের ফাইনালে রুদ্ধশ্বাস ম্যাচে দক্ষিণ আফ্রিকাকে .."
                                time="১ মিনিট আগে"
                                image={BanarImage}
                                caption="অবশেষে খরা কাটল!"
                                href="/singledetails"
                                />
                        <div className="flex flex-col xl:flex-row py-6 divide-y xl:divide-y-0 xl:divide-x divide-[#D4D4D4] first:pt-0 last:pb-0">
                            <div className="w-full xl:max-w-1/2 xl:pr-4">
                                <div className="pb-2">
                                    <NewsItem
                                        image={HeroSideberImage}
                                        imageWidth={96}
                                        imageHeight={72}
                                        title={"চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"}
                                        imageWrap="max-w-[96px]"
                                        href="/singledetails"
                                        />
                                </div>
                                <div className=" pb-5">
                                    <NewsItem
                                        content={"সংবাদ পরিবেশনায় পক্ষপাত ও নানা বিতর্কের জেরে পদত্যাগ করলেন ব্রিটিশ গণমাধ্যম বিবিসি'র মহাপরিচালক টিম ডেভি এবং বার্তাপ্রধান ডেবোরাহ টারনেস। রোববার (৯ নভেম্বর) তাঁরা"}
                                        time="1 min ago"
                                        href="/singledetails"
                                        />
                                </div>
                            </div>
                            <div className="w-full xl:max-w-1/2 xl:pl-4 xl:mt-0 mt-5">
                                <div className=" pb-2">
                                    <NewsItem
                                        image={HeroSideberImage}
                                        imageWidth={96}
                                        imageHeight={72}
                                        title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                                        imageWrap="max-w-[96px]" 
                                        href="/singledetails"       
                                        />
                                </div>
                                <div className=" xl:pb-5">
                                    <NewsItem
                                        content={"সংবাদ পরিবেশনায় পক্ষপাত ও নানা বিতর্কের জেরে পদত্যাগ করলেন ব্রিটিশ গণমাধ্যম বিবিসি'র মহাপরিচালক টিম ডেভি এবং বার্তাপ্রধান ডেবোরাহ টারনেস। রোববার (৯ নভেম্বর) তাঁরা"}
                                        time="1 min ago"
                                        href="/singledetails"
                                        />
                                </div>
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-3 gap-3 py-6 first:pt-0 lg:last:pb-0 divide-y sm:divide-y-0 sm:divide-x divide-[#D4D4D4]">
                            <div className="pr-3 last:pr-0 pb-3 sm:pb-0 last:pb-0">
                                <NewsItem
                                    title="১৯ বছরের ছোট, ডায়মন্ড ব্যবসায়ীর সঙ্গে প্রেমে মজলেন মালাইকা"
                                    content="বলিউডের আইটেম গার্ল খ্যাত অভিনেত্রী মালাইকা অরোরা ব্যক্তিগত জীবন নিয়ে সবসময় আলোচনায় থাকেন। দীর্ঘদাম্পত্য আর সম্পর্ক ভেঙে যাওয়ার পর মালাইকা এবার নতুন প্রেমের গুঞ্জনে ছড়িয়ে পড়েছেন।"
                                    time="1 min ago"
                                    titleMb={10}
                                    href="/singledetails"
                                    />
                            </div>
                            
                            <div className="pr-3 last:pr-0 pb-3 sm:pb-0 last:pb-0">
                                <NewsItem
                                    title="১৯ বছরের ছোট, ডায়মন্ড ব্যবসায়ীর সঙ্গে প্রেমে মজলেন মালাইকা"
                                    content="বলিউডের আইটেম গার্ল খ্যাত অভিনেত্রী মালাইকা অরোরা ব্যক্তিগত জীবন নিয়ে সবসময় আলোচনায় থাকেন। দীর্ঘদাম্পত্য আর সম্পর্ক ভেঙে যাওয়ার পর মালাইকা এবার নতুন প্রেমের গুঞ্জনে ছড়িয়ে পড়েছেন।"
                                    time="1 min ago"
                                    titleMb={10}
                                    isLive={true}
                                    href="/livefulldetails"
                                    />
                            </div>
                            <div className="pr-3 last:pr-0 pb-3 sm:pb-0 last:pb-0">
                                <NewsItem
                                    title="১৯ বছরের ছোট, ডায়মন্ড ব্যবসায়ীর সঙ্গে প্রেমে মজলেন মালাইকা"
                                    content="বলিউডের আইটেম গার্ল খ্যাত অভিনেত্রী মালাইকা অরোরা ব্যক্তিগত জীবন নিয়ে সবসময় আলোচনায় থাকেন। দীর্ঘদাম্পত্য আর সম্পর্ক ভেঙে যাওয়ার পর মালাইকা এবার নতুন প্রেমের গুঞ্জনে ছড়িয়ে পড়েছেন।"
                                    time="1 min ago"
                                    titleMb={10}
                                    href="/singledetails"
                                    />
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:max-w-[25.390%] lg:pl-5 order-3">
                        <h6 className="text-sm sm:text-base leading-6 text-black font-inter font-semibold">News Flash 71 <span
                            className="text-red font-inter">Special</span></h6>
                        <div className="divide-y divide-[#D4D4D4] mt-6">
                            <NewsItem 
                                image={Image4}
                                title="খালেদা জিয়া ৩ আসনে, তারেক রহমান বগুড়া-৬ এ বিএনপির প্রার্থী"
                                imageWidth={88}
                                imageHeight={66}
                                imageWrap="max-w-[88px]"
                                titleFontWeight={500}
                                href="/singledetails"
                            />
                            <NewsItem 
                                image={HeroSideberImage}
                                title="খালেদা জিয়া ৩ আসনে, তারেক রহমান বগুড়া-৬ এ বিএনপির প্রার্থী"
                                imageWidth={88}
                                imageHeight={66}
                                imageWrap="max-w-[88px]"
                                titleFontWeight={500}
                                href="/singledetails"
                            />
                            <NewsItem 
                                image={HeroSideberImage}
                                title="খালেদা জিয়া ৩ আসনে, তারেক রহমান বগুড়া-৬ এ বিএনপির প্রার্থী"
                                imageWidth={88}
                                imageHeight={66}
                                imageWrap="max-w-[88px]"
                                titleFontWeight={500}
                                href="/singledetails"
                            />
                            <NewsItem 
                                image={HeroSideberImage}
                                title="খালেদা জিয়া ৩ আসনে, তারেক রহমান বগুড়া-৬ এ বিএনপির প্রার্থী"
                                imageWidth={88}
                                imageHeight={66}
                                imageWrap="max-w-[88px]"
                                titleFontWeight={500}
                                href="/singledetails"
                            />
                            <NewsItem 
                                image={HeroSideberImage}
                                title="খালেদা জিয়া ৩ আসনে, তারেক রহমান বগুড়া-৬ এ বিএনপির প্রার্থী"
                                imageWidth={88}
                                imageHeight={66}
                                imageWrap="max-w-[88px]"
                                titleFontWeight={500}
                                href="/singledetails"
                            />
                            <NewsItem 
                                image={HeroSideberImage}
                                title="খালেদা জিয়া ৩ আসনে, তারেক রহমান বগুড়া-৬ এ বিএনপির প্রার্থী"
                                imageWidth={88}
                                imageHeight={66}
                                imageWrap="max-w-[88px]"
                                titleFontWeight={500}
                                href="/singledetails"
                            />
                            <NewsItem 
                                image={HeroSideberImage}
                                title="খালেদা জিয়া ৩ আসনে, তারেক রহমান বগুড়া-৬ এ বিএনপির প্রার্থী"
                                imageWidth={88}
                                imageHeight={66}
                                imageWrap="max-w-[88px]"
                                titleFontWeight={500}
                                href="/singledetails"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}