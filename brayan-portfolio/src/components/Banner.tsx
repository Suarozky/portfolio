"use client";
import React from "react";

const Banner = ({ mainText = "Brayan suarez", subText = "Showroom" }) => {
  return (
    <>
      <div
        className="col-start-1 mb-10 flex w-full items-center justify-center font-black uppercase tracking-[.2em] md:row-start-1 lg:h-80"
        data-speed=".2"
      >
        <h1 className="flex flex-col items-center justify-center text-5xl font-black uppercase leading-none tracking-tighter">
          <span className="block text-center text-MainBannerColor dark:text-MainBannerColorDark lg:text-[clamp(2rem,20vmin,20rem)]">
            {mainText}
          </span>
          <span className="-mt-[.2em] text-center text-2xl text-SecondaryColorBanner dark:text-SecondaryColorBannerDark lg:text-5xl">
            {subText}
          </span>
        </h1>
      </div>
    </>
  );
};

export default Banner;
