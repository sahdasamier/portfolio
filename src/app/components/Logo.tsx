import Image from 'next/image';

interface LogoProps {
  size?: number;
  className?: string;
}

export function Logo({ size = 40, className = '' }: LogoProps) {
  return (
    <div className="relative inline-flex items-center justify-center rounded-full bg-white" style={{ width: size, height: size }}>
      <Image
        src="/icon.svg"
        alt="Sahda Samier Logo"
        width={size * 0.8}
        height={size * 0.8}
        className={className}
        priority
        unoptimized
      />
    </div>
  );
} 