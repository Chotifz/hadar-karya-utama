"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Burger from "./Burger";
import iconWa from "@/public/logo-wa.png";
import Image from "next/image";

export default function Navbar({
  onScrollHero,
  onScrollProduct,
  onScrollService,
}) {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleMobileClick = (scrollFunction) => {
    scrollFunction();
    setIsActive(false); // Close the mobile menu after click
  };

  return (
    <div className="relative shadow-md">
      <nav className="relative max-w-7xl mx-auto py-[7px] px-6 md:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-base md:text-lg font-semibold flex items-center gap-3 md:gap-4"
            >
              <img
                className="w-14 h-[26px] md:w-[68px] md:h-[32px]"
                src="/hku.png"
                alt="Logo"
              />
              <h1>Hadar Karya Utama</h1>
            </Link>
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-center text-lg space-x-4 text-gray-700 font-semibold">
              <li className={pathname === "/" ? "text-green-400" : ""}>
                <a onClick={onScrollHero} className="cursor-pointer">
                  Beranda
                </a>
              </li>
              <li className={pathname === "/product" ? "text-green-400" : ""}>
                <a onClick={onScrollProduct} className="cursor-pointer">
                  Produk
                </a>
              </li>
              <li className={pathname === "/services" ? "text-green-400" : ""}>
                <a onClick={onScrollService} className="cursor-pointer">
                  Layanan
                </a>
              </li>
              <a
                href="https://wa.me/+6282278639085"
                className="flex py-2.5 px-6 rounded-full bg-green-500 text-white text-base gap-2"
              >
                <Image
                  src={iconWa}
                  alt="service-logo"
                  className="w-[20px] md:w-[25px]"
                />
                <h1>Contact</h1>
              </a>
            </ul>
          </div>
          <Burger handleClick={handleClick} isActive={isActive} />
        </div>
      </nav>
      <div
        className={`w-full lg:hidden transition-all duration-500 bg-white transform absolute top-[78px] ${
          isActive ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden ease-in-out z-10`}
      >
        <div className="pb-2 space-y-1 tracking-wide text-[14px] text-gray-700 font-semibold">
          <div className="border-t p-3.5 px-8 block">
            <button onClick={() => handleMobileClick(onScrollHero)}>
              Beranda
            </button>
          </div>
          <div className="border-t">
            <button
              onClick={() => handleMobileClick(onScrollProduct)}
              className={`p-3.5 px-8 block ${
                pathname === "/product" ? "text-green-400" : ""
              }`}
            >
              Produk
            </button>
          </div>
          <div className="border-t">
            <button
              onClick={() => handleMobileClick(onScrollService)}
              className={`p-3.5 px-8 block ${
                pathname === "/services" ? "text-green-400" : ""
              }`}
            >
              Layanan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
