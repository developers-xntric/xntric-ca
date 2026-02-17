/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";

const SlideCards = (props: any) => {
  const [cards, setCards] = useState(props.cardsData);
  const [active, setActive] = useState(0);
  const [line, setLine] = useState(33);
  const interactionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleLine = (index: number) => {
    switch (index) {
      case 1:
        setLine(66);
        break;
      case 2:
        setLine(100);
        break;
      case 3:
        setLine(33);
        break;
      default:
        break;
    }
  };

  const handleCardClick = (clickedId: any) => {
    setCards((prevCards: any) => {
      const cardIndex = prevCards.findIndex(
        (card: any) => card.id === clickedId
      );
      const newCards = [...prevCards];
      const [clickedCard] = newCards.splice(cardIndex, 1);
      newCards.push(clickedCard);
      setActive(cardIndex);
      handleLine(clickedId + 1);
      return newCards;
    });
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }
    interactionTimeoutRef.current = setTimeout(() => {}, 1000);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prevActive) => {
        const newActive = (prevActive + 1) % cards.length;
        setLine(((newActive + 1) / cards.length) * 100);
        return newActive;
      });
    }, 1500); // 1.5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [cards.length]);

  useEffect(() => {
    return () => {
      if (interactionTimeoutRef.current)
        clearTimeout(interactionTimeoutRef.current);
    };
  }, []);

  const Card = ({ id, title, services, index }: any) => {
    const isActive = index === active;
    const isSideHeadingVisible = !isActive;

    return (
      <div
        onClick={() => window.innerWidth < 1024 && handleCardClick(id)}
        className={`absolute cursor-pointer transition-all duration-500 ease-in-out transform text-white text-start 
                    ${
                      isActive
                        ? "translate-x-0 translate-y-0 z-30 scale-100  backdrop-blur-2xl rounded-[26px] bg-white/10"
                        : index === active + 1 ||
                          (index === 0 && active === cards.length - 1)
                        ? `${
                            props.textAlign === "right"
                              ? "lg:translate-x-[56px] xl:translate-x-[72px]"
                              : "lg:-translate-x-[56px] xl:-translate-x-[75px]"
                          } lg:translate-y-0 md:translate-y-[-60px]  z-20 scale-95 bg-black rounded-[26px]`
                        : `${
                            props.textAlign === "right"
                              ? "lg:translate-x-[108px] xl:translate-x-[145px]"
                              : "lg:-translate-x-[108px] xl:-translate-x-[140px]"
                          } lg:translate-y-0 md:translate-y-[-130px] z-10 scale-90 bg-black rounded-[26px]`
                    }`}
      >
        <div className="xl:w-[580px] lg:w-[480px] sm:w-[380px] md:w-[600px] w-[290px] xs:w-[310px] md:h-[300px] h-[330px] xl:min-h-[340px] rounded-[26px] transition-shadow duration-300 border border-white py-6 px-2">
          <div className="absolute md:hidden -right-14 top-0 ">
            <Image
              src="/service/service-card-bg-mob.svg"
              alt="imagebg"
              width={1500}
              height={700}
              className=" object-cover"
            />
          </div>
          <div className="absolute md:hidden bottom-0 -left-28 top-[1px] ">
            <Image
              src="/service/service-card-bg-mob.svg"
              alt="imagebg"
              width={1500}
              height={700}
              className=" object-cover"
            />
          </div>
          <div className="p-4 lg:p-5 xl:p-6 flex flex-col gap-4 h-full w-full items-start relative">
            {isSideHeadingVisible ? (
              <div
                className={`absolute lg:top-1/2 md:top-0 top-full transform -translate-y-1/2 lg:w-[70%] h-[73%] my-auto w-full
                                ${
                                  props.textAlign === "right"
                                    ? "lg:left-[78%]"
                                    : "lg:-left-[15%] "
                                } 
                                transition-all duration-300`}
              >
                <h3
                  onClick={() =>
                    window.innerWidth > 1024 && handleCardClick(id)
                  }
                  className="lg:rotate-[270deg] xl:text-[18px]  w-full h-full  uppercase lg:text-center tracking-wider"
                >
                  {title}
                </h3>
              </div>
            ) : (
              <h3 className="lg:text-xl xl:text-4xl text-xl font-bold leading-6 lg:mb-4 text-[#3BE29A] capitalize tracking-wider">
                {title}
              </h3>
            )}
            {isActive && (
              <ul className="flex flex-col lg:flex-wrap  lg:max-h-[80%] gap-2 gap-x-8 place-items-start ">
                {services.map((service: any, idx: any) => (
                  <li
                    key={idx}
                    className={` text-[13px] xl:text-[16px] flex col-span-1 transition-transform duration-500 tracking-widest`}
                  >
                    {service
                      ? service
                      : service?.charAt(0).toUpperCase() +
                        service?.slice(1).toLowerCase()}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`flex lg:items-center ${
        props.textAlign === "right" ? "lg:justify-start" : "lg:justify-center"
      }`}
    >
      <div className="lg:h-[350px] xl:h-[400px] h-[150px] md:h-[300px] lg:w-1/2">
        {cards?.map((card: any, index: any) => (
          <Card key={card.id} {...card} index={index} />
        ))}
      </div>
      <div
        className={` absolute  md:-bottom-12 lg:bottom-0 -bottom-60 w-[290px] sm:w-[380px] md:w-[600px] lg:w-[500px] xl:w-[600px] mx-auto h-1 bg-gray-800 rounded-full overflow-hidden ${
          props.textAlign === "right"
            ? "xl:left-10 left-0"
            : "xl:-right-20 left-0 lg:left-20"
        }`}
      >
        <div
          className="h-full bg-gradient-to-r from-[#3BE29A] to-teal-400 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${line}%` }}
        />
      </div>
    </div>
  );
};

export default SlideCards;
