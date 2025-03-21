import { FeatureThree } from '@/src/ui/FeatureThree';
import HeroSection from '@/src/ui/HeroSection';
import HireMe from '@/src/ui/HireMe/HireMe';
import { Projects } from '@/src/ui/Projects';
import { Metadata } from 'next';
import metaData from '@/src/data/metadata.json';

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
