"use client";
import React from "react";
import Header from "@/components/Header";
import TopHeader from "@/components/home/TopHeader";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="relative h-screen flex flex-col">
      <header>
        {/* TopHeader only on "/" */}
        {pathname === "/" && <TopHeader />}
        <Header />
      </header>

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
}
