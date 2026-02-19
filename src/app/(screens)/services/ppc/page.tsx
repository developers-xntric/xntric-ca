import BigIdeas from "@/components/common/big-ideas";
import ContactForm from "@/components/common/contact-form";
import SolutionCarousel from "@/components/common/solution-carousel";
import YearsAwwards from "@/components/common/YearsAwwards";
import DigitalProducts from "@/components/service-inner/digital-production";
import ServiceInnerHero from "@/components/service-inner/hero";
import NewGreen from "@/components/service-inner/new-green";
import ServicesOffer, {
  Service,
} from "@/components/service-inner/service-offer";
import ScrollCardsSection from "@/components/services/form-market";
import NewFaqs from "@/components/services/new-faqs";
import NewOurProcess from "@/components/services/new-our-process";
import TechStackCarousel from "@/components/services/techstacks";
import { Awwards } from "@/data/awwards";
import { steps9 } from "@/data/our-process";
import { Metadata } from "next";
import Script from "next/script";
export const metadata: Metadata = {
  title: " PPC Services in Canada | High-ROI Google & Meta Ads",
  description:
    "Drive instant leads with expert PPC services in Canada. We specialize in AI-powered Google Ads, Meta Ads, and LinkedIn campaigns with transparent ROI reporting.",
};
const faqItems: { question: string; answer: string }[] = [
  {
    question: "Who Owns Our Ad Accounts?",
    answer: `You do. We ensure full ownership and administrative access to your Google Ads account at all times.`,
  },
  {
    question:
      "Who Pays the Media Fees?",
    answer: `You pay Google directly for media spend. We charge a separate management fee for our services.`,
  },
  {
    question:
      "Do You Have a Minimum Term?",
    answer:
      "We typically recommend a 3-month engagement to allow proper optimization, but we remain flexible based on client needs.",
  },
  {
    question: "How Much Do You Charge to Be Our PPC Agency?",
    answer:
      "Pricing depends on ad spend, campaign complexity, and business objectives. We provide customized proposals after an initial consultation.",
  },
  {
    question:
      "Do You Offer Free Audits?",
    answer:
      "Yes. We offer complimentary PPC audits to identify performance gaps and growth opportunities.",
  },
  {
    question: "Do You Guarantee Results?",
    answer:
      "We guarantee strategic execution, transparency, and data-driven optimization.",
  },
];

const cards = [
  {
    id: "01",
    title: "90%",
    description: "Identify 90% of Performance Bottlenecks Instantly",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    id: "02",
    title: "60%",
    description: "Accelerate Load Times by Up to 60%",
    bgColor: "bg-[#00AA71]",
    textColor: "text-white",
  },
  {
    id: "03",
    title: "2X",
    description: "Enhance user experience for 2x longer sessions",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    id: "04",
    title: "45%",
    description: "Increase conversion rates by up to 45%",
    bgColor: "bg-[#00AA71]",
    textColor: "text-white",
  },
];

const defaultServices: Service[] = [
  {
    imgSrc: "/service-inner/c5.png",
    title: "Google Search Ads ",
    description: "For high-intent keyword targeting & lead gen. ",
  },
  {
    imgSrc: "/service-inner/c3.png",
    title: "Google Display & Remarketing ",
    description: " Visual ads and retargeting across the web. ",
  },
  {
    imgSrc: "/service-inner/c4.png",
    title: "YouTube Ads ",
    description: "Skippable, bumper, or discovery ads for video engagement.",
  },
  {
    imgSrc: "/service-inner/c3.png",
    title: "Shopping Ads (Google & Bing) ",
    description: "eCommerce product listings for online stores. ",
  },
  {
    imgSrc: "/service-inner/c1.png",
    title: "Bing/Microsoft Ads",
    description: "SEM for audiences not using Google.",
  },
];

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
      <div className="max-w-screen pt-8 overflow-x-hidden font-futuru ">
          <h1 className="hidden">Our PPC Services in Canada</h1>
        <ServiceInnerHero
          imageclassName="xl:w-[740px] 2xl:w-[850px] xl:right-12 2xl:right-[12%]"
          rightImage="/service-inner/s8.png"
          heading="Maximize ROI with Data Driven SEM "
          headingClassName="lg:max-w-[100%] 2xl:max-w-[80%]"
          para="Advanced SEM strategies to increase traffic, leads, and sales — all backed by data Lets Talk! "
        />
        <YearsAwwards
          awwards={Awwards}
          bgImage={false}
          title="While deeply honored by industry recognition, we remain grounded in our core principles and research-driven approach"
        />
        <DigitalProducts
          leftText="As an experienced Google Ads agency, we understand that every business is different. That's why we tailor our campaigns to your goals. Always relevant, always measurable. Our search engine marketing company provides search engine marketing services to clients in the healthcare, legal, real estate, SaaS, eCommerce, education, and professional verticals. All campaigns are custom-based on industry competition, target audience, and the conversion cycle."
          mainHeading="Search Marketing Built on Research and Results A 360° Strategy for Sustainable Growth"
          highlightWords={["360° Strategy"]}
          buttonText="LET'S TALK"
        />
        <ScrollCardsSection
          heading="Insight to Impact <span style='color: #00AA71'>Performance</span> You Can Measure"
          text="Uncover 90% of hidden SEM performance issues. Accelerate load times, improve user experience, and increase conversions significantly. Data-driven optimization for paid search campaigns that cover."
          headingClassName="max-w-[75%]"
          cardsData={cards}
        />
        <SolutionCarousel />
        <NewGreen
          buttonText="Book Your Consultation"
          bg={false}
          text="Break through the competition and connect with your ideal customers through highly precise, data-driven targeting."
        />
        <ServicesOffer services={defaultServices} />
        <TechStackCarousel />
        <NewOurProcess steps={steps9} />
        <NewGreen
          text="Advanced SEM strategies to increase traffic, leads, and sales — all backed by data"
          buttonText="let's talk"
        />
        <NewFaqs faqs={faqItems} />
        <BigIdeas />
        <ContactForm />
      </div>
    </>
  );
}

export default page;
