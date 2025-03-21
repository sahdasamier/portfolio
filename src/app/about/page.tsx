'use client';

import { AboutPage } from './AboutPage';

export default function Page() {
  return <AboutPage />;
}

// Enable static generation
export const dynamic = 'force-static';
