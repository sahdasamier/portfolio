import { ShinyButton } from "@/components/ui/shiny-button";
import { TextShimmer } from "@/components/ui/text-shimmer";
import Link from "next/link";

export function HireMe() {
  return (
    <section className="relative py-16 bg-slate-50/80 dark:bg-slate-900/30 transition-colors duration-300">
      <div className="flex flex-col text-center items-center justify-center space-y-3">
        <h1 className="text-3xl text-slate-900 dark:text-white">
          Hire me to build your{" "}
          {/* <span className="text-indigo-500">next project</span>! */}
          <TextShimmer
            duration={2.5}
            className="text-3xl font-medium [--base-color:theme(colors.indigo.600)] [--base-gradient-color:theme(colors.indigo.200)] dark:[--base-color:theme(colors.indigo.400)] dark:[--base-gradient-color:theme(colors.indigo.600)]"
          >
            Next Project!
          </TextShimmer>
        </h1>
        <p className="lg:max-w-2xl lg:px-0 px-3 text-slate-600 dark:text-slate-300">
          I have a proven track record of delivering high-quality, efficient,
          and user-friendly web applications.
        </p>
        <Link href="/contact">
          <ShinyButton className="bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:text-white dark:hover:bg-indigo-600">
            Hire me
          </ShinyButton>
        </Link>
      </div>
    </section>
  );
}
