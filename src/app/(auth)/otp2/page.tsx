"use client";
import { useState, useRef } from "react";
import Image from "next/image";

export default function AuthPage() {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // Only allow digits

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Keep only one digit
    setOtp(newOtp);

    // Move focus to next input
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const otpCode = otp.join("");
    console.log("OTP entered:", otpCode);
    // Add your verification logic here
  };

  return (
    <div className="flex   h-[630] bg-[#f4f5f6]">
      {/* Left Section */}
      <div className="relative basis-[40%] hidden md:flex mt-3">
        <Image src="/images/street/otpImg.png" alt="Car" fill priority />

        <div className="relative z-10 flex pt-55 w-full px-8">
          <h2 className="text-white text-5xl font-bold leading-snug text-start">
            Smart Bidding By <br /> One Click
          </h2>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-20">
        <h1 className="font-semibold text-xl text-black">6 digit code sent!</h1>
        <h3 className="text-[#666666] text-md mb-6 font-semibold mt-2">
          We&apos;ve sent an OTP to your number (XX238), please enter the code
          here
        </h3>

        <div className="flex  justify-between mb-6">
          {otp.map((digit, idx) => (
            <input
              key={idx}
              ref={(el) => {
                inputsRef.current[idx] = el;
              }} // ✅ return void
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(idx, e.target.value)}
              onKeyDown={(e) => handleKeyDown(idx, e)}
              className="w-15 h-15 bg-white text-center border border-[#ffdab7] rounded-md focus:outline-none focus:ring-1 focus:ring-[#ee8e31] text-lg"
            />
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="w-full cursor-pointer bg-[#ee8e31] text-white py-2 rounded-md font-semibold"
        >
          Verify
        </button>
      </div>
    </div>
  );
}
