import NewsBreadcrumb from "@/components/breadcrumb/NewsBreadcrumb";
import SubCategory from "@/components/subcategory/SubCategory";
import ImageSection from "@/components/gallary-section/ImageSection";
import MousqueImage from "../../assets/image/mosque.png"
import AddImage from "../../assets/image/details-add.png"
import ImageCategoryItem from "@/components/gallary-section/imageCategoryItem";
import Button from "@/components/button/Button";
import DetailsAdd from "@/components/detailsadd/DetailsAdd";

export default function ImageCategory() {
    return (
        <>
            <section className="pb-2 pt-5 sm:pt-10">
                <div className="container">
                    <div>
                        <NewsBreadcrumb
                            title="ছবি খবর"
                            subtitle="রাজনীতি"
                        />
                        <SubCategory />
                    </div>
                </div>
            </section>
            <ImageSection />
            <section className="border-b border-[#ddd] py-8 lg:py-16 last:border-b-0">
                <div className="container">
                    <div className="max-w-220.5 mx-auto border-b border-gray-dark first:pt-0 divide-y divide-gray-dark space-y-4 md:space-y-8">
                        <ImageCategoryItem 
                            href="/imagedetails"
                            image={MousqueImage}
                            title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                            time="১ মিনিট আগে"
                            content="বলিউডের আইটেম গার্ল খ্যাত অভিনেত্রী মালাইকা অরোরা ব্যক্তিগত জীবন নিয়ে সবসময় আলোচনায় থাকেন। দীর্ঘদাম্পত্য আর সম্পর্ক ভেঙে যাওয়ার পর মালাইকা এবার নতুন প্রেমের গুঞ্জনে ছড়িয়ে পড়েছেন।"
                            
                        />
                        <ImageCategoryItem 
                            href="/imagedetails"
                            image={MousqueImage}
                            title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                            time="১ মিনিট আগে"
                            content="বলিউডের আইটেম গার্ল খ্যাত অভিনেত্রী মালাইকা অরোরা ব্যক্তিগত জীবন নিয়ে সবসময় আলোচনায় থাকেন। দীর্ঘদাম্পত্য আর সম্পর্ক ভেঙে যাওয়ার পর মালাইকা এবার নতুন প্রেমের গুঞ্জনে ছড়িয়ে পড়েছেন।"
                        />
                        <ImageCategoryItem 
                            href="/imagedetails"
                            image={MousqueImage}
                            title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                            time="১ মিনিট আগে"
                            content="বলিউডের আইটেম গার্ল খ্যাত অভিনেত্রী মালাইকা অরোরা ব্যক্তিগত জীবন নিয়ে সবসময় আলোচনায় থাকেন। দীর্ঘদাম্পত্য আর সম্পর্ক ভেঙে যাওয়ার পর মালাইকা এবার নতুন প্রেমের গুঞ্জনে ছড়িয়ে পড়েছেন।"
                        />
                        <div className="pb-4 md:pb-8">
                            <DetailsAdd
                                src={AddImage}
                                width={882}
                                height={248}
                            />
                        </div>
                        
                        <ImageCategoryItem 
                            href="/imagedetails"
                            image={MousqueImage}
                            title="চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"
                            time="১ মিনিট আগে"
                            content="বলিউডের আইটেম গার্ল খ্যাত অভিনেত্রী মালাইকা অরোরা ব্যক্তিগত জীবন নিয়ে সবসময় আলোচনায় থাকেন। দীর্ঘদাম্পত্য আর সম্পর্ক ভেঙে যাওয়ার পর মালাইকা এবার নতুন প্রেমের গুঞ্জনে ছড়িয়ে পড়েছেন।"
                        />
                    </div>
                    <div className="max-w-60 mx-auto mt-5 sm:mt-10">
                        <Button 
                            text="আরো দেখুন"
                        />
                    </div>
                </div>
            </section>
            
        </>
    );
}