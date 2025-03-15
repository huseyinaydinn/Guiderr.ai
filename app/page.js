import About from "@/components/About/About";
import FAQs from "@/components/FAQs/FAQs";
import Features from "@/components/Features/Features";
import Hero from "@/components/Hero/Hero";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import SubSection from "@/components/SubSection/SubSection";
import { Lora } from "next/font/google";

const fontLora = Lora({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About fontLora={fontLora} />
      <Features />
      <HowItWorks fontLora={fontLora} />
      <FAQs fontLora={fontLora} />
      <SubSection fontLora={fontLora} />
    </div>
  );
}
