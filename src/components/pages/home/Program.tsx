import { Paypal } from "@/components/buttons/paypal";
import Image from "next/image";
import React from "react";

export const Program = () => {
  return (
    <section className="px-4 pb-[3rem]">
      <div className="flex flex-col items-center max-w-[600px] mx-auto">
        <h1 className="text-[20px] text-center font-semibold text-color1 mt-[2rem]">
          Join the Program
        </h1>
        <div className="mt-[2rem] flex flex-col items-center bg-[#F8F8F8] py-[2.5rem] px-4 w-full rounded-lg">
          <Image
            className="max-w-[100px] "
            src="/images/trash.png"
            alt="trash"
            width={400}
            height={400}
          />
          <div className="max-w-[500px] mx-auto">
            <h3 className="text-[25px] text-center font-bold text-color1 mt-[2rem] ">
              Ready to Make the Change?
            </h3>
            <p className="text-[10px] text-[#2D2D2DDD] opacity-[86] text-center mt-2 leading-tight">
              Get instant access to our complete guide, tracking tools, and
              community support to help you implement this proven method.
            </p>

            {/* paypal */}
            <div className="mt-10 text-center bg-white py-5 px-4 rounded ">
              <span className="text-[20px] ">$29.99</span>
              <p className="text-[10px] text-color1">
                One-time payment, lifetime access
              </p>
              <Paypal/>
            </div>
          </div>
          </div>

        <div className="text-[#558B2F] bg-[#F1F8E9]  text-[8px] px-4 py-[14] rounded-lg mt-5 flex items-center gap-2">
        <Image
            className="size-3 "
            src="/images/check.png"
            alt="trash"
            width={20}
            height={20}
          />
            <p>"This method saved me thousands of dollars in the long run. The initial losses hurt, but they were exactly what I needed to finally quit." - Michael S., Smoke-free for 2 years</p>
          </div>
      </div>
    </section>
  );
};
