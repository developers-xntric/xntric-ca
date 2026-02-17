/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export type Step = {
  number: string;
  title: string;
  description: string;
  icon: string;
  bgImage: string;
  bgColor: string;
};

function StepCard({ step, index }: { step: Step; index: number }) {
  const cardRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (!isMounted || isDesktop === null) return;

    ScrollTrigger.getAll().forEach((trigger) => {
      if (trigger.trigger === cardRef.current) {
        trigger.kill();
      }
    });

    gsap.set(cardRef.current, {
      opacity: index === 0 ? 1 : 0,
    });

    if (index > 0) {
      const timer = setTimeout(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: cardRef.current,
            start: isDesktop ? "top 8%" : "top bottom", 
            end: isDesktop ? "bottom top" : "bottom top",
            toggleActions: "play reverse play reverse",
            scrub: isDesktop ? 5 : false,
            refreshPriority: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.to(cardRef.current, {
          opacity: 1,
          duration: isDesktop ? 2 : 1,
          ease: "power2.out",
          delay: isDesktop ? (index - 1) * 2 : (index - 1) * 0.5,
        });
      }, 100);

      return () => {
        clearTimeout(timer);
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.trigger === cardRef.current) {
            trigger.kill();
          }
        });
      };
    }
  }, [index, isDesktop, isMounted]);

  if (!isMounted || isDesktop === null) {
    return (
      <section
        className={`relative min-h-[40vh] lg:min-h-[80vh] lg:w-[40%] flex flex-col justify-start ${step.bgColor}`}
      >
        <div className="opacity-0">Loading...</div>
      </section>
    );
  }

  return (
    <section
      ref={cardRef}
      className={`relative min-h-[40vh] lg:min-h-[80vh] lg:w-[40%] flex flex-col justify-start ${step.bgColor}`}
    >
      {step.bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{ backgroundImage: `url(${step.bgImage})` }}
        />
      )}
      <div
        className={`absolute inset-0 ${
          step.number === "04" ? "bg-[#00AA71] opacity-30 " : ""
        } `}
      />
      <div
        className={`opacity-70 text-center  ${
          step.number === "04" ? "text-black " : "text-white"
        } text-lg font-['Futuru'] leading-[27px] absolute top-[8%] left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
      >
        {step.number}
      </div>

      <div className="relative z-10 text-center p-6 font-futuru flex flex-col items-center justify-center h-full mt-8 lg:mt-0">
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center">
              <Image
                src={step.icon || "/placeholder.svg"}
                alt={step.number}
                width={50}
                height={50}
                className={`${step.number === "03" ? "w-[95px]" : ""}`}
              />
            </div>
          </div>
          <h3
            className={`xl:w-[233px mx-auto text-center  text-[28px] xl:text-[34px] font-semibold tracking-wide font-futuru uppercase leading-[35px] ${
              step.number === "04" ? "text-black " : "text-white"
            }`}
          >
            {step.title}
          </h3>
          <div
            className={`xl:w-[280px] min-h-20 mx-auto opacity-70 text-center text-base  font-futuru leading-[21px] ${
              step.number === "04"
                ? "text-black font-semibold tracking-wide "
                : "text-white font-light tracking-wider "
            }`}
          >
            {step.description}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function NewOurProcess({
  steps,
  para,
}: {
  steps: any;
  para?: string;
}) {
  const sectionRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (!isMounted || isDesktop === null) return;

    if (isDesktop) {
      const timer = setTimeout(() => {
        const pinTrigger = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 8%",
          end: "+=150%",
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          scrub: 1,
          refreshPriority: 0,
          invalidateOnRefresh: true,
        });

        return () => {
          pinTrigger.kill();
        };
      }, 150);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isDesktop, isMounted]);

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <div className="bg-black md:py-16 font-futuru space-y-6 md:space-y-20">
      <div className="bg-black">
        <div className="text-white mx-auto px-6 py-6 text-center md:space-y-8">
          <div className="-space-y-7">
            <h2 className="text-[30px] md:text-[55px] font-futuru leading-[10px] md:leading-[62px] font-semibold">
              OUR PROCESS
            </h2>
            <br />
            <h2 className="text-[30px] md:text-[55px] leading-[62px] text-white/80 font-semibold">
              THE <span className="text-[#00AA71]">XNTRIC</span> WAY
            </h2>
          </div>
          <p className="self-stretch text-center justify-start text-white text-[14px] lg:text-xl font-light tracking-wide font-futuru leading-[27px]">
            {para || "Our Proven 5-Step Process to Digital Excellence"}
          </p>
        </div>
      </div>

      <div
        ref={sectionRef}
        className="grid lg:flex"
        style={{
          zIndex: 10,
        }}
      >
        {steps.map((step: Step, index: number) => (
          <StepCard key={index} step={step} index={index} />
        ))}
      </div>
    </div>
  );
}
