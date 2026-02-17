import React from "react";
import AnimatedButtons from "../ui/AnimatedButton";
import SlideCards from "../../components/services/slide-card";
import { SectionData } from "@/data/services-card";
import Image from "next/image";
import Link from "next/link";


const DevelopmentCard = (props: SectionData) => {
  return (
    <section className="relative py-28 ">
      <div className="absolute lg:-top-10 -left-1/2 transform translate-x-1/2 w-full">
        <Image
          src={props.bgImage ? props.bgImage : ""}
          alt="image"
          width={1400}
          height={500}
          className="w-full"
        />
      </div>
      <div className="absolute md:block hidden lg:-top-40 right-[20px] xl:right-[400px] transform translate-x-1/2 ">
        <Image
          src='/service/shadow.png'
          alt="image"
          width={700}
          height={700}
          className="w-screen"
        />
      </div>
      
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-[90%] mx-auto pt-5 md:pt-0 ">
          <div
            className={`flex ${props.textAlign === "right"
              ? "lg:flex-row-reverse flex-col "
              : "lg:flex-row flex-col"
              } justify-between lg:items-center items-start gap-20  md:gap-44 lg:gap-20`}
          >
            <div className="lg:w-[41%] xl:w-[40%] text-white flex flex-col gap-6 items-start relative z-10">
              <span className="lg:text-3xl xl:text-4xl text-2xl font-bold uppercase tracking-wider">
                {props.title}
              </span>
              <span className="lg:text-lg xl:text-xl text-xl font-semibold tracking-wider" dangerouslySetInnerHTML={{ __html: props.subHeading }}>

              </span>
              <p className="xl:text-base text-[13px] tracking-widest font-light">{props.description}</p>
              <Link href={props.href || ""}>
                <AnimatedButtons buttonTitle={props.button} variant="neon" className="w-[160px] bg-[#3BE29A] text-black tracking-wider uppercase text-sm" />
              </Link>
            </div>
            <div className="lg:w-[98%] xl:w-[60%] relative">
              <div
                className={`absolute ${props.textAlign === "right"
                  ? "md:-right-[760px] lg:-top-64 md:-top-80 -top-36 lg:-left-48 -right-[370px]"
                  : "xl:-right-60 md:-right-[760px] lg:-right-[540px] -right-[370px] lg:-top-60 -top-36 md:-top-80"
                  } md:-z-10`}
              >
                {props.imageUrl && (
                  <video
                    src={props.imageUrl}
                    autoPlay
                    loop
                    muted
                    width={500}
                    height={500}
                    className="xl:w-[500px] 3xl:w-[400px] xl:h-[500px] md:w-[400px] md:h-[400px] w-[250px] h-[250px]"
                  ></video>
                )}
              </div>
              <SlideCards
                textAlign={props.textAlign}
                cardsData={props.cardsData}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentCard;
