'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiViewGridAdd } from 'react-icons/hi';
import { MdOpenInNew } from 'react-icons/md';
import { HoverBorderGradient } from '@/src/components/ui/hover-border-gradient';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '@/src/lib/firebase/config';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  liveLink?: string;
  sourceCode?: string;
  createdAt: string;
}

export function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const projectsRef = collection(db, 'projects');
        const q = query(projectsRef, orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        
        const fetchedProjects = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Project[];

        setProjects(fetchedProjects);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-100 dark:bg-[#020617] pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">Loading projects...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-[#020617] pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex space-x-3">
                  {project.liveLink && (
                    <Link href={project.liveLink} target="_blank">
                      <HoverBorderGradient
                        containerClassName="rounded-lg"
                        as="button"
                        className="dark:bg-indigo-500 bg-indigo-500 text-white flex items-center space-x-2 px-4 py-2"
                      >
                        <MdOpenInNew className="text-lg" />
                        <span>Live</span>
                      </HoverBorderGradient>
                    </Link>
                  )}
                  <Link href={`/project/${project.id}`}>
                    <HoverBorderGradient
                      containerClassName="rounded-lg"
                      as="button"
                      className="dark:bg-slate-700 bg-slate-100 text-slate-900 dark:text-white flex items-center space-x-2 px-4 py-2"
                    >
                      <HiViewGridAdd className="text-lg" />
                      <span>Details</span>
                    </HoverBorderGradient>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 