"use client";

import Image from "next/image";
import { socialLinks } from "../../src/data/socialLinks";
import googleIcon from "../../assets/icon/google.svg";

import {
  FacebookIcon,
  TwitterIcon,
  YoutubeIcon,
  LinkedinIcon,
} from "@/components/social-icon/socialLinksIcon";

const iconMap = {
  facebook: <FacebookIcon />,
  twitter: <TwitterIcon />,
  youtube: <YoutubeIcon />,
  linkedin: <LinkedinIcon />,
};

export default function SocialMedia() {
  return (
    <div className="flex items-center gap-2 lg:gap-4.5 mt-4">
      {socialLinks.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className={`w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-[#F7F7F7] transition-all duration-500 hover:bg-[#FF0000] flex items-center justify-center ${item.color} hover:text-white`}
        >
          {item.icon === "googleIcon" ? (
            <Image src={googleIcon} alt="google" width={20} height={20} />
          ) : (
            iconMap[item.icon]
          )}
        </a>
      ))}
    </div>
  );
}
