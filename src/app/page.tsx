import HeroSection from "@/components/Sections/HeroSection";
import NumbersSection from "@/components/Sections/NumbersSection";
import WorkflowSection from "@/components/Sections/WorkflowSection";
import WidthManager from "@/components/WidthManager";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <HeroSection />
      <NumbersSection />
      <WorkflowSection />
    </main>
  );
}
