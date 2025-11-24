"use client";
import Image from "next/image";
import React from "react";
import CategoriesSlider from "../general/CategoriesSlider";

const cars = [
  {
    src: "/images/cars/car-1.jpg",
    bid: "40,000 QAR",
    end: "4d : 12h : 8m",
    plate: "Plat no. 12345#",
    provider: ["Provided by us", "Automatic", "1600 CC"],
  },
  {
    src: "/images/street/slider-2.jpg",
    bid: "55,000 QAR",
    end: "2d : 05h : 30m",
    plate: "Plat no. 67890#",
    provider: ["Provided by us", "Manual", "2000 CC"],
  },
  {
    src: "/images/street/slider-3.jpg",
    bid: "62,000 QAR",
    end: "6d : 20h : 15m",
    plate: "Plat no. 54321#",
    provider: ["Provided by us", "Automatic", "1800 CC"],
  },
  {
    src: "/images/cars/car-4.jpg",
    bid: "75,000 QAR",
    end: "1d : 14h : 05m",
    plate: "Plat no. 24680#",
    provider: ["Provided by us", "Automatic", "2200 CC"],
  },
  {
    src: "/images/cars/car-2.jpg",
    bid: "75,000 QAR",
    end: "1d : 14h : 05m",
    plate: "Plat no. 24680#",
    provider: ["Provided by us", "Automatic", "2200 CC"],
  },
  {
    src: "/images/cars/car-3.jpg",
    bid: "75,000 QAR",
    end: "1d : 14h : 05m",
    plate: "Plat no. 24680#",
    provider: ["Provided by us", "Automatic", "2200 CC"],
  },
  {
    src: "/images/cars/car-1.jpg",
    bid: "40,000 QAR",
    end: "4d : 12h : 8m",
    plate: "Plat no. 12345#",
    provider: ["Provided by us", "Automatic", "1600 CC"],
  },
  {
    src: "/images/street/slider-2.jpg",
    bid: "55,000 QAR",
    end: "2d : 05h : 30m",
    plate: "Plat no. 67890#",
    provider: ["Provided by us", "Manual", "2000 CC"],
  },
  {
    src: "/images/street/slider-3.jpg",
    bid: "62,000 QAR",
    end: "6d : 20h : 15m",
    plate: "Plat no. 54321#",
    provider: ["Provided by us", "Automatic", "1800 CC"],
  },
  {
    src: "/images/cars/car-4.jpg",
    bid: "75,000 QAR",
    end: "1d : 14h : 05m",
    plate: "Plat no. 24680#",
    provider: ["Provided by us", "Automatic", "2200 CC"],
  },
  {
    src: "/images/cars/car-2.jpg",
    bid: "75,000 QAR",
    end: "1d : 14h : 05m",
    plate: "Plat no. 24680#",
    provider: ["Provided by us", "Automatic", "2200 CC"],
  },
  {
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
                  src={"/icons/frwrd.svg"}
                  alt="forward"
                  width={36}
                  height={36}
                />
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
              <p className="text-[#333333] font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                {car.plate}
              </p>
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cars;
