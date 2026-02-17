import TechStackCarousel from "@/components/services/techstacks";
import BigIdeas from "@/components/common/big-ideas";
import ContactForm from "@/components/common/contact-form";
import SolutionCarousel from "@/components/common/solution-carousel";
import YearsAwwards from "@/components/common/YearsAwwards";
import DigitalProducts from "@/components/service-inner/digital-production";
import ServiceInnerHero from "@/components/service-inner/hero";
import NewGreen from "@/components/service-inner/new-green";
import ServicesOffer from "@/components/service-inner/service-offer";
import ScrollCardsSection from "@/components/services/form-market";
import { Awwards } from "@/data/awwards";
import { steps } from "@/data/our-process";
import { faqItems } from "@/data/service-inner-faqs";
import NewOurProcess from "@/components/services/new-our-process";
import NewFaqs from "@/components/services/new-faqs";
import { Metadata } from "next";
import Script from "next/script";
export const metadata: Metadata = {
  title: "Website Development & Design Services | Xntric",
  description:
    "Create stunning, responsive websites with Xntric’s development services, built to match your brand’s vision and deliver a seamless online experience.",
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Xntric",
  url: "https://xntric.me",
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
  //   "https://www.linkedin.com/company/plenum-tech-solutions",
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

function page() {
  return (
    <>
      <Script
        id="schema-script"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="max-w-screen pt-8 overflow-x-hidden font-futuru font-semibold">
        <ServiceInnerHero
          isPopup={true}
          imageclassName="xl:w-[700px] 2xl:w-[1150px] xl:right-5 2xl:right-[23%]"
          rightImage="/service-inner/service-web-hero.svg"
          heading="Concept to Code, Built for growth, AND results"
          headingClassName="xl:w-[100%] 2xl:w-[80%]"
          para="Your Roadmap to Success Starts Here"
          bottomParagraph=""
          buttonText="Free Audit"
        />
        <YearsAwwards
          awwards={Awwards}
          bgImage={false}
          title="While deeply honored by industry recognition, we remain grounded in our core principles and research-driven approach"
        />
        <DigitalProducts />
        <ScrollCardsSection />
        <SolutionCarousel />
        <NewGreen
          isPopupOpen={true}
          bg={false}
          text='Where Innovation Meets <span style="color: #00AA71">Research-Driven</span> Development'
        />
        <ServicesOffer />
        <TechStackCarousel />
        <NewOurProcess steps={steps} />
        <NewGreen isPopupOpen={true} />
        <NewFaqs faqs={faqItems} />
        <BigIdeas line={false} />
        <ContactForm />
      </div>
    </>
  );
}

export default page;
