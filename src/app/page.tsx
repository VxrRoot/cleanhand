import HeroSection from "@/components/Sections/HeroSection";
import NumbersSection from "@/components/Sections/NumbersSection";
import RealizationsSection from "@/components/Sections/RealizationsSection";
import WorkflowSection from "@/components/Sections/WorkflowSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <HeroSection />
      <NumbersSection />
      <WorkflowSection />
      <RealizationsSection />
    </main>
  );
}
