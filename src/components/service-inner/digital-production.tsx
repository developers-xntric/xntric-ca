"use client";

import Link from "next/link";

interface DigitalProductsSectionProps {
  leftText?: string;
  mainHeading?: string;
  highlightWords?: string[];
  buttonText?: string;
  onButtonClick?: () => void;
  isWidth?: boolean;
}

export default function DigitalProducts({
  leftText = "From Startups To Global Brands, We Craft Web Experiences That Drive Results, Backed By Cutting-Edge Tech And A Deep Understanding Of Your Users.",
  mainHeading = "DIGITAL PRODUCTS NOT JUST WEBSITES A 360° APPROACH FOR MAXIMUM IMPACT",
  highlightWords = ["PRODUCTS", "360°"],
  buttonText = "CONTACT US NOW",
  isWidth = false,
  // onButtonClick,
}: DigitalProductsSectionProps) {
  const escapeRegExp = (str: string) =>
    str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const renderHighlightedText = (text: string, highlights: string[]) => {
    let result = text;
    highlights.forEach((highlight) => {
      const safeHighlight = escapeRegExp(highlight);
      result = result.replace(
        new RegExp(safeHighlight, "g"),
        `<span class="text-[#00AA71]">${highlight}</span>`,
      );
    });
    return result;
  };

  return (
    <section className="bg-black py-12 md:py-12 relative overflow-hidden w-[95%] xl:w-[90%] 2xl:w-[1740px] mx-auto font-futuru">
      <div className="mx-auto px-3 lg:px-8 relative z-10">
        <div className="flex lg:flex-row flex-col-reverse gap-6 lg:gap-12 xl:gap-16 lg:items-center">
          {/* Left Content - Bordered Card */}
          <div
            className={`border-2 border-[#3C3C3C] rounded-[8px] py-10 px-3 2xl:ml-10 5xl:ml-0 lg:p-12 bg-[#3C3C3C]/30 backdrop-blur-md min-h-[210px] md:min-h-[330px] 2xl:min-h-[420px] flex items-center md:w-[480px] ${isWidth ? "lg:w-[110%] 2xl:w-[1300px]" : "lg:w-auto 2xl:w-[1600px] 5xl:w-[1600px]"}   `}
          >
            <p className="text-white text-[16px] lg:text-[28px] 2xl:text-[32px] leading-[25px] md:leading-[35px] text-center font-medium tracking-wider font-futuru lg:max-w-[100%] ">
              {leftText}
            </p>
          </div>

          {/* Right Content - Main Heading and Button */}
          <div className="order-1 lg:order-2 space-y-12">
            <div>
              <h2
                className="text-[30px] md:text-[45px] lg:text-[35px] xl:text-[55px] font-semibold text-white leading-[30px] md:leading-[50px] lg:leading-[40px] xl:leading-[50px] md:max-w-[60%] lg:max-w-[100%] xl:max-w-[95%] 2xl:w-[65%] tracking-wide font-futuru uppercase"
                dangerouslySetInnerHTML={{
                  __html: renderHighlightedText(mainHeading, highlightWords),
                }}
              />
            </div>

            <div className="tracking-wider">
              <Link href="#fill-form">
                <button className="bg-[#00AA71] hover:bg-[#00AA71]/80 transition-colors duration-300 font-light px-8 py-3 rounded-[8px] text-sm md:text-base text-[#FFF] text-[17px] tracking-wider font-fututru hover:bg-white hover:text-black">
                  {buttonText}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
