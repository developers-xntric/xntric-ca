"use client";

import React, { useState, useEffect } from "react";
import BlogCards from "../common/blog-cards";
import { blogs as blogData, Blog } from "@/app/(screens)/blog/data";

function FeaturedBlogs({ isHome = false }: { isHome?: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(2);

  // Filter blogs by xntric category
  const blogs = blogData.filter(
    (blog: Blog) => blog.blogCategory.toLowerCase() === "xntric"
  );

  // Handle responsive slides
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleResize = () => {
      setSlidesToShow(window.innerWidth < 768 ? 1 : 2);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(blogs.length / slidesToShow);
  const maxIndex = totalSlides - 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  // ✅ Autoplay only for mobile (slidesToShow === 1)
  useEffect(() => {
    if (slidesToShow === 1 && blogs.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      }, 2500); // change slide every 4s
      return () => clearInterval(interval);
    }
  }, [slidesToShow, blogs.length, maxIndex]);

  return (
    <section
      className={`min-h-[600px] xl:min-h-[600px] 2xl:min-h-[850px] ${
        isHome ? "pb-20" : "pb-16 md:py-16"
      }`}
    >
      <div className="2xl:max-w-[1740px] w-[95%] md:w-[90%] mx-auto space-y-10 md:space-y-16 h-full">
        {/* Header + Navigation Row */}
        <div className="flex items-center justify-center md:justify-between">
          <h2 className="uppercase text-[34px] md:text-[40px] text-center md:text-start max-w-[80%] md:max-w-full lg:text-[50px] xl:text-[55px] text-white font-semibold font-['Futuru'] leading-[34px] md:leading-[50px]">
            What&#39;s <span className="text-[#00AA71]">new</span> in our blogs
          </h2>
          <div className="md:flex hidden gap-4">
            {" "}
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="text-white hover:text-[#00AA71] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              aria-label="Previous slide"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
              >
                {" "}
                <circle
                  opacity="0.1"
                  cx="27.5"
                  cy="27.5"
                  r="27.5"
                  transform="matrix(-1 0 0 1 55.5706 0.754395)"
                  fill="white"
                />{" "}
                <path
                  d="M31.2134 34.5402L24.9277 28.2545L31.2134 21.9688"
                  stroke="white"
                  strokeWidth="2.09524"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{" "}
              </svg>{" "}
            </button>{" "}
            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="text-white hover:text-[#00AA71] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              aria-label="Next slide"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
              >
                {" "}
                <circle
                  opacity="0.1"
                  cx="27.9272"
                  cy="28.2544"
                  r="27.5"
                  fill="white"
                />{" "}
                <path
                  d="M24.7844 34.5402L31.0701 28.2545L24.7844 21.9688"
                  stroke="white"
                  strokeWidth="2.09524"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{" "}
              </svg>{" "}
            </button>{" "}
          </div>
        </div>

        {/* Carousel / Empty state */}
        {blogs.length > 0 ? (
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / slidesToShow)
                }%)`,
              }}
            >
              {Array.from({ length: totalSlides }, (_, slideIndex) => (
                <div
                  key={slideIndex}
                  className={`flex-shrink-0 w-full flex ${
                    slidesToShow === 2 ? "" : ""
                  }`}
                >
                  {blogs
                    .slice(
                      slideIndex * slidesToShow,
                      (slideIndex + 1) * slidesToShow
                    )
                    .map((blog) => {
                      const imageSchema = {
                        "@context": "https://schema.org",
                        "@type": "ImageObject",
                        url: blog.bannerImageURL,
                        name: blog.title,
                        caption: blog.title,
                        contentUrl: blog.bannerImageURL,
                        thumbnailUrl: blog.bannerImageURL,
                        description:
                          blog.description ||
                          `Image about ${blog.title} from Xntric.`,
                        uploadDate:
                          blog.publishedDate || "2025-08-18T12:00:00+00:00",
                        author: {
                          "@type": "Organization",
                          name: "Xntric",
                        },
                      };

                      return (
                        <div
                          key={blog.slug}
                          className={`${
                            slidesToShow === 2 ? "w-1/2" : "w-full"
                          } px-3 relative hover:opacity-75 transition-opacity ease-in-out duration-500`}
                        >
                          <div className="border border-white/40 h-[400px] md:h-fit xl:h-[500px] 2xl:h-[600px]">
                            <BlogCards
                              title={blog.category}
                              id={blog.slug}
                              desc={blog.title}
                              date={blog.publishedDate?.slice(0, 10)}
                              min={blog.readTime}
                              image={blog.bannerImageURL}
                            />
                          </div>
                          <script
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{
                              __html: JSON.stringify(imageSchema),
                            }}
                          />
                        </div>
                      );
                    })}
                  {slidesToShow === 2 &&
                    blogs.slice(
                      slideIndex * slidesToShow,
                      (slideIndex + 1) * slidesToShow
                    ).length === 1 && <div className="w-1/2 px-3"></div>}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-red-500 text-xl py-20 text-center">
            No Featured Blogs Found
          </p>
        )}

        {/* Mobile Navigation Dots */}
        {blogs.length > 0 && (
          <div className="flex justify-center gap-2 mt-8 md:hidden">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentIndex === index ? "bg-[#00AA71]" : "bg-white/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default FeaturedBlogs;
