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
import { steps3 } from "@/data/our-process";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Branding Services in Canada | Strategic Brand Identity ",
  description:
    "Elevate your business with the leading branding services in Canada. From logo design to full brand strategy, we build identities that drive growth and loyalty.",
  alternates: {
    canonical: "https://xntric.ca/services/branding",
  },
};
const faqItems: { question: string; answer: string }[] = [
  {
    question: "How much does branding cost in Canada?",
    answer: `Branding costs in Canada vary widely depending on the project's scope. A foundational identity project (logo, color, typography) for a startup might range from $5,000 to $15,000. A full-scale project involving deep market research, verbal strategy, and comprehensive brand guidelines for a mid-sized company often falls between $25,000 and $75,000+.`,
  },
  {
    question:
      "What are the branding agencies in Canada?",
    answer: `The landscape of branding companies in Canada includes boutique design studios, large integrated marketing firms, and specialized strategy agencies. Xntric falls into the specialized strategy category, focusing on data-driven design and measurable business results over pure creative volume.`,
  },
  {
    question:
      "How to choose a branding agency in Canada?",
    answer:
      "To choose the right agency, look for three things: A Proven Process (Do they prioritize research?) Relevant Portfolio (Have they succeeded in a similar challenge?) Cultural Fit (Do they understand the nuances of the Canadian market?). Price should be secondary to the quality of the strategic process.",
  },
  {
    question: "What is your agency's step-by-step branding process?",
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
    question: "How long does a typical full-scale branding project take?",
    answer:
      "A typical, full-scale branding project usually takes between 8 to 14 weeks. This timeline accounts for crucial phases like market research (4 weeks), concept exploration and client feedback (4 weeks), and final asset creation/governance documentation (2-4 weeks).",
  },
];
const cards = [
  {
    id: "01",
    title: "80%",
    description: "Identify 80% of Brand Gaps Holding You Back",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    id: "02",
    title: "2X",
    description: "Strengthen Brand Identity for 2x Higher Recall.",
    bgColor: "bg-[#00AA71]",
    textColor: "text-white",
  },
  {
    id: "03",
    title: "60%",
    description: "Build trust and boost perception by 60%",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    id: "04",
    title: "3X",
    description: "Increase Engagement and Loyalty upto 3X",
    bgColor: "bg-[#00AA71]",
    textColor: "text-white",
  },
];

const defaultServices: Service[] = [
  {
    imgSrc: "/service-inner/c5.png",
    title: "Corporate Branding",
    description:
      "For businesses building trust and recognition at a company level, focusing on mission, vision, and core values to attract top talent and enterprise clients. ",
  },
  {
    imgSrc: "/service-inner/c3.png",
    title: "Startup & Product Branding ",
    description: "For new businesses or product launches needing an identity that cuts through the noise. We build memorable names, visual identities, and launch strategies.",
  },
  {
    imgSrc: "/service-inner/c4.png",
    title: "Personal Branding for Leaders",
    description: "We help executives and founders craft a compelling personal branding narrative that enhances their professional reputation and reinforces the company's vision. We understand the specific needs of personal branding Canada professionals face.",
  },
  {
    imgSrc: "/service-inner/c3.png",
    title: "Event & Campaign Branding",
    description: "For short-term activations or one-off events that require a memorable, high-impact temporary visual and messaging identity.",
  },
  {
    imgSrc: "/service-inner/c1.png",
    title: "Brand Systems & Guidelines",
    description: "For scaling teams or partner branding companies in Canada requiring clear, comprehensive brand books, asset libraries, and guidelines to ensure consistent design implementation across all platforms. ",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "name": "Professional Branding & Visual Identity Services in Canada",
      "url": "https://xntric.ca/services/branding",
      "image": "https://xntric.ca/HomePage/X-Logo.png",
      "description": "Elevate your business with the leading branding services in Canada. From logo design to full brand strategy, we build identities that drive growth and loyalty.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3895 Manatee way, Mississauga, Ontario L5M6P7 Canada",
        "addressLocality": "Ontario",
        "addressCountry": "Canada"
      },
      "telephone": "+1 437 830 7059",
      "priceRange": "$ 1000 - $ 10000",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "46",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://xntric.ca"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://xntric.ca/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Branding",
          "item": "https://xntric.ca/services/branding"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does branding cost in Canada?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Branding costs in Canada vary widely depending on the project's scope. A foundational identity project (logo, color, typography) for a startup might range from $5,000 to $15,000. A full-scale project involving deep market research, verbal strategy, and comprehensive brand guidelines for a mid-sized company often falls between $25,000 and $75,000+."
          }
        },
        {
          "@type": "Question",
          "name": "What are the branding agencies in Canada?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The landscape of branding companies in Canada includes boutique design studios, large integrated marketing firms, and specialized strategy agencies. Xntric falls into the specialized strategy category, focusing on data-driven design and measurable business results over pure creative volume."
          }
        },
        {
          "@type": "Question",
          "name": "How to choose a branding agency in Canada?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To choose the right agency, look for three things: A Proven Process (Do they prioritize research?) Relevant Portfolio (Have they succeeded in a similar challenge?) Cultural Fit (Do they understand the nuances of the Canadian market?). Price should be secondary to the quality of the strategic process."
          }
        },
        {
          "@type": "Question",
          "name": "What is your agency's step-by-step branding process?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Whether the screen of any device is little or large, responsive web design will make your site seem fantastic. An integral component of user interface and user experience design services, this approach guarantees consistent appearance and operation across all devices, therefore enhancing the users experience."
          }
        },
        {
          "@type": "Question",
          "name": "What is a design system audit, and why is it essential for consistent branding?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Design system audits of all your present design components help to ensure excellent brand recognition and usability. It looks for issues, streamlines procedures, and helps to maintain the visual language of your digital assets consistent—all of which are crucial for credibility and acknowledgement."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a typical full-scale branding project take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A typical, full-scale branding project usually takes between 8 to 14 weeks. This timeline accounts for crucial phases like market research (4 weeks), concept exploration and client feedback (4 weeks), and final asset creation/governance documentation (2-4 weeks)."
          }
        }
      ]
    }
  ]
}


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
        <h1 className="hidden">Our Branding Services in Canada </h1>
        <ServiceInnerHero
          imageclassName="xl:w-[700px] 2xl:w-[1150px] xl:right-5 2xl:right-[23%]"
          rightImage="/service-inner/branding.png"
          heading="Stand Out by Speaking Directly"
          headingClassName="lg:max-w-[90%] 2xl:max-w-[65%]"
          para="The Strategic Branding Agency in Canada That Connects and Converts"
        />
        <YearsAwwards
          awwards={Awwards}
          bgImage={false}
          title="While deeply honored by industry recognition, we remain grounded in our core principles and a research-driven approach."
        />
        <DigitalProducts
          isWidth={true}
          leftText="Most brands miss critical gaps that hold them back from true impact. We identify these brand blind spots and leverage them to unlock breakthroughs. We don't guess; we measure the impact of identity and strategy. We approach each project with a holistic mindset, combining creative thinking, human-centered design, and strategic market knowledge."
          mainHeading="360° Branding That Speaks, Connects, and Converts"
          highlightWords={["Speaks, Connects"]}
        />
        <ScrollCardsSection
          heading="Comprehensive <span style='color:#00AA71'>Branding Services</span> in Canada "
          headingClassName="max-w-[75%] tracking-wide"
          text="From foundational strategy to final asset creation, we provide a full suite of branding services in Canada to ensure your identity is built for longevity and impact.  Our dedication to client success makes us the best branding agency in Canada for businesses ready to scale."
          cardsData={cards}
        />
        <SolutionCarousel />
        <NewGreen
          bg={false}
          text="Build an Unforgettable Brand That <span style='color: #00AA71'>Dominates</span> Your Category  "
          buttonText="Book your Consultation"
        />
        <ServicesOffer services={defaultServices} />
        <TechStackCarousel />
        <NewOurProcess steps={steps3} />
        <NewGreen
          text="Forge an Identity That Connects Deeply and Converts Consistently"
          buttonText="Lets talk"
        />
        <NewFaqs faqs={faqItems} />
        <BigIdeas line={false} />
        <ContactForm />
      </div>
    </>
  );
}

export default page;
