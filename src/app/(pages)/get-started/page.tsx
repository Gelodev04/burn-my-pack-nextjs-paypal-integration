import { PaypalButton } from "@/components/buttons/paypal";
export default function GetStartedPage() {
  return (
    <section className="background px-3 py-10 md:py-[4rem]">
      <div className="md:max-w-[700px] max-w-[500px] mx-auto">
        <div className="text-center text-white">
          {/* HELLO USER */}
          <h1 className="text-[30px] md:text-[50px] ">Hello Nandani 👋</h1>
          <p className="text-[14px] md:text-[18px] mt-2">
            Now you Know how it works. Let’s follow through
          </p>
        </div>
        {/* STEP 1 */}
        <div className="bg-white rounded-[10px] px-3 md:px-4 py-3 md:py-5 mt-8 md:mt-10 ">
          <div className="space-y-3">
            <h6 className=" font-bold text-[18px] md:text-[30px]">Step 1</h6>
            <p className="font-bold text-[14px] md:text-[20px]">
              Burn Your Last Cigarette. Push Your Cash Forward. Break the Habit for
              Good.
            </p>
            <p className="text-[12px] text-[#808080] md:text-[14px]">
              Smoke your last cigarette and come back here and make pledge and
              initiate by "paying" or "losing" or "pushing" your cash . and do not
              forget to consciously associate it with negative emotions.,
            </p>
          </div>
          <div className="mt-5 text-center bg-[#EEEEEE] py-5 px-4 rounded md:pb-[1.5rem]">
            <span className="text-[20px] md:text-[24px] text-[black]">
              $29.99
            </span>
            <p className="text-[11px] md:text-[16px] text-black">
              One-time payment, lifetime access
            </p>
            <PaypalButton />
          </div>
        </div>
        {/* STEP2 */}
        <div className="bg-white rounded-[10px] px-3 md:px-4 py-3 md:py-5 mt-8">
          <div className="space-y-3">
            <h6 className=" font-bold text-[18px] md:text-[30px]">Step 2</h6>
            <p className="font-bold text-[14px] md:text-[20px]">
              Broke Your Auth? Smoked Your Chance? Burn Your Cash Here.
            </p>
            <p className="text-[12px] text-[#808080] md:text-[14px]">
              it says you broke your auth and smoked? Throw away your cash here. Made a mess of your setup? Perfect—this is where broken auth meets broken bank. Whether you smoked your stack or just love burning cash, you’re in the right place.
            </p>
          </div>
          <div className="mt-5 text-center bg-[#EEEEEE] py-5 px-4 rounded md:pb-[1.5rem]">
             <div className="flex justify-center items-center">
              <span className="text-[20px] md:text-[24px] text-[#00B894]">
                $10.00
              </span>
              <div className="relative w-[100px]  ml-2">
                <input
                  type="number"
                  className=" pl-5 border border-[#808080] rounded-[8px]  py-1 w-full"
                />
                <div className="absolute left-2 top-1/2 -translate-y-1/2 text-[18px]pointer-events-none text-[#00B894]">
                  $
                </div>
              </div>
            </div>
            <p className="text-[11px] md:text-[16px] text-black">
              One-time payment, lifetime access
            </p>
            <PaypalButton />
          </div>
        </div>
      </div>
    </section>
  );
}
