'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { createDynamicLink } from '@/lib/firebase/dynamicLinks';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../../public/logo.svg';

export function Navbar() {
  const pathname = usePathname();
  const [dynamicLinks, setDynamicLinks] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    async function generateDynamicLinks() {
      const paths = ['/', '/projects', '/about', '/contact'];
      const links: { [key: string]: string } = {};
      
      for (const path of paths) {
        const dynamicLink = await createDynamicLink(path);
        if (dynamicLink) {
          links[path] = dynamicLink;
        }
      }
      
      setDynamicLinks(links);
    }

    generateDynamicLinks();
  }, []);

  const isActive = (path: string) => {
    return pathname === path;
  };

  const getLink = (path: string) => {
    return dynamicLinks[path] || path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md dark:bg-slate-900/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/">
                <Image
                  src={logo}
                  alt="Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                  priority
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <nav className="flex">
                <ul className="flex space-x-8">
                  <li>
                    <Link
                      href={getLink('/')}
                      className={`hover:text-sky-500 dark:hover:text-sky-400 ${
                        isActive('/') ? 'text-sky-500 dark:text-sky-400' : ''
                      }`}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={getLink('/projects')}
                      className={`hover:text-sky-500 dark:hover:text-sky-400 ${
                        isActive('/projects') ? 'text-sky-500 dark:text-sky-400' : ''
                      }`}
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={getLink('/about')}
                      className={`hover:text-sky-500 dark:hover:text-sky-400 ${
                        isActive('/about') ? 'text-sky-500 dark:text-sky-400' : ''
                      }`}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={getLink('/contact')}
                      className={`hover:text-sky-500 dark:hover:text-sky-400 ${
                        isActive('/contact') ? 'text-sky-500 dark:text-sky-400' : ''
                      }`}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 