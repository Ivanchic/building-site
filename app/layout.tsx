import type { Metadata } from "next";
import { Audiowide, DM_Sans, Geist, Geist_Mono, Rethink_Sans } from "next/font/google";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About/page";
import WorkBanner from "./Pages/Work_Banner/page";
import "./globals.css";
import Expertise from "./Pages/Our-Expertise/page";
import Testimonial from "./Pages/Testimonial/page";
import Faqs from "./Pages/Faqs/page";


const rethink = Rethink_Sans({
  variable: "--font-rethink",
  subsets: ["latin"],
});
const dmSans = DM_Sans({
  variable: '--font-dmSans',
  subsets: ['latin'],
});
const audiowide = Audiowide({
  weight: '400',
  variable: '--font-audiowide',
  subsets: ['latin'],
});




export const metadata: Metadata = {
  title: "Petrovich Buildig",
  description: "Personal website of Petrovich Buildig",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rethink.variable} ${dmSans.variable} ${audiowide.variable}`}
      >
      <Navbar />
      <About />
      <WorkBanner />
          <Expertise />
          <Testimonial />
          <Faqs />
      
        {children}
      </body>
    </html>
  );
}
