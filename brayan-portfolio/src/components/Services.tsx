"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BiCheckShield, BiCart } from "react-icons/bi";
import { SiBinance } from "react-icons/si";
import CardService from "./CardService";
import CardServiceTwo from "./CardServiceTwo";

const Services = () => {
  return (
    <>
      <div className="h-20 w-full" id="Services"></div>
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 lg:h-screen lg:flex-row">
        <>
          {/* Button  */}
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
            <button className="flex h-10 w-10 cursor-not-allowed items-center justify-center rounded-full border-2 text-2xl text-MainBannerColor opacity-30 transition-all duration-300 hover:scale-110 hover:border-SecondaryColorBanner hover:bg-SecondaryColorBanner hover:text-slate-700 hover:opacity-100">
              <SiBinance />
            </button>
          </div>
        </>

        <>
          {/* Card */}
          <div className="flex h-full flex-col items-center justify-center gap-4">
            <>
              {/* Div que contiene las Card */}
              <div className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row">
                <>
                  <CardServiceTwo
                    title="Frontend Development"
                    price="$1.390.000"
                    features={["Responsive", "UX/UI Design"]}
                  />
                  <CardServiceTwo
                    title="Frontend Development"
                    price="$1.990.000"
                    features={[
                      "Responsive",
                      "UX/UI Design",
                      "SEO Optimization",
                    ]}
                  />
                  <CardService
                    title="Frontend Development"
                    price="+$3.190.000"
                    features={[
                      "Responsive",
                      "UX/UI Design",
                      "SEO Optimization",
                      "Optimized Loading Speed",
                      "Hosting + Domain for one year",
                    ]}
                  />
                </>
              </div>
            </>
            <>
              {/* Div con el texto de Terminos/Condiciones y Metodos de Pago */}
              <div className="flex h-40 w-full flex-col items-center justify-center text-SecondaryColorBanner opacity-30">
                <div className="w-80 text-center text-xs lg:w-[80vh] xl:text-base">
                  Whether you are developing a new project or have an
                  established business, we offer solutions that fit your needs
                  and budget. See our
                  <a href="/" className="mx-2 font-bold underline">
                    Terms and Conditions
                  </a>
                  and
                  <a href="/" className="mx-2 font-bold underline">
                    Payment Methods
                  </a>
                  for more information.
                </div>
              </div>
            </>
          </div>
        </>

        <div className="flex w-20 flex-col items-center justify-center gap-2"></div>
      </div>

      <>
        {/* Espacio para Publicidad xdd */}
        <div className="z-0 flex h-[40vh] w-full flex-row items-center justify-center gap-20 text-MainBannerColor opacity-30">
          <h1 className="w-40 text-center text-2xl font-black uppercase">
            Advertising <br /> Space LoL
          </h1>
          <h1 className="w-40 text-center text-2xl font-black uppercase">
            Advertising <br /> Space LoL
          </h1>
        </div>
      </>
    </>
  );
};

export default Services;
