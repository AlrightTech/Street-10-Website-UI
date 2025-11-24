"use client";
import React from "react";
import Image from "next/image";
import { PiClockCounterClockwise } from "react-icons/pi";

const orders = [
  {
    id: 29832,
    status: "Delivered",
    price: "QAR 1200",
    date: "15 June 2022",
    title: "Car GTR 503, art piece by amir.",
    desc: "Lorem ipsum is a dummy text that ...",
    items: "4 Items",
    img: "/images/cars/car-1.jpg",
  },
  {
    id: 29833,
    status: "Pending",
    price: "QAR 2200",
    date: "20 June 2022",
    title: "Car GTR 700, art piece by ali.",
    desc: "Lorem ipsum is a dummy text that ...",
    items: "2 Items",
    img: "/images/cars/car-2.jpg",
  },
  {
    id: 29834,
    status: "Cancelled",
    price: "QAR 1500",
    date: "25 June 2022",
    title: "Car GTR 404, art piece by john.",
    desc: "Lorem ipsum is a dummy text that ...",
    items: "3 Items",
    img: "/images/cars/car-1.jpg",
  },
  {
    id: 29834,
    status: "Pending",
    price: "QAR 1500",
    date: "25 June 2022",
    title: "Car GTR 404, art piece by john.",
    desc: "Lorem ipsum is a dummy text that ...",
    items: "3 Items",
    img: "/images/cars/car-1.jpg",
  },
  {
    id: 29834,
    status: "Delivered",
    price: "QAR 1500",
    date: "25 June 2022",
    title: "Car GTR 404, art piece by john.",
    desc: "Lorem ipsum is a dummy text that ...",
    items: "3 Items",
    img: "/images/cars/car-1.jpg",
  },
  {
    id: 29834,
    status: "Delivered",
    price: "QAR 1500",
    date: "25 June 2022",
    title: "Car GTR 404, art piece by john.",
    desc: "Lorem ipsum is a dummy text that ...",
    items: "3 Items",
    img: "/images/cars/car-1.jpg",
  },
  {
    id: 29834,
    status: "Delivered",
    price: "QAR 1500",
    date: "25 June 2022",
    title: "Car GTR 404, art piece by john.",
    desc: "Lorem ipsum is a dummy text that ...",
    items: "3 Items",
    img: "/images/cars/car-1.jpg",
  },
];

const OrderHistory = () => {
  return (
    <div className="px-4 md:px-8 pt-6 pb-25 bg-gray-100 min-h-screen">
      <h2 className="text-2xl flex items-center gap-3 font-semibold mb-6">
        <PiClockCounterClockwise /> Order History
      </h2>

      {/* ✅ Responsive Table Wrapper */}
      <div className="overflow-x-auto rounded-lg shadow-sm">
        <table className="min-w-[700px] w-full text-left">
          <thead className="bg-white">
            <tr>
              <th className="px-4 py-5 text-nowrap text-sm md:text-base font-semibold text-[#666666]">
                Order Items
              </th>
              <th className="px-4 py-5 text-nowrap text-sm md:text-base font-semibold text-[#666666] text-center">
                Order Id
              </th>
              <th className="px-4 py-5 text-nowrap text-sm md:text-base font-semibold text-[#666666] text-center">
                Status
              </th>
              <th className="px-4 py-5 text-nowrap text-sm md:text-base font-semibold text-[#666666] text-center">
                Price
              </th>
              <th className="px-4 py-5 text-nowrap text-sm md:text-base font-semibold text-[#666666] text-center">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {orders.map((order, i) => (
              <tr key={i} className="even:bg-white odd:bg-gray-50">
                {/* Order Item */}
                <td className="px-4 py-5">
                  <div className="flex gap-3 items-center">
                    <Image
                      src={order.img}
                      alt={order.title}
                      width={80}
                      height={80}
                      className="rounded-md object-cover"
                    />
                    <div className="min-w-[180px]">
                      <p className="text-sm font-medium text-gray-900">
                        {order.title}
                      </p>
                      <p className="text-xs text-gray-600 truncate">
                        {order.desc}
                      </p>
                      <p className="text-xs text-gray-700 mt-1">
                        {order.items}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Order Id */}
                <td className="px-4 py-3 text-center text-sm md:text-base">
                  {order.id}
                </td>

                {/* Status */}
                <td className="px-4 py-3 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs md:text-sm font-medium w-fit mx-auto block
                      ${
                        order.status === "Delivered"
                          ? "text-green-700 bg-green-100"
                          : order.status === "Pending"
                          ? "text-yellow-700 bg-yellow-100"
                          : "text-red-700 bg-red-100"
                      }
                    `}
                  >
                    {order.status}
                  </span>
                </td>

                {/* Price */}
                <td className="px-4 py-3 text-center text-sm md:text-base">
                  {order.price}
                </td>

                {/* Date */}
                <td className="px-4 py-3 text-center text-sm md:text-base">
                  {order.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistory;
