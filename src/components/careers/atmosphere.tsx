"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Atmosphere = () => {
  const imagesRef = useRef<HTMLDivElement>(null);

  // ✅ SAME SIZES YOU ALREADY USE (NO NEED TO REWRITE ANYWHERE ELSE)
  const imageSizes = [
    {
      mobile: { w: 150, h: 130 },
      md: { w: 220, h: 250 },
      lg: { w: 250, h: 150 },
      xl: { w: 250, h: 180 },
      xxl: { w: 400, h: 250 },
    },
    {
      mobile: { w: 250, h: 250 },
      md: { w: 350, h: 450 },
      lg: { w: 300, h: 400 },
      xl: { w: 380, h: 400 },
      xxl: { w: 500, h: 550 },
    },
    {
      mobile: { w: 180, h: 200 },
      md: { w: 250, h: 300 },
      lg: { w: 250, h: 250 },
      xl: { w: 250, h: 250 },
      xxl: { w: 400, h: 400 },
    },
    {
      mobile: { w: 160, h: 250 },
      md: { w: 240, h: 280 },
      lg: { w: 300, h: 330 },
      xl: { w: 300, h: 350 },
      xxl: { w: 420, h: 480 },
    },
  ];

  const images = [
    "/Careers/atms.svg",
    "/Careers/atms-2.svg",
    "/Careers/atms-1.svg",
    "/Careers/atms-4.svg",
  ];

  const scrollingImages = [...images, ...images];

  useEffect(() => {
    const container = imagesRef.current;
    if (!container) return;
    gsap.killTweensOf(container);

    gsap.to(container, {
      xPercent: -50,
      duration: 20,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <section className="relative bg-black text-white overflow-hidden md:min-h-screen pb-20 md:pb-10">
      {/* Header */}
      <div className="flex justify-center items-center text-white flex-col pt-6 md:pt-20 lg:pb-10 font-futuru w-[90%] mx-auto">
        <div className="flex items-center justify-center lg:gap-3 flex-col text-center mb-20 font-futuru">
          <span className="text-[24px] md:text-5xl text-white font-thin tracking-wider relative top-4 md:top-6">Feel the</span>
          <h2 className=" text-[50px] md:text-[72px] lg:text-9xl uppercase text-[#00AA71] font-semibold">atmosphere</h2>
          <p className="text-[14px] md:text-xl text-white font-extralight mx-auto tracking-widest ">
            Our work is fueled by collaboration and innovation, transforming ideas into powerful, impactful solutions.
          </p>
        </div>
      </div>
      <div className="overflow-hidden">
        <div
          ref={imagesRef}
          className="flex gap-4 whitespace-nowrap w-max px-6"
        >
          {scrollingImages.map((src, index) => {
            const orig = index % images.length;
            const size = imageSizes[orig];

            return (
              <div
                key={index}
                className="
                  flex-shrink-0 relative rounded-lg overflow-hidden
                  [width:var(--w-mobile)] [height:var(--h-mobile)]
                  md:[width:var(--w-md)] md:[height:var(--h-md)]
                  lg:[width:var(--w-lg)] lg:[height:var(--h-lg)]
                  xl:[width:var(--w-xl)] xl:[height:var(--h-xl)]
                  2xl:[width:var(--w-xxl)] 2xl:[height:var(--h-xxl)]
                "
                style={
                  {
                    "--w-mobile": `${size.mobile.w}px`,
                    "--h-mobile": `${size.mobile.h}px`,
                    "--w-md": `${size.md.w}px`,
                    "--h-md": `${size.md.h}px`,
                    "--w-lg": `${size.lg.w}px`,
                    "--h-lg": `${size.lg.h}px`,
                    "--w-xl": `${size.xl.w}px`,
                    "--h-xl": `${size.xl.h}px`,
                    "--w-xxl": `${size.xxl.w}px`,
                    "--h-xxl": `${size.xxl.h}px`,
                  } as React.CSSProperties
                }
              >
                <Image
                  src={src}
                  alt={`Atmosphere ${index}`}
                  fill
                  className="object-cover"
                  priority={orig === 0}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Atmosphere;
