"use client";
import { useState, useRef } from "react";
import type React from "react";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQProps {
  faqData: FAQItem[];
}

export const FAQ: React.FC<FAQProps> = ({ faqData }) => {
  const [open, setOpen] = useState<number | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [buttonClicked, setButtonClicked] = useState(false);

  const toggleAccordion = (id: number) => {
    setButtonClicked(!buttonClicked);
    setOpen(open === id ? null : id);
  };

  const halfLength = Math.ceil(faqData.length / 2);
  const firstGrid = faqData.slice(0, halfLength);
  const secondGrid = faqData.slice(halfLength);

  return (
    <div className="md:grid grid-cols-1 mt-10 gap-4 space-y-4 md:space-y-0 relative z-20">
      {/* First Grid */}
      <div className="flex flex-col gap-4 w-full md:w-[100%]">
        {firstGrid.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className="relative overflow-hidden md:p-5 p-3 border-b border-[#3C3C3C] text-white text-xl font-medium font-futuru leading-relaxed"
          >
            {/* {renderSpotlightBorder(index)} */}
            <h2>
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                className="flex items-center justify-between w-full font-medium gap-3  text-white"
                aria-expanded={open === index ? "true" : "false"}
                aria-controls={`accordion-open-body-${index}`}
              >
                <span
                  className={`text-white text-left font-light tracking-wider font-futuru text-[14px] sm:text-[24px] leading-[20px] md:leading-[30px] 2xl:text-[26px] w-56 sm:w-fit`}
                >
                  {item.question}
                </span>
                <svg
                  className={`w-7 h-7 transition-transform rounded-[4px] p-1 ${
                    open === index
                      ? "rotate-180 bg-primaryNeon bg-gray-200 text-black"
                      : "bg-gray-200"
                  }`}
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke={open === index ? "black" : "#000"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={open === index ? "M6 12h12" : "M12 5v14M5 12h14"}
                  />
                </svg>
              </button>
            </h2>
            <div
              id={`accordion-open-body-${index}`}
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                open === index ? "max-h-96" : "max-h-0"
              }`}
              aria-labelledby={`accordion-open-heading-${index}`}
            >
              <div className="pt-7 font-futuru">
                <p className="text-white opacity-[0.7] tracking-widest font-futuru font-light text-[11.5px] sm:text-[16px] 2xl:text-[20px]">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Second Grid */}
      <div className="flex flex-col gap-4 w-full md:w-[100%]">
        {secondGrid.map((item, index) => {
          const newIndex = index + halfLength;
          return (
            <div
              key={newIndex}
              ref={(el) => {
                cardRefs.current[newIndex] = el;
              }}
              // onMouseMove={(e) => handleMouseMove(e, newIndex)}
              // onMouseEnter={() => handleMouseEnter(newIndex)}
              // onMouseLeave={handleMouseLeave}
              className="relative overflow-hidden md:p-5 p-3 text-white border-b border-[#3C3C3C] text-xl font-medium font-futuru leading-relaxed"
            >
              {/* {renderSpotlightBorder(newIndex)} */}
              <h2>
                <button
                  type="button"
                  onClick={() => toggleAccordion(newIndex)}
                  className="flex items-center justify-between w-full font-medium gap-3 text-white"
                  aria-expanded={open === newIndex ? "true" : "false"}
                  aria-controls={`accordion-open-body-${newIndex}`}
                >
                  <span
                    className={`text-white font-light tracking-wider text-left font-futuru text-[14px] leading-[20px] md:leading-[30px]  sm:text-[24px] 2xl:text-[26px] w-56 sm:w-fit `}
                  >
                    {item.question}
                  </span>
                  <svg
                    className={`w-7 h-7 transition-transform rounded-[4px] p-1 ${
                      open === index
                        ? "rotate-180 bg-primaryNeon bg-gray-200 text-black"
                        : "bg-gray-200"
                    }`}
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke={open === index ? "black" : "#000"}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={open === newIndex ? "M6 12h12" : "M12 5v14M5 12h14"}
                    />
                  </svg>
                </button>
              </h2>
              <div
                id={`accordion-open-body-${newIndex}`}
                className={`overflow-hidden transition-all duration-700  ${
                  open === newIndex ? "max-h-96" : "max-h-0"
                }`}
                aria-labelledby={`accordion-open-heading-${newIndex}`}
              >
                <div className="pt-7 font-futuru">
                  <p className="text-white opacity-[0.7] tracking-widest font-futuru font-light text-[11.5px] sm:text-[16px] 2xl:text-[20px]">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
