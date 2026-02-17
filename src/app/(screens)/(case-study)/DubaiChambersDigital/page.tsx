import BlogHeader from "@/components/blog/blog-header";
import CaseStudySection2 from "@/components/case-study/Bize-Section-2";
import CaseStudySection3 from "@/components/case-study/Bize-Section-3";
import CaseStudySection4 from "@/components/case-study/Bize-Section-4";
import CaseStudySection7 from "@/components/case-study/Bize-Section-7";
import SecondSectionCase from "@/components/case-study/SecondSectionCase";
import ServicesLists from "@/components/case-study/ServicesList";
import ContactForm from "@/components/common/contact-form";
import { CaseData } from "@/data/CaseStudyHero";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dubai Chambers Digital – A Project by Xntric",
  description: "Learn how Xntric transformed Dubai Chambers’ digital presence with innovative marketing, branding, and cutting-edge tech solutions.",
};
export default function DubaiChamberDigital() {
  return (
    <div className="max-w-screen">
     
      <div className="w-screen p-4 rounded-[10px]">
        <BlogHeader
          description=""
          title="Innovation in corporate engagement"
          videoSrc="/Blog/hero-video.webm"
          join={false}
        />
      </div>

      <SecondSectionCase
        caseStudyBottomSection={true}
        data={CaseData}
        bottomImage="/CaseStudies/DubaiChamberDigital/image1.png"
        bottomCenterText="By integrating data-driven insights and storytelling, Xntric by LPS crafted a narrative that not only amplified Dubai Chambers’ voice but also empowered entrepreneurs and businesses to engage with its services."
        desciption="Our efforts translated into increased digital engagement, higher conversion rates, and a more profound impact in the business ecosystem. Xntric by LPS curated content that highlighted Dubai’s business-friendly environment, showcased industry events, and promoted key economic initiatives, ensuring a seamless digital experience across all platforms."
      />

      <CaseStudySection2
        image="/CaseStudies/DubaiChamberDigital/image2.png"
        heading="Empowering businesses, elevating opportunities"
        sec2Desc="Through a combination of innovative branding, engaging social media campaigns, and strategic activations, Dubai Chambers strengthened its identity, fostering deeper connections with businesses, investors, and policymakers. "
        overviewPara="Dubai Chambers, a key business facilitator in the UAE, sought to enhance its corporate communication strategies with a cohesive and impactful digital presence. To achieve this, Xntric by LPS was entrusted as the lead agency for 360° social media, marketing communication, creative, and digital services. Through a combination of innovative branding, engaging social media campaigns, and strategic activations, Dubai Chambers"
        video=""
        reverse={true}
      />
      <ServicesLists
        textwitshadow="Our challenges"
        heading="How we overcame the challenges"
        isButton={false}
        services={[
          " Strategic social media revamp",
          "Content creation & brand storytelling",
          "Event marketing & activations",
          "Multi-Platform engagement & digital growth",
        ]}
        content={[
          "LPS developed a contemporary and unified social media identity for Dubai Chambers. By aligning visual storytelling with compelling narratives, we ensured an engaging and credible online presence.",
          "Xntric by LPS crafted high-quality, unique creatives tailored to Dubai Chambers' diverse audience. We designed impactful messaging that resonated with businesses, government entities, and entrepreneurs. Additionally, we integrated community-driven storytelling to strengthen engagement.",
          "We covered 25+ events, amplifying Dubai Chambers’ reach across major business forums. Apart from designing dynamic event campaigns, ensuring maximum visibility and participation, we also executed on-ground and digital activations, enhancing stakeholder interactions.",
          "We managed 200+ campaigns, each optimized for performance and brand alignment. By leveraging data-driven strategies, we boosted brand engagement and visibility. We delivered 800+ average conversions per campaign, driving tangible business impact.",
        ]}
        isArrow={false}
        marginTop={true}
      />
      <CaseStudySection3
        image="/CaseStudies/DubaiChamberDigital/image3.png"
        image2="/CaseStudies/DubaiChamberDigital/image4.png"
        isBottom={true}
      />
      <CaseStudySection4
        cardData={[
          "Strategic social media revamp",
          "Content creation & brand storytelling",
          "Event marketing & activations",
          "Multi-Platform engagement",
          "Digital growth",
        ]}
      />
      <CaseStudySection7 />
      <ContactForm />
    </div>
  );
}
