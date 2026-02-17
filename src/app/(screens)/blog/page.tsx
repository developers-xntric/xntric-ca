/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import BlogHeader from "@/components/blog/blog-header";
import Pagination from "./pagination";
// import { buttonTexts } from "../../../data/blogs-hero-buttons";
import dynamicImport from "next/dynamic";
// import AnimatedButtons from "@/components/ui/AnimatedButton";
import Head from "next/head";
import BlogListingCards from "@/components/common/blog-listing-card";
import { blogs } from "./data";

const ContactForm = dynamicImport(
  () => import("@/components/common/contact-form"),
  { ssr: false }
);
const BigIdeas = dynamicImport(() => import("@/components/common/big-ideas"), {
  ssr: false,
});

const BLOGS_PER_PAGE = 6;

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);

  const xntricBlogs = blogs.filter(
    (blog) => blog.blogCategory.toLowerCase() === "xntric"
  );
  const totalPages = Math.ceil(xntricBlogs.length / BLOGS_PER_PAGE);
  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
  const endIndex = startIndex + BLOGS_PER_PAGE;
  const currentBlogs = xntricBlogs.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-screen overflow-x-hidden flex justify-center items-center flex-col">
      {/* SEO Head */}
      <Head>
        <title>Blogs | Xntric</title>
        <meta
          name="description"
          content="Explore the latest insights, ideas, and updates from Xntric on AI, design, technology, and innovation."
        />
        <link rel="canonical" href="https://xntric.me/blog" />
      </Head>

      {/* Blog Hero Header */}
      <div className="w-screen p-4 rounded-[10px] mb-16 md:mb-2">
        <BlogHeader
          title="WHAT'S NEW IN OUR BLOGS"
          description="We approach each project with a holistic mindset combining creative thinking, human-centered design, and technical excellence."
          videoSrc="/Blog/hero-video.webm"
        />
      </div>

      {/* Category Buttons (Static) */}, 
      {/* {currentBlogs.filter(
        (blog) => blog.blogCategory.toLowerCase() == "xntric"
      ).length > 0 && (
        <div className="max-w-[95%] md:max-w-[90%] flex flex-wrap gap-6 justify-center mt-10 md:mb-0 mb-12">
          <div className=" md:w-[90%] lg:w-[95%] xl:w-[70%] 2xl:w-[60%] flex gap-3 md:gap-6 justify-center flex-wrap">
            {buttonTexts!.map((item, index) => (
              <AnimatedButtons
                key={index}
                buttonTitle={item}
                variant={`blackWhite`}
                className="tracking-widest"
              />
            ))}
          </div>
        </div>
      )} */}

      {currentBlogs.length > 0 ? (
        <div className="w-[90%] lg:w-[90%] sm:pt-14 md:pt-10 lg:pt-24 xl:pt-0 grid grid-cols-1 lg:grid-cols-2 gap-y-4 gap-x-4 2xl:gap-x-4 xl:mt-16 mb-20">
          {currentBlogs.map((blog, index) => {
              // Schema for each blog image
              const imageSchema = {
                "@context": "https://schema.org",
                "@type": "ImageObject",
                url: blog.bannerImageURL,
                name: blog.title,
                caption: blog.title,
                contentUrl: blog.bannerImageURL,
                thumbnailUrl: blog.bannerImageURL,
                description:
                  blog.description || `Image about ${blog.title} from Xntric.`,
                uploadDate: blog.publishedDate || "2025-08-18T12:00:00+00:00",
                author: {
                  "@type": "Organization",
                  name: "Xntric",
                },
              };

              return (
                <div
                  key={index}
                  className=" hover:opacity-75 transition-opacity ease-in duration-500"
                >
                  <BlogListingCards
                    title={blog.title}
                    desc={blog.description}
                    date={blog.publishedDate?.slice(0, 10)}
                    min={blog.readTime}
                    image={blog.bannerImageURL}
                    id={blog.slug}
                    blog={blog}
                    border={true}
                    isBlog={true}
                  />
                  {/* JSON-LD schema */}
                  <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                      __html: JSON.stringify(imageSchema),
                    }}
                  />
                </div>
              );
            })}
        </div>
      ) : (
        <p className="text-red-500 text-xl py-20 text-center">No Blogs Found</p>
      )}

      {/* Pagination */}
      {totalPages > 1 && currentBlogs.length > 0 && (
          <div className="flex gap-4 xl:mb-32">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              showPrevNext={false}
              maxVisiblePages={5}
            />
          </div>
        )}

      {/* Footer Sections */}
      <BigIdeas isBlogPage={true} />
      <ContactForm />
    </div>
  );
}
