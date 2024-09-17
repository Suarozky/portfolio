"use client";
import React, { useState, useEffect } from "react";
import {
  IoMoonOutline,
  IoMoon,
  IoLanguage,
  IoLogoLinkedin,
  IoLogoGithub,
  IoMail,
  IoOptions,
  IoHomeOutline,
} from "react-icons/io5";
import ShowSound from "./ShowSound";
import Link from "next/link";

interface FooterProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ toggleDarkMode, darkMode }) => {
  const [showSound, setShowSound] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [visible, setVisible] = useState(false);

  const toggleShowSound = () => setShowSound(!showSound);
  const toggleModal = () => setShowModal(!showModal);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      // Show the footer if we're at the bottom of the page
      if (scrollPosition + windowHeight >= documentHeight - 1) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showSound && <ShowSound />}
      {showModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-20 backdrop-blur-sm">
          <div className="relative z-50 max-h-[80vh] min-h-[40vh] min-w-[80vw] max-w-[80vw] rounded-xl border-2 border-SecondaryColorBanner border-opacity-50 bg-SecondaryBackgroundColor bg-opacity-10 p-8 shadow-2xl backdrop-blur-3xl">
            <button
              onClick={toggleModal}
              className="absolute right-4 top-2 text-4xl text-SecondaryColorBanner"
            >
              &times;
            </button>
          </div>
        </div>
      )}
      <div
        className={`${
          visible ? "translate-y-0" : "translate-y-full"
        } fixed bottom-0 left-0 z-50 w-full transition-transform duration-500 ease-in-out bg-transparent`}
      >
        <div className="flex flex-col items-center justify-center gap-4 text-[9px] font-extrabold text-SecondaryColorBanner lg:h-20 lg:flex-row lg:justify-between lg:gap-0 lg:text-xs lg:p-6">
          {/* Options */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 text-2xl opacity-70 transition-transform duration-300 hover:scale-110 hover:border-SecondaryColorBanner hover:bg-SecondaryColorBanner hover:text-slate-700 dark:bg-white dark:text-slate-700"
            >
              {darkMode ? <IoMoon /> : <IoMoonOutline />}
            </button>

            <button className="flex h-10 w-10 items-center justify-center rounded-full border-2 text-2xl opacity-70 transition-transform duration-300 hover:scale-110 hover:border-SecondaryColorBanner hover:bg-SecondaryColorBanner hover:text-slate-700 cursor-not-allowed">
              <IoLanguage />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full border-2 text-2xl opacity-70 transition-transform duration-300 hover:scale-110 hover:border-SecondaryColorBanner hover:bg-SecondaryColorBanner hover:text-slate-700 cursor-not-allowed">
              <IoOptions />
            </button>
            <a
              href="#Home"
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 text-2xl opacity-70 transition-transform duration-300 hover:scale-110 hover:border-SecondaryColorBanner hover:bg-SecondaryColorBanner hover:text-slate-700"
            >
              <IoHomeOutline />
            </a>
          </div>

          <div className="text-center text-xs opacity-70 lg:text-sm">
            <button className="hidden 2xl:block" onClick={toggleShowSound}>
              {" "}
              Bye Bye Bye - Here Click!{" "}
            </button>
            <p> © 2024 Brayan Suarez. All rights reserved. </p>
            <p className="w-60 lg:w-full">
              About this website: built with React & Next.js (App Router &
              Server Actions), TypeScript, Tailwind CSS
            </p>
          </div>

          {/* Social media */}
          <div className="flex flex-wrap justify-center gap-2">
            <Link
              href="https://www.linkedin.com/in/suarozky/"
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 text-2xl opacity-70 transition-transform duration-300 hover:scale-110 hover:border-SecondaryColorBanner hover:bg-SecondaryColorBanner hover:text-slate-700"
            >
              <IoLogoLinkedin />
            </Link>
            <Link
              href="https://github.com/Suarozky"
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 text-2xl opacity-70 transition-transform duration-300 hover:scale-110 hover:border-SecondaryColorBanner hover:bg-SecondaryColorBanner hover:text-slate-700"
            >
              <IoLogoGithub />
            </Link>

            <Link
              href=""
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 text-2xl opacity-70 transition-transform duration-300 hover:scale-110 hover:border-SecondaryColorBanner hover:bg-SecondaryColorBanner hover:text-slate-700"
            >
              <IoMail />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
