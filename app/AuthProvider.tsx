'use client';

import { createContext, useContext, ReactNode } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

interface AuthContextType {
  isAuthenticated: boolean;
  user: any | null;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export default function AuthProvider({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession();

  const value = {
    isAuthenticated: status === 'authenticated',
    user: session?.user ?? null,
    login: () => signIn(undefined, { callbackUrl: '/' }),
    logout: () => signOut({ callbackUrl: '/' }),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
} 