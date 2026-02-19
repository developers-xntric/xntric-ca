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
  title: "UI UX Design Services in Canada for Digital Products",
  description:
    "Elevate your digital presence with expert UI UX design services in Canada. Xntric delivers high-conversion, user-centric interfaces. Start your project today!",
};

const faqItems: { question: string; answer: string }[] = [
  {
    question: "How do you handle designs for Canada’s bilingual audience?",
    answer: `We offer a strategic approach to bilingual design, primarily focusing on English and French user interfaces. This includes accommodating differences in content length (French content often requires more space), ensuring accurate translation and localization of interface elements, and maintaining visual consistency across both language versions within the user experience (UX) and user interface (UI).`,
  },
  {
    question:
      "Do you work with startups in Canada?",
    answer: `Absolutely. We have specialized services, including Design Sprints for MVPs and foundational UI/UX design services, tailored specifically to help Canadian startups validate their concepts quickly, attract early investment, and launch with a strong, user-centric product.`,
  },
  {
    question:
      "What industries do you serve in Canada?",
    answer:
      "We serve a wide range of industries including FinTech, HealthTech, E-commerce, SaaS platforms, and enterprise solutions. Our research-driven approach is sector-agnostic, allowing us to quickly adapt and apply best practices regardless of the specific Canadian market segment.",
  },
  {
    question: "How much does a UI/UX design project cost in Canada?",
    answer:
      "Project costs are highly dependent on scope, complexity, and timeline. Factors include the number of unique screens, the need for custom illustrations, user research depth, and whether we are designing an app, website, or enterprise dashboard. We provide a detailed proposal after a discovery session to give clients a clear, fixed price estimate.",
  },
  {
    question:
      "What industries do you specialize in?",
    answer:
      "While we are equipped to serve all industries, we have deep specialization in designing for highly regulated sectors like FinTech (due to complex compliance needs) and B2B SaaS (due to the high demand for usable, efficient dashboards and complex workflow management).",
  },
  {
    question: "Do you offer bilingual designs?",
    answer:
      "Yes, offering bilingual design (English and French, and other languages upon request) is a core aspect of serving the Canadian market effectively. We ensure all design components, including microcopy and navigation, are culturally appropriate and functionally sound in both official languages.",
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
    title: "Product Design for SaaS & Dashboards",
    description: "We design high-utility interfaces for complex software, CRMs, and internal tools.",
  },
  {
    imgSrc: "/service-inner/c3.png",
    title: "Website UX & Conversion Design ",
    description: "We create high-performance landing pages and marketing sites. Our team optimizes every element to maximize conversion rates ",
  },
  {
    imgSrc: "/service-inner/c4.png",
    title: "Mobile App UX Design",
    description: "We deliver comprehensive screen flows, interaction models, and UI kits for Android/iOS apps.",
  },
  {
    imgSrc: "/service-inner/c3.png",
    title: "Design Sprints for MVPs",
    description: " Need fast validation? We run 1-2 week design projects to rapidly prototype and test (MVPs),",
  },
  {
    imgSrc: "/service-inner/c1.png",
    title: "UX Improvement Audits ",
    description: "Review and fix costly usability issues on existing websites or apps.",
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
        <h1 className="hidden">UI/UX Design Services in Canada</h1>
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
          leftText="We validate, refine, and build experiences that solve real problems and drive measurable growth for products in Canada and globally. Behind every pixel lies powerful data driving engagement, satisfaction, and retention. We don’t just design. We engineer intuitive journeys proven to boost user metrics and business growth."
          mainHeading="The 360° Advantage: Our Research-Backed Design Methodology"
          highlightWords={["360° Advantage:"]}
          buttonText="LET'S TALK"
        />
        <ScrollCardsSection
          cardsData={cards}
          heading="From Raw Data to <span style='color: #00AA71'>Seamless User Journeys</span>"
          headingClassName="max-w-[80%]"
          text="Forget guesswork. Behind every pixel we create is powerful, strategic data driving performance. We are a UX UI Design agency Canada that translates complex metrics into clear, intuitive user experiences. We optimize every flow to guarantee higher engagement, satisfaction, and measurable growth specifically within the Canadian market."
        />
        <SolutionCarousel  para="We say yes to each project with a holistic mindset combining creative thinking, human-centered design, and technical excellence, the essential pillars of any great UI UX design company in Canada." />
        <NewGreen
          isPopupOpen={true}
          text="Claim Your Free, Zero-Obligation UX Audit Right Away! "
          bg={false}
          buttonText="Book your Free audit"
        />
        <ServicesOffer services={defaultServices} subtext="From frontend finesse to backend brains, we provide end-to-end ui ux design services to build robust, secure, and scalable digital products tailored for Canadian enterprises and startups." />
        <TechStackCarousel />
        <NewOurProcess steps={steps8} />
        <NewGreen
          isPopupOpen={true}
          text="Maximize Conversions. Get Your Free Audit "
          buttonText="Book your Free audit"
        />
        <NewFaqs faqs={faqItems}  />
        <BigIdeas mainText="Ready to Launch Your Next Big Idea in Canada?" />
        <ContactForm  />
      </div>
    </>
  );
}

export default page;
