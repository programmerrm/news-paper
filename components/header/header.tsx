import { StaticImageData } from "next/image";
import Logo from "../../assets/logo/logo.svg";
import TopImage from "../../assets/image/top-image.jpg";
import hamburgerIcon from "../../assets/logo/hambuger-icon.svg";
import closeIcon from "../../assets/icon/close.png";
import globeIcon from "../../assets/logo/globe.svg";
import searchIcon from "../../assets/logo/search.svg";
import userIcon from "../../assets/logo/user.svg";
import TopMenu from "../mega-menu/TopMenu";
import TopNews, { TopNewsItem } from "./topNews";
import TopHeader from "./topHeader";

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
            <svg className="text-[#FF0000] transition-all duration-500 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
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
  { image: TopImage, title: "খালেদা জিয়া ৩ আসনে, তারেক রহমান বগুড়া-৬ এ বিএনপির প্রার্থী", href: "#" },
  { image: TopImage, title: "খালেদা জিয়া ৩ আসনে, তারেক রহমান বগুড়া-৬ এ বিএনপির প্রার্থী", href: "#" },
  { image: TopImage, title: "খালেদা জিয়া ৩ আসনে, তারেক রহমান বগুড়া-৬ এ বিএনপির প্রার্থী", href: "#" },
  { image: TopImage, title: "খালেদা জিয়া ৩ আসনে, তারেক রহমান বগুড়া-৬ এ বিএনপির প্রার্থী", href: "#" },
];

  const navItems = [
    { label: "হোম", href: "#" },
    { label: "সর্বশেষ", href: "/latest" },
    { label: "জাতীয়", href: "/category" },
    { label: "বাংলাদেশ", href: "#" },
    { label: "রাজনীতি", href: "#" },
    { label: "বিশ্বের খবর", href: "#" },
    { label: "অর্থনীতি", href: "#" },
    { label: "ধর্ম", href: "#" },
    { label: "খেলা", href: "#" },
    { label: "বিনোদন", href: "#" },
    { label: "মিডিয়া", href: "#" },
  ];

const iconLinks: IconLink[] = [
  { icon: globeIcon, label: "Bangla", href: "#", showOn: "all" }, 
  { icon: searchIcon, label: "সার্চ করুন", href: "/search", showOn: "md" }, 
  { icon: userIcon, label: "Profile", href: "/auth/login", showOn: "md" },  
];


export default function Header() {
    return (
        <header className="relative">
            
            <div className=" border-b border-[#D4D4D4] py-5">
              <div className="container">
                  <TopHeader
                  dateText="রবিবার, ২৮ অক্টোবর ২০২৫, ৩০ আশ্বিন ১৪৩২"
                  updateText="আপডেট ২৭ মিনিট আগে"
                  logo={Logo}
                  socialLinks={socialLinks}
              />
              </div>
            </div>

            <TopNews  news={topNewsData}/>
            
            <TopMenu 
                navItems={navItems} 
                iconLinks={iconLinks} 
                logo={Logo}       
                closeIcon={closeIcon}
                hamburgerIcon={hamburgerIcon}
                socialLinks={socialLinks} 
                />

        </header>
    );
}
