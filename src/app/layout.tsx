import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/ui/Navbar";
import Footer from "@/ui/Footer";
import metaData from "@/data/metadata.json";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "@/utils/ScrollToTop/ScrollToTop";
import { Providers } from "./components/Providers";
import { ReactNode } from "react";

const space_Grotesk = Space_Grotesk({ subsets: ["latin"], weight: "700" });

export const metadata: Metadata = {
  title: {
    default: metaData.title,
    template: `%s - MDR`,
  },
  description: metaData.description,
  keywords: metaData.keywords,
  openGraph: {
    title: metaData.title,
    description: metaData.description,
    images: [
      {
        url: metaData.imageOfSia,
        alt: metaData.title,
      },
    ],
    siteName: metaData.title,
    type: "website",
  },
  twitter: {
    title: metaData.title,
    description: metaData.description,
    images: [
      {
        url: metaData.imageOfSia,
        alt: metaData.title,
      },
    ],
    card: "summary_large_image",
    site: "@sahda_samier",
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={space_Grotesk.className}>
        <Providers>
          <div className="bg-slate-100 dark:bg-[#020617] min-h-screen bg-[linear-gradient(to_right,#80808011_1px,transparent_1px),linear-gradient(to_bottom,#80808011_1px,transparent_1px)] bg-[size:14px_24px] text-gray-800 dark:text-gray-200">
            <Navbar />
            {children}
            <Footer />
            <ToastContainer
              autoClose={1500}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <ScrollToTop />
          </div>
        </Providers>
      </body>
    </html>
  );
}
