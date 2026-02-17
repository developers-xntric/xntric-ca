"use client";

import { Lists } from "@/Types/ArrowList";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AnimatedButtons from "../ui/AnimatedButton";

gsap.registerPlugin(ScrollTrigger);

const ServicesLists: React.FC<Lists> = (props) => {
  const router = useRouter();
  const card2 = useRef(null);
  const card2Parent = useRef(null);

  useEffect(() => {
    gsap.from(card2.current, {
      duration: 2,
      x: -400,
      y: -300,
      scrollTrigger: {
        trigger: card2Parent.current,
        start: "top 30%",
        end: "top 35%",
        scrub: true,
      },
    });
    gsap.to(card2.current, {
      duration: 2,
      x: 1000,
      y: 100,
      scrollTrigger: {
        trigger: card2Parent.current,
        start: "top 30%",
        end: "top 10%",
        scrub: true,
      },
    });
    gsap.from(".arrowAnimate", {
      x: 0,
      y: 0,
    });
    gsap.to(".arrowAnimate", {
      duration: 2,
      x: 10,
      y: 10,
      repeat: -1,
    });
  }, []);

  return (
    <div
      ref={card2Parent}
      className={`flex flex-col bg-black/60 overflow-hidden w-full ${props.marginTop ? "md:h-screen 2xl:h-fit " : ""
        } min-h-fit font-blauer justify-center relative md:px-5 lg:px-10 2xl:space-y-10 md:py-20 py-10 `}
    >
      <div className="2xl:max-w-[1740px] mx-auto w-[90%]">
        {/* <video
          src={"/GIFS/NEW GIFS/servicelist.webm"}
          autoPlay
          loop
          muted
          width={600}
          height={500}
          className="absolute -top-4 md:-top-20 right-0 md:right-10 w-[150px] sm:w-[150px] md:w-[600px] -z-20"
        ></video> */}

        <div className="md:px-0 px-4 relative">
          {/* Section Header */}
          <div className="md:px-6">
            {/* Text */}
            <div className="text-white text-[15px] font-bold font-blauer">
              {props.textwitshadow}
            </div>
          </div>

          {/* Title and Button */}
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-5 px-0 md:px-5">
            {/* Heading */}
            <div className="text-white text-2xl mt-6 md:mt-0 md:text-[30px] md:w-full xl:w-[75%] 2xl:w-[60%] lg:text-[55px] font-bold font-blauer md:leading-[50px] xl:leading-snug ">
              {props.heading}
            </div>
            {/* Button */}
            <Link href={"/services"}
              className="md:block hidden"
              onClick={() => router.push("/services")}
            >
              {props.isButton && (
                <AnimatedButtons buttonTitle="explore more" variant="neon" />
              )}
            </Link>
          </div>
        </div>

        {/* Service List */}
        <ul className="flex flex-col mt-5">
          {props.services!.map((service, index: number) => (
            <motion.li
              key={index}
              className={`border-b border-white last:border-none transition duration-300 ease-in-out py-2`}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              id="section-5-service-li"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-4 md:px-8 xl:px-10 py-4 text-white">
                <div className="text-[28px] xl:text-2xl font-semibold w-full md:w-auto text-left md:mr-4 font-blauer">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-4">
                  <div className="text-[28px] md:text-[20px] lg:text-[28px] xl:text-[34px] tracking-wide leading-none md:leading-[40px] font-semibold cursor-default service w-full md:w-1/2 font-blauer">
                    {service}
                  </div>

                  <div className={`${props.width ? props.width : "lg:w-[40%] 2xl:w-[48%]"}`}>
                    <div className="text-[14px] w-[88%] text-justify md:text-left md:text-[12px] xl:text-[13px] md:leading-4 md:tracking-wide flex flex-col space-y-1 wordspacing">
                      {Array.isArray(props.content![index])
                        ? props.content![index].map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))
                        : props.content![index].split("\n").map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                    </div>
                  </div>
                </div>

                {props?.content2 && (
                  <div
                    className={`w-full md:w-auto flex justify-end md:ml-4 mt-0 md:mt-0 ${!props.isArrow && "hidden"
                      }`}
                  >
                    <a href={props?.content2![index]}>
                      {/* Multiple Arrows for sequential flow effect - all moving */}
                      <motion.div
                        className="relative w-8 xl:w-10 h-8 xl:h-10"
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                      >
                        {[0, 1, 2].map((index) => (
                          <motion.div
                            key={index}
                            className="absolute top-0 left-0"
                            initial={{ opacity: index === 0 ? 1 : 0 }}
                            variants={{
                              rest: {
                                opacity: index === 0 ? 1 : 0,
                                x: 0,
                                y: 0,
                              },
                              hover: {
                                opacity: 1,
                                x: [0, 8, 16],
                                y: [0, -8, -16],
                                transition: {
                                  duration: 0.8,
                                  delay: index * 0.2,
                                  repeat: Infinity,
                                  repeatDelay: 0.2,
                                },
                              },
                            }}
                          >
                            <ArrowUpRight className="arrow w-8 xl:w-10 h-8 xl:h-10 text-white" />
                          </motion.div>
                        ))}
                      </motion.div>
                    </a>
                  </div>
                )}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServicesLists;
