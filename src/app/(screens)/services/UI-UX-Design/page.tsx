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
import { steps8 } from "@/data/our-process";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "UI/UX Design Services for Engaging Experiencesa",
  description:
    "Enhance user engagement with Xntric’s UI/UX design services, blending functionality and creativity for beautiful, intuitive, and seamless digital experiences.",
};

const faqItems: { question: string; answer: string }[] = [
  {
    question: "What defines a good UI/UX designer in UAE?",
    answer: `One who has both technical knowledge and artistic skills is the best UI/UX designer in
Dubai. They are acquainted with design technologies like Figma, Adobe XD, and
Sketch in addition to local and worldwide trends in design. At first, they give customer
requirements first importance. Important skills also include working in groups and being
able to change with the times in the sector.`,
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
    title: "40%",
    description: "Increase User Engagement by 40% Through Optimized UX",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    id: "02",
    title: "26-40%",
    description: "Lower Bounce Rates to 26-40% with Clear Navigation ",
    bgColor: "bg-[#00AA71]",
    textColor: "text-white",
  },
  {
    id: "03",
    title: "7/10",
    description:
      "Raise user satisfaction scores above 7/10 with consistent design",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    id: "04",
    title: "25%",
    description: "Improve session durationby 25% to keep users longer",
    bgColor: "bg-[#00AA71]",
    textColor: "text-white",
  },
];

const defaultServices: Service[] = [
  {
    imgSrc: "/service-inner/c5.png",
    title: "Product Design for SaaS & Dashboards ",
    description: " Interfaces for software, CRMs, internal tools.",
  },
  {
    imgSrc: "/service-inner/c3.png",
    title: "Website UX & Conversion Design ",
    description: "Landing pages and marketing sites focused on performance. ",
  },
  {
    imgSrc: "/service-inner/c4.png",
    title: "Mobile App UX Design",
    description: "Screen flows and UI kits for Android/iOS apps.",
  },
  {
    imgSrc: "/service-inner/c3.png",
    title: "Design Sprints for MVPs",
    description: " 1-2 week design projects to validate an idea",
  },
  {
    imgSrc: "/service-inner/c1.png",
    title: "UX Improvement Audits ",
    description: "Review and fix issues on existing websites or apps.",
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
      <div className="max-w-screen pt-8 font-futuru overflow-x-hidden">
        <ServiceInnerHero
          isPopup={true}
          imageclassName="xl:w-[740px] 2xl:w-[850px] xl:right-12 2xl:right-[12%]"
          rightImage="/service-inner/s6.png"
          heading="Make Every Interaction Count"
          headingClassName="lg:max-w-[110%] 2xl:max-w-[90%]"
          para="Your Users Deserve the Best Experience. Let Us Show You How with a Free UI/UX Audit. "
          buttonText="FREE UI/UX AUDIT"
        />
        <YearsAwwards
          awwards={Awwards}
          bgImage={false}
          title="While deeply honored by industry recognition, we remain grounded in our core principles and research-driven approach"
        />
        <DigitalProducts
          leftText="Too many digital products rely on trends, not truths. We go beyond the surface every pixel, flow, and feature is grounded in real user research and rigorous testing. No more wasted effort on what “might” work. We validate, refine, and build experiences that solve real problems and drive measurable growth."
          mainHeading="Crafting Experiences with a 360° Lens Research Backed Digital Products"
          highlightWords={["360° Lens"]}
          buttonText="LET'S TALK"
        />
        <ScrollCardsSection
          cardsData={cards}
          heading="Turning Complex Data Into <span style='color: #00AA71'>Seamless User Experiences</span>"
          headingClassName="max-w-[80%]"
          text="Behind every pixel lies powerful data driving engagement, satisfaction, and retention. We don’t just design. We engineer intuitive journeys proven to boost user metrics and business growth. "
        />
        <SolutionCarousel />
        <NewGreen
          isPopupOpen={true}
          text="Get Data-Driven <span style='color: #00AA71'>UX Insights</span> Start Your Free Audit Today! "
          bg={false}
          buttonText="Book your Free audit"
        />
        <ServicesOffer services={defaultServices} />
        <TechStackCarousel />
        <NewOurProcess steps={steps8} />
        <NewGreen
          isPopupOpen={true}
          text="Your Users Deserve the Best Experience. Let Us Show You How with a Free UI/UX Audit. "
          buttonText="Book your Free audit"
        />
        <NewFaqs faqs={faqItems} />
        <BigIdeas />
        <ContactForm />
      </div>
    </>
  );
}

export default page;
