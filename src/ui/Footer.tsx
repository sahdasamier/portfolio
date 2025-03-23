"use client";

import Link from "next/link";
import { Logo } from "@/components/Logo";

const date = new Date();
let year = date.getFullYear();

export function Footer() {
  return (
    <footer className="w-full pt-5 p-2 bg-slate-50/80 dark:bg-slate-900/30 sticky top-[100vh] transition-colors duration-300">
      <div className="mx-auto max-w-7xl items-center lg:justify-between px-4 md:flex lg:px-0 w-11/12 md:w-11/12 lg:w-11/12  xl:container">
        <Link href="/" className="text-2xl font-bold">
          <Logo size={80} />
        </Link>

        <div className="md:mt-0 text-center lg:space-y-0 space-y-5">
          <p className="text-slate-600 dark:text-slate-400">
            © {year}
            <a
              href="https://github.com/Sahdasamier"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sahda Samier Github Profile"
              className="font-bold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 ml-1 mr-1 transition-colors duration-200"
            >
              Sahda Samier.
            </a>
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
