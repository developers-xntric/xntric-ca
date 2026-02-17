import BlogHeader from "@/components/blog/blog-header";
import CaseStudySection2 from "@/components/case-study/Bize-Section-2";
import CaseStudySection3 from "@/components/case-study/Bize-Section-3";
import CaseStudySection4 from "@/components/case-study/Bize-Section-4";
import CaseStudySection7 from "@/components/case-study/Bize-Section-7";
import SecondSectionCase from "@/components/case-study/SecondSectionCase";
import ServicesLists from "@/components/case-study/ServicesList";
import ContactForm from "@/components/common/contact-form";
import { CaseData } from "@/data/CaseStudyHero";

export default function Delmonte() {
  return (
    <div className="max-w-screen">
      <div className="w-screen p-4 rounded-[10px]">
        <BlogHeader
          description=""
          title="Coffee Planet"
          videoSrc="/Blog/hero-video.webm"
          join={false}
        />
      </div>
      <SecondSectionCase
        caseStudyBottomSection={true}
        data={CaseData}
        bottomImage="/CaseStudies/Coffee/image1.png"
        bottomCenterText="Coffee Planet sought a bold digital transformation to enhance its brand narrative, engage a wider audience, and solidify its position as a premium coffee brand. Our goal was to craft a compelling marketing strategy that seamlessly integrated across all platforms."
        desciption="We revitalized Coffee Planet’s digital presence with a dynamic content strategy, high-quality production, and an engaging influencer program."
      />
      <CaseStudySection2
        heading="A New era of Coffee Branding"
        sec2Desc="We delivered a revitalized brand narrative with premium-quality content and strategic positioning, ensuring a strong and cohesive identity. Through a seamless digital transformation, we amplified Coffee Planet’s presence with engaging storytelling and impactful influencer collaborations. Our efforts led to an impressive reach of 3.7M+ impressions, 750K+ views, and 19K+ engagements, solidifying the brand’s digital footprint."
        overviewPara="With a focus on innovation and engagement, we reshaped Coffee Planet’s brand identity through social media management, influencer collaborations, and strategic storytelling. Additionally, we played a pivotal role in establishing Campus, an incubator for aspiring baristas, and Refresh, an office coffee solution—strengthening Coffee Planet’s holistic presence in the market."
        video="/CaseStudies/Coffee/video1.webm"
        reverse={true}
      />
      <ServicesLists
        textwitshadow="Challenges & How We Overcame Them"
        heading="Challenges & How We Overcame Them"
        isButton={false}
        services={[
          "Brand differentiation",
          "Digital expansion",
          "Community engagement",
        ]}
        content={[
          "The coffee market is saturated, making it crucial to establish a unique brand voice. We achieved this by crafting a compelling corporate manifesto and leveraging high-quality visual storytelling.",
          "Coffee Planet needed a stronger presence across digital platforms. We optimized content across channels, driving engagement and increasing brand awareness.",
          "To create a loyal customer base, we introduced influencer partnerships and interactive content, fostering deeper connections with coffee enthusiasts.",
        ]}
        isArrow={false}
        marginTop={true}
      />
      <CaseStudySection3
        video="/CaseStudies/Coffee/video2.webm"
        video2="/CaseStudies/Coffee/video3.webm"
        isBottom={true}
      />
      <CaseStudySection4
        cardData={[
          "A revitalized brand narrative",
          "A massive reach",
          "A seamless digital transformation",
          "The successful launch of Campus and Refresh",
          "Targeted paid campaigns",
        ]}
      />
      <CaseStudySection7 />
      <ContactForm />
    </div>
  );
}
