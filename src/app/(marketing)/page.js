import ContactSection from "@/components/home-sections/ContactSection";
import GroundProblemSection from "@/components/home-sections/GroundProblem";
import Hero from "@/components/home-sections/Hero";
import LabSection from "@/components/home-sections/LabSection";
import FounderSection from "@/components/home-sections/FounderSection";
import { ProjectsSection } from "@/components/home-sections/ProjectsSection";
import SolutionsSection from "@/components/home-sections/SolutionsSection";

export const metadata = {
  title: "Fapos West Africa",
  description: "",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <GroundProblemSection />
      <FounderSection />
      <SolutionsSection />
      <ProjectsSection />
      <LabSection />
      <ContactSection />
    </main>
  );
}
