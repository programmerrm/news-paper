import NewsItem from "../news-items/newsItem";
import SectionTitle from "../section-title/SectionTitle";
import HeroSideberImage from "../../assets/image/hero-sidebar.png"
import LedNews from "../led-news/LedNews";
import sportsImage from "../../assets/image/sports-image.jpg"
import Image from "next/image";
import sportImage from "../../assets/image/sports-image.jpg"
import sportAddImage from "../../assets/image/sports-add.png"

export default function SportsSection(){
    return(
        <section className="py-8 lg:py-16 bg-linear-to-b from-[#F0F5F4] to-[#FFFFFF]">
            <div className="container">
                <SectionTitle
                    title="খেলাধুলা"
                    href="/category"
                />
                <div className="flex flex-col lg:flex-row mt-6 lg:mt-8">
                    <div className="w-full lg:max-w-[32.031%] lg:pr-5 space-y-3 lg:space-y-5 divide-y divide-[#D4D4D4] order-2 lg:order-1 mt-5 lg:mt-0">
                        <div className="pb-3 lg:pb-5">
                            <NewsItem
                                image={HeroSideberImage}
                                imageWidth={140}
                                imageHeight={104}
                                title={"জোটে অংশ নিলেও নিজ দলের প্রতীকে ভোট বাধ্যতামূলক"}
                                time={"১ মিনিট আগে"}
                                href="#"
                                timeMt={16}
                                imageWrap="max-w-[104px]"
                                />
                        </div>
                        <div className="pb-3 lg:pb-5">
                            <NewsItem
                                image={HeroSideberImage}
                                imageWidth={140}
                                imageHeight={104}
                                title={"জোটে অংশ নিলেও নিজ দলের প্রতীকে ভোট বাধ্যতামূলক"}
                                time={"১ মিনিট আগে"}
                                href="#"
                                timeMt={16}
                                imageWrap="max-w-[104px]"
                                />
                        </div>
                        <div className="pb-3 lg:pb-5">
                            <NewsItem
                                image={HeroSideberImage}
                                imageWidth={140}
                                imageHeight={104}
                                title={"জোটে অংশ নিলেও নিজ দলের প্রতীকে ভোট বাধ্যতামূলক"}
                                time={"১ মিনিট আগে"}
                                href="#"
                                timeMt={16}
                                imageWrap="max-w-[104px]"
                                />
                        </div>
                        <div className="pb-3 lg:pb-5">
                            <NewsItem
                                image={HeroSideberImage}
                                imageWidth={140}
                                imageHeight={104}
                                title={"জোটে অংশ নিলেও নিজ দলের প্রতীকে ভোট বাধ্যতামূলক"}
                                time={"১ মিনিট আগে"}
                                href="#"
                                timeMt={16}
                                imageWrap="max-w-[104px]"
                                />
                        </div>
                    </div>
                    <div className="w-full lg:max-w-[42.579%] lg:px-5 lg:border-x border-[#A1A1A1] order-1 lg:order-2">
                        <LedNews
                            image={sportsImage}
                            imageWidth={503}
                            imageHeight={377}
                            title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                            content="আসন্ন ত্রয়োদশ জাতীয় সংসদ নির্বাচনে চূড়ান্ত প্রার্থী ঘোষণা প্রসঙ্গে বাংলাদেশ জামায়াতে ইসলামীর আমির ডা. শফিকুর রহমান জানিয়েছেন, “সময়মতো আমরা চূড়ান্ত তালিকা জানিয়ে দেব।” মঙ্গলবার (৪ নভেম্বর) বিদেশ সফর শেষে দেশে ফিরে সকাল ৬টার দিকে হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দরে আয়োজিত এক সংক্ষিপ্ত প্রেস ব্রিফিংয়ে তিনি এ কথা বলেন।"
                            time="১ মিনিট আগে"
                            href="/news/led/1"
                            contentMt={12}
                            timeMt={16}
                        />
                    </div>
                    <div className="w-full lg:max-w-[25.390%] lg:pl-5 order-3 lg:order-3 mt-5 lg:mt-0">
                        <div className="flex flex-col gap-5">
                            <div>
                                <Image
                                    src={sportAddImage}
                                    alt="sportAddImage"
                                    width={305}
                                    height={256}
                                    className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                                    priority
                                />
                            </div>
                            <div className="space-y-3 lg:space-y-5 divide-y divide-[#D4D4D4]">
                                <div className="pb-3 lg:pb-5">
                                    <NewsItem
                                        title="যুদ্ধবিরতি ভঙ্গ! ইসরায়েলের বিরুদ্ধে ১৯৪ বার চুক্তি লঙ্ঘনের অভিযোগ"
                                        time={"১ মিনিট আগে"}
                                        href="#"
                                        timeMt={10}
                                        />
                                </div>
                                <div className="pb-3 lg:pb-5">
                                    <NewsItem
                                        title="যুদ্ধবিরতি ভঙ্গ! ইসরায়েলের বিরুদ্ধে ১৯৪ বার চুক্তি লঙ্ঘনের অভিযোগ"
                                        time={"১ মিনিট আগে"}
                                        href="#"
                                        timeMt={10}
                                        />
                                </div>
                                <div className="pb-3 lg:pb-5">
                                    <NewsItem
                                        title="যুদ্ধবিরতি ভঙ্গ! ইসরায়েলের বিরুদ্ধে ১৯৪ বার চুক্তি লঙ্ঘনের অভিযোগ"
                                        time={"১ মিনিট আগে"}
                                        href="#"
                                        timeMt={10}
                                        />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}