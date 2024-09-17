"use client";
import React, { useState } from "react";
import clsx from "clsx";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BannerDempse from "@/components/BannerDempse";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <html
      lang="en"
      className={clsx("h-full scroll-smooth", { dark: darkMode })}
    >
      <body
        className={clsx(
          urbanist.className,
          "text-customTextColor relative flex min-h-screen flex-col items-center justify-between bg-MainBackgroundColor",
          {
            "dark:bg-MainBackgroundColorDark dark:text-white": darkMode,
          },
        )}
      >
        <Header />
        {children}
        <BannerDempse mainText="Brayan Suarez" subText="End Here" />
        <Footer toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

        <div className="background-gradient bg-customAccentColor absolute inset-0 -z-50 max-h-screen" />
        <div className="pointer-events-none absolute inset-0 -z-40 h-full bg-[url('/2.png')] bg-cover bg-repeat dark:hidden"></div>
        <div className="pointer-events-none absolute inset-0 -z-40 hidden h-full bg-[url('/9.jpg')] bg-cover bg-repeat dark:block"></div>
      </body>
    </html>
  );
}
