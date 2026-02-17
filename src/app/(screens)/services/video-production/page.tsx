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
import { steps6 } from "@/data/our-process";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Professional Creative Production Services | Xntric",
  description:
    "From video shoots to creative visuals, Xntric offers high-quality production services that tell your brand story with impact and cinematic precision.",
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
    title: "99%",
    description: "Deliver 99% of TVCs and Videos On Time, Every Time",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    id: "02",
    title: "95%",
    description:
      "Maintain 95% Client Satisfaction with High-Quality Production",
    bgColor: "bg-[#00AA71]",
    textColor: "text-white",
  },
  {
    id: "03",
    title: "80%",
    description: "Achieve 80%. video completion rates for maximum impact",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    id: "04",
    title: "25%",
    description: "Increase brand reach by through engaging content",
    bgColor: "bg-[#00AA71]",
    textColor: "text-white",
  },
];

const defaultServices: Service[] = [
  {
    imgSrc: "/service-inner/c5.png",
    title: "Commercial Video Production",
    description: "Product, service, or brand showcase videos.",
  },
  {
    imgSrc: "/service-inner/c3.png",
    title: "Reel/Shorts Content Creation",
    description: "Short-form content strategies to drive visibility.",
  },
  {
    imgSrc: "/service-inner/c4.png",
    title: "Corporate Video & Interviews",
    description: "Executive messages, testimonials, team videos.",
  },
  {
    imgSrc: "/service-inner/c3.png",
    title: "Product Photography",
    description: " eCommerce, food, fashion, or flat lays. ",
  },
  {
    imgSrc: "/service-inner/c1.png",
    title: "Motion Graphics & Explainers",
    description: "Animated videos that simplify complex products/services.",
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
          imageclassName="xl:w-[740px] 2xl:w-[1150px] xl:right-12 2xl:right-[23%]"
          rightImage="/service-inner/s7.png"
          heading="Stories That Move Audiences "
          para="Ready to Create a TVC That Stands Out? Book Your Free Consultation Today! "
          headingClassName="lg:max-w-[80%] 2xl:max-w-[60%]"
          buttonText="Book your Consultation!"
        />
        <YearsAwwards
          awwards={Awwards}
          bgImage={false}
          title="While deeply honored by industry recognition, we remain grounded in our core principles and research-driven approach"
        />
        <DigitalProducts
          leftText="From concept to final cut, we research deeply and craft videos that resonate, engage, and convert. delivering content that drives real business impact."
          mainHeading="Video Production Beyond the Frame A 360° Process for Powerful Storytelling"
          buttonText="LET'S TALK"
          highlightWords={["Powerful Storytelling"]}
        />
        <ScrollCardsSection
          heading="Where Data <span style='color: #00AA71'>DRIVES</span> Every Frame"
          text="We don’t just produce videos. We deliver measurable impact. From 95% client satisfaction to a 25% boost in brand reach, our data-driven approach ensures your content performs across every platform"
          headingClassName="max-w-[70%]"
          cardsData={cards}
        />
        <SolutionCarousel />
        <NewGreen
          bg={false}
          text="Let’s Craft Your <span style='color: #00AA71'>Next Viral</span> Short-Form Video"
          buttonText="Book Your Consultation!"
        />
        <ServicesOffer services={defaultServices} />
        <TechStackCarousel />
        <NewOurProcess steps={steps6} />
        <NewGreen
          text="Ready to Create a TVC That Stands Out?"
          buttonText="Let's talk"
        />
        <NewFaqs faqs={faqItems} />
        <BigIdeas line={false} />
        <ContactForm />
      </div>
    </>
  );
}

export default page;
