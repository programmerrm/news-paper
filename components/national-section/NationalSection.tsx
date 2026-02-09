import SectionTitle from "../section-title/SectionTitle";
import NewsItem from "../news-items/newsItem";
import HeroSideberImage from "../../assets/image/hero-sidebar.png";
import NationalLedNews from "../national-led-news/NationalLedNews";
import nationalImageLed from "../../assets/image/national-image-led.png"
import NationalNews from "./NationalNews";
import updesthaImage from "../../assets/image/image3.png"
import nationalLedImage from "../../assets/image/national-led-news.jpg";
import OnlineVote from "../onlinevote/OnlineVote";
import onlineImage from "../../assets/image/online-vote.png"


export default function NationalSection (){
    return (
        <section className="bg-linear-to-b from-[#F0F5F4] to-[#FFFFFF] py-8 lg:py-16">
            <div className="container">
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:max-w-[67.343%] lg:pr-5 lg:border-r border-title">
                        <SectionTitle
                            title= "জাতীয়"
                            href="/category"
                        />
                        <div className="mt-8 flex flex-col md:flex-row">
                            <div className="w-full md:max-w-[61.282%] md:pr-5 md:border-r border-[#A1A1A1]">
                                <NationalLedNews 
                                    image={nationalLedImage}
                                    title="বিএনপিতে ১০টি আসনে সুপ্রিম কোর্টের আইনজীবীদের প্রার্থী হিসেবে"
                                    time="৫ মিনিট আগে"
                                    href="/singledetails"
                                />
                                <div className="grid grid-cols-2 mt-5 gap-4">
                                    <NationalNews
                                        image={nationalImageLed}
                                        title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                                        time="১ মিনিট আগে"
                                        href="/singledetails"
                                        timeMt={12}
                                    />
                                    <NationalNews
                                        image={nationalImageLed}
                                        title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                                        time="১ মিনিট আগে"
                                        href="/singledetails"
                                        timeMt={12}
                                    />
                                </div>
                            </div>
                            <div className="w-full md:max-w-[38.599%] md:pl-5 my-5 md:my-0">
                                <div className="divide-y divide-[#D4D4D4] space-y-4">
                                    <div className="pb-4 last:pb-0">
                                        <NewsItem 
                                        image={updesthaImage}
                                        imageWidth={104}
                                        imageHeight={78}
                                        title={"চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"}
                                        href="/singledetails"
                                        time="১ মিনিট আগে"
                                        timeMt={10}
                                        /> 
                                    </div>
                                    <div className="pb-4 last:pb-0">
                                        <NewsItem 
                                        image={HeroSideberImage}
                                        imageWidth={104}
                                        imageHeight={78}
                                        title={"চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"}
                                        href="/singledetails"
                                        time="১ মিনিট আগে"
                                        timeMt={10}
                                        /> 
                                    </div>
                                    <div className="pb-4 last:pb-0">
                                        <NewsItem 
                                        image={HeroSideberImage}
                                        imageWidth={104}
                                        imageHeight={78}
                                        title={"চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"}
                                        href="/singledetails"
                                        time="১ মিনিট আগে"
                                        timeMt={10}
                                        isLive={true}
                                        /> 
                                    </div>
                                    <div className="pb-4 last:pb-0">
                                        <NewsItem 
                                        image={HeroSideberImage}
                                        imageWidth={104}
                                        imageHeight={78}
                                        title={"চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"}
                                        href="/singledetails"
                                        time="১ মিনিট আগে"
                                        timeMt={10}
                                        /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:max-w-[32.5%] lg:pl-5 mt-5 lg:mt-0">
                        <div className="pb-3 lg:pb-6 border-b-2 border-[#A1A1A1] flex gap-3 items-center">
                            <h4 className="text-xl! lg:text-2xl! font-semibold font-inter">অনলাইন ভোট</h4>
                        </div>
                        <div className="mt-5 flex flex-col">
                            <OnlineVote
                                image={onlineImage}
                                date="৪ এপ্রিল ২০২৫"
                                question="টিআইবির নির্বাহী পরিচালক ড. ইফতেখারুজ্জামান বলেছেন, সরকার পরিবর্তনের পর নতুন করে দলবাজি, দখলবাজি ও চাঁদাবাজি শুরু হয়েছে। আপনিও কি তা-ই মনে করেন?"
                                options={[
                                    { id: "yes", label: "হ্যাঁ ভোট", value: "yes" },
                                    { id: "no", label: "না ভোট", value: "no" },
                                    { id: "noComment", label: "মন্তব্য নেই", value: "noComment" },
                                ]}
                                
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}