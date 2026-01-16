import Image, { StaticImageData } from "next/image";
type SectionTitleProps = {
  title: string;
  href?: string;
  icon: StaticImageData;
};

export default function SectionTitle({
  title,
  href = "#",
  icon,
}: SectionTitleProps) {
  return (
        <div className="pb-6 border-b-2 border-[#A1A1A1] flex gap-3 items-center">
            <h4 className="text-xl! lg:text-2xl! font-semibold font-inter">{title}</h4>
            <span className="bg-red w-px h-4" />
            <a
                href={href}
                className="text-sm leading-6 font-medium inline-flex items-center gap-0.5 text-red"
            >
                সব খবর
                <Image src={icon} alt="right arrow" />
            </a>
        </div>
  );
}
