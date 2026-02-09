import NewsItem from "../news-items/newsItem";
import RiverImage from "../../assets/image/river-image.png"
import SectionHeader from "./SectionHeader";


export default function SocialDiscourseSection() {
    return (
        <section className="bg-[#F0F5F4] py-8 lg:py-16">
            <div className="container">
                <div className="hidden lg:flex items-center justify-between">
                    <SectionHeader
                        className="max-w-[30.469%]"
                        title="সামাজিক কথন"
                     />
                    <SectionHeader
                        className="max-w-[30.469%]"
                        title="তথ্য প্রযুক্তি"
                     />
                    <SectionHeader
                        className="max-w-[30.469%]"
                        title="ধর্মকর্ম"
                     />
                </div>
                <div className="flex flex-col lg:flex-row gap-y-5 items-center justify-between lg:divide-x divide-[#A1A1A1] lg:mt-8">
                    <div className="w-full lg:max-w-[32.579% lg:pr-6.75 divide-y divide-gray-dark space-y-3 lg:space-y-5">
                        
                        <SectionHeader
                            className="lg:hidden"
                            title="সামাজিক কথন"
                        />
                        <div className="pb-3 lg:pb-5">
                            <NewsItem
                                image={RiverImage}
                                imageWidth={140}
                                imageHeight={104}
                                title={"জোটে অংশ নিলেও নিজ দলের প্রতীকে ভোট বাধ্যতামূলক"}
                                time={"১ মিনিট আগে"}
                                href="/singledetails"
                                timeMt={16}
                                imageWrap="max-w-[104px]"
                            />
                        </div>
                        <div className="pb-3 lg:pb-5">
                            <NewsItem
                                image={RiverImage}
                                imageWidth={140}
                                imageHeight={104}
                                title={"জোটে অংশ নিলেও নিজ দলের প্রতীকে ভোট বাধ্যতামূলক"}
                                time={"১ মিনিট আগে"}
                                href="/singledetails"
                                timeMt={16}
                                imageWrap="max-w-[104px]"
                            />
                        </div>
                        <div className="pb-3 lg:pb-5">
                            <NewsItem
                                image={RiverImage}
                                imageWidth={140}
                                imageHeight={104}
                                title={"জোটে অংশ নিলেও নিজ দলের প্রতীকে ভোট বাধ্যতামূলক"}
                                time={"১ মিনিট আগে"}
                                href="/singledetails"
                                timeMt={16}
                                imageWrap="max-w-[104px]"
                            />
                        </div>
                    </div>
                    <div className="w-full lg:max-w-[34.688%] lg:px-6.75 divide-y divide-gray-dark space-y-3 lg:space-y-5">
                        
                        <SectionHeader
                            className="lg:hidden"
                            title="তথ্য প্রযুক্তি"
                        />
                        <div className="pb-3 lg:pb-5">
                            <NewsItem
                                image={RiverImage}
                                imageWidth={140}
                                imageHeight={104}
                                title={"জোটে অংশ নিলেও নিজ দলের প্রতীকে ভোট বাধ্যতামূলক"}
                                time={"১ মিনিট আগে"}
                                href="/singledetails"
                                timeMt={16}
                                imageWrap="max-w-[104px]"
                            />
                        </div>
                        <div className="pb-3 lg:pb-5">
                            <NewsItem
                                image={RiverImage}
                                imageWidth={140}
                                imageHeight={104}
                                title={"জোটে অংশ নিলেও নিজ দলের প্রতীকে ভোট বাধ্যতামূলক"}
                                time={"১ মিনিট আগে"}
                                href="/singledetails"
                                timeMt={16}
                                imageWrap="max-w-[104px]"
                            />
                        </div>
                        <div className="pb-3 lg:pb-5">
                            <NewsItem
                                image={RiverImage}
                                imageWidth={140}
                                imageHeight={104}
                                title={"জোটে অংশ নিলেও নিজ দলের প্রতীকে ভোট বাধ্যতামূলক"}
                                time={"১ মিনিট আগে"}
                                href="/singledetails"
                                timeMt={16}
                                imageWrap="max-w-[104px]"
                            />
                        </div>
                    </div>
                    <div className="w-full lg:max-w-[32.579%] lg:pl-6.75 divide-y divide-gray-dark space-y-3 lg:space-y-5">
                        <SectionHeader
                            className="lg:hidden"
                            title="ধর্মকর্ম"
                        />
                        <div className="pb-3 lg:pb-5">
                            <NewsItem
                                image={RiverImage}
                                imageWidth={140}
                                imageHeight={104}
                                title={"জোটে অংশ নিলেও নিজ দলের প্রতীকে ভোট বাধ্যতামূলক"}
                                time={"১ মিনিট আগে"}
                                href="/singledetails"
                                timeMt={16}
                                imageWrap="max-w-[104px]"
                            />
                        </div>
                        <div className="pb-3 lg:pb-5">
                            <NewsItem
                                image={RiverImage}
                                imageWidth={140}
                                imageHeight={104}
                                title={"জোটে অংশ নিলেও নিজ দলের প্রতীকে ভোট বাধ্যতামূলক"}
                                time={"১ মিনিট আগে"}
                                href="/singledetails"
                                timeMt={16}
                                imageWrap="max-w-[104px]"
                            />
                        </div>
                        <div className="pb-3 lg:pb-5">
                            <NewsItem
                                image={RiverImage}
                                imageWidth={140}
                                imageHeight={104}
                                title={"জোটে অংশ নিলেও নিজ দলের প্রতীকে ভোট বাধ্যতামূলক"}
                                time={"১ মিনিট আগে"}
                                href="/singledetails"
                                timeMt={16}
                                imageWrap="max-w-[104px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}