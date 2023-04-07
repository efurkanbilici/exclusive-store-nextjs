import Navbar from "@/components/Layout/navbar";
import { Inter } from "next/font/google";
import Link from "next/link";

const fontFamily = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }) {
  return (
    <div className={fontFamily.className}>
      <Navbar />
      <main
        className="mt-14 pb-14 overflow-y-hidden custom-scrollbar"
        style={{
          height: "calc(100vh - 3.5rem)",
        }}
        data-layout={true}
      >
        {children}
        <footer className="max-w-7xl mx-auto px-4 text-slate-700 dark:text-slate-500 text-xs py-8 text-center">
          &copy;{new Date().getFullYear()} - All rights reserved, Exclusive
          Store Ltd. Company. <br />
          <Link
            target="_blank"
            href={process.env.NEXT_PUBLIC_GITHUB_URL}
            className="text-blue-700 dark:text-blue-300 leading-7 hover:underline"
          >
            Github Link
          </Link>
        </footer>
      </main>
    </div>
  );
}
