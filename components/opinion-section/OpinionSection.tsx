import SectionTitle from "../section-title/SectionTitle";
import internationalNewsImage from "../../assets/image/trump-1.png"
import Image from "next/image";
import Link from "next/link";
import OpinionNewsItem from "./OpinionNews";

export default function OpinionSection () {
    return (
        <section className="py-8 lg:py-16 bg-[#FBF7EF]">
            <div className="container">
                <SectionTitle
                    title="মতামত"
                    href="/opinion"
                />
                <div className="flex flex-col lg:flex-row mt-8">
                    <div className="w-full lg:max-w-[31.562%] bg-white flex items-center border-b-2 border-red mb-5 lg:mb-0">
                        <div className="p-8">
                            <div className="max-w-35 h-full min-h-35 rounded-full overflow-hidden mb-8">
                                <Image 
                                    src={internationalNewsImage}
                                    alt="traump image"
                                    width={140}
                                    height={140}
                                    className=" object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                            <h4 className="mb-3 transition-all hover:text-[#1877f2]">
                                <Link href="#">
                                    ভারত-পাকিস্তান যুদ্ধ দামামা: উগ্র জাতীয়তাবাদ, নাকি কৌশলগত বাণিজ্য?
                                </Link>
                            </h4>
                            <p className="text-xs sm:text-sm leading-5.5 text-[#525252]">
                                <Link href="#">
                                    দুনিয়ার রাজনীতি এখন উত্তপ্ত হয়ে উঠেছে। সেই মিছিলের অংশীদার ভারত-পাকিস্তানও। প্রতিবেশি দেশ দুটির মধ্যে উত্তেজনা আবারও চরমে। আতঙ্কের নাম অপারেশন
                                </Link>
                            </p>
                            <span className="text-xs sm:text-sm leading-5.5 text-[#525252] mt-8 inline-block">লেখক: সোহেল</span>
                        </div>
                    </div>
                    <div className="w-full lg:max-w-[68.438%] lg:pl-7 flex flex-col sm:flex-row items-center divide-y sm:divide-y-0 sm:divide-x divide-red">
                        <div className="sm:pr-5 py-5 sm:py-10">
                            <div className="space-y-5">
                                <OpinionNewsItem
                                    image={internationalNewsImage}
                                    imageWidth= {96}
                                    imageHeight= {96}
                                    title="ভারত-পাকিস্তান যুদ্ধ দামামা: উগ্র জাতীয়তাবাদ, নাকি কৌশলগত বাণিজ্য?"
                                    author="সোহেল"
                                    />
                                <OpinionNewsItem
                                    image={internationalNewsImage}
                                    imageWidth= {96}
                                    imageHeight= {96}
                                    title="ভারত-পাকিস্তান যুদ্ধ দামামা: উগ্র জাতীয়তাবাদ, নাকি কৌশলগত বাণিজ্য?"
                                    author="সোহেল"
                                    />
                                <OpinionNewsItem
                                    image={internationalNewsImage}
                                    imageWidth= {96}
                                    imageHeight= {96}
                                    title="ভারত-পাকিস্তান যুদ্ধ দামামা: উগ্র জাতীয়তাবাদ, নাকি কৌশলগত বাণিজ্য?"
                                    author="সোহেল"
                                    />
                            </div>
                        </div>
                        <div className="sm:pl-5 py-5 sm:py-10">
                            <div className="space-y-5">
                                <OpinionNewsItem
                                    image={internationalNewsImage}
                                    imageWidth= {96}
                                    imageHeight= {96}
                                    title="ভারত-পাকিস্তান যুদ্ধ দামামা: উগ্র জাতীয়তাবাদ, নাকি কৌশলগত বাণিজ্য?"
                                    author="সোহেল"
                                    />
                                <OpinionNewsItem
                                    image={internationalNewsImage}
                                    imageWidth= {96}
                                    imageHeight= {96}
                                    title="ভারত-পাকিস্তান যুদ্ধ দামামা: উগ্র জাতীয়তাবাদ, নাকি কৌশলগত বাণিজ্য?"
                                    author="সোহেল"
                                    />
                                <OpinionNewsItem
                                    image={internationalNewsImage}
                                    imageWidth= {96}
                                    imageHeight= {96}
                                    title="ভারত-পাকিস্তান যুদ্ধ দামামা: উগ্র জাতীয়তাবাদ, নাকি কৌশলগত বাণিজ্য?"
                                    author="সোহেল"
                                    />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}