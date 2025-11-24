import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#efefef] flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute -top-10  w-full h-full z-10">
        <Image
          src="/images/street/sign up.png"
          alt="image"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Card */}
      <div className="relative w-full max-w-md mx-5 z-10">
        <div className="bg-white rounded-xl shadow-md px-6 py-8">
          {/* Profile Info */}
          <div className="flex items-center gap-4">
            <Image
              src="/images/avatar.png"
              alt="Profile"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <h2 className="text-base font-semibold text-gray-800">
                Farhan Ahmad
              </h2>
              <p className="text-sm text-gray-500">farhan.eg@gail.com</p>
            </div>
          </div>

          {/* Continue Button */}
          <Link href={"/"}>
            <button className="w-full mt-6 bg-[#ee8e31] cursor-pointer text-white font-medium rounded-md py-3 transition">
              Continue as Farhan
            </button>
          </Link>
          {/* Info Text */}
          <p className="text-xs text-gray-500 mt-4 leading-relaxed">
            To continue, google.com will share your name, email address and
            profile picture with this site
          </p>
        </div>
      </div>
    </div>
  );
}
