'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
      <div className="max-w-8xl mx-auto">
        <div className="py-4 px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center">
            <Link href="/" className="mr-3 flex-none overflow-hidden md:w-auto">
              <span className="sr-only">Sahda Samier</span>
              <span className="text-xl font-bold">Sahda Samier</span>
            </Link>
            <div className="relative hidden md:flex items-center ml-auto">
              <nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
                <ul className="flex space-x-8">
                  <li>
                    <Link
                      href="/"
                      className={`hover:text-sky-500 dark:hover:text-sky-400 ${
                        isActive('/') ? 'text-sky-500 dark:text-sky-400' : ''
                      }`}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects"
                      className={`hover:text-sky-500 dark:hover:text-sky-400 ${
                        isActive('/projects') ? 'text-sky-500 dark:text-sky-400' : ''
                      }`}
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className={`hover:text-sky-500 dark:hover:text-sky-400 ${
                        isActive('/about') ? 'text-sky-500 dark:text-sky-400' : ''
                      }`}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
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