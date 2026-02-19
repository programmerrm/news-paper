import SectionTitle from "../section-title/SectionTitle";
import LedNews from "../led-news/LedNews";
import NationalNews from "../national-section/NationalNews";
import NewsItem from "../news-items/newsItem";
import politicsImage from "../../assets/image/politics-image-1.jpg";

export default function PoliticsSection() {
    return (
        <section className="py-8 lg:py-16">
            <div className="container">
                <SectionTitle title="রাজনীতি" href="/category" />

                {/* GRID */}
                <div
                    className="sm:grid grid-cols-[59.14%_40.86%] lg:grid-cols-[40.86%_27.11%_32.03%] gap-y-5 mt-8"
                >
                    {/* COLUMN 1 */}
                    <div className="pr-5">
                        <LedNews
                            image={politicsImage}
                            imageWidth={503}
                            imageHeight={377}
                            title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                            content="আসন্ন ত্রয়োদশ জাতীয় সংসদ নির্বাচনে চূড়ান্ত প্রার্থী ঘোষণা প্রসঙ্গে বাংলাদেশ জামায়াতে ইসলামীর আমির ডা. শফিকুর রহমান জানিয়েছেন, সময়মতো আমরা চূড়ান্ত তালিকা জানিয়ে দেব।"
                            time="১ মিনিট আগে"
                            href="/singledetails"
                            contentMt={12}
                            timeMt={16}
                        />
                    </div>

                    {/* COLUMN 2 */}
                    <div className="sm:px-5 sm:border-x border-[#A1A1A1]">
                        <div className="space-y-5 divide-y divide-[#D4D4D4]">
                            <div className="pb-5">
                                <NationalNews
                                    image={politicsImage}
                                    imageWidth={305}
                                    imageHeight={229}
                                    title="ফিলিস্তিনি বন্দির ওপর ভয়াবহ নির্যাতনের ভিডিও ফাঁস"
                                    time="১ মিনিট আগে"
                                    href="/singledetails"
                                    timeMt={12}
                                />
                            </div>

                            <div className="pb-5 last:pb-0">
                                <NationalNews
                                    image={politicsImage}
                                    imageWidth={305}
                                    imageHeight={229}
                                    title="ইসরাইলি সেনাবাহিনীর সাবেক প্রধান আইন কর্মকর্তা গ্রেফতার"
                                    time="১ মিনিট আগে"
                                    href="/singledetails"
                                    timeMt={12}
                                />
                            </div>
                        </div>
                    </div>

                    {/* COLUMN 3 */}
                    <div className="sm:pl-5 mt-5 lg:mt-0 col-span-2 lg:col-span-1">
                        <div className="space-y-5 divide-y divide-[#D4D4D4]">
                            {[1, 2, 3, 4, 5].map((_, index) => (
                                <div key={index} className="pb-5 last:pb-0">
                                    <NewsItem
                                        imageWidth={140}
                                        imageHeight={104}
                                        title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত"
                                        time="১ মিনিট আগে"
                                        timeMt={"16"}
                                        href="/singledetails"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
