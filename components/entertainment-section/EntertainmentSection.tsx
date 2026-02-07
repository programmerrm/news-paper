import SectionTitle from "../section-title/SectionTitle";
import NewsItem from "../news-items/newsItem";
import HeroSideberImage from "../../assets/image/hero-sidebar.png";
import nationalImageLed from "../../assets/image/national-image-led.png"
import updesthaImage from "../../assets/image/image3.png"
import NationalNews from "../national-section/NationalNews";
import NationalLedNews from "../national-led-news/NationalLedNews";
import entertainmentLedImage from "../../assets/image/entertainment-image.png";
import addentertainmentImage from "../../assets/image/add-entertainment.png";
import Image from "next/image";

export default function EntertainmentSection (){
    return (
        <section className=" py-8 lg:py-16">
            <div className="container">
                <SectionTitle
                    title= "বিনোদন"
                    href="/category"
                />
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:max-w-[74.062%]">
                        <div className="mt-8 flex flex-col md:flex-row lg:pr-5 lg:border-r border-title">
                            <div className="w-full md:max-w-[56%] md:pr-5 md:border-r border-[#A1A1A1]">
                                <NationalLedNews 
                                    image={entertainmentLedImage}
                                    title="বিএনপিতে ১০টি আসনে সুপ্রিম কোর্টের আইনজীবীদের প্রার্থী হিসেবে"
                                    time="৫ মিনিট আগে"
                                    href="/news/1"
                                />
                                <div className="grid grid-cols-2 mt-5 gap-4">
                                    <NationalNews
                                        image={nationalImageLed}
                                        title="২৩৭ আসনে বিএনপির প্রার্থী তালিকা প্রকাশ: খালেদা জিয়া-তারেক রহমান কোন আসনে?"
                                        time="১ মিনিট আগে"
                                        href="#"
                                        timeMt={12}
                                    />
                                    <NationalNews
                                        image={nationalImageLed}
                                        title="২৩৭ আসনে বিএনপির প্রার্থী তালিকা প্রকাশ: খালেদা জিয়া-তারেক রহমান কোন আসনে?"
                                        time="১ মিনিট আগে"
                                        href="#"
                                        timeMt={12}
                                    />
                                </div>
                            </div>
                            <div className="w-full md:max-w-[44%] md:pl-5 my-5 md:my-0">
                                <div className="divide-y divide-[#D4D4D4] space-y-4">
                                    <div className="pb-4 last:pb-0">
                                        <NewsItem 
                                        image={updesthaImage}
                                        imageWidth={104}
                                        imageHeight={78}
                                        title={"চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"}
                                        href="#"
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
                                        href="#"
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
                                        href="#"
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
                                        href="#"
                                        time="১ মিনিট আগে"
                                        timeMt={10}
                                        /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:max-w-[25.937%]">
                        <div className="mt-8 pl-5 pb-6 flex flex-col">
                            <Image 
                                src={addentertainmentImage}
                                width={312}
                                height={688}
                                alt="add entertainment"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}