
import { SocialLink } from "../../data/socialLinks";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  dateText?: string;
  updateText?: string;
  logo?: StaticImageData;
  socialLinks: SocialLink[];
};

export default function TopHeader({ dateText, updateText, logo, socialLinks }: Props) {
  return (
    <div className="flex items-center justify-between gap-4">
      {(dateText || updateText) && (
        <div className="hidden lg:flex flex-col gap-1 text-[13px]">
          {dateText && <span>{dateText}</span>}
          {updateText && <span>{updateText}</span>}
        </div>
      )}

      {logo && (
        <Link href="/" className="w-16 sm:w-20 md:w-24 lg:w-28 shrink-0">
          <Image src={logo} alt="Logo" width={150} height={64} className="w-full h-auto" priority />
        </Link>
      )}

      <div className="flex gap-2 sm:gap-3">
        {socialLinks.map((item, index) => (
          <Link
            key={item.id ?? index}
            href={item.href || "#"}
            target="_blank"
            className="group w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gray-100 hover:bg-red-600 flex items-center justify-center transition"
            style={{ color: item.color || "#2563eb" }}
          >
            {item.imageSrc && <Image src={item.imageSrc} alt="Social Icon" width={20} height={20} />}
            {!item.imageSrc && item.icon && <span className="text-[18px] group-hover:text-white transition">{item.icon}</span>}
          </Link>
        ))}
      </div>
    </div>
  );
}
