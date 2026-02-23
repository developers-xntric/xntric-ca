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
import { steps5 } from "@/data/our-process";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Social Media Marketing Services Canada | Grow Your Community",
  description:
    "Transform your social presence with expert services in Canada. We specialize in high-impact video, social search optimization, and data-driven community growth.",
};

const faqItems: { question: string; answer: string }[] = [
  {
    question: "Which social media platform is popular in Canada?",
    answer: `Popular social media platforms in Canada include Instagram, Facebook, TikTok, LinkedIn, and YouTube. Platforms most relevant to your target audience and sector should be considered.`,
  },
  {
    question:
      "What is the 5-3-2 rule for social media?",
    answer: `The 5-3-2 rule recommends a sharing ratio of five curated posts, three original posts, and two personal or engaging posts to maintain a balance in the content shared with the audience.`,
  },
  {
    question:
      "How much does social media handling cost in Canada?",
    answer:
      "Depending on campaign size, platforms, and the level of service, Canadian social media marketing companies typically charge between CAD 1,500 and CAD 10,000+ per month.",
  },
  {
    question: "How much do social media consultants cost?",
    answer:
      "Fees for consultants may be hourly rates of between CAD 75-250 or monthly retainers based on their experience.",
  },
  {
    question:
      "What are SMO services?",
    answer:
      "Social Media Optimization (SMO) is the act of optimizing social media profiles, pages, hashtags, content, and engagement to increase visibility and authority.",
  },
  {
    question: "What are the benefits of SMO?",
    answer:
      "SMO improves brand visibility, increases user engagement, builds online reputation, and drives website traffic.",
  },
];

const cards = [
  {
    id: "01",
    title: "96%",
    description: "Boost Engagement Rates by Up to 96% on Top Platforms",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    id: "02",
    title: "34%",
    description: "Increase Reach to 34% of Your Target Audience",
    bgColor: "bg-[#00AA71]",
    textColor: "text-white",
  },
  {
    id: "03",
    title: "3X",
    description: "Generate 3X more traffic through targeted campaigns",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    id: "04",
    title: "25%",
    description:
      "Convert 25% more followers into customers with proven strategies",
    bgColor: "bg-[#00AA71]",
    textColor: "text-white",
  },
];

const defaultServices: Service[] = [
  {
    imgSrc: "/service-inner/c5.png",
    title: "Monthly Content Management",
    description: "Steady, planned content builds sustainable growth.",
  },
  {
    imgSrc: "/service-inner/c3.png",
    title: "Reels & Video-Focused Growth",
    description: "Our Canadian social media marketing team specializes in short-form video and creates scroll-stopping content.",
  },
  {
    imgSrc: "/service-inner/c4.png",
    title: "Personal Brand Management ",
    description: "To be the authority. Executives, founders, and public figures need to be seen as the authority in their niche.",
  },
  {
    imgSrc: "/service-inner/c3.png",
    title: "Campaign-Based Social Strategy",
    description: "As one of the top social media agencies in Canada, we source, brief and manage the right creators for your brand values.",
  },
  {
    imgSrc: "/service-inner/c1.png",
    title: "Influencer & UGC Collaborations",
    description: "Sourcing, managing, and briefing creators.",
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
        <h1 className="hidden">Our Social Media Marketing Services in Canada</h1>
        <ServiceInnerHero
          isPopup={true}
          socialLinks={true}
          imageclassName="xl:w-[700px] 2xl:w-[1000px] xl:right-5 2xl:right-[18%] 5xl:right-[10%]"
          rightImage="/service-inner/s6.png"
          heading="Stop Guessing Start Growing"
          headingClassName="lg:max-w-[100%] 2xl:max-w-[60%]"
          para="We combine creativity with precision to ensure your brand doesn’t just participate in conversations; it leads them."
          buttonText="FREE SMM AUDIT"
        />
        <YearsAwwards
          awwards={Awwards}
          bgImage={false}
          title="While deeply honored by industry recognition, we remain grounded in our core principles and research-driven approach"
        />
        <DigitalProducts
          leftText="From startups to global brands, we deliver social media campaigns built on deep research and data insights, crafting content and strategies that resonate with your audience and drive measurable results."
          mainHeading="Social Media Marketing Beyond Posting. A 360° Strategy Built for Meaningful Engagement and Sustainable Growth."
          buttonText="LET'S TALK"
          highlightWords={["360° Strategy"]}
        />
        <ScrollCardsSection
          heading="FROM SOCIAL CLUTTER TO <span style='color: #00AA71'>CLEAR CONVERSIONS</span>"
          headingClassName="max-w-[90%] tracking-wide"
          text="Unlike other Canadian social media marketing services, we run campaigns based on measurable KPIs like engagement rate, click-through rate, conversion rate, and return on investment."
          cardsData={cards}
        />
        <SolutionCarousel />
        <NewGreen
          isPopupOpen={true}
          showSocialLinks={true}
          bg={false}
          text="Social Platforms Are Saturated, But <span style='color: #00AA71'>Data Cuts Through Chaos</span>"
          buttonText="Book your Free audit"
        />
        <ServicesOffer services={defaultServices} heading={"Our Social Media Marketing Services"} />
        <TechStackCarousel />
        <NewOurProcess steps={steps5} />
        <NewGreen
          isPopupOpen
          text="Turn Social Noise into Strategic Success"
          showSocialLinks={true}
          buttonText="FREE AUDIT"
        />
        <NewFaqs faqs={faqItems} />
        <BigIdeas line={false} />
        <ContactForm />
      </div>
    </>
  );
}

export default page;
