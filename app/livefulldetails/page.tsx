import NewsItem from "@/components/news-items/newsItem";
import CategoryNewsHeadding from "@/components/category/CategoryNewsHeadding";
import HeroSideberImage from "../../assets/image/hero-sidebar.png";
import ShareIcons from "@/components/shareicon/ShareIcon";
import TextNews from "../../components/details/TextNews";
import HasTagButton from "@/components/button/HasTagButton";
import CommentBox from "@/components/comment-box/CommentBox";
import LiveText from "./livetext";
import DetailsAdd from "@/components/detailsadd/DetailsAdd";
import AddImage from "../../assets/image/details-add.png";
import AddImageMain from "../../assets/image/banner-image.jpg";
import Image from "next/image";

export default function FullDetailsPage() {
    return (
        <section className="pt-10 pb-14">
            <div className="container">
                <div className="flex flex-col lg:flex-row">
                    <div className="flex flex-col sm:flex-row w-full lg:max-w-[76.171%]">
                        <div className="w-full sm:max-w-20 md:max-w-24 ">
                            <ShareIcons />
                        </div>
                        <div className="w-full sm:max-w-[calc(100%-80px)] md:max-w-[calc(100%-96px)] sm:px-8 xl:px-10 space-y-4 sm:space-y-8">
                            <div className="sm:px-8 pb-10 border-b border-[#D4D4D4] space-y-3">
                                <div className="space-y-3">
                                    <span className="inline-flex items-center gap-3">
                                        <span className="relative inline-flex items-center justify-center">
                                        <span className="absolute inline-flex h-3.5 w-3.5 rounded-full bg-red-500 opacity-30 animate-ping"></span>
                                        <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-red-500"></span>
                                        </span>
                                        <span className="text-sm sm:text-xl leading-7 font-semibold text-[#F50A0A] ">
                                        লাইভ:
                                        </span>
                                    </span>
                                    <h1>চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান</h1>
                                </div>
                                <TextNews
                                    text="আর্কাইভ খবর বলতে বোঝায় অতীতের সংগৃহীত সংবাদ, যা বিভিন্ন অনলাইন নিউজ পোর্টালের আর্কাইভ সেকশনে পাওয়া যায়, যেখানে তারিখ, বিভাগ বা ক্যাটাগরি অনুযায়ী পুরনো খবর খোঁজা যায়, যেমন জামানা টিভি, ইনকিলাব, বিডি নিউজ২৪, বা ঢাকা পোস্টের মতো সাইটগুলোতে। এই আর্কাইভগুলো পুরনো (সংবাদপত্র), ভিডিও এবং ফটো গ্যালারি সংরক্ষণ করে, যা নির্দিষ্ট ঘটনার ঐতিহাসিক প্রেক্ষাপট বুঝতে সাহায্য করে এবং সাধারণত 'আর্কাইভ' বা 'সংরক্ষণাগার' নামে মেনুতে থাকে।"
                                />
                            </div>


                            <div className="sm:px-7.5 space-y-4 md:space-y-6 relative after:absolute after:top-0 after:left-3 sm:after:left-7.5 after:bottom-0 after:w-px after:bg-[#FDE3E4]">
                                <LiveText
                                    title="আর্কাইভ খবর বলতে বোঝায় অতীতের সংগৃহীত সংবাদ বিভিন্ন অনলাইন নিউজ"
                                    text="আর্কাইভ খবর বলতে বোঝায় অতীতের সংগৃহীত সংবাদ, যা বিভিন্ন অনলাইন নিউজ পোর্টালের আর্কাইভ সেকশনে পাওয়া যায়, যেখানে তারিখ, বিভাগ বা ক্যাটাগরি অনুযায়ী পুরনো খবর খোঁজা যায়, যেমন জামানা টিভি, ইনকিলাব, বিডি নিউজ২৪, বা ঢাকা পোস্টের মতো সাইটগুলোতে। এই আর্কাইভগুলো পুরনো (সংবাদপত্র), ভিডিও এবং ফটো গ্যালারি সংরক্ষণ করে, যা নির্দিষ্ট ঘটনার ঐতিহাসিক প্রেক্ষাপট বুঝতে সাহায্য করে এবং সাধারণত 'আর্কাইভ' বা 'সংরক্ষণাগার' নামে মেনুতে থাকে।"
                                    time="১২:১৯"
                                    date="১২ অক্টোবর ২০২৫"
                                    isLiveShow
                                    dotSize={18}
                                />
                                <LiveText
                                    title="আর্কাইভ খবর বলতে বোঝায় অতীতের সংগৃহীত সংবাদ বিভিন্ন অনলাইন নিউজ"
                                    text="আর্কাইভ খবর বলতে বোঝায় অতীতের সংগৃহীত সংবাদ, যা বিভিন্ন অনলাইন নিউজ পোর্টালের আর্কাইভ সেকশনে পাওয়া যায়, যেখানে তারিখ, বিভাগ বা ক্যাটাগরি অনুযায়ী পুরনো খবর খোঁজা যায়, যেমন জামানা টিভি, ইনকিলাব, বিডি নিউজ২৪, বা ঢাকা পোস্টের মতো সাইটগুলোতে। এই আর্কাইভগুলো পুরনো (সংবাদপত্র), ভিডিও এবং ফটো গ্যালারি সংরক্ষণ করে, যা নির্দিষ্ট ঘটনার ঐতিহাসিক প্রেক্ষাপট বুঝতে সাহায্য করে এবং সাধারণত 'আর্কাইভ' বা 'সংরক্ষণাগার' নামে মেনুতে থাকে।"
                                    time="১২:১৯"
                                    date="১২ অক্টোবর ২০২৫"
                                    
                                />
                                <LiveText
                                    title="আর্কাইভ খবর বলতে বোঝায় অতীতের সংগৃহীত সংবাদ বিভিন্ন অনলাইন নিউজ"
                                    text="আর্কাইভ খবর বলতে বোঝায় অতীতের সংগৃহীত সংবাদ, যা বিভিন্ন অনলাইন নিউজ পোর্টালের আর্কাইভ সেকশনে পাওয়া যায়, যেখানে তারিখ, বিভাগ বা ক্যাটাগরি অনুযায়ী পুরনো খবর খোঁজা যায়, যেমন জামানা টিভি, ইনকিলাব, বিডি নিউজ২৪, বা ঢাকা পোস্টের মতো সাইটগুলোতে। এই আর্কাইভগুলো পুরনো (সংবাদপত্র), ভিডিও এবং ফটো গ্যালারি সংরক্ষণ করে, যা নির্দিষ্ট ঘটনার ঐতিহাসিক প্রেক্ষাপট বুঝতে সাহায্য করে এবং সাধারণত 'আর্কাইভ' বা 'সংরক্ষণাগার' নামে মেনুতে থাকে।"
                                    time="১২:১৯"
                                    date="১২ অক্টোবর ২০২৫"
                                    
                                />
                                <div className="ml-10 pb-3 md:pb-6 border-b border-[#D4D4D4] relative">
                                    <h5 className="text-sm sm:text-[17px] sm:leading-6 font-semibold mb-2">আর্কাইভ খবর বলতে বোঝায় অতীতের সংগৃহীত সংবাদ বিভিন্ন অনলাইন নিউজ</h5>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-[#525252]">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 ">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
                                        </span>
                                        <p className="text-sm leading-5.5 text-[#525252]">সময় - <span>১২:১৯, ১২ অক্টোবর ২০২৫</span> </p>
                                    </div>
                                    <Image 
                                        src={AddImageMain}
                                        alt="AddImageMain"
                                        width={684}
                                        height={513}
                                    />
                                    <span className="absolute top-0 -left-9 sm:-left-12 z-20 inline-flex items-center gap-3">
                                        <span className="relative inline-flex items-center justify-center">
                                            <span className="relative inline-flex h-4 w-4 rounded-full bg-red-500" />
                                        </span>
                                    </span>
                                </div>
                                <div className="ml-10 pb-3 md:pb-6 border-b border-[#D4D4D4]">
                                    <DetailsAdd 
                                        src={AddImage}
                                        alt="AddImage"
                                        width={684}
                                        height={137}
                                    />
                                </div>
                                <LiveText
                                    title="আর্কাইভ খবর বলতে বোঝায় অতীতের সংগৃহীত সংবাদ বিভিন্ন অনলাইন নিউজ"
                                    text="আর্কাইভ খবর বলতে বোঝায় অতীতের সংগৃহীত সংবাদ, যা বিভিন্ন অনলাইন নিউজ পোর্টালের আর্কাইভ সেকশনে পাওয়া যায়, যেখানে তারিখ, বিভাগ বা ক্যাটাগরি অনুযায়ী পুরনো খবর খোঁজা যায়, যেমন জামানা টিভি, ইনকিলাব, বিডি নিউজ২৪, বা ঢাকা পোস্টের মতো সাইটগুলোতে। এই আর্কাইভগুলো পুরনো (সংবাদপত্র), ভিডিও এবং ফটো গ্যালারি সংরক্ষণ করে, যা নির্দিষ্ট ঘটনার ঐতিহাসিক প্রেক্ষাপট বুঝতে সাহায্য করে এবং সাধারণত 'আর্কাইভ' বা 'সংরক্ষণাগার' নামে মেনুতে থাকে।"
                                    time="১২:১৯"
                                    date="১২ অক্টোবর ২০২৫"
                                    
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
                        <div className="hidden">
                            <CategoryNewsHeadding highlightText="রাজনীতি" />
                            <div className=" flex flex-col divide-y divide-[#D4D4D4] mt-6">
                                <NewsItem
                                    image={HeroSideberImage}
                                    title="খালেদা জিয়া ৩ আসনে, তারেক রহমান বগুড়া-৬ এ বিএনপির প্রার্থী"
                                    imageWidth={88}
                                    imageHeight={66}
                                    imageWrap="max-w-[88px]"
                                    titleFontWeight={500}
                                />
                                <NewsItem
                                    image={HeroSideberImage}
                                    title="খালেদা জিয়া ৩ আসনে, তারেক রহমান বগুড়া-৬ এ বিএনপির প্রার্থী"
                                    imageWidth={88}
                                    imageHeight={66}
                                    imageWrap="max-w-[88px]"
                                    titleFontWeight={500}
                                />
                                <NewsItem
                                    image={HeroSideberImage}
                                    title="খালেদা জিয়া ৩ আসনে, তারেক রহমান বগুড়া-৬ এ বিএনপির প্রার্থী"
                                    imageWidth={88}
                                    imageHeight={66}
                                    imageWrap="max-w-[88px]"
                                    titleFontWeight={500}
                                />
                                <NewsItem
                                    image={HeroSideberImage}
                                    title="খালেদা জিয়া ৩ আসনে, তারেক রহমান বগুড়া-৬ এ বিএনপির প্রার্থী"
                                    imageWidth={88}
                                    imageHeight={66}
                                    imageWrap="max-w-[88px]"
                                    titleFontWeight={500}
                                />
                                <NewsItem
                                    image={HeroSideberImage}
                                    title="খালেদা জিয়া ৩ আসনে, তারেক রহমান বগুড়া-৬ এ বিএনপির প্রার্থী"
                                    imageWidth={88}
                                    imageHeight={66}
                                    imageWrap="max-w-[88px]"
                                    titleFontWeight={500}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
