import Image from "next/image";
import { PaypalButton } from "@/components/buttons/paypal";

export default function TrashPage() {
  return (
    <main>
      <section className="background  px-3 py-[3rem] md:py-[5rem]">
        <div className="bg-white rounded-[10px] md:rounded-[20px] p-[12px] md:max-w-[640px] max-w-[500px] mx-auto md:pb-[1.8rem]">
          <Image
            className="w-[120px] h-[120px] md:w-[196px] md:h-[197px] mx-auto object-contain"
            src="/images/Vector.png"
            alt="trash can"
            width={200}
            height={200}
          />
          <div className="text-center mt-6 space-y-2 md:px-5">
            <h3 className="text-[20px] md:text-[30px] text-[#2D2D2D] font-[700]">
              Ready to Make the Change?
            </h3>
            <p className="text-[12px] md:text-[16px] text-[#2D2D2DDD]">
              Get instant access to our complete guide, tracking tools, and
              community support to help you implement t his proven method.
            </p>
          </div>
          {/* PAYMENT */}
          <div className="mt-1 text-center  py-5  rounded md:px-5">
            <div className="flex justify-center items-center">
              <span className="text-[20px] md:text-[24px] text-[#00B894]">
                $10.00
              </span>
              <div className="relative w-[100px]  ml-2">
                <input
                  type="number"
                  min={0}
                  className=" pl-5 border border-[#808080] rounded-[8px]  py-1 w-full"
                />
                <div className="absolute left-2 top-1/2 -translate-y-1/2 text-[18px]pointer-events-none">
                  $
                </div>
              </div>
            </div>
            <p className="text-[11px] md:text-[16px] text-black mt-2">
              One-time payment, lifetime access
            </p>
            <PaypalButton />
          </div>
        </div>
      </section>
    </main>
  );
}
