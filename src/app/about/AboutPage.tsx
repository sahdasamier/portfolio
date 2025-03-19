/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Badge } from "@radix-ui/themes";
import Link from "next/link";
import { ContentUs } from "@/ui/ContentUs";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import SplashCursor from "@/components/ui/SplashCursor";


function About() {
  return (
    <>
      <SplashCursor />
      <div>
        <div className="mx-auto max-w-7xl px-4 lg:py-20">
          
          <ContentUs />

         
        </div>
      </div>
    </>
  );
}

export default About;
