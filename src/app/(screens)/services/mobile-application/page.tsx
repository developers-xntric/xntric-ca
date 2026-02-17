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
import { steps10 } from "@/data/our-process";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development Services in Canada | iOS & Android",
  description: "Premier mobile app development services in Canada. We build scalable, high-performance iOS, Android, and cross-platform apps that drive user engagement.",
};

const faqItems: { question: string; answer: string }[] = [
  {
    question: "How do I find the right mobile app development company in Canada? ",
    answer: `Start by evaluating their portfolio, client testimonials, and technical expertise (especially in your industry). Look for a company that prioritizes strategy, clear communication, and post-launch support. A great mobile app development company in Canada will offer transparency in their process, clear pricing, and a commitment to quality assurance.`,
  },
  {
    question:
      "What is the typical cost of developing a mobile app with a reliable mobile app development company in Canada? ",
    answer: `The cost can range widely, typically starting from $30,000 for a simple MVP to over $150,000 for a complex, full-scale application. Factors influencing the price include platform (native vs. cross-platform), feature complexity, design requirements, and integration needs. We provide a custom quote after a detailed discovery session for an accurate estimate.`,
  },
  {
    question:
      "How long does it take to develop a mobile app with a mobile app development company in Canada?",
    answer:
      "A basic Minimum Viable Product (MVP) can take 3-5 months. A complex, full-scale application with multiple integrations and advanced features usually requires 6-12 months from the discovery phase to final deployment. The exact timeline depends heavily on the project scope and the speed of client-side feedback.",
  },
  {
    question: "How do I ensure the security and privacy of my mobile app? ",
    answer:
      "A responsible developer implements Security by Design from day one. This includes secure API development, data encryption, regular security audits, compliance checks (e.g., PIPEDA in Canada), and secure user authentication protocols to protect both your data and your users’ privacy.",
  },
  {
    question:
      "Does a trusted partner offer post-launch support and maintenance? ",
    answer:
      "Design system audits of all your present design components help to ensure excellent brand recognition and usability. It looks for issues, streamlines procedures, and helps to maintain the visual language of your digital assets consistent—all of which are crucial for credibility and acknowledgement.",
  },
  {
    question: "How do UI/UX design services impact e-commerce success?",
    answer:
      "Yes. A reliable partner and best mobile app development agency in Canada always provides a comprehensive maintenance plan. This includes bug fixes, security updates, operating system compatibility updates (iOS/Android), and ongoing feature enhancements to ensure your app remains performant and relevant long-term.",
  },
];

const cards = [
  {
    id: "01",
    title: "90%",
    description: "Identify up to 90% of hidden mobile user experience issues before development begins.",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    id: "02",
    title: "Real Time",
    description: "Analyze real-time app usage data post-launch to unlock continuous growth potential.",
    bgColor: "bg-[#00AA71]",
    textColor: "text-white",
  },
  {
    id: "03",
    title: "ROI",
    description: "Deliver scalable and secure mobile solutions proven to maximize your return on investment.",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    id: "04",
    title: "40%",
    description: "Implement strategies proven to boost user retention by up to 40% through superior UX.",
    bgColor: "bg-[#00AA71]",
    textColor: "text-white",
  },
];

const defaultServices: Service[] = [
  {
    imgSrc: "/service-inner/c5.png",
    title: "MVP Development",
    description: " We create Minimum Viable Products (MVPs) for fast market testing, concept validation, and securing early-stage funding.",
  },
  {
    imgSrc: "/service-inner/c3.png",
    title: "Full-Scale App Development ",
    description: "Complex apps with dashboards, APIs, and multiple modules. ",
  },
  {
    imgSrc: "/service-inner/c4.png",
    title: "Cross-Platform App Development",
    description: "Using powerful frameworks like Flutter and React Native, we efficiently build high-performing applications for both Android and iOS from a single, streamlined codebase.",
  },
  {
    imgSrc: "/service-inner/c3.png",
    title: "Native App Development",
    description: "We deliver high-performance, platform-optimized applications with separate builds for iOS (Swift) and Android (Kotlin) to leverage the unique capabilities of each operating system.",
  },
  {
    imgSrc: "/service-inner/c1.png",
    title: "App Redesign & Upgrade",
    description: "We revamp and modernize legacy applications to enhance user experience (UX), update the design, and significantly improve overall stability and performance.",
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
          imageclassName="xl:w-[700px] 2xl:w-[1150px] xl:right-5 2xl:right-[23%]"
          rightImage="/service-inner/s4.png"
          heading="Speed Meets Seamless Experience"
          para="One Codebase, Unlimited Possibilities Book Your Free Mobile App Strategy Session!"
          headingClassName="lg:max-w-[100%] 2xl:max-w-[100%]"
        />
        <YearsAwwards
          awwards={Awwards}
          bgImage={false}
          title="Are you searching for a reliable partner to bring your innovative app idea to life? Choosing the right Mobile App Development Company in Canada is the most crucial decision you will make."
        />
        <DigitalProducts
          leftText="We understand the unique challenges and opportunities within the Canadian market, focusing on robust architecture, intuitive design, and user-centric functionality to ensure your application achieves maximum engagement and delivers measurable ROI. We build mobile solutions that solve real-world problems and drive tangible business success."
          mainHeading="Research-Backed Mobile Innovation"
          highlightWords={["A 360° Process for Success"]}
          buttonText="LET'S TALK"
        />
        <ScrollCardsSection
          heading="Strategy That <span style='color: #00AA71'>Drives</span> Impact"
          headingClassName="max-w-[70%] tracking-wide"
          text="We create a purposeful blueprint designed to drive measurable growth and ensure the resulting app stands out in the crowded digital market, solidifying our position among the top mobile app development companies in Canada."
          cardsData={cards}
        />
        <SolutionCarousel />
        <NewGreen
          bg={false}
          text="Where Innovation Meets <span style='color: #00AA71'>Research-Driven</span> development"
          buttonText="BOOK YOUR CONSULTATION"
        />
        <ServicesOffer services={defaultServices} />
        <TechStackCarousel />
        <NewOurProcess steps={steps10} />
        <NewGreen
          text="Stop Planning, Start Building. Let's Develop Your App in Canada Today."
          buttonText="Let’s talk"
        />
        <NewFaqs faqs={faqItems} />
        <BigIdeas />
        <ContactForm />
      </div>
    </>
  );
}

export default page;
