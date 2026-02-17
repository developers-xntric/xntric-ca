"use client"
import { useState } from "react";
import Form from "./Form";
import Thanks from "./Thanks";
function Section1() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:place-items-start gap-8 sm:gap-0 sm:relative">
      <div className="flex flex-col sm:flex-row justify-start sm:items-center w-[90%] mx-auto sm:w-full pt-1">
        <div className="space-y-2 sm:px-10 xl:px:0">
          <h2 className="text-[#3be29a] mb-6 text-xl">
            Let&apos;s create something amazing together!
          </h2>
          {/* CARD 1 */}
          <div className="flex lg:w-[80%] 2xl:w-[80%] flex-col gap-5 rounded-[26px] p-5 bg-white bg-opacity-10  outline outline-[0.80px] outline-offset-[-0.40px] outline-[#fffcfc]/25 backdrop-blur-[22.05px]">
            <h1 className="font-semibold text-lg sm:text-3xl text-white">
              Connect
            </h1>
            <div className="flex justify-between gap-2 text-white font-futuru">
              <p className="text-[12px] sm:text-[15px] tracking-widest">FACEBOOK</p>
              <p className="text-[12px] sm:text-[15px] tracking-widest">TWITTER</p>
              <p className="text-[12px] sm:text-[15px] tracking-widest">INSTAGRAM</p>
              <p className="text-[12px] sm:text-[15px]  tracking-widest">LINKEDIN</p>
            </div>
          </div>
          {/* CARD 2 */}
          <div className="flex lg:w-[80%] 2xl:w-[80%] flex-col gap-3 rounded-[26px] p-5  bg-white bg-opacity-10  outline outline-[0.80px] outline-offset-[-0.40px] outline-[#fffcfc]/25 backdrop-blur-[22.05px]">
            <h1 className="text-[13px] sm:text-[15px] text-white">Email</h1>
            <div className="flex gap-2 text-white font-futuru">
              <a
                href="mailto:info@xntric.com"
                className="text-lg sm:text-3xl"
              >
                info@xntric.com
              </a>
            </div>
          </div>
          {/* CARD 3 */}
          <div className="flex lg:w-[80%] 2xl:w-[80%] 2xl flex-col gap-3 rounded-[26px] p-5 bg-white bg-opacity-10 outline outline-[0.80px] outline-offset-[-0.40px] outline-[#fffcfc]/25 backdrop-blur-[22.05px]">
            <h1 className=" text-[13px] sm:text-[15px] text-white">Book a meeting</h1>
            <div className="flex gap-2 text-white font-futuru">
              <p className="text-lg sm:text-2xl tracking-wide">
                {" "}
                Let&apos;s discuss your project in detail!
              </p>
            </div>
          </div>
          <div className="pt-10 space-y-3">
            <h2 className="text-[#3be29a] text-xl">What we offer</h2>
            <div>
              <p className="text-white text-sm sm:text-base tracking-wider">
                <span className="font-semibold tracking-wider">Web development:</span> Custom solutions tailored to your
                needs.
              </p>
              <p className="text-white text-sm sm:text-base tracking-wider">
                <span className="font-semibold tracking-wider">App development:</span> From concept to launch to your needs.
              </p>
              <p className="text-white text-sm sm:text-base tracking-wider">
                <span className="font-semibold tracking-wider">UI/UX design:</span> Elevate your user experience with sleek, modern desgins.
              </p>
              <p className="text-white text-sm sm:text-base tracking-wider">
                <span className="font-semibold tracking-wider">Branding:</span> Create a brand identity that stands out.
              </p>
            </div>
          </div>
        </div>
        
        <video
          src={"/contact.webm"}
          autoPlay
          loop
          muted
          width={500}
          height={500}
          className="absolute -z-20 -left-20 lg:-left-24 xl:-left-40 top-[80px] sm:top-[0px] w-[250px] sm:w-[200px] md:w-[300px] lg:w-[500px]"
        ></video>
      </div>
      <div className="2xl:w-[60] w-full">
        {
          isSubmitted ? <Thanks setIsSubmitted={setIsSubmitted} /> :
            <Form setIsSubmitted={setIsSubmitted} />
        }
      </div>
    </div>
  );
}

export default Section1;
