import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function GamingSection2() {
  return (
    <section
      id="section2"
      className="  overflow-hidden font-futuru py-12 md:py-16"
    >
      <div className="relative 2xl:max-w-[1740px] w-[90%] md:w-full  lg:w-[90%] mx-auto  lg:-space-y-44 2xl:-space-y-44 z-20">
        {/* Header and Contact Button */}
        <div className="md:max-w-[95%]">
          <div className="flex justify-between items-start mb-8 md:mb-14">
            <div className="flex-1"></div>
            <div className="lg:w-[700px] md:w-[80%] w-full xl:w-[900px] 2xl:w-[1101px] text-white text-[35px] md:text-[60px] lg:text-[80px] xl:text-[100px] 2xl:text-[120px] font-medium font-['Futuru'] uppercase xl:leading-[100px] leading-[40px] md:leading-[50px] lg:leading-[80px] 2xl:leading-[110px]">
              <span className="block text-left">WHERE YOUR</span>
              <span className="block text-right">BRANDED WORLD</span>
              <span className="block text-right">COMES ALIVE</span>
            </div>
          </div>

          <div className="flex md:justify-end justify-center w-full items-center ">
            <Link href="/contact" className="z-20">
              <Button className="bg-[#00aa71] hover:bg-white hover:text-black text-white transition-all duration-500 font-light px-10 py-3 rounded-[8px] text-sm tracking-widest">
                CONTACT US
              </Button>
            </Link>
          </div>
        </div>

        {/* Gaming Platforms - Scattered Layout */}
        <div className="relative grid md:grid-cols-2 md:gap-x-12 md:gap-y-10 lg:gap-0 lg:grid-cols-3 grid-cols-1 lg:mt-20 mt-16 -z-10">
          {/* ROBLOX - Left */}
          <div className="col-span-1 md:left-6 lg:left-10 relative">
            <div className="w-full md:h-[400.55px] h-[350px] xl:h-[450px] 2xl:h-[588.55px] relative z-20 bg-black outline outline-[1.34px] outline-[#dedede]/30">
              <div className="w-full h-full md:h-[105%] 2xl:h-[110%] right-[-25%] top-[-6%] absolute z-10">
                <Image className="" src="/game/card1.svg" alt="card1" fill />
              </div>
              <div className="flex flex-col justify-end items-start w-full h-full px-6 relative z-20">
                <div className="w-[587.21px] h-[200.68px] left-0 bottom-0 absolute -z-10 bg-gradient-to-b from-black/0 to-black" />
                <div className="md:w-[236px] w-[200px] 2xl:w-[450.09px] md:h-[80px] lg:h-[73.15px] h-[60px]  justify-center text-[#dddddd] tracking-wide md:text-[18px] text-[16px] leading-4 2xl:text-[27.92px] font-light font-futuru md:leading-6 lg:leading-5 2xl:leading-9">
                  500M+ registered users, the ultimate UGC brand hub powered by
                  Creative 2.0. 
                </div>
                {/* BORDER LINE */}
                <div className="w-full h-0 relative xl:top-[1%] 2xl:top-[3%] rounded-[9.31px] outline outline-[0.93px] outline-offset-[-0.47px] outline-[#434343]" />
                <div className=" text-[#dddddd] text-[60px] md:text-[50px] lg:text-[70px] xl:text-[90px] 2xl:text-[90px] font-semibold font-futuru tracking-widest md:tracking-[6.34px]">
                  ROBLOX
                </div>
                <Image
                  className="w-[80px] h-[80px] 2xl:w-[100px] 2xl:h-[100px] top-[36.13px] absolute"
                  src="/game/gridlines.svg"
                  alt="roblox"
                  width={2000}
                  height={2000}
                />
              </div>
            </div>
          </div>

          {/* FORTNITE - Center */}
          <div className="col-span-1 lg:mt-40 md:mt-0 mt-8 ">
            <div className="w-full md:w-[95%] lg:w-full h-[350px] md:h-[400.55px] xl:h-[450px] 2xl:h-[588.55px] relative z-20 bg-black outline outline-[1.34px] outline-[#dedede]/30">
              <div className="lg:w-full w-[80%] h-full right-[-10%] md:right-[-5%] lg:right-[-15%] top-[-2%] absolute z-10">
                <Image className="" src="/game/card2.svg" alt="card2" fill />
              </div>
              <div className="flex flex-col justify-end items-start w-full h-full px-6 z-20 relative">
                <div className="w-[587.21px] h-[200.68px] left-0 bottom-0 absolute -z-10 bg-gradient-to-b from-black/0 to-black" />
                <div className="md:w-[90%] w-[90%] 2xl:w-[500px] 2xl:h-[115px] md:h-[83.15px] h-[60px]  justify-center text-[#dddddd] tracking-wide text-[16px] md:text-[18px] 2xl:text-[27.92px] leading-4 md:leading-6 font-light font-futuru 2xl:leading-9">
                  Global reach, endless modding and customization for immersive brand experiences. 
                </div>
                {/* BORDER LINE */}
                <div className="w-full h-0 relative x:top-[3%] 2xl:top-[3%] rounded-[9.31px] outline outline-[0.93px] outline-offset-[-0.47px] outline-[#434343]" />
                <div className=" text-[#dddddd] text-[55px] md:text-[60px] lg:text-[65px] xl:text-[80px] 2xl:text-[90px] font-semibold font-futuru tracking-wider md:tracking-[6.34px]">
                  FORTNITE​
                </div>
                <Image
                  className="w-[80px] h-[80px] 2xl:w-[100px] 2xl:h-[100px] top-[36.13px] absolute"
                  src="/game/gridlines.svg"
                  alt="roblox"
                  width={2000}
                  height={2000}
                />
              </div>
            </div>
          </div>

          {/* MINECRAFT - Right */}
          <div className="col-span-1 lg:mt-[250px] mt-8 md:mt-0 xl:mt-[270px] md:right-[-70%] 2xl:mt-[295px] lg:right-[6%] xl:right-[10%] relative ">
            <div className="w-full md:h-[400.55px] h-[350px] xl:h-[450px] 2xl:h-[588.55px] relative z-20 bg-black outline outline-[1.34px] outline-[#dedede]/30">
              <div className="w-[70%] h-full right-[-5%] md:right-[-10%] top-[-10%] xl:top-[-17%] 2xl:top-[-20%] absolute z-10">
                <Image className="" src="/game/card3.svg" alt="card3" fill />
              </div>
              <div className="flex flex-col justify-end items-start w-full h-full px-6">
                <div className="w-[587.21px] h-[200.68px] left-0 bottom-0 absolute -z-10 bg-gradient-to-b from-black/0 to-black" />
                <div className=" 2xl:w-[500.09px] md:h-[76.15px] h-[70px]  justify-center text-[#dddddd] tracking-wide text-[16px] md:text-[18px] xl:text-[20px] 2xl:text-[27.92px] font-light font-futuru 2xl:leading-9 md:leading-6 leading-4 z-10">
        A creative sandbox with massive community engagement and limitless potential. 
                </div>
                {/* BORDER LINE */}
                <div className="w-full h-0 relative xl:top-[1%] 2xl:top-[3%] rounded-[9.31px] outline outline-[0.93px] outline-offset-[-0.47px] outline-[#434343]" />
                <div className=" text-[#dddddd] xl:py-3 text-[47px] md:text-[50px] xl:text-[60px] 2xl:text-[90px] font-semibold font-futuru tracking-wider md:tracking-[6.34px] 2xl:tracking-normal">
                  MINECRAFT
                </div>
                <Image
                  className="w-[80px] h-[80px] 2xl:w-[100px] 2xl:h-[100px] top-[36.13px] absolute"
                  src="/game/gridlines.svg"
                  alt="roblox"
                  width={2000}
                  height={2000}
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
