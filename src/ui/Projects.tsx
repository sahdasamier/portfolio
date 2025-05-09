"use client";
import { getProjects } from "@/api/getProjects";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from "react-icons/fa6";
import { HiViewGridAdd } from "react-icons/hi";
import { MdOpenInNew } from "react-icons/md";
import SkeletonUI2 from "./SkeletonUI2";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { BackgroundBeams } from '@/components/ui/background-beams';
import ScrollProgress from "@/components/ui/scroll-progress";
import { Meteors } from "@/components/ui/meteors";
import { NumberTicker } from "@/components/ui/number-ticker";
import { format } from "date-fns";
import ShineBorder from "@/components/ui/shine-border";
import { ShimmerButton } from "@/components/ui/shimmer-button";

interface ProjectsProps {
  showAll?: boolean;
}

export function Projects({ showAll = false }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
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

  const sortedProjects = data?.project?.sort((a: any, b: any) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateA.getTime() - dateB.getTime();
  }) || [];

  const displayedProjects = showAll ? sortedProjects : sortedProjects.slice(0, 6);

  return (
    <div className="relative flex flex-col-reverse rounded-xl py-16 my-20 pt-20 lg:dark:bg-[#020617] lg:bg-slate-50 lg:pt-0 lg:flex-col lg:pb-0">
      <BackgroundBeams />
      <ScrollProgress className="top-[0px]" />
      <Meteors number={30} />
      <div className="mx-auto max-w-7xl px-2">
        <div className="flex flex-col pb-10 pt-12 md:pt-24">
          <p className="text-3xl font-bold md:text-5xl md:leading-10 mb-8 leading-tight sm:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 from-10% via-cyan-500 via-30% to-sky-500 to-90% lg:z-50">
            Projects & Products
          </p>
          <hr />
          <p className="lg:max-w-4xl text-base md:text-xl mt-8 mb-2">
            Here is some kind of{" "}
            <NumberTicker
              value={data?.project?.length || 0}
              className="whitespace-pre-wrap text-base md:text-xl font-medium tracking-tighter text-black dark:text-white"
            />{" "}
            project&apos;s i have finished.
          </p>
        </div>

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
            {displayedProjects.map((post: any) => (
              <ShineBorder key={post?.id}>
                <div className="group relative border rounded-xl dark:bg-slate-900 bg-slate-100 shadow-md h-full flex flex-col">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={(post?.image ? (post.image.startsWith('/') ? post.image : `/${post.image}`) : "/default-project.png")}
                      className="w-full h-full object-cover rounded-t-xl transform group-hover:scale-105 transition-transform duration-300"
                      width={700}
                      height={500}
                      blurDataURL="blur"
                      placeholder="blur"
                      alt={post?.title || "Project image"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="flex flex-col flex-grow p-3">
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                      #{post.category?.toLocaleLowerCase() || "uncategorized"}
                    </span>
                    <p className="mt-2 text-base font-semibold line-clamp-1" title={post?.title}>
                      {post.title || "Untitled Project"}
                    </p>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 line-clamp-2" title={post?.details}>
                      {post.details || "No description"}
                    </p>
                    {post?.technologies && post.technologies.length > 0 && (
                      <div className="mt-4">
                        <h3 className="text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">Skills:</h3>
                        <div className="flex flex-wrap gap-2">
                          {post.technologies.map((tech: string, index: number) => (
                            <span
                              key={index}
                              className="px-2.5 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-full border border-slate-200 dark:border-slate-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="mt-auto flex items-center p-3 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex items-center space-x-3">
                      <div className="relative h-10 w-10 rounded-full overflow-hidden border-2 border-slate-200 dark:border-slate-700">
                        <Image
                          className="object-cover"
                          src="/sia.jpg"
                          width={40}
                          height={40}
                          blurDataURL="blur"
                          placeholder="blur"
                          alt="Sia.Samier"
                        />
                      </div>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Sia.Samier
                      </span>
                    </div>

                    <div className="ml-auto flex items-center space-x-2">
                      <Link
                        href={post?.sourceCode}
                        target="_blank"
                        className="transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
                      >
                        <HoverBorderGradient
                          containerClassName="rounded-lg"
                          as="button"
                          className="dark:bg-slate-800 bg-slate-200 text-slate-900 dark:text-slate-100 flex items-center space-x-2"
                        >
                          <FaGithub className="font-extrabold text-lg" />
                        </HoverBorderGradient>
                      </Link>
                    </div>
                    {post?.liveLink && (
                      <div>
                        <Link
                          href={post?.liveLink}
                          target="_blank"
                          className="transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
                        >
                          <HoverBorderGradient
                            containerClassName="rounded-lg"
                            as="button"
                            className="dark:bg-indigo-500 bg-indigo-500 text-slate-100 dark:text-slate-100 flex items-center space-x-2"
                          >
                            <MdOpenInNew className="font-extrabold text-lg" />
                          </HoverBorderGradient>
                        </Link>
                      </div>
                    )}
                    <div>
                      <button 
                        onClick={() => {
                          setSelectedProject(post);
                          setIsDetailsOpen(true);
                        }}
                        className="transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
                      >
                        <HoverBorderGradient
                          containerClassName="rounded-lg"
                          as="button"
                          className="dark:bg-slate-800 bg-slate-200 text-slate-900 dark:text-slate-100 flex items-center space-x-2"
                        >
                          <HiViewGridAdd className="font-extrabold text-lg" />
                        </HoverBorderGradient>
                      </button>
                    </div>
                  </div>
                </div>
              </ShineBorder>
            ))}
          </div>
        )}

        {!showAll && sortedProjects.length > 6 && (
          <div className="flex justify-center items-center text-center mt-8">
            <Link href="/projects">
              <ShimmerButton className="bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:text-white dark:hover:bg-indigo-600">
                <span className="whitespace-pre-wrap flex items-center text-center text-sm font-medium leading-none tracking-tight lg:text-base">
                  See More Projects
                </span>
              </ShimmerButton>
            </Link>
          </div>
        )}
      </div>

      {/* Project Details Modal */}
      {isDetailsOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsDetailsOpen(false)}
          />
          
          <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsDetailsOpen(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <IoClose size={24} />
            </button>

            <div className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  className="h-12 w-12 rounded-lg"
                  src="/sia.jpg"
                  width={48}
                  height={48}
                  alt={selectedProject.author || "Author"}
                />
                <div>
                  <p className="text-sm font-semibold">{selectedProject.author}</p>
                 
                </div>
              </div>

              <Image
                src={selectedProject.image || "/default-project.png"}
                alt={selectedProject.title}
                width={800}
                height={400}
                className="w-full rounded-lg object-cover"
              />
              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {selectedProject.title}
                  </h2>
                  <span className="px-3 py-1 text-sm font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-100 rounded-full">
                    {selectedProject.category}
                  </span>
                </div>
                
                <p className="mt-4 text-slate-700 dark:text-slate-300">
                  {selectedProject.details}
                </p>

                {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-white">Skills Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-full border border-slate-200 dark:border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="mt-6 flex gap-4">
                  {selectedProject.sourceCode && (
                    <Link href={selectedProject.sourceCode} target="_blank" className="flex-1">
                      <HoverBorderGradient
                        containerClassName="rounded-lg"
                        as="button"
                        className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 flex items-center w-full"
                      >
                        <FaGithub className="text-lg mr-2" /> GitHub
                      </HoverBorderGradient>
                    </Link>
                  )}
                  {selectedProject.liveLink && (
                    <Link href={selectedProject.liveLink} target="_blank" className="flex-1">
                      <HoverBorderGradient
                        containerClassName="rounded-lg"
                        as="button"
                        className="bg-indigo-500 text-white flex items-center w-full"
                      >
                        <MdOpenInNew className="text-lg mr-2" /> Live Demo
                      </HoverBorderGradient>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function ProjectsPage() {
  return <Projects showAll={true} />;
}
