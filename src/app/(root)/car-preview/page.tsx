import React from "react";
import CarPreview from "@/components/general/CarPreview";

function page() {
  return (
    <div className="bg-[#f5f6f4] pb-10 ">
      <CarPreview
        car={{
          id: 1,
          name: "GLC 300 Coupe",
          status: "Ready",
          lastBid: "500 QAR",
          bidder: "anirmohamed",
          timeLeft: "04:12:08",
          images: [
            "/images/cars/car-1.jpg",
            "/images/cars/car-2.jpg",
            "/images/cars/car-3.jpg",
            // "/images/cars/car-4.jpg",
            // "/images/cars/car-5.jpg",
            // "/images/cars/car-6.jpg",
          ],
        }}
      />
    </div>
  );
}

export default page;
