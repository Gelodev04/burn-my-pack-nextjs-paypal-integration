"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "./icons/Menu";
import { Trash } from "./icons/Trash";
import { useState } from "react";
export const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);


  const menuItems = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "How It Works",
      link: "/how-it-works",
    },

    {
      label: "Get Started",
      link: "/get-started",
    },
  ];

  const loginOptions = [
    {
      label: "Sign in with Google",
      icon: (
        <svg
          className="size-4 md:size-[20px]"
          viewBox="-3 0 262 262"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
              fill="#4285F4"
            ></path>
            <path
              d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
              fill="#34A853"
            ></path>
            <path
              d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
              fill="#FBBC05"
            ></path>
            <path
              d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
              fill="#EB4335"
            ></path>
          </g>
        </svg>
      ),
    },
    {
      label: "Sign in with Apple",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 md:size-[24px]"
          width="100"
          height="100"
          viewBox="0 0 30 30"
        >
          <path d="M25.565,9.785c-0.123,0.077-3.051,1.702-3.051,5.305c0.138,4.109,3.695,5.55,3.756,5.55 c-0.061,0.077-0.537,1.963-1.947,3.94C23.204,26.283,21.962,28,20.076,28c-1.794,0-2.438-1.135-4.508-1.135 c-2.223,0-2.852,1.135-4.554,1.135c-1.886,0-3.22-1.809-4.4-3.496c-1.533-2.208-2.836-5.673-2.882-9 c-0.031-1.763,0.307-3.496,1.165-4.968c1.211-2.055,3.373-3.45,5.734-3.496c1.809-0.061,3.419,1.242,4.523,1.242 c1.058,0,3.036-1.242,5.274-1.242C21.394,7.041,23.97,7.332,25.565,9.785z M15.001,6.688c-0.322-1.61,0.567-3.22,1.395-4.247 c1.058-1.242,2.729-2.085,4.17-2.085c0.092,1.61-0.491,3.189-1.533,4.339C18.098,5.937,16.488,6.872,15.001,6.688z"></path>
        </svg>
      ),
    },
    {
      label: "Sign in with Facebook",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          className="size-[20px] md:size-[24px]"
          viewBox="0 0 48 48"
        >
          <path
            fill="#039be5"
            d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
          ></path>
          <path
            fill="#fff"
            d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
          ></path>
        </svg>
      ),
    },
    {
      label: "Sign in with Twitter",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          className="size-[20px] md:size-[24px]"
          viewBox="0 0 48 48"
        >
          <path
            fill="#03A9F4"
            d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
          ></path>
        </svg>
      ),
    },
    {
      label: "Sign in with LinkedIn",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px" 
          className="size-5 md:size-[24px]"
          viewBox="0 0 48 48"
        >
          <path
            fill="#0288D1"
            d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
          ></path>
          <path
            fill="#FFF"
            d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
          ></path>
        </svg>
      ),
    },
  ];

  return (
    <>
      <header className="bg-white h-[50px] md:h-[64px] flex items-center w-full">
        <nav className="p-3 px-2 md:px-[1.5rem] w-full max-w-[1500px] mx-auto flex justify-between items-center">
          {/* MOBILE MENU */}
          <button className="md:hidden" onClick={() => setIsSidebarOpen(true)}>
            <Menu />
          </button>
          {/* LOGO */}
          <Link href="/">
            <h1 className="md:text-[24px] text-[16px] font-[700] whitespace-nowrap">
              Burn my pack
            </h1>
          </Link>
          {/* DESKTOP NAVLINKS */}
          <div className="flex gap-[5rem]">
            <ul className="md:flex  gap-[10px] md:gap-[1.8rem] items-center  hidden">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className=" text-[12px] md:text-[16px] whitespace-nowrap "
                >
                  <Link
                    className="w-full block hover:underline    "
                    href={item.link}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {/* TRASH */}
            </ul>
            <button
              onClick={() => setShowLoginModal((prev) => !prev)}
              className="cursor-pointer"
            >
              <Trash />
            </button>
          </div>
        </nav>
      </header>

      {/* dropdown */}
      <aside
        className={`fixed top-0  w-full bg-white z-[999] transform ${
          isSidebarOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out shadow-lg`}
      >
        <div className="p-4   font-bold text-lg flex justify-end items-center ">
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-xl cursor-pointer"
          >
            ✕
          </button>
        </div>
        <ul className="p-4 space-y-5 pb-5">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                onClick={() => setIsSidebarOpen(false)}
                className="block text-[#232323] text-base font-medium hover:underline"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {showLoginModal && (
        <div className="absolute z-50  mt-5  right-0 ">
          <div className="bg-white w-[90%] mx-auto max-w-sm rounded-xl shadow-xl p-6 relative slide-fade">
            
            <h2 className="text-[26px] font-bold mb-4 text-start">Welcome! 👋</h2>
            <div className="space-y-4">
              {loginOptions.map((option, index) => (
                <button
                  key={index}
                  className="relative w-full px-4 py-3 border border-[#D0D5DD] rounded-md text-[14px] text-[#344054] hover:bg-gray-200 cursor-pointer "
                >
                  {/* Icon on the left */}
                  <span className="absolute left-4 top-1/2 -translate-y-1/2">
                    {option.icon}
                  </span>

                  {/* Centered label */}
                  <span className="block text-center w-full font-[550] font-inter">
                    {option.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
