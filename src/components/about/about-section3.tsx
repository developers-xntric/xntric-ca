"use client";

import { useEffect, useRef } from "react";
import { useWindowWidth } from "../ai/ai-hero";

// Card data
const cards = [
  {
    heading: "Where <span style='color: #00AA71'>creativity</span> meets strategy",
    para: "Deep study, a strong awareness of human behavior, and a dedication to perfection drive every design we create. Our visually beautiful designs interact, entertain, and motivate action.",
  },
  {
    heading: "From <span style='color: #00AA71'>concept to code </span>websites done right",
    para: "We create websites meant to function rather than just aesthetically pleasing ones. Combining technical knowledge, strategy, and creativity, we create experiences that flow naturally across browsers, devices, and user interactions.",
  },
  {
    heading: "Optimized for discovery, <span style='color: #00AA71'>built for success</span>",
    para: "With a solid foundation in SEO knowledge and research, we make your brand visible in all the right places. We ensure your digital presence is easy to find and impossible to ignore",
  },
  {
    heading: "Making your identity <span style='color: #00AA71'>impossible</span> to forget",
    para: "We understand the power of a strong identity. Through research driven branding, we shape perceptions and craft narratives that make your brand unforgettable in a competitive world.",
  },
  {
    heading: "Where creativity meets <span style='color: #00AA71'>strategy</span>",
    para: "Deep study, a strong awareness of human behavior, and a dedication to perfection drive every design we create. Our visually beautiful designs interact, entertain, and motivate action.",
  },
];

export default function AboutSection3() {
  const sectionRef = useRef(null);
  const width = useWindowWidth();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          } else {
            entry.target.classList.remove("fade-in");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    const cards = document.querySelectorAll(".slider");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className=" mt-20 rounded-t-[32px] text-white lg:rounded-t-[50px] font-futuru pb-4 lg:pb-40 xl:pt-40 pt-20 relative"
    >
      <div className="w-[90%] 2xl:max-w-[1740px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column (Sticky) */}
          <div className="w-[96vw] lg:w-[40%] xl:w-[50%] sticky top-0 lg:top-20  z-[20] bg-black lg:bg-transparent h-fit">
            {width > 1024 ? (
              <h2 className="text-3xl md:text-4xl lg:text-[40px] xl:text-[45px] 2xl:text-[60px] font-bold uppercase mb-6 xl:mb-12 space-y-1 2xl:space-y-5">
                <div>WE SPECIALIZE IN</div>
                <div>ADVANCED,</div>
                <div>
                  INNOVATIVE <span className="text-[#00AA71]">DIGITAL</span>
                </div>
                <div>TECHNOLOGY,</div>
                <div>CRAFTED</div>
                <div>EXCLUSIVELY TO</div>
                <div>ALIGN WITH YOUR</div>
                <div>
                  <span className="text-[#00AA71]">BUSINESS</span> VISION.
                </div>
              </h2>
            ) : (
              <h2
                className={`${
                  width < 400 ? "text-[30px] leading-7" : "text-[34px] leading-9"
                } md:text-4xl lg:text-[40px] xl:text-[45px] 2xl:text-[60px] font-bold uppercase mb-6 xl:mb-12 space-y-1 2xl:space-y-5 z-30  py-7`}
              >
                We specialize in advanced, innovative{" "}
                <span className="text-[#00AA71]">DIGITAL</span> technology,
                crafted exclusively to align with your{" "}
                <span className="text-[#00AA71]">BUSINESS</span> vision.
              </h2>
            )}
            <p className="text-[#FFFFFF] opacity-70 text-[16px] md:text-[20px] leading-[20px] max-w-md relative lg:bottom-0 bottom-8">
              Too many websites are pretty facades with no real performance
              under the hood. We’ve seen it all slow load times, low
              conversions, clunky CMS, poor mobile experience.
            </p>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[60%] xl:w-[50%] space-y-20">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`slider opacity-0 transition-all duration-700 translate-y-12 relative flex flex-row justify-between items-start md:items-center pb-12 md:pb-16 border-b ${
                  index === 0 && "border-t pt-12"
                } border-[#3C3C3C]`}
              >
                <div className="relative z-10 w-[60%] lg:w-auto">
                  <h3
                     dangerouslySetInnerHTML={{
                  __html: card.heading,
                }}
                  className="text-[#FFF] text-[20px] md:text-[32px] lg:text-[26px] xl:text-[38px] leading-5 md:leading-8 font-bold mb-4 md:mb-6 lg:max-w-[70%] tracking-wide uppercase">
                    
                  </h3>
                  <p className="text-[#FFFFFF] font-normal opacity-70 text-[11px] md:text-[14px] lg:text-[14px] xl:text-[18px] leading-[13px] md:leading-[22px] tracking-wide w-[95%] md:max-w-[80%]">
                    {card.para}
                  </p>
                </div>
                <div
                  className={`${
                    width < 400 ? "text-[120px]" : "text-[130px]"
                  } h-full md:text-[200px] lg:text-[160px] 2xl:text-[290px] font-bold text-[#FFFFFF] leading-none z-0 select-none self-end md:self-auto mt-4 md:mt-0 w-[37%] absolute top-0 sm:-top-7 right-3 md:right-0 lg:static`}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
