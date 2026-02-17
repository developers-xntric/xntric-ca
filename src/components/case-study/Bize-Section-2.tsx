import Image from "next/image";
import AnimatedButtons from "../ui/AnimatedButton";

export default function CaseStudySection2(props: {
  heading: string;
  image?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
  reverse?: boolean;
  sec2Desc: string;
  overviewPara: string;
  video?: string;
}) {
  return (
    <div
      className="w-full flex justify-center py-8 xl:mt-20"
      style={{
        backgroundImage: "url(/Bize/)",
      }}
    >
      {/* Width set from left right space */}
      <div className="max-w-[88%] md:max-w-[90%] mx-auto flex flex-col gap-20">
        {/* Content */}
        <div className="lg:space-y-8 space-y-6">
          {/* Headings And Texts  */}
          <div className="flex items-center gap-4">
            <div className="text-white text-[15px] font-bold font-blauer leading-[30px]">
              About the project
            </div>
          </div>
          {/* Heading */}
          <div className="text-white md:max-w-[60%] text-3xl sm:text-[40px] lg:text-[65px] font-bold font-blauer leading-[33px] lg:leading-[65px] sm:leading-[45px]">
            {props.heading}
          </div>
          {/* Para */}
          <div className="text-white md:max-w-[50%] text-[18px] font-light font-blauer leading-[27px]">
            {props.sec2Desc}
          </div>
          <div className="">
            <AnimatedButtons buttonTitle="visit website" variant="neon" />
          </div>
        </div>
        {/* 2 Card */}
        <div
          className={`flex md:flex-row flex-col-reverse ${
            props.reverse && "md:flex-row-reverse"
          } gap-6 justify-center relative `}
        >
          <video
            src={"/GIFS/NEW GIFS/contact.webm"}
            autoPlay
            loop
            muted
            width={600}
            height={500}
            className={`absolute lg:-left-60 md:-left-60 -left-32 -top-10 -z-20`}
          ></video>
          <div
            className={`${
              props.video
                ? " md:w-1/2 w-full lg:h-auto rounded-[28px] lg:p-10 p-8"
                : "md:w-[700px] md:h-[580px]"
            } h-[400px] bg-white/15 space-y-6 rounded-[28px] text-white p-10`}
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(50px)",
            }}
          >
            <div className="lg:text-[40px] text-[30px] font-medium font-blauer leading-[72.5px]">
              Overview
            </div>
            <div className="lg:text-[18px] font-light font-blauer lg:leading-[33.35px] lg:line-clamp-none line-clamp-[8]">
              {props.overviewPara}
            </div>
          </div>

          <div
            className={`${
              props.video
                ? "md:w-[50%] xl:h-[600px] lg:h-[700px] rounded-[28px]"
                 : "md:w-[60%] md:h-[580px]"
            } h-[400px]  bg-white/15 space-y-6 rounded-[28px]`}
          >
            {props.image ? (
              <Image
                src={props.image}
                alt="bize2"
                width={2000}
                height={2000}
                className="w-full  h-full object-cover rounded-3xl"
              />
            ) : props.video ? (
              <video
                src={props.video}
                autoPlay
                loop
                muted
                width={600}
                height={500}
                className={`w-full h-full object-cover rounded-[28px]`}
              ></video>
            ) : null}
          </div>
        </div>
        {props.image2 && (
          <div className="md:w-full mb-10">
            <Image
              src={props.image2}
              alt="Bize3"
              width={1200}
              height={1200}
              className="w-full md:object-cover"
            />
          </div>
        )}
        {props.image3 && (
          <Image
            src={props.image3}
            alt="bize2"
            width={1200}
            height={1200}
            className="w-full h-full object-cover rounded-3xl"
          />
        )}
        {props.image4 && (
          <Image
            src={props.image4}
            alt="bize2"
            width={1200}
            height={1200}
            className="w-full h-full object-cover rounded-3xl"
          />
        )}
        {props.image5 && (
          <Image
            src={props.image5}
            alt="bize2"
            width={1200}
            height={1200}
            className="w-full h-full object-cover rounded-3xl"
          />
        )}
      </div>
    </div>
  );
}
