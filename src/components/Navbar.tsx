"use client";
import React from "react";
import { Squeeze as Hamburger } from "hamburger-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility when the hamburger is clicked
  const handleHamburgerClick = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const menuItems = [
    {
      label: "How It Work",
      link: "/how-it-works",
    },
    {
      label: "The Science",
      link: "/the-science",
    },
    {
      label: "Get Started",
      link: "/get-started",
    },
    {
      label: "Contact",
      link: "/contact",
    },
  ];

  return (
    <header className="bg-white h-[20px] md:h-[64px] flex items-center w-full">
      <nav className="p-3 px-2 md:px-[1.5rem] w-full max-w-[1500px] mx-auto">
        {/* Mobile */}
        <div className="flex justify-between items-center">
          <Link href="/">
              <h1 className="md:text-[24px] text-[7px] font-[700] whitespace-nowrap">Burn my pack</h1>
          </Link>

          <ul className="flex  gap-[11px] md:gap-[1.8rem] items-center">
            {menuItems.map((item, index) => (
              <li key={index} className=" text-[4px] md:text-[16px] whitespace-nowrap">
                <Link
                  className="w-full block  py-3  "
                  href={item.link}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <button className="cursor-pointer">
                <Image className="w-[5px] md:w-[21px] md:h-[25px] h-[6px]" src="/images/navTrash.png" alt="trash" width={30} height={10}/>
            </button>
          </ul>
          <div className="hidden">
            <Hamburger
              toggled={isMenuOpen}
              toggle={handleHamburgerClick}
              size={21}
            />
          </div>
        </div>

        {/* mobile menu */}
        {isMenuOpen && (
          <div className="absolute z-50 bg-white w-full left-0">
            <ul className="text-center divide-y divide-gray-200">
              {menuItems.map((item, index) => (
                <li key={index} className=" text-[15px]">
                  <a
                    className="w-full block  py-3 hover:bg-gray-100 "
                    href={item.link}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};
