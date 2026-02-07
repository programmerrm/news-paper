import LedNews from "@/components/led-news/LedNews";
import HeroSideberImage from "../../assets/image/hero-sidebar.png";
import ledImage from "../../assets/image/led-image.png";
import NewsFlashImage from "../../assets/image/news-flash.png"
import Button from "@/components/button/Button";
import NewsBreadcrumb from "@/components/breadcrumb/NewsBreadcrumb";
import SubCategory from "@/components/subcategory/SubCategory";
import CategoryNewsHeadding from "@/components/category/CategoryNewsHeadding";
import SectionHeader from "@/components/category/SectionHeader";
import OpinionItem from "@/components/news-items/opinionItem";
import OpinionLedNews from "@/components/led-news/OpinionLedNews";
import DetailsAdd from "@/components/detailsadd/DetailsAdd";

export default function OpinionPage() {
    return (
        <>
            <section className="py-5 sm:py-10">
                <div className="container">
                    <div>
                        <NewsBreadcrumb
                            title="মতামত"
                        />
                        <SubCategory />
                    </div>

                    <div className="flex flex-col lg:flex-row mt-8 gap-5">
                        {/* Left column - small news items */}
                        <div className="w-full lg:max-w-[30.469%] flex flex-col divide-y divide-[#D4D4D4] order-2 lg:order-1">
                            <OpinionItem
                                image={HeroSideberImage}
                                imageWidth={140}
                                imageHeight={104}
                                title="ইতিহাস গড়ল ভারত! দক্ষিণ আফ্রিকাকে হারিয়ে নারী বিশ্বকাপ জয়"
                                time="১ মিনিট আগে"
                                href="/opinioncategory"
                                timeMt={16}
                                imageWrap="max-w-[140px]"
                                iconPositionClass="left-3 bottom-3"
                                iconHeight={24}
                                iconWidth={24}
                            />
                            <OpinionItem
                                image={HeroSideberImage}
                                imageWidth={140}
                                imageHeight={104}
                                title="ইতিহাস গড়ল ভারত! দক্ষিণ আফ্রিকাকে হারিয়ে নারী বিশ্বকাপ জয়"
                                time="১ মিনিট আগে"
                                href="#"
                                timeMt={16}
                                imageWrap="max-w-[140px]"
                                iconPositionClass="left-3 bottom-3"
                                iconHeight={24}
                                iconWidth={24}
                            />
                            <OpinionItem
                                image={HeroSideberImage}
                                imageWidth={140}
                                imageHeight={104}
                                title="ইতিহাস গড়ল ভারত! দক্ষিণ আফ্রিকাকে হারিয়ে নারী বিশ্বকাপ জয়"
                                time="১ মিনিট আগে"
                                href="#"
                                timeMt={16}
                                imageWrap="max-w-[140px]"
                                iconPositionClass="left-3 bottom-3"
                                iconHeight={24}
                                iconWidth={24}
                            />
                            <OpinionItem
                                image={HeroSideberImage}
                                imageWidth={140}
                                imageHeight={104}
                                title="ইতিহাস গড়ল ভারত! দক্ষিণ আফ্রিকাকে হারিয়ে নারী বিশ্বকাপ জয়"
                                time="১ মিনিট আগে"
                                href="#"
                                timeMt={16}
                                imageWrap="max-w-[140px]"
                                iconPositionClass="left-3 bottom-3"
                                iconHeight={24}
                                iconWidth={24}
                            />
                            
                        </div>

                        {/* Center column - LED news */}
                        <div className="w-full lg:max-w-[42.421%] lg:px-4.75 lg:border-r lg:border-l border-[#A1A1A1] order-1 lg:order-2">
                            <OpinionLedNews
                                image={ledImage}
                                imageWidth={503}
                                imageHeight={377}
                                title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                                content="আসন্ন ত্রয়োদশ জাতীয় সংসদ নির্বাচনে চূড়ান্ত প্রার্থী ঘোষণা প্রসঙ্গে বাংলাদেশ জামায়াতে ইসলামীর আমির ডা. শফিকুর রহমান জানিয়েছেন, “সময়মতো আমরা চূড়ান্ত তালিকা জানিয়ে দেব।”"
                                time="১ মিনিট আগে"
                                href="/news/led/1"
                                contentMt={12}
                                timeMt={16}
                                iconPositionClass="left-7 bottom-7"
                                iconHeight={40}
                                iconWidth={40}
                            />
                        </div>

                        {/* Right column - small news items */}
                        <div className="w-full lg:max-w-[23.829%] order-3 lg:order-3">
                            <CategoryNewsHeadding 
                                highlightText= "মতামত"
                            />
                            <div className="flex flex-col divide-y divide-[#D4D4D4] mt-6">
                                <OpinionItem
                                    image={HeroSideberImage}
                                    imageWidth={88}
                                    imageHeight={66}
                                    title="জোটে অংশ নিলেও নিজ দলের প্রতীকে ভোট বাধ্যতামূলক"
                                    href="#"
                                    imageWrap="max-w-[88px]"
                                    iconPositionClass="left-2 bottom-2"
                                    iconHeight={18}
                                    iconWidth={18}
                                />
                                <OpinionItem
                                    image={HeroSideberImage}
                                    imageWidth={88}
                                    imageHeight={66}
                                    title="জোটে অংশ নিলেও নিজ দলের প্রতীকে ভোট বাধ্যতামূলক"
                                    href="#"
                                    imageWrap="max-w-[88px]"
                                    iconPositionClass="left-2 bottom-2"
                                    iconHeight={18}
                                    iconWidth={18}
                                />
                                <OpinionItem
                                    image={HeroSideberImage}
                                    imageWidth={88}
                                    imageHeight={66}
                                    title="জোটে অংশ নিলেও নিজ দলের প্রতীকে ভোট বাধ্যতামূলক"
                                    href="#"
                                    imageWrap="max-w-[88px]"
                                    iconPositionClass="left-2 bottom-2"
                                    iconHeight={18}
                                    iconWidth={18}
                                />
                                <OpinionItem
                                    image={HeroSideberImage}
                                    imageWidth={88}
                                    imageHeight={66}
                                    title="জোটে অংশ নিলেও নিজ দলের প্রতীকে ভোট বাধ্যতামূলক"
                                    href="#"
                                    imageWrap="max-w-[88px]"
                                    iconPositionClass="left-2 bottom-2"
                                    iconHeight={18}
                                    iconWidth={18}
                                />
                                <OpinionItem
                                    image={HeroSideberImage}
                                    imageWidth={88}
                                    imageHeight={66}
                                    title="জোটে অংশ নিলেও নিজ দলের প্রতীকে ভোট বাধ্যতামূলক"
                                    href="#"
                                    imageWrap="max-w-[88px]"
                                    iconPositionClass="left-2 bottom-2"
                                    iconHeight={18}
                                    iconWidth={18}
                                />
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-linear-to-b from-[#F0F5F4] to-[#FFFFFF] py-8 lg:py-16 border-b border-[#B6C3C8]">
                <div className="container">
                    <SectionHeader 
                        category="মতামত"
                    />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
                        <LedNews
                                image={ledImage}
                                imageWidth={305}
                                imageHeight={229}
                                title="ফিলিস্তিনি বন্দির ওপর ভয়াবহ নির্যাতনের ভিডিও ফাঁসের ঘটনায় গ্রেফতার হয়েছেন ইসরাইলি সেনাবাহিনীর সাবেক প্রধান আইন কর্মকর্তা"
                                time="১ মিনিট আগে"
                                href="/news/led/1"
                                timeMt={16}
                                headingLevel="h5"
                                gap="gap-3"
                            />
                        <LedNews
                                image={ledImage}
                                imageWidth={305}
                                imageHeight={229}
                                title="ফিলিস্তিনি বন্দির ওপর ভয়াবহ নির্যাতনের ভিডিও ফাঁসের ঘটনায় গ্রেফতার হয়েছেন ইসরাইলি সেনাবাহিনীর সাবেক প্রধান আইন কর্মকর্তা"
                                time="১ মিনিট আগে"
                                href="/news/led/1"
                                timeMt={16}
                                headingLevel="h5"
                                gap="gap-3"
                            />
                        <LedNews
                                image={ledImage}
                                imageWidth={305}
                                imageHeight={229}
                                title="ফিলিস্তিনি বন্দির ওপর ভয়াবহ নির্যাতনের ভিডিও ফাঁসের ঘটনায় গ্রেফতার হয়েছেন ইসরাইলি সেনাবাহিনীর সাবেক প্রধান আইন কর্মকর্তা"
                                time="১ মিনিট আগে"
                                href="/news/led/1"
                                timeMt={16}
                                headingLevel="h5"
                                gap="gap-3"
                            />
                        <LedNews
                                image={ledImage}
                                imageWidth={305}
                                imageHeight={229}
                                title="ফিলিস্তিনি বন্দির ওপর ভয়াবহ নির্যাতনের ভিডিও ফাঁসের ঘটনায় গ্রেফতার হয়েছেন ইসরাইলি সেনাবাহিনীর সাবেক প্রধান আইন কর্মকর্তা"
                                time="১ মিনিট আগে"
                                href="/news/led/1"
                                timeMt={16}
                                headingLevel="h5"
                                gap="gap-3"
                            />
                    </div>
                    
                </div>
            </section>
            <section className="py-7 lg:py-14">
                <div className="container">
                    <div className="space-y-8 divide-y divide-gray-dark max-w-220.5 mx-auto">

                        <div className="pb-4 md:pb-8">
                            <OpinionItem
                                image={HeroSideberImage}
                                imageWidth={340}
                                imageHeight={255}
                                title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                                href="/opiniondetails"
                                imageWrap="max-w-[340px]"
                                iconPositionClass="left-6 bottom-6"
                                iconHeight={40}
                                iconWidth={40}
                                headingTag="h4"
                                wrapperClass="flex gap-4 md:gap-8"
                                content="বলিউডের আইটেম গার্ল খ্যাত অভিনেত্রী মালাইকা অরোরা ব্যক্তিগত জীবন নিয়ে সবসময় আলোচনায় থাকেন। দীর্ঘদাম্পত্য আর সম্পর্ক ভেঙে যাওয়ার পর মালাইকা এবার নতুন প্রেমের গুঞ্জনে ছড়িয়ে পড়েছেন।"
                                time="১ মিনিট আগে"
                                timeMt={16}
                                titleMb={12}
                            />
                        </div>
                        <div className="pb-4 md:pb-8">
                           <OpinionItem
                                image={HeroSideberImage}
                                imageWidth={340}
                                imageHeight={255}
                                title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                                href="#"
                                imageWrap="max-w-[340px]"
                                iconPositionClass="left-6 bottom-6"
                                iconHeight={40}
                                iconWidth={40}
                                headingTag="h4"
                                wrapperClass="flex gap-4 md:gap-8"
                                content="বলিউডের আইটেম গার্ল খ্যাত অভিনেত্রী মালাইকা অরোরা ব্যক্তিগত জীবন নিয়ে সবসময় আলোচনায় থাকেন। দীর্ঘদাম্পত্য আর সম্পর্ক ভেঙে যাওয়ার পর মালাইকা এবার নতুন প্রেমের গুঞ্জনে ছড়িয়ে পড়েছেন।"
                                time="১ মিনিট আগে"
                                timeMt={16}
                                titleMb={12}
                            />
                        </div>
                        <div className="pb-4 md:pb-8">
                            <OpinionItem
                                image={HeroSideberImage}
                                imageWidth={340}
                                imageHeight={255}
                                title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                                href="#"
                                imageWrap="max-w-[340px]"
                                iconPositionClass="left-6 bottom-6"
                                iconHeight={40}
                                iconWidth={40}
                                headingTag="h4"
                                wrapperClass="flex gap-4 md:gap-8"
                                content="বলিউডের আইটেম গার্ল খ্যাত অভিনেত্রী মালাইকা অরোরা ব্যক্তিগত জীবন নিয়ে সবসময় আলোচনায় থাকেন। দীর্ঘদাম্পত্য আর সম্পর্ক ভেঙে যাওয়ার পর মালাইকা এবার নতুন প্রেমের গুঞ্জনে ছড়িয়ে পড়েছেন।"
                                time="১ মিনিট আগে"
                                timeMt={16}
                                titleMb={12}
                            />
                        </div>
                        <div className="pb-4 md:pb-8">
                            <DetailsAdd 
                                src={NewsFlashImage}
                            />
                        </div>
                        <div className="pb-4 md:pb-8">
                            <OpinionItem
                                image={HeroSideberImage}
                                imageWidth={340}
                                imageHeight={255}
                                title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                                href="#"
                                imageWrap="max-w-[340px]"
                                iconPositionClass="left-6 bottom-6"
                                iconHeight={40}
                                iconWidth={40}
                                headingTag="h4"
                                wrapperClass="flex gap-4 md:gap-8"
                                content="বলিউডের আইটেম গার্ল খ্যাত অভিনেত্রী মালাইকা অরোরা ব্যক্তিগত জীবন নিয়ে সবসময় আলোচনায় থাকেন। দীর্ঘদাম্পত্য আর সম্পর্ক ভেঙে যাওয়ার পর মালাইকা এবার নতুন প্রেমের গুঞ্জনে ছড়িয়ে পড়েছেন।"
                                time="১ মিনিট আগে"
                                timeMt={16}
                                titleMb={12}
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
        </>
    );
}