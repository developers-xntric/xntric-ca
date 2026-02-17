"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

            
function HeroSlider({
  awwards,
}: {
  title?: string;
  bgImage?: boolean;
  awwards: { year: string; icon: string }[];
}) {
  const [duration, setDuration] = useState(20);

  const duplicatedAwards = [...awwards, ...awwards];

  useEffect(() => {
    const handleResize = () => {
      setDuration(window.innerWidth < 768 ? 10 : 20);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    return () => window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  return (
    <div id="YearsAwwards" className="lg:w-[27%] xl:w-[31%] md:w-[20%] absolute bg-black p-10 rounded-tl-[10px] md:bottom-[-2%] right-0 font-futuru flex flex-col justify-between items-center overflow-hidden text-white">
      <div className="flex flex-col items-center justify-center gap-10 ">
        {/* Scrolling Awards */}
        <div className=" overflow-hidden w-full">
          <motion.div
            key={duration}
            className="flex gap-24 whitespace-nowrap"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {duplicatedAwards.map((award, index) => (
              <div key={index} className="flex flex-col gap-1">
                <div className="border-b border-[#5B5B5B]">
                  <Image
                    width={113}
                    height={67}
                    src={award.icon}
                    alt={`Award ${index}`}
                    className="w-[113.824px] max-h-[67.438px] "
                  />
                </div>
                <p className="text-[18px] font-normal tracking-widest font-['Futuru']">YEAR {award.year}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HeroSlider;
