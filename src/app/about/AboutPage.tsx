'use client';

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Image from 'next/image';
import Link from 'next/link';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-slate-900 dark:text-white">
            About Me
          </h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <TextGenerateEffect words="Hi, I'm Sahda Samier, a passionate full-stack developer with a focus on creating beautiful and functional web applications." />
            
            <div className="mt-8 space-y-6">
              <p>
                I specialize in modern web technologies including React, Next.js, Node.js, and various cloud platforms. 
                My journey in software development has been driven by a desire to build solutions that make a real impact.
              </p>
              
              <p>
                With experience in both frontend and backend development, I enjoy tackling complex problems and turning them into simple, elegant solutions. 
                I'm particularly interested in creating performant, accessible, and user-friendly applications.
              </p>
              
              <h2 className="text-2xl font-bold mt-12 mb-6">My Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Frontend Development</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Backend Development</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>Firebase</li>
                  </ul>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mt-12 mb-6">Get in Touch</h2>
              <p>
                I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just want to connect, feel free to reach out!
              </p>
              
              <div className="mt-8">
                <Link href="/contact">
                  <HoverBorderGradient
                    containerClassName="rounded-lg"
                    className="inline-block px-6 py-3 bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                  >
                    Contact Me
                  </HoverBorderGradient>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 