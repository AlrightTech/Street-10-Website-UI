import Image from "next/image";
import React from "react";
import { TbArrowBackUp } from "react-icons/tb";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#efefef] flex items-center justify-center relative overflow-hidden">
      {/* <div className="min-h-screen flex items-center justify-center bg-[#ffffff] relative overflow-hidden"> */}
      {/* Background wave shapes */}
      {/* Background wave shapes */}
      <div className="absolute -top-10 bg-[#efefef] w-full h-full z-10">
        <Image
          src="/images/street/build-your-account.png"
          alt="image"
          fill
          // className="object-cover"
          priority
        />
      </div>

      {/* Main form container */}
      <div className="relative px-8 mt-10 pb-5 w-full mx-5 z-10">
        <TbArrowBackUp
          size={20}
          color="black"
          className="ms-2 cursor-pointer my-2"
        />

        {/* Title */}
        <h2 className="text-2xl font-semibold text-[#333333] mb-2">
          Let&apos;s build your account
        </h2>
        <p className="text-[#333333] text-sm mb-5">
          Provide some info to complete your account info
        </p>

        {/* Form */}
        <form className="space-y-6 bg-white rounded-xl shadow-md py-6 px-10">
          {/* Basic Info */}
          <h3 className="text-lg font-semibold text-[#333333]">Basic Info</h3>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full rounded-md px-4 py-3 bg-[#f4f5f6] focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Contact Person
            </label>
            <input
              type="text"
              placeholder="Enter Contact Person's Name"
              className="w-full rounded-md px-4 py-3 bg-[#f4f5f6] focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              placeholder="fahmad898@gmail.com"
              className="w-full rounded-md px-4 py-3 bg-[#f4f5f6] focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              className="w-full rounded-md px-4 py-3 bg-[#f4f5f6] focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
          </div>

          {/* Business Details */}
          <h3 className="text-lg font-semibold text-[#333333]">
            Business Details
          </h3>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Business Name
            </label>
            <input
              type="text"
              placeholder="Enter Your Business Name"
              className="w-full rounded-md px-4 py-3 bg-[#f4f5f6] focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Business Address
            </label>
            <input
              type="text"
              placeholder="Enter Business Address"
              className="w-full rounded-md px-4 py-3 bg-[#f4f5f6] focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">City</label>
              <input
                type="text"
                placeholder="Enter City Name"
                className="w-full rounded-md px-4 py-3 bg-[#f4f5f6] focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">State</label>
              <input
                type="text"
                placeholder="Enter State"
                className="w-full rounded-md px-4 py-3 bg-[#f4f5f6] focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Zip</label>
              <input
                type="text"
                placeholder="Enter Zip"
                className="w-full rounded-md px-4 py-3 bg-[#f4f5f6] focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Country
              </label>
              <input
                type="text"
                placeholder="Enter Country"
                className="w-full rounded-md px-4 py-3 bg-[#f4f5f6] focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Business Type
              </label>
              <input
                type="text"
                placeholder="Enter Business Type"
                className="w-full rounded-md px-4 py-3 bg-[#f4f5f6] focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Tax ID</label>
              <input
                type="text"
                placeholder="Enter Tax ID"
                className="w-full rounded-md px-4 py-3 bg-[#f4f5f6] focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-[#ee8e31] font-semibold cursor-pointer text-white px-6 py-2 rounded-md"
            >
              Create Vander Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
