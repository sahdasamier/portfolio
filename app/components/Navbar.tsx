"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../../public/logo.svg';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="Logo" width={40} height={40} className="w-10 h-10" />
            <span className="ml-2 text-xl font-bold text-slate-900 dark:text-white">Sahda Samier</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`text-sm font-medium transition-colors ${
                pathname === '/' 
                  ? 'text-indigo-600 dark:text-indigo-400' 
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`text-sm font-medium transition-colors ${
                pathname === '/about' 
                  ? 'text-indigo-600 dark:text-indigo-400' 
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
              }`}
            >
              About
            </Link>
            <Link 
              href="/projects" 
              className={`text-sm font-medium transition-colors ${
                pathname === '/projects' 
                  ? 'text-indigo-600 dark:text-indigo-400' 
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
              }`}
            >
              Projects
            </Link>
            <Link 
              href="/contact" 
              className={`text-sm font-medium transition-colors ${
                pathname === '/contact' 
                  ? 'text-indigo-600 dark:text-indigo-400' 
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="md:hidden">
            <button className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 