"use client";

import { useRef, useEffect } from "react";

interface BlogHeaderProps {
  title: string;
  description: string;
  videoSrc: string;
  join?: boolean;
}

export default function DynamicBlogHeader({
  title,
  description,
  videoSrc,
  join,
}: BlogHeaderProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <section className="relative w-full h-[460px] 2xl:h-[500px] overflow-hidden rounded-[10px]">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover rounded-[10px]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col gap-8 justify-end px-3 md:px-12 max-w-[95%] mx-auto bottom-4 md:bottom-10">
        <h1
          className={` ${
            join ? "text-[42px] " : "text-[55px] "
          } md:text-5xl lg:text-[70.789px] 2xl:text-[90.789px] font-semibold  text-white md:mb-4 uppercase max-lg-w-[300px]`}
        >
          <span className="block md:mt-4 lg:mt-7 2xl:mt-12 2xl:mb-6">
            {title.split(" ").slice(2).join(" ")}
          </span>
        </h1>
        <p className="text-[17px] md:text-[23.263px] tracking-wider font-light text-white max-w-[700px]  lg:leading-7 leading-6 2xl:leading-9">
          {description}
        </p>
      </div>
    </section>
  );
}
