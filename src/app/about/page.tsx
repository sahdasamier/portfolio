import { Metadata, Viewport } from "next";
import { AboutPage } from "./AboutPage";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Sahda Samier and their work.",
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
};

export default function About() {
  return <AboutPage />;
}

// Enable static generation
export const dynamic = 'force-static'; 