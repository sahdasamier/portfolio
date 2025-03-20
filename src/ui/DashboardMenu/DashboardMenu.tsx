"use client";
import { useAuth } from "@/app/components/Providers";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface DashboardMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DashboardMenu({ isOpen, onClose }: DashboardMenuProps) {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/auth/signin');
    }
  }, [user, router]);

  return (
    <div
      className={`fixed inset-y-0 right-0 w-64 bg-white dark:bg-slate-900 shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="p-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Menu</h2>
          <nav className="space-y-2">
            <button
              onClick={logout}
              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-800 rounded-md"
            >
              Sign Out
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}