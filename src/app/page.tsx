import Hero from "@/components/HomePage/Hero";
import { Awwards } from "@/data/awwards";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import Script from "next/script";

const SolutionCarousel = dynamic(
  () => import("@/components/common/solution-carousel"),
  { ssr: false }
);
const FeaturedBlogs = dynamic(
  () => import("@/components/common/featured-blogs"),
  { ssr: false }
);
const NewServiceList = dynamic(
  () => import("@/components/HomePage/NewServiceList"),
  { ssr: false }
);
const MapSection = dynamic(() => import("@/components/HomePage/Map"), {
  ssr: false,
});
const YearsAwwards = dynamic(() => import("@/components/common/YearsAwwards"), {
  ssr: false,
});
const Section6 = dynamic(() => import("@/components/HomePage/Section6"), {
  ssr: false,
});
const ContactForm = dynamic(() => import("@/components/common/contact-form"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Xntric – Creative Digital Marketing & Innovation Agency",
  description:
    "Innovative digital solutions in marketing, branding, and development to help brands stand out, connect with audiences, and grow in today’s fast-paced world.",
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
  // "sameAs": [
  //   "https://www.facebook.com/PlenumTech",
  //   "https://twitter.com/PlenumTech",
  //   "https://www.linkedin.com/company/plenum-tech-solutions"
  // ],
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
