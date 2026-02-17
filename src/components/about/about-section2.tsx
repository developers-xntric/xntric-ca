"use client";

import dynamic from "next/dynamic";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TrafficConversionSectionProps {
  videoSource?: string;
}

const AboutSection2 = dynamic(
  () =>
    Promise.resolve(
      ({
        videoSource = "/about/xr.webm",
      }: TrafficConversionSectionProps) => {
        const videoRef = useRef<HTMLVideoElement>(null);

        useEffect(() => {
          if (videoRef.current) {
            videoRef.current.play().catch(() => {});
          }
        }, []);

        return (
          <div>
            <section className="bg-black relative overflow-hidden py-16 pb-20 lg:pb-0 lg:py-20">
              {/* Scrolling Text with video centered */}
              <div className="relative w-full md:overflow-hidden h-[160px] md:h-[180px] lg:h-[250px] flex items-center justify-center">
                <div className="absolute top-0 left-0 w-full h-full flex items-center z-20">
                  <div className="flex whitespace-nowrap animate-scroll gap-x-16 px-4 md:px-8">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <span
                        key={i}
                        className="text-white font-bold text-[26px] md:text-4xl lg:text-[180px] tracking-wide font-['Futuru'] flex gap-[100px] h-full items-center"
                      >
                        <span
                          style={{
                            fontSize: "180px",
                            fontWeight: "700",
                            fontStyle: "normal",
                            padding: "300px 0",
                            background: "linear-gradient(87deg, #FFF 4%, #3BE29A 50.42%)",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            color: "transparent",
                          }}
                        >
                          THE XNTRIC
                        </span>
                        <video
                          ref={videoRef}
                          className="w-[490px] h-[200px] object-cover rounded-[8px]"
                          autoPlay
                          loop
                          muted
                          playsInline
                          src={videoSource}
                        >
                          Your browser does not support the video tag.
                        </video>
                        <span
                          className="pe-96 text-[#00AA71]"
                          style={{
                            fontSize: "180px",
                          }}
                        >
                          REVOLUTION
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <style jsx>{`
                @keyframes scroll {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
                .animate-scroll {
                  animation: scroll 30s linear infinite;
                }
              `}</style>
            </section>
            <ValuesSection />
          </div>
        );
      }
    ),
  { ssr: false } // Disable server-side rendering
);

const ValuesSection = dynamic(
  () =>
    Promise.resolve(() => {
      const containerRef = useRef<HTMLDivElement>(null);

      useEffect(() => {
        if (!containerRef.current) return;

        const mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
          const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray<HTMLElement>(".card-rotate");

            cards.forEach((card, i) => {
              gsap.fromTo(
                card,
                { rotate: 0, y: 0 },
                {
                  rotate: i === 0 ? -6 : 4,
                  y: i === 0 ? 0 : -20,
                  scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 40%",
                    end: "top 40%",
                    scrub: 0,
                    toggleActions: "play reverse play reverse",
                  },
                  ease: "power1.inOut",
                  duration: 1,
                }
              );
            });
          }, containerRef);

          return () => ctx.revert();
        });

        return () => mm.revert();
      }, []);

      return (
        <section
          className="lg:py-16 px-4 relative lg:overflow-hidden bg-black lg:mt-16"
          ref={containerRef}
        >
          <div className="mx-auto md:max-w-[90%] lg:max-w-[88%] xl:max-w-[73%] 2xl:max-w-6xl relative z-10">
            <div className="flex flex-col md:flex-row gap-4 lg:gap-12 2xl:transform-gpu 2xl:scale-125 2xl:py-20">
              {/* What Makes Us Different Card */}
              <div
                className="card-rotate bg-[#00AA71] lg:h-[410px] rounded-[15px] md:rounded-3xl p-5 lg:p-8 relative overflow-hidden md:w-[60%] lg:w-[60%] xl:w-[63%] flex flex-col justify-between transition-transform duration-500"
              >
                <div className="flex lg:items-start items-center">
                  <h2 className="text-white text-[24px] lg:text-[35px] tracking-wide font-bold max-w-[90%] lg:max-w-[50%] lg:leading-9 leading-6 relative  bottom-7 lg:bottom-0">
                    WHAT MAKES US DIFFERENT
                  </h2>
                  {/* Green SVG in the top right */}
                  <div className="w-[40%] lg:w-[50%] flex justify-end ms-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="150"
                      height="150"
                      viewBox="0 0 214 214"
                      fill="none"
                      className="relative bottom-5"
                    >
                      <path
                        d="M186.409 106.52C186.409 150.641 150.641 186.409 106.52 186.409C62.3978 186.409 26.6299 150.641 26.6299 106.52C26.6299 62.3978 62.3978 26.6299 106.52 26.6299C150.641 26.6299 186.409 62.3978 186.409 106.52Z"
                        fill="url(#paint periodi0_linear_780_4621)"
                      />
                      <path
                        d="M173.094 106.519C173.094 143.287 143.288 173.094 106.52 173.094C69.7513 173.094 39.9448 143.287 39.9448 106.519C39.9448 69.7508 69.7513 39.9443 106.52 39.9443C143.288 39.9443 173.094 69.7508 173.094 106.519Z"
                        fill="url(#paint1_linear_780_4621)"
                      />
                      <path
                        opacity="0.8"
                        d="M54.9951 103.284C50.4427 100.475 46.6316 97.3117 43.8468 94.661C40.8579 91.8156 35.8266 90.6269 37.0329 94.5734C38.2778 98.6471 42.1791 104.916In 111.536C52.7665 122.882 47.1945 118.756 48.309 137.322C49.4235 155.888 58.3385 163.108 66.139 163.108C73.9396 163.108 81.7401 138.353 79.5116 123.913C77.2826 109.473 65.0246 109.473 54.9951 103.284Z"
                        fill="url(#paint2_linear_780_4621)"
                      />
                      <path
                        opacity="0.8"
                        d="M115.713 70.3365C123.758 68.2664 127.61 64.5429 128.932 62.3079C129.266 61.7434 129.493 61.1186 129.886 60.593C133.824 55.3193 146.86 54.0237 160.848 64.3941C175.542 75.2887 184.989 103.021 176.592 104.011C168.195 105.002 158.748 93.1164 149.302 89.1549C139.855 85.193 139.855 93.1164 144.054 103.021C148.252 112.925 140.905 116.887 139.855 124.81C138.806 132.734 127.259 150.562 120.962 145.61C114.664 140.657 115.713 123.82 113.614 114.906C111.515 105.992 98.9193 104.011 96.8202 93.1164C94.7208 82.2218 104.167 73.3077 115.713 70.3365Z"
                        fill="url(#paint3_linear_780_4621)"
                      />
                      <path
                        opacity="0.8"
                        d="M80.3575 41.1367C67.1317 47.0902 56.8869 57.6483 50.2634 66.7553C45.9077 72.7444 48.9079 81.0443 56.3117 81.1971C63.0733 81.3365 70.3589 79.1519 74.909 71.5684C84.8952 54.9247 93.217 64.9109 96.5458 58.2534C98.2261 54.8927 96.0192 49.5887 93.1858 45.0167C90.4891 40.6654 85.0254 39.0356 80.3575 41.1367Z"
                        fill="url(#paint4_linear_780_4621)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_780_4621"
                          x1="106.52"
                          y1="26.6299"
                          x2="106.52"
                          y2="186.409"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0.5" />
                          <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_780_4621"
                          x1="106.52"
                          y1="39.9443"
                          x2="106.52"
                          y2="173.094"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0.5" />
                          <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_780_4621"
                          x1="55.8416"
                          y1="92.0479"
                          x2="55.8416"
                          y2="163.108"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0.8" />
                          <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear_780_4621"
                          x1="133.24"
                          y1="56.5888"
                          x2="133.24"
                          y2="146.465"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0.8" />
                          <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient
                          id="paint4_linear_780_4621"
                          x1="69.8114"
                          y1="40.2253"
                          x2="69.8114"
                          y2="81.2031"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0.8" />
                          <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <p className="text-white text-[15px] xl:text-[18px] 2xl:text-[20px] tracking-wider leading-5 font-extralight lg:font-light relative bottom-1 md:bottom-8">
                  We take great pride in our work from the first concept to the finished
                  work; our method is based on guaranteeing excellence at every level.
                  Our pulse on the market distinguishes us we adopt a data-driven
                  strategy, track trends, and above all produce amazing designs that
                  effortlessly meet modern technology. Our work really distinguishes
                  itself because of this ideal mix of innovation, strategy.
                </p>
              </div>

              {/* Our Values Card */}
              <div
                className="card-rotate bg-white rounded-[15px] md:rounded-3xl  p-5 lg:p-8 shadow-lg relative overflow-hidden md:w-[40%] lg:w-[40%] xl:w-[37%] flex flex-col justify-between transition-transform duration-500"
              >
                <h2 className="text-black relative top-5 md:top-0 text-[25px] lg:text-[35px] tracking-wide max-w-[50%] font-extrabold mb-16 md:mb-10 leading-6 lg:leading-9">
                  OUR VALUES
                </h2>
                {/* Green badge in the top right */}
                <div className="absolute top-4 right-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    viewBox="0 0 121 121"
                    fill="none"
                  >
                    <path
                      d="M47.0347 15.943C46.3626 14.7909 45.1292 14.0825 43.7955 14.0825H26.2282C23.334 14.0825 21.5308 17.2221 22.9892 19.722L44.8641 57.222C45.5361 58.3741 46.7694 59.0825 48.1033 59.0825H65.6706C68.5646 59.0825 70.368 55.943 68.9096 53.4431L47.0347 15.943Z"
                      fill="url(#paint0_linear_780_4633)"
                    />
                    <path
                      d="M74.8641 15.943C75.5361 14.7909 76.7694 14.0825 78.1033 14.0825H95.6706C98.5646 14.0825 100.368 17.2221 98.9096 19.722L77.0347 57.222C76.3626 58.3741 75.1292 59.0825 73.7955 59.0825H56.2282C53.334 59.0825 51.5308 55.943 52.9892 53.4431L74.8641 15.943Z"
                      fill="url(#paint1_linear_780_4633)"
                    />
                    <path
                      d="M94.7109 72.207C94.7109 90.8466 79.6005 105.957 60.9609 105.957C42.3214 105.957 27.2109 90.8466 27.2109 72.207C27.2109 53.5675 42.3214 38.457 60.9609 38.457C79.6005 38.457 94.7109 53.5675 94.7109 72.207Z"
                      fill="url(#paint2_linear_780_4633)"
                    />
                    <path
                      d="M87.2109 72.207C87.2109 86.7045 75.4584 98.457 60.9609 98.457C46.4634 98.457 34.7109 86.7045 34.7109 72.207C34.7109 57.7095 46.4634 45.957 60.9609 45.957C75.4584 45.957 87.2109 57.7095 87.2109 72.207Z"
                      fill="url(#paint3_linear_780_4633)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_780_4633"
                        x1="48.7114"
                        y1="14.0825"
                        x2="48.7114"
                        y2="59.0825"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#00AA71" stopOpacity="0.8" />
                        <stop offset="1" stopColor="#00AA71" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_780_4633"
                        x1="75.9493"
                        y1="14.0825"
                        x2="75.9493"
                        y2="59.0825"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#00AA71" stopOpacity="0.5" />
                        <stop offset="1" stopColor="#00AA71" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_780_4633"
                        x1="60.9609"
                        y1="38.457"
                        x2="60.9609"
                        y2="105.957"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#00AA71" stopOpacity="0.5" />
                        <stop offset="1" stopColor="#00AA71" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_780_4633"
                        x1="57.8726"
                        y1="45.957"
                        x2="57.8726"
                        y2="98.457"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#00AA71" stopOpacity="0.8" />
                        <stop offset="1" stopColor="#00AA71" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <p className="text-[#101010] opacity-80 text-[15px] xl:text-[17px] 2xl:text-[19px] tracking-wider leading-[17px] max-w-[100%] 2xl:max-w-[99%] font-medium pb-2 md:pb-0">
                  We are driven by our work as we understand the influence of a research
                  driven digital product. It is about producing a research driven digital
                  product. It is about producing something people connect with and trust,
                  not just about code or design. We pride ourselves on accomplishing
                  things the correct way by being mindful of our responsibility towards
                  our community.
                </p>
              </div>
            </div>
          </div>
        </section>
      );
    }),
  { ssr: false } // Disable server-side rendering
);

export default AboutSection2;
export { ValuesSection };