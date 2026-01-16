import Image, { StaticImageData } from "next/image";

type StorisCardProps = {
  image: StaticImageData;
  title: string;
  href?: string;
};

export default function StorisCard({
  image,
  title,
  href = "#",
}: StorisCardProps) {
  return (
    <div className="py-5.5 px-4 border-[1.5px] border-[#D4D4D4]">
      <a
        href={href}
        className="flex flex-col gap-2 items-center justify-center"
      >
        <Image
          src={image}
          alt={title}
          width={92}
          height={92}
        />
        <p className="text-xs leading-4.5 font-medium text-[#171717] text-center">
          {title}
        </p>
      </a>
    </div>
  );
}
