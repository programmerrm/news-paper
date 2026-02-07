"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { newsSliderData } from "@/data/sliderData";
import Link from "next/link";

export default function NewsSlider() {
  return (
    <section className="bg-[#FBF7EF] py-8 lg:py-16 home-slider">
      <div className="container mx-auto px-4">

        <Swiper
          className="pb-6! lg:pb-9!"
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          loop={false}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {newsSliderData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative h-60 overflow-hidden group flex flex-col justify-end">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="relative z-10 w-full p-3 bg-white/85">
                  <p className="text-xs leading-3.75 text-red mb-1">
                    {item.category}
                  </p>
                  <Link href="#">
                    <h6 className="text-sm leading-5.5 font-semibold text-title">
                      {item.title}
                    </h6>
                  </Link>
                  
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
