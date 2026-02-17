"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface CardSet {
  id: number;
  cards: {
    strategy: {
      title: string;
      description: string;
    };
    media: {
      type: "video" | "image";
      src: string;
    };
    results: {
      title: string;
      description: string;
      imageSrc: string;
    };
  };
}

// Sample data for multiple card sets
const cardSets: CardSet[] = [
  {
    id: 1,
    cards: {
      strategy: {
        title: "Strategy That Drives Impact",
        description:
          "By leveraging data, audience psychology, and market dynamics, we create smart growth strategies and pull off deliberate, structured campaigns with measurable success at each turn",
      },
      media: {
        type: "video",
        src: "/HomePage/video1.webm",
      },
      results: {
        title: "Results That Speak",
        description:
          "We build performance, we don't promise it. Your scalability, your optimization, your brand equity, all driven by us.",

        imageSrc: "/HomePage/image1.png",
      },
    },
  },
  {
    id: 2,
    cards: {
      strategy: {
        title: "Strategy That Drives Impact",
        description:
          "We dive deep into data, audience insights, and market trends to shape smart digital strategies. Every move is purposeful built to drive growth and measurable results.",
      },
      media: {
        type: "video",
        src: "/HomePage/video2.mp4",
      },
      results: {
        title: "Creative Solutions ",
        description:
          "See how our design forward approach has transformed brands and created memorable digital experiences that resonate with target audiences.",

        imageSrc: "/HomePage/image2.png",
      },
    },
  },
  {
    id: 3,
    cards: {
      strategy: {
        title: "Strategy That Drives Impact",
        description:
          "We dive deep into data, audience insights, and market trends to shape smart digital strategies. Every move is purposeful built to drive growth and measurable results.",
      },
      media: {
        type: "video",
        src: "/HomePage/video3.mp4",
      },
      results: {
        title: "Technical Excellence ",
        description:
          "Discover how our technical expertise has helped businesses overcome challenges and achieve their digital transformation goals.",
        imageSrc: "/HomePage/image5.png",
      },
    },
  },
  {
    id: 4,
    cards: {
      strategy: {
        title: "Strategy That Drives Impact",
        description:
          "We dive deep into data, audience insights, and market trends to shape smart digital strategies. Every move is purposeful built to drive growth and measurable results.",
      },
      media: {
        type: "video",
        src: "/HomePage/video4.webm",
      },
      results: {
        title: "Growth Stories ",
        description:
          "Explore how our marketing campaigns have helped businesses grow their audience, increase engagement, and drive measurable results.",
        imageSrc: "/HomePage/image4.png",
      },
    },
  },
];

export default function SolutionCarousel({ isPadding = false, para }: { isPadding?: boolean; para?: string }) {
  const [currentSet, setCurrentSet] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [videosLoaded, setVideosLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([null, null, null]);
  const slideDirection = useRef<"left" | "right">("right");
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);
  const accordionContentRef = useRef<HTMLDivElement>(null);
  const videoRefsMap = useRef<Map<string, HTMLVideoElement>>(new Map());

  // Function to calculate responsive positions using percentages
  const calculatePositions = () => {
    return [
      "-150%", // Card 1: Move left by 150% of container width
      "-40%", // Card 2: Stay centered
      "60%", // Card 3: Move right by 60% of container width
    ];
  };

  // Preload all videos
  const preloadVideos = async () => {
    const videoPromises = cardSets
      .filter((set) => set.cards.media.type === "video")
      .map((set) => {
        return new Promise<void>((resolve) => {
          const video = document.createElement("video");
          video.src = set.cards.media.src;
          video.addEventListener(
            "loadeddata",
            () => {
              videoRefsMap.current.set(set.cards.media.src, video);
              resolve();
            },
            { once: true }
          );
          video.addEventListener(
            "error",
            () => {
              console.warn(`Failed to preload video: ${set.cards.media.src}`);
              resolve(); // Still resolve to not block other videos
            },
            { once: true }
          );
          video.load();
        });
      });

    await Promise.all(videoPromises);
    setVideosLoaded(true);
  };

  // Accordion toggle function
  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  // Initialize animation when component mounts
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Preload videos first
    preloadVideos();
  }, []);

  // Trigger animation when videos are loaded
  useEffect(() => {
    if (!videosLoaded) return;

    if (typeof window === "undefined") return;
    const container = containerRef.current;
    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];

    if (!container || cards.length === 0) return;

    // Set initial positions for each card
    cards.forEach((card) => {
      gsap.set(card, {
        xPercent: -50, // Centers horizontally relative to left-1/2
      });
    });

    // Create animation timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 60%",
        toggleActions: "play none none none",
        once: true,
      },
      onComplete: () => {
        setIsInitialLoad(false);
      },
    });

    // Get responsive positions
    const positions = calculatePositions();

    tl.to(cards, {
      x: (index: number) => positions[index], // Use percentage-based positions
      y: 0,
      duration: 2.5,
      ease: "power3.out",
      stagger: 0.3,
    });

    // Refresh ScrollTrigger on window resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      window.removeEventListener("resize", handleResize);
    };
  }, [videosLoaded]);

  // Auto-slide functionality
  useEffect(() => {
    if (isInitialLoad) return;

    const autoSlideTimer = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        slideDirection.current = "right";

        const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
        const positions = calculatePositions();

        // Simple slide effect - slide current cards out to the left
        gsap.to(cards, {
          x: (index) => {
            const currentPos = positions[index];
            return `calc(${currentPos} - 100%)`;
          },
          duration: 1.2,
          ease: "power2.inOut",
          onComplete: () => {
            // Update to next set
            setCurrentSet((prev) => (prev + 1) % cardSets.length);
          },
        });
      }
    }, 5000); // Change slides every 5 seconds

    return () => clearInterval(autoSlideTimer);
  }, [isAnimating, isInitialLoad]);

  // Update content when currentSet changes
  useEffect(() => {
    if (isInitialLoad) return;

    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    const positions = calculatePositions();

    // Position new cards off-screen to the right
    gsap.set(cards, {
      x: (index) => {
        const currentPos = positions[index];
        return `calc(${currentPos} + 100%)`;
      },
    });

    // Slide new cards in from the right
    gsap.to(cards, {
      x: (index) => positions[index],
      duration: 1.2,
      ease: "power2.inOut",
      onComplete: () => setIsAnimating(false),
    });
  }, [currentSet, isInitialLoad]);

  // Sync mobile carousel index with currentSet
  useEffect(() => {
    setCurrentCarouselIndex(currentSet);
  }, [currentSet]);

  const currentCardSet = cardSets[currentSet];

  return (
    <section
      className={`bg-black text-white ${isPadding && "py-6"
        } 2xl:pt-2 max-w-[90%] mx-auto font-futuru`}
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h3 className="text-[34px] leading-[35px] md:text-[60px] font-semibold mt-3 md:leading-[65px] md:max-w-[550px] mx-auto tracking-wide">
          OUR SOLUTION THE <span className="text-[#00AA71]">XNTRIC</span>{" "}
          APPROACH
        </h3>
        <p className="md:mt-10 mt-6 text-sm md:text-base 2xl:text-[20px] tracking-widest font-light text-white opacity-[0.9] max-w-2xl mx-auto leading-5">
          {para
            ? para
            : "We approach each project with a holistic mindset combining creative thinking, human centered design, and technical excellence"}
        </p>
        <Link href="/our-work">
          <button className="mt-8 tracking-wider font-['Futuru'] font-normal bg-[#00AA71] px-4 md:px-8 py-3 rounded-[8px] text-white hover:bg-[#00AA71]/70 transition text-[13px] hover:bg-white hover:text-black ">
            VIEW ALL CASE STUDIES
          </button>
        </Link>
      </div>

      {/* Mobile First Design - Show on small screens only */}
      <div className="block md:hidden">
        {/* Strategy Section */}
        <div className="md:mb-6 mb-4">
          <div className="relative h-[450px] rounded-[8px] overflow-hidden bg-cover bg-center flex items-end bg-gray-800">
            {!videosLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                <div className="text-white text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00AA71] mx-auto"></div>
                </div>
              </div>
            )}
            <video
              src={currentCardSet.cards.media.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full rounded-[8px] object-cover"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Accordion Section */}
        <div className="border border-gray-700 rounded-[8px] overflow-hidden">
          <button
            onClick={toggleAccordion}
            className="w-full p-4 bg-white flex items-center justify-between text-left transition-colors"
          >
            <div className="-space-y-2">
              <h3 className="text-[22px] md:text-[24px] font-['Futuru'] font-semibold leading-[29px] tracking-[-0.041px] text-black">
                RESULTS THAT
              </h3>
              <h3 className="text-[22px] md:text-[24px] font-['Futuru'] font-semibold leading-[29px] tracking-[-0.041px] text-black">
                SPEAK - CASE STUDIES
              </h3>
            </div>
            {isAccordionOpen ? null : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="32"
                viewBox="0 0 26 35"
                fill="none"
              >
                <path
                  d="M13.0043 34.5L1.05598 22.604C0.780334 22.3291 0.589055 21.9019 0.524184 21.4165C0.459313 20.931 0.526158 20.427 0.710029 20.0151C0.893897 19.6032 1.17975 19.3172 1.50476 19.2199C1.82977 19.1226 2.16735 19.222 2.44331 19.4963L11.7538 28.7643L11.7538 2.36751C11.7538 1.87221 11.8856 1.3972 12.1201 1.04698C12.3546 0.696753 12.6727 0.499999 13.0043 0.499999C13.336 0.499999 13.6541 0.696753 13.8886 1.04698C14.1231 1.3972 14.2548 1.87221 14.2548 2.36751L14.2548 28.7643L23.5653 19.4963C23.8413 19.2269 24.1773 19.1312 24.5003 19.23C24.8233 19.3287 25.1071 19.6139 25.29 20.0236C25.4728 20.4332 25.54 20.9341 25.4768 21.4173C25.4137 21.9005 25.2253 22.327 24.9527 22.6038L13.0043 34.5Z"
                  fill="#00AA71"
                />
              </svg>
            )}
          </button>

          {/* Accordion Content with Carousel */}
          <div
            ref={accordionContentRef}
            className={`overflow-hidden transition-all duration-300 ease-in-out ${isAccordionOpen ? " opacity-100" : "max-h-0 opacity-0"
              }`}
          >
            <div className="px-4 pb-2 bg-white ]">
              {/* Mobile Carousel */}
              <div className="relative">
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{
                    transform: `translateX(-${currentCarouselIndex * 100}%)`,
                  }}
                >
                  {cardSets.map((set, index) => (
                    <div key={set.id} className="w-full flex-shrink-0 px-2">
                      <div className="bg-white rounded-[8px] p-3 text-black">
                        <div className="aspect-video mb-3 rounded-[8px] overflow-hidden h-[343.46px] md:h-96 w-full ">
                          <Image
                            src={set.cards.results.imageSrc}
                            alt={`Case Study ${index + 1}`}
                            width={300}
                            height={200}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Carousel Navigation */}
                <div className="flex justify-center md:mt-4 space-x-2">
                  {cardSets.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSet(index)}
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${index === currentSet
                        ? "bg-[#00AA71]"
                        : "bg-gray-600"
                        }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-[16px] font-['Futuru'] tracking-wider text-black my-4 leading-[18px] opacity-[0.7]">
                {cardSets[currentCarouselIndex].cards.results.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Design - Hidden on small screens, unchanged from original */}
      <div className="hidden md:block">
        {/* Cards Container */}
        <div
          ref={containerRef}
          className="relative mx-auto w-[90%] font-['Futuru'] 2xl:max-w-[1200px] h-[50vh] min-h-[400px] max-h-[480.618px] "
          style={{ perspective: "1000px" }}
        >
          {/* Card 1 - Strategy Card */}
          <div
            ref={(el) => {
              cardsRef.current[0] = el;
            }}
            className="absolute left-1/2 w-[28%] 2xl:w-[31.7%] h-[30vw] min-h-[300px] max-h-[480.618px] bg-white text-black p-4 sm:p-6 rounded-[8px] flex flex-col justify-between"
            style={{ zIndex: 1 }}
          >
            <h2 className="text-[1.2rem] sm:text-[1.5rem] md:text-[1.2rem] xl:text-[1.875rem] leading-6 xl:leading-8 w-[70%] font-semibold">
              {currentCardSet.cards.strategy.title}
            </h2>
            <p className="text-[0.75rem] sm:text-[0.875rem] lg:text-[1rem] leading-4 sm:leading-5 text-black opacity-[0.7]">
              {currentCardSet.cards.strategy.description}
            </p>
          </div>

          {/* Card 2 - Media Card */}
          <div
            ref={(el) => {
              cardsRef.current[1] = el;
            }}
            className="absolute left-1/2 w-[28%] 2xl:w-[31.7%] h-[30vw] min-h-[300px] max-h-[480.618px] rounded-[8px] overflow-hidden bg-gray-800 flex items-center justify-center"
            style={{ zIndex: 2 }}
          >
            {!videosLoaded && (
              <div className="text-white text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00AA71]"></div>
              </div>
            )}
            {currentCardSet.cards.media.type === "video" ? (
              <video
                src={currentCardSet.cards.media.src}
                autoPlay
                loop
                muted
                className="w-full h-full rounded-[8px] object-cover"
              />
            ) : (
              <Image
                src={currentCardSet.cards.media.src || "/placeholder.svg"}
                alt="Media content"
                width={720}
                height={480}
                className="w-full h-full rounded-[8px] object-cover"
              />
            )}
          </div>

          {/* Card 3 - Results Card */}
          <div
            ref={(el) => {
              cardsRef.current[2] = el;
            }}
            className="absolute left-1/2 w-[47%] sm:w-[50%] 2xl:w-[60%] h-[30vw] min-h-[300px] max-h-[480.618px] rounded-[8px] overflow-hidden flex justify-between bg-white p-8"
            style={{ zIndex: 3 }}
          >
            <div className="w-[40%] h-full flex flex-col justify-between">
              <h2 className="text-[1.2rem] sm:text-[1.5rem] md:text-[1.2rem] xl:text-[1.875rem] leading-6 xl:leading-8 text-black font-semibold">
                {currentCardSet.cards.results.title}
              </h2>
              <p className="text-[0.75rem] text-black opacity-[0.7] sm:text-[0.875rem] lg:text-[1rem] leading-4">
                {currentCardSet.cards.results.description}
              </p>
            </div>
            <div className="w-[55%] h-full">
              <Image
                src={
                  currentCardSet.cards.results.imageSrc || "/placeholder.svg"
                }
                alt="Case Study Preview"
                width={720}
                height={480}
                className="w-full h-full object-cover rounded-[8px]"
              />
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-16 2xl:mt-20 3xl:mt-12">
          {cardSets.map((set, index) => (
            <div
              onClick={() => {
                setCurrentSet(index);
              }}
              key={set.id}
              className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${index === currentSet ? "bg-[#00AA71]" : "bg-gray-600"
                }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}