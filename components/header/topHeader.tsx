// components/TopHeader.tsx
"use client";

import Image, { StaticImageData } from "next/image";

type SocialLink = {
  href: string;
  icon: React.ReactNode;
};

type TopHeaderProps = {
  dateText: string;
  updateText: string;
  logo: StaticImageData;
  socialLinks: SocialLink[];
};

export default function TopHeader({
  dateText,
  updateText,
  logo,
  socialLinks,
}: TopHeaderProps) {
  return (
    <div className="py-5 border-b-2 border-gray-dark">
      <div className="container">
        <div className="flex items-center justify-between gap-5">
          {/* Date & update info */}
          <div className="hidden lg:flex flex-col gap-2">
            <span className="text-[13px] sm:leading-3.5 font-inter">{dateText}</span>
            <span className="text-[13px] sm:leading-3.5 font-inter">{updateText}</span>
          </div>

          {/* Logo */}
          <a href="#" className="max-w-16 md:max-w-25">
            <Image src={logo} alt="Logo" width={100} height={64} />
          </a>

          {/* Social / action icons */}
          <div className="flex items-center justify-center gap-3">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="group w-10 h-10 rounded-full bg-[#F7F7F7] transition-all duration-500 hover:bg-[#FF0000] flex items-center justify-center text-[#2159ff] hover:text-white"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
