import Image from "next/image";

const People = () => {
  return (
    <section className="md:py-16">
      <div className="2xl:max-w-[1740px] mx-auto">
        <div className="max-w-[90%] mx-auto ">
          <div className="flex items-center justify-center lg:gap-3 flex-col text-center mb-10 md:mb-20 font-futuru">
            <span className="text-lg md:text-5xl relative top-6 lg:top-7 text-white font-thin font-futuru tracking-wider">
              It’s all about
            </span>
            <h2 className="text-[72px] lg:text-9xl text-[#00AA71] font-semibold font-futuru">
              PEOPLE
            </h2>
            <p className="text-[11px] md:text-xl text-white font-extralight font-futuru lg:max-w-[80%] mx-auto tracking-widest">
              Our work is fueled by collaboration and innovation, transforming
              ideas into powerful, impactful solutions.
            </p>
          </div>
          <div className="lg:contents  hidden w-screen overflow-hidden rounded-2xl">
            {/* <ImageSlider images={testimonials} /> */}
            <Image
              src="/Careers/people.png"
              alt="img"
              width={1400}
              height={1000}
              className="w-full h-[95vh] xl:h-[90vh] 2xl:h-[914px] object-cover rounded-[8px]"
            />
          </div>
        </div>
        <Image
          src="/Careers/people-mobile.svg"
          alt="img"
          width={1400}
          height={1000}
          className="w-full object-cover lg:hidden block"
        />
      </div>
    </section>
  );
};

export default People;