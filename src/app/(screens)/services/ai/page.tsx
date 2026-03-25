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
  alternates: {
    canonical: "https://xntric.ca/services/ai",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "name": "AI Services",
      "description": "Transform your operations with expert AI integration services in Canada. We embed custom AI agents and machine learning into your workflows for maximum ROI.",
      "brand": {
        "@type": "Organization",
        "name": "Xntric"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.0",
        "reviewCount": "40",
        "bestRating": "5",
        "worstRating": "1"
      }
    }


  ]
}


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
            <AIChatbot apiEndpoint="https://api-chat.xntric.ca/chat" />
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
