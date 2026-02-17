import BlogHeader from "@/components/blog/blog-header";
import CaseStudySection2 from "@/components/case-study/Bize-Section-2";
import CaseStudySection3 from "@/components/case-study/Bize-Section-3";
import CaseStudySection4 from "@/components/case-study/Bize-Section-4";
import CaseStudySection7 from "@/components/case-study/Bize-Section-7";
import SecondSectionCase from "@/components/case-study/SecondSectionCase";
import ServicesLists from "@/components/case-study/ServicesList";
import ContactForm from "@/components/common/contact-form";
import { CaseData } from "@/data/CaseStudyHero";

export default function DolbyAtmos() {
  return (
    <div className="max-w-screen">
      <div className="w-screen p-4 rounded-[10px]">
        <BlogHeader
          description=""
          title="Union Properties"
          videoSrc="/Blog/hero-video.webm"
          join={false}
        />
      </div>

      <div className="xl:mt-20">
        <SecondSectionCase
          caseStudyBottomSection={true}
          data={CaseData}
          bottomVideo="/CaseStudies/Union/video1.webm"
          bottomCenterText="Xntric by LPS spearheaded the digital, social, and content strategy for Union Properties, redefining its brand identity and amplifying its market presence. By aligning its legacy with contemporary real estate trends, we ensured a seamless transition into a new era of growth."
          desciption="We focused on repositioning Union Properties as a forward-thinking real estate brand while preserving its established equity."
        />
      </div>

      <CaseStudySection2
        heading="A unified brand identity for a competitive market"
        sec2Desc="We developed a modernized brand identity aligned with contemporary market trends, supported by an engaging digital strategy to drive audience interaction. Our targeted content marketing campaigns enhanced visibility and credibility, while the seamless integration of digital assets across multiple platforms ensured a cohesive brand presence."
        overviewPara="Union Properties sought to refresh its brand identity and launch its latest flagship project in Motor City. Our strategy combined digital innovation with compelling storytelling, creating a seamless connection between the brand and its audience."
        image="/CaseStudies/Union/image1.png"
        reverse={true}
      />
      <ServicesLists
        textwitshadow="Challenges "
        heading="Challenges & How we overcame them"
        isButton={false}
        services={[
          "Brand perception shift",
          "Market competition",
          "Audience engagement",
        ]}
        content={[
          "Union Properties was perceived primarily as a legacy brand. We modernized its positioning with a strategic digital and content-driven approach.",
          "The Dubai real estate sector is highly competitive. We leveraged targeted digital campaigns and engaging social media content to enhance visibility.",
          "Bridging the gap between the brand and its audience was crucial. We developed interactive campaigns that resonated with potential investors and homeowners.",
        ]}
        isArrow={false}
        marginTop={true}
      />
      <CaseStudySection3
        image="/CaseStudies/Union/image1.png"
        image2="/CaseStudies/Union/image2.png"
        isBottom={true}
      />
      <CaseStudySection4
        cardData={[
          "Modernized brand identity",
          "Engaging digital strategy",
          "Targeted content marketing",
          "Integrated digital assets",
          "Increased registrations & awareness",
        ]}
      />
      <CaseStudySection7 />
      <ContactForm />
    </div>
  );
}
