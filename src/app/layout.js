
import "./globals.css";
import Navbar from "@/components/homepage/Navbar";
import Footer from "@/components/homepage/Footer";

import localFont from 'next/font/local';

const ttfirs = localFont({
  src: [
    {
      path: '../../public/fonts/TTFirsNeue-Regular.woff',
      weight: "400",
      style: 'normal',
    },
    {
      path: '../../public/fonts/TTFirsNeue-Medium.woff',
      weight: "500",
      style: 'normal',
    },
    {
      path: '../../public/fonts/TTFirsNeue-SemiBold.woff',
      weight: "600",
      style: 'normal',
    },
    {
      path: '../../public/fonts/TTFirsNeue-Bold.woff',
      weight: "700",
      style: 'normal',
    },
  ],
  variable: '--font-ttfirs'
})

export const metadata = {
  title: "PurifyX",
  description: "Supercharge Your Sales with the Ultimate Lead Generation Tool",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ttfirs.variable} antialiased font-ttfirs`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
