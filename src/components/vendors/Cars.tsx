"use client";
import Image from "next/image";
import React from "react";
import CategoriesSlider from "../general/CategoriesSlider";
import Link from "next/link";

const cars = [
  {
    price: "300 QAR",
    icon: "/icons/honda.svg",
    brand: "Mercedes car",
    src: "/images/cars/car-1.jpg",
    bid: "40,000 QAR",
    end: "4d : 12h : 8m",
    plate: "Plat no. 12345#",
    provider: ["Provided by us", "Automatic", "1600 CC"],
  },
  {
    price: "300 QAR",
    icon: "/icons/tCar.svg",
    brand: "altarek automative",
    src: "/images/street/slider-2.jpg",
    bid: "55,000 QAR",
    end: "2d : 05h : 30m",
    plate: "Plat no. 67890#",
    provider: ["Provided by us", "Manual", "2000 CC"],
  },
  {
    price: "300 QAR",
    icon: "/icons/honda.svg",
    brand: "altarek automative",
    src: "/images/street/slider-3.jpg",
    bid: "62,000 QAR",
    end: "6d : 20h : 15m",
    plate: "Plat no. 54321#",
    provider: ["Provided by us", "Automatic", "1800 CC"],
  },
  {
    price: "300 QAR",
    icon: "/icons/honda.svg",
    brand: "altarek automative",
    src: "/images/cars/car-4.jpg",
    bid: "75,000 QAR",
    end: "1d : 14h : 05m",
    plate: "Plat no. 24680#",
    provider: ["Provided by us", "Automatic", "2200 CC"],
  },
  {
    price: "300 QAR",
    icon: "/icons/honda.svg",
    brand: "altarek automative",
    src: "/images/cars/car-2.jpg",
    bid: "75,000 QAR",
    end: "1d : 14h : 05m",
    plate: "Plat no. 24680#",
    provider: ["Provided by us", "Automatic", "2200 CC"],
  },
  {
    price: "300 QAR",
    icon: "/icons/honda.svg",
    brand: "altarek automative",
    src: "/images/cars/car-3.jpg",
    bid: "75,000 QAR",
    end: "1d : 14h : 05m",
    plate: "Plat no. 24680#",
    provider: ["Provided by us", "Automatic", "2200 CC"],
  },
  {
    price: "300 QAR",
    icon: "/icons/honda.svg",
    brand: "altarek automative",
    src: "/images/cars/car-1.jpg",
    bid: "40,000 QAR",
    end: "4d : 12h : 8m",
    plate: "Plat no. 12345#",
    provider: ["Provided by us", "Automatic", "1600 CC"],
  },
  {
    price: "300 QAR",
    icon: "/icons/honda.svg",
    brand: "altarek automative",
    src: "/images/street/slider-2.jpg",
    bid: "55,000 QAR",
    end: "2d : 05h : 30m",
    plate: "Plat no. 67890#",
    provider: ["Provided by us", "Manual", "2000 CC"],
  },
  {
    price: "300 QAR",
    icon: "/icons/honda.svg",
    brand: "altarek automative",
    src: "/images/street/slider-3.jpg",
    bid: "62,000 QAR",
    end: "6d : 20h : 15m",
    plate: "Plat no. 54321#",
    provider: ["Provided by us", "Automatic", "1800 CC"],
  },
  {
    price: "300 QAR",
    icon: "/icons/honda.svg",
    brand: "altarek automative",
    src: "/images/cars/car-4.jpg",
    bid: "75,000 QAR",
    end: "1d : 14h : 05m",
    plate: "Plat no. 24680#",
    provider: ["Provided by us", "Automatic", "2200 CC"],
  },
  {
    price: "300 QAR",
    icon: "/icons/honda.svg",
    brand: "altarek automative",
    src: "/images/cars/car-2.jpg",
    bid: "75,000 QAR",
    end: "1d : 14h : 05m",
    plate: "Plat no. 24680#",
    provider: ["Provided by us", "Automatic", "2200 CC"],
  },
  {
    price: "300 QAR",
    icon: "/icons/honda.svg",
    brand: "altarek automative",
    src: "/images/cars/car-3.jpg",
    bid: "75,000 QAR",
    end: "1d : 14h : 05m",
    plate: "Plat no. 24680#",
    provider: ["Provided by us", "Automatic", "2200 CC"],
  },
];

const category = [
  { title: "All", icon: "/icons/categories.svg" },
  { title: "Dealer", icon: "/icons/dealer.svg" },
  { title: "Car Service", icon: "/icons/carService.svg" },
  { title: "Spare Parts", icon: "/icons/spareParts.svg" },
  { title: "", icon: "/icons/arrowsDown.svg" },
  { title: "", icon: "/icons/filter.svg" },
];

function Cars() {
  return (
    <section className="pt-5 pb-20 px-4 md:px-10 lg:px-20 relative">
      <CategoriesSlider category={category} />
      {/* Cars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full"
          >
            <Link href={"/vendor"}>
              {/* Image Section */}
              <div className="relative w-full flex-shrink-0">
                <Image
                  src={car.src}
                  alt={`Car ${index + 1}`}
                  width={400}
                  height={250}
                  className="w-full h-56 md:h-64 lg:h-72 object-cover"
                />

                {/* Top-right badges */}
                <div className="flex gap-2 absolute top-3 right-3 md:top-4 md:right-4">
                  <Image
                    src={"/icons/badge-1.svg"}
                    alt="badge"
                    width={36}
                    height={36}
                  />
                </div>
              </div>

              {/* Car info */}
              <div className="p-4 border-t mt-auto flex flex-col justify-between">
                <div className="mb-2 sm:mb-3 flex justify-between items-center">
                  <p className="text-[#333333] font-medium  text-sm sm:text-base">
                    {car.plate}
                  </p>
                  <p className="text-[#ee8e31] font-semibold  text-xl ">
                    {car.price}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {car.provider.map((info, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs sm:text-sm bg-white rounded-full text-[#666666] shadow-[0px_1px_4px_0px_#0000001A]"
                    >
                      {info}
                    </span>
                  ))}
                </div>
                <div className="flex justify-start gap-4 items-center mt-5">
                  <Image src={car?.icon} alt="badge" width={36} height={36} />
                  <p> {car.brand}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cars;
