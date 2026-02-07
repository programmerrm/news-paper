import SectionTitle from "../section-title/SectionTitle";
import StorisCard from "./StorisCard";
import storisImage from "../../assets/image/storis-image.png";

const storisData = [
  {
    image: storisImage,
    title: "১৯ বছরের ছোট, ডায়মন্ড ব্যবসায়ীর সঙ্গে প্রেমে..",
    href: "#",
  },
  {
    image: storisImage,
    title: "নতুন ছবিতে আলোচনায় জনপ্রিয় অভিনেত্রী",
    href: "#",
  },
  {
    image: storisImage,
    title: "নতুন ছবিতে আলোচনায় জনপ্রিয় অভিনেত্রী",
    href: "#",
  },
  {
    image: storisImage,
    title: "নতুন ছবিতে আলোচনায় জনপ্রিয় অভিনেত্রী",
    href: "#",
  },
  {
    image: storisImage,
    title: "নতুন ছবিতে আলোচনায় জনপ্রিয় অভিনেত্রী",
    href: "#",
  },
  {
    image: storisImage,
    title: "নতুন ছবিতে আলোচনায় জনপ্রিয় অভিনেত্রী",
    href: "#",
  },
  {
    image: storisImage,
    title: "নতুন ছবিতে আলোচনায় জনপ্রিয় অভিনেত্রী",
    href: "#",
  },
];

export default function OurStorisSection() {
  return (
    <section className="bg-linear-to-b from-[#F0F5F4] to-[#FFFFFF] py-8 lg:py-16">
        <div className="container">
          <SectionTitle
              title="ওয়ের স্টোরিস"
              href="/webstoris"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 mt-7">
            {storisData.map((item, index) => (
                <StorisCard
                  key={index}
                  image={item.image}
                  title={item.title}
                  href={item.href}
                />
              ))}
          </div>
        </div>
    </section>
  );
}
