/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";

const SecondSectionCase = (props: any) => {
  return (
    <div className={`w-full bg-center md:mt- 3xl:mt-0 h-[80vh] sm:h-[90vh] md:h-[100vh] lg:h-[125vh] xl:h-[120vh] 2xl:h-[1000px]  bg-cover bg-no-repeat relative ${props.isdelmonte ? "5xl:h-[1100px]" : "5xl:h-[970px]"}`}>
      <div className="w-full md:w-screen flex justify-center absolute bottom-0">
        {props.caseStudyBottomSection && (
          <div className="flex flex-col lg:gap-10 gap-6 justify-center items-center">
            {/* Hero Bottom Text */}
            <div className=" 2xl:w-[1050.90px] lg:text-center text-white text-[18px] md:text-[20px] lg:text-[24px] font-normal font-blauer mx-auto md:line-clamp-3 line-clamp-6 lg:line-clamp-3 lg:max-w-[88%] max-w-[90%] lg:leading-[30px]">
              {props.bottomCenterText || null}
            </div>

            {/* Case Study Image */}
            {props.bottomImage && (
              <div className="xl:w-[1200px] xl:h-auto rounded-[28px]">
                <Image
                  src={props.bottomImage!}
                  alt="Case Study Image"
                  width={1200}
                  height={1200}
                  className="w-full h-full rounded-[20px] "
                />
              </div>
            )}

            {props.bottomVideo && (
              <div className="xl:w-[1200px] xl:h-[780px]">
                <video
                  src={props.bottomVideo!}
                  loop
                  autoPlay
                  muted
                  width={1000}
                  height={1000}
                  className="w-full h-full"
                ></video>
              </div>
            )}
            {props.desciption && (
              <div className="lg:w-[800px] xl:w-[980px] 2xl:w-[1050.83px] lg:text-center text-start max-w-[90%] mx-auto text-white text-[18px] md:text-[20px] lg:text-[24px] font-light font-blauer lg:leading-[30px]">
                {props.desciption}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SecondSectionCase;
