"use client";
import { useEffect, useRef } from "react";
import { Content, KeyTextField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { gsap } from "gsap";
import Bounded from "@/components/Bounded";
import Shapes from "./Shapes";
import { BiConversation } from "react-icons/bi";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const component = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".name-animation",
        {
          x: -100,
          opacity: 0,
          rotate: -10,
        },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          ease: "elastic.out(1, 0.3)",
          duration: 1,
          transformOrigin: "left top",
          delay: 0.5,
          stagger: { each: 0.1, from: "random" },
        }
      );

      tl.fromTo(
        ".job-title",
        {
          y: 20,
          opacity: 0,
          scale: 1.2,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scale: 1,
          ease: "elastic.out(1, 0.3)",
        }
      );
    }, component);
    return () => ctx.revert();
  }, []);

  const renderLetters = (name: KeyTextField, key: string) => {
    if (!name) return;
    return name.split("").map((letter, index) => (
      <span
        key={index}
        className={`name-animation name-animation-${key}-index inline-block opacity-0`}
      >
        {letter}
      </span>
    ));
  };

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      ref={component}
      className="h-full w-full bg-transparent lg:mb-80 lg:h-screen xl:mb-0"
    >
      <div className="grid h-full grid-cols-1 items-center justify-center lg:grid-cols-2">
        <Shapes />
        <div
          className="font-black uppercase text-SecondaryColorBanner lg:pl-16 lg:items-start lg:text-left"
          data-speed=".4"
        >
          <h1
            className="text-[clamp(3rem,8vw,4rem)] leading-none tracking-tighter text-white lg:text-[clamp(5rem,10vw,12rem)] lg:leading-tight lg:text-white"
            aria-label={
              slice.primary.first_name + " " + slice.primary.last_name
            }
          >
            <div className="flex flex-col items-center lg:items-start">
              <span className="block whitespace-nowrap text-center font-extrabold lg:text-left">
                Brayan
              </span>
              <span className="block whitespace-nowrap text-center font-black lg:text-left text-SecondaryColorBanner lg:text-white">
                Suarez
              </span>
            </div>
          </h1>
          <span className="job-title block text-center text-sm uppercase tracking-[.2em] text-MainBannerColor opacity-0 lg:text-5xl lg:tracking-wider lg:text-white">
            FullStack
          </span>
        </div>
      </div>

      <div className="job-title flex flex-col items-center justify-center gap-10 lg:mt-24 lg:w-full lg:h-auto lg:flex-row">
        <a
          href="#Services"
          className="flex h-14 w-60 items-center justify-center gap-2 rounded-full border-2 border-MainBannerColor bg-SecondaryColorBanner text-center text-sm font-black uppercase text-slate-700 transition-all duration-300 hover:scale-110 hover:text-SelectedShadowHover hover:opacity-100 hover:shadow-2xl hover:shadow-SelectedShadowHover dark:hover:border-MainBannerColor dark:hover:bg-MainBannerColor"
        >
          Start Now
          <BiConversation className="text-2xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/suarozky/"
          className="flex h-14 w-60 items-center justify-center gap-2 rounded-full border-MainBannerColor bg-MainBannerColor bg-opacity-5 text-center text-sm font-black uppercase transition-all duration-300 hover:scale-110 hover:border-2 hover:opacity-100 hover:shadow-2xl hover:shadow-SelectedShadowHover dark:hover:border-MainBannerColor dark:hover:bg-MainBannerColor dark:hover:text-slate-700"
        >
          View Linkedin
          <BiConversation className="text-2xl" />
        </a>
      </div>
    </Bounded>
  );
};

export default Hero;
