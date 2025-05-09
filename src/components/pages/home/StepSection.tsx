import Image from "next/image";
import React from "react";

export const StepSection = () => {
  const stepsData = [
    {
      number: 1,
      title: "Make the Commitment",
      description:
        "Declare to yourself that you're ready to quit smoking. This isn't just another attempt – this is your final decision.",
    },
    {
      number: 2,
      title: "Set Your Punishment Rules",
      description:
        "Decide on your financial penalty. When you slip and buy a pack, you'll smoke one cigarette, then throw away the rest of the pack plus an additional sum of money.",
    },
    {
      number: 3,
      title: "Make the ComExecute the Planmitment",
      description:
        "If you slip and smoke, immediately follow through with the punishment. No exceptions. The financial loss must be real and immediate.",
    },
    {
      number: 4,
      title: "Track Your Progress",
      description:
        "Keep a record of each slip-up and punishment. You'll notice the frequency decreasing as your brain associates smoking with financial loss.",
    },
  ];

  return (
    <section className="px-4 py-[2rem] ">
      <h1 className="text-center text-[16px] md:text-[30px] font-bold text-[#2D2D2D]">The Step-by-Step process</h1>
      <div className="max-w-[1000px] mx-auto mt-[2rem]">
          <div className="space-y-6">
            {stepsData.map((step) => (
          
                  <div
                    key={step.number}
                    className="bg-[#F8F8F8] p-4 md:px-[20px]  rounded-[8px] flex items-center gap-4 min-h-[65px] md:h-[148px] "
                  >
                    <div className="flex items-start gap-4 leading-tight">
                        <div className="flex items-center justify-center px-[4] md:px-[6] py-[3] rounded-full bg-[#00B894] text-color1 font-bold text-[7px] md:text-[16px]">
                          {step.number}
                        </div>
                        <div>
                          <h3 className="font-semibold text-color1 text-[8px] md:text-[20px]">{step.title}</h3>
                          <p className="text-[7px] md:text-[16px] text-color1 mt-2">{step.description}</p>
                    </div>
                    </div>
          
              </div>
            ))}
          </div>
          <div className="text-[#EF5050] bg-[#FFEBEE] text-[7px] md:text-[16px] px-4 py-[14] rounded-lg mt-5 flex items-center gap-2">
            <span>
                <Image className="md:w-[24px]" src="/images/danger.png" alt="danger" width={20} height={20}/>
            </span>
            <p>Important: This method works because of real financial consequences. Don't cheat yourself by skipping the punishment - it's essential for rewiring your brain's response to smoking.</p>
          </div>
      </div>
    </section>
  );
};
