"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Branding",
    description:
      "Strategic brand positioning, visual identity systems, and communication frameworks that create lasting impressions.",
    image: "/HomePage/service-branding.png",
    link: "/services/branding",
  },
  {
    id: 2,
    title: "UI/UX",
    description:
      "Human-centered digital experiences that enhance usability, engagement, and conversion.",
    image: "/HomePage/service-ui-ux.svg",
    link: "/services/UI-UX-Design",
  },
  {
    id: 3,
    title: "Web Development",
    description:
      "Custom-built websites and platforms engineered for performance, scalability, and security.",
    image: "/HomePage/service-webdev.svg",
    link: "/services/website-development",
  },
  {
    id: 4,
    title: "App Development",
    description:
      "Robust and intuitive applications designed to elevate user interaction and digital accessibility.",
    image: "/HomePage/service-appdev.svg",
    link: "/services/mobile-application",
  },
  {
    id: 5,
    title: "SEO",
    description:
      "Data-backed SEO strategies that increase visibility, authority, and sustainable organic growth.",
    image: "/HomePage/service-seo.svg",
    link: "/services/seo",
  },
];

export default function NewServiceList() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState(1);
  const [hoveredSection, setHoveredSection] = useState<number | null>(null);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setActiveAccordion((prev) => (prev === id ? null : id));
  };

  return (
    <section>
      <div className="w-[90%] 2xl:max-w-[1740px] font-['Futuru'] mx-auto overflow-hidden mb-16 mt-3 md:py-16 px-3 md:px-0">
        <div className="gap-y-10 md:gap-y-20 flex flex-col items-start justify-start">
          {/* Header */}
          <div className="lg:gap-6 gap-4 flex flex-col items-center lg:items-start">
            <h2 className="uppercase text-[24px] md:text-[40px] lg:text-[50px] xl:text-[55px] text-white font-semibold leading-[26px] md:leading-[50px]">
              Services <span className="text-[#00AA71]">we</span> offer
            </h2>
            <p className="self-stretch opacity-70 text-center lg:text-start lg:justify-start lg:w-[65%] text-white text-[15px]  md:text-xl tracking-widest font-extralight font-futuru leading-[20px] md:leading-[27px]">
              We offer integrated digital solutions designed for modern brands.

            </p>
          </div>

          <div className="flex lg:flex-row flex-col lg:gap-40 justify-between w-full">
            {/* ---------- Desktop Timeline + Preview ---------- */}
            <div className="sticky top-0 w-full lg:w-[30%] hidden lg:block">
              <AnimatePresence mode="wait">
                {services.map((section) =>
                  section.id === activeSection ? (
                    <motion.div
                      key={section.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="flex flex-col items-start gap-4"
                    >
                      <motion.div
                        className="w-full h-[200px] relative overflow-hidden rounded-lg"
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      >
                        <Image
                          src={section.image || "/placeholder.svg"}
                          alt={`Preview - ${section.title}`}
                          fill
                          className="rounded-lg object-cover"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                        onClick={() => router.push(section.link || "#")}
                        className="cursor-pointer"
                      >
                        <h4 className="text-[19px] capitalize tracking-wider font-medium text-white opacity-[0.6] hover:opacity-100 transition-opacity">
                          {section.title}
                        </h4>
                      </motion.div>
                      <motion.p
                        className="text-white text-[22px] tracking-wider leading-[28px] font-['Futuru'] font-normal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.4 }}
                      >
                        {section.description}
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.6 }}
                      >
                        <Link href={section.link || "#"}>
                          <button className="mt-2 px-5 py-2 text-[15px] tracking-wider font-['Futuru'] font-medium rounded-[6px] hover:bg-white hover:text-black bg-[#00AA71] uppercase text-white hover:bg-opacity-80 transition-all duration-500">
                            EXPLORE MORE
                          </button>
                        </Link>
                      </motion.div>
                    </motion.div>
                  ) : null
                )}
              </AnimatePresence>
            </div>

            <div className="w-full">
              {/* ---------- Desktop Timeline ---------- */}
              <div className="hidden lg:block">
                {services.map((section) => {
                  const isActive = activeSection === section.id;
                  const isHovered = hoveredSection === section.id;

                  return (
                    <div
                      key={section.id}
                      className="timeline-step mb-6 border-b border-[#323232] relative cursor-pointer"
                      onMouseEnter={() => {
                        setHoveredSection(section.id);
                        setTimeout(() => setActiveSection(section.id), 100);
                      }}
                      onMouseLeave={() => setHoveredSection(null)}
                      style={{ minHeight: "90px" }}
                    >
                      <div className="flex items-center justify-between">
                        <h3
                          className="text-[5vw] 2xl:text-[100px] font-['Futuru'] uppercase leading-[6vw] 2xl:leading-[112px] font-semibold transition-all duration-1000 ease-in-out"
                          style={{
                            opacity: isActive || isHovered ? 1 : 0.15,
                            color: "white",
                            transform:
                              isActive || isHovered
                                ? "translateX(5px)"
                                : "translateX(0)",
                          }}
                        >
                          {section.title}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ---------- Mobile Accordion View ---------- */}
              <div className="lg:hidden block">
                {services.map((service) => {
                  const isActive = activeSection === service.id;
                  return (
                    <div
                      key={service.id}
                      onClick={() => {
                        setTimeout(() => setActiveSection(service.id), 100);
                      }}
                      className="mb-6 border-b border-[#323232] pb-4"
                    >
                      <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleAccordion(service.id)}
                      >
                        <h3
                          className="text-[26px] 2xl:text-[100px] font-['Futuru'] uppercase leading-[6vw] 2xl:leading-[112px] font-semibold transition-all duration-1000 ease-in-out"
                          style={{
                            opacity: isActive ? 1 : 0.15,
                            color: "white",
                            transform: isActive
                              ? "translateX(5px)"
                              : "translateX(0)",
                          }}
                        >
                          {service.title}
                        </h3>
                      </div>

                      {/* Accordion content */}
                      {activeAccordion === service.id && (
                        <div className="mt-4 transition-all duration-500 ease-in-out">
                          <Image
                            src={service.image}
                            alt={`- ${service.title}`}
                            width={400}
                            height={200}
                            className="object-contain rounded-lg w-full mb-4"
                          />
                          <h3 className="text-[18px] tracking-wider font-semibold opacity-60 text-white">
                            {service.title}
                          </h3>
                          <p className="text-white text-[15px] leading-[21px] font-light  mt-2 tracking-wider mb-4">
                            {service.description}
                          </p>
                          <Link href={service.link || "#"}>
                            <button className="mt-2 px-6 tracking-wider py-2 text-[12px] font-medium rounded-[6px] bg-[#00AA71] uppercase text-white hover:bg-opacity-80 transition-all duration-300">
                              EXPLORE MORE
                            </button>
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div >
    </section >
  );
}
