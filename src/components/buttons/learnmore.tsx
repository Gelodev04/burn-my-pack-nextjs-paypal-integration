import React from "react";
import { Aright } from "../icons/Aright";
export const LearnmoreButton = () => {
  return (
    <button className="bg-[#00B894] hover:bg-[hsl(168,100%,41%)] active:bg-[hsl(168,100%,41%)] duration-100 ease-out  mt-3 md:mt-5 rounded-[3px] md:rounded-[8px] md:text-[16px] text-[9px] px-[5px] md:px-[13px] py-[3px] md:py-[8px] flex items-center gap-2 cursor-pointer">
      <span>Learn More</span>
      <Aright size="size-2 lg:size-4" />
    </button>
  );
};
