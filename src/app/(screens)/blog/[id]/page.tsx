/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from "next";
import FirstSection from "../../../../components/blog/detail-firstsection";
import BlogHeader from "@/components/blog/dynamic-blog-header";
import Image from "next/image";
import React from "react";
import dynamicImport from "next/dynamic";
import Script from "next/script";
import BlogListingCards from "@/components/common/blog-listing-card";
import { getBlogBySlug, getRelatedBlogs, getAllBlogSlugs } from "@/lib/sanity";
import { urlFor } from "@/sanity/lib/image";
import FormSection from "@/components/common/contact-form";
import PortableTextRenderer from "@/components/blog/portable-text-renderer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const blog = await getBlogBySlug(id);
  return {
    title: blog?.title ? `${blog.title} | Xntric` : "Blogs | Xntric",
    description: blog?.metaDescription || blog?.description || "",
    alternates: {
      canonical: `https://xntric.ca/blog/${id}`,
    },
  };
}

// Generate static params for all blogs
export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((item: { slug: string }) => ({
    id: item.slug,
  }));
}

// ----------------------
// Schema (same as Plenum)
// ----------------------
// const schemaData = {
//   "@context": "https://schema.org",
//   "@type": "Blog",
//   name: "Blogs",
//   description: "Blogs from Xntric",
//   provider: {
//     "@type": "Organization",
//     name: "Xntric",
//     url: "https://xntric.ca",
//   },
//   serviceType: "Digital Consulting",
//   areaServed: {
//     "@type": "Place",
//     name: "Global",
//   },
//   aggregateRating: {
//     "@type": "AggregateRating",
//     ratingValue: "4.8",
//     reviewCount: "53",
//     bestRating: "5",
//     worstRating: "1",
//   },
// };

// ----------------------
// Blog Details Page
// ----------------------
const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const blog = await getBlogBySlug(id);
  const relatedBlogs = await getRelatedBlogs(id, 2);

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
    blog.subsections.forEach((sub: any, index: number) => {
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

  console.log(blog);

  return (
    <main className="font-futuru">
      {/* Schema Scripts */}
      {/* <Script
        id="schema-service"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      /> */}
      <Script
        id="schema-author"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Person",
            "@id": "https://xntric.ae/#person",
            name: "Tehreem Fazal Qureshi",
            description:
              "Tehreem Fazal is a creative strategist and content marketer with over six years of experience crafting impactful stories for leading brands like Master Group and Metropolitan Properties UAE.",
            url: "https://www.linkedin.com/in/tehreem-fazal-592902192/",
            jobTitle: "Creative Strategist & Content Marketer",
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
              mainEntity: blog.faqs.map((faq: any) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    typeof faq.answer === "string"
                      ? faq.answer
                      : Array.isArray(faq.answer)
                        ? faq.answer
                            .map((a: any) =>
                              a.children?.map((c: any) => c.text).join(""),
                            )
                            .join(" ")
                        : "",
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
          description={""}
          videoSrc="/Blog/hero-video.webm"
        />
      </div>

      {/* First Section: Writer + Banner */}
      <FirstSection data={blog} />

      <div className="w-[90%] relative mx-auto flex flex-col lg:flex-row gap-8 pt-12 lg:pt-20">
        {/* Table of Contents */}
        {tableOfContents.length > 0 && (
          <div className="lg:w-[30%] lg:sticky lg:top-20 lg:self-start">
            <div className="table-of-contents p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-white">Table of Content</h3>
              <ul className="toc-list border-l-2 border-[#00AA71] pl-4 space-y-2">
                {tableOfContents.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="toc-link text-white hover:text-[#fff] hover:bg-[#00AA71] px-2 py-1 rounded block tracking-wide"
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
        <div className="lg:w-[70%] space-y-10">
          {/* Published Date & Read Time */}
          <div className="flex items-center gap-4 flex-wrap">
            <span className="bg-[#00AA71] text-white text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full tracking-wider flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Published
            </span>
            <span className="text-white text-sm md:text-base tracking-wider flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00AA71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {new Date(blog.publishedDate).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="text-white/60">|</span>
            <span className="text-white text-sm md:text-base tracking-wider flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00AA71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {blog.readTime || "5 min read"}
            </span>
          </div>

          {/* Blog Description */}
          {blog.description && (
            <PortableTextRenderer content={blog.description} />
          )}

          {/* Key Takeaways */}
          {blog.keyTakeaways?.length > 0 && (
            <div className="bg-[#045732]/20 border-l-4 border-[#00AA71] p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00AA71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12l2 2 4-4" />
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
                </svg>
                Key Takeaways
              </h3>
              <ul className="space-y-3">
                {blog.keyTakeaways.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 text-white/90">
                    <span className="text-[#00AA71] flex-shrink-0">&#x2022;</span>
                    <span className="text-[15px] md:text-lg blog-content tracking-wider">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {blog.subsections?.map((sub: any, i: number) => (
            <div key={i} className="space-y-6">
              {sub.subtitle && (
                <h2
                  id={`subsection-${i}`}
                  className="text-2xl lg:text-3xl font-semibold text-white [&>a]:text-[#00aa71] "
                >
                  {sub.subtitle}
                </h2>
              )}
              {sub.subdescription?.map((desc: any, j: number) => (
                <div
                  key={j}
                  className="text-lg text-white blog-content tracking-wider [&_a]:text-[#00aa71] [&_a:hover]:text-[#008855]"
                  dangerouslySetInnerHTML={{
                    __html:
                      typeof desc === "string"
                        ? desc
                        : Array.isArray(desc)
                          ? desc
                              .map((d: any) =>
                                d.children?.map((c: any) => c.text).join(""),
                              )
                              .join(" ")
                          : "",
                  }}
                />
              ))}
              {/* Section Image */}
              {sub.sectionImage && (
                <div className="my-6">
                  <Image
                    src={urlFor(sub.sectionImage).url()}
                    alt={sub.sectionImage.alt || "Section image"}
                    width={800}
                    height={500}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
              )}

              {/* Pro Tip Box */}
              {sub.proTip && (
                <div className="bg-[#045732]/20 border-l-4 border-[#00AA71] p-5 rounded-r-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00AA71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18h6" />
                      <path d="M10 22h4" />
                      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
                    </svg>
                    <h4 className="text-[#00AA71] font-semibold text-lg">Pro Tip</h4>
                  </div>
                  <p className="text-base md:text-lg text-white blog-content tracking-wider leading-relaxed">{sub.proTip}</p>
                </div>
              )}

              {/* Table */}
              {sub.table?.rows?.length > 0 && (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-white text-sm">
                    <tbody>
                      {sub.table.rows.map((row: any, ri: number) => (
                        <tr key={ri} className={ri === 0 ? "bg-[#045732]" : "border-b border-gray-700"}>
                          {row.cells?.map((cell: string, ci: number) => (
                            ri === 0
                              ? <th key={ci} className="border border-gray-600 px-4 py-2 text-left font-semibold">{cell}</th>
                              : <td key={ci} className="border border-gray-600 px-4 py-2">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Render Lists */}
              {sub.lists?.map((list: any, listIdx: number) => (
                <div key={listIdx} className="space-y-4 mt-6">
                  {list.listTitle && (
                    <h3 className="text-xl font-semibold text-white [&>a]:text-[#00aa71]">
                      {list.listTitle}
                    </h3>
                  )}
                  {list.listDescription && (
                    <div
                      className="text-lg text-white blog-content tracking-wider [&_a]:text-[#00aa71] [&_a:hover]:text-[#008855]"
                      dangerouslySetInnerHTML={{
                        __html:
                          typeof list.listDescription === "string"
                            ? list.listDescription
                            : Array.isArray(list.listDescription)
                              ? list.listDescription
                                  .map((d: any) =>
                                    d.children
                                      ?.map((c: any) => c.text)
                                      .join(""),
                                  )
                                  .join(" ")
                              : "",
                      }}
                    />
                  )}
                  {/* Render List Items */}
                  {list.items?.map((item: any, itemIdx: number) => (
                    <div key={itemIdx} className="ml-4 space-y-2">
                      {item.title && (
                        <h4 className="text-lg font-medium text-white [&>a]:text-[#00aa71]">
                          • {item.title}
                        </h4>
                      )}
                      {item.description && (
                        <div
                          className="text-base text-gray-300 blog-content tracking-wider [&>a]:text-[#00aa71] ml-6"
                          dangerouslySetInnerHTML={{
                            __html:
                              typeof item.description === "string"
                                ? item.description
                                : Array.isArray(item.description)
                                  ? item.description
                                      .map((d: any) =>
                                        d.children
                                          ?.map((c: any) => c.text)
                                          .join(""),
                                      )
                                      .join(" ")
                                  : "",
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>
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
              <PortableTextRenderer
                content={blog.conclusion}
                className="text-lg text-white blog-content tracking-wider [&>a]:text-[#00aa71]"
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
              {blog.faqs.map((faq: any, i: number) => (
                <div key={i} className="space-y-2">
                  <h3 className="text-xl md:text-[22px] font-bold text-white tracking-wider ">
                    {i + 1}. {faq.question}
                  </h3>
                  <div
                    className="text-lg text-white blog-content tracking-wider [&>a]:text-[#00aa71] "
                    dangerouslySetInnerHTML={{
                      __html:
                        typeof faq.answer === "string"
                          ? faq.answer
                          : Array.isArray(faq.answer)
                            ? faq.answer
                                .map((a: any) =>
                                  a.children?.map((c: any) => c.text).join(""),
                                )
                                .join(" ")
                            : "",
                    }}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Author Section */}
          <div className="w-full border-t border-gray-700 pt-6 mt-10">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-4">
                <Image
                  src="/tehreem-pic.jpeg"
                  alt="Tehreem"
                  width={55}
                  height={55}
                  className="rounded-full"
                />
                <h4 className="text-lg font-medium text-white">
                  Tehreem Fazal Qureshi
                </h4>
              </div>
              <div className="bg-black p-1 rounded-md">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/tehreem-fazal-592902192/"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
            <p className="text-sm md:text-base text-justify text-white">
              Tehreem Fazal is a creative strategist, content marketer, and
              freelance writer with over six years of experience crafting
              impactful stories for local and international brands. She
              specializes in content strategy, brand storytelling, and
              SEO-driven writing across industries like fashion, real estate,
              food, digital marketing, lifestyle, and automotive etc. Her words
              have shaped the voice of leading names including Master Group,
              LUMS, Metropolitan Properties UAE, and more. With a background in
              English Literature, Tehreem blends creativity with strategy to
              make every piece of content resonate and convert. When she's not
              writing, she's exploring new ideas, brands, and narratives that
              inspire.
            </p>
          </div>
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
            {relatedBlogs.map((related: any, i: number) => (
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
