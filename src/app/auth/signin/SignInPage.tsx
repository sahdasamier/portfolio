'use client';

import { useContext } from 'react';
import { AuthContext } from '@/app/components/Providers';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { FaGoogle } from 'react-icons/fa';

export function SignInPage() {
  const { signInWithGoogle } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-slate-900 dark:text-white">
            Sign In
          </h1>
          
          <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-lg">
            <p className="text-center text-slate-600 dark:text-slate-300 mb-8">
              Sign in with your Google account to access additional features.
            </p>
            
            <button
              onClick={signInWithGoogle}
              className="w-full"
            >
              <HoverBorderGradient
                containerClassName="rounded-lg"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
              >
                <FaGoogle />
                Sign in with Google
              </HoverBorderGradient>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 