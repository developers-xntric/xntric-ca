/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomCursor } from "../common/cursor";
import Link from "next/link";
import { useWindowWidth } from "../ai/ai-hero";

gsap.registerPlugin(ScrollTrigger);

const Section = ({
  alignment,
  title,
  description,
  imageSrc,
  link,
  layoutType,
}: any) => {
  const isReversed = alignment === "right";
  const sectionRef = useRef(null);
  const categoryRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);
  const [cursorType, setCursorType] = useState<any>(null);

  useEffect(() => {
    const imageEl: any = imageRef.current;
    const handleMouseMove = (e: any) => {
      if (!imageEl) return;

      const rect = imageEl.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      const sensitivity = 15;
      const translateY = (mouseY / rect.height) * sensitivity;
      const translateX = (mouseX / rect.width) * (sensitivity / 3);
      const zigzagFactor = Math.sin(mouseY / 30) * (sensitivity / 2);

      gsap.to(imageEl, {
        y: translateY,
        x: translateX + zigzagFactor,
        transformPerspective: 1000,
        duration: 0.8,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      if (!imageEl) return;
      gsap.to(imageEl, {
        y: 0,
        x: 0,
        duration: 0.9,
        ease: "power3.out",
      });
    };

    if (imageEl) {
      imageEl.addEventListener("mousemove", handleMouseMove);
      imageEl.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (imageEl) {
        imageEl.removeEventListener("mousemove", handleMouseMove);
        imageEl.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const section = sectionRef.current;
    const categoryEl = categoryRef.current;
    const titleEl = titleRef.current;
    const descriptionEl = descriptionRef.current;
    const imageEl = imageRef.current;

    const startPosition = () =>
      window.innerWidth > 768 ? "top 100%" : "top 80%";
    const endPosition = () =>
      window.innerWidth > 768 ? "bottom 20%" : "bottom 10%";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: startPosition(),
        end: endPosition(),
        toggleActions: "play none none reverse",
      },
    });

    tl.to(categoryEl, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
    })
      .to(
        titleEl,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      )
      .to(
        descriptionEl,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      )
      .to(
        imageEl,
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.8"
      );

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isReversed]);

  return (
    <div
      ref={sectionRef}
      className={`flex justify-center items-center ${layoutType === "full" ? "flex-col" : "flex-row"
        } ${isReversed ? "flex-row-reverse" : ""}`}
    >
      <CustomCursor type={cursorType} />
      <div
        onMouseLeave={() => setCursorType(null)}
        onMouseEnter={() => setCursorType("view")}
        ref={imageRef}
        className={`flex flex-col gap-4 ${layoutType === "full"
          ? "md:w-[90%] xl:w-[80%] 2xl:w-[80%] w-full"
          : layoutType === "left"
            ? "w-full"
            : "w-full"
          } p-4`}
        style={{
          opacity: 0,
          transform: `translateX(${isReversed ? "-100px" : "100px"})`,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="w-full lg:max-w-[800px] xl:max-w-[1300px] 2xl:max-w-[1500px] mx-auto">
          {imageSrc && (
            <Link href={link}>
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={title}
                width={500}
                height={300}
                layout="responsive"
                sizes="(min-width: 1536px) 1500px, (min-width: 1280px) 1300px, (min-width: 1024px) 800px, 100vw"
                className="w-full rounded-2xl"
              />
            </Link>
          )}
        </div>
        <div
          ref={titleRef}
          className="flex text-white flex-col gap-1 ml-2 mt-4"
          style={{ opacity: 0, transform: "translateY(50px)" }}
        >
          {title && (
            <h3 className="md:text-3xl text-lg tracking-wider">
              {title?.charAt(0).toUpperCase() + title?.slice(1).toLowerCase()}
            </h3>
          )}
          {description && (
            <p
              ref={descriptionRef}
              className="md:text-sm text-xs tracking-wider"
              style={{ opacity: 0, transform: "translateY(50px)" }}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

function OurWorkSections() {
  const sections = [
    {
      alignment: "left",
      category: "E-Commerce",
      title: "Ajmal Perfumes",
      description: "UI Design & Development, Campaign Landing pages",
      imageSrc: "/Work/1.png",
      link: "/AjmalPerfumes",
    },
    {
      alignment: "right",
      category: "Corporate",
      title: "GJ Properties",
      description: "Web Design, Development",
      imageSrc: "/Work/2.png",
      link: "/GjProperties",
    },
    {
      alignment: "left",
      category: "E-Commerce",
      title: "Dolby",
      description: "360 Social Marcom",
      imageSrc: "/Work/3.png",
      link: "/DolbyAtmos",
    },
    {
      alignment: "right",
      category: "Corporate",
      title: "Liva Insurance",
      description: "UI Design, Development",
      imageSrc: "/Work/4.png",
      link: "/LivaInsurance",
    },
    {
      alignment: "left",
      category: "Corporate",
      title: "Create Apps by DC",
      description: "Lead Gen, Performance Campaigns",
      imageSrc: "/Work/5.png",
      link: "/DubaiChambersDigital",
    },
    {
      alignment: "left",
      category: "Corporate",
      title: "Stream Shreek",
      description: "UI Design, Development",
      imageSrc: "/Work/6.png",
      link: "/StreamShreek",
    },
    {
      alignment: "right",
      category: "Corporate",
      title: "ADIB",
      description: "Social Media Management, Influencer Program",
      imageSrc: "/Work/7.png",
      link: "/AbuDhabiIslamic",
    },
    {
      alignment: "left",
      category: "Corporate",
      title: "Delmonte",
      description: "360 Marcom & Identity",
      imageSrc: "/Work/8.png",
      link: "/Delmonte",
    },
    {
      alignment: "left",
      category: "Corporate",
      title: "Plenum",
      description: "Branding, Web Design & Development",
      imageSrc: "/Work/9.png",
      link: "/Plenum",
    },
    {
      alignment: "left",
      category: "Corporate",
      title: "Real K Beauty",
      description: "Web Design & Development",
      imageSrc: "/Work/10.png",
      link: "/RealKBeauty",
    },
    {
      alignment: "left",
      category: "Corporate",
      title: "Dubai Silicon Oasis Authority",
      description: "Web Design & Development, Video Production and Social",
      imageSrc: "/Work/11.png",
      link: "/DubaiSilicon",
    },
    {
      category: "Corporate",
      title: "Taste Table",
      description: "Branding",
      imageSrc: "/Work/12.png",
      link: "/TasteTable",
    },
    {
      category: "Corporate",
      title: "Revolut",
      description: "UI Design, Wireframe",
      imageSrc: "/Work/13.png",
      link: "/Revoult",
    },
    {
      alignment: "left",
      category: "Corporate",
      title: "Dubai Economy & Tourism",
      description:
        "Social Media Content Partner For Different Global And Local Markets - UAE, KSA, SOUTH ASIA, Western Europe",
      imageSrc: "/Work/14.png",
      link: "/DubaiEconomy",
    },
    {
      category: "Corporate",
      title: "Bize",
      description: "UI Design, Wireframe",
      imageSrc: "/Work/15.png",
      link: "/Bize",
    },
    {
      category: "Corporate",
      title: "Sketchers",
      description:
        "Business Partners Arabia, Short-form Video, Brand Campaigns Films",
      imageSrc: "/Work/16.png",
      link: "/Sketchers",
    },
    {
      category: "Corporate",
      title: "Mashreq",
      description: "Brand Campaigns & Video Production",
      imageSrc: "/Work/17.png",
      link: "/MashreqBrand",
    },
    {
      category: "Corporate",
      title: "Dabur",
      description: "UI Design, Wireframe",
      imageSrc: "/Work/18.png",
      link: "/Dabur",
    },
    {
      category: "Corporate",
      title: "Coffee Planet",
      description:
        "UI Design, Development, Social media Management & Influencer Program",
      imageSrc: "/Work/19.png",
      link: "/CoffeePlanet",
    },
    {
      category: "Corporate",
      title: "Carrefour",
      description: "360 Social Marcom & Digital Services",
      imageSrc: "/Work/20.png",
      link: "/Carrefour",
    },
    {
      category: "Corporate",
      title: "Union Properties",
      description: "Digital, Social & Content For Rebranding",
      imageSrc: "/Work/21.png",
      link: "/UnionProperties",
    },
    {
      category: "Corporate",
      title: "FT Platinum",
      description: "Web Design, Development",
      imageSrc: "/Work/22.png",
      link: "/FtPlatinum",
    },
    {
      category: "Corporate",
      title: "Treva",
      description: "UI Design, Wireframe",
      imageSrc: "/Work/23.png",
      link: "/Treva",
    },
    {
      category: "Corporate",
      title: "Jollibee",
      description: "UI Design, Development",
      imageSrc: "/Work/24.png",
      link: "/Jollibee",
    },
    {
      category: "Corporate",
      title: "Crestline Savings",
      description: "UI Design, Wireframe",
      imageSrc: "/Work/25.png",
      link: "/CrestlineSavings",
    },
    {
      category: "Corporate",
      title: "London Dairy",
      description: "Web Design, Development",
      imageSrc: "/Work/26.png",
      link: "/LondonDairy",
    },
    {
      category: "Corporate",
      title: "Mojawhraty",
      description: "Web Design, Development",
      imageSrc: "/Work/27.png",
      link: "/Mojawhraty",
    },
    {
      category: "Corporate",
      title: "Food Ninja",
      description: "UI Design, Wireframe",
      imageSrc: "/Work/28.png",
      link: "/FoodNinja",
    },
    {
      category: "Corporate",
      title: "Mentos",
      description: "UI Design, Development",
      imageSrc: "/Work/29.png",
      link: "/Mentos",
    },
    {
      category: "Corporate",
      title: "Kamal Insurance",
      description: "Branding 360 marcom, video production and digital services",
      imageSrc: "/Work/30.png",
      link: "/KamalInsurance",
    },
    {
      category: "Corporate",
      title: "Dubai Chambers",
      description: "360 social marcom, creative & digital services",
      imageSrc: "/Work/32.png",
      link: "/DubaiChambers",
    },
    {
      category: "Corporate",
      title: "CSR UAE",
      description: "Branding",
      imageSrc: "/Work/33.png",
      link: "/CSRUAE",
    },
    {
      category: "Corporate",
      title: "Nadwa",
      description: "Web design, development",
      imageSrc: "/Work/31.png",
      link: "/Nadwa",
    },
    {
      category: "Corporate",
      title: "Macrame",
      description: "Branding",
      imageSrc: "/Work/34.png",
      link: "/Macrame",
    },
    {
      category: "Corporate",
      title: "Janvier",
      description: "Branding",
      imageSrc: "/Work/35.png",
      link: "/Janvier",
    },
  ];


  const MobileSections = [
    {
      alignment: "left",
      category: "E-Commerce",
      title: "Ajmal Perfumes",
      description: "UI Design & Development, Campaign Landing pages",
      imageSrc: "/Work/1.png",
      link: "/AjmalPerfumes",
    },
    {
      alignment: "left",
      category: "E-Commerce",
      title: "Dolby",
      description: "360 Social Marcom",
      imageSrc: "/Work/3.png",
      link: "/DolbyAtmos",
    },
    {
      alignment: "right",
      category: "Corporate",
      title: "GJ Properties",
      description: "Web Design, Development",
      imageSrc: "/Work/2.png",
      link: "/GjProperties",
    },
    {
      alignment: "right",
      category: "Corporate",
      title: "Liva Insurance",
      description: "UI Design, Development",
      imageSrc: "/Work/4.png",
      link: "/LivaInsurance",
    },
    {
      alignment: "left",
      category: "Corporate",
      title: "Create Apps by DC",
      description: "Lead Gen, Performance Campaigns",
      imageSrc: "/Work/5.png",
      link: "/DubaiChambersDigital",
    },
    {
      alignment: "left",
      category: "Corporate",
      title: "Delmonte",
      description: "360 Marcom & Identity",
      imageSrc: "/Work/8.png",
      link: "/Delmonte",
    },
    {
      alignment: "left",
      category: "Corporate",
      title: "Stream Shreek",
      description: "UI Design, Development",
      imageSrc: "/Work/6.png",
      link: "/StreamShreek",
    },
    {
      alignment: "left",
      category: "Corporate",
      title: "Real K Beauty",
      description: "Web Design & Development",
      imageSrc: "/Work/10.png",
      link: "/RealKBeauty",
    },
    {
      alignment: "right",
      category: "Corporate",
      title: "ADIB",
      description: "Social Media Management, Influencer Program",
      imageSrc: "/Work/7.png",
      link: "/AbuDhabiIslamic",
    },
    {
      category: "Corporate",
      title: "Revolut",
      description: "UI Design, Wireframe",
      imageSrc: "/Work/13.png",
      link: "/Revoult",
    },
    {
      alignment: "left",
      category: "Corporate",
      title: "Plenum",
      description: "Branding, Web Design & Development",
      imageSrc: "/Work/9.png",
      link: "/Plenum",
    },
    {
      category: "Corporate",
      title: "Bize",
      description: "UI Design, Wireframe",
      imageSrc: "/Work/15.png",
      link: "/Bize",
    },

    {
      alignment: "left",
      category: "Corporate",
      title: "Dubai Silicon Oasis Authority",
      description: "Web Design & Development, Video Production and Social",
      imageSrc: "/Work/11.png",
      link: "/DubaiSilicon",
    },
    {
      category: "Corporate",
      title: "Dabur",
      description: "UI Design, Wireframe",
      imageSrc: "/Work/18.png",
      link: "/Dabur",
    },
    {
      category: "Corporate",
      title: "Taste Table",
      description: "Branding",
      imageSrc: "/Work/12.png",
      link: "/TasteTable",
    },
    {
      category: "Corporate",
      title: "Carrefour",
      description: "360 Social Marcom & Digital Services",
      imageSrc: "/Work/20.png",
      link: "/Carrefour",
    },
    {
      alignment: "left",
      category: "Corporate",
      title: "Dubai Economy & Tourism",
      description:
        "Social Media Content Partner For Different Global And Local Markets - UAE, KSA, SOUTH ASIA, Western Europe",
      imageSrc: "/Work/14.png",
      link: "/DubaiEconomy",
    },
    {
      category: "Corporate",
      title: "Treva",
      description: "UI Design, Wireframe",
      imageSrc: "/Work/23.png",
      link: "/Treva",
    },
    {
      category: "Corporate",
      title: "Sketchers",
      description:
        "Business Partners Arabia, Short-form Video, Brand Campaigns Films",
      imageSrc: "/Work/16.png",
      link: "/Sketchers",
    },
    {
      category: "Corporate",
      title: "Crestline Savings",
      description: "UI Design, Wireframe",
      imageSrc: "/Work/25.png",
      link: "/CrestlineSavings",
    },

    {
      category: "Corporate",
      title: "Mashreq",
      description: "Brand Campaigns & Video Production",
      imageSrc: "/Work/17.png",
      link: "/MashreqBrand",
    },
    {
      category: "Corporate",
      title: "Food Ninja",
      description: "UI Design, Wireframe",
      imageSrc: "/Work/28.png",
      link: "/FoodNinja",
    },
    {
      category: "Corporate",
      title: "Coffee Planet",
      description:
        "UI Design, Development, Social media Management & Influencer Program",
      imageSrc: "/Work/19.png",
      link: "/CoffeePlanet",
    },
    {
      category: "Corporate",
      title: "Nadwa",
      description: "Web design, development",
      imageSrc: "/Work/31.png",
      link: "/Nadwa",
    },
    {
      category: "Corporate",
      title: "Union Properties",
      description: "Digital, Social & Content For Rebranding",
      imageSrc: "/Work/21.png",
      link: "/UnionProperties",
    },
    {
      category: "Corporate",
      title: "Macrame",
      description: "Branding",
      imageSrc: "/Work/34.png",
      link: "/Macrame",
    },
    {
      category: "Corporate",
      title: "FT Platinum",
      description: "Web Design, Development",
      imageSrc: "/Work/22.png",
      link: "/FtPlatinum",
    },



    // {
    //   category: "Corporate",
    //   title: "Janvier",
    //   description: "Branding",
    //   imageSrc: "/Work/janvier.png",
    //   link: "/Janvier",
    // },
    // {
    //   category: "Corporate",
    //   title: "Jollibee",
    //   description: "UI Design, Development",
    //   imageSrc: "/Work/24.png",
    //   link: "/Jollibee",
    // },

    // {
    //   category: "Corporate",
    //   title: "London Dairy",
    //   description: "Web Design, Development",
    //   imageSrc: "/Work/26.png",
    //   link: "/LondonDairy",
    // },
    // {
    //   category: "Corporate",
    //   title: "Mojawhraty",
    //   description: "Web Design, Development",
    //   imageSrc: "/Work/27.png",
    //   link: "/Mojawhraty",
    // },

    // {
    //   category: "Corporate",
    //   title: "Mentos",
    //   description: "UI Design, Development",
    //   imageSrc: "/Work/29.png",
    //   link: "/Mentos",
    // },
    // {
    //   category: "Corporate",
    //   title: "Kamal Insurance",
    //   description: "Branding 360 marcom, video production and digital services",
    //   imageSrc: "/Work/30.png",
    //   link: "/KamalInsurance",
    // },
    // {
    //   category: "Corporate",
    //   title: "Dubai Chambers",
    //   description: "360 social marcom, creative & digital services",
    //   imageSrc: "/Work/32.png",
    //   link: "/DubaiChambers",
    // },
    // {
    //   category: "Corporate",
    //   title: "CSR UAE",
    //   description: "Branding",
    //   imageSrc: "/Work/33.png",
    //   link: "/CSRUAE",
    // },
    
  ];
  // tHE FINAL COMMENTS


  const width = useWindowWidth();
  const sectionsArray = width > 768 ? sections : MobileSections;

  const chunkSize = 5;
  const layouts = [];
  for (let i = 0; i < sectionsArray.length; i += chunkSize) {
    const chunk = sectionsArray.slice(i, i + chunkSize);
    if (chunk.length >= 1) {
      layouts.push({
        fullImage: chunk[0],
        row1: [chunk[1], chunk[2]].filter(Boolean),
        row2: [chunk[3], chunk[4]].filter(Boolean),
      });
    }
  }
  // This is done
  const [visibleLayouts, setVisibleLayouts] = useState(1);
  const sentinelRef = useRef(null);
  const industriesFilterRef = useRef(null);
  const mainContentRef = useRef(null);


  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleLayouts < layouts.length) {
          setVisibleLayouts((prev) => prev + 1);
        }
      },
      { threshold: 0.1 }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, [visibleLayouts, layouts.length]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.delayedCall(0.1, ScrollTrigger.refresh);
  }, [visibleLayouts]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (industriesFilterRef.current && mainContentRef.current) {
      const st = ScrollTrigger.create({
        trigger: mainContentRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: industriesFilterRef.current,
      });

      return () => {
        st.kill();
      };
    }
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setnumber] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/ourform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, number, message }),
      });
      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError(`"Error submitting form:", ${err}`);
      console.log(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setIsLargeScreen(window.innerWidth > 1024);
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mb-10 md:mb-0 mt-20 overflow-hidden md:overflow-visible">
      <div className="flex justify-between lg:flex-row flex-col-reverse relative lg:max-w-[94%] mx-auto">
        <div
          ref={isLargeScreen ? mainContentRef : null}
          className="lg:w-[75%] w-full lg:ml-auto"
        >
          {layouts.slice(0, visibleLayouts).map((layout, index) => (
            <div key={index} className="flex justify-center items-center">
              <div className="w-[99%] lg:w-[90%] flex flex-col md:gap-4">
                <Section {...layout.fullImage} layoutType="full" />
                <div className="flex md:gap-20 xl:gap-40 2xl:gap-48 items-start justify-center md:flex-row flex-col">
                  {layout.row1.length > 0 &&
                    layout.row1.map((section, idx) => (
                      <Section
                        key={idx}
                        {...section}
                        layoutType={width > 500 ? (idx === 0 ? "left" : "right") : "full"}
                      />
                    ))}
                </div>
                {layout.row2.some((ele: any) => ele.imageSrc) && (
                  <div className="flex md:mt-20 2xl:gap-48 xl:gap-40 justify-center md:gap-20 items-start md:flex-row flex-col mb-10">
                    {layout.row2.map((section: any, idx: number) => (
                      <Section
                        key={idx}
                        {...section}
                        layoutType={width > 500 ? (idx === 0 ? "left" : "right") : "full"}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          {visibleLayouts < layouts.length && (
            <div ref={sentinelRef} style={{ height: "20px" }} />
          )}
        </div>
        <div
          ref={isLargeScreen ? industriesFilterRef : null}
          className="lg:w-[25%] sticky top-[80px] lg:h-[calc(100vh-50px)]"
        >
          <div className="lg:flex hidden flex-col mx-auto mt-5 h-auto items-center mb-10 lg:mb-0 gap-3">
            <div
              style={{
                borderRadius: "10px",
                border: "1px solid #3BE29A",
                background: "#101010",
                backdropFilter: "blur(18.826581954956055px)",
              }}
              className="lg:w-full w-[90%] mx-auto bg-[#101010] rounded-lg p-6 space-y-5"
            >
              {submitted ? (
                <div className="text-[#00AA71] text-center text-xl font-semibold">
                  Thank you for your submission!
                </div>
              ) : (
                <form className="space-y-4">
                  <div className="flex items-center justify-center gap-2">
                    <div>
                      <label className="text-[#00AA71] text-[14px] font-medium tracking-wider">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-[#24242480] placeholder:tracking-wider placeholder:text-[14px] rounded-[6px] mt-2 px-3 py-2.5 text-white placeholder-[#FFFFFF66] focus:outline-none focus:border-[#3BE29A] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[#00AA71] text-[14px] font-medium tracking-wider">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[#24242480] placeholder:tracking-wider placeholder:text-[14px] rounded-[6px] mt-2 px-3 py-2.5 text-white placeholder-[#FFFFFF66] focus:outline-none focus:border-[#3BE29A] transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[#00AA71] text-[14px] font-medium tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Your Phone Number"
                      value={number}
                      inputMode="tel"
                      pattern="^\+?[0-9]{7,15}$"
                      onChange={(e) => {
                        const rawValue = e.target.value;
                        if (/^(\+)?\d*$/.test(rawValue)) {
                          setnumber(rawValue);
                        }
                      }}
                      className="w-full bg-[#24242480] placeholder:tracking-wider placeholder:text-[14px] rounded-[6px] mt-2 px-3 py-2.5 text-white placeholder-[#FFFFFF66] focus:outline-none focus:border-[#3BE29A] transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[#00AA71] text-[14px] font-medium tracking-wider">
                      Message
                    </label>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-[#24242480] placeholder:tracking-wider placeholder:text-[14px] rounded-[6px] mt-2 px-3 py-2.5 text-white placeholder-[#FFFFFF66] focus:outline-none focus:border-[#3BE29A] transition-colors resize-none"
                    />
                  </div>
                  <p className="text-red-500 text-center text-sm">{error}</p>
                </form>
              )}
            </div>
            {submitted ? null : (
              <button
                onClick={handleSubmit}
                type="submit"
                disabled={isSubmitting}
                className="lg:w-full w-[90%] mx-auto text-white tracking-wider font-medium py-2 text-[18px] 
          bg-gradient-to-r from-[#00AA71] to-[#00442D] 
          hover:from-[#00cc88] hover:to-[#00664d] 
          transition-all duration-500 rounded-[10px]"
              >
                <div className="flex items-center justify-center gap-3 group">
                  <Image
                    src="/Work/filter.svg"
                    alt="icon"
                    width={40}
                    height={40}
                    className="group-hover:rotate-45 transition-all duration-500"
                  />
                  {isSubmitting ? "Sending..." : "Let's Start"}
                </div>
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default OurWorkSections;
