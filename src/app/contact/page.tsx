import { Metadata } from "next";
import metaData from "@/data/metadata.json";

export const metadata: Metadata = {
  title: {
    default: "Contact",
    template: `%s - ${"Contact"}`,
  },
  description:
    "I think it's great that you're open to hearing from others! Sharing thoughts fosters connection and creativity. Whether it's a deep insight, casual chat, or random idea, communication builds understanding.",
  keywords: metaData.keywords,
  openGraph: {
    title: "Contact Page",
    description:
      "I think it's great that you're open to hearing from others! Sharing thoughts fosters connection and creativity. Whether it's a deep insight, casual chat, or random idea, communication builds understanding.",
    images: [
      {
        url: metaData.imageOfSia,
        alt: "Contact Page",
      },
    ],
    siteName: "Contact Page",
    type: "website",
    url: "https://mdranju.xyz/contact",
  },
  twitter: {
    title: "Contact Page",
    description:
      "I think it's great that you're open to hearing from others! Sharing thoughts fosters connection and creativity. Whether it's a deep insight, casual chat, or random idea, communication builds understanding.",
    images: [
      {
        url: metaData.imageOfSia,
        alt: "Contact Page",
      },
    ],
    card: "summary_large_image",
    site: "@sahda_samier",
  },
};

'use client';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
      <div className="max-w-2xl mx-auto">
        <p className="text-lg mb-8">
          I'm always interested in hearing about new opportunities and collaborations.
          Feel free to get in touch!
        </p>
        <div className="space-y-4">
          <a
            href="mailto:sahdasamier@gmail.com"
            className="block p-4 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-sky-500 dark:hover:border-sky-400 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2">Email</h2>
            <p className="text-slate-600 dark:text-slate-400">sahdasamier@gmail.com</p>
          </a>
          <a
            href="https://linkedin.com/in/sahdasamier"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-sky-500 dark:hover:border-sky-400 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2">LinkedIn</h2>
            <p className="text-slate-600 dark:text-slate-400">Connect with me on LinkedIn</p>
          </a>
          <a
            href="https://github.com/sahdasamier"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-sky-500 dark:hover:border-sky-400 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2">GitHub</h2>
            <p className="text-slate-600 dark:text-slate-400">Check out my projects on GitHub</p>
          </a>
        </div>
      </div>
    </div>
  );
}
