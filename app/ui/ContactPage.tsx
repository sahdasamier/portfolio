'use client';

import Image from 'next/image';
import { MdEmail } from 'react-icons/md';
import { FaPhone, FaLocationDot } from 'react-icons/fa6';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-[#020617] pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
          {/* Contact info */}
          <div className="flex items-center justify-center">
            <div className="px-2 md:px-12">
              <p className="text-2xl font-bold md:text-4xl md:leading-10 text-indigo-500">
                Get in touch
              </p>
              <div className="space-y-4 mt-8">
                <div className="flex items-center text-sm font-medium">
                  <MdEmail className="mr-3 text-xl" /> 
                  <span>sahdasamier013@gmail.com</span>
                </div>
                <div className="flex items-center text-sm font-medium">
                  <FaPhone className="mr-3 text-xl" />
                  <span>+201147299675</span>
                </div>
                <div className="flex items-center text-sm font-medium">
                  <FaLocationDot className="mr-3 text-xl" />
                  <span>Aswan, Egypt</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact image */}
          <div className="hidden lg:block">
            <Image
              src="/contact.svg"
              alt="Contact illustration"
              width={500}
              height={500}
              className="w-full"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
} 