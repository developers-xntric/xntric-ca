import ContactForm from "@/components/common/contact-form";
import FeaturedBlogs from "@/components/common/featured-blogs";
import SolutionCarousel from "@/components/common/solution-carousel";
import YearsAwwards from "@/components/common/YearsAwwards";
import Hero from "@/components/HomePage/Hero";
import MapSection from "@/components/HomePage/Map";
import NewServiceList from "@/components/HomePage/NewServiceList";
import Section6 from "@/components/HomePage/Section6";
import NewFaqs from "@/components/services/new-faqs";
import { Awwards } from "@/data/awwards";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Canada | Data-Driven Growth",
  description:
    " Partner with a top digital marketing agency in Canada. We scale brands through AI-powered SEO, performance PPC, and custom digital strategies. Book a free audit!",
  alternates: {
    canonical: "https://xntric.ca",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://xntric.ca/#organization",
      "name": "Xntric",
      "url": "https://xntric.ca/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://xntric.ca/HomePage/X-Logo.png",
        "width": "112",
        "height": "112"
      },
      "image": {
        "@id": "https://xntric.ca/HomePage/X-Logo.png"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1 437 860 1095",
        "contactType": "service",
        "areaServed": "CA",
        "availableLanguage": "en"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3895 Manatee way, Mississauga, Ontario L5M6P7 Canada",
        "addressLocality": "Ontario",
        "addressCountry": "Canada"
      },
      "email": "info@xntric.ca",
      "sameAs": [
        "https://www.instagram.com/xntric_global/",
        "https://www.linkedin.com/company/xntric",
        "https://www.tiktok.com/@xntric_global"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://xntric.ca/#website",
      "url": "https://xntric.ca/",
      "name": "XNTRIC CA",
      "publisher": {
        "@id": "https://xntric.ca/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://xntric.ca/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://xntric.ca/#webpage",
      "url": "https://xntric.ca/",
      "name": "Digital Marketing Agency in Canada | XNTRIC CA",
      "description": "Xntric is a leading Digital Marketing and IT company based in Ontario, Canada. We specialize in SEO, SMM, Web Development, and AI integration to help brands grow.",
      "isPartOf": {
        "@id": "https://xntric.ca/#website"
      },
      "about": {
        "@id": "https://xntric.ca/#organization"
      },
      "breadcrumb": {
        "@id": "https://xntric.ca/#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://xntric.ca/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://xntric.ca/"
        }
      ]
    },
    {
      "@type": "ProfessionalService",
      "name": "Xntric Digital Marketing Agency",
      "image": "https://xntric.ca/HomePage/X-Logo.png",
      "@id": "https://xntric.ca/",
      "url": "https://xntric.ca/",
      "telephone": "+1 437 860 1095",
      "priceRange": "$ 5000 - $ 100000",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3895 Manatee way, Mississauga, Ontario L5M6P7 Canada",
        "addressLocality": "Ontario",
        "addressCountry": "Canada"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "54"
      }
    },
    {
     "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why should Canadian businesses choose a local digital marketing agency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While digital marketing is global, the Canadian market is unique. We understand regional nuances, from bilingual requirements in Quebec to specific consumer behaviors in the GTA and Vancouver. Working with a local agency ensures your brand stays compliant with Canadian privacy laws (PIPEDA) and resonates with local culture and values."
      }
    },
    {
      "@type": "Question",
      "name": "What digital marketing services does Xntric CA offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Xntric CA provides a full suite of performance-driven services, including Search Engine Optimization (SEO) to dominate rankings, Paid Media (PPC) for high-ROI campaigns, Content & Video Marketing focused on storytelling for Gen Z and Millennials, and Web & App Development for high-conversion, accessible platforms."
      }
    },
    {
      "@type": "Question",
      "name": "How do you tailor strategies for the diverse Canadian provinces?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Canada isn't a one-size-fits-all market. We develop geo-targeted strategies that account for regional trends. Whether you are targeting the tech hubs of Toronto and Waterloo or the service-heavy markets in the Maritimes, our data-driven approach ensures your ad spend is optimized for the specific audience in each province."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to see a return on investment (ROI)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While quick wins can be achieved through Paid Ads (PPC) within weeks, sustainable growth through SEO and Organic Social typically takes 3 to 6 months. We focus on 'Show Me' marketing—providing transparent, real-time dashboards so you can track your progress from day one."
      }
    },
    {
      "@type": "Question",
      "name": "How does digital marketing actually grow my business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Digital marketing puts your brand where your customers already spend their time: online. By using targeted SEO and ads, we ensure your business appears exactly when someone is searching for your services. This leads to more website traffic, higher-quality leads, and ultimately, more sales."
      }
    },
    {
      "@type": "Question",
      "name": "Which social media platforms should my business be on?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You don't need to be everywhere. We analyze where your specific audience hangs out—whether it’s LinkedIn for professional services, Instagram/TikTok for lifestyle brands, or Facebook for local community engagement. We help you focus your energy where it will actually generate revenue."
          }
        }
      ]
    }
  ]
}


const faqItems: { question: string; answer: string }[] = [
  {
    question: "Why should Canadian businesses choose a local digital marketing agency?",
    answer: `While digital marketing is global, the Canadian market is unique. We understand the regional nuances, from the bilingual requirements in Quebec to the specific consumer behaviors in the GTA and Vancouver. Working with a local agency ensures your brand stays compliant with Canadian privacy laws (PIPEDA) and resonates with local culture and values.`,
  },
  {
    question:
      "What digital marketing services does Xntric CA offer?",
    answer: `Xntric CA provides a full suite of performance-driven services, including:
Search Engine Optimization (SEO): Dominating local and national search rankings.
Paid Media (PPC): High-ROI campaigns on Google and Social.
Content & Video Marketing: Short-form video and storytelling for Gen Z and Millennials.
Web & App Development: Building high-conversion, accessible digital platforms.
`,
  },
  {
    question:
      "How do you tailor strategies for the diverse Canadian provinces?",
    answer:
      "Canada isn't a one-size-fits-all market. We develop geo-targeted strategies that account for regional trends. Whether you are targeting the tech hubs of Toronto and Waterloo or the service-heavy markets in the Maritimes, our data-driven approach ensures your ad spend is optimized for the specific audience in each province.",
  },
  {
    question: "How long does it take to see a return on investment (ROI)?",
    answer:
      "While quick wins can be achieved through Paid Ads (PPC) within weeks, sustainable growth through SEO and Organic Social typically takes 3 to 6 months. We focus on Show Me marketing—providing transparent, real-time dashboards so you can track your progress from day one.",
  },
  {
    question:
      "How does digital marketing actually grow my business?",
    answer:
      "Digital marketing puts your brand where your customers already spend their time: online. By using targeted SEO and ads, we ensure your business appears exactly when someone is searching for your services. This leads to more website traffic, higher-quality leads, and ultimately, more sales.",
  },
  {
    question: "Which social media platforms should my business be on?",
    answer:
      "You don't need to be everywhere. We analyze where your specific audience hangs out—whether it’s LinkedIn for professional services, Instagram/TikTok for lifestyle brands, or Facebook for local community engagement. We help you focus your energy where it will actually generate revenue.",
  },
];

export default function Home() {
  return (
    <>
      <Script
        id="schema-script"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className=" overflow-hidden">
        {/* Hero Section */}
        <h1 className="hidden">Digital Marketing Agency in Canada</h1>
        <Hero />
        <YearsAwwards
          awwards={Awwards}
          bgImage={true}
          title="Our work has been acknowledged across international platforms for innovation, performance, and creative impact."
        />
        <MapSection />
        <SolutionCarousel isPadding={true} para="We understand that strategy, creativity, and technology work best when they come together as a single digital solution." />
        <Section6 />
        <NewServiceList />
        <FeaturedBlogs isHome={true} />
        <NewFaqs faqs={faqItems} />
        <ContactForm isPaddingTop={true} />
      </div>
    </>
  );
}
