"use client";

import Image from "next/image";
import { IoLogoGithub } from "react-icons/io5";
import { BiPlus } from "react-icons/bi";

const Experience = () => {
  return (
    <div className="relative py-8 px-4 lg:px-8 ">
      <div className="h-1 w-full" id="Experience"></div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        <div className="flex flex-col items-center gap-4 lg:hidden">
          <a
            href="https://es.wikipedia.org/wiki/Colombia"
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 text-2xl opacity-70 transition-transform duration-300 hover:scale-110 hover:border-SecondaryColorBanner hover:bg-SecondaryColorBanner hover:text-slate-700 hover:opacity-100"
          >
            <Image
              alt="Colombia"
              loading="lazy"
              width="40"
              height="40"
              src="/country/colombia.png"
            />
          </a>
          <a
            href="https://github.com/Suarozky"
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 text-2xl text-MainBannerColor opacity-70 transition-transform duration-300 hover:scale-110 hover:border-SecondaryColorBanner hover:bg-SecondaryColorBanner hover:text-slate-700 hover:opacity-100"
          >
            <IoLogoGithub />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="flex h-[40vh] w-[40vh] items-center justify-center rounded-xl bg-SecondaryColorBanner bg-opacity-20 text-SecondaryColorBanner shadow-2xl transition-transform duration-300 hover:scale-110 hover:border-2 hover:opacity-100 hover:shadow-2xl hover:shadow-SelectedShadowHover"
            >
              <BiPlus className="text-5xl opacity-30" />
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 lg:hidden">
          <a
            href="https://es.wikipedia.org/wiki/Colombia"
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 text-2xl opacity-70 transition-transform duration-300 hover:scale-110 hover:border-SecondaryColorBanner hover:bg-SecondaryColorBanner hover:text-slate-700 hover:opacity-100"
          >
            <Image
              alt="Colombia"
              loading="lazy"
              width="40"
              height="40"
              src="/country/colombia.png"
            />
          </a>
          <a
            href="https://github.com/Suarozky"
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 text-2xl text-MainBannerColor opacity-70 transition-transform duration-300 hover:scale-110 hover:border-SecondaryColorBanner hover:bg-SecondaryColorBanner hover:text-slate-700 hover:opacity-100"
          >
            <IoLogoGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Experience;
