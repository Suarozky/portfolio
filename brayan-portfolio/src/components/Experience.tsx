"use client";

import Image from "next/image";
import { IoLogoGithub } from "react-icons/io5";
import { BiPlus } from "react-icons/bi";
const Experience = () => {
  return (
    <div className="-mt-[550px]">
      <div className="h-1 w-full" id="Experience"></div>
      <>
        <div className="hidden h-full w-full flex-col items-center justify-center gap-4 lg:flex lg:h-screen lg:flex-row">
          <>
            <div className="hidden w-20 flex-col items-center justify-center gap-2 lg:flex">
              <a
                href="https://es.wikipedia.org/wiki/Colombia"
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 text-2xl opacity-30 transition-all duration-300 hover:scale-110 hover:border-SecondaryColorBanner hover:bg-SecondaryColorBanner hover:text-slate-700 hover:opacity-100"
              >
                <Image
                  alt="Developer Brayan Suarez"
                  loading="lazy"
                  width="500"
                  height="500"
                  src="/country/colombia.png"
                />
              </a>
              <a
                href="https://github.com/Suarozky"
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 text-2xl text-MainBannerColor opacity-30 transition-all duration-300 hover:scale-110 hover:border-SecondaryColorBanner hover:bg-SecondaryColorBanner hover:text-slate-700 hover:opacity-100"
              >
                <IoLogoGithub />
              </a>
            </div>
          </>
          <div className="flex h-full flex-col items-center justify-center gap-10 p-8">
            <>
              <div className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row">
                <>
                  <div className="flex h-[40vh] w-[40vh] flex-col items-center justify-center rounded-xl bg-SecondaryColorBanner shadow-2xl shadow-white transition-all duration-300 hover:scale-110 hover:opacity-100 hover:shadow-2xl hover:shadow-SelectedShadowHover lg:h-[30vh] lg:w-[30vh]">
                    <div className="flex h-full w-full flex-col items-center justify-center">
                      <BiPlus className="text-5xl opacity-30" />
                    </div>
                  </div>
                </>
                <>
                  <div className="flex h-[40vh] w-[40vh] flex-col items-center justify-center rounded-xl bg-SecondaryColorBanner bg-opacity-20 text-SecondaryColorBanner shadow-2xl transition-all duration-300 hover:scale-110 hover:border-2 hover:opacity-100 hover:shadow-2xl hover:shadow-SelectedShadowHover lg:h-[30vh] lg:w-[30vh]">
                    <div className="flex h-full w-full flex-col items-center justify-center">
                      <BiPlus className="text-5xl opacity-30" />
                    </div>
                  </div>
                </>
                <>
                  <div className="flex h-[40vh] w-[40vh] flex-col items-center justify-center rounded-xl bg-SecondaryColorBanner bg-opacity-20 text-SecondaryColorBanner shadow-2xl transition-all duration-300 hover:scale-110 hover:border-2 hover:opacity-100 hover:shadow-2xl hover:shadow-SelectedShadowHover lg:h-[30vh] lg:w-[30vh]">
                    <div className="flex h-full w-full flex-col items-center justify-center">
                      <BiPlus className="text-5xl opacity-30" />
                    </div>
                  </div>
                </>
              </div>
            </>
            <>
              <div className="flex flex-col items-center justify-center gap-10 lg:flex-row">
                <>
                  <div className="flex h-[40vh] w-[40vh] flex-col items-center justify-center rounded-xl bg-SecondaryColorBanner bg-opacity-20 text-SecondaryColorBanner shadow-2xl transition-all duration-300 hover:scale-110 hover:border-2 hover:opacity-100 hover:shadow-2xl hover:shadow-SelectedShadowHover lg:h-[30vh] lg:w-[30vh]">
                    <div className="flex h-full w-full flex-col items-center justify-center">
                      <BiPlus className="text-5xl opacity-30" />
                    </div>
                  </div>
                </>
                <>
                  <div className="flex h-[40vh] w-[40vh] flex-col items-center justify-center rounded-xl bg-SecondaryColorBanner bg-opacity-20 text-SecondaryColorBanner shadow-2xl transition-all duration-300 hover:scale-110 hover:border-2 hover:opacity-100 hover:shadow-2xl hover:shadow-SelectedShadowHover lg:h-[30vh] lg:w-[30vh]">
                    <div className="flex h-full w-full flex-col items-center justify-center">
                      <BiPlus className="text-5xl opacity-30" />
                    </div>
                  </div>
                </>
                <>
                  <div className="flex h-[40vh] w-[40vh] flex-col items-center justify-center rounded-xl bg-SecondaryColorBanner bg-opacity-20 text-SecondaryColorBanner shadow-2xl transition-all duration-300 hover:scale-110 hover:border-2 hover:opacity-100 hover:shadow-2xl hover:shadow-SelectedShadowHover lg:h-[30vh] lg:w-[30vh]">
                    <div className="flex h-full w-full flex-col items-center justify-center">
                      <BiPlus className="text-5xl opacity-30" />
                    </div>
                  </div>
                </>
              </div>
            </>
            <></>
          </div>
          <>
            <div className="flex w-20 flex-col items-center justify-center gap-2"></div>
          </>
        </div>
      </>
    </div>
  );
};

export default Experience;
