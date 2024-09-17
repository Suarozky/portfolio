"use client";

import BannerDempse from "./BannerDempse";

const Proyect = () => {
  return (
    <>
      <div className="mb-20 mt-20 flex h-full w-full flex-col items-center justify-center gap-4">
        <div className="h-[80vh] w-[140vh] rounded-xl bg-white bg-opacity-20 shadow-2xl shadow-SecondaryColorBanner">
          <iframe
            src="https://www.youtube.com/embed/X-XZx1o_w-A?autoplay=1&loop=1&playlist=X-XZx1o_w-A&controls=0&modestbranding=1&rel=0&showinfo=0&fs=0&iv_load_policy=3"
            loading="lazy"
            className="pointer-events-none h-full w-full rounded-xl border-2 border-SecondaryColorBanner bg-black bg-opacity-50"
            allow="autoplay"
          />
        </div>
      </div>
    </>
  );
};

export default Proyect;
