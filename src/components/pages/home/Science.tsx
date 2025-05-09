import React from 'react'
import Image from 'next/image'

export const ScienceSection = () => {
    const scienceData = [
        {
          icon: "/images/science-icon-1.png",
          title: "Loss Aversion Psychology",
          description:
            "Research shows that the pain of losing money is psychologically twice as powerful as the pleasure of gaining it. This makes financial punishment an extremely effective behavior modification tool.",
        },
        {
          icon: "/images/science-icon-2.png",
          title: "Proven Results",
          description:
            "Studies by the American Economic Association confirm that commitment-deposit programs (where people risk losing money) consistently outperform traditional reward-based systems for breaking habits.",
        },
        {
          icon: "/images/science-icon-3.png",
          title: "My 15-Year Success Story",
          description:
            "After trying numerous methods to quit, this financial punishment approach finally worked. I haven't smoked in 15 years, proving its long-term effectiveness.",
        },
      ];
      

  return (
    <section className='py-7 px-4'>
        <h1 className='text-center text-[16px] font-bold text-[#2D2D2D]'>The Science Behind Financial Punishment</h1>

        <ul className='mt-9 flex lg:flex-row flex-col gap-[2rem] max-w-[250px] mx-auto '>
            {scienceData.map((item, index) => (
                <li key={index} className='flex flex-col  gap-2 bg-[#F8F8F8] pt-[2.2rem] px-[2rem] pb-[2.2rem]  rounded-lg'>
                    <Image className='w-[34px] h-[31px]' src={item.icon} alt={item.title} width={50} height={50} />
                    <div className='space-y-2 mt-1'>
                        <h2 className='text-[14px] font-bold text-[#232323] '>{item.title}</h2>
                        <p className='text-[12px] text-[#232323] '>{item.description}</p>
                    </div>
                </li>
            ))}
        </ul>
    </section>
  )
}
