"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";

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
            join ? "text-[42px] " : "text-[40px] "
          } md:text-5xl lg:text-[65.789px] 2xl:text-[80.789px] font-semibold  text-white md:mb-4 uppercase max-lg-w-[300px]`}
        >
          <span className="block md:mt-4 lg:mt-7 2xl:mt-12 2xl:mb-6">
            {title}
          </span>
        </h1>

        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm md:text-base tracking-wider text-white -mt-4">
          <Link href="/" className="hover:text-[#00AA71] transition-colors">Home</Link>
          <span className="text-white/30">/</span>
          <Link href="/blog" className="hover:text-[#00AA71] transition-colors">Blog</Link>
          <span className="text-white/30">/</span>
          <span className="text-white/90 truncate  md:max-w-[400px]">{title}</span>
        </nav>

        <p className="text-[17px] md:text-[23.263px] tracking-wider font-light text-white max-w-[700px]  lg:leading-7 leading-6 2xl:leading-9">
          {description}
        </p>
      </div>
    </section>
  );
}
