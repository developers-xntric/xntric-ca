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
  title: "App Store Optimization for iOS & Google Play",
  description:
    "Improve app rankings and downloads with Xntric’s App Store Optimization, crafted to maximize visibility on iOS and Google Play for your target audience.",
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
    description: "Optimization specifically for Apple App Store. ",
  },
  {
    imgSrc: "/service-inner/c3.png",
    title: "Android/Google Play Optimization",
    description: " ASO for Play Store visibility.",
  },
  {
    imgSrc: "/service-inner/c4.png",
    title: "ASO for Gaming Apps",
    description: "Boost discoverability in highly competitive gaming markets.",
  },
  {
    imgSrc: "/service-inner/c3.png",
    title: "New App Launch Optimization ",
    description: "Prep and strategy for launching your first app. ",
  },
  {
    imgSrc: "/service-inner/c1.png",
    title: "Cross-Market Localization",
    description: "Multilingual listings for global audiences.",
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
          title="While deeply honored by industry recognition, we remain grounded in our core principles and research-driven approach"
          isServices={true}
        />
        <DigitalProducts
          leftText="From startups to global brands, we don’t just optimize your app store presence. we back every strategy with deep market research, user insights, and competitor analysis to build app visibility and downloads that last."
          mainHeading="ASO That Goes Beyond Keywords A 360° Approach for Sustainable App Growth"
          highlightWords={["360° Approach"]}
          buttonText="LET'S TALK"
        />
        <ScrollCardsSection
          text="Beautiful apps often conceal hidden flaws. Poor keyword reach, low conversion, and weak ratings. We turn these puzzles into practical solutions that increase visibility, downloads, and user trust through data-driven strategies. "
          headingClassName="max-w-[80%]"
          heading="FROM COMPLEX <span style='color: #00AA71'>APP CHALLENGES</span> TO CLEAR RESULTS "
          cardsData={cards}
        />
        <SolutionCarousel />
        <NewGreen
          bg={false}
          text="Maximize <span style='color: #00AA71'> Organic Installs,</span> Schedule Your Free ASO Consultation Now!"
          buttonText="Book your Free audit"
        />
        <ServicesOffer services={defaultServices} />
        <TechStackCarousel />
        <NewOurProcess steps={steps7} />
        <NewGreen text="Ready to Rank Higher?" buttonText="Let's Talk" />
        <NewFaqs faqs={faqItems} />
        <BigIdeas line={false} />
        <ContactForm />
      </div>
    </>
  );
}

export default page;
