"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const Slider =() => {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        pagination={{
          clickable: true,
          bulletClass:
            "swiper-pagination-bullet bg-gray-300 rounded-full opacity-70 transition-all",
          bulletActiveClass:
            "swiper-pagination-bullet-active bg-gray-500 opacity-100 w-6",
        }}
        className="h-[500px]"
      >
        {/* Slides */}
        <SwiperSlide>
          <Image
            src="/home/slider-bg-1-1.png"
            className="w-full h-full object-cover"
            width={100}
            height={100}
            alt={""}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/home/slider-bg-1-2.png"
            className="w-full h-full object-cover"
            width={100}
            height={100}
            alt={""}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/home/slider-bg-1-3.png"
            className="w-full h-full object-cover"
            width={100}
            height={100}
            alt={""}
          />
        </SwiperSlide>
      </Swiper>

    </div>
  );
}
export default Slider;