"use client";
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRef, useState } from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { toast } from "react-toastify";

export function ContactUs() {
  

  const [error, setError] = useState("");
  const buttonRef = useRef(null);

  
    

  return (
    <>
      {/* <title>Contact - MDR</title> */}

      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(1200px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-50%] h-[100%] skew-y-12"
        )}
      />
      <div className="z-50 py-20 bg-slate-100 dark:bg-[#020617]  antialiased  overflow-hidden ">
        <div className="mx-auto max-w-7xl px-4">
          {/* Hero Map */}
          <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
            <div className="mx-auto max-w-max rounded-full border p-1 px-3">
              <p className="text-center text-xs font-semibold leading-normal md:text-sm ">
                Share your thoughts
              </p>
            </div>
            <p className="text-center text-3xl font-bold  md:text-5xl md:leading-10  text-cyan-500">
              Love to hear from you
            </p>
            <p className="mx-auto max-w-4xl text-center text-base  md:text-xl columns-1">
            Don’t hesitate to drop me a message — I’m always open to new ideas, opportunities, and meaningful conversations
            </p>
          </div>
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
              {/* contact from */}
              <div className="flex items-center justify-center">
                <div className="px-2 md:px-12">
                  <p className="text-2xl font-bold md:text-4xl md:leading-10  text-indigo-500">
                    Get in touch
                  </p>

                 
                  <div className="space-y-6 mt-7">
                    <div className="flex text-sm  mt-9 font-medium leading-none  peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      <MdEmail className="mr-4" /> 
                      Email: sahdasamier013@gmail.com
                    </div>
                    <div className="flex text-sm mt-9 font-medium leading-none  peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      <FaPhone className="mr-4" />
                      Number: +2011472999675
                    </div>
                    <div className="flex text-sm mt-9 font-medium leading-none  peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      <FaLocationDot className="mr-4" />
                      Location: Aswan, Egypt
                    </div>
                  </div>
                 
                </div>
              </div>
              <Image
                alt="Contact us"
                width={500}
                height={500}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                className="hidden w-full rounded-lg object-cover drop-shadow-xl lg:block"
                src="/contactme.png"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

