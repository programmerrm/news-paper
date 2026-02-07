import Image from "next/image";
import NewsItem from "@/components/news-items/newsItem";
import CategoryNewsHeadding from "@/components/category/CategoryNewsHeadding";
import HeroSideberImage from "../../assets/image/hero-sidebar.png";
import ShareIcons from "@/components/shareicon/ShareIcon";
import PlayBtn from "../../assets/icon/playbtn.svg";
import ReportNews from "../../components/details/RportNews";
import ReportTitle from "../../components/details/ReportTitle";
import TextNews from "../../components/details/TextNews";
import DetailsAdd from "@/components/detailsadd/DetailsAdd";
import AddImage from "../../assets/image/details-add.png";
import HasTagButton from "@/components/button/HasTagButton";
import CommentBox from "@/components/comment-box/CommentBox";
import LedNews from "@/components/led-news/LedNews";
import ledImage from "../../assets/image/led-image.png";
import ReportImage from "@/components/details/ReportImage";
import OpinionItem from "@/components/news-items/opinionItem";

export default function OpinionDetailsPage() {
    return (
        <section className="pt-7 sm:pt-10 pb-7 sm:pb-14">
            <div className="container">
                <div className="flex flex-col lg:flex-row">
                    <div className="flex flex-col sm:flex-row w-full lg:max-w-[76.171%]">
                        <div className="w-full sm:max-w-20 md:max-w-24 ">
                            <ShareIcons />
                        </div>
                        <div className="w-full sm:max-w-[calc(100%-80px)] md:max-w-[calc(100%-96px)] sm:px-8 xl:px-10 space-y-4 sm:space-y-8">
                            <div className="sm:px-8 border-b border-[#B6C3C8]">
                                <ReportTitle
                                    category="রাজনীতি"
                                    title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                                />

                                <div className="flex items-center justify-between gap-3 mt-2 py-3 flex-wrap">
                                    <ReportNews
                                        reporterName="রিপোটারের নাম"
                                        publishDate="৫ নম্বেবর ২০২৫, ১৪:১৬মিনিট"
                                    />

                                    <div className="flex items-center gap-2.5">
                                        <button type="submit" className="cursor-pointer">
                                            <Image width={23} height={23} src={PlayBtn} alt="PlayBtn" />
                                        </button>
                                        <span className="text-sm leading-6 font-medium text-[#171717]">
                                            খবরটি শুনুন
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="sm:px-7.5">
                                <ReportImage
                                    src={ledImage}
                                    alt="led image"
                                    caption="ছবির ক্যাপশন এখানে হবে"
                                />
                            </div>

                            <div className="sm:px-7.5 space-y-4 sm:space-y-8">
                                <TextNews
                                    text="আর্কাইভ খবর বলতে বোঝায় অতীতের সংগৃহীত সংবাদ, যা বিভিন্ন অনলাইন নিউজ পোর্টালের আর্কাইভ সেকশনে পাওয়া যায়, যেখানে তারিখ, বিভাগ বা ক্যাটাগরি অনুযায়ী পুরনো খবর খোঁজা যায়, যেমন জামানা টিভি, ইনকিলাব, বিডি নিউজ২৪, বা ঢাকা পোস্টের মতো সাইটগুলোতে। এই আর্কাইভগুলো পুরনো (সংবাদপত্র), ভিডিও এবং ফটো গ্যালারি সংরক্ষণ করে, যা নির্দিষ্ট ঘটনার ঐতিহাসিক প্রেক্ষাপট বুঝতে সাহায্য করে এবং সাধারণত 'আর্কাইভ' বা 'সংরক্ষণাগার' নামে মেনুতে থাকে। "
                                />

                            
                                <TextNews
                                    text="আর্কাইভ খবর বলতে বোঝায় অতীতের সংগৃহীত সংবাদ, যা বিভিন্ন অনলাইন নিউজ পোর্টালের আর্কাইভ সেকশনে পাওয়া যায়, যেখানে তারিখ, বিভাগ বা ক্যাটাগরি অনুযায়ী পুরনো খবর খোঁজা যায়, যেমন জামানা টিভি, ইনকিলাব, বিডি নিউজ২৪, বা ঢাকা পোস্টের মতো সাইটগুলোতে। এই আর্কাইভগুলো পুরনো (সংবাদপত্র), ভিডিও এবং ফটো গ্যালারি সংরক্ষণ করে, যা নির্দিষ্ট ঘটনার ঐতিহাসিক প্রেক্ষাপট বুঝতে সাহায্য করে এবং সাধারণত 'আর্কাইভ' বা 'সংরক্ষণাগার' নামে মেনুতে থাকে। "
                                />
                                <TextNews
                                    text="আর্কাইভ খবর বলতে বোঝায় অতীতের সংগৃহীত সংবাদ, যা বিভিন্ন অনলাইন নিউজ পোর্টালের আর্কাইভ সেকশনে পাওয়া যায়, যেখানে তারিখ, বিভাগ বা ক্যাটাগরি অনুযায়ী পুরনো খবর খোঁজা যায়, যেমন জামানা টিভি, ইনকিলাব, বিডি নিউজ২৪, বা ঢাকা পোস্টের মতো সাইটগুলোতে। এই আর্কাইভগুলো পুরনো (সংবাদপত্র), ভিডিও এবং ফটো গ্যালারি সংরক্ষণ করে, যা নির্দিষ্ট ঘটনার ঐতিহাসিক প্রেক্ষাপট বুঝতে সাহায্য করে এবং সাধারণত 'আর্কাইভ' বা 'সংরক্ষণাগার' নামে মেনুতে থাকে। "
                                />

                                <DetailsAdd
                                    src={AddImage}
                                    alt="Advertisement Banner"
                                    width={740}
                                    height={137}
                                />

                                <TextNews
                                    text="আর্কাইভ খবর বলতে বোঝায় অতীতের সংগৃহীত সংবাদ, যা বিভিন্ন অনলাইন নিউজ পোর্টালের আর্কাইভ সেকশনে পাওয়া যায়, যেখানে তারিখ, বিভাগ বা ক্যাটাগরি অনুযায়ী পুরনো খবর খোঁজা যায়, যেমন জামানা টিভি, ইনকিলাব, বিডি নিউজ২৪, বা ঢাকা পোস্টের মতো সাইটগুলোতে। এই আর্কাইভগুলো পুরনো (সংবাদপত্র), ভিডিও এবং ফটো গ্যালারি সংরক্ষণ করে, যা নির্দিষ্ট ঘটনার ঐতিহাসিক প্রেক্ষাপট বুঝতে সাহায্য করে এবং সাধারণত 'আর্কাইভ' বা 'সংরক্ষণাগার' নামে মেনুতে থাকে।"
                                />
                            </div>
                            <div className="bg-[#FBF7EF] p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                <h5>আরো পড়ুন:</h5>
                                <div className="flex items-center gap-2 flex-wrap">
                                    <HasTagButton
                                        href="#"
                                        label="ওয়েদার"
                                    />
                                    <HasTagButton
                                        href="#"
                                        label="ইলেকশন"
                                    />
                                    <HasTagButton
                                        href="#"
                                        label="পলিটিক্স"
                                    />
                                    <HasTagButton
                                        href="#"
                                        label="বিএনপি"
                                    />
                                    <HasTagButton
                                        href="#"
                                        label="পার্লামেন্ট"
                                    />
                                </div>
                            </div>
                            <div>
                                <CommentBox />
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:max-w-[23.828%] mt-4 lg:mt-0">
                        <CategoryNewsHeadding highlightText="মতামত" />
                        <div className="flex flex-col divide-y divide-[#D4D4D4] mt-6">
                            <OpinionItem
                                image={HeroSideberImage}
                                title="খালেদা জিয়া ৩ আসনে, তারেক রহমান বগুড়া-৬ এ বিএনপির প্রার্থী"
                                imageWidth={88}
                                imageHeight={66}
                                imageWrap="max-w-[88px]"
                                titleFontWeight={500}
                                iconWidth={18} 
                                iconHeight={18}
                                iconPositionClass="left-2 bottom-2"
                                                               
                            />
                            <OpinionItem
                                image={HeroSideberImage}
                                title="খালেদা জিয়া ৩ আসনে, তারেক রহমান বগুড়া-৬ এ বিএনপির প্রার্থী"
                                imageWidth={88}
                                imageHeight={66}
                                imageWrap="max-w-[88px]"
                                titleFontWeight={500}
                                iconWidth={18} 
                                iconHeight={18}
                                iconPositionClass="left-2 bottom-2"
                                                               
                            />
                            <OpinionItem
                                image={HeroSideberImage}
                                title="খালেদা জিয়া ৩ আসনে, তারেক রহমান বগুড়া-৬ এ বিএনপির প্রার্থী"
                                imageWidth={88}
                                imageHeight={66}
                                imageWrap="max-w-[88px]"
                                titleFontWeight={500}
                                iconWidth={18} 
                                iconHeight={18}
                                iconPositionClass="left-2 bottom-2"
                                                               
                            />
                            <OpinionItem
                                image={HeroSideberImage}
                                title="খালেদা জিয়া ৩ আসনে, তারেক রহমান বগুড়া-৬ এ বিএনপির প্রার্থী"
                                imageWidth={88}
                                imageHeight={66}
                                imageWrap="max-w-[88px]"
                                titleFontWeight={500}
                                iconWidth={18} 
                                iconHeight={18}
                                iconPositionClass="left-2 bottom-2"
                                                               
                            />
                            <OpinionItem
                                image={HeroSideberImage}
                                title="খালেদা জিয়া ৩ আসনে, তারেক রহমান বগুড়া-৬ এ বিএনপির প্রার্থী"
                                imageWidth={88}
                                imageHeight={66}
                                imageWrap="max-w-[88px]"
                                titleFontWeight={500}
                                iconWidth={18} 
                                iconHeight={18}
                                iconPositionClass="left-2 bottom-2"
                                                               
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-7 sm:mt-14">
                    <h3>রিলেটেড নিউজ</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
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
            </div>
        </section>
    );
}
