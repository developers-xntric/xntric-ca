"use client";

import Image from "next/image";
export default function AINewHero() {
  return (
    <>
      <section className="relative min-h-screen bg-black overflow-hidden">
        <div className="2xl:max-w-[1740px] mx-auto w-[90%]">
          <div className="absolute md:block hidden inset-0 z-0">
            <Image
              src="/ai/hero-bg.svg"
              alt="Background"
              fill
              className="object-cover opacity-80"
              priority
            />
          </div>
          <div className="absolute md:hidden block inset-0 z-0">
            <Image
              src="/ai/hero-mob-bg.jpeg"
              alt="Background"
              fill
              className="object-cover opacity-80"
              priority
            />
          </div>

          {/* Content Container */}
          <div className="relative z-10 top-1/2 transform translate-y-[75%] md:translate-y-[40%] 2xl:translate-y-1/2 space-y-20 md:space-y-16">
            <div className="flex flex-col lg:flex-row lg:items-center w-full h-full justify-between">
              {/* Left Content */}
              <div className="space-y-2 md:space-y-20">
                {/* Main Heading */}
                <div className="md:space-y-2">
                  <h1 className="text-[27px] md:text-5xl lg:text-[70px] 2xl:text-[85px] font-bold leading-9 md:leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-[#3BE29A] uppercase">
                    {" "}
                   Where Intelligence Meets Impact{" "}
                  </h1>
                  <h2 className="text-[23px] relative bottom-1 md:bottom-0 md:text-2xl lg:text-[48px] 2xl:text-[68px] font-light text-white/90 tracking-widest ml-[20px] md:ml-[45px] uppercase">
                   AI Consulting Services in Canada
                  </h2>
                </div>
                {/* Description */}
                <p className="text-gray-300 text-[12px] md:text-lg lg:text-xl max-w-[250px] md:max-w-[420px] leading-relaxed tracking-wider">
                 At Xntric, we deliver strategic and implementation-driven AI solutions that go beyond experimentation. We build systems that create measurable business impact. 

                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
