"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MapSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<HTMLDivElement>(null);
  const textsRef = useRef<HTMLDivElement>(null);

  const largeLocations = [
    {
      id: "canada",
      name: "CANADA",
      description:
        "3895 Manatee Way, Mississauga, Ontario L5M6P7 +437 860 1095",
      position: { top: "50%", left: "15%" },
      textPosition: { top: "20%", left: "17%" },
      bottom: false,
    },
    {
      id: "uk",
      name: "UNITED KINGDOM",
      description:
        "3 Rushtonâ€™s Yard, Ashby de la Zouch, Leicestershire, LE65 1AL, United Kingdom +44 7436 276007",
      position: { top: "30%  ", left: "46%" },
      textPosition: { top: "0%", left: "48%" },
      bottom: false,
    },
    {
      id: "dubai",
      name: "DUBAI",
      description:
        "3141 Anas Ibn Malik Rd, Al Malqa, Riyadh 13521 +966 (0)500274782",
      position: { top: "42%", left: "68%" },
      textPosition: { top: "13%", left: "70%" },
      bottom: false,
    },
    {
      id: "saudi",
      name: "SAUDI ARABIA",
      description:
        "Unit #47, Plot #1479, Feeder Commercial Centre, Meâ€™Asiem First, Dubai Production City, Dubai",
      position: { top: "43%", left: "62%" },
      textPosition: { top: "62%", left: "64%" },
      bottom: true,
    },
    {
      id: "egypt",
      name: "EGYPT",
      description:
        "Unit #47, Plot #1479, Feeder Commercial Centre, Meâ€™Asiem First, Dubai Production City, Dubai +971 4546 4465",
      position: { top: "41%", left: "58%" },
      textPosition: { top: "62%", left: "40%" },
      isleft: true,
      bottom: true,
    },
  ];
  const locations = [
    {
      id: "canada",
      name: "CANADA",
      description:
        "3895 Manatee Way, Mississauga, Ontario L5M6P7 +437 860 1095",
      position: { top: "50%", left: "20%" },
      textPosition: { top: "0%", left: "22%" },
      bottom: false,
    },
    {
      id: "uk",
      name: "UNITED KINGDOM",
      description:
        "3 Rushtonâ€™s Yard, Ashby de la Zouch, Leicestershire, LE65 1AL, United Kingdom +44 7436 276007",
      position: { top: "30%  ", left: "46%" },
      textPosition: { top: "-12%", left: "48%" },
      bottom: false,
    },
    {
      id: "dubai",
      name: "DUBAI",
      description:
        "3141 Anas Ibn Malik Rd, Al Malqa, Riyadh 13521 +966 (0)500274782",
      position: { top: "38%", left: "68%" },
      textPosition: { top: "0%", left: "70%" },
      bottom: false,
    },
    {
      id: "saudi",
      name: "SAUDI ARABIA",
      description:
        "Unit #47, Plot #1479, Feeder Commercial Centre, Meâ€™Asiem First, Dubai Production City, Dubai",
      position: { top: "40%", left: "62%" },
      textPosition: { top: "62%", left: "64%" },
      bottom: true,
    },
    {
      id: "egypt",
      name: "EGYPT",
      description:
        "Unit #47, Plot #1479, Feeder Commercial Centre, Meâ€™Asiem First, Dubai Production City, Dubai +971 4546 4465",
      position: { top: "39%", left: "58%" },
      textPosition: { top: "68%", left: "38%" },
      isleft: true,
      bottom: true,
    },
  ];
  const locationsMobile = [
    {
      id: "canada",
      name: "CANADA",
      description:
        "3895 Manatee Way, Mississauga, Ontario L5M6P7 +437 860 1095",
      position: { top: "16%", left: "4%" },
      textPosition: { top: "-10%", left: "6%" },
      bottom: false,
    },
    {
      id: "uk",
      name: "UNITED KINGDOM",
      description:
        "3 Rushtonâ€™s Yard, Ashby de la Zouch, Leicestershire, LE65 1AL, United Kingdom +44 7436 276007",
      position: { top: "8%  ", left: "58%" },
      textPosition: { top: "-20%", left: "60%" },
      bottom: false,
    },
    {
      id: "dubai",
      name: "DUBAI",
      description:
        "3141 Anas Ibn Malik Rd, Al Malqa, Riyadh 13521 +966 (0)500274782",
      position: { top: "20%", left: "68%" },
      textPosition: { top: "0%", left: "70%" },
      bottom: false,
    },
    {
      id: "saudi",
      name: "SAUDI ARABIA",
      description:
        "Unit #47, Plot #1479, Feeder Commercial Centre, Meâ€™Asiem First, Dubai Production City, Dubai",
      position: { top: "20%", left: "62%" },
      textPosition: { top: "40%", left: "64%" },
      bottom: true,
    },
    {
      id: "egypt",
      name: "EGYPT",
      description:
        "Unit #47, Plot #1479, Feeder Commercial Centre, Meâ€™Asiem First, Dubai Production City, Dubai +971 4546 4465",
      position: { top: "22%", left: "55%" },
      textPosition: { top: "40%", left: "3%" },
      isleft: true,
      bottom: true,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(".location-marker", { scale: 0, opacity: 0 });
      gsap.set(".location-line", { scaleY: 0, transformOrigin: "left center" });
      gsap.set(".location-text", { opacity: 0, y: 20 });

      // Create timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 40%",
          toggleActions: "play none none reverse",
        },
      });

      // Slower, more deliberate timing: markers arrive, text follows with a small delay,
      // and lines draw in later so the sequence breathes.
      tl.to(
        ".location-marker",
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "back.out(1.7)",
        },
        0
      );

      tl.to(
        ".location-text",
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
        },
        0.12
      );

      // Lines start later and take longer for a smooth finish.
      tl.to(
        ".location-line",
        {
          scaleY: 1,
          duration: 1.1,
          stagger: 0.14,
          ease: "power2.out",
        },
        0.28
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="md:mt-24 mt-16 md:h-[140vh] h-[95vh] 2xl:h-[120vh] bg-black font-['Futuru'] text-white overflow-hidden"
    >
      <div className="w-[100%] mx-auto 2xl:max-w-[1200px] flex flex-col">
        {/* Header */}
        <div className="text-center mb-44 md:mb-36 2xl:mb-40">
          <h2 className="text-[22px] lg:text-[35px] xl:text-[50px] font-extralight text-white leading-[24px]">
            Crafting Digital Success
          </h2>
          <h2 className="text-[30px] lg:text-[60px] xl:text-[90px] uppercase text-[#00AA71] font-semibold">
            ACROSS CONTINENTS
          </h2>
          <p className="text-[#FFFFFF] tracking-wider font-extralight text-[14px] mx-4 md:mx-0 lg:text-[16px] xl:text-[20px]">
            Identity, Communication and Experiences for brands with a 2.0
            mindset
          </p>
        </div>

        {/* Map Container */}
        <div className="md:block relative 2xl:hidden hidden 2xl:right-[7%] w-full 2xl:w-[110%] h-screen mx-auto">
          {/* World Map Background */}
          <div
            ref={mapRef}
            className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-60 bg-[url('/HomePage/home-map.svg')] w-[80%] mx-auto"
          >
            <div className="absolute inset-0">
              {Array.from({ length: 100 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-gray-600 rounded-full opacity-40"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Location Markers and Lines */}
          <div ref={markersRef} className="absolute inset-0">
            {locations.map((location) => (
              <div key={location.id}>
                {/* Marker */}
                <div
                  className="location-marker absolute w-4 h-4 bg-[#18FF9C] rounded-full shadow-lg"
                  style={{
                    top: location.position.top,
                    left: location.position.left,
                    transform: "translate(-50%, -50%)",
                    boxShadow: "0 0 20px rgba(34, 197, 94, 0.6)",
                  }}
                >
                  <div className="absolute inset-0 bg-[#13986B] rounded-full animate-ping duration-1000 opacity-75"></div>
                </div>

                {/* Connecting Line */}
                <div
                  className={`location-line absolute h-0.5 bg-gradient-to-r from-[#008257]  to-transparent origin-left ${location.bottom === true ? "mt-2" : "-mt-2"
                    } `}
                  style={{
                    top: location.position.top,
                    left: location.position.left,
                    width: `${Math.sqrt(
                      Math.pow(
                        (Number.parseFloat(location.textPosition.left) -
                          Number.parseFloat(location.position.left)) *
                        10,
                        2
                      ) +
                      Math.pow(
                        (Number.parseFloat(location.textPosition.top) -
                          Number.parseFloat(location.position.top)) *
                        7,
                        2
                      )
                    )}px`,
                    transform: `rotate(${Math.atan2(
                      (Number.parseFloat(location.textPosition.top) -
                        Number.parseFloat(location.position.top)) *
                      50,
                      (Number.parseFloat(location.textPosition.left) -
                        Number.parseFloat(location.position.left)) *
                      0
                    ) *
                      (180 / Math.PI)
                      }deg)`,
                    transformOrigin: "left center ",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Location Text */}
          <div ref={textsRef} className="absolute inset-0 font-futuru">
            {locations.map((location) => (
              <div
                key={`${location.id}-text`}
                className={`location-text absolute text-white ${location.isleft ? "text-right" : "right-0"
                  } `}
                style={{
                  top: location.textPosition.top,
                  left: location.textPosition.left,
                  maxWidth: "220px",
                }}
              >
                <h3 className="font-semibold text-[16px] lg:text-[24px] 2xl:text-[29px] mb-1">
                  {location.name}
                </h3>
                <p className="text-[10px] lg:text-[16px] font-extralight tracking-wider leading-[12px] lg:leading-[20px]">
                  {location.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Map 2xl screen Container */}
        <div className="hidden 2xl:block relative 2xl:right-[7%] w-full 2xl:w-[110%] h-screen mx-auto">
          {/* World Map Background */}
          <div
            ref={mapRef}
            className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-60 bg-[url('/HomePage/home-map.svg')] w-[100%] "
          >
            <div className="absolute inset-0">
              {Array.from({ length: 100 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-gray-600 rounded-full opacity-40"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Location Markers and Lines */}
          <div ref={markersRef} className="absolute inset-0">
            {largeLocations.map((location) => (
              <div key={location.id}>
                {/* Marker */}
                <div
                  className="location-marker absolute w-4 h-4 bg-[#18FF9C] rounded-full shadow-lg"
                  style={{
                    top: location.position.top,
                    left: location.position.left,
                    transform: "translate(-50%, -50%)",
                    boxShadow: "0 0 20px rgba(34, 197, 94, 0.6)",
                  }}
                >
                  <div className="absolute inset-0 bg-[#13986B] rounded-full animate-ping duration-1000 opacity-75"></div>
                </div>

                {/* Connecting Line */}
                <div
                  className={`location-line absolute h-0.5 bg-gradient-to-r from-[#008257]  to-transparent origin-left ${location.bottom === true ? "mt-2" : "-mt-2"
                    } `}
                  style={{
                    top: location.position.top,
                    left: location.position.left,
                    width: `${Math.sqrt(
                      Math.pow(
                        (Number.parseFloat(location.textPosition.left) -
                          Number.parseFloat(location.position.left)) *
                        10,
                        2
                      ) +
                      Math.pow(
                        (Number.parseFloat(location.textPosition.top) -
                          Number.parseFloat(location.position.top)) *
                        10,
                        2
                      )
                    )}px`,
                    transform: `rotate(${Math.atan2(
                      (Number.parseFloat(location.textPosition.top) -
                        Number.parseFloat(location.position.top)) *
                      50,
                      (Number.parseFloat(location.textPosition.left) -
                        Number.parseFloat(location.position.left)) *
                      0
                    ) *
                      (180 / Math.PI)
                      }deg)`,
                    transformOrigin: "left center ",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Location Text */}
          <div ref={textsRef} className="absolute inset-0 font-futuru">
            {largeLocations.map((location) => (
              <div
                key={`${location.id}-text`}
                className={`location-text absolute text-white ${location.isleft ? "text-right" : "right-0"
                  } `}
                style={{
                  top: location.textPosition.top,
                  left: location.textPosition.left,
                  maxWidth: "220px",
                }}
              >
                <h3 className="font-semibold text-[16px] lg:text-[24px] 2xl:text-[29px] mb-1">
                  {location.name}
                </h3>
                <p className="text-[10px] lg:text-[16px] font-extralight tracking-wider leading-[12px] lg:leading-[20px]">
                  {location.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Map mobile Container */}
        <div className="relative md:hidden 2xl:right-[7%] w-full 2xl:w-[110%] h-screen mx-auto">
          {/* World Map Background */}
          <div
            ref={mapRef}
            className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-60  w-[100%] "
          >
           <Image src={"/HomePage/home-map-mobile.svg"} alt="" width={1000} height={1000}/>
          </div>

          {/* Location Markers and Lines */}
          <div ref={markersRef} className="absolute inset-0">
            {locationsMobile.map((location) => (
              <div key={location.id}>
                {/* Marker */}
                <div
                  className="location-marker absolute w-3 h-3 bg-[#18FF9C] rounded-full shadow-lg"
                  style={{
                    top: location.position.top,
                    left: location.position.left,
                    transform: "translate(-45%, -50%)",
                    boxShadow: "0 0 20px rgba(34, 197, 94, 0.6)",
                  }}
                >
                  <div className="absolute inset-0 bg-[#13986B] rounded-full animate-ping duration-1000 opacity-75"></div>
                </div>

                {/* Connecting Line */}
                <div
                  className={`location-line absolute h-0.5 bg-gradient-to-r from-[#008257]  to-transparent origin-left ${location.bottom === true ? "mt-2" : "-mt-1"
                    } `}
                  style={{
                    top: location.position.top,
                    left: location.position.left,
                    width: `${Math.sqrt(
                      Math.pow(
                        (Number.parseFloat(location.textPosition.left) -
                          Number.parseFloat(location.position.left)) *
                        1,
                        2
                      ) +
                      Math.pow(
                        (Number.parseFloat(location.textPosition.top) -
                          Number.parseFloat(location.position.top)) *
                        6,
                        2
                      )
                    )}px`,
                    transform: `rotate(${Math.atan2(
                      (Number.parseFloat(location.textPosition.top) -
                        Number.parseFloat(location.position.top)) *
                      50,
                      (Number.parseFloat(location.textPosition.left) -
                        Number.parseFloat(location.position.left)) *
                      0
                    ) *
                      (180 / Math.PI)
                      }deg)`,
                    transformOrigin: "left center ",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Location Text */}
          <div ref={textsRef} className="absolute inset-0 font-futuru">
            {locationsMobile.map((location) => (
              <div
                key={`${location.id}-text`}
                className={`location-text absolute text-white ${location.isleft ? "text-right" : "right-0"
                  } `}
                style={{
                  top: location.textPosition.top,
                  left: location.textPosition.left,
                  maxWidth: "150px",
                }}
              >
                <h3 className="font-semibold text-[16px] lg:text-[24px] 2xl:text-[29px] mb-1">
                  {location.name}
                </h3>
                <p className="text-[10px] lg:text-[16px] font-extralight tracking-wider leading-[12px] lg:leading-[20px]">
                  {location.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}