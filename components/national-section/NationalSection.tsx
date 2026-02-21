import SectionTitle from "../section-title/SectionTitle";
import NewsItem from "../news-items/newsItem";
import NationalLedNews from "../national-led-news/NationalLedNews";
import NationalNews from "./NationalNews";
import OnlineVote from "../onlinevote/OnlineVote";
import onlineImage from "../../assets/image/online-vote.png"
import { getFetchData } from "@/utils/getFetchData";

export default async function NationalSection() {
    const sectionFourData = await getFetchData('/section/four');
    const sectionFourLeadNews = sectionFourData?.sectionFourLeadNews;
    const sectionFourSubleadNews = sectionFourData?.sectionFourSubleadNews;
    const sectionFourRightSide = sectionFourData?.sectionFourRightSide;
    const votePoll = sectionFourData?.votePoll;
    return (
        <section className="bg-linear-to-b from-[#F0F5F4] to-[#FFFFFF] py-8 lg:py-16">
            <div className="container">
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:max-w-[67.343%] lg:pr-5 lg:border-r border-title">
                        <SectionTitle
                            title="জাতীয়"
                            href="/category"
                        />
                        <div className="mt-8 flex flex-col md:flex-row">
                            <div className="w-full md:max-w-[61.282%] md:pr-5 md:border-r border-[#A1A1A1]">
                                {sectionFourLeadNews?.map((item: any) => (
                                    <NationalLedNews
                                        image={item.post_thumbnail}
                                        title={item.post_title}
                                        time={item.post_published_at}
                                        href={item.post_slug}
                                    />
                                ))}

                                <div className="grid grid-cols-2 mt-5 gap-4">
                                    {sectionFourSubleadNews?.map((item: any) => (
                                        <NationalNews
                                            image={item.post_thumbnail}
                                            title={item.post_title}
                                            time={item.post_published_at}
                                            href={item.post_slug}
                                            timeMt={"12"}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="w-full md:max-w-[38.599%] md:pl-5 my-5 md:my-0">
                                <div className="divide-y divide-[#D4D4D4] space-y-4">
                                    <div className="pb-4 last:pb-0">
                                        {sectionFourRightSide?.map((item: any) => (
                                            <NewsItem
                                                imageWidth={104}
                                                imageHeight={78}
                                                title={item.post_title}
                                                href={item.post_slug}
                                                time={item.post_published_at}
                                                timeMt={"10"}
                                            />
                                        ))}
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