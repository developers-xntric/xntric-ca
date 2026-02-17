"use client";
import React from "react";
import HeroSlider from "../game-marketing/hero-slider";
import { Awwards } from "@/data/awwards";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

const GameHero = () => {
  return (
    <section className="relative md:h-screen h-[80vh] md:top-3 top-1 font-futuru rounded max-w-[99%] mx-auto overflow-hidden">
      {/* Background Video */}
      <video
        src="/game/game-marketing.webm"
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover object-center z-[-1] pointer-events-none"
      />

      {/* Foreground Content */}
      <div className="pt-24 h-full">
        <div className="flex flex-col items-center h-full justify-center text-center">
          <h1 className="lg:text-[190px] md:text-[100px] text-[55px] md:leading-[80px] leading-[45px] lg:leading-[155px] uppercase font-bold text-[#FFFFFF] md:mix-blend-overlay">

            Game <br /> Marketing
          </h1>
          <Link href={"/contact"} className="md:px-[45px] px-4  py-2 md:py-[15px] hover:bg-white hover:text-black transition-all duration-500 bg-[#00AA71] text-center mt-12 md:mt-16 rounded-[8px] md:text-[16px] text-[14px] text-[#FFFFFF] uppercase font-light tracking-widest">
            let&apos;s talk
          </Link>
        </div>

        {/* Hero Slider (Desktop Only) */}
        <div className="md:block hidden ">
          <HeroSlider awwards={Awwards} />
        </div>

        {/* Scroll Down Button */}
        <div
          onClick={(e) => {
            e.preventDefault();
            const el = document.querySelector("#section2");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="absolute bottom-[-10%] left-0 h-[30%] 2xl:h-[28%] w-[4%] 2xl:w-[70px] md:bg-black rounded-tr-[10px]"
        >
          <button className="rotate-90 text-[#FFFFFF] items-end justify-center h-[50px] w-[200px] relative md:-left-[75px] lg:-left-[70px] xl:-left-[60px] bottom-[-52px] xl:bottom-[-20%] 2xl:bottom-[-65px] 5xl:bottom-[-80px] gap-3 text-[20px] 2xl:text-[23px] md:flex hidden">
            Scroll down <ArrowDown className="rotate-[270deg]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GameHero;
