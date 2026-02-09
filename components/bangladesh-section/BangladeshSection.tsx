import SectionTitle from "../section-title/SectionTitle";
import NewsItem from "../news-items/newsItem";
import HeroSideberImage from "../../assets/image/hero-sidebar.png";
import LedNews from "../led-news/LedNews";
import ledImage from "../../assets/image/led-image.png"
import Button from "../button/Button";
import { subdistricts } from "@/data/subdistricts";
import { districts } from "@/data/districts";
import { divisions } from "@/data/division";
import CustomSelect from "../selects/CustomSelect";

export default function BangldeshNews (){
    return (
        <section className="py-8 lg:py-16">
            <div className="container">
                <SectionTitle
                    title="বাংলাদেশ"
                    href="/category"
                />
                
                <div className="bg-[#E0EBF0] p-4 lg:p-8 mt-8 ">
                    <h5 className="text-center mb-3.5">আপনার এলাকার খবর</h5>
                    <form action="" className="flex flex-col sm:flex-row items-center gap-3">
                        <div className="w-full grid sm:grid-cols-3 gap-3 sm:flex-1">
                            <CustomSelect
                                options={divisions}
                            />
                            <CustomSelect
                                options={districts}
                            />
                            <CustomSelect
                                options={subdistricts}
                            />
                        </div>
                        <div className="w-full sm:max-w-40 lg:max-w-60">
                            <Button
                                text="সার্চ করুন"
                            />
                        </div>
                    </form>
                </div>
                <div className="flex flex-col lg:flex-row mt-8">
                    <div className="w-full lg:max-w-[32.031%] lg:pr-5 mt-4 lg:mt-0 flex flex-col gap-2.5 lg:gap-5 divide-y divide-[#D4D4D4] order-2 lg:order-1">
                        <div className="pb-3 lg:pb-5">
                            <NewsItem 
                                image={HeroSideberImage}
                                imageWidth={140}
                                imageHeight={104}
                                title={"ইতিহাস গড়ল ভারত! দক্ষিণ আফ্রিকাকে হারিয়ে নারী বিশ্বকাপ জয়"}
                                time={"১ মিনিট আগে"}
                                href="/singledetails"
                                timeMt={16}
                                imageWrap="max-w-[104px]"
                                />
                        </div>
                        <div className="pb-3 lg:pb-5">
                            <NewsItem 
                                image={HeroSideberImage}
                                imageWidth={140}
                                imageHeight={104}
                                title={"কুমিল্লায় ট্রেনে আতশবাজি বিস্ফোরণ: শতাধিক যাত্রী বড় দুর্ঘটনা থেকে রক্ষা পেলেন"}
                                time={"১ মিনিট আগে"}
                                href="/singledetails"
                                timeMt={16}
                                imageWrap="max-w-[104px]"
                                />
                        </div>
                        <div className="pb-3 lg:pb-5">
                            <NewsItem 
                                image={HeroSideberImage}
                                imageWidth={140}
                                imageHeight={104}
                                title={"চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"}
                                time={"১ মিনিট আগে"}
                                href="/singledetails"
                                timeMt={16}
                                imageWrap="max-w-[104px]"
                                />
                        </div>
                        <div className="pb-3 lg:pb-5">
                            <NewsItem 
                                image={HeroSideberImage}
                                imageWidth={140}
                                imageHeight={104}
                                title={"কুমিল্লায় ট্রেনে আতশবাজি বিস্ফোরণ: শতাধিক যাত্রী বড় দুর্ঘটনা থেকে রক্ষা পেলেন"}
                                time={"১ মিনিট আগে"}
                                href="/singledetails"
                                timeMt={16}
                                imageWrap="max-w-[104px]"
                                />
                        </div>
                    </div>
                    <div className="w-full lg:max-w-[42.421%] lg:px-4.75 lg:border-r lg:border-l border-[#A1A1A1] order-1 lg:order-2">
                        <LedNews
                            image={ledImage}
                            imageWidth={503}
                            imageHeight={377}
                            title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                            content="আসন্ন ত্রয়োদশ জাতীয় সংসদ নির্বাচনে চূড়ান্ত প্রার্থী ঘোষণা প্রসঙ্গে বাংলাদেশ জামায়াতে ইসলামীর আমির ডা. শফিকুর রহমান জানিয়েছেন, “সময়মতো আমরা চূড়ান্ত তালিকা জানিয়ে দেব।” মঙ্গলবার (৪ নভেম্বর) বিদেশ সফর শেষে দেশে ফিরে সকাল ৬টার দিকে হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দরে আয়োজিত এক সংক্ষিপ্ত প্রেস ব্রিফিংয়ে তিনি এ কথা বলেন।"
                            time="১ মিনিট আগে"
                            href="/singledetails"
                            contentMt={12}
                            timeMt={16}
                        />
                    </div>
                    <div className="w-full lg:max-w-[25.391%] lg:pl-5 mt-4 lg:mt-0 flex flex-col gap-3 lg:gap-5 divide-y divide-[#D4D4D4] order-3 lg:order-3">
                        <div className="item">
                            <div className="pb-2.5">
                                <NewsItem 
                                image={HeroSideberImage}
                                imageWidth={96}
                                imageHeight={72}
                                title={"চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"}
                                href="/singledetails"
                                imageWrap="max-w-[104px]"
                                /> 
                            </div>
                            <div className="pb-3 lg:pb-5">
                                <NewsItem 
                                    content={"আসন্ন ত্রয়োদশ জাতীয় সংসদ নির্বাচনে চূড়ান্ত প্রার্থী ঘোষণা প্রসঙ্গে বাংলাদেশ জামায়াতে ইসলামীর আমির ডা. শফিকুর রহমান জানিয়েছেন..."}
                                    href="/singledetails"
                                    time="১ মিনিট আগে"
                                    timeMt={10}
                                    imageWrap="max-w-[104px]"
                                    />
                            </div>
                        </div>
                        <div className="item">
                            <div className="pb-2.5">
                                <NewsItem 
                                image={HeroSideberImage}
                                imageWidth={96}
                                imageHeight={72}
                                title={"চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"}
                                href="/singledetails"
                                imageWrap="max-w-[104px]"
                                /> 
                            </div>
                            <div className="pb-3 lg:pb-5">
                                <NewsItem 
                                    content={"আসন্ন ত্রয়োদশ জাতীয় সংসদ নির্বাচনে চূড়ান্ত প্রার্থী ঘোষণা প্রসঙ্গে বাংলাদেশ জামায়াতে ইসলামীর আমির ডা. শফিকুর রহমান জানিয়েছেন..."}
                                    href="/singledetails"
                                    time="১ মিনিট আগে"
                                    timeMt={10}
                                    imageWrap="max-w-[104px]"
                                    />
                            </div>
                        </div>
                        <div className="item">
                            <div className="pb-2.5">
                                <NewsItem 
                                image={HeroSideberImage}
                                imageWidth={96}
                                imageHeight={72}
                                title={"চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"}
                                href="/singledetails"
                                imageWrap="max-w-[104px]"
                                /> 
                            </div>
                            <div className="pb-3 lg:pb-5">
                                <NewsItem 
                                    content={"আসন্ন ত্রয়োদশ জাতীয় সংসদ নির্বাচনে চূড়ান্ত প্রার্থী ঘোষণা প্রসঙ্গে বাংলাদেশ জামায়াতে ইসলামীর আমির ডা. শফিকুর রহমান জানিয়েছেন..."}
                                    href="/singledetails"
                                    time="১ মিনিট আগে"
                                    timeMt={10}
                                    imageWrap="max-w-[104px]"
                                    />
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
        </section>
    );
}