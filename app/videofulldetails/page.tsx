
import CategoryNewsHeadding from "@/components/category/CategoryNewsHeadding";
import ShareIcons from "@/components/shareicon/ShareIcon";
import ReportNews from "../../components/details/RportNews";
import ReportTitle from "../../components/details/ReportTitle";
import ledImage from "../../assets/image/led-image.png";
import TextNews from "../../components/details/TextNews";
import HasTagButton from "@/components/button/HasTagButton";
import CommentBox from "@/components/comment-box/CommentBox";
import FullDetailsItem from "./fullDetailsItem";
import ReportVideo from "@/components/details/ReportVideo";

const videoList = [
    {
        title: "দুইশো ডেক তোবারক বিতরণ করা হবে রাজৈর বেপারীপাড়ার মাহফিলে",
        time: "১ মিনিট আগে",
    },
    {
        title: "দুইশো ডেক তোবারক বিতরণ করা হবে রাজৈর বেপারীপাড়ার মাহফিলে",
        time: "১ মিনিট আগে",
    },
    {
        title: "দুইশো ডেক তোবারক বিতরণ করা হবে রাজৈর বেপারীপাড়ার মাহফিলে",
        time: "১ মিনিট আগে",
    },
    {
        title: "দুইশো ডেক তোবারক বিতরণ করা হবে রাজৈর বেপারীপাড়ার মাহফিলে",
        time: "১ মিনিট আগে",
    },
];

export default function VideoFullDetailsPage() {
    return (
        <section className="pt-10 pb-14">
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
                                </div>
                            </div>
                            <div className="sm:px-7.5">
                                <ReportVideo
                                    src={ledImage}
                                    alt="led image"
                                    caption="ছবির ক্যাপশন এখানে হবে"
                                />
                            </div>

                            <div className="sm:px-7.5 space-y-4 sm:space-y-8">
                                <TextNews
                                    text="আর্কাইভ খবর বলতে বোঝায় অতীতের সংগৃহীত সংবাদ, যা বিভিন্ন অনলাইন নিউজ পোর্টালের আর্কাইভ সেকশনে পাওয়া যায়, যেখানে তারিখ, বিভাগ বা ক্যাটাগরি অনুযায়ী পুরনো খবর খোঁজা যায়, যেমন জামানা টিভি, ইনকিলাব, বিডি নিউজ২৪, বা ঢাকা পোস্টের মতো সাইটগুলোতে। এই আর্কাইভগুলো পুরনো (সংবাদপত্র), ভিডিও এবং ফটো গ্যালারি সংরক্ষণ করে, যা নির্দিষ্ট ঘটনার ঐতিহাসিক প্রেক্ষাপট বুঝতে সাহায্য করে এবং সাধারণত 'আর্কাইভ' বা 'সংরক্ষণাগার' নামে মেনুতে থাকে। "
                                />

                            </div>
                            <div className="bg-[#FBF7EF] p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                <h5>আরো পড়ুন:</h5>
                                <div className="flex items-center gap-2 flex-wrap">
                                    <HasTagButton
                                        href="/videotag"
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
                        <CategoryNewsHeadding highlightText="রাজনীতি" />
                        <div className="w-full flex flex-col space-y-4.5 divide-y divide-[#D4D4D4] mt-6">

                            <div>
                                <FullDetailsItem
                                    title="দুইশো ডেক তোবারক বিতরণ করা হবে রাজৈর বেপারীপাড়ার মাহফিলে"
                                    href="/video/1"
                                />
                            </div>
                            <div>
                                <FullDetailsItem
                                    title="দুইশো ডেক তোবারক বিতরণ করা হবে রাজৈর বেপারীপাড়ার মাহফিলে"
                                    href="/video/1"
                                />
                            </div>
                            <div>
                                <FullDetailsItem
                                    title="দুইশো ডেক তোবারক বিতরণ করা হবে রাজৈর বেপারীপাড়ার মাহফিলে"
                                    href="/video/1"
                                />
                            </div>
                            <div>
                                <FullDetailsItem
                                    title="দুইশো ডেক তোবারক বিতরণ করা হবে রাজৈর বেপারীপাড়ার মাহফিলে"
                                    href="/video/1"
                                />
                            </div>
                            <div>
                                <FullDetailsItem
                                    title="দুইশো ডেক তোবারক বিতরণ করা হবে রাজৈর বেপারীপাড়ার মাহফিলে"
                                    href="/video/1"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
