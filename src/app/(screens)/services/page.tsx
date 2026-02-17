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
                <h1 className="text-4xl lg:text-7xl xl:text-[100px] 2xl:text-[90px] 5xl:text-[120px] font-bold text-white uppercase leading-10">
                  360° Digital
                </h1>
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
            description="A strong brand is built on understanding. We uncover hidden opportunities through research and craft digital identities that speak directly to your audience turning insights into brands that perform and endure."
            button="Explore More"
            imageUrl="/Careers/careers1.webm"
            cardsData={CardsData1}
            bgImage="/service/1.png"
          />
          <DevelopmentCard
            href="/services/UI-UX-Design/"
            title="UI/UX Design"
            subHeading="FROM <span style='color: #00AA71'>SURFACE DESIGN</span> TO STRATEGIC IMPACT"
            description="Too many digital products rely on trends, not truths. We go beyond the surfaceevery pixel, flow, and feature is grounded in real user research and rigorous testing. No more wasted effort on what “might” work. We validate, refine, and build experiences that solve real problems and drive measurable growth."
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
            description="Too many sites are just digital brochures. We build digital engines. Every click, scroll, and transition is designed to perform optimized through research, testing, and iterative thinking. No more “maybe this works.” We engineer with precision to deliver measurable business impact."
            button="Explore More"
            imageUrl="/service/3.webm"
            cardsData={CardsData3}
            bgImage="/service/3.png"
          />
          <DevelopmentCard
            href="/services/mobile-application/"
            title="Mobile App development"
            subHeading="FROM <span style='color: #00AA71'>STRATEGY</span> TO MOBILE SUCCESS"
            description="Mobile apps need clarity and scale. We turn deep research and industry expertise into mobile solutions that secure data, empower teams, and transform complex operations into streamlined workflows."
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
            description="Too many SEO strategies rely on guesswork or surface-level fixes. We dig deep researching your market, analyzing your audience, and backing every decision with solid data. This is how we build SEO campaigns that don’t just rank but drive real, measurable growth. "
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
            description="Too many campaigns burn budgets chasing the wrong clicks. We cut through the noise every dollar is spent with intent, guided by search trends, competitive analysis, and continuous testing. No more hoping for results. We engineer SEM campaigns that drive real business outcomes."
            button="Explore More"
            textAlign="right"
            cardsData={CardsData6}
            bgImage="/service/6.png"
          />
          <DevelopmentCard
            href="/services/app-store-optimization/"
            title="App Store Optimization"
            subHeading="FROM <span style='color: #00AA71'>DATA GAPS</span> TO STRATEGIC APP GROWTH"
            description="Too many apps rely on guesswork and generic tactics that fail to move the needle. We’ve seen it all poor keyword targeting, weak conversion, and stagnant downloads. Our 360° approach starts with deep research and analysis."
            button="Explore More"
            imageUrl="/service/3.webm"
            cardsData={CardsData7}
            bgImage="/service/7.png"
          />
          <DevelopmentCard
            href="/services/video-production/"
            title="Production"
            subHeading="FROM <span style='color: #00AA71'>RESEARCH INSIGHTS</span> TO DIGITAL SUCCESS"
            description="Too many digital products launch without a solid foundation. We dive deep uncovering market needs, analyzing user behavior, and validating concepts before building. The result? Products that don’t just look good but deliver measurable growth and lasting impact. "
            button="Explore More"
            textAlign="right"
            imageUrl="/service/service-sect6.webm"
            cardsData={CardsData8}
            bgImage="/service/8.png"
          />
          <DevelopmentCard
            href="/services/SMM/"
            title="Social Media Marketing"
            subHeading="ROM <span style='color: #00AA71'>SOCIAL COMPLEXITY</span> TO CLEAR RESULTS "
            description="Too many brands post without purpose. We set ourselves apart by researching your market inside and out, analyzing audience behavior, and delivering tailored social strategies that build loyalty and drive ROI. Our full-circle process turns social media from noise into your strongest growth channel."
            button="Explore More"
            imageUrl="/Careers/careers1.webm"
            cardsData={CardsData9}
            bgImage="/service/9.png"
          />
          <DevelopmentCard
            href="/services/digital-marketing/"
            title="Digital Marketing"
            subHeading="FROM <span style='color: #00AA71'>RESEARCH TO RESULTS</span> A FULL-CIRCLE APPROACH"
            description="Many digital campaigns miss the mark because they skip the groundwork. We set ourselves apart by combining rigorous research with smart strategies to build digital products that deliver measurable outcomes."
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
