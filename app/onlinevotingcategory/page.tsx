import NewsBreadcrumb from "@/components/breadcrumb/NewsBreadcrumb";
import OnlineImage from "../../assets/image/online-image.png"
import OnlineVhote from "@/components/onlinevote/OnlineVote";
import SubmitVote from "@/components/onlinevote/SubmitVote";
import SubCategory from "@/components/subcategory/SubCategory";
  const voteOptions = [
    { id: "option1", label: "হ্যাঁ ভোট", value: "yes", percent: 62 },
    { id: "option2", label: "না ভোট", value: "no", percent: 35 },
    { id: "option3", label: "মন্ত্যব নেই", value: "nocomment", percent: 3 },
  ];

export default function OnlineVotingCategoryNewspage() {
    return (
        <>
            <section className="py-5 sm:py-10">
                <div className="container">
                    <div>
                        <NewsBreadcrumb
                            title="অনলাইন ভোটিং"
                        />
                        <SubCategory />
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-8 gap-6 2xl:gap-11">
                        <OnlineVhote
                            image={OnlineImage}
                            date="৪ এপ্রিল ২০২৫"
                            question="টিআইবির নির্বাহী পরিচালক ড. ইফতেখারুজ্জামান বলেছেন, সরকার পরিবর্তনের পর নতুন করে দলবাজি, দখলবাজি ও চাঁদাবাজি শুরু হয়েছে। আপনিও কি তা-ই মনে করেন?"
                            options={[
                                { id: "yes", label: "হ্যাঁ ভোট", value: "yes" },
                                { id: "no", label: "না ভোট", value: "no" },
                                { id: "nc", label: "মন্তব্য নেই", value: "noComment" },
                            ]}
                        />
                        <SubmitVote 
                            image={OnlineImage}
                            date="৪ এপ্রিল ২০২৫"
                            question="টিআইবির নির্বাহী পরিচালক ড. ইফতেখারুজ্জামান বলেছেন, সরকার পরিবর্তনের পর নতুন করে দলবাজি, দখলবাজি ও চাঁদাবাজি শুরু হয়েছে। আপনিও কি তা-ই মনে করেন?"
                            options={voteOptions}
                            totalVotes={2000}
                        />
                        <OnlineVhote
                            image={OnlineImage}
                            date="৪ এপ্রিল ২০২৫"
                            question="টিআইবির নির্বাহী পরিচালক ড. ইফতেখারুজ্জামান বলেছেন, সরকার পরিবর্তনের পর নতুন করে দলবাজি, দখলবাজি ও চাঁদাবাজি শুরু হয়েছে। আপনিও কি তা-ই মনে করেন?"
                            options={[
                                { id: "yes1", label: "হ্যাঁ ভোট", value: "yes" },
                                { id: "no1", label: "না ভোট", value: "no" },
                                { id: "nc1", label: "মন্তব্য নেই", value: "noComment" },
                            ]}
                        />
                        <OnlineVhote
                            image={OnlineImage}
                            date="৪ এপ্রিল ২০২৫"
                            question="সরকার পরিবর্তনের পর নতুন করে দলবাজি ও দখলবাজি শুরু হয়েছে—আপনি কি একমত?"
                            options={[
                                { id: "yes1", label: "হ্যাঁ ভোট", value: "yes" },
                                { id: "no1", label: "না ভোট", value: "no" },
                                { id: "nc1", label: "মন্তব্য নেই", value: "noComment" },
                            ]}
                        />
                        <OnlineVhote
                            image={OnlineImage}
                            date="৪ এপ্রিল ২০২৫"
                            question="সরকার পরিবর্তনের পর নতুন করে দলবাজি ও দখলবাজি শুরু হয়েছে—আপনি কি একমত?"
                            options={[
                                { id: "yes1", label: "হ্যাঁ ভোট", value: "yes" },
                                { id: "no1", label: "না ভোট", value: "no" },
                                { id: "nc1", label: "মন্তব্য নেই", value: "noComment" },
                            ]}
                        />
                        <OnlineVhote
                            image={OnlineImage}
                            date="৪ এপ্রিল ২০২৫"
                            question="সরকার পরিবর্তনের পর নতুন করে দলবাজি ও দখলবাজি শুরু হয়েছে—আপনি কি একমত?"
                            options={[
                                { id: "yes1", label: "হ্যাঁ ভোট", value: "yes" },
                                { id: "no1", label: "না ভোট", value: "no" },
                                { id: "nc1", label: "মন্তব্য নেই", value: "noComment" },
                            ]}
                        />
                        <OnlineVhote
                            image={OnlineImage}
                            date="৪ এপ্রিল ২০২৫"
                            question="টিআইবির নির্বাহী পরিচালক ড. ইফতেখারুজ্জামান বলেছেন, সরকার পরিবর্তনের পর নতুন করে দলবাজি, দখলবাজি ও চাঁদাবাজি শুরু হয়েছে। আপনিও কি তা-ই মনে করেন?"
                            options={[
                                { id: "yes1", label: "হ্যাঁ ভোট", value: "yes" },
                                { id: "no1", label: "না ভোট", value: "no" },
                                { id: "nc1", label: "মন্তব্য নেই", value: "noComment" },
                            ]}
                        />
                        <OnlineVhote
                            image={OnlineImage}
                            date="৪ এপ্রিল ২০২৫"
                            question="সরকার পরিবর্তনের পর নতুন করে দলবাজি ও দখলবাজি শুরু হয়েছে—আপনি কি একমত?"
                            options={[
                                { id: "yes1", label: "হ্যাঁ ভোট", value: "yes" },
                                { id: "no1", label: "না ভোট", value: "no" },
                                { id: "nc1", label: "মন্তব্য নেই", value: "noComment" },
                            ]}
                        />

                        <OnlineVhote
                            image={OnlineImage}
                            date="৪ এপ্রিল ২০২৫"
                            question="সরকার পরিবর্তনের পর নতুন করে দলবাজি ও দখলবাজি শুরু হয়েছে—আপনি কি একমত?"
                            options={[
                                { id: "yes2", label: "হ্যাঁ ভোট", value: "yes" },
                                { id: "no2", label: "না ভোট", value: "no" },
                                { id: "nc2", label: "মন্তব্য নেই", value: "noComment" },
                            ]}
                        />
                    </div>
                </div>
            </section>
            
        </>
    );
}