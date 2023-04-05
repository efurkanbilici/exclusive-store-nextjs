import Navbar from "@/components/Layout/navbar";
import Footer from "@/components/Layout/footer";
import { Inter } from "next/font/google";

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
      </main>
      <Footer />
    </div>
  );
}
