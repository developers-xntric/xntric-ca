"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FAQ } from "@/components/HomePage/Faqs";

gsap.registerPlugin(ScrollTrigger);

export default function NewFaqs({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !sidebarRef.current || !contentRef.current) return;

    const section = sectionRef.current;
    const sidebar = sidebarRef.current;
    const content = contentRef.current;

    // Reset styles for mobile and cleanup previous animations
    if (window.innerWidth < 1024) {
      gsap.set([section, sidebar], { clearProps: "all" });
      return;
    }

    const ctx = gsap.context(() => {
      // Get heights for calculations
      const sidebarHeight = sidebar.offsetHeight;
      const contentHeight = content.offsetHeight;

      // Make FAQ section sticky
      gsap.set(content, {
        position: "sticky",
        top: 0,
        zIndex: 10,
      });

      // Calculate the maximum distance the sidebar can scroll
      const maxSidebarTravel = Math.max(contentHeight - sidebarHeight, 0);

      // Animate the sidebar scrolling down while FAQ stays sticky
      gsap.fromTo(sidebar,
        { y: 0 },
        {
          y: maxSidebarTravel,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${maxSidebarTravel}`,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        }
      );

      // Subtle fade-in effect for the sidebar
      gsap.fromTo(
        sidebar,
        { opacity: 0.8, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    // Refresh ScrollTrigger on window resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, [faqs]);

  return (
    <div
      ref={sectionRef}
      className="bg-black text-white section-container font-futuru py-16 md:py-10 2xl:py-16"
    >
      <style jsx>{`
      @media (min-width: 1024px) {
         .section-container {
          min-height: auto;
        }
      }
        .section-container {
          position: relative;
        }
        .content-wrapper {
          position: relative;
          height: auto;
          display: flex;
          gap: 2.5rem;
        }
        .faq-sticky {
          position: sticky;
          top: 0;
          height: fit-content;
          z-index: 10;
        }
        .sidebar-container {
          position: relative;
          will-change: transform;
        }
        @media (max-width: 1023px) {
          .section-container {
            min-height: auto !important;
          }
          .content-wrapper {
            display: flex;
            flex-direction: column;
          }
          .faq-sticky {
            position: static !important;
            top: auto !important;
            z-index: auto !important;
          }
          .sidebar-container {
            position: static !important;
            transform: none !important;
            opacity: 1 !important;
            width: 100%;
            max-width: 100%;
            margin-top: 2rem;
          }
        }
      `}</style>

      <div className="2xl:max-w-[1740px] w-[95%] lg:w-[90%] mx-auto px-2 md:px-0">
        <div className="space-y-7">
          <div className="space-y-16">
            <div className="space-y-6 font-futuru">
              <h2 className="text-[30px] leading-[32px] md:leading-[50px] md:text-[55px] font-futuru lg:leading-[62px] max-w-[800px] font-semibold">
                TAKES YOUR BRAND TO NEW LEVELS OF{" "}
                <span className="text-[#00AA71]">DIGITAL</span> EXCELLENCE.
              </h2>
              <p className="text-white text-[14px] lg:text-[18px] font-light md:leading-[25px] tracking-wider md:tracking-widest max-w-[950px]">
                Building a brand goes beyond just a logo. It’s everything your audience interacts with, from your website and office interior to marketing materials, t-shirts, brochures, and more. Xntric is your launchpad for digital success.
              </p>
            </div>
          </div>

          <div
            ref={contentRef}
            className="content-wrapper flex justify-between gap-10 lg:w-[93%] mx-auto relative"
          >
            {/* FAQ Section */}
            <div className="faq-sticky relative z-10 lg:w-[60%]">
              <FAQ faqData={faqs} />
            </div>

            {/* Sidebar Card */}
            <div className="lg:relative lg:w-[50%] -right-[6%] 2xl:-right-[10%] ">
              <div
                ref={sidebarRef}
                className="sidebar-container flex items-start justify-center lg:justify-start rounded-[6.252px] lg:w-full"
              >
                <div className="sidebar-inner relative rounded-[6.252px] p-6 w-full max-w-md lg:max-w-sm 2xl:max-w-md text-sm xl:text-base bg-[url('/HomePage/message-bg.svg')] bg-cover bg-center">
                  <div className="mb-3 2xl:mb-6 relative">
                    <Image
                      src="/HomePage/client-pics.svg"
                      alt="Phone Image"
                      width={100}
                      height={100}
                      className="rounded-[10px] xl:w-[90px] w-[80px] md:w-[90px]"
                    />
                  </div>

                  <h3 className="text-[22px] md:text-[26px] 2xl:text-[30px] text-white font-semibold tracking-wider mb-6 2xl:max-w-[80%] leading-[25px] 2xl:leading-[35px]">
                    Find the right solution for you now
                  </h3>

                  <Link href="#fill-form">
                    <button className="bg-white text-[14px] text-black py-2 2xl:py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-100 hover:transform hover:scale-105">
                      BOOK A QUICK CALL
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}