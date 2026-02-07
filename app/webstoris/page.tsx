import LedNews from "@/components/led-news/LedNews";
import HeroSideberImage from "../../assets/image/hero-sidebar.png";
import ledImage from "../../assets/image/led-image.png";
import NewsFlashImage from "../../assets/image/news-flash.png"
import Button from "@/components/button/Button";
import NewsBreadcrumb from "@/components/breadcrumb/NewsBreadcrumb";
import SubCategory from "@/components/subcategory/SubCategory";
import CategoryNewsHeadding from "@/components/category/CategoryNewsHeadding";
import SectionHeader from "@/components/category/SectionHeader";
import OpinionItem from "@/components/news-items/opinionItem";
import OpinionLedNews from "@/components/led-news/OpinionLedNews";
import DetailsAdd from "@/components/detailsadd/DetailsAdd";
import WebStorisCard from "@/components/storis/WebStoris";

export default function WebStorisPage() {
    return (
        <>
            <section className="pt-5 md:pt-10 pb-7 md:pb-14">
                <div className="container">
                    <div>
                        <NewsBreadcrumb
                            title="ওয়ের স্টোরিস"
                        />
                        <SubCategory />
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-3 sm:mt-7">
                        <WebStorisCard 
                            thumbnail={ledImage}
                            title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                            time="১ মিনিট আগে"
                            href="/webstoriscategory"
                        />
                        <WebStorisCard 
                            thumbnail={ledImage}
                            title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                            time="১ মিনিট আগে"
                        />
                        <WebStorisCard 
                            thumbnail={ledImage}
                            title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                            time="১ মিনিট আগে"
                        />
                        <WebStorisCard 
                            thumbnail={ledImage}
                            title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                            time="১ মিনিট আগে"
                        />
                        <WebStorisCard 
                            thumbnail={ledImage}
                            title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                            time="১ মিনিট আগে"
                        />
                        <WebStorisCard 
                            thumbnail={ledImage}
                            title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                            time="১ মিনিট আগে"
                        />
                        <WebStorisCard 
                            thumbnail={ledImage}
                            title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                            time="১ মিনিট আগে"
                        />
                        <WebStorisCard 
                            thumbnail={ledImage}
                            title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                            time="১ মিনিট আগে"
                        />
                        <WebStorisCard 
                            thumbnail={ledImage}
                            title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                            time="১ মিনিট আগে"
                        />
                        <WebStorisCard 
                            thumbnail={ledImage}
                            title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                            time="১ মিনিট আগে"
                        />
                        <WebStorisCard 
                            thumbnail={ledImage}
                            title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                            time="১ মিনিট আগে"
                        />
                        <WebStorisCard 
                            thumbnail={ledImage}
                            title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                            time="১ মিনিট আগে"
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