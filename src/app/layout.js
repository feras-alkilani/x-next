import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import News from "./components/News";
import SessionWrapper from "./components/SessionWrapper";
import CommentModal from "./components/CommentModal";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900"
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900"
});

export const metadata = {
  title: "X Clone",
  description: "A Clone of X website built with Next.js and Tailwind CSS"
};

export const dynamic = "force-dynamic";

export default function RootLayout({ children }) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="flex justify-between max-w-6xl mx-auto ">
            <div className="hidden sm:inline border-r h-screen sticky top-0">
              <Sidebar />
            </div>
            <div className="  w-2xl flex-1">{children}</div>

            <div className="lg:flex-col p-3 h-screen border-l  lg:flex w-[24rem] ">
              <div className="sticky top-0 bg-white py-2">
                <input
                  typeof="text"
                  placeholder="Search"
                  className="bg-gray-100 border border-gray-200 rounded-3xl text-sm w-full px-4 py-2 "
                ></input>
              </div>
              <News />
            </div>
          </div>
          <CommentModal />
        </body>
      </html>
    </SessionWrapper>
  );
}
