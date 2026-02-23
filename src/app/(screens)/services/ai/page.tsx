import AIChatbot from "@/components/ai/ai-chat";
import AIFiveSection from "@/components/ai/ai-five";
import AIFourSection from "@/components/ai/ai-four";
import AINewHero from "@/components/ai/ai-new-hero";
import TechStackSection from "@/components/ai/techstacks";
import TimelineSection from "@/components/ai/timeline-section";
import SupremacySecurity from "@/components/ai/supermacy-security";
import YearsAwwards from "@/components/common/YearsAwwards";
import ContactForm from "@/components/common/contact-form";
import BigIdeas from "@/components/common/big-ideas";
import { Awwards } from "@/data/awwards";
import { Metadata } from "next";
import Script from "next/script";
export const metadata: Metadata = {
  title: "AI Integration Services Canada | Automate & Scale with AI ",
  description:
    "Transform your operations with expert AI integration services in Canada. We embed custom AI agents and machine learning into your workflows for maximum ROI.",
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

const AIPage = () => {
  return (
    <>
      <Script
        id="schema-script"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="font-futuru">

        <div className=" -space-y-60 md:-space-y-[25%] lg:-space-y-[10%] 2xl:-space-y-52">
          <h1 className="hidden">Our AI-Powered Solutions in Canada</h1>
          <AINewHero />
          {/* AI Chatbot Component */}
          <div className="relative md:bottom-10 2xl:bottom-32">
            <AIChatbot apiEndpoint="https://api-chat.xntric.me/chat" />
          </div>
        </div>
        <YearsAwwards
          awwards={Awwards}
          title="We combine consulting expertise with hands-on AI engineering to deliver end-to-end solutions."
        />
        <TimelineSection />
        <AIFourSection />
        <AIFiveSection />
        <TechStackSection />
        <SupremacySecurity />
        <div className="pb-3">
          <BigIdeas />
          <ContactForm isPaddingTop={true} />
        </div>
      </div>
    </>
  );
};

export default AIPage;
