import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
      <p className="mt-4 text-gray-600 dark:text-gray-400">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-6 px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
} 