"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const PrincipalLayout = () => {
  const [sticky, setSticky] = useState(true);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(
    null,
  );

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")?.substring(1);
    const targetElement = document.getElementById(targetId || "");

    if (targetElement) {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const rect = targetElement.getBoundingClientRect();
      const elementTop = rect.top + scrollPosition;

      if (
        scrollPosition <= elementTop &&
        elementTop < scrollPosition + viewportHeight
      ) {
        return;
      }

      setHidden(true);
      setSticky(false);

      targetElement.scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        setSticky(true);
        setHidden(false);
      }, 1000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        // Scroll hacia arriba, oculta el navbar
        setHidden(true);

        // Si ya hay un timeout previo, lo limpiamos
        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
        }

        // Crear un nuevo timeout para mostrar el navbar después de 300ms si el scroll se detiene
        const timeout = setTimeout(() => {
          setHidden(false);
        }, 300);

        setScrollTimeout(timeout);
      } else {
        // Scroll hacia abajo, muestra el navbar
        setHidden(false);

        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [lastScrollY, scrollTimeout]);

  return (
    <>
      <nav
        className={`${
          sticky ? "sticky top-0" : "relative"
        } z-50 flex w-screen flex-row items-center justify-center gap-60 border-b-2 border-white border-opacity-5 p-4 text-[9px] font-black uppercase tracking-[.2em] text-SecondaryColorBanner shadow-lg backdrop-blur-3xl transition-transform duration-500 dark:border-opacity-10 lg:w-full lg:text-xs lg:backdrop-blur-xl ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="flex h-full w-full items-end justify-end gap-2 lg:w-0 lg:items-center lg:justify-center">
          <Link
            href="/"
            onClick={handleNavigation}
            className="hidden font-black leading-none tracking-tighter opacity-30 transition-all duration-300 hover:scale-110 hover:text-SelectedTextColor hover:opacity-100 lg:block lg:px-4 lg:py-2"
          >
            Brayan suarez
          </Link>
        </div>
        <div className="hidden justify-center gap-2 lg:flex">
          <a
            href="#Home"
            onClick={handleNavigation}
            className="px-4 py-2 font-black leading-none tracking-tighter opacity-30 transition-all duration-300 hover:scale-110 hover:text-SelectedTextColor hover:opacity-100"
          >
            Home
          </a>
          <a
            href="#Experience"
            onClick={handleNavigation}
            className="px-4 py-2 font-black leading-none tracking-tighter opacity-30 transition-all duration-300 hover:scale-110 hover:text-SelectedTextColor hover:opacity-100"
          >
            Experience
          </a>
          <a
            href="#Technology"
            onClick={handleNavigation}
            className="px-4 py-2 font-black leading-none tracking-tighter opacity-30 transition-all duration-300 hover:scale-110 hover:text-SelectedTextColor hover:opacity-100"
          >
            Technology
          </a>

          <a
            href="#Services"
            className="px-4 py-2 font-black leading-none tracking-tighter opacity-30 transition-all duration-300 hover:scale-110 hover:text-SelectedTextColor hover:opacity-100"
          >
            Services
          </a>
          <a
            href="#Contacto"
            onClick={handleNavigation}
            className="px-4 py-2 font-black leading-none tracking-tighter opacity-30 transition-all duration-300 hover:scale-110 hover:text-SelectedTextColor hover:opacity-100"
          >
            Contact
          </a>
        </div>
      </nav>
    </>
  );
};

export default PrincipalLayout;
