import React from "react";
import Image from "next/image";

export const PaypalButton = () => {
  return (
    <button className="bg-[#00B894] hover:bg-[hsl(168,100%,41%)] active:bg-[hsl(168,100%,41%)] text-black text-[9px] md:text-[16px] w-full py-2 font-semibold rounded-lg mt-3 flex  items-center justify-center gap-2 cursor-pointer">
      <Image src="/images/paypal.png" alt="paypal logo" width={15} height={15} />
      <span>Pay with Paypal</span>
    </button>
  );
};
