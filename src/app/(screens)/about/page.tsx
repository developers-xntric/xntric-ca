import AboutSection2 from "@/components/about/about-section2";
import AboutSection3 from "@/components/about/about-section3";
import NewAboutHero from "@/components/about/new-about-hero";
import OurSocial from "@/components/about/our-social";
import BigIdeas from "@/components/common/big-ideas";
import ContactForm from "@/components/common/contact-form";
import FeaturedBlogs from "@/components/common/featured-blogs";
import SolutionCarousel from "@/components/common/solution-carousel";
import { Metadata } from "next";
import Script from "next/script";
import React from "react";


export const metadata: Metadata = {
  title: "About Xntric – Creative Digital Marketing Solutions",
  description: "Learn about Xntric, your trusted partner in marketing, branding, and technology, delivering creative, data-driven solutions to help your business thrive online.",
  alternates: {
    canonical: "https://xntric.ca/about",
  },
};


const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://xntric.ca/about/#webpage",
      "url": "https://xntric.ca/about",
      "name": "About Xntric | Leading Digital Marketing Agency in Canada",
      "description": "Learn about Xntric, your trusted partner in marketing, branding, and technology, delivering creative, data-driven solutions to help your business thrive online.",
      "isPartOf": {
        "@id": "https://xntric.ca/#website"
      },
      "mainEntity": {
        "@id": "https://xntric.ca/#organization"
      },
      "breadcrumb": {
        "@id": "https://xntric.ca/about/#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://xntric.ca/about/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://xntric.ca"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About Us",
          "item": "https://xntric.ca/about"
        }
      ]
    }
  ]
}




function About() {
  return (
    <div className="max-w-screen">
      <Script
        id="schema-script"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NewAboutHero />
      <AboutSection2 />
      <AboutSection3 />
      <SolutionCarousel isPadding={true} />
      <FeaturedBlogs />
      <OurSocial />
      <BigIdeas />
      <ContactForm />
    </div>
  );
}

export default About;
