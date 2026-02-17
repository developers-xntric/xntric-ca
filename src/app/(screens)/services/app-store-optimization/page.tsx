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
import { steps7 } from "@/data/our-process";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "App Store Optimization (ASO) Services Canada | Boost Downloads ",
  description:
    "Maximize your app's organic growth with expert ASO services in Canada. We optimize for iOS & Android to improve rankings, conversion, and user retention in 2026. ",
};
const faqItems: { question: string; answer: string }[] = [
  {
    question: "Why Do I Need ASO Services?",
    answer: `Without optimization, even strong apps remain invisible. ASO improves discoverability, rankings, and organic installs.`,
  },
  {
    question:
      "Can You Guarantee Top Rankings?",
    answer: `No ethical agency can guarantee rankings. We focus on proven optimization strategies that consistently improve visibility and performance.`,
  },
  {
    question:
      "How Long Does ASO Take to Show Results?",
    answer:
      "Initial improvements can appear within weeks, but sustainable growth typically develops over 8–12 weeks, depending on competition.",
  },
  {
    question: "Does ASO Work for Both iOS and Android?",
    answer:
      "Yes. We tailor strategies specifically for Apple App Store and Google Play algorithms.",
  },

];

const cards = [
  {
    id: "01",
    title: "70%",
    description: "Increase App Store Visibility by Up to 70%",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    id: "02",
    title: "50%",
    description:
      "Boost Organic Downloads by 50% with Targeted Keyword Optimization",
    bgColor: "bg-[#00AA71]",
    textColor: "text-white",
  },
  {
    id: "03",
    title: "30%",
    description:
      "improve Conversion Rates by 30% through Optimized App Listings",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    id: "04",
    title: "20%",
    description: "Enhance User Ratings by 20% to Build Trust and Credibilty",
    bgColor: "bg-[#00AA71]",
    textColor: "text-white",
  },
];

const defaultServices: Service[] = [
  {
    imgSrc: "/service-inner/c5.png",
    title: "iOS Optimization",
    description: "Platform-specific optimization aligned with Apple’s ranking algorithms and metadata structure. ",
  },
  {
    imgSrc: "/service-inner/c3.png",
    title: "Android/Google Play Optimization",
    description: " Comprehensive ASO strategies designed for Google Play visibility and conversion improvement.",
  },
  {
    imgSrc: "/service-inner/c4.png",
    title: "Gaming App ASO",
    description: "Specialized strategies for highly competitive gaming categories, including keyword clusters and creative experimentation.",
  },
  {
    imgSrc: "/service-inner/c3.png",
    title: "New App Launch Optimization ",
    description: "Pre-launch research, keyword mapping, and positioning strategy to maximize early traction. ",
  },
  {
    imgSrc: "/service-inner/c1.png",
    title: "Cross-Market Localization",
    description: "Multilingual app listings adapted for global audiences, cultural nuances, and regional search behavior.",
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
        <ServiceInnerHero
          imageclassName="xl:w-[740px] 2xl:w-[1100px] xl:right-12 2xl:right-[23%]"
          rightImage="/service-inner/s10.png"
          heading="Get Found. Get Downloaded. Get Results. "
          headingClassName="lg:w-[600px] 2xl:max-w-[90%]"
          para="Ready to Rank Higher? Schedule Your Fre ASO Strategy Session Now!"
          buttonText="FREE ASO AUDIT"
        />
        <YearsAwwards
          awwards={Awwards}
          bgImage={false}
          title="We are proud of the recognition we’ve received within the industry, and we stay committed to our foundational values and a strategy rooted in data-driven research."
          isServices={true}
        />
        <DigitalProducts
          leftText="From startups to global enterprises, we leverage data, user psychology, and market intelligence to design sustainable strategies for profitable long-term app growth. Our App Store Optimization strategy is aimed at long-term keyword discoverability, optimizing conversion potential, and, most importantly, injecting real organic growth."
          mainHeading="ASO That Builds Visibility Installs That Drive Growth"
          highlightWords={["Builds Visibility"]}
          buttonText="LET'S TALK"
        />
        <ScrollCardsSection
          text="Behind many beautifully designed apps are hidden performance gaps, limited keyword visibility, low tap-through rates, weak metadata, or underperforming creative assets. We uncover what’s holding your app back and transform those gaps into scalable growth opportunities. "
          headingClassName="max-w-[80%]"
          heading="Turning App Challenges into  <span style='color: #00AA71'>Scalable Growth</span> TO CLEAR RESULTS "
          cardsData={cards}
        />
        <SolutionCarousel />
        <NewGreen
          bg={false}
          text="<span style='color: #00AA71'>Technology</span> That Supports Performance"
          buttonText="Book your Free audit"
        />
        <ServicesOffer services={defaultServices} subtext="We deliver end-to-end App Store Optimization solutions tailored to your growth stage and industry"/>
        <TechStackCarousel />
        <NewOurProcess steps={steps7} />
        <NewGreen text="Ready to Rank Higher?" buttonText="Let's Talk" />
        <NewFaqs faqs={faqItems} />
        <BigIdeas line={false} mainText="Let’s Build Your Growth Engine" />
        <ContactForm />
      </div>
    </>
  );
}

export default page;
