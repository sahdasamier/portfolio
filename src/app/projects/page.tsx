import { Metadata } from "next";
import { ProjectsPage } from './ProjectsPage';
import { Suspense } from "react";
import SkeletonUI from "@/src/ui/SkeletonUI";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my portfolio of web development projects.",
};

export default function Page() {
  return (
    <Suspense fallback={<SkeletonUI />}>
      <ProjectsPage />
    </Suspense>
  );
}

// Enable dynamic rendering for the projects page
export const dynamic = 'force-dynamic';
