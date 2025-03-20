import { FeatureThree } from "@/ui/FeatureThree";
import HeroSection from "@/ui/HeroSection";
import HireMe from "@/ui/HireMe/HireMe";
import { Projects } from "@/ui/Projects";
import { Metadata } from "next";
import metaData from "@/data/metadata.json";

export const metadata: Metadata = {
  title: metaData.title,
  description: metaData.description,
  keywords: metaData.keywords,
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <FeatureThree />
      <Projects />
      <HireMe />
    </main>
  );
}
