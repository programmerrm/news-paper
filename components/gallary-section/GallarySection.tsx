import SectionTitle from "../section-title/SectionTitle";
import GallaryLednews from "./GallaryLednews";
import GalleryNews from "./GallaryNews";
import MousqueImage from "../../assets/image/mosque.png"

export default function GallarySection (){
    return(
        <section className="py-8 lg:py-16 ">
            <div className="container">
                <SectionTitle
                    title="ছবি"
                    href="/image-news"
                />
                <div className="mt-8 flex flex-col md:flex-row items-start ">
                    <div className="w-full md:max-w-[48.125%]">
                        <GallaryLednews
                            imageCount="৮ টি ছবি"
                            title="বিএনপির সম্ভাব্য প্রার্থী তালিকা প্রকাশ, তালিকায় নেই রুমিন ফারহানার নাম"
                            time="১ মিনিট আগে"
                            href="/singledetails"
                        />
                    </div>
                    <div className="w-full md:max-w-[51.875%] md:pl-6 grid grid-cols-2 gap-3 md:gap-6 mt-5 md:mt-0">
                        <GalleryNews
                            image={MousqueImage}
                            title="বিএনপির সম্ভাব্য প্রার্থী তালিকা প্রকাশ, তালিকায় নেই রুমিন ফারহানার নাম"
                            time="১ মিনিট আগে"
                            photoCount={2}
                            href="/singledetails"
                        />
                        <GalleryNews
                            image={MousqueImage}
                            title="বিএনপির সম্ভাব্য প্রার্থী তালিকা প্রকাশ, তালিকায় নেই রুমিন ফারহানার নাম"
                            time="১ মিনিট আগে"
                            photoCount={5}
                            href="/singledetails"
                        />
                        <GalleryNews
                            image={MousqueImage}
                            title="বিএনপির সম্ভাব্য প্রার্থী তালিকা প্রকাশ, তালিকায় নেই রুমিন ফারহানার নাম"
                            time="১ মিনিট আগে"
                            photoCount={9}
                            href="/singledetails"
                        />
                        <GalleryNews
                            image={MousqueImage}
                            title="বিএনপির সম্ভাব্য প্রার্থী তালিকা প্রকাশ, তালিকায় নেই রুমিন ফারহানার নাম"
                            time="১ মিনিট আগে"
                            photoCount={9}
                            href="/singledetails"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}