
import ledImage from "../../assets/image/led-image.png";
import Button from "@/components/button/Button";
import NewsBreadcrumb from "@/components/breadcrumb/NewsBreadcrumb";
import SubCategory from "@/components/subcategory/SubCategory";
import WebStorisCard from "@/components/storis/WebStoris";
import ReelStorisCard from "@/components/storis/ReelStoris";

export default function ReelsPage() {
    return (
        <>
            <section className="pt-5 md:pt-10 pb-7 md:pb-14">
                <div className="container">
                    <div>
                        <NewsBreadcrumb
                            title="রিলস খবর"
                        />
                        <SubCategory />
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-3 sm:mt-7">
                        <ReelStorisCard 
                            thumbnail={ledImage}
                            title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                            time="১ মিনিট আগে"
                            href="/reelscategory"
                        />
                        <ReelStorisCard 
                            thumbnail={ledImage}
                            title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                            time="১ মিনিট আগে"
                            href="/reelscategory"
                        />
                        <ReelStorisCard 
                            thumbnail={ledImage}
                            title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                            time="১ মিনিট আগে"
                            href="/reelscategory"
                        />
                        <ReelStorisCard 
                            thumbnail={ledImage}
                            title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                            time="১ মিনিট আগে"
                            href="/reelscategory"
                        />
                        <ReelStorisCard 
                            thumbnail={ledImage}
                            title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                            time="১ মিনিট আগে"
                            href="/reelscategory"
                        />
                        <ReelStorisCard 
                            thumbnail={ledImage}
                            title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                            time="১ মিনিট আগে"
                            href="/reelscategory"
                        />
                        <ReelStorisCard 
                            thumbnail={ledImage}
                            title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                            time="১ মিনিট আগে"
                            href="/reelscategory"
                        />
                        <ReelStorisCard 
                            thumbnail={ledImage}
                            title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                            time="১ মিনিট আগে"
                            href="/reelscategory"
                        />
                        <ReelStorisCard 
                            thumbnail={ledImage}
                            title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                            time="১ মিনিট আগে"
                            href="/reelscategory"
                        />
                        <ReelStorisCard 
                            thumbnail={ledImage}
                            title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                            time="১ মিনিট আগে"
                            href="/reelscategory"
                        />
                        <ReelStorisCard 
                            thumbnail={ledImage}
                            title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                            time="১ মিনিট আগে"
                            href="/reelscategory"
                        />
                        <ReelStorisCard 
                            thumbnail={ledImage}
                            title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                            time="১ মিনিট আগে"
                            href="/reelscategory"
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