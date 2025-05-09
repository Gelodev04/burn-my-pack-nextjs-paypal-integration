import React from "react";

import Image from "next/image";
import Link from "next/link";
export const Navbar = () => {
  const menuItems = [
    {
      label: "How It Work",
      link: "/how-it-works",
    },

    {
      label: "Get Started",
      link: "/get-started",
    },
  ];

  return (
    <header className="bg-white h-[50px] md:h-[64px] flex items-center w-full">
      <nav className="p-3 px-2 md:px-[1.5rem] w-full max-w-[1500px] mx-auto">
        {/* LOGO */}
        <div className="flex justify-between items-center">
          <Link href="/">
            <h1 className="md:text-[24px] text-[16px] font-[700] whitespace-nowrap">
              Burn my pack
            </h1>
          </Link>

          {/* NAVLINKS */}
          <ul className="flex  gap-[10px] md:gap-[1.8rem] items-center">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className=" text-[12px] md:text-[16px] whitespace-nowrap"
              >
                <Link className="w-full block   " href={item.link}>
                  {item.label}
                </Link>
              </li>
            ))}
            {/* TRASH */}
            <button className="cursor-pointer">
              <Image
                className="w-[10px] md:w-[21px] md:h-[25px] h-[11px]"
                src="/images/navTrash.png"
                alt="trash"
                width={30}
                height={10}
              />
            </button>
          </ul>
        </div>
      </nav>
    </header>
  );
};
