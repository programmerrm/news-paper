
import NewsItem from "@/components/news-items/newsItem";
import CategoryNewsHeadding from "@/components/category/CategoryNewsHeadding";
import HeroSideberImage from "../../assets/image/hero-sidebar.png";
import ShareIcons from "@/components/shareicon/ShareIcon";
import ReportNews from "../../components/details/RportNews";
import ReportTitle from "../../components/details/ReportTitle";
import ledImage from "../../assets/image/led-image.png";
import MousqueImage from "../../assets/image/mosque.png"
import HasTagButton from "@/components/button/HasTagButton";
import CommentBox from "@/components/comment-box/CommentBox";
import ReportImage from "@/components/details/ReportImage";
import ImageCategoryItem from "@/components/gallary-section/imageCategoryItem";

export default function ShortDetailsPage() {
    return (
        <section className="pt-7 sm:pt-10 pb-7 sm:pb-14">
            <div className="container">
                <div className="flex flex-col lg:flex-row">
                    <div className="flex flex-col sm:flex-row w-full lg:max-w-[76.171%]">
                        <div className="w-full sm:max-w-20 md:max-w-24 ">
                            <ShareIcons 
                                showZoomButtons= {false}
                            />
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
                                <ReportImage
                                    src={ledImage}
                                    alt="led image"
                                    caption="ছবির ক্যাপশন এখানে হবে"
                                />
                            </div>
                            <div className="sm:px-7.5">
                                <ReportImage
                                    src={ledImage}
                                    alt="led image"
                                    caption="ছবির ক্যাপশন এখানে হবে"
                                />
                            </div>
                            <div className="sm:px-7.5">
                                <ReportImage
                                    src={ledImage}
                                    alt="led image"
                                    caption="ছবির ক্যাপশন এখানে হবে"
                                />
                            </div>
                            <div className="sm:px-7.5">
                                <ReportImage
                                    src={ledImage}
                                    alt="led image"
                                    caption="ছবির ক্যাপশন এখানে হবে"
                                />
                            </div>
                            <div className="sm:px-7.5">
                                <ReportImage
                                    src={ledImage}
                                    alt="led image"
                                    caption="ছবির ক্যাপশন এখানে হবে"
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
                        <CategoryNewsHeadding highlightText="রাজনীতি" />
                        <div className="space-y-4 divide-y divide-[#D4D4D4] mt-6">
                            <ImageCategoryItem 
                                href="/imagedetails"
                                image={MousqueImage}
                                title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                                imageWidth={120}
                                imageHeight={90}
                                iconHeight={16}
                                iconWidth={16}
                                iconPositionClass="bottom-2 left-2"
                                headingTag="h5"
                                wrapperClass="flex items-start gap-3 md:gap-4 pb-4.5"
                                imageWrapperClass="w-full max-w-35"
                            />
                            <ImageCategoryItem 
                                href="/imagedetails"
                                image={MousqueImage}
                                title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                                imageWidth={120}
                                imageHeight={90}
                                iconHeight={16}
                                iconWidth={16}
                                iconPositionClass="bottom-2 left-2"
                                headingTag="h5"
                                wrapperClass="flex items-start gap-3 md:gap-4 pb-4.5"
                                imageWrapperClass="w-full max-w-35"
                            />
                            <ImageCategoryItem 
                                href="/imagedetails"
                                image={MousqueImage}
                                title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                                imageWidth={120}
                                imageHeight={90}
                                iconHeight={16}
                                iconWidth={16}
                                iconPositionClass="bottom-2 left-2"
                                headingTag="h5"
                                wrapperClass="flex items-start gap-3 md:gap-4 pb-4.5"
                                imageWrapperClass="w-full max-w-35"
                            />
                            <ImageCategoryItem 
                                href="/imagedetails"
                                image={MousqueImage}
                                title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                                imageWidth={120}
                                imageHeight={90}
                                iconHeight={16}
                                iconWidth={16}
                                iconPositionClass="bottom-2 left-2"
                                headingTag="h5"
                                wrapperClass="flex items-start gap-3 md:gap-4 pb-4.5"
                                imageWrapperClass="w-full max-w-35"
                            />
                            <ImageCategoryItem 
                                href="/imagedetails"
                                image={MousqueImage}
                                title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                                imageWidth={120}
                                imageHeight={90}
                                iconHeight={16}
                                iconWidth={16}
                                iconPositionClass="bottom-2 left-2"
                                headingTag="h5"
                                wrapperClass="flex items-start gap-3 md:gap-4 pb-4.5"
                                imageWrapperClass="w-full max-w-35"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
