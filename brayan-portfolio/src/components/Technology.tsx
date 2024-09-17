"use client";

import Link from "next/link";
import Banner from "./Banner";
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
    <div className="-mb-32">
      <div className="h-1 w-full" id="Technology"></div>
      <div className="flex h-screen w-full max-w-screen-xl flex-col justify-center gap-2">
        {/* <div className="hidden h-4 w-80 rounded-full bg-white lg:flex"></div> */}
        <>
          <div
            className="col-start-1 items-center justify-center text-2xl font-black md:row-start-1 xl:text-4xl"
            data-speed=".2"
          >
            <h1 className="flex flex-col items-center justify-center text-5xl font-black uppercase leading-none tracking-tighter lg:text-[clamp(3rem,20vmin,20rem)]">
              <span className="block text-center text-MainBannerColor dark:text-MainBannerColorDark">
                Technology
              </span>
              <span className="-mt-[.2em] block text-center text-SecondaryColorBanner dark:text-SecondaryColorBannerDark">
                Stack
              </span>
            </h1>
          </div>
        </>

        <>
          <div className="mt-10 flex w-full flex-row items-center justify-center gap-2">
            <button className="flex h-10 w-10 items-center justify-center rounded-full border-2 text-2xl text-SecondaryColorBanner opacity-30 transition-all duration-300 hover:scale-110 hover:border-SecondaryColorBanner hover:bg-SecondaryColorBanner hover:text-slate-700 hover:opacity-100">
              <RiNextjsFill />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full border-2 text-2xl text-SecondaryColorBanner opacity-30 transition-all duration-300 hover:scale-110 hover:border-SecondaryColorBanner hover:bg-SecondaryColorBanner hover:text-slate-700 hover:opacity-100">
              <BiLogoReact />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full border-2 text-2xl text-SecondaryColorBanner opacity-30 transition-all duration-300 hover:scale-110 hover:border-SecondaryColorBanner hover:bg-SecondaryColorBanner hover:text-slate-700 hover:opacity-100">
              <BiLogoTailwindCss />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full border-2 text-2xl text-SecondaryColorBanner opacity-30 transition-all duration-300 hover:scale-110 hover:border-SecondaryColorBanner hover:bg-SecondaryColorBanner hover:text-slate-700 hover:opacity-100">
              <BiLogoTypescript />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full border-2 text-2xl text-SecondaryColorBanner opacity-30 transition-all duration-300 hover:scale-110 hover:border-SecondaryColorBanner hover:bg-SecondaryColorBanner hover:text-slate-700 hover:opacity-100">
              <BiPlus />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full border-2 text-2xl text-SecondaryColorBanner opacity-30 transition-all duration-300 hover:scale-110 hover:border-SecondaryColorBanner hover:bg-SecondaryColorBanner hover:text-slate-700 hover:opacity-100">
              <BiPlus />
            </button>
          </div>
        </>

        <>
          <div className="flex h-60 w-full flex-col items-center justify-center text-SecondaryColorBanner opacity-30 lg:h-20 xl:h-40">
            <div className="w-80 text-xs lg:w-[80vh] lg:text-center xl:text-base">
              I m a fullstack developer specialized in React.js, Next.js and
              Tailwind CSS. I have worked on projects such as web casinos and
              cosmetic surgery platforms, always focusing on aesthetics and user
              experience. I am constantly looking to learn new technologies to
              offer innovative and cutting-edge solutions.
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Technology;
