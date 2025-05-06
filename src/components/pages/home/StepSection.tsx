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
    <section className="px-4 pt-[10rem] pb-[2rem]">
      <div className="space-y-6">
        {stepsData.map((step) => (
          
              <div
                key={step.number}
                className="bg-[#F8F8F8] p-4 rounded-xl flex items-center gap-4 min-h-[145px] "
              >
                <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center px-2 py-1 rounded-full bg-[#00B894] text-color1 font-bold text-sm">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="font-semibold text-color1">{step.title}</h3>
                      <p className="text-[13px] text-color1">{step.description}</p>
                </div>
                </div>
              
          </div>
        ))}
      </div>
    </section>
  );
};
