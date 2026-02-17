/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { motion } from "framer-motion";
import type React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

interface Game {
  name: string;
  width: number;
}

const games: Game[] = [
  { name: "/game/roblox.png", width: 160 },
  { name: "/game/minecraft.png", width: 200 },
  { name: "/game/fortnite.png", width: 120 },
  { name: "/game/roblox.png", width: 160 },
  { name: "/game/minecraft.png", width: 200 },
  { name: "/game/fortnite.png", width: 120 },
  { name: "/game/roblox.png", width: 160 },
  { name: "/game/minecraft.png", width: 200 },
  { name: "/game/fortnite.png", width: 120 },
  { name: "/game/roblox.png", width: 160 },
  { name: "/game/minecraft.png", width: 200 },
  { name: "/game/fortnite.png", width: 120 },
  { name: "/game/roblox.png", width: 160 },
  { name: "/game/minecraft.png", width: 200 },
  { name: "/game/fortnite.png", width: 120 },
  { name: "/game/roblox.png", width: 160 },
  { name: "/game/minecraft.png", width: 200 },
  { name: "/game/fortnite.png", width: 120 },
];

const GamingCulture = () => {
  return (
    <div className="mt-20">
      <div className="border-b border-[#A1A1A1] border-t border-dashed w-[90%] mx-auto mb-14"></div>
      <BrandSlider brand_icons={games} width={150} />
      <DigitalFashionSection />
      <div className="border-b border-[#A1A1A1] border-t border-dashed w-[90%] mx-auto mt-10 mb-12 md:mb-16 2xl:mb-8"></div>
    </div>
  );
};

export default GamingCulture;

export function BrandSlider({
  brand_icons,
}: {
  brand_icons: Game[];
  width?: number;
}) {
  const loopIcons = [...brand_icons, ...brand_icons];
  const [duration, setDuration] = useState(35);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDuration(10);
      } else {
        setDuration(35);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative overflow-hidden flex items-center w-full h-full">
      <motion.div
        key={duration}
        className="flex gap-8 md:gap-16 md:ml-4 w-full"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          duration,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        {loopIcons.map((icon, index) => (
          <div key={index} className="flex-shrink-0 flex items-center">
            <Image
              src={icon.name || "/placeholder.svg"}
              alt={`Icon ${index}`}
              width={icon.width ? icon.width : 170}
              height={1}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function DigitalFashionSection() {
 
  return (
    <section className="bg-black text-white py-16">
      <div className="2xl:max-w-[1440px] w-[95%] xl:w-[92%] mx-auto">
        {/* Header Section */}
        <div className="flex gap-12 items-center mb-5 md:mb-20 w-[95%] mx-auto xl:mx-0 md:w-[100%] xl:w-[120%]">
          <div className="l:pl-12 ">
            <h2 className="text-[23px] md:text-5xl xl:text-[70px] 2xl:text-[85px] font-medium leading-7 xl:leading 2xl:leading-[85px] flex flex-col uppercase">
              {/* Connecting Generations A to Z Through Immersive Digital Style and */}
              {/* Play */}
              <span className="text-end md:text-start tracking-wider md:tracking-wide w-full ml-[20px] lg:ml-[170px] 2xl:ml-[180px]">
                Connecting Generations
              </span>
              <span className="text-start tracking-wider md:tracking-wide">
                A to Z Through
              </span>
              <span className="text-start tracking-wider md:tracking-wide  ml-[20px] md:ml-[100px]">
                Digital Style
              </span>
              <span className="text-start tracking-wider md:tracking-wide">
                and Play
              </span>
            </h2>
          </div>
          <div className="justify-center lg:justify-end relative top-20 right-20 2xl:right-10 xl:flex hidden">
            <div className="xl:w-[440px] 2xl:w-[420px] h-[420px] bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden">
              <video
                src="/Careers/careers1.webm"
                loop
                autoPlay
                muted
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
              
        </div>

        {/* Mission Section */}
        <section className="lg:mb-32 lg:mt-10 bg-black text-white relative overflow-hidden max-w-[95%] 2xl:max-w-[1740px] mx-auto">
          <div className="mx-auto">
            <div className="flex lg:flex-row flex-col justify-center gap-14 md:gap-32">
              <div className="relative md:top-12">
                <div className="text-[#00AA71] text-[20px] tracking-wider uppercase">
                  MISSION
                </div>
              </div>

              <div className="lg:max-w-[870px] relative p-6 md:p-14">
                <div className="absolute top-0 left-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M20 1H11C5.47715 1 1 5.47715 1 11V20"
                      stroke="#3F3F3F"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M20 19H11C5.47715 19 1 14.5228 1 9V0"
                      stroke="#3F3F3F"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="absolute top-0 right-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M0 1H9C14.5228 1 19 5.47715 19 11V20"
                      stroke="#3F3F3F"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="absolute bottom-0 right-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M0 19H9C14.5228 19 19 14.5228 19 9V0"
                      stroke="#3F3F3F"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <p className="text-[17px] md:text-[25px] opacity-70 tracking-widest font-light md:text-left text-center">
                  We drive real impact with live streams, creator partnerships,
                  and high performance ads that move the needle. Our strategies
                  build thriving communities think chat, feedback loops, and UGC
                  challenges, Amplified through Discord and in game events.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cards Section - Desktop Layout (lg and up) */}
        <div className="relative hidden lg:block">
          <div className="flex justify-between relative">
            {/* Card 1 */}
            <div className="border border-white/30 p-6 rounded-[12px] w-[30%] xl:w-[350px] relative">
              <div className="absolute -right-[15%] xl:-right-[39%] 2xl:-right-[64%] top-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="129"
                  viewBox="0 0 195 129"
                  fill="none"
                  className="w-[50px] xl:w-[135px] 2xl:w-[250px]"
                >
                  <path
                    d="M3.8418 125.923L191.362 4.03493"
                    stroke="#484848"
                    strokeWidth="1.3"
                  />
                  <rect
                    width="5.01306"
                    height="5.01306"
                    rx="2.50653"
                    transform="matrix(1 0 0 -1 0.676758 128.902)"
                    fill="#00AA71"
                  />
                  <rect
                    width="5.01306"
                    height="5.01306"
                    rx="2.50653"
                    transform="matrix(1 0 0 -1 189.278 5.92285)"
                    fill="#00AA71"
                  />
                </svg>
              </div>
              <CardContent
                number="01"
                title="BRANDED WORLD"
                subtitle="Design immersive, native experiences that keep players coming back. ​"
                icon={<BrandedWorldIcon />}
                description="Create deeply immersive and native gaming environments that captivate players and encourage repeat engagement."
              />
            </div>

            {/* Card 2 */}
            <div className="border-r border-l border-[#515151]/90 p-6 w-[30%] right-2 xl:right-0 xl:w-[350px] relative">
              <div className="absolute bottom-1/2 -right-[35%] lg:-right-[20%] xl:-right-[39%] 2xl:-right-[64%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="124"
                  height="129"
                  viewBox="0 0 194 129"
                  fill="none"
                  className="lg:w-[60px] xl:w-[134px] 2xl:w-[250px]"
                >
                  <path
                    d="M3.24512 3.12793L190.765 125.016"
                    stroke="#484848"
                    strokeWidth="1.3"
                  />
                  <rect
                    x="0.0800781"
                    y="0.148926"
                    width="5.01306"
                    height="5.01306"
                    rx="2.50653"
                    fill="#00AA71"
                  />
                  <rect
                    x="188.682"
                    y="123.128"
                    width="5.01306"
                    height="5.01306"
                    rx="2.50653"
                    fill="#00AA71"
                  />
                </svg>
              </div>
              <div className="absolute -top-10 -left-[1.2px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="351"
                  height="75"
                  viewBox="0 0 472 75"
                  fill="none"
                  className="w-[100.5%] xl:w-[351px]"
                >
                  <path
                    d="M470.624 74.0393V48.1647C470.624 37.3209 461.834 28.5303 450.989 28.5303H358.707H225.756C221.565 28.5303 217.483 27.1889 214.108 24.7026L187.192 4.86961C183.818 2.38327 179.736 1.04199 175.545 1.04199L20.9948 1.042C10.151 1.042 1.36035 9.83264 1.36035 20.6765L1.36036 74.0393"
                    stroke="#515151"
                    strokeWidth="1.3"
                  />
                </svg>
              </div>
              <div className="absolute -bottom-10 -left-[1.2px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="351"
                  height="74"
                  viewBox="0 0 472 74"
                  fill="none"
                  className="w-[100.5%] xl:w-[351px]"
                >
                  <path
                    d="M1.36047 0.0417328V25.9163C1.36047 36.7602 10.1508 45.5508 20.9949 45.5508H113.277H246.229C250.42 45.5508 254.502 46.8921 257.876 49.3784L284.792 69.2114C288.166 71.6978 292.248 73.0391 296.439 73.0391L450.99 73.0391C461.833 73.0391 470.624 64.2484 470.624 53.4046L470.624 0.0417328"
                    stroke="#515151"
                    strokeWidth="1.3"
                  />
                </svg>
              </div>
              <CardContent
                number="02"
                title="Community
AMPLIFICATION​"
                subtitle="Amplification: Spark conversations, feedback, and viral UGC. ​​"
                icon={<AmplificationIcon />}
                description="Ignite dynamic conversations and encourage authentic player feedback to fuel vibrant, organic growth."
              />
            </div>

            {/* Card 3 */}
            <div
              className="border-r border-l border-b border-white/30 p-6 w-[30%] xl:w-[350px] relative"
              style={{ borderRadius: "0px 0px 12px 12px" }}
            >
              <div className="absolute -top-10 -left-[1px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="351"
                  height="75"
                  viewBox="0 0 472 75"
                  fill=""
                  className="w-[100.5%] xl:w-[351px]"
                >
                  <path
                    d="M470.624 74.0393V48.1647C470.624 37.3209 461.834 28.5303 450.989 28.5303H358.707H225.756C221.565 28.5303 217.483 27.1889 214.108 24.7026L187.192 4.86961C183.818 2.38327 179.736 1.04199 175.545 1.04199L20.9948 1.042C10.151 1.042 1.36035 9.83264 1.36035 20.6765L1.36036 74.0393"
                    stroke="#515151"
                    strokeWidth="1.3"
                  />
                </svg>
              </div>
              <CardContent
                number="03"
                title="Discord Engagement​"
                subtitle="Build loyalty where your audience already hangs out. ​"
                icon={<DiscordIcon />}
                description="Cultivate player loyalty by actively engaging your audience on Discord—the platform where they naturally gather."
              />
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Sticky Scroll Section - NEW IMPROVED VERSION */}
        <MobileStickyCards />
      </div>
    </section>
  );
}

// New Mobile Sticky Cards Component with ScrollTrigger
function MobileStickyCards() {
  const containerRef = useRef(null);
  const cardsContainerRef = useRef(null);

  const cardData = [
    {
      number: "01",
      title: "BRANDED WORLD",
      subtitle: "Design immersive, native experiences that keep players coming back.",
      icon: <BrandedWorldIcon />,
      description:
        "Create deeply immersive and native gaming environments that captivate players and encourage repeat engagement.",
    },
    {
      number: "02",
      title: "Community AMPLIFICATION",
      subtitle: "Amplification: Spark conversations, feedback, and viral UGC.",
      icon: <AmplificationIcon />,
      description:
        "Ignite dynamic conversations and encourage authentic player feedback to fuel vibrant, organic growth.",
    },
    {
      number: "03",
      title: "Discord Engagement",
      subtitle: "Build loyalty where your audience already hangs out.",
      icon: <DiscordIcon />,
      description:
        "Cultivate player loyalty by actively engaging your audience on Discord—the platform where they naturally gather.",
    },
  ];

  useEffect(() => {
    if (!containerRef.current || !cardsContainerRef.current) return;

    const totalCards = cardData.length;
    // const cardWidth = 100; // Each card takes 100% of the viewport width

    const ctx = gsap.context(() => {
      // Pin the cards container
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${window.innerHeight * totalCards}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      });

      // Animate the entire cards container horizontally
      gsap.to(cardsContainerRef.current, {
        x: () => -window.innerWidth * (totalCards - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${window.innerHeight * totalCards}`,
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="lg:hidden relative overflow-hidden font-futuru h-[85%]"
    >
      <div
        ref={cardsContainerRef}
        className="h-screen w-full flex flex-row items-center gap-20 justify-start"
        style={{ width: `${cardData.length * 100}%` }}
      >
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`w-full ${index === 0 ? "w-[300px]" : "w-[100px]"} sm:h-[450px] p-6 bg-black shadow-xl transition-all duration-300 ease-in-out ${getMobileCardStyles(
              card.number
            )}`}
          // style={{ flex: "0 0 85vw" }}
          >
            <div className="relative h-full flex flex-col justify-center">
              {/* Card Content */}
              <div className="mb-4">
                <span className="text-[#00AA71] text-sm font-medium tracking-wider">
                  [{card.number}]
                </span>
                <h3 className="text-white text-[20px] md:text-[28px] font-semibold mt-2 leading-tight">
                  {card.title}
                </h3>
                <p className="text-[#DDD] text-[16px] font-light leading-5 mt-2 tracking-wider">
                  {card.subtitle}
                </p>
              </div>
              <div className="flex w-[90px] h-[90px] justify-center my-8 mx-auto">
                {card.icon}
              </div>
              <p className="text-white text-sm font-light leading-snug tracking-widest">
                {card.description}
              </p>

              {/* Decorative Borders and Connecting Lines */}
              {renderMobileCardDecorations(card, index)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Helper functions remain unchanged
function getMobileCardStyles(cardNumber: string) {
  switch (cardNumber) {
    case "01":
      return "border border-white/30 rounded-[20px]";
    case "02":
      return "border-r border-l border-[#515151]/90";
    case "03":
      return "border-r border-l border-white/30";
    default:
      return "";
  }
}

function renderMobileCardDecorations(card: any, index: number) {
  const decorations = [];

  if (index < 2) {
    const isFirstCard = index === 0;
    decorations.push(
      <div
        key={`line-${index}`}
        className={`absolute ${isFirstCard
          ? "-right-[48%] sm:-right-[35%] top-1/2"
          : "-right-[48%] sm:-right-[35%] bottom-10 sm:bottom-1/2"
          }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="129"
          viewBox="0 0 195 129"
          fill="none"
          className="w-[90px] sm:w-[80px]"
        >
          <path
            d={
              isFirstCard
                ? "M3.8418 125.923L191.362 4.03493"
                : "M3.24512 3.12793L190.765 125.016"
            }
            stroke="#484848"
            strokeWidth="1.3"
          />
          <rect
            width="5.01306"
            height="5.01306"
            rx="2.50653"
            transform={
              isFirstCard
                ? "matrix(1 0 0 -1 0.676758 128.902)"
                : "translate(0.0800781 0.148926)"
            }
            fill="#00AA71"
          />
          <rect
            width="5.01306"
            height="5.01306"
            rx="2.50653"
            transform={
              isFirstCard
                ? "matrix(1 0 0 -1 189.278 5.92285)"
                : "translate(188.682 123.128)"
            }
            fill="#00AA71"
          />
        </svg>
      </div>
    );
  }

  if (index >= 1) {
    decorations.push(
      <div
        key={`top-border-${index}`}
        className="absolute -top-16 -left-[25px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="274"
          height="75"
          viewBox="0 0 472 75"
          fill="none"
          className="w-[109.5%] sm:w-[128.5%] md:w-[133.6%]"
        >
          <path
            d="M470.624 74.0393V48.1647C470.624 37.3209 461.834 28.5303 450.989 28.5303H358.707H225.756C221.565 28.5303 217.483 27.1889 214.108 24.7026L187.192 4.86961C183.818 2.38327 179.736 1.04199 175.545 1.04199L20.9948 1.042C10.151 1.042 1.36035 9.83264 1.36035 20.6765L1.36036 74.0393"
            stroke="#515151"
            strokeWidth="1.3"
          />
        </svg>
      </div>
    );
  }

  if (index >= 1) {
    decorations.push(
      <div
        key={`bottom-border-${index}`}
        className="absolute -bottom-20 -left-[25px]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="472" height="74" viewBox="0 0 472 74" fill="none" className="w-[109.5%] sm:w-[108%] md:w-[133.6%]">
          <path d="M1.36047 0.0417328V25.9163C1.36047 36.7602 10.1508 45.5508 20.9949 45.5508H113.277H246.229C250.42 45.5508 254.502 46.8921 257.876 49.3784L284.792 69.2114C288.166 71.6978 292.248 73.0391 296.439 73.0391L450.99 73.0391C461.833 73.0391 470.624 64.2484 470.624 53.4046L470.624 0.0417328" stroke="#515151" stroke-width="1.3" />
        </svg>
      </div>
    );
  }

  return decorations;
}
// Card Content Component
function CardContent({
  number,
  title,
  subtitle,
  icon,
  description,
}: {
  number: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  description: string;
}) {
  return (
    <>
      <div className="mb-4">
        <span className="text-[#00AA71] text-sm font-medium tracking-wider">
          [ {number} ]
        </span>
        <h3 className="text-white text-[24px] lg:text-[30px] font-semibold leading-tight tracking-wider mt-2">
          {title}
        </h3>
        <p className="text-[#DDD] text-[16px] lg:text-[18px] tracking-widest font-extralight leading-[20px] mt-2">
          {subtitle}
        </p>
      </div>
      <div className="flex w-[100px] h-[100px] justify-center my-8 mx-auto">
        {icon}
      </div>
      <p className="text-white text-[14px] 2xl:text-[16px] tracking-widest leading-tight font-extralight">
        {description}
      </p>
    </>
  );
}

// Icon Components
// Icon Components
function BrandedWorldIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 159 158"
      fill="none"
    >
      <path
        opacity="0.6"
        d="M79.3999 157.401C122.552 157.401 157.533 122.42 157.533 79.268C157.533 36.1162 122.552 1.13477 79.3999 1.13477C36.2481 1.13477 1.2666 36.1162 1.2666 79.268C1.2666 122.42 36.2481 157.401 79.3999 157.401Z"
        stroke="#DDDDDD"
        strokeWidth="0.957013"
      />
      <path
        opacity="0.6"
        d="M79.1593 147.794C116.803 147.794 147.319 117.278 147.319 79.6349C147.319 41.9915 116.803 11.4756 79.1593 11.4756C41.516 11.4756 11 41.9915 11 79.6349C11 117.278 41.516 147.794 79.1593 147.794Z"
        stroke="#DDDDDD"
        strokeWidth="0.957013"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M105.898 85.7059C105.142 89.3952 101.778 98.8576 91.0547 103.983L86.7516 99.0863L79.4899 106.476C75.3553 106.419 71.2896 105.397 67.6103 103.488C63.9311 101.578 60.738 98.8347 58.2806 95.4705C59.0533 95.7135 59.8511 95.865 60.6582 95.9221C61.8469 95.9439 63.1352 95.5031 63.1352 93.4735V73.5445C63.153 73.0317 63.0517 72.5217 62.8393 72.0558C62.6269 71.5898 62.3094 71.1806 61.9124 70.8613C61.5152 70.542 61.0497 70.3212 60.553 70.2169C60.0565 70.1127 59.5424 70.1276 59.0526 70.2606C55.6908 71.0388 53.0012 79.53 53.0012 79.53C52.9639 75.6088 53.7712 71.7265 55.367 68.1529C56.9629 64.5792 59.309 61.4001 62.2423 58.8366C67.2502 54.5433 72.1423 53.0578 75.8591 52.4756C72.188 54.5923 70.1225 58.0475 70.1225 60.9477C70.1225 65.5974 72.898 65.0478 73.721 64.3622V91.2752C73.8601 91.6133 74.0409 91.9324 74.2589 92.2246C74.6266 92.739 75.1108 93.1566 75.6709 93.4426C76.231 93.7285 76.8508 93.8743 77.4782 93.8679C80.2591 93.8679 83.8657 90.6575 83.8657 90.6575V68.8649C83.8657 66.6475 82.2143 63.9677 80.5604 63.0536C80.5604 63.0536 83.621 62.5095 85.9877 64.335C86.4316 63.7851 86.9038 63.2593 87.4024 62.7598C92.9051 57.2911 98.0984 55.7404 102.423 54.9623C102.423 54.9623 94.5511 61.2199 94.5511 69.5995C94.5511 75.838 94.7097 91.0494 94.7097 91.0494C97.6385 93.8952 101.977 89.787 105.898 85.7059Z"
        fill="#00AA71"
      />
    </svg>
  );
}

function AmplificationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 159 158"
      fill="none"
    >
      <path
        opacity="0.6"
        d="M79.3999 157.401C122.552 157.401 157.533 122.42 157.533 79.268C157.533 36.1162 122.552 1.13477 79.3999 1.13477C36.2481 1.13477 1.2666 36.1162 1.2666 79.268C1.2666 122.42 36.2481 157.401 79.3999 157.401Z"
        stroke="#DDDDDD"
        strokeWidth="0.957013"
      />
      <path
        opacity="0.6"
        d="M79.1593 147.794C116.803 147.794 147.319 117.278 147.319 79.6349C147.319 41.9915 116.803 11.4756 79.1593 11.4756C41.516 11.4756 11 41.9915 11 79.6349C11 117.278 41.516 147.794 79.1593 147.794Z"
        stroke="#DDDDDD"
        strokeWidth="0.957013"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M111.62 79.9714C108.931 79.9581 92.7078 80.1625 86.3943 86.8699C79.5 94.1943 79.5 112.476 79.5 112.476C79.5 112.476 79.5 93.5173 72.6057 86.8699C65.7114 80.2225 47 79.9756 47 79.9756C47 79.9756 65.9583 79.9756 72.6057 73.0813C78.9982 66.4514 79.4716 48.893 79.4986 47.5564C79.4784 48.893 79.3506 66.4514 86.3943 73.0813C93.0946 79.3881 108.964 79.9255 111.62 79.9714ZM112 79.9756C112 79.9756 111.867 79.9726 111.62 79.9714C111.867 79.9756 112 79.9756 112 79.9756ZM90.2066 79.9742C89.3105 79.9697 83.9026 80.0379 81.7981 82.2737C79.5 84.7152 79.5 90.8089 79.5 90.8089C79.5 90.8089 79.5 84.4895 77.2019 82.2737C74.9039 80.0579 68.6667 79.9756 68.6667 79.9756C68.6667 79.9756 74.9861 79.9756 77.2019 77.6775C79.3327 75.4675 79.4906 69.6147 79.4996 69.1692C79.4929 69.6147 79.4503 75.4675 81.7981 77.6775C84.0316 79.7797 89.3214 79.9589 90.2066 79.9742Z"
        fill="#00AA71"
      />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 159 158"
      fill="none"
    >
      <path
        opacity="0.6"
        d="M79.3999 157.401C122.552 157.401 157.533 122.42 157.533 79.268C157.533 36.1162 122.552 1.13477 79.3999 1.13477C36.2481 1.13477 1.2666 36.1162 1.2666 79.268C1.2666 122.42 36.2481 157.401 79.3999 157.401Z"
        stroke="#DDDDDD"
        strokeWidth="0.957013"
      />
      <path
        opacity="0.6"
        d="M79.1593 147.794C116.803 147.794 147.319 117.278 147.319 79.6349C147.319 41.9915 116.803 11.4756 79.1593 11.4756C41.516 11.4756 11 41.9915 11 79.6349C11 117.278 41.516 147.794 79.1593 147.794Z"
        stroke="#DDDDDD"
        strokeWidth="0.957013"
      />
      <path
        d="M58.2978 70.8125H65.6767H99.4958L112.931 84.1557H100.049L79.2042 108.475L58.052 84.1557H46L58.2978 70.8125Z"
        fill="#00AA71"
      />
      <path
        d="M55.7188 80.9918L60.6705 75.3633H97.0522L102.883 80.9918H96.3422L79.0989 100.681L61.6181 80.9918H55.7188Z"
        fill="#060606"
      />
      <path
        d="M86.5828 58.8533L79.2041 51.4746L71.8254 58.8533L79.2041 66.232L86.5828 58.8533Z"
        fill="#00AA71"
      />
    </svg>
  );
}
