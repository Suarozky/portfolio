import React from "react";
import { BiCheckShield, BiCart } from "react-icons/bi";

const CardServiceTwo = ({ title, price, features }: any) => {
  return (
    <>
      <button className="flex h-[40vh] w-[40vh] flex-col items-center justify-center rounded-xl bg-SecondaryColorBanner bg-opacity-30 font-black uppercase text-SecondaryColorBanner text-opacity-50 shadow-2xl transition-all duration-300 hover:scale-110 hover:border-2 hover:border-x-MainBannerColor hover:text-opacity-100 hover:opacity-100 hover:shadow-2xl hover:shadow-SelectedShadowHover lg:h-[60vh] lg:w-[40vh]">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <div className="flex h-full flex-col items-center justify-center text-center text-xl xl:text-4xl">
            {title}
            <p className="text-xl">{price}</p>
          </div>
          <ul className="flex h-full flex-col justify-center text-[9px] font-medium xl:text-sm">
            {features.map((feature: string, index: any) => (
              <li key={index} className="flex items-center gap-2">
                <BiCheckShield /> {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="m-10 flex h-14 w-40 flex-row items-center justify-center gap-2 rounded-full border-2 font-bold uppercase xl:w-60">
          <p>Buy</p>
          <BiCart className="text-2xl font-bold" />
        </div>
      </button>
    </>
  );
};

export default CardServiceTwo;
