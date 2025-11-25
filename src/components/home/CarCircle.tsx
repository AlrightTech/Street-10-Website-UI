"use client";
import Image from "next/image";
import React, { useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const carImages = [
  { src: "/images/cars/car-1.jpg", alt: "car-1" },
  { src: "/images/cars/car-2.jpg", alt: "car-2" },
  { src: "/images/cars/car-3.jpg", alt: "car-3" },
  { src: "/images/cars/car-4.jpg", alt: "car-4" },
  { src: "/images/cars/car-5.jpg", alt: "car-5" },
  { src: "/images/cars/car-6.jpg", alt: "car-6" },
  { src: "/images/cars/car-7.jpg", alt: "car-7" },
  { src: "/images/cars/car-8.jpg", alt: "car-8" },
];

function CarCircle() {
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="w-full relative px-26 pb-10">
      <div
        ref={prevRef}
        className="absolute left-33 top-1/3 -translate-y-1/2 z-10 cursor-pointer bg-[#ffffff] rounded-full h-6 w-6 pt-[2px] ps-[2px] "
      >
        <MdOutlineKeyboardArrowLeft size={20} />
      </div>

      <div
        ref={nextRef}
        className="absolute right-33 top-1/3 -translate-y-1/2 z-10 cursor-pointer bg-[#ffffff] rounded-full h-6 w-6  pt-[2px] ps-[2px]"
      >
        <MdKeyboardArrowRight size={20} />
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={1}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper: SwiperType) => {
          if (
            swiper.params.navigation &&
            typeof swiper.params.navigation !== "boolean"
          ) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 2 },
          768: { slidesPerView: 4, spaceBetween: 3 },
          1024: { slidesPerView: 5, spaceBetween: 1 },
          1280: { slidesPerView: 7, spaceBetween: 1 },
        }}
      >
        {carImages.map((car, index) => (
          <SwiperSlide key={index}>
            <Link href="/car-preview" className="block">
              <div className="w-[130px] h-[130px] rounded-full p-1 bg-gradient-to-r from-[#766CDF] via-[#B78BB2] to-[#DD9F84] flex items-center justify-center mx-auto cursor-pointer hover:scale-110 transition-transform">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-white">
                  <Image
                    src={car.src}
                    alt={car.alt}
                    width={130}
                    height={130}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CarCircle;
