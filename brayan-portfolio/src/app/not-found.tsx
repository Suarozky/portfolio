import BannerDempse from "@/components/BannerDempse";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <>
      <div className="flex h-[80vh] flex-col items-center justify-center">
        <h1 className="mx-auto text-center text-[30vmin] font-black text-MainBannerColor">
          404
        </h1>
        <p className="mx-auto text-3xl font-black text-MainBannerColor">
          Whoops, we couldn&apos;d that page.
        </p>
        <Link
          href="/"
          className="text-2xl font-black text-MainBannerColor underline"
        >
          Head Home
        </Link>
      </div>

      <div className="w-full"></div>
    </>
  );
}
