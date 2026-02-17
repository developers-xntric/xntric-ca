"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

interface TimelineStep {
  id: number;
  title: string;
  description: string;
  image: string;
  browserText: string;
}

// Timeline data
const timelineSteps: TimelineStep[] = [
  {
    id: 1,
    title: "Define Clear Business Goals",
    description:
      "Identify the specific challenges or opportunities AI will address. Set measurable objectives like improving efficiency, enhancing customer experience, or increasing revenue to ensure focused and impactful AI adoption.",
    image: "/ai/tl-new-2.svg",
    browserText: "Analyzing your requirements...",
  },
  {
    id: 2,
    title: "Prepare and Organize Quality Data",
    description:
      "Gather, clean, and structure your data to feed accurate and relevant information into AI models. High-quality, accessible data is the foundation for reliable AI insights and predictions.",
    image: "/ai/tl-new-2.svg",
    browserText: "Crafting your design...",
  },
  {
    id: 3,
    title: "Deploy Responsibly with Change Management and Governance",
    description:
      "Integrate AI solutions carefully into your workflows, involving key stakeholders and training teams to embrace the change. Establish governance to ensure ethical, transparent, and compliant AI usage.",
    image: "/ai/tl-new-2.svg",
    browserText: "Generating your design...",
  },
];

// Register plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TimelineSection(): JSX.Element {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const starRef = useRef<HTMLDivElement | null>(null);
  const browserTextRef = useRef<HTMLDivElement | null>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  const [activeImage, setActiveImage] = useState<string>(
    timelineSteps[0].image
  );

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth > 768) {
      const section = sectionRef.current;
      const container = containerRef.current;
      const star = starRef.current;

      if (!section || !container || !star) return;

      const ctx = gsap.context(() => {
        const stepPositions = [-60, 100, 270];
        const totalDistance = stepPositions[stepPositions.length - 1];

        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: `+=${window.innerHeight * 3}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const starY = progress * totalDistance;
            gsap.set(star, { y: starY });

            let currentStep = 0;
            if (
              starY >= stepPositions[1] - 20 &&
              starY < stepPositions[2] - 20
            ) {
              currentStep = 1;
            } else if (starY >= stepPositions[2] - 20) {
              currentStep = 2;
            }

            stepsRef.current.forEach((step, index) => {
              if (step) {
                if (index === currentStep) {
                  step.classList.add("active");
                  step.classList.remove("inactive");
                } else {
                  step.classList.remove("active");
                  step.classList.add("inactive");
                }
              }
            });

            if (browserTextRef.current) {
              browserTextRef.current.textContent =
                timelineSteps[currentStep].browserText;
            }
            setActiveImage(timelineSteps[currentStep].image);
          },
        });

        if (stepsRef.current[0]) {
          stepsRef.current[0].classList.add("active");
        }
        if (browserTextRef.current) {
          browserTextRef.current.textContent = timelineSteps[0].browserText;
        }
      }, section);

      return () => ctx.revert();
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth > 768) {
      ScrollTrigger.refresh();
    }
  }, []);

  const TitleBlock = (): JSX.Element => (
    <div className="lg:mb-8">
      <p className="pt-20 text-[#00AA71] text-[26px] md:text-[30px] font-medium mb-2 tracking-wide" style={{letterSpacing:"2px", textTransform:"capitalize"}}>
        AI implementation
      </p>
      <h2 className="text-[30px] xl:text-[50px] 2xl:text-[52px] font-semibold leading-[0.9] tracking-wide uppercase">
        SIMPLE STEPS,
        <br /> POWERFULL RESULS
      </h2>
    </div>
  );

  return (
    <div
      ref={sectionRef}
      className="xl:h-screen text-white overflow-hidden font-futuru pb-10"
    >
      <div
        ref={containerRef}
        className="h-full flex items-center justify-center px-6 xl:px-28"
      >
        <div className="w-full flex lg:flex-row flex-col-reverse lg:h-screen">
          {/* Left Side - Timeline */}
          <div className="relative w-full lg:w-[50%] xl:w-[37%] flex flex-col justify-center pb-20">
            <div className="lg:block hidden">
              <TitleBlock />
            </div>

            <div className="relative" >
              <div className="absolute left-[1.5%] 2xl:left-[1.1%] top-0 bottom-0 w-[2px] bg-[#1F1F1F] z-0 lg:block hidden" />

              <div
                ref={starRef}
                className="absolute left-2 z-20 transform -translate-x-1/2 transition-all duration-100 lg:block hidden"
              >
                <Image
                  src="/ai/ai-magic.webp.png"
                  alt="star"
                  width={50}
                  height={50}
                />
              </div>

              <div className="space-y-5 2xl:space-y-10 pl-0 lg:pl-8 relative z-10 md:py-8 lg:py-0">
                {timelineSteps.map((step, index) => (
                  <div
                    key={step.id}
                    ref={(el: HTMLDivElement | null) => {
                      stepsRef.current[index] = el;
                    }}
                    className="timeline-step inactive transition-all duration-300"
                  >
                    <h3 style={{
              fontFamily: "Futuru",
              background: "linear-gradient(264deg, #00AA71 0%, #FFF 66.57%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }} className="text-[22px] max-w-[400px] xl:text-[27px] 2xl:text-[28px] font-medium leading-7 tracking-wide mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[13px] 2xl:text-[16px] leading-[20px] font-light sm:max-w-[410px] lg:max-w-[350px] 2xl:max-w-[410px] tracking-widest text-[#FFFFFF80]">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative w-full md:w-[80%] lg:w-[50%] xl:w-[60%] 2xl:w-[63%] flex flex-col justify-center">
            <div className="lg:hidden block">
              <TitleBlock />
            </div>
            <div className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] 2xl:h-[700px] rounded-[12px] overflow-hidden">
              <Image
                src={activeImage}
                alt="timeline image"
                fill
                className="object-contain transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
