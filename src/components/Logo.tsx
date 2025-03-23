"use client";

import Image from "next/image";

interface LogoProps {
  size?: number;
  className?: string;
}

export function Logo({ size = 80, className = "" }: LogoProps) {
  return (
    <div style={{ width: size, height: size }}>
      <Image
        src="/logo.svg"
        alt="logo"
        width={size}
        height={size}
        className={`brightness-125 contrast-125 ${className}`}
        style={{
          filter: "drop-shadow(0 0 4px rgba(255, 255, 255, 0.5))",
          maxWidth: "100%",
          height: "auto",
        }}
      />
    </div>
  );
} 