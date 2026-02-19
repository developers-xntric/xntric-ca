"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DigitalExcellencePopup from "../services/popups";
import { usePathname } from "next/navigation";

interface HeroSectionProps {
  heading?: string;
  rightImage?: string;
  bottomParagraph?: string;
  para?: string;
  imageclassName?: string;
  headingClassName?: string;
  buttonText?: string;
  socialLinks?: boolean;
  isPopup?: boolean;
}

const MouseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="27"
    height="27"
    viewBox="0 0 27 27"
    fill="none"
  >
    <path
      d="M7.39258 10.3575C7.39258 8.6584 8.06752 7.02894 9.26893 5.82753C10.4703 4.62612 12.0998 3.95117 13.7989 3.95117C15.4979 3.95117 17.1274 4.62612 18.3288 5.82753C19.5302 7.02894 20.2051 8.6584 20.2051 10.3575V16.7637C20.2051 18.4628 19.5302 20.0923 18.3288 21.2937C17.1274 22.4951 15.4979 23.17 13.7989 23.17C12.0998 23.17 10.4703 22.4951 9.26893 21.2937C8.06752 20.0923 7.39258 18.4628 7.39258 16.7637V10.3575Z"
      stroke="white"
      stroke-width="1.60162"
      stroke-linejoin="round"
    />
    <path
      d="M13.7988 8.22266V12.4927"
      stroke="white"
      stroke-width="1.60162"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default function ServiceInnerHero({
  socialLinks,
  isPopup,
  imageclassName,
  heading = "UI/UX DESIGN SERVICES IN DUBAI",
  rightImage = "/service-inner/ui-hero.png",
  para = "Start your project with a custom web experience. Discover modern opportunities to boost your online performance.",
  buttonText,
  headingClassName,
}: HeroSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  return (
    <section className="relative font-futuru lg:bg-cover bg-top-left sm:bg-center bg-no-repeat overflow-hidden lg:border-t lg:border-b border-b pb-6 md:pb-0 border-[#3C3C3C] bg-[url('/service-inner/mbs-hero.png')] mt-7 sm:bg-[url('/service-inner/sv-hero-bg.png')]">
      {/* Main Content Container */}
      <div className="mx-auto px-6 xl:px-16 lg:h-[93vh] flex items-center w-[98%] md:w-[90%] 2xl:w-[1640px] lg:border-l lg:border-white/30 mt-6 lg:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8 lg:space-y-12">
            {/* Main Heading */}
            <div
              className={`gradient-text-service-inner text-[50px] md:text-[60px] xl:leading-[68px] leading-[47px] lg:leading-[53px] ${pathName === "/services/seo" ? "xl:text-[75px]" : "xl:text-[82px]"} ${headingClassName
                ? headingClassName
                : "sm:max-w-[75%] w-[100%] md:max-w-[50%] lg:max-w-[73%] 2xl:max-w-[65%]"
                }`}
            >
              <h2>{heading}</h2>
            </div>

            {/* Paragraph with Star */}
            <div className="flex items-start gap-3 w-full md:max-w-sm">
              <p className="text-white/90 font-medium text-[17px] md:text-[20px] leading-[22px] md:leading-[22px] lg:max-w-[89%] relative tracking-wider font-futuru">
                <span className="inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="25"
                    viewBox="0 0 23 30"
                    fill="none"
                  >
                    <path
                      d="M13.0929 11.9789C13.2932 11.3779 14.1419 11.3779 14.3422 11.9789L15.5167 15.5062C15.7753 16.2816 16.2109 16.9862 16.789 17.564C17.3671 18.1418 18.0719 18.577 18.8475 18.8351L22.373 20.0097C22.974 20.21 22.974 21.0586 22.373 21.2589L18.8456 22.4335C18.0702 22.6921 17.3657 23.1276 16.7879 23.7058C16.2101 24.2839 15.7749 24.9887 15.5167 25.7642L14.3422 29.2898C14.299 29.4214 14.2153 29.536 14.1032 29.6172C13.991 29.6984 13.856 29.7422 13.7175 29.7422C13.5791 29.7422 13.4441 29.6984 13.3319 29.6172C13.2198 29.536 13.1361 29.4214 13.0929 29.2898L11.9183 25.7624C11.66 24.9872 11.2247 24.2828 10.6469 23.705C10.0691 23.1272 9.36468 22.6919 8.58947 22.4335L5.06209 21.2589C4.9305 21.2157 4.81591 21.1321 4.73466 21.0199C4.65342 20.9078 4.60968 20.7728 4.60968 20.6343C4.60968 20.4958 4.65342 20.3609 4.73466 20.2487C4.81591 20.1365 4.9305 20.0529 5.06209 20.0097L8.58947 18.8351C9.36468 18.5768 10.0691 18.1414 10.6469 17.5636C11.2247 16.9858 11.66 16.2814 11.9183 15.5062L13.0929 11.9789ZM6.0582 2.69331C6.08432 2.61445 6.13462 2.54582 6.20196 2.49718C6.26931 2.44854 6.35027 2.42236 6.43334 2.42236C6.51641 2.42236 6.59737 2.44854 6.66472 2.49718C6.73206 2.54582 6.78236 2.61445 6.80848 2.69331L7.51322 4.80937C7.82827 5.75268 8.56761 6.49202 9.51092 6.80707L11.627 7.51181C11.7058 7.53793 11.7745 7.58823 11.8231 7.65557C11.8717 7.72292 11.8979 7.80388 11.8979 7.88695C11.8979 7.97002 11.8717 8.05098 11.8231 8.11833C11.7745 8.18567 11.7058 8.23597 11.627 8.26209L9.51092 8.96683C9.04568 9.12184 8.62295 9.38306 8.2762 9.72981C7.92945 10.0766 7.66822 10.4993 7.51322 10.9645L6.80848 13.0806C6.78236 13.1595 6.73206 13.2281 6.66472 13.2767C6.59737 13.3254 6.51641 13.3515 6.43334 13.3515C6.35027 13.3515 6.26931 13.3254 6.20196 13.2767C6.13462 13.2281 6.08432 13.1595 6.0582 13.0806L5.35346 10.9645C5.19845 10.4993 4.93723 10.0766 4.59048 9.72981C4.24373 9.38306 3.82099 9.12184 3.35576 8.96683L1.2397 8.26209C1.16084 8.23597 1.09221 8.18567 1.04357 8.11833C0.99493 8.05098 0.96875 7.97002 0.96875 7.88695C0.96875 7.80388 0.99493 7.72292 1.04357 7.65557C1.09221 7.58823 1.16084 7.53793 1.2397 7.51181L3.35576 6.80707C3.82099 6.65206 4.24373 6.39084 4.59048 6.04409C4.93723 5.69735 5.19845 5.27461 5.35346 4.80937L6.0582 2.69331ZM18.9312 0.783026C18.9492 0.731174 18.9829 0.686212 19.0276 0.65439C19.0723 0.622568 19.1258 0.605469 19.1807 0.605469C19.2356 0.605469 19.2891 0.622568 19.3338 0.65439C19.3785 0.686212 19.4122 0.731174 19.4302 0.783026L19.9 2.19252C20.1094 2.8226 20.6029 3.31611 21.233 3.52553L22.6425 3.99536C22.6944 4.01334 22.7393 4.04703 22.7712 4.09174C22.803 4.13645 22.8201 4.18997 22.8201 4.24485C22.8201 4.29973 22.803 4.35324 22.7712 4.39795C22.7393 4.44267 22.6944 4.47635 22.6425 4.49433L21.233 4.96416C20.9225 5.06746 20.6404 5.24172 20.409 5.47311C20.1776 5.70451 20.0033 5.98666 19.9 6.29717L19.4302 7.70667C19.4122 7.75852 19.3785 7.80348 19.3338 7.8353C19.2891 7.86712 19.2356 7.88422 19.1807 7.88422C19.1258 7.88422 19.0723 7.86712 19.0276 7.8353C18.9829 7.80348 18.9492 7.75852 18.9312 7.70667L18.4614 6.29717C18.3581 5.98666 18.1838 5.70451 17.9524 5.47311C17.721 5.24172 17.4389 5.06746 17.1284 4.96416L15.7207 4.49433C15.6689 4.47635 15.6239 4.44267 15.5921 4.39795C15.5602 4.35324 15.5431 4.29973 15.5431 4.24485C15.5431 4.18997 15.5602 4.13645 15.5921 4.09174C15.6239 4.04703 15.6689 4.01334 15.7207 3.99536L17.1302 3.52553C17.7603 3.31611 18.2538 2.8226 18.4632 2.19252L18.9312 0.784847V0.783026Z"
                      fill="url(#paint0_linear_532_4045)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_532_4045"
                        x1="11.8962"
                        y1="0.605469"
                        x2="11.8962"
                        y2="29.7422"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="#3BE29A" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                {" " + para}
              </p>
            </div>

            {/* Bottom Section */}
            <div className="flex lg:flex-row flex-col lg:items-center gap-6 tracking-wider items-start">
              {isPopup && (
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="bg-[#00AA71] hover:bg-[#00AA71]/80 transition-colors duration-300 font-light px-10 py-3 rounded-[8px] text-sm md:text-base text-[#FFF] text-[17px] tracking-wider font-['Futuru'] uppercase hover:bg-white hover:text-black"
                >
                  <div>
                    {buttonText ? buttonText : "Book Your Consultation!"}
                  </div>
                </button>
              )}
              {!isPopup && (
                <button className="bg-[#00AA71] hover:bg-[#00AA71]/80 transition-colors duration-300 font-light px-10 py-3 rounded-[8px] text-sm md:text-base text-[#FFF] text-[17px] tracking-wider font-['Futuru'] uppercase hover:bg-white hover:text-black">
                  <Link href={"#form"}>
                    {buttonText ? buttonText : "Book Your Consultation!"}
                  </Link>
                </button>
              )}
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`relative w-screen 2xl:w-[1000px] xl:right-5 2xl:right-[13%] py-6 lg:py-0 ${imageclassName}`}
          >
            <Image
              src={rightImage || "/placeholder.svg"}
              alt="UI/UX Design Preview"
              width={2500}
              height={2500}
              quality={100}
              className="2xl:h-[630px]"
            />
          </div>
        </div>
      </div>

      {/* Rotating Circular Text at Bottom Center */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 hidden xl:block">
        <div className="relative w-28 h-28">
          {/* Rotating Text */}
          <div className="absolute inset-0 animate-spin-slow">
            <svg
              className="w-full h-full"
              viewBox="0 0 160 160"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <path
                  id="circle"
                  d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                />
              </defs>
              <text
                className="text-xs md:text-md fill-white/80 font-medium tracking-wider"
                style={{ textTransform: "lowercase", letterSpacing: "0.5em" }}
              >
                <textPath fontSize={17} href="#circle" startOffset="0%">
                  Scroll down for work together
                </textPath>
              </text>
            </svg>
          </div>

          {/* Center Mouse Icon */}
          <Link
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector("#YearsAwwards");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
            href="#YearsAwwards"
            className="absolute inset-0 cursor-pointer flex items-center justify-center"
          >
            <MouseIcon />
          </Link>
        </div>

        <style jsx>{`
          @keyframes spin-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
        `}</style>
      </div>
      <DigitalExcellencePopup
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        showSocialLinks={socialLinks}
      />
    </section>
  );
}
