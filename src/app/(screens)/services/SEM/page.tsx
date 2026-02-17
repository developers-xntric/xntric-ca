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
  title: "SEM Services for High-Impact Paid Campaigns",
  description:
    "Achieve higher ROI with Xntric’s SEM services, creating data-driven paid ad campaigns that reach the right audience at the right moment.",
};
const faqItems: { question: string; answer: string }[] = [
  {
    question: "How many years have you served in the UAE market?",
    answer: `VPS hosting splits a physical server into several separate virtual servers using special software called a hypervisor.`,
  },
  {
    question:
      "How do wireframing and prototyping enhance the UI/UX design process?",
    answer: `Prototyping and wireframing provide much of the basis for the user experience design
process. Prototypes provide interactive elements to designs produced from wireframes,
therefore illustrating the structure of the product. Participating in this process enables
stakeholders to see the final result and verify if the design satisfies user expectations
before to start of development.`,
  },
  {
    question:
      "What are the benefits of conducting a UX audit for your website or app?",
    answer:
      "A UX audit evaluates the usability and functionality of your digital product. Identifying pain points in the user journey. Improving accessibility and navigation. Enhancing overall user satisfaction. A UX audit ensures your website or app meets modern UI/UX design standards.",
  },
  {
    question: "How can responsive web design improve user experience?",
    answer:
      "Whether the screen of any device is little or large, responsive web design will make your site seem fantastic. An integral component of user interface and user experience design services, this approach guarantees consistent appearance and operation across all devices, therefore enhancing the user&#39;s experience.",
  },
  {
    question:
      "What is a design system audit, and why is it essential for consistent branding?",
    answer:
      "Design system audits of all your present design components help to ensure excellent brand recognition and usability. It looks for issues, streamlines procedures, and helps to maintain the visual language of your digital assets consistent—all of which are crucial for credibility and acknowledgement.",
  },
  {
    question: "How do UI/UX design services impact e-commerce success?",
    answer:
      "Effective UI/UX design services play a major role in e-commerce success by Simplifying navigation and checkout processes. Enhancing product presentation. Building trust through intuitive interfaces. By keeping an eye on the user needs, UI/UX designers help increase conversions along with ensuring customer loyalty in online stores.",
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
          leftText="We combine in-depth market analysis with cutting-edge SEM tactics to create campaigns that resonate. Our holistic approach uncovers hidden opportunities and continuously optimizes performance, turning search traffic into loyal customers."
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
          text="Cut through the noise and <span style='color: #00AA71'>reach your ideal customers</span> with precision targeting"
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
