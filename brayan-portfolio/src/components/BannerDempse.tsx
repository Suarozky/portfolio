"use client";
import Link from "next/link";
import React from "react";
import { BiConversation, BiArrowToBottom } from "react-icons/bi";

const BannerDempse = ({ mainText = "Brayan suarez", subText = "Showroom" }) => {
  return (
    <>
      <div
        className="flex h-screen w-full flex-col items-center justify-center gap-8"
        id="Contacto"
      >
        <div
          className="col-start-1 items-center justify-center text-2xl font-black md:row-start-1 xl:text-4xl"
          data-speed=".2"
        >
          <h1 className="flex flex-col items-center justify-center text-5xl font-black uppercase leading-none tracking-tighter lg:text-[clamp(3rem,20vmin,20rem)]">
            <span className="block text-center text-MainBannerColor dark:text-MainBannerColorDark">
              {mainText}
            </span>
            <span className="-mt-[.2em] block text-center text-SecondaryColorBanner dark:text-SecondaryColorBannerDark">
              {subText}
            </span>
          </h1>
          <div className="hidden h-32 w-full flex-row items-center justify-center gap-8 text-MainBannerColor lg:flex">
            <a
              href="/BrayanSuarezCV.pdf"
              download 
              className="flex h-14 w-60 items-center justify-center gap-2 rounded-full border-2 border-MainBannerColor bg-SecondaryColorBanner text-center text-sm font-black uppercase text-slate-700 transition-all duration-300 hover:scale-110 hover:text-SelectedShadowHover hover:opacity-100 hover:shadow-2xl hover:shadow-SelectedShadowHover dark:hover:border-MainBannerColor dark:hover:bg-MainBannerColor"
            >
              Download CV
              <BiArrowToBottom className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/suarozky/"
              className="flex h-14 w-60 items-center justify-center gap-2 rounded-full border-MainBannerColor bg-MainBannerColor bg-opacity-5 text-center text-sm font-black uppercase transition-all duration-300 hover:scale-110 hover:border-2 hover:opacity-100 hover:shadow-2xl hover:shadow-SelectedShadowHover dark:hover:border-MainBannerColor dark:hover:bg-MainBannerColor dark:hover:text-slate-700"
            >
              View Linkedin
              <BiConversation className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerDempse;