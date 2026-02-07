import NewsBreadcrumb from "@/components/breadcrumb/NewsBreadcrumb";
import SubCategory from "@/components/subcategory/SubCategory";
import VideoCategorySection from "@/components/video-section/VideoCategorySection";
import VideoCardItem from "@/components/video-section/videocardItem";
import Button from "@/components/button/Button";
import Add from "@/components/add/Add";
import NewsFlashImage from "../../assets/image/news-flash.png"
import DetailsAdd from "@/components/detailsadd/DetailsAdd";


export default function SubVideoCategory() {
    return (
        <>
            <section className="pb-2 pt-5 sm:pt-10">
                <div className="container">
                    <div>
                        <NewsBreadcrumb
                            title="ভিডিও খবর"
                            subtitle="রাজনীতি"
                        />
                        <SubCategory />
                    </div>
                </div>
            </section>
            <section>
                <VideoCategorySection />
            </section>
            <Add />
            <section className="border-b border-[#ddd] py-8 lg:py-16 last:border-b-0">
                
                <div className="container">
                    <div className="max-w-205.5 mx-auto border-b border-gray-dark py-4 md:py-8 first:pt-0">
                        <VideoCardItem
                            title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                            time="১ মিনিট আগে"
                            href="/video/1"
                            imageWidth={340}
                            imageHeight={255}
                            content="বলিউডের আইটেম গার্ল খ্যাত অভিনেত্রী মালাইকা অরোরা ব্যক্তিগত জীবন নিয়ে সবসময় আলোচনায় থাকেন। দীর্ঘদাম্পত্য আর সম্পর্ক ভেঙে যাওয়ার পর মালাইকা এবার নতুন প্রেমের গুঞ্জনে ছড়িয়ে পড়েছেন।"
                            className="sm:flex-row gap-4 md:gap-8"
                        />
                    </div>
                    <div className="max-w-205.5 mx-auto border-b border-gray-dark py-4 md:py-8 first:pt-0">
                        <VideoCardItem
                            title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                            time="১ মিনিট আগে"
                            href="/video/1"
                            imageWidth={340}
                            imageHeight={255}
                            content="বলিউডের আইটেম গার্ল খ্যাত অভিনেত্রী মালাইকা অরোরা ব্যক্তিগত জীবন নিয়ে সবসময় আলোচনায় থাকেন। দীর্ঘদাম্পত্য আর সম্পর্ক ভেঙে যাওয়ার পর মালাইকা এবার নতুন প্রেমের গুঞ্জনে ছড়িয়ে পড়েছেন।"
                            className="sm:flex-row gap-4 md:gap-8"
                        />
                    </div>
                    <div className="max-w-205.5 mx-auto border-b border-gray-dark py-4 md:py-8 first:pt-0">
                        <VideoCardItem
                            title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                            time="১ মিনিট আগে"
                            href="/video/1"
                            imageWidth={340}
                            imageHeight={255}
                            content="বলিউডের আইটেম গার্ল খ্যাত অভিনেত্রী মালাইকা অরোরা ব্যক্তিগত জীবন নিয়ে সবসময় আলোচনায় থাকেন। দীর্ঘদাম্পত্য আর সম্পর্ক ভেঙে যাওয়ার পর মালাইকা এবার নতুন প্রেমের গুঞ্জনে ছড়িয়ে পড়েছেন।"
                            className="sm:flex-row gap-4 md:gap-8"
                        />
                    </div>
                    <div className="pb-4 md:pb-8 max-w-205.5 mx-auto border-b border-gray-dark py-4 md:py-8 first:pt-0">
                        <DetailsAdd
                            src={NewsFlashImage}
                            alt="NewsFlashImage"
                            width={740}
                            height={248}
                        />
                    </div>
                    <div className="max-w-205.5 mx-auto border-b border-gray-dark py-4 md:py-8 first:pt-0">
                        <VideoCardItem
                            title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                            time="১ মিনিট আগে"
                            href="/video/1"
                            imageWidth={340}
                            imageHeight={255}
                            content="বলিউডের আইটেম গার্ল খ্যাত অভিনেত্রী মালাইকা অরোরা ব্যক্তিগত জীবন নিয়ে সবসময় আলোচনায় থাকেন। দীর্ঘদাম্পত্য আর সম্পর্ক ভেঙে যাওয়ার পর মালাইকা এবার নতুন প্রেমের গুঞ্জনে ছড়িয়ে পড়েছেন।"
                            className="sm:flex-row gap-4 md:gap-8"
                        />
                    </div>
                    <div className="max-w-205.5 mx-auto border-b border-gray-dark py-4 md:py-8 first:pt-0">
                        <VideoCardItem
                            title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                            time="১ মিনিট আগে"
                            href="/video/1"
                            imageWidth={340}
                            imageHeight={255}
                            content="বলিউডের আইটেম গার্ল খ্যাত অভিনেত্রী মালাইকা অরোরা ব্যক্তিগত জীবন নিয়ে সবসময় আলোচনায় থাকেন। দীর্ঘদাম্পত্য আর সম্পর্ক ভেঙে যাওয়ার পর মালাইকা এবার নতুন প্রেমের গুঞ্জনে ছড়িয়ে পড়েছেন।"
                            className="sm:flex-row gap-4 md:gap-8"
                        />
                    </div>
                    <div className="max-w-60 mx-auto mt-10">
                        <Button 
                            text="আরো দেখুন"
                        />
                    </div>
                </div>
            </section>
            
        </>
    );
}