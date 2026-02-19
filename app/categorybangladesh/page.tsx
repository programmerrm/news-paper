import NewsItem from "@/components/news-items/newsItem";
import LedNews from "@/components/led-news/LedNews";
import ledImage from "../../assets/image/led-image.png";
import Add from "@/components/add/Add";
import RiverImage from "../../assets/image/river-image.png"
import SingleNewsItem from "@/components/news-items/SingleNewsItem";
import Image from "next/image";
import NewsFlashImage from "../../assets/image/news-flash.png"
import Button from "@/components/button/Button";
import NewsBreadcrumb from "@/components/breadcrumb/NewsBreadcrumb";
import SubCategory from "@/components/subcategory/SubCategory";
import CategoryNewsHeadding from "@/components/category/CategoryNewsHeadding";
import SectionHeader from "@/components/category/SectionHeader";
import CustomSelect from "@/components/selects/CustomSelect";
import { subdistricts } from "@/data/subdistricts";
import { districts } from "@/data/districts";
import { divisions } from "@/data/division";

export default function CategoryBangladeshspage() {
    return (
        <>
            <section className="py-5 sm:py-10">
                <div className="container">
                    <div>

                        <NewsBreadcrumb
                            title="বাংলাদেশ"
                        />
                        <SubCategory />
                    </div>

                    <div className="flex flex-col lg:flex-row mt-8 gap-5">
                        {/* Left column - small news items */}
                        <div className="w-full lg:max-w-[30.469%] flex flex-col divide-y divide-[#D4D4D4] order-2 lg:order-1">
                            <NewsItem
                                imageWidth={140}
                                imageHeight={104}
                                title="ইতিহাস গড়ল ভারত! দক্ষিণ আফ্রিকাকে হারিয়ে নারী বিশ্বকাপ জয়"
                                time="১ মিনিট আগে"
                                href="/singledetails"
                                timeMt={"16"}
                                imageWrap="max-w-[104px]"
                            />
                        </div>

                        {/* Center column - LED news */}
                        <div className="w-full lg:max-w-[42.421%] lg:px-4.75 lg:border-r lg:border-l border-[#A1A1A1] order-1 lg:order-2">
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

                        {/* Right column - small news items */}
                        <div className="w-full lg:max-w-[23.829%] order-3 lg:order-3">
                            <CategoryNewsHeadding
                                highlightText="বাংলাদেশ"
                            />
                            <div className="flex flex-col divide-y divide-[#D4D4D4] mt-6">
                                <NewsItem
                                    title="খালেদা জিয়া ৩ আসনে, তারেক রহমান বগুড়া-৬ এ বিএনপির প্রার্থী"
                                    imageWidth={88}
                                    imageHeight={66}
                                    imageWrap="max-w-[88px]"
                                    titleFontWeight={"500"}
                                    href="/singledetails"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#E0EBF0]">
                <div className="container">
                    <div className=" p-4 lg:p-8 mt-8 ">
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
                </div>
            </section>
            <section className="bg-linear-to-b from-[#F0F5F4] to-[#FFFFFF] py-8 lg:py-16 border-b border-[#B6C3C8]">
                <div className="container">
                    <SectionHeader
                        category="বাংলাদেশ"
                    />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
                        <LedNews
                            image={ledImage}
                            imageWidth={305}
                            imageHeight={229}
                            title="ফিলিস্তিনি বন্দির ওপর ভয়াবহ নির্যাতনের ভিডিও ফাঁসের ঘটনায় গ্রেফতার হয়েছেন ইসরাইলি সেনাবাহিনীর সাবেক প্রধান আইন কর্মকর্তা"
                            time="১ মিনিট আগে"
                            href="/singledetails"
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
                            href="/singledetails"
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
                            href="/singledetails"
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
                            href="/singledetails"
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
                            <SingleNewsItem
                                image={RiverImage}
                                imageWidth={340}
                                imageHeight={304}
                                title={"চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"}
                                time={"১ সেকেন্ড আগে"}
                                href="/singledetails"
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
                                href="/singledetails"
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
                                href="/singledetails"
                                timeMt={16}
                                SingleimageWrap="max-w-[200px]"
                                content="বলিউডের আইটেম গার্ল খ্যাত অভিনেত্রী মালাইকা অরোরা ব্যক্তিগত জীবন নিয়ে সবসময় আলোচনায় থাকেন। দীর্ঘদাম্পত্য আর সম্পর্ক ভেঙে যাওয়ার পর মালাইকা এবার নতুন প্রেমের গুঞ্জনে ছড়িয়ে পড়েছেন।"
                                titleMb={12}
                                showPlayButton={true}
                            />
                        </div>
                        <div className="pb-4 md:pb-8">
                            <Image
                                src={NewsFlashImage}
                                alt="NewsFlashImage"
                            />
                        </div>
                        <div className="pb-4 md:pb-8">
                            <SingleNewsItem
                                image={RiverImage}
                                imageWidth={340}
                                imageHeight={304}
                                title={"চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"}
                                time={"১ সেকেন্ড আগে"}
                                href="/singledetails"
                                timeMt={16}
                                SingleimageWrap="max-w-[200px]"
                                content="বলিউডের আইটেম গার্ল খ্যাত অভিনেত্রী মালাইকা অরোরা ব্যক্তিগত জীবন নিয়ে সবসময় আলোচনায় থাকেন। দীর্ঘদাম্পত্য আর সম্পর্ক ভেঙে যাওয়ার পর মালাইকা এবার নতুন প্রেমের গুঞ্জনে ছড়িয়ে পড়েছেন।"
                                titleMb={12}
                                showPlayButton={true}
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