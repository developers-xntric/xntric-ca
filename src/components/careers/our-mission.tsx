"use client";
import React, { useState } from "react";
import AnimatedButtons from "../ui/AnimatedButton";
import Image from "next/image";

const jobPostings = [
  {
    title: "Product designer",
    date: "November 1, 2024",
    description:
      "We are looking for a mid-level designer to create engaging user experiences and innovative interfaces.",
    type: "Full Time",
    location: "Karachi , Pakistan",
    category: "Design",
  },
  {
    title: "Product designer",
    date: "November 1, 2024",
    description:
      "We are looking for a mid-level designer to create engaging user experiences and innovative interfaces.",
    type: "Full Time",
    location: "Karachi , Pakistan",
    category: "Design",
  },
  {
    title: "Product designer",
    date: "November 1, 2024",
    description:
      "We are looking for a mid-level designer to create engaging user experiences and innovative interfaces.",
    type: "Full Time",
    location: "Karachi , Pakistan",
    category: "Design",
  },
  {
    title: "Product designer",
    date: "November 1, 2024",
    description:
      "We are looking for a mid-level designer to create engaging user experiences and innovative interfaces.",
    type: "Full Time",
    location: "Karachi , Pakistan",
    category: "Design",
  },
  {
    title: "iOS developer",
    date: "November 1, 2024",
    description:
      "We are looking for a senior-level iOS Developer to create engaging user experiences and innovative interfaces.",
    type: "Full Time",
    location: "Karachi , Pakistan",
    category: "Development",
  },
  {
    title: "SEO Specialist",
    date: "November 1, 2024",
    description:
      "We're seeking an SEO expert to improve our organic visibility and search engine rankings.",
    type: "Full Time",
    location: "Karachi , Pakistan",
    category: "SEO",
  },
  {
    title: "HR Manager",
    date: "November 1, 2024",
    description:
      "Seeking an experienced HR Manager to lead our human resource operations.",
    type: "Full Time",
    location: "Karachi , Pakistan",
    category: "Human Resource",
  },
];

const OurMission = () => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>("Design");

  const filteredJobs = selectedFilter
    ? jobPostings.filter((job) => job.category === selectedFilter)
    : jobPostings;

  const categories = ["Design", "Development", "SEO", "Human Resource"];

  return (
    <section className="pb-10 md:pb-10 xl:mb-0 pt-16 md:pt-2 lg:pt-6 xl:pt-10 px-4 sm:px-0 relative rounded-[40px] font-futuru">
      <div className="max-w-[1740px] mx-auto">
        <div className="sm:max-w-[90%] 2xl:max-w-[95%] mx-auto">
          <div className="flex items-start flex-col gap-10 md:gap-20 text-white font-futuru">
            {/* Heading */}
            <div className="flex flex-col text-center md:text-left gap-8 w-full">
              <h2 className="font-futuru leading-8 md:leading-relaxed font-semibold uppercase text-[30px] md:text-5xl">
                Join us on <span className="text-[#00AA71]">our</span> mission
              </h2>
              <p className="text-base font-futuru font-thin tracking-widest text-white opacity-[0.7] sm:text-[20px] sm:max-w-[60%]">
                Our work is fueled by collaboration and innovation, transforming
                ideas into powerful, impactful solutions.
              </p>
            </div>

            {/* Category Tabs */}
            <div className="w-full overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 md:pb-0">
              <div className="flex gap-3 sm:gap-4 w-max">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      setSelectedFilter((prev) =>
                        prev === category ? null : category
                      )
                    }
                    className={`border text-sm md:text-base px-4 py-2 md:py-3 rounded-3xl font-futuru font-medium tracking-wide whitespace-nowrap ${
                      selectedFilter === category
                        ? "bg-white text-black border-white"
                        : "bg-black text-white hover:bg-white hover:text-black"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Job Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-7 text-white">
              {/* LEFT video */}
              <div className="absolute 2xl:-bottom-24 xl:-bottom-28 -bottom-24 sm:-bottom-20 xl:left-1 -left-24 sm:-left-4 -z-30">
                <video
                  src="/Carerrs/careers1.webm"
                  loop
                  autoPlay
                  muted
                  width={30}
                  height={600}
                  className="w-80 xl:w-[50%] bg-transparent"
                />
              </div>

              {/* RIGHT video */}
              <div className="absolute xl:bottom-[50%] bottom-[65%] lg:bottom-[50%] xl:-right-[600px] -right-32 sm:-right-[150px] -z-30">
                <video
                  src="/Careers/careers.webm"
                  loop
                  autoPlay
                  muted
                  width={500}
                  height={600}
                  className="w-80 xl:w-[50%]"
                />
              </div>

              {filteredJobs.map((job, index) => (
                <div
                  key={index}
                  className="p-4 md:p-8 bg-[#1E1E1E] flex flex-col gap-6 text-start backdrop-blur-xl xl:h-60 bg-white/10 rounded-[8px] outline outline-[0.80px] outline-offset-[-0.40px] outline-[#fffcfc]/25"
                >
                  <div className="flex md:flex-row flex-col justify-between md:items-center space-y-3 md:space-y-0">
                    <h4 className="text-xl sm:text-[32px] font-semibold tracking-wide font-futuru">
                      {job.title}
                    </h4>
                    <p className="opacity-70 text-sm md:text-base font-thin tracking-widest font-futuru">
                      {job.date}
                    </p>
                  </div>
                  <p className="text-[15px] sm:text-[19px] 2xl:text-[20px] xl:max-w-[90%] font-extralight tracking-wider font-futuru">
                    {job.description}
                  </p>
                  <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 sm:space-y-0">
                    <div className="flex md:justify-center justify-start items-center gap-6">
                      <p className="flex gap-2 items-center font-extralight tracking-wider font-futuru">
                        <Image
                          src="/Careers/clock-three.png"
                          alt="image"
                          width={20}
                          height={10}
                        />
                        {job.type}
                      </p>
                      <p className="flex gap-2 items-center font-extralight tracking-wider font-futuru">
                        <Image
                          src="/Careers/marker.png"
                          alt="image"
                          width={20}
                          height={10}
                        />
                        {job.location}
                      </p>
                    </div>
                    <AnimatedButtons
                      buttonTitle="Apply Now"
                      variant="neon"
                      className="w-[40%] md:w-[130.66px] md:h-[38.53px] flex items-center justify-center"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
