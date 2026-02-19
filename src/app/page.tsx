import ContactForm from "@/components/common/contact-form";
import FeaturedBlogs from "@/components/common/featured-blogs";
import SolutionCarousel from "@/components/common/solution-carousel";
import YearsAwwards from "@/components/common/YearsAwwards";
import Hero from "@/components/HomePage/Hero";
import MapSection from "@/components/HomePage/Map";
import NewServiceList from "@/components/HomePage/NewServiceList";
import Section6 from "@/components/HomePage/Section6";
import NewFaqs from "@/components/services/new-faqs";
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

const faqItems: { question: string; answer: string }[] = [
  {
    question: "Why should Canadian businesses choose a local digital marketing agency?",
    answer: `While digital marketing is global, the Canadian market is unique. We understand the regional nuances, from the bilingual requirements in Quebec to the specific consumer behaviors in the GTA and Vancouver. Working with a local agency ensures your brand stays compliant with Canadian privacy laws (PIPEDA) and resonates with local culture and values.`,
  },
  {
    question:
      "What digital marketing services does Xntric CA offer?",
    answer: `Xntric CA provides a full suite of performance-driven services, including:
Search Engine Optimization (SEO): Dominating local and national search rankings.
Paid Media (PPC): High-ROI campaigns on Google and Social.
Content & Video Marketing: Short-form video and storytelling for Gen Z and Millennials.
Web & App Development: Building high-conversion, accessible digital platforms.
`,
  },
  {
    question:
      "How do you tailor strategies for the diverse Canadian provinces?",
    answer:
      "Canada isn't a one-size-fits-all market. We develop geo-targeted strategies that account for regional trends. Whether you are targeting the tech hubs of Toronto and Waterloo or the service-heavy markets in the Maritimes, our data-driven approach ensures your ad spend is optimized for the specific audience in each province.",
  },
  {
    question: "How long does it take to see a return on investment (ROI)?",
    answer:
      "While quick wins can be achieved through Paid Ads (PPC) within weeks, sustainable growth through SEO and Organic Social typically takes 3 to 6 months. We focus on Show Me marketing—providing transparent, real-time dashboards so you can track your progress from day one.",
  },
  {
    question:
      "How does digital marketing actually grow my business?",
    answer:
      "Digital marketing puts your brand where your customers already spend their time: online. By using targeted SEO and ads, we ensure your business appears exactly when someone is searching for your services. This leads to more website traffic, higher-quality leads, and ultimately, more sales.",
  },
  {
    question: "Which social media platforms should my business be on?",
    answer:
      "You don't need to be everywhere. We analyze where your specific audience hangs out—whether it’s LinkedIn for professional services, Instagram/TikTok for lifestyle brands, or Facebook for local community engagement. We help you focus your energy where it will actually generate revenue.",
  },
];

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
        <h1 className="hidden">Digital Marketing Agency in Canada</h1>
        <Hero />
        <YearsAwwards
          awwards={Awwards}
          bgImage={true}
          title="Our work has been acknowledged across international platforms for innovation, performance, and creative impact."
        />
        <MapSection />
        <SolutionCarousel isPadding={true} para="We understand that strategy, creativity, and technology work best when they come together as a single digital solution." />
        <Section6 />
        <NewServiceList />
        <FeaturedBlogs isHome={true} />
        <NewFaqs faqs={faqItems} />
        <ContactForm isPaddingTop={true} />
      </div>
    </>
  );
}
