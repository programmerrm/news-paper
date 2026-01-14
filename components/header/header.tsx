import Image, { StaticImageData } from "next/image";

import Logo from "../../assets/logo/logo.svg";
import TopImage from "../../assets/image/top-image.jpg";
import hamburgerIcon from "../../assets/logo/hambuger-icon.svg";
import closeIcon from "../../assets/icon/close.png";
import searchBlack from "../../assets/icon/search-icon.svg";
import globeIcon from "../../assets/logo/globe.svg";
import searchIcon from "../../assets/logo/search.svg";
import userIcon from "../../assets/logo/user.svg";
import globeBlack from "../../assets/icon/globe-black.svg";
import userBlack from "../../assets/icon/user-black.svg";
import googleIcon from "../../assets/icon/google.svg";
import arrowIcon from "../../assets/icon/down-arrow.png"
import CategoryItem from "../mega-menu/CategoryItem";
import { megaMenuData } from "../../src/data/megaMenuData";
import TopMenu from "../menu/TopMenu";
import TopNews, { TopNewsItem } from "../top-news/topNews";
import TopHeader from "./topHeader";
import SearchForm from "../form/searchForm";
import MegaButton from "../button/megaButton";
import SocialMedia from "../social/socialMedia";
import LinkItem from "../mega-menu/linkItem";

type IconLink = {
  icon: StaticImageData;
  label: string;
  href: string;
  showOn?: "all" | "md";
};
const socialLinks = [
  {
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
        <path fill="currentColor" d="M7.678 4.146V6.59H6v2.987h1.678v8.876h3.445V9.577h2.313s.216-1.432.322-2.999h-2.62V4.536c0-.305.374-.716.746-.716h1.878V.71H11.21C7.593.71 7.68 3.7 7.68 4.147" />
      </svg>
    ),
  },
  {
    href: "#",
    icon: (
        <span className="text-black transition-all duration-500 group-hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" viewBox="0 0 17 17">
                <g>
                    <g>
                        <path fill="currentColor"
                            d="M13.23.787h2.576l-5.628 6.449 6.622 8.777h-5.184L7.553 10.69l-4.644 5.322H.33l6.02-6.9L0 .788h5.316l3.667 4.864zm-.906 13.68h1.428L4.536 2.252H3.005z" />
                    </g>
                </g>
                <defs>
                    <clipPath id="a">
                        <path fill="#fff" d="M0 0h16.8v16.8H0z" />
                    </clipPath>
                </defs>
            </svg>
        </span>

    ),
  },
  {
    href: "#",
    icon: (
        <svg className="text-red transition-all duration-500 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor"
                d="M21.594 7.203a2.5 2.5 0 0 0-1.762-1.766c-1.566-.43-7.83-.437-7.83-.437s-6.265-.007-7.832.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.52 2.52 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831M9.997 15.005l.005-6 5.207 3.005z" />
        </svg>

    ),
  },
  {
    href: "#",
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
            <path fill="currentColor"
                d="M17.566 10.976v5.903h-3.423V11.37c0-1.384-.495-2.328-1.733-2.328-.946 0-1.509.637-1.756 1.252-.09.22-.114.526-.114.834v5.75H7.116s.047-9.328 0-10.295h3.424v1.459l-.022.033h.022v-.033c.455-.7 1.267-1.701 3.085-1.701 2.252 0 3.94 1.472 3.94 4.634M3.536 1.62c-1.171 0-1.937.768-1.937 1.778 0 .988.744 1.78 1.892 1.78h.022c1.194 0 1.936-.792 1.936-1.78-.02-1.01-.742-1.778-1.914-1.778M1.801 16.88h3.422V6.584H1.802z" />
        </svg>
    ),
  },
];
const topNewsData: TopNewsItem[] = [
  { image: TopImage, title: "When Abul Kalam’s life is worth 2.5 bhoris of gold", href: "#" },
  { image: TopImage, title: "Breaking news headline example", href: "#" },
  { image: TopImage, title: "Another top news story", href: "#" },
  { image: TopImage, title: "Yet another important news", href: "#" },
];
  const navItems = [
    { label: "Latest", href: "#" },
    { label: "National", href: "#" },
    { label: "Bangladesh", href: "#" },
    { label: "Politics", href: "#" },
    { label: "World", href: "#" },
    { label: "Economy", href: "#" },
    { label: "Religion", href: "#" },
    { label: "Sports", href: "#" },
    { label: "Entertainment", href: "#" },
    { label: "Media", href: "#" },
  ];

const iconLinks: IconLink[] = [
  { icon: globeIcon, label: "Bangla", href: "#", showOn: "all" }, 
  { icon: searchIcon, label: "Search", href: "#", showOn: "md" }, 
  { icon: userIcon, label: "Profile", href: "#", showOn: "md" },  
];


export default function Header() {
    return (
        <header className="relative">
            {/* top header */}
            <TopHeader
                dateText="রবিবার, ২৮ অক্টোবর ২০২৫, ৩০ আশ্বিন ১৪৩২"
                updateText="আপডেট ২৭ মিনিট আগে"
                logo={Logo}
                socialLinks={socialLinks}
            />

            {/* top news */}
            <TopNews  news={topNewsData}/>

            {/* NAVBAR SECTION START */}
            
            <TopMenu 
                navItems={navItems} 
                iconLinks={iconLinks} 
                logo={Logo}       
                closeIcon={closeIcon}
                hamburgerIcon={hamburgerIcon} 
                />
            <div className="bg-white absolute top-0 left-0 right-0 -bottom-px z-50 h-screen overflow-y-auto pb-10 hidden">
                <div className="border-b border-gray py-6">
                    <div className="max-w-360 mx-auto overflow-hidden">
                        <div className="container flex items-center justify-between">
                            <div>
                                <Image
                                    src={Logo}
                                    alt="Hero image"
                                    width={100}
                                    height={64}
                                />
                            </div>
                            <div>
                                <Image
                                    src={closeIcon}
                                    alt="Close Icon"
                                    width={24}
                                    height={24}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white max-w-360 mx-auto overflow-hidden">
                    <div className="container">
                        <div className="flex flex-col lg:flex-row justify-between gap-10">
                            <div className="pt-12 pb-10 w-full">
                                {megaMenuData.map((category, index) => (
                                    <CategoryItem
                                    key={index}
                                    title={category.title}
                                    icon={arrowIcon}
                                    items={category.items}
                                    />
                                ))}
                            </div>
                            <div className="relative w-full lg:max-w-88 after:content-[''] after:absolute after:inset-0 lg:after:w-screen after:bg-[#E0EBF0] after:z-10 pl-5 pr-5 lg:pr-0 lg:pl-10 py-12">
                                <div className="flex flex-col justify-between relative z-20 h-full">
                                    <div>
                                        <SearchForm icon={searchBlack} />
                                        <div className="flex items-center justify-between gap-2 border-b border-[#B6C3C8] mb-6 pb-6">
                                            <MegaButton icon={globeBlack} label="English"/>
                                            <MegaButton icon={userBlack} label="Login" />
                                        </div>
                                        <div>
                                            <h4>সোশ্যাল মিডিয়া</h4>
                                            <SocialMedia />
                                        </div>
                                    </div>
                                    <div className=" divide-y divide-[#B6C3C8] border-t border-b border-[#B6C3C8]">
                                        <ul className="py-5 flex items-center flex-wrap gap-y-2 gap-x-5.25">
                                            <LinkItem href="#" label="আমাদের সম্পর্কে" />
                                            <LinkItem href="#" label="যোগাযোগ" />
                                            <LinkItem href="#" label="বিজ্ঞাপন" />
                                            <LinkItem href="#" label="ট্রামস অফ সার্ভিস" />
                                            <LinkItem href="#" label="প্রাইভেসি পলিসি" />
                                        </ul>
                                        <div className="py-5">
                                            <span className="text-[15px] leading-4 tracking-[1%] text-title">© ২০২৫ নিউজফ্ল্যাশ ৭১ | সর্বস্বত্ব সংরক্ষিত</span>
                                        </div>
                                        <div className="py-5">
                                            <p className="text-sm font-normal leading-5.5">নিউজফ্ল্যাশ সেভেন্টিওয়ান’র প্রকাশিত কোন সংবাদ, আলাকচিত্র কপিরাইট আইনে পূর্বানুমতি ছাড়া ব্যবহার করা যাবে না</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}