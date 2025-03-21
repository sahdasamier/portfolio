"use client";
import { getProjects } from '@/src/api/getProjects';
import { HoverBorderGradient } from '@/src/components/ui/hover-border-gradient';
import { RainbowButton } from '@/src/components/ui/rainbow-button';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from "react-icons/fa6";
import { HiViewGridAdd } from "react-icons/hi";
import { MdOpenInNew } from "react-icons/md";
import SkeletonUI2 from "./SkeletonUI2";

import { useQuery } from "@tanstack/react-query";

export function Projects() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
    staleTime: 60000,
  });

  if (isError) {
    console.error('Error loading projects:', error);
    return (
      <div className="bg-slate-100 dark:bg-[#020617] py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 from-10% via-violet-500 via-30% to-sky-500 to-90%">
            My Projects
          </h2>
          <p className="mt-4 text-base leading-relaxed">
            Unable to load projects at this time. Please try again later.
          </p>
        </div>
      </div>
    );
  }

  // Sort projects based on title to match migration file order
  const projectOrder = [
    "What's Cookin'",
    "Linked trust",
    "Magdi Yacoub Heart Foundation",
    "Decentralized_linkedin",
    "Tic Tac Toe",
    "In Symphony",
    "Task Canvas: Your Daily Masterpiece",
    "Quill Quotient"
  ];

  const sortedProjects = data?.project?.sort((a: any, b: any) => {
    const indexA = projectOrder.indexOf(a.title);
    const indexB = projectOrder.indexOf(b.title);
    return indexA - indexB;
  }) || [];

  const post = sortedProjects.slice(0, 6);

  return (
    <div className="bg-slate-100 dark:bg-[#020617]">
      <div className="max-w-7xl mx-auto py-20 flex flex-col items-center justify-center px-4 lg:px-6">
        <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 from-10% via-violet-500 via-30% to-sky-500 to-90%">
          My Projects
        </h2>
        <p className="mt-4 text-base leading-relaxed">
          Here are some of my projects I have done.
        </p>

        {isLoading ? (
          <div className="grid gap-6 py-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl mx-auto">
            <SkeletonUI2 />
            <SkeletonUI2 />
            <SkeletonUI2 />
            <SkeletonUI2 />
            <SkeletonUI2 />
            <SkeletonUI2 />
          </div>
        ) : (
          <div className="grid gap-6 py-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl mx-auto">
            {post.map((post: any) => (
              <div
                key={post?.id}
                className="group relative border rounded-xl dark:bg-slate-900 bg-slate-100 shadow-md"
              >
                <Image
                  src={(post?.image ? (post.image.startsWith('/') ? post.image : `/${post.image}`) : "/default-project.png")}
                  className="aspect-video w-full rounded-t-xl"
                  width={700}
                  height={500}
                  blurDataURL="blur"
                  placeholder="blur"
                  alt={post?.title || "Project image"}
                />
                <div className="min-h-min p-3">
                  #{post.category?.toLocaleLowerCase() || "uncategorized"}
                  <p className="mt-4 flex-1 text-base font-semibold" title={post?.title}>
                    {post.title?.length > 40
                      ? post.title.substring(0, 38).concat("...")
                      : post.title || "Untitled Project"}
                  </p>
                  <p className="mt-2 w-full text-sm leading-normal" title={post?.details}>
                    {post.details?.length > 150
                      ? post.details.substring(0, 150).concat("...")
                      : post.details || "No description"}
                  </p>
                </div>
                <div className="absolute inset-x-0 bottom-3 flex justify-center items-center space-x-2 transition-all duration-300 opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0">
                  <div>
                    <Link href={post?.sourceCode} target="_blank" className="flex gap-x-1 items-center">
                      <HoverBorderGradient
                        containerClassName="rounded-lg"
                        as="button"
                        className="dark:bg-slate-800 bg-slate-100 text-slate-700 dark:text-slate-100 flex items-center space-x-2"
                      >
                        <FaGithub className="font-extrabold text-lg mr-1" /> GitHub
                      </HoverBorderGradient>
                    </Link>
                  </div>
                  {post?.liveLink && (
                    <div>
                      <Link href={post?.liveLink} target="_blank">
                        <HoverBorderGradient
                          containerClassName="rounded-lg"
                          as="button"
                          className="dark:bg-indigo-500 bg-slate-100 text-slate-700 dark:text-slate-100 flex items-center space-x-2"
                        >
                          <MdOpenInNew className="font-extrabold text-lg mr-1" /> Live
                        </HoverBorderGradient>
                      </Link>
                    </div>
                  )}
                  <div>
                    <Link href={`/project/${post.id}`} className="flex gap-x-1 items-center">
                      <HoverBorderGradient
                        containerClassName="rounded-lg"
                        as="button"
                        className="dark:bg-slate-800 bg-slate-100 text-slate-700 dark:text-slate-100 flex items-center space-x-2"
                      >
                        <HiViewGridAdd className="font-extrabold text-lg mr-1" /> Details
                      </HoverBorderGradient>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-center items-center text-center">
          <Link href="/projects">
            <RainbowButton>More Projects</RainbowButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
