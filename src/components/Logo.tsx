interface LogoProps {
  size?: number;
}

export function Logo({ size = 40 }: LogoProps) {
  return (
    <div className="flex items-center">
      <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
        Portfolio
      </span>
    </div>
  );
} 