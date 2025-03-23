'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ModeToggle } from '@/components/ui/ModeToggle';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (previous !== undefined && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const isActive = (path: string) => {
    return pathname ? pathname === path || (pathname.startsWith(path) && path !== "/") : false;
  };

  const menuItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    <div className="w-full absolute top-0 left-0 right-0 z-50">
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute lg:top-3 top-3 left-0 right-0 mx-auto w-full rounded-full border border-slate-500/10 flex-none shadow-md transition-colors duration-500 lg:z-50 dark:border-slate-50/[0.06] bg-white/95 backdrop-blur-2xl supports-backdrop-blur:bg-white/60 dark:bg-slate-900/90"
      >
        <div className="relative w-full">
          <div className="w-full flex items-center justify-between px-6 py-4">
            <Link href="/" className="mr-3 flex-none overflow-hidden md:w-auto flex items-center space-x-2">
              <Image
                src="/logo.svg"
                alt="Your Logo"
                width={64}
                height={64}
                className="w-14 h-14"
              />
            </Link>
            
            <div className="hidden grow items-start lg:flex md:flex md:flex-grow flex-row justify-end">
              <nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
                <ul className="flex space-x-8">
                  {menuItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`inline-flex items-center hover:text-sky-500 dark:hover:text-sky-400 transition-all ease-in-out duration-150 ${
                          isActive(item.href) ? 'text-sky-500 dark:text-sky-400 font-bold' : ''
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="ml-6">
                <ModeToggle />
              </div>
            </div>

            <div className="flex md:hidden lg:hidden items-center justify-between w-full">
              <div className="invisible">
                <Menu className="h-6 w-6" />
              </div>
              <ModeToggle />
              <div className="dropdown">
                <div className="flex justify-center items-center">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost lg:hidden"
                  >
                    {isMenuOpen ? (
                      <X onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
                    ) : (
                      <Menu
                        onClick={toggleMenu}
                        className="h-6 w-6 cursor-pointer"
                      />
                    )}
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className={`menu menu-sm dropdown-content z-[1000] bg-white dark:bg-slate-900 rounded-box mt-2 w-52 px-6 py-5 shadow right-0 text-lg gap-3 font-medium ${
                    isMenuOpen ? "block" : "hidden"
                  }`}
                >
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={toggleMenu}
                      className={`-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-800 ${
                        isActive(item.href) ? "text-sky-500 dark:text-sky-400" : "text-slate-900 dark:text-slate-100"
                      }`}
                    >
                      <span className="ml-3 text-base font-medium">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.header>
    </div>
  );
}