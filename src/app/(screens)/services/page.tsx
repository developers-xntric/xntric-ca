import { Metadata } from "next";
import DevelopmentCard from "../../../components/services/development-card";
import {
  CardsData1,
  CardsData10,
  CardsData2,
  CardsData3,
  CardsData4,
  CardsData5,
  CardsData6,
  CardsData7,
  CardsData8,
  CardsData9,
} from "../../../data/services-card";
import Script from "next/script";
export const metadata: Metadata = {
  title: "All Services – Marketing, Branding & Development",
  description:
    "Discover Xntric’s full suite of services, from marketing and branding to app development, UI/UX, SEO, and more, tailored to your business goals.",
};

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

export default function Services() {
  return (
    <>
      <Script
        id="schema-script"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="max-w-screen overflow-hidden font-futuru">
        <section className="relative w-full  font-futuru">
          {/* Background Video Container */}
          <div className="absolute inset-0 -z-10">
            <video
              src="/service/services.webm"
              className=" lg:h-[70%] lg:w-[60%] h-full w-full object-center top-[15%] relative mx-auto object-contain lg:object-cover"
              autoPlay
              muted
              loop
            />
          </div>

          <div
            className={`relative z-10 flex h-[50vh] lg:h-screen items-center`}
          >
            <div className="2xl:max-w-[1740px] w-[90%] mx-auto px-4 space-y-8 lg:space-y-48">
              {/* 1st */}
              <div className="relative space-y-[-10px]">
                <h1 className="hidden">Your Partner for Full-Spectrum Digital Marketing Services in Canada</h1>
                <h2 className="text-4xl lg:text-7xl xl:text-[100px] 2xl:text-[90px] 5xl:text-[120px] font-bold text-white uppercase leading-10">
                  360° Digital
                </h2>
                <h2 className="text-4xl lg:text-7xl xl:text-[100px] 2xl:text-[90px] 5xl:text-[120px] font-bold text-white uppercase leading-10 relative -mt-5 ">
                  Solutions
                </h2>
              </div>
              <div className="relative top-36 left-20 lg:top-0 md:left-0 gap-8 lg:gap-16 items-center">
                <div className="flex justify-end">
                  <div className="text-4xl lg:text-7xl xl:text-[100px] 2xl:text-[90px] 5xl:text-[120px] flex items-start gap-4 font-bold text-white leading-none tracking-tight">
                    <div className="tracking-wide lg:space-y-3 relative lg:left-8">
                      <p className="relative uppercase">Backed by Research</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="lg:mt-0 md:mt-0 sm:mt-20 xl:mt-0 space-y-20 mb-40 md:mb-0 ">
          <DevelopmentCard
            href="/services/branding/"
            title="Branding"
            subHeading="FROM <span style='color: #00AA71'>MARKET INSIGHTS</span> TO MEANINGFUL BRANDS"
            description="Strong brands are discovered, not designed. Our digital marketing services in Canada deliver brand strategy that connects your identity to your audience's psychology and the competitive landscape."
            button="Explore More"
            imageUrl="/Careers/careers1.webm"
            cardsData={CardsData1}
            bgImage="/service/1.png"
          />
          <DevelopmentCard
            href="/services/UI-UX-Design/"
            title="UI/UX Design"
            subHeading="FROM <span style='color: #00AA71'>SURFACE DESIGN</span> TO CALCULATED SURFACE"
            description="Digital products fail without user insights and testing. Our Canadian digital marketing services help with user research, usability testing, and behavioral analytics to identify the right experiences that convert."
            button="Explore More"
            imageUrl="/Careers/careers.webm"
            textAlign="right"
            cardsData={CardsData2}
            bgImage="/service/2.png"
          />
          <DevelopmentCard
            href="/services/website-development/"
            title="Web Development"
            subHeading="FROM CODE TO <span style='color: #00AA71'>COMPETITIVE </span> EDGE"
            description="Your website should be a business engine, not a brochure. That's why our digital marketing services in Canada include developing high-performing, scalable, lightning-fast, and SEO-friendly websites to drive your business goals."
            button="Explore More"
            imageUrl="/service/3.webm"
            cardsData={CardsData3}
            bgImage="/service/3.png"
          />
          <DevelopmentCard
            href="/services/mobile-application/"
            title="Mobile App development"
            subHeading="FROM <span style='color: #00AA71'>STRATEGY</span> TO MOBILE SUCCESS"
            description="Digital marketing services in Canada include custom mobile app development services based on research-driven architecture to meet three mobile must-haves: simplicity, security, and scalability."
            button="Explore More"
            imageUrl="/service/service-sect6.webm"
            textAlign="right"
            cardsData={CardsData4}
            bgImage="/service/4.png"
          />
          <DevelopmentCard
            href="/services/seo/"
            title="Search Engine Optimization"
            subHeading="FROM <span style='color: #00AA71'>DATA DEPTHS</span> TO SEO Performance"
            description="SEO campaigns are typically trial and error, but our digital marketing services in Canada focus on clever keyword research, technical audits, and content strategy for long-term SEO success. "
            button="Explore More"
            imageUrl="/Careers/careers1.webm"
            cardsData={CardsData5}
            bgImage="/service/5.png"
          />
          <DevelopmentCard
            href="/services/SEM/"
            title="Search Engine Marketing"
            subHeading="FROM <span style='color: #00AA71'>AD SPEND</span> TO SMART RETURNS"
            imageUrl="/Careers/careers.webm"
            description="Paid campaigns need constant monitoring and tweaking. Our SEM campaigns will drive your search engine performance and offer you the best ROI among digital marketing services in Canada."
            button="Explore More"
            textAlign="right"
            cardsData={CardsData6}
            bgImage="/service/6.png"
          />
          <DevelopmentCard
            href="/services/app-store-optimization/"
            title="App Store Optimization"
            subHeading="<span style='color: #00AA71'>DATA GAPS</span> A Calculated Approach to App Growth"
            description="Apps must be scalable. The Canadian digital marketers can assist you in growing your visibility and downloads in app stores through ASO."
            button="Explore More"
            imageUrl="/service/3.webm"
            cardsData={CardsData7}
            bgImage="/service/7.png"
          />
          <DevelopmentCard
            href="/services/video-production/"
            title="Production"
            subHeading="<span style='color: #00AA71'>Visual Language</span> Influence Of Turning Research"
            description="Visual storytelling builds trust. Our production services complement our Canadian digital marketing services with media assets designed to improve your brand's perception in the market. "
            button="Explore More"
            textAlign="right"
            imageUrl="/service/service-sect6.webm"
            cardsData={CardsData8}
            bgImage="/service/8.png"
          />
          <DevelopmentCard
            href="/services/SMM/"
            title="Social Media Marketing"
            subHeading="FROM <span style='color: #00AA71'>SOCIAL COMPLEXITY</span> TO CLEAR RESULTS "
            description="Random posting won't cut it! Our social media experts create engagement-driven plans to improve conversions and ROI. Explore our digital marketing services in Canada."
            button="Explore More"
            imageUrl="/Careers/careers1.webm"
            cardsData={CardsData9}
            bgImage="/service/9.png"
          />
          <DevelopmentCard
            href="/services/digital-marketing/"
            title="Digital Marketing"
            subHeading="FROM <span style='color: #00AA71'>RESEARCH TO RESULTS</span> A FULL-CIRCLE APPROACH"
            description="Our digital marketing services in Canada combine branding, content, paid media, SEO and analytics into one integrated growth-driving ecosystem."
            button="Explore More"
            textAlign="right"
            imageUrl="/Careers/careers.webm"
            cardsData={CardsData10}
            bgImage="/service/10.png"
          />
        </div>
      </div>
    </>
  );
}
