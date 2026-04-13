import TechStackCarousel from "@/components/services/techstacks";
import BigIdeas from "@/components/common/big-ideas";
import ContactForm from "@/components/common/contact-form";
import SolutionCarousel from "@/components/common/solution-carousel";
import YearsAwwards from "@/components/common/YearsAwwards";
import DigitalProducts from "@/components/service-inner/digital-production";
import ServiceInnerHero from "@/components/service-inner/hero";
import NewGreen from "@/components/service-inner/new-green";
import ServicesOffer from "@/components/service-inner/service-offer";
import ScrollCardsSection from "@/components/services/form-market";
import { Awwards } from "@/data/awwards";
import { steps } from "@/data/our-process";
import { faqItems } from "@/data/service-inner-faqs";
import NewOurProcess from "@/components/services/new-our-process";
import NewFaqs from "@/components/services/new-faqs";
import { Metadata } from "next";
import Script from "next/script";
export const metadata: Metadata = {
  title: "Website Development Services in Canada | Custom Web Design",
  description:
    "Leading website development services in Canada. We build fast, accessible, and high-converting websites tailored to grow your business. Get a free quote today! ",
  alternates: {
    canonical: "https://xntric.ca/services/website-development",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "name": "Professional Web Development Services in Canada",
      "url": "https://xntric.ca/services/website-development",
      "image": "https://xntric.ca/HomePage/X-Logo.png",
      "description": "Leading website development services in Canada. We build fast, accessible, and high-converting websites tailored to grow your business. Get a free quote today!",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3895 Manatee way, Mississauga, Ontario L5M6P7 Canada",
        "addressLocality": "Ontario",
        "addressCountry": "Canada"
      },
      "telephone": "+1 437 830 7059",
      "priceRange": "$ 500 - $ 5000",
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
          "name": "Website Development",
          "item": "https://xntric.ca/services/website-development"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How big is your web development company?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We’re a full-scale website development agency with a diverse team of designers, developers, and digital strategists delivering projects across Canada and beyond."
          }
        },
        {
          "@type": "Question",
          "name": "How do wireframing and prototyping enhance the UI/UX design process?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Prototyping and wireframing provide much of the basis for the user experience design process. Prototypes provide interactive elements to designs produced from wireframes, therefore illustrating the structure of the product. Participating in this process enables stakeholders to see the final result and verify if the design satisfies user expectations before to start of development."
          }
        },
        {
          "@type": "Question",
          "name": "What is your website development process like?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our headquarters are in Canada, but we also collaborate with clients worldwide, including the UAE and Europe."
          }
        },
        {
          "@type": "Question",
          "name": "How much does a website cost in Toronto?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost varies depending on project scope. A simple website may start around CAD 2,000, while custom and eCommerce projects can go higher."
          }
        },
        {
          "@type": "Question",
          "name": "What eCommerce development platforms do you work with?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We specialize in Shopify, WooCommerce, Magento, and custom PHP-based platforms."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer website maintenance plans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer tailored maintenance plans to ensure your website remains updated, secure, and optimized."
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
      <div className="max-w-screen pt-8 overflow-x-hidden font-futuru font-semibold">
        <h1 className="hidden">Website Development Services in Canada We Offer</h1>
        <ServiceInnerHero
          isPopup={true}
          imageclassName="xl:w-[700px] 2xl:w-[1150px] xl:right-5 2xl:right-[23%]"
          rightImage="/service-inner/service-web-hero.svg"
          heading="Concept to Code, Built for growth, AND results"
          headingClassName="xl:w-[100%] 2xl:w-[80%]"
          para="Your Roadmap to Success Starts Here"
          bottomParagraph=""
          buttonText="Free Audit"
        />
        <YearsAwwards
          awwards={Awwards}
          bgImage={false}
          title="Partner with a website development company in Canada that blends creativity with technology. Contact us today to start your next digital project."
        />
        <DigitalProducts leftText="We don’t just build, we maintain. Ensure long-term performance and security with our maintenance plans. As a top website development company in Canada, we build custom, scalable, and high-performing websites that help businesses grow online. From corporate to eCommerce, we turn ideas into digital success." />
        <ScrollCardsSection text="In the digital era, your website defines how the world sees your brand. As a trusted website development company in Canada, we specialize in building visually stunning, user-focused, and performance-driven websites that make an impact. Our goal is simple, to help your business stand out, connect with customers, and grow online." heading="Transform Your <span style='color: #00AA71'>Online Presence</span> with Custom Web Development " />
        <SolutionCarousel para="As an experienced website development company in Canada, our focus is on building responsive, secure, and scalable websites tailored to your unique goals. 
" />
        <NewGreen
          isPopupOpen={true}
          bg={false}
          text='Where Innovation Meets <span style="color: #00AA71">Research-Driven</span> Development'
        />
        <ServicesOffer heading={"Custom Website Development Services"} subtext="Your business deserves a website that reflects your unique identity. Our website development services go beyond templates, we build from the ground up. Each website is developed with precision, keeping user experience, speed, and performance at its core.
" />
        <TechStackCarousel />
        <NewOurProcess steps={steps} para="We believe in a transparent and collaborative process that ensures clarity, creativity, and success at every stage." />
        <NewGreen isPopupOpen={true} />
        <NewFaqs faqs={faqItems} />
        <BigIdeas line={false} mainText="Let’s Build Your Digital Future" />
        <ContactForm />
      </div>
    </>
  );
}

export default page;
