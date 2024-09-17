"use client";

import Link from "next/link";
import { RiNextjsFill } from "react-icons/ri";
import {
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoTypescript,
  BiPlus,
} from "react-icons/bi";

const Technology = () => {
  return (
    <div className="relative py-8 px-4 lg:py-16 lg:px-8">
      <div className="h-1 w-full" id="Technology"></div>
      <div className="flex flex-col items-center justify-center gap-8 max-w-screen-xl mx-auto">
        <div className="text-3xl font-black text-center lg:text-7xl xl:text-9xl">
          <h1 className="flex flex-col items-center justify-center">
            <span className="text-MainBannerColor dark:text-MainBannerColorDark">
              Technology
            </span>
            <span className="text-SecondaryColorBanner dark:text-SecondaryColorBannerDark">
              Stack
            </span>
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="flex h-12 w-12 items-center justify-center rounded-full border-2 text-xl text-SecondaryColorBanner opacity-70 transition-transform duration-300 hover:scale-110 hover:border-SecondaryColorBanner hover:bg-SecondaryColorBanner hover:text-slate-700 hover:opacity-100">
            <RiNextjsFill />
          </button>
          <button className="flex h-12 w-12 items-center justify-center rounded-full border-2 text-xl text-SecondaryColorBanner opacity-70 transition-transform duration-300 hover:scale-110 hover:border-SecondaryColorBanner hover:bg-SecondaryColorBanner hover:text-slate-700 hover:opacity-100">
            <BiLogoReact />
          </button>
          <button className="flex h-12 w-12 items-center justify-center rounded-full border-2 text-xl text-SecondaryColorBanner opacity-70 transition-transform duration-300 hover:scale-110 hover:border-SecondaryColorBanner hover:bg-SecondaryColorBanner hover:text-slate-700 hover:opacity-100">
            <BiLogoTailwindCss />
          </button>
          <button className="flex h-12 w-12 items-center justify-center rounded-full border-2 text-xl text-SecondaryColorBanner opacity-70 transition-transform duration-300 hover:scale-110 hover:border-SecondaryColorBanner hover:bg-SecondaryColorBanner hover:text-slate-700 hover:opacity-100">
            <BiLogoTypescript />
          </button>
          <button className="flex h-12 w-12 items-center justify-center rounded-full border-2 text-xl text-SecondaryColorBanner opacity-70 transition-transform duration-300 hover:scale-110 hover:border-SecondaryColorBanner hover:bg-SecondaryColorBanner hover:text-slate-700 hover:opacity-100">
            <BiPlus />
          </button>
          <button className="flex h-12 w-12 items-center justify-center rounded-full border-2 text-xl text-SecondaryColorBanner opacity-70 transition-transform duration-300 hover:scale-110 hover:border-SecondaryColorBanner hover:bg-SecondaryColorBanner hover:text-slate-700 hover:opacity-100">
            <BiPlus />
          </button>
        </div>

        <div className="text-center text-sm text-SecondaryColorBanner opacity-70 lg:text-xl xl:text-2xl">
          <p>
            Im a fullstack developer specialized in React.js, Next.js, and
            Tailwind CSS. I have worked on projects such as web casinos and
            cosmetic surgery platforms, always focusing on aesthetics and user
            experience. I am constantly looking to learn new technologies to
            offer innovative and cutting-edge solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Technology;
