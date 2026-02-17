"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const texts = [
  "Gen Alpha to Gen Z",
  "Gen Alpha to Gen Z",
  "Gen Alpha to Gen Z",
  "Gen Alpha to Gen Z",
  "Gen Alpha to Gen Z",
  "Gen Alpha to Gen Z",
  "Gen Alpha to Gen Z",
  "Gen Alpha to Gen Z",
];

// Duplicate texts for infinite scrolling effect
const duplicateTexts = [...texts, ...texts, ...texts];

export default function GreenHeadlines() {
  const [duration, setDuration] = useState(20);

  useEffect(() => {
    const handleResize = () => {
      setDuration(window.innerWidth < 768 ? 10 : 20);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div
      id="YearsAwwards"
      className="relative font-futuru flex flex-col justify-between items-center overflow-hidden bg-black text-black py-16 "
    >
      {/* MOVING LINES */}
      <div className="flex flex-col items-center justify-center bg-[#00AA71] py-2 w-full">
        <div className="overflow-hidden w-full">
          <motion.div
            key={duration}
            className="flex gap-24 whitespace-nowrap"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            {duplicateTexts.map((award, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center min-w-[20%] md:min-w-[10%]"
              >
                <p className="text-[16px] lg:text-[22px] font-futuru font-semibold tracking-wide opacity-[0.7]">
                  {award}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CARDS */}
      <div className="w-[90%] lg:block hidden lg:w-[75%] 2xl:max-w-6xl mx-auto">
        <div className="flex justify-center h-full">
          {/* Left Card - Demo World */}
          <div className="bg-[#E6E6E6] overflow-hidden flex flex-col mt-28 w-[100%]">
            <div className="p-8 md:p-12 flex-1">
              <h2 className="text-4xl xl:text-5xl font-semibold text-black mb-6 leading-tight">
                From Concept to <br /> Conversion 360° Game Marketing
              </h2>
              <p className="text-black tracking-wider opacity-70 font-light xl:text-[20px] xl:leading-6">
                We approach each project with creative mindset, combining
                creative thinking, human-centered design, and technical
                excellence.
              </p>
            </div>
            <div className="relative h-64 md:h-96 ">
              <Image
                src="/game/headlinecard1.svg"
                alt="Person with VR headset in demo world"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Card - Collaborate */}
          <div className="bg-black w-[80%] overflow-hidden flex flex-col border border-[#515151]">
            <div className="relative h-64 md:h-96 ">
              <Image
                src="/game/headlinecard2.svg"
                alt="Person using VR technology"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="p-8 md:p-12 flex-1">
              <h2 className="text-4xl xl:text-5xl font-semibold text-white mb-6 leading-tight">
                From Vision to <br /> Victory End-to-End Game Marketing 
              </h2>
              <p className="text-white opacity-70 font-light tracking-wider xl:text-lg xl:leading-6 w-[90%]">
                We transform audiences into loyal players through a seamless
                blend of strategy, creativity, and data-driven execution.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* mobile cards */}
      <div className="w-[90%] lg:hidden block lg:w-[75%] 2xl:max-w-6xl mx-auto">
        <div className="flex justify-center flex-col h-full">
          {/* Left Card - Demo World */}
          <div className="bg-[#E6E6E6] overflow-hidden flex flex-col mt-16 w-[100%]">
            <div className="p-6 flex-1">
              <h2 className="text-[30px] font-semibold text-black mb-4 leading-[30px]">
                From Concept to Conversion: 360° Game Marketing
              </h2>
              <p className="text-black opacity-70 font-light text-sm mb-4 leading-5 tracking-wider">
                We turn traffic into sales with a holistic approach—collaborate,
                launch, and grow your branded universe.
              </p>
            </div>
            <div className="relative h-64 md:h-96 ">
              <Image
                src="/game/headlinecard2.svg"
                alt="Person using VR technology"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Card - Collaborate */}
          <div className="bg-black w-[100%] overflow-hidden flex flex-col-reverse border border-[#515151]">
            <div className="relative h-64 md:h-96 ">
              <Image
                src="/game/headlinecard1.svg"
                alt="Person with VR headset in demo world"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="px-6 py-10 md:p-12 flex-1">
              <h2 className="text-[30px] font-semibold text-white mb-4 leading-[30px]">
                From Vision to Victory: End-to-End Game Marketing
              </h2>
              <p className="text-white opacity-70 font-light tracking-wider text-sm xl:text-lg xl:leading-6 w-[90%]">
                We transform audiences into loyal players through a seamless
                blend of strategy, creativity, and data-driven execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
