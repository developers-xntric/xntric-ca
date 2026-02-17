/* eslint-disable @typescript-eslint/no-explicit-any */
import FirstSection from "../../../../components/blog/detail-firstsection";
import BlogHeader from "@/components/blog/dynamic-blog-header";
import Image from "next/image";
import React from "react";
import dynamicImport from "next/dynamic";
import Script from "next/script";
import BlogListingCards from "@/components/common/blog-listing-card";
import { getBlogBySlug, getRelatedBlogs, blogs } from "../data";

const FormSection = dynamicImport(
  () => import("@/components/common/contact-form"),
  { ssr: false }
);

// Generate static params for all blogs
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    id: blog.slug,
  }));
}

// ----------------------
// Schema (same as Plenum)
// ----------------------
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Blogs",
  description: "Blogs from Xntric",
  provider: {
    "@type": "Organization",
    name: "Xntric",
    url: "https://xntric.me",
  },
  serviceType: "Digital Consulting",
  areaServed: {
    "@type": "Place",
    name: "Global",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "53",
    bestRating: "5",
    worstRating: "1",
  },
};

// ----------------------
// Blog Details Page
// ----------------------
const BlogDetailsPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const blog = getBlogBySlug(id);
  const relatedBlogs = getRelatedBlogs(id, 2);

  if (!blog) {
    return (
      <div className="p-10 text-red-500 h-screen flex items-center justify-center">
        Blog not found
      </div>
    );
  }

  const tableOfContents: { id: string; title: string }[] = [];
  if (blog.title) {
    tableOfContents.push({ id: "main-title", title: blog.title });
  }
  if (blog.subsections && blog.subsections.length > 0) {
    blog.subsections.forEach((sub, index) => {
      if (sub.subtitle) {
        tableOfContents.push({
          id: `subsection-${index}`,
          title: sub.subtitle,
        });
      }
    });
  }
  if (blog.conclusion) {
    tableOfContents.push({ id: "conclusion", title: "Conclusion" });
  }
  if (blog.faqs && blog.faqs.length > 0) {
    tableOfContents.push({ id: "faqs", title: "Frequently Asked Questions" });
  }

  return (
    <main className="font-futuru">
      {/* Schema Scripts */}
      <Script
        id="schema-service"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Script
        id="schema-author"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Person",
            name: "Shaikh Zubaer Aasim",
          }),
        }}
      />
      {blog.faqs && blog.faqs.length > 0 && (
        <Script
          id="schema-faq"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: blog.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      )}

      {/* Blog Header */}
      <div className="w-screen p-4 rounded-[10px]">
        <BlogHeader
          title={blog.title}
          description={blog.metaDescription || blog.description}
          videoSrc="/Blog/hero-video.webm"
        />
      </div>

      {/* First Section */}
      <FirstSection data={blog} />
      {/* Banner Image */}
      {blog.bannerImageURL && (
        <Image
          src={blog.bannerImageURL || ""}
          alt={blog.title}
          title={blog.title}
          width={1200}
          height={600}
          className="w-full h-60 md:h-full"
        />
      )}

      <div className="lg:w-[90%] relative mx-auto flex flex-col lg:flex-row gap-8 pt-12 ">
        {/* Table of Contents */}
        {tableOfContents.length > 0 && (
          <div className="lg:w-[30%] lg:sticky lg:top-20 lg:self-start">
            <div className="table-of-contents bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Table of Content</h3>
              <ul className="toc-list border-l-2 border-[#00AA71] pl-4 space-y-2">
                {tableOfContents.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="toc-link text-gray-700 hover:text-white hover:bg-[#00AA71] px-2 py-1 rounded block"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="lg:w-[70%] space-y-12">
          {blog.description && (
            <div
              className="text-lg text-white blog-content [&>a]:text-[#00aa71] "
              dangerouslySetInnerHTML={{ __html: blog.description }}
            />
          )}

          {blog.subsections?.map((sub, i) => (
            <div key={i} className="space-y-6">
              {sub.subtitle && (
                <h2
                  id={`subsection-${i}`}
                  className="text-2xl lg:text-3xl font-semibold text-white [&>a]:text-[#00aa71] "
                >
                  {sub.subtitle}
                </h2>
              )}
              {sub.subdescription?.map((desc, j) => (
                <div
                  key={j}
                  className="text-lg text-white blog-content tracking-wider [&>a]:text-[#00aa71] "
                  dangerouslySetInnerHTML={{ __html: desc }}
                />
              ))}
            </div>
          ))}

          {blog.conclusion && (
            <div className="space-y-6">
              <h2
                id="conclusion"
                className="text-2xl lg:text-3xl font-semibold text-white"
              >
                Conclusion
              </h2>
              <div
                className="text-lg text-white blog-content tracking-wider [&>a]:text-[#00aa71]"
                dangerouslySetInnerHTML={{ __html: blog.conclusion }}
              />
            </div>
          )}

          {blog.faqs && blog.faqs.length > 0 && (
            <div className="space-y-6">
              <h2
                id="faqs"
                className="text-2xl lg:text-3xl font-semibold text-white"
              >
                Frequently Asked Questions
              </h2>
              {blog.faqs.map((faq, i) => (
                <div key={i} className="space-y-2">
                  <h3 className="text-xl font-medium text-white tracking-wider ">
                    {i + 1}. {faq.question}
                  </h3>
                  <div
                    className="text-lg text-white blog-content tracking-wider [&>a]:text-[#00aa71] "
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Related Posts */}
      {relatedBlogs.length > 0 && (
        <div className="lg:w-[90%] mx-auto pt-40 relative flex flex-col gap-6 mb-10 mt-10">
          <div className="absolute top-0">
            <Image
              src="/Blog/shadow.png"
              alt="shadow"
              width={2000}
              height={500}
            />
          </div>
          <span className="text-2xl font-bold text-white ml-6 lg:ml-0">
            Related posts
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-0">
            {relatedBlogs.map((related, i) => (
              <BlogListingCards
                key={related.slug || i}
                title={related.title}
                id={related.slug}
                desc={related.description}
                date={related.publishedDate}
                min={related.readTime}
                image={related.bannerImageURL}
                border={true}
                blog={related}
              />
            ))}
          </div>
        </div>
      )}

      {/* Contact Form */}
      <FormSection />
    </main>
  );
};

export default BlogDetailsPage;
