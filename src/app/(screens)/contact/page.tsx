import BlogHeader from "@/components/blog/blog-header";
import Section1 from "@/components/contact/Section1";
import { Metadata } from "next";
import Script from "next/script";
export const metadata: Metadata = {
  title: "Contact Xntric – Let’s Build Something Great",
  description: "Contact Xntric to discuss your next big idea and explore creative, data-driven strategies designed to help your business grow faster.", alternates: {
    canonical: "https://xntric.ca/contact",
  },
};



const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://xntric.ca/contact/#webpage",
      "url": "https://xntric.ca/contact",
      "name": "Contact Xntric | Get a Free Digital Marketing Consultation",
      "description": "Contact Xntric to discuss your next big idea and explore creative, data-driven strategies designed to help your business grow faster.",
      "isPartOf": {
        "@id": "https://xntric.ca/#website"
      },
      "mainEntity": {
        "@id": "https://xntric.ca/#organization"
      },
      "breadcrumb": {
        "@id": "https://xntric.ca/contact/#breadcrumb"
      }
    },
    {
      "@type": "LocalBusiness",
      "name": "Xntric",
      "image": "https://xntric.ca/HomePage/X-Logo.png",
      "telephone": "+1 437 830 7059",
      "email": "info@xntric.ca",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3895 Manatee way, Mississauga, Ontario L5M6P7 Canada",
        "addressLocality": "Ontario",
        "addressCountry": "Canada"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.0315",
        "longitude": "55.1903"
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
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://xntric.ca/contact/#breadcrumb",
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
          "name": "Contact Us",
          "item": "https://xntric.ca/contact"
        }
      ]
    }
  ]
}




const Contact: React.FC = () => {
  return (
    <>
      <Script
        id="schema-script"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="w-screen p-3 md:p-4 rounded-[10px]">
        <BlogHeader
          description="Get in touch with Xntric"
          title="Contact"
          videoSrc="/Blog/hero-video.webm"
        />
      </div>
      <div className="w-full mt-10 2xl:mt-20  mb-20 3xl:mb-0 bg-cover bg-top bg-no-repeat relative overflow-hidden pt-20 sm:pt-0">
        <div className="max-w-[1740px] mx-auto">
          <div className=" flex flex-col space-y-10 ">
            <Section1 />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
