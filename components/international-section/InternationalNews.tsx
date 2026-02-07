import NewsItem from "../news-items/newsItem";
import SectionTitle from "../section-title/SectionTitle";
import TrumpImage from "../../assets/image/trump.png";
import LedNews from "../led-news/LedNews";
import TrumpSpeechImage from "../../assets/image/trump-speech.png";
import LatestNews from "../latest-news/LatestNews";
import LatestNewsRead from "../LatestNewsRed/LatestNewsRed";
import HasTagButton from "../button/HasTagButton";
import { hashTagData } from "../../data/hastag";

const latestNewsData = [
    {
        title: "দাঁতের জন্য ক্ষতিকর ৬ খাবার ও পানীয়: বিশেষজ্ঞদের সতর্কতা",
    },
    {
        title: "শীতকালে ত্বক ভালো রাখার ৫টি কার্যকর উপায়",
    },
    {
        title: "সকালে খালি পেটে যে খাবারগুলো খাওয়া উচিত",
    },
    {
        title: "চা না কফি—কোনটি স্বাস্থ্যের জন্য ভালো?",
    },
    {
        title: "অতিরিক্ত চিনি খেলে শরীরে কী হয়?",
    },
];

const mostReadNews = [
    { title: "জোটে অংশ নিলেও নিজ দলের প্রতীকে ভোট বাধ্যতামূলক" },
    { title: "নির্বাচন নিয়ে নতুন ঘোষণা কমিশনের" },
    { title: "রাজনীতিতে নতুন মোড়, কী বলছেন বিশ্লেষকরা" },
    { title: "ভোটার উপস্থিতি বাড়াতে যে উদ্যোগ" },
    { title: "সংসদ নির্বাচন: গুরুত্বপূর্ণ ৫ দিক" },
];
export default function InternationalNews() {
    return (
        <section className="py-8 lg:py-16 bg-linear-to-b from-[#F0F5F4] to-[#FFFFFF]">
            <div className="container">
                <div className="flex flex-col lg:flex-row lg:divide-x divide-[#D4D4D4] ">
                    <div className="w-full lg:max-w-[74.609%] lg:pr-5">
                        <div className="mb-8">
                            <SectionTitle title="বিশ্বের খবর" href="/category" />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:divide-x divide-[#D4D4D4]">
                            <div className="w-full sm:max-w-[42.977%] sm:pr-5 space-y-3 lg:space-y-5 divide-y divide-[#D4D4D4] mt-5 sm:mt-0 order-2 sm:order-1">
                                <div className="pb-3 lg:pb-5">
                                    <NewsItem
                                        image={TrumpImage}
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
                                        image={TrumpImage}
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
                                        image={TrumpImage}
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
                                        image={TrumpImage}
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
                            <div className="w-full sm:max-w-[calc(100%-42.977%)] sm:pl-5 order-1 sm:order-2">
                                <LedNews
                                    image={TrumpSpeechImage}
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
                        </div>
                        <div className="border-t border-[#A1A1A1] mt-5 pt-5 grid sm:grid-cols-3 gap-4 sm:divide-x divide-[#D4D4D4]">
                            <div className="pr-4">
                                <NewsItem
                                    title="রাষ্ট্র নীরব, মানুষ ক্ষুব্ধ—মব রুলে চলছে রক্তাক্ত ন্যায়"
                                    content="মবের মুল্লুকে আপনাকে স্বাগত। মব রুল বা মবোক্রেসিতে দেশাক্রান্ত। ঘটছে একের পর এক মবকাণ্ড। এটাই এখন বাস্তবতা। আইনের শাসনে ভরসা নেই। "
                                    time="১ মিনিট আগে"
                                    href="/news/led/1"
                                    titleMb={12}
                                    timeMt={16}
                                />
                            </div>
                            <div className="pr-4">
                                <NewsItem
                                    title="রাষ্ট্র নীরব, মানুষ ক্ষুব্ধ—মব রুলে চলছে রক্তাক্ত ন্যায়"
                                    content="মবের মুল্লুকে আপনাকে স্বাগত। মব রুল বা মবোক্রেসিতে দেশাক্রান্ত। ঘটছে একের পর এক মবকাণ্ড। এটাই এখন বাস্তবতা। আইনের শাসনে ভরসা নেই। "
                                    time="১ মিনিট আগে"
                                    href="/news/led/1"
                                    titleMb={12}
                                    timeMt={16}
                                />
                            </div>
                            <div className="pr-4">
                                <NewsItem
                                    title="রাষ্ট্র নীরব, মানুষ ক্ষুব্ধ—মব রুলে চলছে রক্তাক্ত ন্যায়"
                                    content="মবের মুল্লুকে আপনাকে স্বাগত। মব রুল বা মবোক্রেসিতে দেশাক্রান্ত। ঘটছে একের পর এক মবকাণ্ড। এটাই এখন বাস্তবতা। আইনের শাসনে ভরসা নেই। "
                                    time="১ মিনিট আগে"
                                    href="/news/led/1"
                                    titleMb={12}
                                    timeMt={16}
                                />
                            </div>
                            
                        </div>
                    </div>

                    <div className="w-full lg:max-w-[25.390%] lg:pl-5 order-3 lg:order-3 mt-5 lg:mt-0">
                        <div className="flex flex-col gap-5">
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
                                <div className="flex">
                                    <label
                                        htmlFor="latest"
                                        className="w-1/2 text-center text-base leading-6 font-medium py-2 cursor-pointer border-b border-[#A1A1A1] text-title  group-has-[#latest:checked]:border-red group-has-[#latest:checked]:text-red"
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

                                <div className="mt-6">
                                    <div className="hidden group-has-[#latest:checked]:block">
                                        <LatestNews items={latestNewsData} />
                                    </div>

                                    <div className="hidden group-has-[#popular:checked]:block">
                                        <LatestNewsRead items={mostReadNews} />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#FBF7EF] p-5">
                                <h5 className="text-[17px] font-semibold ">ট্রেন্ডিং হ্যাসট্যাগ</h5>
                                <div className="flex items-center flex-wrap gap-2 mt-3">
                                    {hashTagData.map((item) => (
                                        <HasTagButton
                                        key={item.id}
                                        href={item.href}
                                        label={item.label}
                                        />
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
