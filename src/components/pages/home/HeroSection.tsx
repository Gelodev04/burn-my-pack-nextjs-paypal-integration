"use client";

import React from "react";
import { Aright } from "@/components/icons/Aright";

export const HeroSection = () => {
  return (
    <section className="relative w-full h-[calc(100vh-65px)] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/vids/Revision.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional overlay or hero content */}
      <div className="relative z-10 flex flex-col items-center justify-between  h-full text-white text-center text-[13px] px-3 py-13 max-w-[900px] mx-auto">
        <div>
          <h1 className="font-semibold text-[28px] tracking-widest">
            Quit Smoking through Smart Financial Punishment
          </h1>
          <p className="text-[15px] mt-2">
            A proven method that helped me quit smoking 15 years ago
          </p>
        </div>

        <div className="flex flex-col items-center ">
          <div className="text-left text-[15px] bg-white/20 rounded-xl py-[1.5rem] px-[1.6rem] text-white">
            <p>
              I discovered a powerful way to quit smoking: by making it
              financially painful. Every time I slipped and bought a pack, I
              would smoke one cigarette and then throw away the rest - along
              with an extra $10 bill. The pain of losing money became stronger
              than the urge to smoke.
            </p>
            <br />
            <p>
              This method worked so well that I haven't touched a cigarette in
              15 years. Now, I want to share this life-changing technique with
              you.
            </p>
          </div>
          <button className="bg-[#00B894] hover:bg-[hsl(168,100%,41%)] active:bg-[hsl(168,100%,41%)] duration-100 ease-out  mt-6 rounded-[6px] px-4 py-[7px] text-[11.5px] flex items-center gap-2 cursor-pointer">
            <span>Learn More</span>
            <Aright/>
          </button>
        </div>
      </div>

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />
    </section>
  );
};
