"use client";

import { ArrowRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useWindowWidth } from "../ai/ai-hero";

interface TrafficConversionSectionProps {
  scrollingText?: string;
  mainText?: string;
  buttonText?: string;
  videoSource?: string;
  isPaddingBottom?: boolean;
  onButtonClick?: () => void;
  line?: boolean;
  isContact?: boolean;
  isBlogPage?: boolean;
}

export const texts = [
  { heading: "Publish for free" },
  { heading: "No credit card" },
  { heading: "120 free credits" },
  { heading: "Custom AI copy" },
];

export default function BigIdeas({
  mainText = "Your next big idea's just one click away.",
  buttonText = "Get Started",
  onButtonClick,
  isContact,
  line,
  isBlogPage
}: TrafficConversionSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [duration, setDuration] = useState(20);
  const width = useWindowWidth();

  const duplicatedAwards = [...texts, ...texts];

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
    return () => window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, []);

  return (
    <section className="relative overflow-hidden lg:pt-14 lg:pb-20 ">
      {/* Main text */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className={`text-white tracking-wide font-['Futuru'] ${isBlogPage ? "max-w-[60%]" : " 2xl:max-w-[60%]"}  mx-auto text-[28px] md:text-4xl lg:text-[44px] font-semibold leading-7 `}>
          {mainText}
        </p>

        {/* Moving text */}
        {line && (
          <div className="marquee-wrapper overflow-hidden relative mx-auto mt-10 w-[100%] md:w-[70%] lg:w-[55%]">
            <motion.div
              key={duration}
              className="flex gap-28 lg:gap-40 whitespace-nowrap"
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{
                duration,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {duplicatedAwards.map((award, index) => (
                <div key={index} className="flex flex-col min-w-[10%] gap-3">
                  {award.heading && (
                    <p className="glow-text text-[18px] lg:text-[22px] text-white font-light tracking-wide font-['Futuru']">
                      {award.heading}
                    </p>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        )}

        {/* CTA */}
        <div className="flex items-center justify-center mt-5 md:mt-10">
          <Link
            href={`${isContact ? "/contact" : "#fill-form"}`}
            className="mt-10 md:mt-12 cursor-pointer border-4 border-[#39413d] transition-colors duration-300 rounded-full text-white bg-[url('/ai/get-started-bg.png')] bg-cover bg-center bg-no-repeat bg-[#00AA71]/80 flex items-center justify-center gap-4 md:gap-5 mx-auto
            w-64 h-20 text-2xl
            sm:w-[360px] sm:h-24 sm:text-3xl
            md:w-[420px] md:h-[110px] md:text-4xl
            lg:w-[480px] lg:h-[130px] lg:text-[61px]"
            onClick={onButtonClick}
          >
            <div className="relative flex items-center gap-3 md:gap-5 font-medium">
              <p className="relative lg:bottom-1">{buttonText}</p>
              <ArrowRight
                size={width < 500 ? 28 : 36}
                className="top-1 relative md:size-12"
              />
            </div>
          </Link>
        </div>
      </div>

      {/* Bottom SVG Pattern */}
      <div className="mx-auto w-full lg:w-[90%] 2xl:w-[1440px] relative md:block hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="211"
          viewBox="0 0 1573 211"
          fill="none"
          className="w-full h-auto"
          preserveAspectRatio="xMidYMid slice"
        >
          <g style={{ mixBlendMode: "plus-lighter" }} opacity="0.35">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M783.319 0.0742188L917.963 24.0974L1012.15 48.1061L1127.56 81.6114L1127.56 81.6121L1269.16 121.973L1269.17 121.974L1410.76 163.861L1410.76 163.863L1572.89 209.159L1572.74 210.234L0.997548 210.234L0.835937 209.164L147.404 163.861L296.791 121.972L296.803 121.969L454.681 81.6084L454.685 81.6075L582.115 48.1063L582.12 48.1049L669.921 24.1006L783.319 0.0742188ZM582.33 49.1815L459.054 81.5904H565.717L652.205 49.1815L582.33 49.1815ZM655.325 49.1815L568.836 81.5904L642.406 81.5904L698.382 49.1815H655.325ZM700.272 48.0869H658.246L719.377 25.1799L739.837 25.1799L700.272 48.0869ZM700.566 49.1815L644.59 81.5904H719.299L744.652 49.1815L700.566 49.1815ZM745.509 48.0869L702.457 48.0869L742.021 25.1799H763.429L745.509 48.0869ZM746.042 49.1815L720.688 81.5904L774.964 81.5904L778.092 49.1815H746.042ZM778.198 48.0869H746.898L764.819 25.1799L780.409 25.1799L778.198 48.0869ZM779.192 49.1815L776.064 81.5904H830.4L811.302 49.1815L779.192 49.1815ZM810.657 48.0869L779.298 48.0869L781.509 25.1799H797.159L810.657 48.0869ZM812.573 49.1815L831.67 81.5904H906.256L856.646 49.1815H812.573ZM854.97 48.0869H811.927L798.429 25.1799H819.905L854.97 48.0869ZM858.647 49.1815L908.257 81.5904L982.291 81.5904L902.058 49.1815L858.647 49.1815ZM899.348 48.0869L856.971 48.0869L821.906 25.1799H842.639L899.348 48.0869ZM904.98 49.1815L985.213 81.5904L1123.56 81.5904L1011.93 49.1815L904.98 49.1815ZM1007.65 48.0869L902.271 48.0869L845.561 25.1799L917.778 25.1799L1007.65 48.0869ZM911.664 24.0854L842.852 24.0854L788.41 2.0944L911.664 24.0854ZM777.371 3.44838L722.298 24.0854L741.727 24.0854L777.371 3.44838ZM743.912 24.0854H764.285L781.154 2.52306L743.912 24.0854ZM782.603 2.44659L765.675 24.0854L780.515 24.0854L782.603 2.44659ZM781.614 24.0854H796.514L783.711 2.3597L781.614 24.0854ZM784.987 2.36925L797.784 24.0854H818.229L784.987 2.36925ZM820.231 24.0854L839.929 24.0854L788.317 3.23716L820.231 24.0854ZM719.179 24.0854L776.304 2.67938L675.273 24.0854L719.179 24.0854ZM670.123 25.1799L586.336 48.0869L655.126 48.0869L716.258 25.1799L670.123 25.1799ZM1127.34 82.6849L987.923 82.6849L1085.13 121.952L1265.09 121.952L1127.34 82.6849ZM1268.93 123.046L1087.84 123.046L1188.83 163.841H1406.83L1268.93 123.046ZM1410.53 164.935H1191.54L1300.98 209.139L1568.75 209.139L1410.53 164.935ZM1298.05 209.139L1188.62 164.935L1035.84 164.935L1103.5 209.139L1298.05 209.139ZM1101.5 209.139L1033.84 164.935H880.783L906.832 209.139H1101.5ZM905.561 209.139L879.513 164.935L768.02 164.935L763.753 209.139L905.561 209.139ZM762.654 209.139L766.92 164.935H655.487L620.906 209.139H762.654ZM619.516 209.139L654.097 164.935L500.638 164.935L424.29 209.139L619.516 209.139ZM422.106 209.139L498.454 164.935H346.416L228.451 209.139H422.106ZM225.332 209.139L343.297 164.935L147.634 164.935L4.62133 209.139L225.332 209.139ZM151.53 163.841L297.014 123.046L455.085 123.046L346.218 163.841L151.53 163.841ZM349.337 163.841H500.344L570.804 123.046H458.204L349.337 163.841ZM461.125 121.952H572.694L640.515 82.6849L565.915 82.6849L461.125 121.952ZM562.796 82.6849H454.889L301.289 121.952L458.006 121.952L562.796 82.6849ZM642.7 82.6849L574.879 121.952L687.724 121.952L718.442 82.6849H642.7ZM719.832 82.6849L689.113 121.952L771.069 121.952L774.859 82.6849L719.832 82.6849ZM775.958 82.6849L772.168 121.952H854.184L831.045 82.6849H775.958ZM832.315 82.6849L855.454 121.952L968.039 121.952L907.931 82.6849H832.315ZM909.933 82.6849L970.041 121.952H1082.21L985 82.6849L909.933 82.6849ZM1084.92 123.046H971.716L1034.16 163.841L1185.91 163.841L1084.92 123.046ZM1032.16 163.841L969.715 123.046L856.099 123.046L880.138 163.841H1032.16ZM878.868 163.841L854.829 123.046H772.063L768.125 163.841L878.868 163.841ZM767.026 163.841L770.963 123.046L688.257 123.046L656.343 163.841H767.026ZM654.953 163.841L686.867 123.046L572.988 123.046L502.529 163.841L654.953 163.841Z"
              fill="url(#paint0_linear_519_3392)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_519_3392"
              x1="787.693"
              y1="-57.9255"
              x2="787.33"
              y2="209.687"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.255" stopColor="#3BE29A" stopOpacity="0" />
              <stop offset="1" stopColor="#3BE29A" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className={`mx-auto w-full lg:w-[90%] 2xl:w-[1440px]  ${isBlogPage ? "right-2" : "right-24"} relative bottom-10 block md:hidden`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="500"
          height="211"
          viewBox="0 0 430 211"
          fill="none"
        >
          <g style={{ mixBlendMode: "plus-lighter" }} opacity="0.35">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M211.319 0.402344L345.963 24.4255L440.153 48.4343L555.562 81.9395L555.565 81.9402L697.161 122.301L697.166 122.302L838.756 164.189L838.765 164.191L1000.89 209.488L1000.74 210.562L-571.002 210.562L-571.164 209.492L-424.596 164.189L-275.209 122.3L-275.197 122.297L-117.319 81.9365L-117.315 81.9356L10.1148 48.4344L10.12 48.4331L97.9209 24.4287L211.319 0.402344ZM10.3299 49.5096L-112.946 81.9185H-6.28326L80.2054 49.5096L10.3299 49.5096ZM83.3246 49.5096L-3.164 81.9185L70.4055 81.9185L126.382 49.5096H83.3246ZM128.272 48.4151H86.2456L147.377 25.508L167.837 25.508L128.272 48.4151ZM128.566 49.5096L72.59 81.9185H147.299L172.652 49.5096L128.566 49.5096ZM173.509 48.4151L130.457 48.4151L170.021 25.508H191.429L173.509 48.4151ZM174.042 49.5096L148.688 81.9185L202.964 81.9185L206.092 49.5096H174.042ZM206.198 48.4151H174.898L192.819 25.508L208.409 25.508L206.198 48.4151ZM207.192 49.5096L204.064 81.9185H258.4L239.302 49.5096L207.192 49.5096ZM238.657 48.4151L207.298 48.4151L209.509 25.508H225.159L238.657 48.4151ZM240.573 49.5096L259.67 81.9185H334.256L284.646 49.5096H240.573ZM282.97 48.4151H239.927L226.429 25.508H247.905L282.97 48.4151ZM286.647 49.5096L336.257 81.9185L410.291 81.9185L330.058 49.5096L286.647 49.5096ZM327.348 48.4151L284.971 48.4151L249.906 25.508H270.639L327.348 48.4151ZM332.98 49.5096L413.213 81.9185L551.564 81.9185L439.931 49.5096L332.98 49.5096ZM435.647 48.4151L330.271 48.4151L273.561 25.508L345.778 25.508L435.647 48.4151ZM339.664 24.4135L270.852 24.4135L216.41 2.42253L339.664 24.4135ZM205.371 3.77651L150.298 24.4135L169.727 24.4135L205.371 3.77651ZM171.912 24.4135H192.285L209.154 2.85118L171.912 24.4135ZM210.603 2.77472L193.675 24.4135L208.515 24.4135L210.603 2.77472ZM209.614 24.4135H224.514L211.711 2.68782L209.614 24.4135ZM212.987 2.69738L225.784 24.4135H246.229L212.987 2.69738ZM248.231 24.4135L267.929 24.4135L216.317 3.56529L248.231 24.4135ZM147.179 24.4135L204.304 3.0075L103.273 24.4135L147.179 24.4135ZM98.1234 25.508L14.3361 48.4151L83.1263 48.4151L144.258 25.508L98.1234 25.508ZM555.335 83.0131L415.923 83.0131L513.132 122.28L693.095 122.28L555.335 83.0131ZM696.932 123.374L515.842 123.374L616.834 164.169H834.83L696.932 123.374ZM838.534 165.263H619.544L728.976 209.467L996.747 209.467L838.534 165.263ZM726.054 209.467L616.621 165.263L463.838 165.263L531.504 209.467L726.054 209.467ZM529.503 209.467L461.837 165.263H308.783L334.832 209.467H529.503ZM333.561 209.467L307.513 165.263L196.02 165.263L191.753 209.467L333.561 209.467ZM190.654 209.467L194.92 165.263H83.4867L48.9055 209.467H190.654ZM47.5159 209.467L82.0971 165.263L-71.3617 165.263L-147.71 209.467L47.5159 209.467ZM-149.894 209.467L-73.5461 165.263H-225.584L-343.549 209.467H-149.894ZM-346.668 209.467L-228.703 165.263L-424.366 165.263L-567.379 209.467L-346.668 209.467ZM-420.47 164.169L-274.986 123.374L-116.915 123.374L-225.782 164.169L-420.47 164.169ZM-222.663 164.169H-71.6557L-1.19611 123.374H-113.796L-222.663 164.169ZM-110.875 122.28H0.694397L68.5151 83.0131L-6.08496 83.0131L-110.875 122.28ZM-9.20422 83.0131H-117.111L-270.711 122.28L-113.994 122.28L-9.20422 83.0131ZM70.6995 83.0131L2.87885 122.28L115.724 122.28L146.442 83.0131H70.6995ZM147.832 83.0131L117.113 122.28L199.069 122.28L202.859 83.0131L147.832 83.0131ZM203.958 83.0131L200.168 122.28H282.184L259.045 83.0131H203.958ZM260.315 83.0131L283.454 122.28L396.039 122.28L335.931 83.0131H260.315ZM337.933 83.0131L398.041 122.28H510.21L413 83.0131L337.933 83.0131ZM512.92 123.374H399.716L462.163 164.169L613.912 164.169L512.92 123.374ZM460.161 164.169L397.715 123.374L284.099 123.374L308.138 164.169H460.161ZM306.868 164.169L282.829 123.374H200.063L196.125 164.169L306.868 164.169ZM195.026 164.169L198.963 123.374L116.257 123.374L84.343 164.169H195.026ZM82.9533 164.169L114.867 123.374L0.988342 123.374L-69.4712 164.169L82.9533 164.169Z"
              fill="url(#paint0_linear_1394_9093)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_1394_9093"
              x1="215.693"
              y1="-57.5974"
              x2="215.33"
              y2="210.015"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.255" stop-color="#3BE29A" stop-opacity="0" />
              <stop offset="1" stop-color="#3BE29A" stop-opacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Local styles */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-wrapper::before,
        .marquee-wrapper::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 30px;
          z-index: 10;
          pointer-events: none;
        }

        .marquee-wrapper::before {
          left: 0;
          background: linear-gradient(to right, black 0%, transparent 100%);
        }

        .marquee-wrapper::after {
          right: 0;
          background: linear-gradient(to left, black 0%, transparent 100%);
        }
      `}</style>
    </section>
  );
}
