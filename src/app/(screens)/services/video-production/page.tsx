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
  title: "Video Production Services Canada | High-Impact Brand Films",
  description:
    "Scale your brand with expert video production services in Canada. We specialize in high-ROI social content, corporate films, and AI-powered video editing.",
  alternates: {
    canonical: "https://xntric.ca/services/video-production",
  },
};

const faqItems: { question: string; answer: string }[] = [
  {
    question: "What does full-service video production include?",
    answer: `We handle the entire journey from concept to delivery. This includes "The Creative Stuff" (scripting, storyboarding, and strategy), "The Production" (filming with professional crews, lighting, and sound), and "Post-Production" (editing, color grading, and sound design). You bring the goal; we bring the finished film.`,
  },
  {
    question:
      "How much does it cost to produce a video in Canada?",
    answer: `Video costs vary based on complexity, but most professional Canadian corporate projects range between $5,000 and $20,000. Short Social Clips: $2,500 – $5,000 Brand Films/Corporate Videos: $10,000 – $25,000 We provide transparent, fixed-price quotes so there are no "hidden fees" for gear or travel once the project starts.`,
  },
  {
    question:
      "How long does the production process actually take?",
    answer:
      "A typical project takes 4 to 8 weeks. Phase 1(Pre- pro): 1–2 weeks for scripting and planning. Phase 2(Production): 1–3 days of actual filming. Phase 3(Post - pro): 2–4 weeks for editing and revisions.Need it faster ? We offer 'Rush Delivery' options for time - sensitive launches.",
  },
  {
    question: "What if I need to make changes? How many revisions are included?",
    answer:
      "We want you to love the final result. Our standard contracts include two rounds of major revisions at the editing stage. This allows you to give feedback on the flow, music, and text to ensure the final version perfectly aligns with your brand.",
  },
  {
    question:
      "Do you help with scriptwriting and creative ideas?",
    answer:
      "Yes! Most of our clients come to us with a problem, not a script. We specialize in creative strategy helping you find the right story to tell, writing the script, and planning the visuals so your video actually converts viewers into customers.",
  },
  {
    question: "Can I see your previous work or talk to a past client?",
    answer:
      "Absolutely. We take pride in our portfolio. You can view our latest Canadian showreel and case studies directly on our 'Work' page. We can also provide industry-specific references from past clients upon request to give you peace of mind.",
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
    description: "Creating stunning new lifestyle, flat lay, and editorial imagery for eCommerce",
  },
  {
    imgSrc: "/service-inner/c1.png",
    title: "Motion Graphics & Explainers",
    description: "An animation-based form of storytelling to simplify complex ideas.",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "name": "Professional Video Production Services in Canada",
      "url": "https://xntric.ca/services/video-production",
      "image": "https://xntric.ca/HomePage/X-Logo.png",
      "description": "Scale your brand with expert video production services in Canada. We specialize in high-ROI social content, corporate films, and AI-powered video editing.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3895 Manatee way, Mississauga, Ontario L5M6P7 Canada",
        "addressLocality": "Ontario",
        "addressCountry": "Canada"
      },
      "telephone": "+1 437 860 1095",
      "priceRange": "$ 500 - $ 10000",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "42",
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
          "name": "Video Production",
          "item": "https://xntric.ca/services/video-production"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does full-service video production include?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We handle the entire journey from concept to delivery. This includes The Creative Stuff (scripting, storyboarding, and strategy), The Production (filming with professional crews, lighting, and sound), and Post-Production (editing, color grading, and sound design). You bring the goal; we bring the finished film."
          }
        },
        {
          "@type": "Question",
          "name": "How much does it cost to produce a video in Canada?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Video costs vary based on complexity, but most professional Canadian corporate projects range between $5,000 and $20,000. Short Social Clips: $2,500 – $5,000 Brand Films/Corporate Videos: $10,000 – $25,000 We provide transparent, fixed-price quotes so there are no hidden fees for gear or travel once the project starts."
          }
        },
        {
          "@type": "Question",
          "name": "How long does the production process actually take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A typical project takes 4 to 8 weeks. Phase 1(Pre- pro): 1–2 weeks for scripting and planning. Phase 2(Production): 1–3 days of actual filming. Phase 3(Post - pro): 2–4 weeks for editing and revisions.Need it faster ? We offer 'Rush Delivery' options for time - sensitive launches."
          }
        },
        {
          "@type": "Question",
          "name": "What if I need to make changes? How many revisions are included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We want you to love the final result. Our standard contracts include two rounds of major revisions at the editing stage. This allows you to give feedback on the flow, music, and text to ensure the final version perfectly aligns with your brand."
          }
        },
        {
          "@type": "Question",
          "name": "Do you help with scriptwriting and creative ideas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Most of our clients come to us with a problem, not a script. We specialize in creative strategy helping you find the right story to tell, writing the script, and planning the visuals so your video actually converts viewers into customers."
          }
        },
        {
          "@type": "Question",
          "name": "Can I see your previous work or talk to a past client?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We take pride in our portfolio. You can view our latest Canadian showreel and case studies directly on our 'Work' page. We can also provide industry-specific references from past clients upon request to give you peace of mind."          }
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
        <h1 className="hidden">Our Video Production Services in Canada</h1>
        <ServiceInnerHero
          imageclassName="xl:w-[740px] 2xl:w-[1150px] xl:right-12 2xl:right-[23%]"
          rightImage="/service-inner/s7.png"
          heading="Stories That Move Audiences "
          para="Ready to produce a TVC that commands attention and drives impact?"
          headingClassName="lg:max-w-[80%] 2xl:max-w-[60%]"
          buttonText="Book Your Consultation Today."
        />
        <YearsAwwards
          awwards={Awwards}
          bgImage={false}
          title="While deeply honored by industry recognition, we remain grounded in our core principles and research-driven approach"
        />
        <DigitalProducts
          leftText="We combine research, storytelling, and performance strategy to create videos that communicate with the heart and drive business outcomes. Every frame counts. Every message is calculated."
          mainHeading="Video Production Beyond the Frame A 360° Process Built for Powerful Storytelling"
          buttonText="LET'S TALK"
          highlightWords={["Powerful Storytelling"]}
        />
        <ScrollCardsSection
          heading="Where Data <span style='color: #00AA71'>DRIVES</span> Every Frame"
          text="Our videos don't just inform; they have a measurable impact. Our data-driven approach to marketing means that we keep your content optimized across every social platform, allowing for 95% client satisfaction and 25% more brand reach."
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
