"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useWindowWidth } from "../ai/ai-hero";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  heading?: string;
  rightImage?: string;
  bottomParagraph?: string;
  para?: string;
  imageclassName?: string;
  headingClassName?: string;
}

const NewAboutHero = dynamic(
  () =>
    Promise.resolve(
      ({
        heading = "We help <br/> brands <br/> & products <br/> succeed.",
        para = "Too many websites are pretty facades with no real performance under the hood. We’ve seen it all slow load times, low conversions, clunky CMS, poor mobile experience",
      }: HeroSectionProps) => {
        const [isClient, setIsClient] = useState(false);
        const windowWidth = useWindowWidth();

        // Ensure windowWidth is only accessed client-side
        useEffect(() => {
          setIsClient(true);
        }, []);

        // Conditional styles based on window width
        const sectionHeight = isClient
          ? windowWidth < 340
            ? "h-[85vh]"
            : windowWidth < 380
            ? "h-[75vh]"
            : "h-[85vh]"
          : "h-[85vh]"; // Default for SSR

        const headingStyles = isClient
          ? `${windowWidth < 400 ? "text-[50px] leading-[45px]" : "text-[60px] leading-[52px]"} lg:text-[65px] xl:text-[75px] xl:leading-[63px] 2xl:text-[100px] 2xl:leading-[85px]`
          : "text-[60px] leading-[52px] lg:text-[65px] xl:text-[75px] xl:leading-[63px] 2xl:text-[100px] 2xl:leading-[85px]"; // Default for SSR

        return (
          <section
            className="relative lg:min-h-screen lg:bg-contain bg-right bg-no-repeat overflow-hidden top-10 lg:top-4 bg-[url('/about/about-mob.png')] lg:bg-[url('/about/about-hero.png')] bg-with-opacity"
          >
            {/* Main Content Container */}
            <div
              className={`mx-auto px-4 lg:px-8 ${sectionHeight} lg:h-screen flex items-center w-full md:w-[90%] 2xl:w-[1740px] relative z-10`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
                {/* Left Content */}
                <div className="space-y-8 lg:space-y-8">
                  {/* Main Heading */}
                  <div
                    className={`lg:max-w-[100%] tracking-wide ${headingStyles}`}
                    style={{
                      fontWeight: 700,
                      fontStyle: "normal",
                      padding: "7px 0",
                      textTransform: "uppercase",
                      background:
                        "linear-gradient(87deg, #FFF 4%, #3BE29A 50.42%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      color: "transparent",
                      whiteSpace: "pre-line",
                    }}
                    dangerouslySetInnerHTML={{ __html: heading }}
                  />

                  {/* Paragraph */}
                  <div className="flex items-start gap-3 max-w-sm">
                    <h1 className="text-white/80 text-sm md:text-[20px] 2xl:text-[21px] leading-[20px] 2xl:leading-[25px] lg:max-w-[95%] 2xl:max-w-[100%] relative font-light tracking-wider font-futuru">
                      {para}
                    </h1>
                  </div>

                  {/* Bottom Section */}
                  <Link
                    href="/contact"
                    className="flex w-fit items-center gap-6 tracking-wider"
                  >
                    <button
                      className="bg-[#00AA71] hover:bg-white hover:text-black transition-colors duration-500 px-9 2xl:px-12 2xl:py-[15px] py-[12px] rounded-[8px] text-sm md:text-[14px] 2xl:text-[18px] text-[#FFF] text-[14px] tracking-wider font-['Futuru'] font-semibold"
                    >
                      CONTACT US NOW
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      }
    ),
  { ssr: false } // Disable server-side rendering
);

export default NewAboutHero;