"use client";

import Link from "next/link";

export default function OurWorkHero({
  videoUrl = "/our-work-bg.webm",
  isheight = "min-h-screen",
  isPara = true,
}) {
  return (
    <section className="relative lg:min-h-screen w-full font-futuru">
      {/* Background Video Container */}
      <div className="absolute inset-0 -z-10 m-2 md:m-3">
        <video
          src={videoUrl}
          className="h-full w-full object-cover rounded-2xl"
          autoPlay
          muted
          loop
          playsInline // Added for better mobile compatibility
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000]/50 to-[#00aa71]/40 rounded-2xl" />
      </div>

      {/* Content Container */}
      <div className={`relative z-10 flex ${isheight} items-center`}>
        <div className="w-[90%] mx-auto md:px-4 lg:px-8 space-y-8 lg:space-y-16 max-w-[1740px]">
          {/* 1st */}
          <div className="relative lg:left-[-40px] 5xl:left-[-80px]">
            <h1 className="text-[35px] md:text-7xl xl:text-[120px] uppercase 5xl:text-[130px] font-bold text-white leading-none relative lg:left-10 xl:left-6 5xl:left-14">
              Glimpse
            </h1>
          </div>
          <div className="lg:hidden flex">
            <div className="text-[35px] md:text-7xl lg:text-8xl xl:text-[130px] 2xl:text-[100px] 5xl:text-[170px] flex items-end gap-4 font-bold text-white leading-none tracking-tight text-right">
              <div className="tracking-wide flex flex-col">
                <p className="uppercase">OF OUR</p>
                <span className="tracking-wide uppercase">SUCCESS</span>
              </div>
              <div>
                <span className="tracking-wide uppercase">STORIES</span>
              </div>
              <div></div>
            </div>
          </div>
          <div className="flex justify-end gap-8 lg:gap-16 items-end">
            {/* Left */}
            {isPara && (
              <div className="lg:space-y-8">
                <div className="relative">
                  <div className="lg:space-y-10 max-w-[300px]">
                    <p className="text-white opacity-[0.9] text-[14px] md:text-base 2xl:text-xl leading-[20px] lg:leading-relaxed tracking-wider font-light">
                      Start Your 360° Journey with a Simple Message
                    </p>
                    <Link
                      href="/contact"
                      className="w-fit flex items-center justify-center text-white text-center py-[9px] 2xl:py-3 px-4 lg:px-8 text-[12px] lg:text-[18px] rounded-[10px] bg-[#00AA71] hover:bg-white hover:text-black transition-all duration-500 mt-6 lg:mt-10 2xl:mt-20"
                    >
                      <p className="tracking-wider uppercase">Contact Us Now</p>
                    </Link>
                  </div>
                </div>
              </div>
            )}
            {/* Right Side - "WE HAVE DONE" */}
            <div className="lg:flex hidden justify-end">
              <div className="text-4xl md:text-7xl xl:text-[110px] 2xl:text-[120px] 5xl:text-[130px] flex items-end font-bold text-white leading-none tracking-tight text-right relative left-10 2xl:left-0">
                <div className="tracking-wide flex flex-col -space-y-2 2xl:-space-y-4">
                  <p className="uppercase">OF OUR</p>
                  <span className="tracking-wide uppercase">SUCCESS</span>
                </div>
                <div>
                  <span className="tracking-wide uppercase ms-6">STORIES</span>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
