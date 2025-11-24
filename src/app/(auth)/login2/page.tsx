// app/auth/page.tsx
"use client";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Image from "next/image";

export default function AuthPage() {
  const [phone, setPhone] = useState("");

  return (
    <div className="flex h-screen bg-[#f4f5f6]">
      {/* Left Section */}
      <div className="relative basis-[40%] hidden md:flex mt-5 ">
        <Image src="/images/street/login.png" alt="Car" fill priority />

        {/* Centered Heading */}
        <div className="relative z-10 flex  pt-45 w-full px-8">
          <h2 className="text-white text-5xl font-bold  leading-snug text-start">
            Best Bidding App <br /> For Cars & Its <br /> Spare Parts
          </h2>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-20 ">
        <h3 className="text-[#666666] text-sm mb-2 font-medium">
          Sign In/Up with your phone number
        </h3>

        <input
          type="tel"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={15}
          placeholder="+974"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-4 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#ee8e31] mb-4"
        />

        <button className="w-full cursor-pointer bg-[#ee8e31]  text-white py-2 rounded-md font-semibold mb-6">
          Next
        </button>

        {/* Divider */}
        <p className="text-center text-sm mb-6 text-[#666666]">
          Or Continue With
        </p>

        {/* Social Buttons */}
        <div className="flex gap-4 mb-6">
          <button className="flex-1 flex items-center justify-center gap-2 bg-white rounded-md py-3 cursor-pointer hover:bg-gray-50">
            <FcGoogle size={20} /> Google
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 bg-white rounded-md py-3 cursor-pointer hover:bg-gray-50">
            <FaApple size={20} /> Apple
          </button>
        </div>

        <p className="text-center text-sm text-[#666666]">
          Continue{" "}
          <a href="#" className="text-[#4C50A2] hover:underline">
            as Guest
          </a>
        </p>
      </div>
    </div>
  );
}
