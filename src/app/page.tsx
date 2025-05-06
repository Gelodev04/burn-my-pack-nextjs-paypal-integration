import { HeroSection } from "@/components/pages/home/HeroSection";
import { Program } from "@/components/pages/home/Program";
import Science from "@/components/pages/home/Science";
import { StepSection } from "@/components/pages/home/StepSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <HeroSection/>
      <Science/>
      <StepSection/>
      <Program/>
      <div className="h-screen"></div>
    </main>
  );
}
