import NewsBreadcrumb from "@/components/breadcrumb/NewsBreadcrumb";
import SectionTitle from "@/components/section-title/SectionTitle";
import SubCategory from "@/components/subcategory/SubCategory";
import ImageSection from "@/components/gallary-section/ImageSection";
import GalleryNews from "@/components/gallary-section/GallaryNews";
import MousqueImage from "../../assets/image/mosque.png"

export default function ImageNews() {
    return (
        <>
            <section className="pb-2 pt-5 sm:pt-10">
                <div className="container">
                    <div>
                        <NewsBreadcrumb
                            title="ছবি খবর"
                        />
                        <SubCategory />
                    </div>
                </div>
            </section>
            <ImageSection />
            <section className="border-b border-[#ddd] py-8 lg:py-16 last:border-b-0">
                <div className="container">
                    <SectionTitle 
                        title="বাংলাদেশ"
                        href="/image-category"
                    />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 mt-8">
                        <GalleryNews
                            image={MousqueImage}
                            title="বিএনপির সম্ভাব্য প্রার্থী তালিকা প্রকাশ, তালিকায় নেই রুমিন ফারহানার নাম"
                            time="১ মিনিট আগে"
                            photoCount={2}
                        />
                        <GalleryNews
                            image={MousqueImage}
                            title="বিএনপির সম্ভাব্য প্রার্থী তালিকা প্রকাশ, তালিকায় নেই রুমিন ফারহানার নাম"
                            time="১ মিনিট আগে"
                            photoCount={2}
                        />
                        <GalleryNews
                            image={MousqueImage}
                            title="বিএনপির সম্ভাব্য প্রার্থী তালিকা প্রকাশ, তালিকায় নেই রুমিন ফারহানার নাম"
                            time="১ মিনিট আগে"
                            photoCount={2}
                        />
                        <GalleryNews
                            image={MousqueImage}
                            title="বিএনপির সম্ভাব্য প্রার্থী তালিকা প্রকাশ, তালিকায় নেই রুমিন ফারহানার নাম"
                            time="১ মিনিট আগে"
                            photoCount={2}
                        />
                        
                    </div>
                </div>
            </section>
            <section className="border-b border-[#ddd] py-8 lg:py-16 last:border-b-0">
                <div className="container">
                    <SectionTitle 
                        title="দুর্ঘটনা"
                        href="#"
                    />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 mt-8">
                        <GalleryNews
                            image={MousqueImage}
                            title="বিএনপির সম্ভাব্য প্রার্থী তালিকা প্রকাশ, তালিকায় নেই রুমিন ফারহানার নাম"
                            time="১ মিনিট আগে"
                            photoCount={2}
                        />
                        <GalleryNews
                            image={MousqueImage}
                            title="বিএনপির সম্ভাব্য প্রার্থী তালিকা প্রকাশ, তালিকায় নেই রুমিন ফারহানার নাম"
                            time="১ মিনিট আগে"
                            photoCount={2}
                        />
                        <GalleryNews
                            image={MousqueImage}
                            title="বিএনপির সম্ভাব্য প্রার্থী তালিকা প্রকাশ, তালিকায় নেই রুমিন ফারহানার নাম"
                            time="১ মিনিট আগে"
                            photoCount={2}
                        />
                        <GalleryNews
                            image={MousqueImage}
                            title="বিএনপির সম্ভাব্য প্রার্থী তালিকা প্রকাশ, তালিকায় নেই রুমিন ফারহানার নাম"
                            time="১ মিনিট আগে"
                            photoCount={2}
                        />
                    </div>
                </div>
            </section>
            <section className="border-b border-[#ddd] py-8 lg:py-16 last:border-b-0">
                <div className="container">
                    <SectionTitle 
                        title="সরকার"
                        href="#"
                    />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 mt-8">
                        <GalleryNews
                            image={MousqueImage}
                            title="বিএনপির সম্ভাব্য প্রার্থী তালিকা প্রকাশ, তালিকায় নেই রুমিন ফারহানার নাম"
                            time="১ মিনিট আগে"
                            photoCount={2}
                        />
                        <GalleryNews
                            image={MousqueImage}
                            title="বিএনপির সম্ভাব্য প্রার্থী তালিকা প্রকাশ, তালিকায় নেই রুমিন ফারহানার নাম"
                            time="১ মিনিট আগে"
                            photoCount={2}
                        />
                        <GalleryNews
                            image={MousqueImage}
                            title="বিএনপির সম্ভাব্য প্রার্থী তালিকা প্রকাশ, তালিকায় নেই রুমিন ফারহানার নাম"
                            time="১ মিনিট আগে"
                            photoCount={2}
                        />
                        <GalleryNews
                            image={MousqueImage}
                            title="বিএনপির সম্ভাব্য প্রার্থী তালিকা প্রকাশ, তালিকায় নেই রুমিন ফারহানার নাম"
                            time="১ মিনিট আগে"
                            photoCount={2}
                        />
                    </div>
                </div>
            </section>
            <section className="border-b border-[#ddd] py-8 lg:py-16 last:border-b-0">
                <div className="container">
                    <SectionTitle 
                        title="রাজনীতি"
                        href="#"
                    />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 mt-8">
                        <GalleryNews
                            image={MousqueImage}
                            title="বিএনপির সম্ভাব্য প্রার্থী তালিকা প্রকাশ, তালিকায় নেই রুমিন ফারহানার নাম"
                            time="১ মিনিট আগে"
                            photoCount={2}
                        />
                        <GalleryNews
                            image={MousqueImage}
                            title="বিএনপির সম্ভাব্য প্রার্থী তালিকা প্রকাশ, তালিকায় নেই রুমিন ফারহানার নাম"
                            time="১ মিনিট আগে"
                            photoCount={2}
                        />
                        <GalleryNews
                            image={MousqueImage}
                            title="বিএনপির সম্ভাব্য প্রার্থী তালিকা প্রকাশ, তালিকায় নেই রুমিন ফারহানার নাম"
                            time="১ মিনিট আগে"
                            photoCount={2}
                        />
                        <GalleryNews
                            image={MousqueImage}
                            title="বিএনপির সম্ভাব্য প্রার্থী তালিকা প্রকাশ, তালিকায় নেই রুমিন ফারহানার নাম"
                            time="১ মিনিট আগে"
                            photoCount={2}
                        />
                    </div>
                </div>
            </section>
            
        </>
    );
}