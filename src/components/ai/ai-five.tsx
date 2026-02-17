"use client"

import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { useWindowWidth } from "./ai-hero"

const AIFiveSection = () => {
  const width = useWindowWidth();
  return (
    <section className="relative pb-20 lg:pb-14 bg-black overflow-hidden flex flex-col pt-24 lg:pt-20">
      {/* Animated Glow Circles Effect - Centered */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none mt-20 lg:mt-16">
        <div className="relative flex items-center justify-center">
          {/* Circle 4 - Outermost */}
          <div className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] border border-green-400/5 rounded-full animate-pulse-glow-4"></div>

          {/* Circle 3 */}
          <div className="absolute w-[300px] h-[300px] md:w-[375px] md:h-[375px] lg:w-[450px] lg:h-[450px] border border-green-400/10 rounded-full animate-pulse-glow-3"></div>

          {/* Circle 2 */}
          <div className="absolute w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] border border-green-400/15 rounded-full animate-pulse-glow-2"></div>

          {/* Circle 1 - Innermost */}
          <div className="absolute w-[100px] h-[100px] md:w-[125px] md:h-[125px] lg:w-[150px] lg:h-[150px] border border-green-400/20 rounded-full animate-pulse-glow-1"></div>
        </div>
      </div>

      <div className="max-w-[1740px] w-[90%] mx-auto relative z-10 flex-1 flex flex-col">
        {/* Notification Banner */}
        <div className="flex justify-center pt-8 mb-8">
          <div className="w-full max-w-[680px] px-4">
            <div className="relative md:bottom-10 lg:bottom-0 bottom-[120px] bg-gradient-to-br from-white/10 to-white/0 rounded-lg outline outline-[1.21px] outline-offset-[-1.21px] outline-white/20 backdrop-blur-lg p-4 lg:p-5">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 text-slate-100 text-[14px] md:text-base lg:text-lg font-light tracking-widest font-['Futuru'] md:leading-relaxed leading-5">
                  ⚡️ Gemini 2.5 Pro and GPT-4.1 are now available—try them for free.
                </div>
                <ArrowUpRight
                  color="white"
                  className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity hidden md:block"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content - Centered Images */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-full flex items-center justify-center">
            {/* Desktop / Tablet Image */}
            <div className="hidden md:block relative md:bottom-[105px] md:right-[15px] lg:bottom-[150px] lg:right-[21px] xl:bottom-[190px] xl:right-[28px] 2xl:bottom-[200px] 2xl:right-[31px]">
              <Image
                src="/ai/ai-five.svg"
                alt="AI Dashboard Network View"
                width={1200}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </div>

            {/* Mobile Image */}
            <div className={`block md:hidden relative ${width < 380 ? "bottom-[50px]" : " bottom-[42px]"}`}>
              <Image
                src="/ai/ai-mob.png"
                alt="AI Dashboard Network View"
                width={600}
                height={300}
                className="w-full max-w-[350px] h-auto object-contain scale-150"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background subtle grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)
            `,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <style jsx>{`
        @keyframes pulse-glow-1 {
          0%, 100% {
            opacity: 0.3;
            box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
            transform: scale(1);
          }
          25% {
            opacity: 1;
            box-shadow: 0 0 40px rgba(34, 197, 94, 0.6);
            transform: scale(1.1);
          }
        }

        @keyframes pulse-glow-2 {
          0%, 100% {
            opacity: 0.2;
            box-shadow: 0 0 30px rgba(34, 197, 94, 0.2);
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            box-shadow: 0 0 50px rgba(34, 197, 94, 0.4);
            transform: scale(1.05);
          }
        }

        @keyframes pulse-glow-3 {
          0%, 100% {
            opacity: 0.15;
            box-shadow: 0 0 40px rgba(34, 197, 94, 0.15);
            transform: scale(1);
          }
          75% {
            opacity: 0.6;
            box-shadow: 0 0 60px rgba(34, 197, 94, 0.3);
            transform: scale(1.03);
          }
        }

        @keyframes pulse-glow-4 {
          0%, 100% {
            opacity: 0.1;
            box-shadow: 0 0 50px rgba(34, 197, 94, 0.1);
            transform: scale(1);
          }
          100% {
            opacity: 0.4;
            box-shadow: 0 0 70px rgba(34, 197, 94, 0.2);
            transform: scale(1.02);
          }
        }

        .animate-pulse-glow-1 {
          animation: pulse-glow-1 4s ease-in-out infinite;
        }

        .animate-pulse-glow-2 {
          animation: pulse-glow-2 4s ease-in-out infinite 1s;
        }

        .animate-pulse-glow-3 {
          animation: pulse-glow-3 4s ease-in-out infinite 2s;
        }

        .animate-pulse-glow-4 {
          animation: pulse-glow-4 4s ease-in-out infinite 3s;
        }

        @media (max-width: 768px) {
          .animate-pulse-glow-1,
          .animate-pulse-glow-2,
          .animate-pulse-glow-3,
          .animate-pulse-glow-4 {
            animation-duration: 3s;
          }
        }
      `}</style>
    </section>
  )
}

export default AIFiveSection
