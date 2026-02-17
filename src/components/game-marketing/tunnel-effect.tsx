"use client";

import { useEffect, useRef, useState } from "react";
import NewGreen from "../service-inner/new-green";

interface MediaItem {
  type: "image" | "video";
  src: string;
  alt?: string;
  poster?: string;
}

interface ResponsiveDimension {
  mobile: string;
  md: string;
}

interface Position {
  y?: number;
  scale?: number;
  width?: ResponsiveDimension;
  height?: ResponsiveDimension;
}

interface Slide {
  id: number;
  leftMedia: MediaItem;
  rightMedia: MediaItem;
  leftPosition?: Position;
  rightPosition?: Position;
  slidePosition: {
    z: number;
    width: ResponsiveDimension;
    height: ResponsiveDimension;
  };
}

interface MobileSlide {
  id: number;
  media: MediaItem;
  position: Position;
  slidePosition: {
    z: number;
    width: ResponsiveDimension;
    height: ResponsiveDimension;
  };
}

const slides: Slide[] = [
  {
    id: 4,
    leftMedia: { type: "video", src: "/game/tunnelSectionVideos/Media2.webm" },
    rightMedia: { type: "video", src: "/game/tunnelSectionVideos/Media6.webm" },
    leftPosition: {
      y: 30,
      scale: 1.2,
      width: { mobile: "90%", md: "30%" },
      height: { mobile: "70%", md: "110%" },
    },
    rightPosition: {
      y: -30,
      scale: 0.8,
      width: { mobile: "90%", md: "50%" },
      height: { mobile: "70%", md: "110%" },
    },
    slidePosition: {
      z: -1500,
      width: { mobile: "100%", md: "100vw" },
      height: { mobile: "80vh", md: "60vh" },
    },
  },
  {
    id: 5,
    leftMedia: { type: "video", src: "/game/tunnelSectionVideos/Media3.webm" },
    rightMedia: { type: "video", src: "/game/tunnelSectionVideos/Media4.webm" },
    leftPosition: {
      y: -20,
      scale: 1.1,
      width: { mobile: "90%", md: "32%" },
      height: { mobile: "70%", md: "110%" },
    },
    rightPosition: {
      y: 20,
      scale: 0.9,
      width: { mobile: "90%", md: "50%" },
      height: { mobile: "70%", md: "95%" },
    },
    slidePosition: {
      z: -3000,
      width: { mobile: "100%", md: "90vw" },
      height: { mobile: "80vh", md: "60vh" },
    },
  },
  {
    id: 6,
    leftMedia: { type: "video", src: "/game/tunnelSectionVideos/Media1.webm" },
    rightMedia: { type: "video", src: "/game/tunnelSectionVideos/Media5.webm" },
    leftPosition: {
      y: 30,
      scale: 1.2,
      width: { mobile: "90%", md: "33%" },
      height: { mobile: "70%", md: "88%" },
    },
    rightPosition: {
      y: -30,
      scale: 0.8,
      width: { mobile: "90%", md: "55%" },
      height: { mobile: "70%", md: "88%" },
    },
    slidePosition: {
      z: -4500,
      width: { mobile: "100%", md: "90vw" },
      height: { mobile: "80vh", md: "70vh" },
    },
  },
];

function MediaComponent({
  media,
  className,
}: {
  media: MediaItem;
  className?: string;
}) {
  if (media.type === "video") {
    const mp4Src = media.src.replace(".webm", ".mp4");
    return (
      <video
        className={`w-full h-full object-cover rounded-lg ${className}`}
        autoPlay
        muted
        loop
        playsInline
        poster={media.poster}
      >
        <source src={media.src} type="video/webm" />
        <source src={mp4Src} type="video/mp4" />
      </video>
    );
  }
  return null;
}

function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<"mobile" | "md">("md");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setBreakpoint(window.innerWidth < 765 ? "mobile" : "md");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
}

export default function TunnelEffect() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const breakpoint = useBreakpoint();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [totalScrollDistance, setTotalScrollDistance] = useState(0);

  // Create mobile slides with adjusted z spacing
  // Create mobile slides with adjusted z spacing
// Create mobile slides with adjusted z spacing
const mobileSlides: MobileSlide[] = slides.flatMap((slide, index) => [
  {
    id: slide.id * 2 - 1,
    media: slide.leftMedia,
    position: {
      ...slide.leftPosition,
      scale: 1, // force normal size on mobile
    },
    slidePosition: {
      z: -800 * (index * 2), // ensure unique spacing
      width: { mobile: "80%", md: "100%" }, // smaller so not oversized
      height: { mobile: "55%", md: "100%" },
    },
  },
  {
    id: slide.id * 2,
    media: slide.rightMedia,
    position: {
      ...slide.rightPosition,
      scale: 1, // force normal size
    },
    slidePosition: {
      z: -800 * (index * 2 + 1), // stagger between left/right
      width: { mobile: "80%", md: "100%" },
      height: { mobile: "55%", md: "100%" },
    },
  },
]);


  const lastSlideZ = Math.abs(
    breakpoint === "mobile"
      ? mobileSlides[mobileSlides.length - 1].slidePosition.z
      : slides[slides.length - 1].slidePosition.z
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTotalScrollDistance(lastSlideZ + window.innerHeight * 3); // Increased scroll distance
    }
  }, [lastSlideZ]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || totalScrollDistance === 0) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollStart = -rect.top;
      const scrollEnd = totalScrollDistance - window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrollStart / scrollEnd));

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    const resizeObserver = new ResizeObserver(() => handleScroll());
    resizeObserver.observe(document.body);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      resizeObserver.disconnect();
    };
  }, [totalScrollDistance]);

  useEffect(() => {
    if (!containerRef.current || totalScrollDistance === 0) return;

    const slideElements =
      containerRef.current.querySelectorAll(".tunnel-slide");

    slideElements.forEach((slide, index) => {
      const element = slide as HTMLElement;
      const slideData =
        breakpoint === "mobile" ? mobileSlides[index] : slides[index];

      const scrollOffset = scrollProgress * lastSlideZ;
      const currentZ = slideData.slidePosition.z + scrollOffset;

      const zIndex = Math.floor(currentZ / 100) + 1000;

      element.style.zIndex = zIndex.toString();
      element.style.transform = `
        translateX(-50%) translateY(-50%)
        translateZ(${currentZ}px)
      `;
    });
  }, [scrollProgress, totalScrollDistance, breakpoint]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black font-futuru"
      style={{
        height: totalScrollDistance ? `${totalScrollDistance}px` : "100vh",
      }}
    >
      <div className="border-b border-[#A1A1A1] border-t border-dashed w-[90%] mx-auto mb-10 md:mb-14"></div>
      <NewGreen
        bg={false}
        isPopupOpen={true}
        text='Ready to Engage Millions? Start Your <span style="color: #00AA71">Custom Game Campaign</span> Today!'
        buttonText="BOOK A FREE CONSULTATION"
      />

      <div
        ref={containerRef}
        className="sticky top-0 h-screen w-full overflow-hidden pt-20"
        style={{
          perspective: breakpoint === "mobile" ? "1000px" : "1200px", // Adjusted perspective
          perspectiveOrigin: "50% 50%",
          zIndex: 10,
        }}
      >
        <div>
          <div className="absolute top-0 md:-top-6 left-0 w-screen md:h-36 z-20 pointer-events-none blur-[20px] bg-black" />
          <div className="absolute -bottom-10 left-0 w-full h-16 z-20 pointer-events-none blur-[20px] bg-black" />

          <video
            src="/game/tunnel-bg.webm"
            autoPlay
            loop
            muted
            preload="auto"
            className="w-screen h-screen object-cover top-0 left-0 z-0"
          >
            <source src="/game/tunnel-bg.webm" type="video/webm" />
            <source src="/game/tunnel-bg.mp4" type="video/mp4" />
          </video>
        </div>

        {(breakpoint === "mobile" ? mobileSlides : slides).map(
          (slide) => (
            <div
              key={slide.id}
              className="tunnel-slide absolute left-[55%] md:left-1/2 top-[55%] md:top-1/2"
              style={{
                transformStyle: "preserve-3d",
                width: slide.slidePosition.width[breakpoint],
                height: slide.slidePosition.height[breakpoint],
                zIndex: 20,
              }}
            >
              {breakpoint === "mobile" ? (
                <div
                  className="flex flex-col items-center h-full py-6"
                  style={{
                    width:
                      (slide as MobileSlide).position.width?.[breakpoint] ||
                      "90%",
                    height:
                      (slide as MobileSlide).position.height?.[breakpoint] ||
                      "70%",
                    transform: `translateY(${
                      (slide as MobileSlide).position.y || 0
                    }px) scale(${(slide as MobileSlide).position.scale || 1})`,
                    transformOrigin: "center",
                  }}
                >
                  <MediaComponent media={(slide as MobileSlide).media} />
                </div>
              ) : (
                <div className="flex flex-row mx-auto items-center justify-between gap-10 h-full md:px-8 py-6">
                  <div
                    style={{
                      width:
                        (slide as Slide).leftPosition?.width?.[breakpoint] ||
                        "30%",
                      height:
                        (slide as Slide).leftPosition?.height?.[breakpoint] ||
                        "100%",
                      transform: `translateY(${
                        (slide as Slide).leftPosition?.y || 0
                      }px) scale(${(slide as Slide).leftPosition?.scale || 1})`,
                      transformOrigin: "center",
                    }}
                  >
                    <MediaComponent media={(slide as Slide).leftMedia} />
                  </div>
                  <div
                    style={{
                      width:
                        (slide as Slide).rightPosition?.width?.[breakpoint] ||
                        "40%",
                      height:
                        (slide as Slide).rightPosition?.height?.[breakpoint] ||
                        "100%",
                      transform: `translateY(${
                        (slide as Slide).rightPosition?.y || 0
                      }px) scale(${
                        (slide as Slide).rightPosition?.scale || 1
                      })`,
                      transformOrigin: "center",
                    }}
                  >
                    <MediaComponent media={(slide as Slide).rightMedia} />
                  </div>
                </div>
              )}
            </div>
          )
        )}
      </div>
    </section>
  );
}
