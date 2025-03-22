import { ShinyButton } from "@/components/ui/shiny-button";
// import { TextShimmer } from "@/components/ui/text-shimmer";
import Link from "next/link";

export function HireMe() {
  return (
    <section className="relative  py-16 dark:bg-slate-900/30 bg-gray-100/40">
      <div className="flex flex-col text-center items-center justify-center space-y-3 ">
        <h1 className="text-3xl">
          Hire me to build your {""}
          {/* <span className="text-indigo-500">next project</span>! */}
          
            Next Project!
        </h1>
        <p className="lg:max-w-2xl lg:px-0 px-3">
          I have a proven track record of delivering high-quality, efficient,
          and user-friendly web applications.
        </p>
        <Link href="/contact">
          <ShinyButton>Hire me</ShinyButton>
        </Link>
      </div>
    </section>
  );
}
