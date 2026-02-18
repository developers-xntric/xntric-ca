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
  title: "SEO Services in Canada | Rank on Google & AI Engines",
  description:
    "Drive growth with performance-led SEO services in Canada. We optimize for traditional search & AI overviews to increase your visibility and ROI. Get a free audit!",
};
const faqItems: { question: string; answer: string }[] = [
  {
    question: "What is an SEO service and what does SEO actually do?",
    answer: `An SEO service is a professional offering that helps businesses improve their visibility in organic (non-paid) search engine results pages (SERPs). SEO actually does two main things: it makes your website easily discoverable and intelligible to search engine bots (like Googlebot), and it ensures the content is relevant and high-quality for human users, driving targeted traffic to your site.`,
  },
  {
    question:
      "What are the three types of SEO services?",
    answer: `The three primary types of seo services are: 1. Technical SEO, 2. On-Page SEO, 3. Off-Page SEO`,
  },
  {
    question:
      "How does SEO increase traffic and conversion?",
    answer:
      "SEO increases traffic by improving your website's ranking for relevant keywords, meaning more users see your link and click on it. It increases conversion by ensuring the traffic you receive is highly qualified (users searching specifically for your product/service) and by optimizing the landing pages for user experience (UX) to guide them toward a desired action (e.g., purchase, inquiry).",
  },
  {
    question: "How Does SEO Help Your Business?",
    answer:
      "SEO is one of the most cost-effective and sustainable digital marketing channels. It helps your business by: increasing brand awareness and authority, generating higher quality leads, reducing reliance on paid advertising, and establishing long-term organic growth.",
  },
  {
    question:
      "How much do SEO services typically cost? / How much does SEO cost in Canada? / How much does it cost for SEO services in Canada?",
    answer:
      "The cost for SEO services in Canada varies widely based on the scope, scale, and competitiveness of your industry. Packages can range from $500 CAD per month for basic local optimization to $5,000+ CAD per month for enterprise-level or highly competitive national campaigns. We offer custom pricing after a free initial audit to ensure you only pay for the services your business truly needs.",
  },
  {
    question: "How soon can I see results for SEO services in Canada?",
    answer:
      "SEO is a marathon, not a sprint. While technical and on-page fixes can show improvement in rankings within 4–8 weeks, meaningful, sustained results like significant traffic increases and higher-value keyword rankings typically take 4 to 6 months or longer. Our long-term strategies deliver lasting growth.",
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
    title: "Technical SEO Projects",
    description: "This focuses on the foundation of your website.",
  },
  {
    imgSrc: "/service-inner/c3.png",
    title: "On-Page SEO and Content-Driven Strategy",
    description:
      "This is where we directly influence what search engines see.",
  },
  {
    imgSrc: "/service-inner/c4.png",
    title: "Local SEO Agency & GBP Management",
    description: "We manage your Google Business Profile (GBP), ensure consistent NAP (Name, Address, Phone number) data across the web",
  },
  {
    imgSrc: "/service-inner/c3.png",
    title: "Enterprise & eCommerce SEO",
    description: "We manage large-scale SEO campaigns across multiple domains or regions.",
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
          para="Are you searching for reliable and results-oriented seo services in Canada? You've found the solution."
        />
        <YearsAwwards
          awwards={Awwards}
          bgImage={false}
          title="Partner with our leading seo agency in canada and experience measurable growth. Stop guessing and start growing with the best seo services in canada available."
        />
        <DigitalProducts
          leftText="In a crowded online space, partnering with a specialized seo company canada is the critical factor that determines your success. We analyze, strategize, and execute based on deep data insights to deliver SEO ."
          mainHeading="Technical SEO Projects for Foundational Strength"
          highlightWords={["SEO Projects"]}
        />
        <ScrollCardsSection
          heading="Why Choose Our SEO <span style='color:#00AA71;'>Company Canada Experts?</span>"
          headingClassName="max-w-[80%] tracking-wide"
          text="As a leading seo company in Canada, we offer transparent reporting and focus purely on high-ROI activities, differentiating us from other seo agencies in Canada. See the difference an intelligent, results-oriented seo service partnership can make."
          cardsData={cards}
        />
        <SolutionCarousel para="We are recognized as a leading seo agency in Canada because we fuse advanced analytics with ethical, forward-thinking execution. Our commitment is to build strategies that withstand Google's frequent algorithm updates, ensuring your investment yields long-term, compounding results. This dedication to durable growth is why clients trust us as the best seo company in Canada." />
        <NewGreen
          isPopupOpen={true}
          bg={false}
          text="Build a Strong <span style='color: #00AA71'>Online Foundation</span>. Book Your Free SEO Audit"
        />
        <ServicesOffer services={defaultServices} subtext="Our comprehensive suite of seo service in Canada covers the three main pillars of search engine optimization: Technical, On-Page, and Off-Page." />
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
