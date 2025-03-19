import Link from "next/link";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { IoIosArrowBack } from "react-icons/io";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100 dark:bg-[#020617]">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
          The project you're looking for doesn't exist or has been removed.
        </p>
        <Link href="/projects">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-slate-800 bg-slate-100 text-slate-700 dark:text-slate-100 flex items-center mx-auto"
          >
            <IoIosArrowBack className="font-extrabold text-lg mr-1" />
            Back to Projects
          </HoverBorderGradient>
        </Link>
      </div>
    </div>
  );
} 