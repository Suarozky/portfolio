"use client";

import Image from "next/image";
import { IoLogoGithub } from "react-icons/io5";
import { BiPlus } from "react-icons/bi";

const Experience = () => {
  // Array de objetos con los datos de los enlaces e imágenes
  const items = [
    { href: "https://letras-tawny.vercel.app/", src: "/letras.svg", alt: "letras image" },
    { href: "https://www.linkedin.com/in/suarozky/details/projects/", src: "/banco.svg", alt: "banco image" },
    { href: "https://www.linkedin.com/in/suarozky/details/projects/", src: "/tinder.svg", alt: "tinder image" },
    { href: "https://peli-cyan.vercel.app/", src: "/peli.svg", alt: "Image peli" },
    { href: "https://play.google.com/store/apps/details?id=com.vakanostudio.polar&hl=es_CO&pli=1", src: "/polar 1.svg", alt: "Image 5" },
    { href: "https://pokedex-pink-delta.vercel.app/", src: "/poke 1.svg", alt: "poke Api" },
    { href: "https://easy-pay-black.vercel.app/", src: "/pay.svg", alt: "pagafacil" },
    { href: "https://pasarela-front-eta.vercel.app/", src: "/logo.png", alt: "epayco" },
    { href: "https://manga-nine-snowy.vercel.app/", src: "/luf.jpg", alt: "luffy" },
  ];

  return (
    <div className="relative px-4 py-8 lg:px-8">
      <div className="h-1 w-full" id="Experience"></div>
      <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
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
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex h-[40vh] w-[40vh] items-center justify-center rounded-2xl bg-SecondaryColorBanner bg-opacity-20 text-SecondaryColorBanner shadow-2xl transition-transform duration-300 hover:scale-110 hover:border-2 hover:opacity-100 hover:shadow-2xl hover:shadow-SelectedShadowHover"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={230}
                height={160}
                className="opacity-70 transition-opacity duration-300 hover:opacity-100 rounded-xl"
              />
            </a>
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
