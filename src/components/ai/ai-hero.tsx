"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export function useWindowWidth() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    setWidth(window.innerWidth);

    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

export default function AIHero() {
  const width = useWindowWidth();

  return (
    <section
      className="lg:relative font-futuru lg:min-h-screen bg-contain lg:bg-right bg-center bg-no-repeat overflow-hidden top-4 bg-[url('/ai/hero.png')] md:bg-[url('/about/about-hero.png')]"
    >
      {/* Main Content Container */}
      <div className={`mx-auto ${width < 340 ? 'h-[85vh]' : width < 380 ? 'h-[75vh]' : 'h-[100vh]'} md:h-screen flex items-center w-[95%] md:w-[90%] 2xl:w-[1440px]`}>
        <div className="flex justify-between md:justify-center h-full pt-28 flex-col w-full">
          {/* Left Content */}
          <div className="max-w-[90%] md:max-w-[100%] lg:max-w-[80%] xl:max-w-[55%] 2xl:max-w-[50%] mx-auto md:mx-0">
            <h2 className={`text-[#FFFFFF] text-center md:text-start uppercase tracking-wide font-semibold md:text-[55px] md:leading-[50px] ${width < 340 ? "text-[20px] leading-7" : width < 380 ? "text-[24px] leading-7" : "text-[28px] leading-8"}`}>
              Intelligent Automation for Modern Businesses.
            </h2>
          </div>
          <div className="mt-20 md:block hidden">
            <div
              style={{
                width: "655px",
                height: "123px",
                position: "relative",
                background:
                  "linear-gradient(125deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0) 100%)",
                borderRadius: "24.99px",
                outline: "1.04px rgba(255, 255, 255, 0.20) solid",
                outlineOffset: "-1.04px",
                backdropFilter: "blur(15.62px)",
              }}
            >
              <div
                style={{
                  width: "556.32px",
                  height: "24.99px",
                  left: "33px",
                  top: "30px",
                  position: "absolute",
                }}
              >
                <div
                  style={{
                    width: "588.15px",
                    height: "57.27px",
                    position: "relative",
                    background: "rgba(255, 255, 255, 0.20)",
                    borderRadius: "220.28px",
                  }}
                >
                  <div
                    style={{
                      width: "4.36px",
                      height: "20.76px",
                      left: "385.01px",
                      top: "17.57px",
                      position: "absolute",
                      justifyContent: "center",
                      display: "flex",
                      flexDirection: "column",
                      color: "white",
                      fontSize: "13.84px",
                      fontFamily: "Poppins",
                      fontWeight: 400,
                      lineHeight: "20.76px",
                      wordWrap: "break-word",
                    }}
                  >
                    |
                  </div>
                  <Image
                    style={{
                      width: "34.60px",
                      height: "34.60px",
                      left: "14.94px",
                      top: "10.66px",
                      position: "absolute",
                    }}
                    src="/ai/ai-logo.png"
                    alt=""
                  />
                  <div
                    style={{
                      width: "334.37px",
                      height: "20.76px",
                      left: "49.54px",
                      top: "18.68px",
                      position: "absolute",
                      opacity: 0.6,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        left: "0px",
                        top: "0px",
                        position: "absolute",
                        justifyContent: "center",
                        display: "flex",
                        flexDirection: "column",
                        color: "white",
                        fontSize: "13.84px",
                        fontWeight: 400,
                        lineHeight: "20.76px",
                        wordWrap: "break-word",
                      }}
                      className="font-futuru tracking-widest"
                    >
                      A modern art gallery, Magritte and Chagall style.
                    </div>
                  </div>
                  <div
                    style={{
                      width: "115.03px",
                      height: "35.46px",
                      left: "461.79px",
                      top: "12.43px",
                      position: "absolute",
                      background: "rgba(0, 0, 0, 0.10)",
                      boxShadow: "0px 0px 1.7298437356948853px white inset",
                      borderRadius: "48.44px",
                    }}
                  >
                    <div
                      style={{
                        width: "65.41px",
                        height: "20.76px",
                        left: "15.86px",
                        top: "7.35px",
                        position: "absolute",
                        textAlign: "center",
                        justifyContent: "center",
                        display: "flex",
                        flexDirection: "column",
                        color: "white",
                        fontSize: "13.84px",
                        fontWeight: 500,
                        lineHeight: "20.76px",
                        wordWrap: "break-word",
                      }}
                      className="font-futuru tracking-widest"
                    >
                      Generate
                    </div>
                    <div
                      style={{
                        left: "85px",
                        top: "8px",
                        position: "absolute",
                      }}
                    >
                      <ArrowRight size={20} color="white" />
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: "17.70px",
                    height: "17.70px",
                    left: "538.61px",
                    top: "3.64px",
                    position: "absolute",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div
            className={`flex md:hidden justify-center items-center w-screen h-[120px] right-2 sm:right-3 rounded-t-[24.99px]`}
            style={{
              position: "relative",
              background:
                "linear-gradient(125deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0) 100%)",
              outline: "1.04px rgba(255, 255, 255, 0.20) solid",
              outlineOffset: "-1.04px",
              backdropFilter: "blur(15.62px)",
            }}
          >
            <div className="w-screen max-w-3xl rounded-full bg-white/10 backdrop-blur-lg border border-white/20 p-1 flex items-center overflow-hidden mx-3 font-futuru">
              <div className="flex items-center space-x-3 px-2">
                <Image src="/ai/ai-logo.png" alt="sparkle" width={20} height={20} />
              </div>
              <p className="flex-1 text-white text-[8.988px] opacity-90 whitespace-nowrap overflow-hidden text-ellipsis tracking-widest font-futuru">
                A modern art gallery, Magritte and Chagall style.
              </p>
              <span className="text-white animate-pulse text-lg">|</span>
              <button className="ml-3 bg-white/10 border border-white/10 shadow-inner shadow-white/10 backdrop-blur-sm rounded-full px-5 py-2 text-white text-[8.988px] tracking-wider font-medium flex items-center space-x-2 hover:bg-white/20 transition">
                <span>Generate</span>
                <ArrowRight size={12} className="mt-1" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
