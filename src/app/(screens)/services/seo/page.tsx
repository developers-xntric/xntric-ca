import TechStackCarousel from "@/components/services/techstacks";
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
import { Awwards } from "@/data/awwards";
import { steps2 } from "@/data/our-process";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "SEO Services to Improve Rankings & Visibility",
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
    title: "95%",
    description: "Spot 95% of SEO Barriers Limiting Your Reach",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    id: "02",
    title: "2X",
    description: "User Data to Uncover Key Insights ",
    bgColor: "bg-[#00AA71]",
    textColor: "text-white",
  },
  {
    id: "03",
    title: "RANKINGS",
    description: "Boost rankings with LSI keyword Optimization",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    id: "04",
    title: "300%",
    description: "Grow organic traffic by upto 300%",
    bgColor: "bg-[#00AA71]",
    textColor: "text-white",
  },
];

const defaultServices: Service[] = [
  {
    imgSrc: "/service-inner/c5.png",
    title: "Local SEO & GBP Management ",
    description: "Ranking on Google Maps and local search. ",
  },
  {
    imgSrc: "/service-inner/c3.png",
    title: "Technical SEO Projects ",
    description:
      "Site speed, indexing, mobile-friendliness, and Core Web Vitals. ",
  },
  {
    imgSrc: "/service-inner/c4.png",
    title: "eCommerce SEO",
    description: "For online stores needing product visibility.",
  },
  {
    imgSrc: "/service-inner/c3.png",
    title: "Content-Driven SEO",
    description: "Blogs, articles, and resources designed to rank.",
  },
  {
    imgSrc: "/service-inner/c1.png",
    title: "Enterprise SEO",
    description: "Large-scale SEO across multiple domains or regions. ",
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
          isPopup={true}
          imageclassName="xl:w-[700px] 2xl:w-[1150px] xl:right-5 2xl:right-[23%]"
          rightImage="/service-inner/s1.png"
          heading="Data-Driven Decisions for Organic Growth"
          headingClassName="lg:max-w-[90%] 2xl:max-w-[70%]"
          para="Optimize with Intelligence Claim Your Free Data-Driven SEO Audit!"
        />
        <YearsAwwards
          awwards={Awwards}
          bgImage={false}
          title="While deeply honored by industry recognition, we remain grounded in our core principles and research-driven approach"
        />
        <DigitalProducts
          leftText="We don’t just optimize keywords. we analyze, strategize, and execute based on deep insights to deliver SEO that drives traffic, engagement, and growth."
          mainHeading="SEO That Works From Every Aspect A 360° APPROACH to Digital Visibility"
          highlightWords={["A 360°", "APPROACH"]}
        />
        <ScrollCardsSection
          heading="Precision SEO Data That <span style='color:#00AA71;'>Drives Real Growth</span>"
          headingClassName="max-w-[80%] tracking-wide"
          text="From spotting barriers to doubling local leads and tripling organic traffic, our data-driven SEO strategies deliver results you can measure. Recognized for excellence, we turn complex analytics into your competitive advantage"
          cardsData={cards}
        />
        <SolutionCarousel />
        <NewGreen
          isPopupOpen={true}
          bg={false}
          text="Build a Strong <span style='color: #00AA71'>Online Foundation</span>. Book Your Free SEO Audit"
        />
        <ServicesOffer services={defaultServices} />
        <TechStackCarousel />
        <NewOurProcess steps={steps2} />
        <NewGreen
          isPopupOpen={true}
          bg={true}
          text="Optimize with Intelligence Claim Your Free Data-Driven SEO Audit!"
        />
        <NewFaqs faqs={faqItems} />
        <BigIdeas line={false} />
        <ContactForm />
      </div>
    </>
  );
}

export default page;
