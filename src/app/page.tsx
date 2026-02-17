import ContactForm from "@/components/common/contact-form";
import FeaturedBlogs from "@/components/common/featured-blogs";
import SolutionCarousel from "@/components/common/solution-carousel";
import YearsAwwards from "@/components/common/YearsAwwards";
import Hero from "@/components/HomePage/Hero";
import MapSection from "@/components/HomePage/Map";
import NewServiceList from "@/components/HomePage/NewServiceList";
import Section6 from "@/components/HomePage/Section6";
import { Awwards } from "@/data/awwards";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Canada | Data-Driven Growth",
  description:
    " Partner with a top digital marketing agency in Canada. We scale brands through AI-powered SEO, performance PPC, and custom digital strategies. Book a free audit!",
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Xntric Tech",
  url: "https://xntric.me/",
  logo: "https://xntric.me/HomePage/X-Logo.png",
  image: "https://xntric.me/HomePage/X-Logo.png",
  description:
    "Xntric Tech is a technology solutions provider specializing in innovative software development, digital transformation, and IT consulting to help businesses scale and succeed.",

  address: {
    "@type": "PostalAddress",
    streetAddress: "Office F11, First Floor, IT Plaza,",
    addressLocality: "Dubai Silicon Oasis, Dubai",
    addressRegion: "UAE",
    postalCode: "00000",
    addressCountry: "UAE",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "00971 054 308 9222",
    contactType: "Customer Service",
    areaServed: "UAE",
    availableLanguage: "English",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    reviewCount: "30",
    bestRating: "5",
    worstRating: "2",
  },
  priceRange: "$$",
  openingHours: "Mo-Fr 09:00-18:00",
  additionalType: "https://schema.org/TechnologyBusiness",
};


export default function Home() {
  return (
    <>
      <Script
        id="schema-script"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className=" overflow-hidden">
        {/* Hero Section */}
        <Hero />
        <YearsAwwards
          awwards={Awwards}
          bgImage={true}
          title="While deeply honored by industry recognition, we remain grounded in our core principles and research-driven approach"
        />
        <MapSection />
        <SolutionCarousel isPadding={true} />
        <Section6 />
        <NewServiceList />
        <FeaturedBlogs isHome={true} />
        <ContactForm isPaddingTop={true} />
      </div>
    </>
  );
}
