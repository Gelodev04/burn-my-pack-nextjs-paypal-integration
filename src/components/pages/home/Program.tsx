import Image from "next/image";
import React from "react";

export const Program = () => {
  return (
    <section className="px-4">
      <div className="flex flex-col items-center">
        <h1 className="text-h2 text-center font-semibold text-color1 mt-[2rem]">
          Join the Program
        </h1>
        <div className="mt-[3rem] flex flex-col items-center bg-[#F8F8F8] py-[2.5rem] px-4">
          <Image
            className="max-w-[130px] "
            src="/images/trash.png"
            alt="trash"
            width={400}
            height={400}
          />
          <div>
            <h3 className="text-h2 text-center font-semibold text-color1 mt-[2rem]">
              Ready to Make the Change?
            </h3>
            <p className="text-[13px] text-[#2D2D2DDD] opacity-[86] text-center mt-2">
              Get instant access to our complete guide, tracking tools, and
              community support to help you implement this proven method.
            </p>

            {/* paypal */}
            <div className="mt-10 text-center bg-white py-4 px-2 rounded">
              <span className="text-[19px] ">$29.99</span>
              <p className="text-[13px] text-color1">
                One-time payment, lifetime access
              </p>
              <button className="bg-[#00B894] text-black text-[12px] w-full py-2 font-semibold rounded-lg mt-3 flex  items-center justify-center gap-2">
                <Image src="/images/paypal.png" alt="paypal" width={15} height={15} />
                <span>Pay with Paypal</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
