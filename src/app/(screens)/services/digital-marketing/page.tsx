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
import { steps4 } from "@/data/our-process";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Digital Marketing Services in Canada | AI-Driven Growth ",
  description:
    "Transform your brand with expert digital marketing services in Canada. We specialize in AI-powered SEO, performance PPC, and user-centric web design. Get a free audit!",
};

const defaultServices: Service[] = [
  {
    imgSrc: "/service-inner/c5.png",
    title: "Full-Funnel Growth Campaigns",
    description:
      " From awareness to conversion and retention, we build integrated strategies for paid, organic, and email in a single funnel.",
  },
  {
    imgSrc: "/service-inner/c3.png",
    title: "Performance Marketing",
    description: "ROI-focused ad campaigns for Google, Meta, TikTok, etc.",
  },
  {
    imgSrc: "/service-inner/c4.png",
    title: "Lead Generation Campaigns",
    description: "B2B/B2C lead magnets, gated content, forms, paid social lead campaigns, and flows.",
  },
  {
    imgSrc: "/service-inner/c3.png",
    title: "Email & Retention Marketing",
    description: "Lifecycle emails, abandoned cart flows, welcome sequences , newsletters.",
  },
  {
    imgSrc: "/service-inner/c1.png",
    title: "GBP Marketing & Local Visibility",
    description: " Drive foot traffic and calls through Google Maps.",
  },
];

const cards = [
  {
    id: "01",
    title: "90%",
    description: "Identify 90% of Campaign Gaps Limiting Performance ",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    id: "02",
    title: "50%",
    description: "Boost Click-Through Rates by Up to 50% ",
    bgColor: "bg-[#00AA71]",
    textColor: "text-white",
  },
  {
    id: "03",
    title: "30%",
    description: "Lower cost per lead by 30% with smarter targetting",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    id: "04",
    title: "3X",
    description: "Increase conversions by 3X through data-driven strategies",
    bgColor: "bg-[#00AA71]",
    textColor: "text-white",
  },
];

const faqItems: { question: string; answer: string }[] = [
  {
    question: "What exactly is a digital marketing service?",
    answer: `A digital marketing service is a professional strategy used to reach your customers through online channels. At Xntric, this includes everything from appearing at the top of Google searches (SEO) and running targeted social media ads, to creating high-converting websites that turn Canadian browsers into buyers.`,
  },
  {
    question:
      "How do I identify a successful digital marketing agency?",
    answer: `A great agency doesn't just promise "likes" they promise growth. Look for Clear reporting on lead costs and conversions, An understanding of the Canadian consumer landscape, They don't offer "cookie-cutter" packages but instead build a strategy around your specific business goals.
`,
  },
  {
    question:
      "Would my business actually benefit from digital marketing?",
    answer:
      "If your customers use a smartphone or a computer to find services, the answer is yes. Whether you are a local service provider in Ontario or a national B2B firm, digital marketing allows you to target specific demographics, track every dollar spent, and compete with much larger companies on a level playing field.",
  },
  {
    question:
      "What are the most effective types of digital marketing for Canadian businesses?",
    answer:
      "While there are many methods, we focus on the the most ROI in the North American market like Search Engine Optimization, Pay-Per-Click, Social Media Marketing, Content & Email Marketing ",
  },
  {
    question: "How long does it take to see results from these services?",
    answer:
      "It depends on the service. Paid Ads (PPC) can generate leads within 24 to 48 hours of launching. SEO and Organic Social are long-term investments that typically show significant momentum within 3 to 6 months. We provide a roadmap so you know exactly when to expect a return on your investment.",
  },
  {
    question:
      "Can digital marketing help with local lead generation?",
    answer:
      "Absolutely. We specialize in Local SEO and Geo-targeted Ads. This means we can ensure your business shows up specifically for people in your city or province (e.g., 'Digital Marketing Toronto' or 'Best Plumber in Vancouver'), ensuring you don't waste your budget on audiences that can't visit your location.",
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
        <h1 className="hidden">Our Digital Marketing Services in Canada</h1>
        <ServiceInnerHero
          imageclassName="xl:w-[700px] 2xl:w-[1000px] xl:right-5 2xl:right-[10%]"
          rightImage="/service-inner/s5.png"
          heading="Cut Through the Digital Noise"
          headingClassName="lg:max-w-[100%] 2xl:max-w-[80%]"
          para="Get Ahead with Data-Driven Marketing. Claim Your Free Consultation Today! "
          buttonText="Free Consultation Today! "
        />
        <YearsAwwards
          awwards={Awwards}
          bgImage={false}
          title="While deeply honored by industry recognition, we remain grounded in our core principles and research-driven approach"
        />
        <DigitalProducts
          leftText="Xntric combines data & analytics, creativity, and technology to break through the clutter of today's digital marketing landscape and drive business growth. As a full-service Digital Marketing Agency Canada, we scale your campaigns and maximize ROI across every channel."
          mainHeading="Marketing That Moves Beyond the Surface A 360° Strategy Backed by Research and Results"
          highlightWords={["360° Strategy Backed"]}
        />
        <ScrollCardsSection
          heading=" <span> Transform insights into style='color: #00AA71'>Competitive</span> Advantage"
          text="By uncovering performance gaps, improving targeting, and identifying opportunities for optimization through a data-first approach, we drive scalable, measurable business growth that increases click-through rates by up to 50%, lowers the cost per lead by 30%, and delivers up to 3X more conversions."
          headingClassName="max-w-[90%] tracking-wide"
          cardsData={cards}
        />
        <SolutionCarousel />
        <NewGreen
          bg={false}
          text="Navigate the <span style='color: #00AA71'>Digital Maze</span> with Precision"
          buttonText="Book your consultation"
        />
        <ServicesOffer services={defaultServices} heading={"Our Core Digital Marketing Services"} />
        <TechStackCarousel />
        <NewOurProcess steps={steps4} />
        <NewGreen
          text="Rise Above the Noise. Lead with Strategy."
          buttonText="let's talk"
        />
        <NewFaqs faqs={faqItems} />
        <BigIdeas line={false} />
        <ContactForm />
      </div>
    </>
  );
}

export default page;
