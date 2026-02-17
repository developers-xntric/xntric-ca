function Hero() {
  return (
    <div className="relative bg-cover  bg-no-repeat bg-center h-[280px] md:h-[100vh]">
      <div>
        <video
          src="/HomePage/Home-Hero.webm"
          autoPlay
          loop
          muted
          width={1000}
          height={1000}
          className="w-full absolute top-16 md:top-16 lg:top-0 xl:-top-20 md:block hidden"
        ></video>
        <h1 className="text-white hidden md:flex font-extralight  font-futuru justify-center tracking-wider md:leading-7 text-center lg:max-w-[60%] xl:max-w-[70%] max-w-[90%] md:top-[60%] md:max-w-[60%] md:text-[12px] w-full mx-auto text-[7px]  2xl:text-[1rem] 4xl:text-[2rem] lg:text-[1rem] uppercase items-center absolute z-40 top-[60%] xs:top-[68%] lg:top-[70%] xl:top-[68%] left-1/2 -translate-x-1/2 ">
          State-of-the-art custom web design and development,
          <br /> with a focus on precision and meticulous attention to detaiL.
        </h1>
        <ul className="text-white font-['Futuru'] font-normal absolute top-[80%] xs:top-[85%] z-40 md:top-[25%] text-[6px] md:text-[8px] tracking-[2px] md:left-8 xl:left-12 left-1/2 -translate-x-1/2 hidden md:flex flex-row md:flex-col gap-6 2xl:text-[12px] 4xl:text-[20px] gap-y-24 2xl:gap-y-32 items-center uppercase cursor-pointer">
          <li className="md:rotate-[270deg] hover:text-[#3BE29A]">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                typeof window !== 'undefined' ? window.location.href : ''
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li className="md:rotate-[270deg] hover:text-[#3BE29A]">
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                typeof window !== 'undefined' ? window.location.href : ''
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li className="md:rotate-[270deg] hover:text-[#3BE29A]">
            <a
              href={`https://www.instagram.com/xntric_global/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li className="md:rotate-[270deg] hover:text-[#3BE29A]">
            <a
              href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
                typeof window !== 'undefined' ? window.location.href : ''
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>

        {/* MOBILE */}
        <video
          src="/HomePage/MobVideo.webm"
          autoPlay
          loop
          muted
          width={2000}
          height={2000}
          className="w-full absolute top-[40%] md:top-40 md:to6 lg:top-0 xl:-top-20 block md:hidden"
        ></video>
       
        {/* <div className="absolute bottom-40 sm:bottom-16 right-10 sm:right-20 md:right-20">
 
        </div> */}
      </div>
    </div>
  );
}

export default Hero;
